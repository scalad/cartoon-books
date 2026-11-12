'use strict';
if (window.top === window.self) {
    try { localStorage.setItem('pb_view', 'poetry'); } catch {}
    location.replace('index.html');
}
document.documentElement.classList.add('embedded');
const $ = id => document.getElementById(id);
const labels = {new: '未学习', learning: '学习中', recited: '能背', mastered: '熟练'};
let poems = [], current = null, pool = [], selectedLine = 0, hiddenCount = 0, revealing = false;
let progress = {}, noticeTimer, audioTimer, audioGeneration = 0, playing = false, singleLine = false, sequenceStart = 0;
const audio = $('narration');
const nextScene = new Image();
nextScene.decoding = 'async';
try { progress = JSON.parse(localStorage.getItem('pb_poetry_progress') || '{}'); } catch { progress = {}; }
if (!progress || typeof progress !== 'object' || Array.isArray(progress)) progress = {};
function notify(message) {
    $('notice').textContent = message;
    $('notice').hidden = false;
    clearTimeout(noticeTimer);
    noticeTimer = setTimeout(() => { $('notice').hidden = true; }, 3500);
}
function save() {
    try { localStorage.setItem('pb_poetry_progress', JSON.stringify(progress)); }
    catch { notify('浏览器无法保存学习记录，请检查存储设置。'); }
}
function statusOf(poem) { return progress[poem.id]?.grade || 'new'; }
function due(poem) { return !!progress[poem.id]?.nextReview && progress[poem.id].nextReview <= Date.now(); }
function escapeText(text) { return String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function sceneImage(poem, thumbnail = false) {
    return `<img src="poetry-images/${escapeText(poem.id)}${thumbnail ? '-thumb' : ''}-v2.jpg" alt="" width="${thumbnail ? 480 : 1200}" height="${thumbnail ? 320 : 800}" loading="${thumbnail ? 'lazy' : 'eager'}" decoding="async">`;
}
function renderLibrary() {
    const query = $('search').value.trim().toLowerCase();
    const topic = $('topic').value, difficulty = $('difficulty').value, grade = $('status').value;
    pool = poems.filter(p => (!query || [p.title,p.author,...p.lines.map(l => l.text)].join(' ').toLowerCase().includes(query)) && (!topic || p.theme === topic) && (!difficulty || p.difficulty === difficulty) && (!grade || (grade === 'due' ? due(p) : statusOf(p) === grade)));
    $('stats').innerHTML = [[poems.length,'首精选古诗'],[poems.filter(p => statusOf(p) !== 'new').length,'首已学习'],[poems.filter(p => ['recited','mastered'].includes(statusOf(p))).length,'首能背诵'],[poems.filter(due).length,'首待复习']].map(([n,t]) => `<div class="stat"><strong>${n}</strong><span>${t}</span></div>`).join('');
    $('result-count').textContent = `找到 ${pool.length} 首诗`;
    $('empty').hidden = !!pool.length;
    const cards = document.createDocumentFragment();
    pool.forEach(p => {
        const card = document.createElement('button');
        card.className = 'poem-card';
        card.setAttribute('aria-label', `学习《${p.title}》，${p.author}`);
        card.innerHTML = `<div class="card-art" aria-hidden="true">${sceneImage(p, true)}</div><div class="card-content"><h2>${escapeText(p.title)}</h2><p>${escapeText(p.dynasty)} · ${escapeText(p.author)}</p><p class="excerpt">${escapeText(p.lines[0].text)}</p><div class="tags"><span class="tag">${escapeText(p.theme)}</span><span class="tag">${escapeText(p.difficulty)}</span><span class="learning-status">${labels[statusOf(p)] || '未学习'}${due(p) ? ' · 待复习' : ''}</span></div></div>`;
        card.onclick = () => goToPoem(p);
        cards.appendChild(card);
    });
    $('poem-grid').textContent = '';
    $('poem-grid').appendChild(cards);
}
function lineSceneSource(poem, index) {
    return `poetry-images/lines/${poem.id}-${index}-v3.jpg`;
}
function highlightLine() {
    const line = current.lines[selectedLine];
    $('line-keyword').textContent = `第 ${selectedLine + 1} / ${current.lines.length} 句 · ${line.keyword}`;
    $('line-meaning').textContent = line.meaning;
    $('scene-art').setAttribute('aria-label', line.meaning);
    const source = lineSceneSource(current, selectedLine);
    if ($('scene-image').getAttribute('src') !== source) $('scene-image').src = source;
    const nextIndex = selectedLine + 1 < current.lines.length ? selectedLine + 1 : $('loop').checked ? 0 : null;
    if (nextIndex === null) nextScene.removeAttribute('src');
    else {
        const nextSource = lineSceneSource(current, nextIndex);
        if (nextScene.getAttribute('src') !== nextSource) nextScene.src = nextSource;
    }
}
function renderLines() {
    const mode = $('hint').value;
    const showPinyin = $('pinyin').checked;
    const lines = document.createDocumentFragment();
    current.lines.forEach((line,i) => {
        const button = document.createElement('button');
        button.className = 'poem-line' + (i === selectedLine ? ' active' : '');
        const visible = revealing || mode === 'full' || (mode === 'progressive' && i >= hiddenCount);
        button.setAttribute('aria-label', visible ? `第${i+1}句：${line.text}` : `第${i+1}句，${mode === 'keywords' ? '提示：' + line.keyword : '已隐藏'}`);
        button.setAttribute('aria-pressed', String(i === selectedLine));
        const verse = document.createElement('span');
        verse.className = visible ? 'verse' : 'verse masked';
        if (visible) {
            const syllables = line.pinyin.split(' ');
            let syllableIndex = 0;
            for (const word of line.words) {
                if (!/[\u3400-\u9fff]/.test(word)) {
                    const punctuation = document.createElement('span');
                    punctuation.className = 'punctuation';
                    punctuation.textContent = word;
                    verse.lastElementChild.append(punctuation);
                    continue;
                }
                const group = document.createElement('span');
                group.className = 'word';
                for (const character of word) {
                    const glyph = document.createElement('span');
                    glyph.className = 'glyph';
                    const syllable = syllables[syllableIndex++];
                    if (showPinyin) {
                        const pronunciation = document.createElement('span');
                        pronunciation.className = 'pronunciation';
                        pronunciation.textContent = syllable;
                        glyph.append(pronunciation);
                    }
                    const hanzi = document.createElement('span');
                    hanzi.textContent = character;
                    glyph.append(hanzi);
                    group.append(glyph);
                }
                verse.append(group);
            }
        } else {
            verse.textContent = mode === 'keywords' ? line.keyword + ' · · ·' : '· '.repeat([...line.text].filter(c => /[\u3400-\u9fff]/.test(c)).length).trim();
        }
        button.append(verse);
        button.onclick = () => { stopAudio(); selectedLine = i; renderLines(); highlightLine(); };
        lines.appendChild(button);
    });
    $('lines').textContent = '';
    $('lines').appendChild(lines);
    $('hide-next').hidden = mode !== 'progressive';
    $('hide-next').disabled = hiddenCount >= current.lines.length || revealing;
    $('reveal').hidden = mode === 'full';
    $('reveal').textContent = revealing ? '继续背诵' : '查看原文';
}
function renderGrade() {
    document.querySelectorAll('[data-grade]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.grade === statusOf(current))));
}
function openPoem(poem) {
    stopAudio();
    current = poem;
    selectedLine = 0;
    hiddenCount = 0;
    revealing = false;
    $('hint').value = 'full';
    const old = progress[poem.id] || {};
    progress[poem.id] = {...old, grade: old.grade || 'learning', visits: (old.visits || 0) + 1, lastVisited: Date.now()};
    save();
    $('library').hidden = true;
    $('study').hidden = false;
    $('poem-title').textContent = poem.title;
    document.title = `${poem.title} · 古诗背诵`;
    $('poem-meta').textContent = `${poem.dynasty} · ${poem.author}`;
    $('scene-description').textContent = poem.scene;
    $('audio-status').textContent = '选择一句，再点「朗读此句」跟读。';
    renderLines(); highlightLine(); renderGrade();
    const navPool = pool.some(p => p.id === poem.id) ? pool : poems;
    const index = navPool.findIndex(p => p.id === poem.id);
    $('study-position').textContent = `${index + 1} / ${navPool.length}`;
    $('previous').disabled = index <= 0;
    $('next').disabled = index >= navPool.length - 1;
    $('previous').onclick = () => { if (index > 0) goToPoem(navPool[index-1]); };
    $('next').onclick = () => { if (index < navPool.length-1) goToPoem(navPool[index+1]); };
    window.scrollTo(0,0);
    $('poem-title').focus({preventScroll:true});
    startAudio(false);
}
function goToPoem(poem) {
    location.hash = poem.id;
    openPoem(poem);
}
function route() {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { id = ''; }
    const poem = poems.find(p => p.id === id);
    if (poem) {
        if (poem !== current) openPoem(poem);
    } else {
        stopAudio(); current = null;
        $('scene-image').removeAttribute('src');
        nextScene.removeAttribute('src');
        $('study').hidden = true;
        $('library').hidden = false;
        document.title = '古诗背诵 · 阅读世界';
        renderLibrary();
        if (id) notify('没有找到这首诗，已返回诗库。');
    }
}
function stopAudio() {
    audioGeneration++;
    clearTimeout(audioTimer);
    playing = false;
    audio.onended = null;
    audio.onerror = null;
    audio.pause();
    audio.removeAttribute('src');
    audio.load();
    $('play').textContent = '朗读全诗';
    $('play-line').textContent = '朗读此句';
    if (current) $('audio-status').textContent = '朗读已停止。';
}
function playIndex(index, generation) {
    if (!current || generation !== audioGeneration || !playing) return;
    selectedLine = Math.max(0, index);
    renderLines(); highlightLine();
    audio.src = `poetry-audio/${current.id}-${index < 0 ? 'intro' : index}.m4a?v=neural-v2`;
    audio.playbackRate = Number($('speed').value);
    $('audio-status').textContent = index < 0
        ? `正在朗读诗名与诗人：《${current.title}》，${current.dynasty}代，${current.author}。`
        : `正在朗读第 ${index + 1} / ${current.lines.length} 句${singleLine ? '（单句）' : ''}。`;
    audio.onerror = () => {
        if (generation !== audioGeneration) return;
        stopAudio();
        $('audio-status').textContent = '音频加载失败，请检查连接后重试。';
    };
    audio.onended = () => {
        if (generation !== audioGeneration || !playing) return;
        let next = singleLine ? sequenceStart : index + 1;
        if ((singleLine || next >= current.lines.length) && !$('loop').checked) {
            stopAudio(); $('audio-status').textContent = '朗读完成，轮到你试着背诵了。'; return;
        }
        if (next >= current.lines.length) next = sequenceStart;
        audioTimer = setTimeout(() => playIndex(next, generation), 500);
    };
    audio.play().catch(error => {
        if (generation !== audioGeneration) return;
        stopAudio();
        $('audio-status').textContent = error.name === 'NotAllowedError'
            ? '浏览器未允许播放，请再点一次朗读按钮。'
            : '朗读被中断，请检查页面和连接后重试。';
    });
}
function startAudio(single) {
    if (!current) return;
    const start = single ? selectedLine : -1;
    stopAudio();
    singleLine = single;
    sequenceStart = start;
    playing = true;
    $('play').textContent = single ? '朗读全诗' : '正在朗读';
    $('play-line').textContent = single ? '正在朗读此句' : '朗读此句';
    playIndex(start, audioGeneration);
}
$('play').onclick = () => startAudio(false);
$('play-line').onclick = () => startAudio(true);
$('stop').onclick = stopAudio;
$('speed').onchange = () => { audio.playbackRate = Number($('speed').value); };
$('loop').onchange = () => { if (current) highlightLine(); };
$('pinyin').onchange = renderLines;
$('hint').onchange = () => { hiddenCount = 0; revealing = false; renderLines(); };
$('hide-next').onclick = () => { hiddenCount = Math.min(hiddenCount+1,current.lines.length); renderLines(); };
$('reveal').onclick = () => { revealing = !revealing; renderLines(); };
$('back').onclick = () => { location.hash = ''; };
document.querySelectorAll('[data-grade]').forEach(button => button.onclick = () => {
    if (!current) return;
    const grade = button.dataset.grade;
    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + {learning:1,recited:3,mastered:7}[grade]);
    nextReview.setHours(0,0,0,0);
    progress[current.id] = {...progress[current.id], grade, nextReview: nextReview.getTime(), lastPracticed: Date.now()};
    save(); renderGrade(); notify('已记录，下次一起温习这首诗。');
});
['search','topic','difficulty','status'].forEach(id => { $(id).addEventListener(id === 'search' ? 'input' : 'change',renderLibrary); });
$('clear-filters').onclick = () => { ['search','topic','difficulty','status'].forEach(id => { $(id).value = ''; }); renderLibrary(); };
$('start-review').onclick = () => {
    const reviewPoems = poems.filter(due).sort((a,b) => progress[a.id].nextReview-progress[b.id].nextReview);
    if (!reviewPoems.length) { notify('今天没有到期复习，选一首喜欢的诗开始学习吧。'); return; }
    ['search','topic','difficulty'].forEach(id => { $(id).value = ''; });
    $('status').value = 'due'; renderLibrary();
    goToPoem(reviewPoems[0]);
};
$('theme').onchange = () => {
    document.body.dataset.theme = $('theme').value;
    try { localStorage.setItem('pb_theme',$('theme').value); } catch { notify('主题设置暂时无法保存。'); }
};
const theme = localStorage.getItem('pb_theme');
$('theme').value = ['light','dark','sepia'].includes(theme) ? theme : 'light';
document.body.dataset.theme = $('theme').value;
window.addEventListener('hashchange',route);
document.addEventListener('keydown', event => {
    if (event.repeat || event.ctrlKey || event.metaKey || event.altKey || event.target.matches('input, textarea, select') || event.target.isContentEditable) return;
    if (event.key === 'f' || event.key === 'F') {
        event.preventDefault();
        window.parent.togglePoetryFullscreen();
    }
});
window.addEventListener('pagehide',stopAudio);
document.addEventListener('visibilitychange',() => { if (document.hidden) stopAudio(); });
async function loadPoems() {
    let stage = '诗库下载';
    try {
        const response = await fetch('poems.json');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        stage = '诗库解析';
        poems = await response.json();
        stage = '古诗页面渲染';
        [...new Set(poems.map(p => p.theme))].forEach(theme => { const option = document.createElement('option'); option.value = theme; option.textContent = theme; $('topic').append(option); });
        $('hero-art').innerHTML = sceneImage(poems.find(p => p.id === 'chun-xiao'));
        route();
    } catch (error) {
        console.error(`${stage}失败`, error);
        $('load-error').textContent = `${stage}失败：${error.message}。请刷新重试；若仍失败，请把此提示发给我们。`;
        $('load-error').hidden = false;
        $('start-review').disabled = true;
    }
}
loadPoems();
