/**
 * Picture Book World - Local Dev Server
 * 支持绘本 + 视频
 *
 * URL 路由规则：
 *   /videos/*  → 视频目录 (videosDir)
 *   其它       → 先查 APP_DIR，再查绘本目录 (booksDir)
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

// ════════════════════════════════════════
// ⚙️ 从 config.json 读取配置
// ════════════════════════════════════════
const APP_DIR = path.resolve(__dirname);
let config;
try {
    config = JSON.parse(fs.readFileSync(path.join(APP_DIR, 'config.json'), 'utf-8'));
} catch (e) {
    console.error('[错误] 无法读取配置文件 config.json');
    process.exit(1);
}
const PORT = process.env.PORT || config.port || 3000;
const BOOKS_BASE = path.resolve(config.booksDir);
const VIDEOS_BASE = config.videosDir ? path.resolve(config.videosDir) : null;
// ════════════════════════════════════════

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.mp3': 'audio/mpeg',
    '.m4a': 'audio/mp4',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.mov': 'video/quicktime',
    '.m4v': 'video/x-m4v',
    '.wav': 'audio/wav',
    '.ogg': 'audio/ogg',
    '.ico': 'image/x-icon',
    '.woff2': 'font/woff2',
    '.woff': 'font/woff',
    '.ttf': 'font/ttf',
    '.map': 'application/json',
};

function getMimeType(filepath) {
    const ext = path.extname(filepath).toLowerCase();
    return MIME_TYPES[ext] || 'application/octet-stream';
}

// 大文件流（支持 Range，视频播放必须）
function serveStream(req, res, filePath) {
    const stat = fs.statSync(filePath);
    const total = stat.size;
    const mime = getMimeType(filePath);
    const range = req.headers.range;

    const headers = {
        'Accept-Ranges': 'bytes',
        'Content-Type': mime,
        'Cache-Control': 'public, max-age=3600',
    };

    if (range) {
        const m = /^bytes=(\d*)-(\d*)$/.exec(range.trim());
        if (!m || (m[1] === '' && m[2] === '')) {
            res.writeHead(416, { 'Content-Range': `bytes */${total}` });
            return res.end();
        }
        let start, end;
        if (m[1] === '') {
            // 后缀区间 bytes=-N：最后 N 字节
            const n = parseInt(m[2], 10);
            if (!n) {
                res.writeHead(416, { 'Content-Range': `bytes */${total}` });
                return res.end();
            }
            start = Math.max(0, total - n);
            end = total - 1;
        } else {
            start = parseInt(m[1], 10);
            end = m[2] !== '' ? parseInt(m[2], 10) : total - 1;
            if (end >= total) end = total - 1;
            if (start >= total || start > end) {
                res.writeHead(416, { 'Content-Range': `bytes */${total}` });
                return res.end();
            }
        }

        res.writeHead(206, {
            ...headers,
            'Content-Range': `bytes ${start}-${end}/${total}`,
            'Content-Length': end - start + 1,
        });
        if (req.method === 'HEAD') return res.end();
        const stream = fs.createReadStream(filePath, { start, end });
        stream.on('error', () => res.destroy());
        // 平板闪退/切换会反复断开连接，必须释放文件句柄
        res.on('close', () => stream.destroy());
        stream.pipe(res);
    } else {
        res.writeHead(200, {
            ...headers,
            'Content-Length': total,
        });
        if (req.method === 'HEAD') return res.end();
        const stream = fs.createReadStream(filePath);
        stream.on('error', () => res.destroy());
        res.on('close', () => stream.destroy());
        stream.pipe(res);
    }
}

function serveFile(req, res, filePath, statusCode = 200) {
    const ext = path.extname(filePath).toLowerCase();
    const streamExt = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.mp3', '.m4a', '.mp4', '.webm', '.mov', '.m4v', '.wav', '.ogg'];
    if (streamExt.includes(ext)) {
        return serveStream(req, res, filePath);
    }
    const mime = getMimeType(filePath);
    const content = fs.readFileSync(filePath);
    res.writeHead(statusCode, {
        'Content-Type': mime,
        'Cache-Control': ['.html', '.css', '.js'].includes(ext)
            ? 'no-cache' : 'public, max-age=300',
    });
    res.end(content);
}

function serve404(res) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<!DOCTYPE html><html lang="zh"><head><meta charset="utf-8"><title>404</title>
<style>body{display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;color:#666;background:#faf8f5;text-align:center}h1{font-size:48px;margin-bottom:12px}</style></head>
<body><div><h1>404</h1><p>文件未找到</p></body></html>`);
}

const server = http.createServer((req, res) => {
    try {
        let urlPath = decodeURIComponent(req.url.split('?')[0]);

        if (urlPath === '/' || urlPath === '') {
            return serveFile(req, res, path.join(APP_DIR, 'index.html'));
        }

        urlPath = urlPath.replace(/^\//, '');

        if (urlPath.includes('..')) {
            return serve404(res);
        }

        // ========== /videos/* → 视频目录 ==========
        if (urlPath.startsWith('videos/')) {
            if (!VIDEOS_BASE) return serve404(res);
            const rel = urlPath.slice('videos/'.length).replace(/\//g, path.sep);
            const filePath = path.join(VIDEOS_BASE, rel);
            if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
                return serveFile(req, res, filePath);
            }
            return serve404(res);
        }

        const normalizedPath = urlPath.replace(/\//g, path.sep);

        // 先查应用目录 (index.html, books.json, videos.json)
        let filePath = path.join(APP_DIR, normalizedPath);
        if (fs.existsSync(filePath)) {
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                const indexPath = path.join(filePath, 'index.html');
                if (fs.existsSync(indexPath)) return serveFile(req, res, indexPath);
                return serve404(res);
            }
            return serveFile(req, res, filePath);
        }

        // 再查绘本目录
        filePath = path.join(BOOKS_BASE, normalizedPath);
        if (fs.existsSync(filePath)) {
            const stat = fs.statSync(filePath);
            if (stat.isFile()) return serveFile(req, res, filePath);
            return serve404(res);
        }

        serve404(res);
    } catch (err) {
        console.error('Server error:', err.message);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
});

server.listen(PORT, () => {
    console.log('\n  ╔════════════════════════════════════════╗');
    console.log('  ║    📖 绘本世界 + 🎬 视频世界              ║');
    console.log('  ╠════════════════════════════════════════╣');
    console.log(`  ║  地址: http://localhost:${PORT}           `);
    console.log(`  ║  绘本: ${BOOKS_BASE}`);
    if (VIDEOS_BASE) console.log(`  ║  视频: ${VIDEOS_BASE}`);
    console.log('  ║  按 Ctrl+C 停止服务器                    ║');
    console.log('  ╚════════════════════════════════════════╝\n');
});
