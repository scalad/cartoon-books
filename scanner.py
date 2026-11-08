#!/usr/bin/env python3
"""
绘本 & 视频 数据扫描器
- 绘本 → books.json
- 视频 → videos.json
"""

import os
import json
import re
from pathlib import Path
from collections import defaultdict

# ======================== 配置 ========================
_CONFIG_PATH = Path(__file__).parent / "config.json"
if not _CONFIG_PATH.exists():
    print("[错误] 找不到配置文件 config.json")
    exit(1)

_config = json.loads(_CONFIG_PATH.read_text(encoding="utf-8"))
BOOKS_DIR = Path(_config["booksDir"])
VIDEOS_DIR = Path(_config.get("videosDir", "")) if _config.get("videosDir") else None

BOOKS_OUTPUT = Path(__file__).parent / "books.json"
VIDEOS_OUTPUT = Path(__file__).parent / "videos.json"
# =====================================================


# =============== 工具函数 ================
def parse_timestamp(ts_str: str) -> float:
    """将时间字符串 (如 1:40.667) 转换为秒数"""
    ts_str = ts_str.strip()
    parts = ts_str.split(":")
    if len(parts) == 2:
        minutes, seconds = parts
        return float(minutes) * 60 + float(seconds)
    return float(ts_str)


# =============== 绘本扫描 ================
def extract_series(book_folder_name: str):
    """从文件夹名提取编号和标题，并推断系列分类"""
    match = re.match(r'^(\d+)_(.+)$', book_folder_name)
    if not match:
        return "", book_folder_name, "其他"

    book_id = match.group(1)
    full_title = match.group(2)

    series_rules = [
        ("凯迪克金奖", "凯迪克金奖"),
        ("沃野童书", "沃野童书"),
        ("车车趣味故事书", "车车趣味故事书"),
        ("宝宝情商培养", "宝宝情商培养"),
        ("嘻哈农场", "嘻哈农场"),
        ("幼儿自我保护", "幼儿自我保护"),
        ("大蝴蝶小姐姐", "大蝴蝶小姐姐"),
        ("二十四节气旅行", "二十四节气旅行"),
        ("宝宝健康成长", "宝宝健康成长"),
        ("中国民间童话", "中国民间童话"),
        ("小猫汤米", "小猫汤米"),
        ("心理成长启蒙", "心理成长启蒙童话"),
        ("幼儿自理能力", "幼儿自理能力启蒙"),
        ("交通工具认知", "交通工具认知"),
        ("小恐龙哈迪", "小恐龙哈迪"),
        ("花婆婆·方素珍", "花婆婆·方素珍原创绘本馆"),
        ("小熊帕丁顿", "小熊帕丁顿"),
        ("彼得免经典", "彼得兔经典故事集"),
        ("沃尔特·克兰", "沃尔特·克兰故事集"),
        ("植物大战僵尸", "植物大战僵尸吉品爆笑漫画"),
        ("乐高节日", "乐高节日绘本"),
        ("爆笑虫子", "爆笑虫子拼音故事书"),
        ("冰箱家族", "冰箱家族"),
        ("童眼认标志", "童眼认标志"),
        ("童眼认兵器", "童眼认兵器"),
        ("童眼认动物", "童眼认动物"),
        ("儿童数学启蒙", "儿童数学启蒙图画书"),
        ("生命的故事", "生命的故事"),
        ("教孩子", "财商教育绘本"),
        ("奇妙的人体", "奇妙的人体"),
        ("认识自然", "认识自然"),
        ("认识动物特征", "认识动物特征"),
        ("纯美珍藏", "经典名著绘本"),
        ("巴巴爸爸", "巴巴爸爸"),
        ("维尼吉亚", "维尼吉亚作品集"),
        ("绘声绘色", "绘声绘色精选"),
        ("音乐在我的口袋里", "音乐绘本"),
        ("吉米", "吉米故事"),
        ("培迪", "培迪故事"),
        ("鲍比", "鲍比故事"),
        ("小鹿快闪", "小鹿快闪"),
        ("强盗老鼠", "强盗老鼠"),
        ("我会非常非常小心的", "安全绘本"),
        ("生活习惯", "生活习惯"),
    ]

    detected_series = "其他"
    display_title = full_title

    for keyword, series_name in series_rules:
        if keyword in full_title:
            detected_series = series_name
            prefix_match = re.match(r'^.+?\s+(.+)$', full_title)
            if prefix_match:
                display_title = prefix_match.group(1)
            break

    return book_id, display_title, detected_series


def scan_book(book_path: Path) -> dict | None:
    if not book_path.is_dir():
        return None

    try:
        rel_path = book_path.relative_to(BOOKS_DIR)
    except ValueError:
        rel_path = Path(book_path.name)

    rel_path_str = str(rel_path).replace("\\", "/")
    folder_name = book_path.name
    book_id, title, series = extract_series(folder_name)

    images = []
    cover = None

    jpg_files = sorted(
        [f for f in book_path.glob("*.jpg")],
        key=lambda f: f.name.lower()
    )

    for jpg in jpg_files:
        name_lower = jpg.name.lower()
        if name_lower == "封面.jpg":
            cover = f"{rel_path_str}/{jpg.name}"
        elif name_lower.endswith(".jpg"):
            images.append({
                "file": f"{rel_path_str}/{jpg.name}",
                "name": jpg.stem,
            })

    if not images:
        return None

    if cover is None and images:
        cover = images[0]["file"]

    mp3_files = list(book_path.glob("*.mp3"))
    audio = f"{rel_path_str}/{mp3_files[0].name}" if mp3_files else None

    timeline = []
    time_files = list(book_path.glob("*_时间.txt"))
    if time_files:
        tf = time_files[0]
        try:
            with open(tf, "r", encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if "," not in line:
                        continue
                    parts = line.split(",")
                    if len(parts) >= 2:
                        img_name = parts[0].strip()
                        time_range = parts[1].strip()
                        tr_parts = time_range.split("-")
                        if len(tr_parts) == 2:
                            timeline.append({
                                "image": img_name,
                                "start": parse_timestamp(tr_parts[0]),
                                "end": parse_timestamp(tr_parts[1]),
                            })
        except Exception as e:
            print(f"  ⚠️ 读取时间轴失败 {tf.name}: {e}")

    return {
        "id": book_id,
        "title": title,
        "series": series,
        "folder": folder_name,
        "cover": cover,
        "pageCount": len(images),
        "images": images,
        "audio": audio,
        "timeline": timeline,
        "duration": timeline[-1]["end"] if timeline else 0,
        "hasAudio": audio is not None,
    }


def scan_books_main():
    print("=" * 60)
    print("📚 绘本数据扫描")
    print(f"📂 扫描目录: {BOOKS_DIR}")
    print("=" * 60)

    if not BOOKS_DIR.exists():
        print(f"⚠️ 绘本目录不存在: {BOOKS_DIR}，跳过绘本扫描")
        return 0, 0

    books = []
    series_stats = defaultdict(int)

    # 若视频目录位于绘本目录下，自动跳过
    skip_paths = set()
    try:
        if VIDEOS_DIR and VIDEOS_DIR.exists():
            vr = VIDEOS_DIR.resolve()
            br = BOOKS_DIR.resolve()
            if str(vr).startswith(str(br)):
                skip_paths.add(vr)
                print(f"   (自动跳过视频目录: {vr})")
    except Exception:
        pass

    def _should_skip(p: Path) -> bool:
        try:
            pr = p.resolve()
        except Exception:
            pr = p
        return pr in skip_paths

    all_book_dirs = []
    for top_dir in sorted([d for d in BOOKS_DIR.iterdir() if d.is_dir()]):
        if _should_skip(top_dir):
            continue
        has_jpg = list(top_dir.glob("*.jpg"))
        if has_jpg:
            all_book_dirs.append(top_dir)
        else:
            for sub_dir in sorted([d for d in top_dir.iterdir() if d.is_dir()]):
                if _should_skip(sub_dir):
                    continue
                all_book_dirs.append(sub_dir)

    total = len(all_book_dirs)
    for idx, subdir in enumerate(all_book_dirs, 1):
        if idx % 50 == 0 or idx == total:
            print(f"  [{idx}/{total}] 扫描中...")
        book = scan_book(subdir)
        if book:
            books.append(book)
            series_stats[book["series"]] += 1

    print(f"\n✅ 绘本扫描完成！共 {len(books)} 本")
    print("📊 系列分布:")
    for s, c in sorted(series_stats.items(), key=lambda x: -x[1]):
        print(f"   {s}: {c} 本")

    output_data = {
        "meta": {
            "totalBooks": len(books),
            "totalSeries": len(series_stats),
            "scanPath": str(BOOKS_DIR),
            "generatedAt": __import__("datetime").datetime.now().isoformat(),
        },
        "series": dict(series_stats),
        "books": books,
    }

    with open(BOOKS_OUTPUT, "w", encoding="utf-8") as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)

    print(f"\n💾 已保存: {BOOKS_OUTPUT}")
    print(f"   大小: {BOOKS_OUTPUT.stat().st_size / 1024:.1f} KB")
    return len(books), len(series_stats)


# =============== 视频扫描 ================
# 文件名常见后缀（按顺序剥离）
VIDEO_TITLE_STRIP_SUFFIXES = [
    "-版本视频-无字幕",
    "-版本视频带字幕",
    "-版本视频(无字幕)",
    "-版本视频",
    "(II)",
    "（II）",
]

# 顶层系列目录名 → 友好显示名
VIDEO_SERIES_CLEAN = [
    ("牛津乐读英语快乐阅读", "牛津快乐阅读"),
    ("牛津乐读英语悦读时光", "牛津悦读时光"),
    ("牛津词汇乐园", "牛津词汇乐园"),
    ("牛津HR修改", "牛津HR"),
]


def clean_series_name(top_folder_name: str) -> str:
    """把顶层文件夹名 → 干净的品牌基础名（不含季度，季度在文件级别判定）"""
    name = top_folder_name
    # 去掉括号及内部（如 "(视频34集)"）
    name = re.sub(r"[\(（][^\)）]*[\)）]", "", name).strip()
    # 去掉末尾日期（12.17 / 11.21 等）
    name = re.sub(r"\s*\d+[\.\-]\d+\s*$", "", name).strip()
    # 去掉"XX集/XX本"后缀
    name = re.sub(r"\s*\d+[集本].*$", "", name).strip()
    # 去掉季度范围（第一至六季 / 第一到六季）
    name = re.sub(r"\s*第[一二三四五六七八九十]+(至|到)[一二三四五六七八九十]+季\s*", "", name).strip()
    # 去掉单独的季度（第X季），改由文件名判定
    name = re.sub(r"\s*第[一二三四五六七八九十]+季\s*", "", name).strip()
    # 去掉末尾孤立的"修改"后数字
    name = re.sub(r"修改\d*\s*$", "", name).strip()
    # 品牌替换
    base = None
    for kw, clean in VIDEO_SERIES_CLEAN:
        if kw in name:
            base = name.replace(kw, clean)
            break
    if base is None:
        base = name
    base = base.strip(" ·-")
    return base or top_folder_name


def clean_video_title(filename: str, series_keyword: str | None = None) -> str:
    """清理视频文件名 → 展示标题"""
    title = Path(filename).stem
    for suf in VIDEO_TITLE_STRIP_SUFFIXES:
        if title.endswith(suf):
            title = title[: -len(suf)].rstrip()
    # 去掉系列前缀关键字（如 "牛津乐读英语快乐阅读 第一季"）
    if series_keyword:
        # 删除包含 series_keyword + 可能的 "第X季" 前缀
        title = re.sub(rf"^{re.escape(series_keyword)}[^A-Za-z0-9]*(第[一二三四五六七八九十]+季)?\s*", "", title)
    # 删掉剩余的序号点前缀如 "1." → 留着"1.xxx"也挺好
    title = title.strip("- 　")
    return title or filename


def detect_season_from_name(name: str) -> str | None:
    m = re.search(r"(第[一二三四五六七八九十]+季)", name)
    return m.group(1) if m else None


def scan_videos_main():
    if VIDEOS_DIR is None or not VIDEOS_DIR.exists():
        print("\n⚠️  跳过视频扫描（videosDir 未配置或不存在）")
        return 0, 0

    print("\n" + "=" * 60)
    print("🎬 视频数据扫描")
    print(f"📂 扫描目录: {VIDEOS_DIR}")
    print("=" * 60)

    videos = []
    series_stats = defaultdict(int)

    top_dirs = sorted([d for d in VIDEOS_DIR.iterdir() if d.is_dir()])
    vid_counter = 0

    for top in top_dirs:
        top_name = top.name
        base_series = clean_series_name(top_name)
        # 品牌关键字用于清洗标题
        brand_kw = None
        for kw, _ in VIDEO_SERIES_CLEAN:
            if kw in top_name:
                brand_kw = kw
                break

        # 递归收集所有 mp4（不限深度）
        mp4_files = sorted(top.rglob("*.mp4"), key=lambda f: (str(f.parent), f.name.lower()))

        for mp4 in mp4_files:
            try:
                rel_path = mp4.relative_to(VIDEOS_DIR)
            except ValueError:
                rel_path = Path(mp4.name)
            rel_str = str(rel_path).replace("\\", "/")

            # 从文件名自动识别 "第X季"，作为更细粒度系列
            season = detect_season_from_name(mp4.name) or detect_season_from_name(top_name)
            if season:
                series_name = f"{base_series} · {season}"
            else:
                series_name = base_series

            # 标题
            title = clean_video_title(mp4.name, brand_kw)
            # 去掉文件名末尾可能的 "(II)" "（II）"
            title = re.sub(r"\s*[\(（]II[\)）]\s*$", " (II)", title).strip()

            vid_counter += 1
            videos.append({
                "id": str(vid_counter),
                "title": title,
                "series": series_name,
                "topFolder": top_name,
                "folder": f"video-{vid_counter}",  # 唯一键（收藏/历史用）
                "file": f"videos/{rel_str}",
                "fileName": mp4.name,
                "relPath": rel_str,
                "sizeMB": round(mp4.stat().st_size / 1024 / 1024, 1),
            })
            series_stats[series_name] += 1

    print(f"\n✅ 视频扫描完成！共 {len(videos)} 个")
    print("📊 系列分布:")
    for s, c in sorted(series_stats.items(), key=lambda x: -x[1]):
        print(f"   {s}: {c} 个")

    output_data = {
        "meta": {
            "totalVideos": len(videos),
            "totalSeries": len(series_stats),
            "scanPath": str(VIDEOS_DIR),
            "generatedAt": __import__("datetime").datetime.now().isoformat(),
        },
        "series": dict(series_stats),
        "videos": videos,
    }

    with open(VIDEOS_OUTPUT, "w", encoding="utf-8") as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)

    print(f"\n💾 已保存: {VIDEOS_OUTPUT}")
    print(f"   大小: {VIDEOS_OUTPUT.stat().st_size / 1024:.1f} KB")
    return len(videos), len(series_stats)


# =============== Main ================
def main():
    import sys
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

    total_books, book_series = scan_books_main()
    total_videos, video_series = scan_videos_main()

    print("\n" + "=" * 60)
    print("🎉 全部完成")
    print(f"   📚 绘本: {total_books} 本 / {book_series} 个系列")
    print(f"   🎬 视频: {total_videos} 个 / {video_series} 个系列")
    print("=" * 60)


if __name__ == "__main__":
    main()
