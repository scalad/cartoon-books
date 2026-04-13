/**
 * Picture Book World - Local Dev Server
 * Serves the app from current directory + static assets from D:\绘本
 *
 * Usage: node server.js
 * Then open http://localhost:3000
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

// ════════════════════════════════════════
// ⚙️ 从 config.json 统一读取配置
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
// ════════════════════════════════════════

// MIME types map
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
    '.mp4': 'video/mp4',
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

function serveFile(res, filePath, statusCode = 200) {
    const ext = path.extname(filePath).toLowerCase();
    const mime = getMimeType(filePath);

    // For images/audio, use streaming to avoid loading entire file into memory
    if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.mp3', '.mp4', '.wav', '.ogg'].includes(ext)) {
        const stat = fs.statSync(filePath);
        res.writeHead(statusCode, {
            'Content-Type': mime,
            'Content-Length': stat.size,
            'Cache-Control': 'public, max-age=3600',
            'Accept-Ranges': 'bytes',
        });
        fs.createReadStream(filePath).pipe(res);
    } else {
        const content = fs.readFileSync(filePath);
        res.writeHead(statusCode, {
            'Content-Type': mime,
            'Cache-Control': ['html', 'css', 'js'].includes(ext)
                ? 'no-cache' : 'public, max-age=300',
        });
        res.end(content);
    }
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

        // Root path -> serve index.html
        if (urlPath === '/' || urlPath === '') {
            return serveFile(res, path.join(APP_DIR, 'index.html'));
        }

        // Remove leading slash so path.join works correctly on Windows
        urlPath = urlPath.replace(/^\//, '');

        // Security: prevent directory traversal
        if (urlPath.includes('..')) {
            return serve404(res);
        }

        // Normalize path separators for Windows
        const normalizedPath = urlPath.replace(/\//g, path.sep);

        // Try APP_DIR first (for index.html, books.json, etc.)
        let filePath = path.join(APP_DIR, normalizedPath);

        if (fs.existsSync(filePath)) {
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                const indexPath = path.join(filePath, 'index.html');
                if (fs.existsSync(indexPath)) {
                    return serveFile(res, indexPath);
                }
                return serve404(res);
            }
            return serveFile(res, filePath);
        }

        // Try BOOKS_BASE (for images and audio files)
        filePath = path.join(BOOKS_BASE, normalizedPath);

        if (fs.existsSync(filePath)) {
            const stat = fs.statSync(filePath);
            if (stat.isFile()) {
                return serveFile(res, filePath);
            }
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
    console.log('  ║     📖 绘本世界 - Picture Book World     ║');
    console.log('  ╠════════════════════════════════════════╣');
    console.log(`  ║   本地地址: http://localhost:${PORT}         ║`);
    console.log('  ║                                        ║');
    console.log('  ║   按 Ctrl+C 停止服务器                   ║');
    console.log('  ╚════════════════════════════════════════╝\n');
});
