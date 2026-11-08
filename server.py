# -*- coding: utf-8 -*-
import http.server
import socketserver
import json
import os
import shutil
import sys
from urllib.parse import unquote

def _parse_http_range(range_header, file_size):
    """解析 Range: bytes=...，返回 (start, end) 含端点；非法则返回 None。"""
    if not range_header or file_size <= 0:
        return None
    range_header = range_header.strip()
    if not range_header.startswith("bytes="):
        return None
    spec = range_header[6:].strip()
    if "," in spec:
        spec = spec.split(",", 1)[0].strip()
    dash = spec.find("-")
    if dash < 0:
        return None
    start_s, end_s = spec[:dash], spec[dash + 1 :]
    try:
        if start_s == "":
            suffix_len = int(end_s)
            if suffix_len <= 0:
                return None
            start = max(0, file_size - suffix_len)
            end = file_size - 1
            return (start, end)
        start = int(start_s)
        if end_s == "":
            end = file_size - 1
        else:
            end = int(end_s)
    except ValueError:
        return None
    if start >= file_size or start < 0:
        return None
    end = min(end, file_size - 1)
    if start > end:
        return None
    return (start, end)

PORT = 8091
BOOKS_DIR = r"D:\绘本"

print("=" * 50)
print("绘本服务器启动中...")
print(f"端口: {PORT}")
print(f"绘本目录: {BOOKS_DIR}")
print(f"当前目录: {os.getcwd()}")
print("=" * 50)

def _parse_min_sec_to_seconds(s):
    """将「分钟:秒(.毫秒)」转为总秒数，如 0:04.370 -> 4.37。"""
    s = s.strip()
    if not s:
        raise ValueError("empty time")
    parts = s.split(":")
    if len(parts) == 2:
        minutes = int(parts[0])
        seconds = float(parts[1])
        return minutes * 60 + seconds
    if len(parts) == 3:
        return int(parts[0]) * 3600 + int(parts[1]) * 60 + float(parts[2])
    raise ValueError("bad time format")


def _parse_structured_timeline_line(line):
    """
    解析一行：01.jpg,0:00.000-0:04.370
    时间为「分钟:秒.毫秒」，返回 (文件名, 起始秒)。
    """
    line = line.strip()
    if not line or line.startswith("#"):
        return None
    if "," not in line or "-" not in line:
        return None
    name, rest = line.split(",", 1)
    name = name.strip()
    rest = rest.strip()
    # 只按第一个 '-' 分割区间，避免文件名中含 '-'（少见）
    dash = rest.find("-")
    if dash < 0:
        return None
    start_s = rest[:dash].strip()
    end_s = rest[dash + 1 :].strip()
    if not name or not start_s or not end_s:
        return None
    try:
        start_sec = _parse_min_sec_to_seconds(start_s)
        _parse_min_sec_to_seconds(end_s)  # 校验区间合法
    except (ValueError, TypeError):
        return None
    return (name, start_sec)


def _resolve_book_filename(requested, folder_files):
    """在文件夹中按大小写不敏感匹配真实文件名。"""
    for f in folder_files:
        if f.lower() == requested.lower():
            return f
    return None


def _read_structured_timeline(book_path, folder_files):
    """
    从 txt / 时间轴* / timeline* 中读取「文件名,开始-结束」格式。
    返回 (pages, page_times) 或 None。
    """
    candidates = []
    for f in folder_files:
        low = f.lower()
        if f.startswith("时间轴") or low.startswith("timeline"):
            candidates.append((0, f))
        elif low.endswith(".txt"):
            candidates.append((1, f))
    candidates.sort(key=lambda x: (x[0], x[1]))

    for _, fname in candidates:
        fp = os.path.join(book_path, fname)
        if not os.path.isfile(fp):
            continue
        pages = []
        times = []
        try:
            with open(fp, "r", encoding="utf-8-sig") as tf:
                for raw in tf:
                    parsed = _parse_structured_timeline_line(raw)
                    if not parsed:
                        continue
                    req_name, start_sec = parsed
                    real = _resolve_book_filename(req_name, folder_files)
                    if not real:
                        continue
                    low = real.lower()
                    if not low.endswith((".jpg", ".jpeg", ".png", ".gif")):
                        continue
                    pages.append(real)
                    times.append(start_sec)
        except OSError:
            continue
        if pages and len(pages) == len(times):
            return (pages, times)
    return None


def _read_legacy_timeline_lines(timeline_file):
    """旧格式：每行一个时间（或 h:m:s / m:s），按行顺序对应页。"""
    page_times = []
    try:
        with open(timeline_file, "r", encoding="utf-8-sig") as tf:
            for line in tf:
                line = line.strip()
                if not line or line.startswith("#"):
                    continue
                if _parse_structured_timeline_line(line):
                    continue
                try:
                    if ":" in line:
                        parts = line.split(":")
                        if len(parts) == 3:
                            seconds = int(parts[0]) * 3600 + int(parts[1]) * 60 + float(parts[2])
                        elif len(parts) == 2:
                            seconds = int(parts[0]) * 60 + float(parts[1])
                        else:
                            continue
                    else:
                        minutes = float(line)
                        seconds = minutes * 60
                    page_times.append(seconds)
                except (ValueError, TypeError):
                    pass
    except OSError:
        pass
    return page_times


MIME_TYPES = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.mp3': 'audio/mpeg',
    '.m4a': 'audio/mp4',
    '.wav': 'audio/wav',
    '.ogg': 'audio/ogg',
    '.aac': 'audio/aac',
    '.flac': 'audio/flac',
    '.wma': 'audio/x-ms-wma',
    '.opus': 'audio/opus',
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json'
}

def scan_books():
    categories = []
    if not os.path.exists(BOOKS_DIR):
        print(f"错误: 绘本目录不存在: {BOOKS_DIR}")
        return categories
    
    for category_name in os.listdir(BOOKS_DIR):
        category_path = os.path.join(BOOKS_DIR, category_name)
        if os.path.isdir(category_path):
            books = []
            for book_folder in os.listdir(category_path):
                book_path = os.path.join(category_path, book_folder)
                if os.path.isdir(book_path):
                    folder_files = os.listdir(book_path)
                    images = []
                    cover = None
                    audio_files = []
                    
                    for f in folder_files:
                        low = f.lower()
                        if low.endswith(('.jpg', '.jpeg', '.png', '.gif')):
                            if f == '封面.jpg' or f == '封面.png':
                                cover = f
                            else:
                                images.append(f)
                        elif low.endswith(('.mp3', '.m4a', '.wav', '.ogg', '.aac', '.flac', '.wma', '.opus')):
                            audio_files.append(f)
                    
                    images.sort()
                    audio_files.sort()
                    audio = audio_files[0] if audio_files else None
                    
                    if not cover and images:
                        cover = images[0]

                    structured = _read_structured_timeline(book_path, folder_files)
                    if structured:
                        pages, page_times = structured
                        cover = pages[0]
                        images = list(pages)
                    else:
                        pages = []
                        if cover:
                            pages.append(cover)
                        for img in images:
                            if img != cover:
                                pages.append(img)

                        page_times = []
                        for f in folder_files:
                            if f.startswith("时间轴") or f.lower().startswith("timeline"):
                                timeline_file = os.path.join(book_path, f)
                                page_times = _read_legacy_timeline_lines(timeline_file)
                                break

                    if len(page_times) < len(pages):
                        while len(page_times) < len(pages):
                            if page_times:
                                # 保持与最后一个时间点相同的单位（秒）
                                page_times.append(page_times[-1] + 10)
                            else:
                                # 第一个时间点默认为 10 秒
                                page_times.append(10)
                    
                    book_info = {
                        'name': book_folder,
                        'path': os.path.join(category_name, book_folder).replace('\\', '/'),
                        'cover': cover,
                        'images': images,
                        'pages': pages,
                        'audio': audio,
                        'pageTimes': page_times
                    }
                    books.append(book_info)
            
            categories.append({'name': category_name, 'books': books})
    
    return categories

class Handler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        print(f"[{self.address_string()}] {format % args}")

    def _serve_static_file(self, full_path, mime_type):
        """带 Content-Length 与 Range 支持，便于浏览器解析音频/视频时长。"""
        try:
            file_size = os.path.getsize(full_path)
        except OSError:
            self.send_error(404)
            return
        range_header = self.headers.get("Range")
        parsed = _parse_http_range(range_header, file_size) if range_header else None

        if parsed is not None:
            start, end = parsed
            length = end - start + 1
            self.send_response(206)
            self.send_header("Content-type", mime_type)
            self.send_header("Content-Length", str(length))
            self.send_header("Content-Range", f"bytes {start}-{end}/{file_size}")
            self.send_header("Accept-Ranges", "bytes")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.send_header("Access-Control-Allow-Headers", "Range")
            self.end_headers()
            try:
                with open(full_path, "rb") as f:
                    f.seek(start)
                    remaining = length
                    chunk = 1024 * 64
                    while remaining > 0:
                        n = min(chunk, remaining)
                        buf = f.read(n)
                        if not buf:
                            break
                        self.wfile.write(buf)
                        remaining -= len(buf)
            except (BrokenPipeError, ConnectionResetError, OSError):
                pass
            return

        self.send_response(200)
        self.send_header("Content-type", mime_type)
        self.send_header("Content-Length", str(file_size))
        self.send_header("Accept-Ranges", "bytes")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        try:
            with open(full_path, "rb") as f:
                shutil.copyfileobj(f, self.wfile)
        except (BrokenPipeError, ConnectionResetError, OSError):
            pass

    def do_HEAD(self):
        try:
            if self.path == "/" or self.path == "/index.html":
                self.send_response(200)
                self.send_header("Content-type", "text/html; charset=utf-8")
                self.end_headers()
                return
            if self.path.startswith("/reader.html"):
                self.send_response(200)
                self.send_header("Content-type", "text/html; charset=utf-8")
                self.end_headers()
                return
            if self.path.startswith("/"):
                file_path = self.path[1:]
                file_path = unquote(file_path)
                full_path = os.path.join(BOOKS_DIR, file_path)
                if os.path.isfile(full_path):
                    ext = os.path.splitext(full_path)[1].lower()
                    mime_type = MIME_TYPES.get(ext, "application/octet-stream")
                    file_size = os.path.getsize(full_path)
                    self.send_response(200)
                    self.send_header("Content-type", mime_type)
                    self.send_header("Content-Length", str(file_size))
                    self.send_header("Accept-Ranges", "bytes")
                    self.send_header("Access-Control-Allow-Origin", "*")
                    self.end_headers()
                    return
                root_path = os.path.join(os.getcwd(), file_path)
                if os.path.isfile(root_path):
                    ext = os.path.splitext(root_path)[1].lower()
                    mime_type = MIME_TYPES.get(ext, "application/octet-stream")
                    file_size = os.path.getsize(root_path)
                    self.send_response(200)
                    self.send_header("Content-type", mime_type)
                    self.send_header("Content-Length", str(file_size))
                    self.send_header("Accept-Ranges", "bytes")
                    self.send_header("Access-Control-Allow-Origin", "*")
                    self.end_headers()
                    return
            self.send_error(404)
        except Exception:
            self.send_error(500)

    def do_GET(self):
        try:
            if self.path == '/api/books':
                self.send_response(200)
                self.send_header('Content-type', 'application/json; charset=utf-8')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                books = scan_books()
                self.wfile.write(json.dumps(books, ensure_ascii=False).encode('utf-8'))
                print(f"已发送绘本数据: {len(books)} 个类别")
            elif self.path == '/' or self.path == '/index.html':
                self.send_response(200)
                self.send_header('Content-type', 'text/html; charset=utf-8')
                self.end_headers()
                with open('index.html', 'rb') as f:
                    self.wfile.write(f.read())
            elif self.path.startswith('/reader.html'):
                self.send_response(200)
                self.send_header('Content-type', 'text/html; charset=utf-8')
                self.end_headers()
                with open('reader.html', 'rb') as f:
                    self.wfile.write(f.read())
            elif self.path.startswith('/'):
                file_path = self.path[1:]
                file_path = unquote(file_path)
                full_path = os.path.join(BOOKS_DIR, file_path)
                
                if os.path.exists(full_path) and os.path.isfile(full_path):
                    ext = os.path.splitext(full_path)[1].lower()
                    mime_type = MIME_TYPES.get(ext, "application/octet-stream")
                    self._serve_static_file(full_path, mime_type)
                else:
                    # 检查根目录下是否存在该文件
                    root_path = os.path.join(os.getcwd(), file_path)
                    if os.path.exists(root_path) and os.path.isfile(root_path):
                        ext = os.path.splitext(root_path)[1].lower()
                        mime_type = MIME_TYPES.get(ext, "application/octet-stream")
                        self._serve_static_file(root_path, mime_type)
                    else:
                        self.send_response(404)
                        self.send_header('Content-type', 'text/plain; charset=utf-8')
                        self.end_headers()
                        self.wfile.write(f'404 Not Found: {file_path}'.encode('utf-8'))
            else:
                super().do_GET()
        except Exception as e:
            print(f"错误: {e}")
            self.send_response(500)
            self.send_header('Content-type', 'text/plain; charset=utf-8')
            self.end_headers()
            self.wfile.write(f'Error: {e}'.encode('utf-8'))

if __name__ == '__main__':
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"\n服务器已启动: http://localhost:{PORT}")
            print("按 Ctrl+C 停止服务器\n")
            httpd.serve_forever()
    except OSError as e:
        if e.errno == 10048:
            print(f"\n错误: 端口 {PORT} 已被占用")
            print("请关闭其他使用该端口的程序，或修改 server.py 中的 PORT 值")
        else:
            print(f"\n启动错误: {e}")
        sys.exit(1)
    except KeyboardInterrupt:
        print("\n服务器已停止")
