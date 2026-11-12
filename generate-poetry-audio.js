const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { EdgeTTS } = require('node-edge-tts');
const poems = require('./poems.json');
const output = path.join(__dirname, 'poetry-audio');
const staging = path.join(output, '.staging');
const ffmpeg = process.env.FFMPEG || 'C:/Users/Administrator/AppData/Local/JianyingPro/Apps/8.9.0.13361/ffmpeg.exe';
const voice = 'zh-CN-XiaoxiaoNeural';
const tts = new EdgeTTS({ voice, lang: 'zh-CN', rate: '-12%', pitch: '-2Hz', outputFormat: 'audio-24khz-96kbitrate-mono-mp3', timeout: 30000 });

function narrationText(line) {
    let text = line.text;
    // 同音字只用于合成输入，避免古诗多音字被现代语境误读。
    text = text.replace('一行白鹭', '一航白鹭').replace('一日还', '一日环').replace('万重山', '万崇山').replace('返景', '返影').replace('朝辞', '招辞').replace('密密缝', '密密逢').replace('春种', '春众');
    const characters = [...text].filter(c => /[\u3400-\u9fff]/.test(c));
    const pause = characters.length === 5 ? 2 : characters.length === 7 ? 4 : 0;
    if (!pause || /[，。！？]/.test(text.slice(0, -1))) return text;
    return text.slice(0, pause) + '，' + text.slice(pause);
}

async function generate(name, text, poem) {
    const target = path.join(staging, name + '.m4a');
    if (fs.existsSync(target) && fs.statSync(target).size > 1000) return;
    const source = path.join(staging, name + '.mp3');
    await tts.ttsPromise(text, source);
    if (fs.statSync(source).size < 1000) throw new Error(`语音服务未生成有效音频：${name}`);
    execFileSync(ffmpeg, ['-hide_banner', '-loglevel', 'error', '-i', source, '-c:a', 'aac', '-b:a', '96k', '-ar', '24000', '-movflags', '+faststart', '-metadata', `title=${poem.title}`, '-metadata', `artist=${poem.author}`, '-metadata', `comment=${voice}; neural-v2; rate=-12%`, '-y', target], { stdio: 'inherit' });
    const bytes = fs.readFileSync(target);
    if (bytes.toString('ascii', 4, 8) !== 'ftyp' || bytes.length < 1000) throw new Error(`音频校验失败：${name}`);
    fs.unlinkSync(source);
}

async function main() {
    fs.mkdirSync(staging, { recursive: true });
    for (const poem of poems) {
        const title = poem.title === '鹿柴' ? '鹿寨' : poem.title.replace(/[（）]/g, '，');
        await generate(poem.id + '-intro', `${title}。${poem.dynasty}代，${poem.author}。`, poem);
        for (let i = 0; i < poem.lines.length; i++) {
            await generate(`${poem.id}-${i}`, narrationText(poem.lines[i]), poem);
        }
        console.log(`已生成自然朗读：${poem.title}（含诗名、诗人）`);
    }
    // 整批生成成功后才替换，网络失败时仍保留可用的旧音频。
    for (const file of fs.readdirSync(staging).filter(name => name.endsWith('.m4a'))) {
        fs.copyFileSync(path.join(staging, file), path.join(output, file));
    }
    fs.rmSync(staging, { recursive: true });
    console.log('20 首古诗、102 段自然朗读音频已更新。');
}

if (require.main === module) main().catch(error => { console.error(error.message); process.exitCode = 1; });
module.exports = { narrationText };
