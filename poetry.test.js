const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const poems = require('./poems.json');

test('100 unique poems contain aligned Chinese text and pinyin', () => {
    assert.equal(poems.length, 100);
    assert.equal(new Set(poems.map(p => p.id)).size, 100);
    assert.equal(poems.reduce((total, p) => total + p.lines.length, 0), 402);
    for (const poem of poems) {
        assert.match(poem.id, /^[a-z-]+$/);
        assert.ok(poem.title && poem.author && poem.scene && poem.notes.length);
        assert.ok(['入门', '进阶'].includes(poem.difficulty));
        for (const [text, pinyin] of [[poem.title, poem.titlePinyin], [poem.author, poem.authorPinyin]]) {
            assert.equal([...text].filter(c => /[\u3400-\u9fff]/.test(c)).length, pinyin.split(' ').length, text);
        }
        for (const line of poem.lines) {
            const characters = [...line.text].filter(c => /[\u3400-\u9fff]/.test(c));
            assert.equal(characters.length, line.pinyin.split(' ').length, `${poem.title}: ${line.text}`);
            assert.equal(line.words.join(''), line.text);
            assert.ok(line.words.every(word => /^[\u3400-\u9fff]+$|^[，。？！]$/.test(word)));
            assert.ok(line.meaning && line.keyword && line.image);
        }
    }
});

test('each poem introduction and line has neural narration in a local MP4 container', () => {
    for (const poem of poems) {
        for (const index of ['intro', ...poem.lines.map((line, index) => index)]) {
            const file = path.join(__dirname, 'poetry-audio', `${poem.id}-${index}.m4a`);
            const bytes = fs.readFileSync(file);
            assert.ok(bytes.length > 1000, file);
            assert.equal(bytes.toString('ascii', 4, 8), 'ftyp', file);
            assert.ok(bytes.includes(Buffer.from('moov')), file);
            assert.ok(bytes.includes(Buffer.from('mdat')), file);
            assert.ok(bytes.includes(Buffer.from('XiaoxiaoNeural; neural-v2')), file);
        }
    }
});

test('narration uses poetic metre without changing source text', () => {
    const { narrationText } = require('./generate-poetry-audio');
    assert.equal(narrationText({text: '床前明月光，'}), '床前，明月光，');
    assert.equal(narrationText({text: '日照香炉生紫烟，'}), '日照香炉，生紫烟，');
    assert.equal(narrationText({text: '鹅，鹅，鹅，'}), '鹅，鹅，鹅，');
    assert.equal(narrationText({text: '一行白鹭上青天。'}), '一航白鹭，上青天。');
    assert.equal(narrationText({text: '返景入深林，'}), '返影，入深林，');
    assert.equal(narrationText({text: '临行密密缝，'}), '临行，密密逢，');
});

test('new poems preserve difficult pinyin and narration pronunciation mappings', () => {
    const { narrationText } = require('./generate-poetry-audio');
    assert.equal(poems.find(poem => poem.author === '查慎行').authorPinyin, 'zhā shèn xíng');
    const lines = poems.flatMap(poem => poem.lines);
    for (const [text, pinyin, narration] of [
        ['草长莺飞二月天，', 'cǎo zhǎng yīng fēi èr yuè tiān', '草掌莺飞，二月天，'],
        ['寒梅著花未。', 'hán méi zhuó huā wèi', '寒梅，灼花未。'],
        ['怕得鱼惊不应人。', 'pà dé yú jīng bù yìng rén', '怕得鱼惊，不映人。'],
        ['为有暗香来。', 'wèi yǒu àn xiāng lái', '位有，暗香来。'],
        ['单于夜遁逃。', 'chán yú yè dùn táo', '蝉于，夜遁逃。'],
        ['不论平地与山尖，', 'bú lùn píng dì yǔ shān jiān', '不论平地，与山尖，']
    ]) {
        const line = lines.find(line => line.text === text);
        assert.ok(line, text);
        assert.equal(line.pinyin, pinyin, text);
        assert.equal(narrationText(line), narration, text);
        assert.equal(line.text, text);
    }
});

test('playback includes introductions, repeats the correct stage and cancels stale callbacks', () => {
    const source = fs.readFileSync(path.join(__dirname, 'poetry.js'), 'utf8');
    const elements = {
        play: {}, 'play-line': {}, 'audio-status': {}, speed: {value: '1'}, loop: {checked: false}
    };
    const audio = {pause() {}, load() {}, removeAttribute() {this.src = null;}, play() {return Promise.resolve();}};
    let pending;
    const context = vm.createContext({
        $: id => elements[id], audio, current: poems[0], selectedLine: 0,
        audioGeneration: 0, audioTimer: null, playing: false, singleLine: false, sequenceStart: 0,
        renderLines() {}, highlightLine() {},
        setTimeout(fn) {pending = fn; return 1;}, clearTimeout() {pending = null;}
    });
    vm.runInContext(source.slice(source.indexOf('function stopAudio()'), source.indexOf("$('play').onclick")), context);
    context.startAudio(false);
    assert.match(audio.src, /jing-ye-si-intro\.m4a\?v=neural-v2$/);
    audio.onended(); pending();
    assert.match(audio.src, /jing-ye-si-0\.m4a/);
    elements.loop.checked = true;
    context.playIndex(3, context.audioGeneration); audio.onended(); pending();
    assert.match(audio.src, /jing-ye-si-intro\.m4a/);
    context.selectedLine = 2;
    context.startAudio(true); audio.onended(); pending();
    assert.match(audio.src, /jing-ye-si-2\.m4a/);
    const staleEnded = audio.onended;
    context.stopAudio(); staleEnded();
    assert.equal(audio.src, null);
    assert.equal(pending, null);
    elements.loop.checked = false;
    context.startAudio(true); audio.onended();
    assert.equal(context.playing, false);
    assert.match(elements['audio-status'].textContent, /朗读完成/);
});

test('opening and switching poems starts full narration once and returning stops it', () => {
    const source = fs.readFileSync(path.join(__dirname, 'poetry.js'), 'utf8');
    const elements = {};
    const starts = [];
    let stops = 0, hash = '';
    const location = {};
    Object.defineProperty(location, 'hash', {
        get: () => hash,
        set: value => {hash = value ? '#' + value.replace(/^#/, '') : '';}
    });
    const context = vm.createContext({
        $: id => elements[id] || (elements[id] = {value: '', setAttribute() {}, removeAttribute() {}, focus() {}}),
        poems, pool: poems, current: null, progress: {}, selectedLine: 0, hiddenCount: 0, revealing: false,
        location, document: {}, window: {scrollTo() {}}, nextScene: {removeAttribute() {}},
        stopAudio() {stops++;}, startAudio(single) {starts.push({single, id: context.current.id});},
        save() {}, resetScene() {}, sceneImage: () => '', renderLines() {}, highlightLine() {}, renderGrade() {}, renderLibrary() {}, notify() {}
    });
    vm.runInContext(source.slice(source.indexOf('function openPoem('), source.indexOf('function stopAudio()')), context);
    context.goToPoem(poems[0]);
    assert.deepEqual(starts, [{single: false, id: poems[0].id}]);
    context.route();
    assert.equal(starts.length, 1);
    assert.equal(context.progress[poems[0].id].visits, 1);
    elements.next.onclick();
    context.route();
    assert.deepEqual(starts[1], {single: false, id: poems[1].id});
    assert.equal(starts.length, 2);
    context.location.hash = '';
    context.route();
    assert.equal(context.current, null);
    assert.equal(elements.library.hidden, false);
    assert.equal(stops, 3);
});

test('blocked autoplay leaves a usable manual narration prompt', async () => {
    const source = fs.readFileSync(path.join(__dirname, 'poetry.js'), 'utf8');
    const elements = {play: {}, 'play-line': {}, 'audio-status': {}, speed: {value: '0.8'}, loop: {checked: false}};
    const audio = {
        pause() {}, load() {}, removeAttribute() {},
        play() {return Promise.reject(Object.assign(new Error('blocked'), {name: 'NotAllowedError'}));}
    };
    const context = vm.createContext({
        $: id => elements[id], audio, current: poems[0], selectedLine: 0,
        audioGeneration: 0, audioTimer: null, playing: false, singleLine: false, sequenceStart: 0,
        renderLines() {}, highlightLine() {}, clearTimeout() {}, setTimeout() {}
    });
    vm.runInContext(source.slice(source.indexOf('function stopAudio()'), source.indexOf("$('play').onclick")), context);
    context.startAudio(false);
    await Promise.resolve();
    assert.equal(context.playing, false);
    assert.equal(elements.play.textContent, '朗读全诗');
    assert.match(elements['audio-status'].textContent, /浏览器未允许播放/);
});

test('library rendering works without replaceChildren and replaces previous results', () => {
    const source = fs.readFileSync(path.join(__dirname, 'poetry.js'), 'utf8');
    const elements = Object.fromEntries(['search', 'topic', 'difficulty', 'status', 'stats', 'result-count', 'empty', 'poem-grid'].map(id => [id, {value: ''}]));
    const grid = elements['poem-grid'];
    Object.defineProperty(grid, 'textContent', {set() {this.children = [];}});
    grid.appendChild = fragment => grid.children.push(...fragment.children);
    const context = vm.createContext({
        $: id => elements[id], poems, pool: [], labels: {new: '未学习'},
        statusOf: () => 'new', due: () => false, sceneImage: () => '', escapeText: text => text,
        document: {
            createDocumentFragment: () => ({children: [], appendChild(child) {this.children.push(child);}}),
            createElement: () => ({setAttribute() {}})
        }
    });
    vm.runInContext(source.slice(source.indexOf('function renderLibrary()'), source.indexOf('function highlightLine()')), context);
    context.renderLibrary();
    assert.equal(grid.children.length, 100);
    elements.search.value = '春晓';
    context.renderLibrary();
    assert.equal(grid.children.length, 1);
    elements.search.value = '不存在的诗';
    context.renderLibrary();
    assert.equal(grid.children.length, 0);
    assert.equal(elements.empty.hidden, false);
});

test('initialization distinguishes HTTP errors from rendering errors', async () => {
    const source = fs.readFileSync(path.join(__dirname, 'poetry.js'), 'utf8');
    const elements = {'load-error': {}, 'start-review': {}, topic: {append() {}}, 'hero-art': {}};
    let response = {ok: false, status: 404};
    const context = vm.createContext({
        $: id => elements[id], fetch: async () => response, poems: [], console: {error() {}},
        document: {createElement: () => ({})}, sceneImage: () => '',
        route() {throw new Error('DOM unavailable');}
    });
    vm.runInContext(source.slice(source.indexOf('async function loadPoems()'), source.lastIndexOf('loadPoems();')), context);
    await context.loadPoems();
    assert.match(elements['load-error'].textContent, /诗库下载失败：HTTP 404/);
    response = {ok: true, json: async () => poems};
    await context.loadPoems();
    assert.match(elements['load-error'].textContent, /古诗页面渲染失败：DOM unavailable/);
});

test('every poem has distinct optimized scene and thumbnail JPEGs', () => {
    const hashes = new Set();
    const {createHash} = require('node:crypto');
    for (const poem of poems) {
        for (const suffix of ['-v2.jpg', '-thumb-v2.jpg']) {
            const bytes = fs.readFileSync(path.join(__dirname, 'poetry-images', poem.id + suffix));
            assert.equal(bytes.readUInt16BE(0), 0xffd8, poem.id);
            assert.equal(bytes.readUInt16BE(bytes.length - 2), 0xffd9, poem.id);
            assert.ok(bytes.length < (suffix.includes('thumb') ? 80000 : 400000), poem.id);
            if (!suffix.includes('thumb')) hashes.add(createHash('sha256').update(bytes).digest('hex'));
        }
    }
    assert.equal(hashes.size, 100);
});

test('cover markup uses lazy thumbnails and full-size hero images instead of SVGs', () => {
    const source = fs.readFileSync(path.join(__dirname, 'poetry.js'), 'utf8');
    const context = vm.createContext({});
    vm.runInContext(source.slice(source.indexOf('function escapeText('), source.indexOf('function renderLibrary()')), context);
    assert.match(context.sceneImage(poems[0], true), /src="poetry-images\/jing-ye-si-thumb-v2\.jpg"/);
    assert.match(context.sceneImage(poems[0], true), /loading="lazy"/);
    assert.match(context.sceneImage(poems[0]), /src="poetry-images\/jing-ye-si-v2\.jpg"/);
    assert.match(context.sceneImage(poems[0]), /width="1200" height="800" loading="eager"/);
    assert.doesNotMatch(source, /sceneSvg|<svg|data-image/);
});

test('all 402 verses have distinct compact JPEG artwork', () => {
    const {createHash} = require('node:crypto');
    const hashes = new Set();
    let totalBytes = 0;
    for (const poem of poems) {
        for (let index = 0; index < poem.lines.length; index++) {
            const file = `${poem.id}-${index}-v3.jpg`;
            const bytes = fs.readFileSync(path.join(__dirname, 'poetry-images', 'lines', file));
            assert.equal(bytes.readUInt16BE(0), 0xffd8, file);
            assert.equal(bytes.readUInt16BE(bytes.length - 2), 0xffd9, file);
            assert.ok(bytes.length < 150000, file);
            totalBytes += bytes.length;
            hashes.add(createHash('sha256').update(bytes).digest('hex'));
        }
    }
    assert.equal(hashes.size, 402);
    assert.ok(totalBytes < 30000000);
    const html = fs.readFileSync(path.join(__dirname, 'poetry.html'), 'utf8');
    assert.match(html, /<img id="scene-image" class="scene-layer scene-current" alt="" width="768" height="512" decoding="async">/);
    assert.equal((html.match(/class="scene-layer /g) || []).length, 2);
});

test('verse art follows narration, replay and loops with only one next-image preload', () => {
    const source = fs.readFileSync(path.join(__dirname, 'poetry.js'), 'utf8');
    const image = () => ({
        attributes: {}, assignments: 0,
        set src(value) {this.attributes.src = value; this.assignments++;},
        getAttribute(name) {return this.attributes[name] || null;},
        setAttribute(name, value) {this.attributes[name] = value;},
        removeAttribute(name) {delete this.attributes[name];}
    });
    const elements = {
        'scene-image': image(), 'scene-art': image(), 'line-keyword': {}, 'line-meaning': {},
        play: {}, 'play-line': {}, 'audio-status': {}, speed: {value: '0.8'}, loop: {checked: false}
    };
    const nextScene = image();
    const audio = {pause() {}, load() {}, removeAttribute() {this.src = null;}, play() {return Promise.resolve();}};
    let pending;
    const context = vm.createContext({
        $: id => elements[id], nextScene, audio, current: poems[0], selectedLine: 0,
        audioGeneration: 0, audioTimer: null, playing: false, singleLine: false, sequenceStart: 0,
        renderLines() {}, setTimeout(fn) {pending = fn; return 1;}, clearTimeout() {pending = null;},
        updateScene(source, nextSource) {
            if (elements['scene-image'].getAttribute('src') !== source) elements['scene-image'].src = source;
            if (!nextSource) nextScene.removeAttribute('src');
            else if (nextScene.getAttribute('src') !== nextSource) nextScene.src = nextSource;
        }
    });
    vm.runInContext(source.slice(source.indexOf('function lineSceneSource('), source.indexOf('function resetScene()')), context);
    vm.runInContext(source.slice(source.indexOf('function highlightLine()'), source.indexOf('function renderLines()')), context);
    vm.runInContext(source.slice(source.indexOf('function stopAudio()'), source.indexOf("$('play').onclick")), context);
    const currentSource = () => elements['scene-image'].getAttribute('src');
    const preloadedSource = () => nextScene.getAttribute('src');
    context.startAudio(false);
    assert.match(currentSource(), /jing-ye-si-0-v3.jpg$/);
    assert.match(preloadedSource(), /jing-ye-si-1-v3.jpg$/);
    context.highlightLine();
    assert.equal(elements['scene-image'].assignments, 1);
    assert.equal(nextScene.assignments, 1);
    audio.onended(); pending();
    assert.equal(context.selectedLine, 0);
    audio.onended(); pending();
    assert.match(currentSource(), /jing-ye-si-1-v3.jpg$/);
    assert.match(preloadedSource(), /jing-ye-si-2-v3.jpg$/);
    assert.equal(elements['line-meaning'].textContent, poems[0].lines[1].meaning);
    context.playIndex(3, context.audioGeneration);
    assert.equal(preloadedSource(), null);
    elements.loop.checked = true;
    context.highlightLine();
    assert.match(preloadedSource(), /jing-ye-si-0-v3.jpg$/);
    audio.onended(); pending();
    assert.match(audio.src, /jing-ye-si-intro.m4a/);
    assert.match(currentSource(), /jing-ye-si-0-v3.jpg$/);
    context.selectedLine = 2;
    context.startAudio(true); audio.onended(); pending();
    assert.match(currentSource(), /jing-ye-si-2-v3.jpg$/);
    assert.match(audio.src, /jing-ye-si-2.m4a/);
    const staleEnded = audio.onended;
    const generation = context.audioGeneration;
    context.stopAudio();
    staleEnded(); context.playIndex(1, generation);
    assert.match(currentSource(), /jing-ye-si-2-v3.jpg$/);
    assert.equal(pending, null);
    context.startAudio(false);
    assert.match(currentSource(), /jing-ye-si-0-v3.jpg$/);
    context.current = poems.find(p => p.id === 'you-zi-yin');
    context.startAudio(false);
    assert.match(currentSource(), /you-zi-yin-0-v3.jpg$/);
    assert.match(preloadedSource(), /you-zi-yin-1-v3.jpg$/);
    elements.loop.checked = false;
    context.playIndex(5, context.audioGeneration); audio.onended();
    assert.match(currentSource(), /you-zi-yin-5-v3.jpg$/);
    assert.equal(preloadedSource(), null);
    assert.equal(context.playing, false);
});

test('scene transitions wait for decoding, keep the old picture and discard stale requests', async () => {
    const source = fs.readFileSync(path.join(__dirname, 'poetry.js'), 'utf8');
    const image = () => ({
        attributes: {}, className: '', complete: false, naturalWidth: 0,
        set src(value) {this.attributes.src = value; this.complete = false; this.naturalWidth = 0;},
        getAttribute(name) {return this.attributes[name] || null;},
        removeAttribute(name) {delete this.attributes[name];},
        decode: () => Promise.resolve()
    });
    const front = image(), back = image();
    for (const img of [front, back]) img.classList = {add(name) {img.className += ' ' + name;}};
    let pending, reduced = false;
    const context = vm.createContext({
        sceneFront: front, nextScene: back, sceneGeneration: 0, sceneTimer: null,
        sceneTarget: null, sceneTransitioning: false,
        window: {matchMedia: () => ({matches: reduced})},
        setTimeout(fn, delay) {assert.equal(delay, 250); pending = fn; return 1;},
        clearTimeout() {pending = null;}
    });
    vm.runInContext(source.slice(source.indexOf('function resetScene()'), source.indexOf('function highlightLine()')), context);
    const load = async () => {
        const img = context.nextScene;
        img.complete = true; img.naturalWidth = 768;
        await img.onload();
    };
    const currentSource = () => context.sceneFront.getAttribute('src');
    context.updateScene('0.jpg', '1.jpg');
    assert.equal(currentSource(), null);
    await load();
    assert.equal(currentSource(), '0.jpg');
    assert.equal(context.nextScene.getAttribute('src'), '1.jpg');
    context.updateScene('1.jpg', '2.jpg');
    assert.equal(currentSource(), '0.jpg');
    await load();
    assert.equal(currentSource(), '0.jpg');
    assert.match(context.nextScene.className, /visible/);
    context.updateScene('2.jpg', '3.jpg');
    assert.equal(context.nextScene.getAttribute('src'), '1.jpg');
    pending();
    assert.equal(currentSource(), '1.jpg');
    assert.equal(context.nextScene.getAttribute('src'), '2.jpg');
    await load(); pending();
    assert.equal(currentSource(), '2.jpg');
    assert.equal(context.nextScene.getAttribute('src'), '3.jpg');
    context.updateScene('3.jpg', null);
    context.nextScene.onerror();
    assert.equal(currentSource(), '2.jpg');
    assert.equal(context.nextScene.getAttribute('src'), null);
    let decoded;
    context.updateScene('0.jpg', '1.jpg');
    context.nextScene.decode = () => new Promise(resolve => {decoded = resolve;});
    const oldRequest = load();
    context.updateScene('1.jpg', '2.jpg');
    context.nextScene.decode = () => Promise.resolve();
    await load();
    decoded(); await oldRequest;
    assert.equal(context.nextScene.getAttribute('src'), '1.jpg');
    const oldTransition = pending;
    context.resetScene();
    oldTransition();
    assert.equal(currentSource(), null);
    assert.equal(context.nextScene.getAttribute('src'), null);
    assert.equal(context.sceneTransitioning, false);
    reduced = true;
    context.updateScene('0.jpg', '1.jpg'); await load();
    context.updateScene('1.jpg', null); await load();
    assert.equal(currentSource(), '1.jpg');
    assert.equal(context.nextScene.getAttribute('src'), null);
    assert.equal(pending, null);
});

test('poetry detail defaults to no pinyin, slow narration and a compact assessment', () => {
    const html = fs.readFileSync(path.join(__dirname, 'poetry.html'), 'utf8');
    const source = fs.readFileSync(path.join(__dirname, 'poetry.js'), 'utf8');
    assert.match(html, /<input type="checkbox" id="pinyin">/);
    assert.match(html, /<option value="0\.8" selected>慢速<\/option>/);
    assert.doesNotMatch(html, /id="study-status"|id="review-date"|class="notes"/);
    assert.doesNotMatch(source, /\$\('study-status'\)|\$\('review-date'\)|\$\('notes'\)/);
    assert.match(source, /\$\('poem-meta'\)\.textContent = `\$\{poem.dynasty\} · \$\{poem.author\}`/);
    assert.equal((html.match(/data-grade=/g) || []).length, 3);
    assert.match(html, /class="reading-tools"><div class="study-heading"><h1 id="poem-title"/);
    assert.match(html, /id="loop" type="checkbox"> 循环<\/label><label><input type="checkbox" id="pinyin"> 显示拼音<\/label>/);
    assert.equal((html.match(/id="poem-title"/g) || []).length, 1);
    assert.equal((html.match(/id="pinyin"/g) || []).length, 1);
    assert.match(html, /id="hint" aria-label="背诵提示" aria-describedby="hint-tooltip"/);
    assert.match(html, /id="hint-tooltip" class="hint-tooltip" role="tooltip">背诵提示/);
    assert.doesNotMatch(html, /<label>背诵提示/);
    const css = fs.readFileSync(path.join(__dirname, 'poetry.css'), 'utf8');
    assert.match(css, /\.study-heading\{display:flex;[^}]*white-space:nowrap/);
    assert.match(css, /\.hint-tooltip\{[^}]*visibility:hidden/);
    assert.match(css, /\.hint-control:hover \.hint-tooltip/);
});

test('poetry fullscreen enters, exits and reports unsupported or rejected requests', async () => {
    const source = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    const calls = [];
    let fullscreen = false;
    const el = {requestFullscreen(options) {calls.push(options);}};
    const context = vm.createContext({
        document: {documentElement: el}, isInFullscreen: () => fullscreen,
        exitAnyFullscreen: () => calls.push('exit'), showToast: text => calls.push(text)
    });
    vm.runInContext(source.slice(source.indexOf('function togglePoetryFullscreen()'), source.indexOf('function updateFullscreenBtn()')), context);
    context.togglePoetryFullscreen();
    assert.equal(calls[0].navigationUI, 'hide');
    fullscreen = true;
    context.togglePoetryFullscreen();
    assert.equal(calls[1], 'exit');
    fullscreen = false;
    delete el.requestFullscreen;
    el.webkitRequestFullscreen = function() {assert.equal(this, el); calls.push('webkit');};
    context.togglePoetryFullscreen();
    assert.equal(calls[2], 'webkit');
    delete el.webkitRequestFullscreen;
    context.togglePoetryFullscreen();
    assert.match(calls[3], /浏览器未允许全屏/);
    el.requestFullscreen = () => Promise.reject(new Error('denied'));
    context.togglePoetryFullscreen();
    await Promise.resolve();
    assert.match(calls[4], /浏览器未允许全屏/);
});

test('poetry iframe forwards F but leaves text entry and modified keys alone', () => {
    const source = fs.readFileSync(path.join(__dirname, 'poetry.js'), 'utf8');
    let handler, toggles = 0, prevented = 0;
    const context = vm.createContext({
        document: {addEventListener(type, fn) {handler = fn;}},
        window: {parent: {togglePoetryFullscreen() {toggles++;}}}
    });
    vm.runInContext(source.slice(source.indexOf("document.addEventListener('keydown'"), source.indexOf("window.addEventListener('pagehide'")), context);
    const event = {key: 'f', target: {matches: () => false}, preventDefault() {prevented++;}};
    handler(event);
    handler({...event, key: 'F'});
    handler({...event, target: {matches: () => true}});
    handler({...event, ctrlKey: true});
    handler({...event, repeat: true});
    assert.equal(toggles, 2);
    assert.equal(prevented, 2);
});

test('page script parses and homepage embeds the poetry tab', () => {
    assert.doesNotThrow(() => new vm.Script(fs.readFileSync(path.join(__dirname, 'poetry.js'), 'utf8')));
    const index = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
    assert.match(index, /data-mode="poetry" onclick="setPoetryView\(true\)"/);
    assert.match(index, /frame\.src = 'poetry\.html'/);
});
