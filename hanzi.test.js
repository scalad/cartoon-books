'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { spawnSync } = require('node:child_process');
const core = require('./hanzi-core.js');
const lessons = require('./hanzi-data.js');
const [target, other, third] = lessons;
const consent = { at: '2026-01-01T10:00:00.000Z', version: 1 };
const day = '2026-01-10';
let serial = 0;

function stateWithConsent() {
  const state = core.parseState(null, lessons);
  state.consent = { ...consent };
  return state;
}

function attempt(overrides = {}) {
  return {
    id: `attempt-${++serial}`, lessonId: target.id, dimension: 'audio_shape',
    firstAnswer: true, correct: true, hintLevel: 0, context: target.contexts[0].id,
    date: day, source: 'interaction', ...overrides
  };
}

function draft(overrides = {}) {
  return {
    lessonId: target.id, mode: 'lesson', step: 3, contextIndex: 0,
    choices: [target.id, other.id], hintLevel: 0, wrongCount: 0, firstRecorded: false,
    answered: false, feedback: '再听一次也可以', audioReady: true, assisted: false, ...overrides
  };
}

function completed(overrides = {}) {
  return { firstDate: day, lastDate: day, nextReview: '2026-01-11', reviewStage: 0, ...overrides };
}

function stored(overrides = {}) {
  return JSON.stringify({ ...core.createState(), consent, ...overrides });
}

function evidence(state, dimension = 'audio_shape') {
  return core.evidenceFor(state, target.id, dimension);
}

function record(state, overrides = {}) {
  const value = attempt(overrides);
  assert.equal(core.recordAttempt(state, value), true);
  return value;
}

test('48 ordered lessons provide complete draft metadata and three contexts', () => {
  assert.equal(lessons.length, 48);
  assert.equal(lessons.map(lesson => lesson.char).join(''), '水木山火日月云雨石田土米花草叶竹鸟虫鱼兔牛羊马狗口目耳手门窗灯床衣帽包伞瓜果豆面车桥路店贝沙网舟');
  assert.equal(new Set(lessons.map(lesson => lesson.id)).size, 48);
  assert.equal(new Set(lessons.map(lesson => lesson.char)).size, 48);
  assert.equal(new Set(lessons.flatMap(lesson => lesson.contexts.map(context => context.id))).size, 144);
  for (const lesson of lessons) {
    for (const field of ['pinyin','title','region','partner','item','mission','meaning','actionLabel','actionResult','application','ending','cloze','homeTip']) {
      assert.equal(typeof lesson[field], 'string');
      assert.ok(lesson[field].length, `${lesson.id}.${field}`);
    }
    assert.equal(lesson.meaningDistractors.length, 2);
    assert.equal(new Set(lesson.meaningDistractors).size, 2);
    assert.ok(lesson.meaningDistractors.every(id => id !== lesson.id && lessons.some(item => item.id === id)));
    assert.equal(lesson.contexts.length, 3);
    assert.equal(new Set(lesson.contexts.map(context => context.id)).size, 3);
    assert.ok(lesson.contexts.every(context => typeof context.label === 'string' && context.label.length));
    assert.equal(lesson.contentVersion, '2026-11-21');
    assert.equal(lesson.reviewStatus, 'draft');
  }
});

test('12 ordered four-lesson regions cover nature, people and everyday life', () => {
  const regions = Array.from(new Set(lessons.map(lesson => lesson.region)));
  assert.deepEqual(regions, ['溪流营地','天空邮局','田野小屋','花园小径','森林邻居','农场朋友','身体发现','家中小屋','生活小帮手','丰收厨房','快乐出行','海边寻宝']);
  regions.forEach((region,index) => {
    assert.equal(lessons.filter(lesson => lesson.region === region).length,4);
    assert.ok(lessons.slice(index*4,index*4+4).every(lesson => lesson.region === region));
  });
  assert.equal(lessons.slice(12).map(lesson => lesson.pinyin).join(' '), 'huā cǎo yè zhú niǎo chóng yú tù niú yáng mǎ gǒu kǒu mù ěr shǒu mén chuāng dēng chuáng yī mào bāo sǎn guā guǒ dòu miàn chē qiáo lù diàn bèi shā wǎng zhōu');
});

test('original progress and unfinished lessons survive the expanded catalog', () => {
  const originalIds = ['water','wood','mountain','fire','sun','moon','cloud','rain','stone','field','earth','rice'];
  assert.deepEqual(lessons.slice(0,12).map(lesson => lesson.id),originalIds);
  const oldState = core.parseState(null,lessons.slice(0,12));
  oldState.consent = {...consent};
  for (const id of originalIds) core.completeLesson(oldState,id,day);
  core.recordAttempt(oldState,attempt());
  oldState.draft = draft({step:5,choices:['water','rice'],firstRecorded:true,wrongCount:1,hintLevel:2,assisted:true,audioReady:false});
  const expanded = core.parseState(JSON.stringify(oldState),lessons);
  assert.deepEqual(expanded,oldState);
  assert.equal(core.nextLesson(expanded,lessons).id,'flower');
  assert.equal(core.evidenceFor(expanded,'water','audio_shape').status,'independent');
  assert.deepEqual(core.dueReviews(expanded,lessons,'2026-01-11').map(lesson => lesson.id),['water','wood']);
  for (const lesson of lessons.slice(12)) assert.equal(core.completeLesson(expanded,lesson.id,day),true);
  assert.equal(core.nextLesson(expanded,lessons),null);
});

test('all module scripts parse and every lesson has three distinct local photographic scenes', () => {
  for (const file of ['hanzi-data.js','hanzi-core.js','hanzi-art.js','hanzi.js']) {
    assert.doesNotThrow(() => new vm.Script(fs.readFileSync(path.join(__dirname,file),'utf8')));
  }
  const context = {window:{}};
  vm.runInNewContext(fs.readFileSync(path.join(__dirname,'hanzi-art.js'),'utf8'),context);
  const assets = new Set();
  const checkPhoto = markup => {
    assert.match(markup, /^<img /);
    assert.match(markup, /alt=""/);
    assert.doesNotMatch(markup, /undefined|NaN|<svg|https?:/);
    const src = markup.match(/src="([^"]+)"/)[1];
    assert.match(src, /^hanzi-images\/realistic-v1\/[a-z]+(?:-[012])?\.jpg$/);
    const bytes = fs.readFileSync(path.join(__dirname,src));
    assert.equal(bytes.readUInt16BE(0),0xffd8,`${src} must be JPEG`);
    assert.equal(bytes.readUInt16BE(bytes.length-2),0xffd9,`${src} must be complete`);
    assert.ok(bytes.length > 10000 && bytes.length < 1500000,`${src} must be optimized`);
    let dimensions;
    for (let offset = 2; offset < bytes.length;) {
      assert.equal(bytes[offset],0xff);
      const marker = bytes[offset+1];
      if ([0xc0,0xc1,0xc2].includes(marker)) {
        dimensions = {height:bytes.readUInt16BE(offset+5),width:bytes.readUInt16BE(offset+7)};
        break;
      }
      offset += 2 + bytes.readUInt16BE(offset+2);
    }
    assert.ok(dimensions,`${src} must contain image dimensions`);
    assert.ok(dimensions.width >= 1000 && dimensions.height >= 400,`${src} must be high resolution`);
    assets.add(require('node:crypto').createHash('sha256').update(bytes).digest('hex'));
  };
  for (const lesson of lessons) {
    const icons = lesson.contexts.map((_,index) => context.window.HanziArt.icon(lesson.id,index));
    assert.equal(new Set(icons).size,3,`${lesson.id} needs three different context pictures`);
    for (const [index,icon] of icons.entries()) {
      checkPhoto(icon);
      assert.match(icon, /loading="lazy"/);
      const scene = context.window.HanziArt.scene(lesson.id,index);
      assert.match(scene, /scene-art/);
      assert.ok(scene.includes(`/${lesson.id}-${index}.jpg`));
      assert.doesNotMatch(scene, /loading="lazy"/);
    }
  }
  assert.equal(context.window.HanziArt.island,undefined);
  assert.equal(assets.size,144,'Every teaching photo must be distinct');
  const index = fs.readFileSync(path.join(__dirname,'index.html'),'utf8');
  assert.match(index, /data-mode="hanzi" onclick="setHanziView\(true\)"/);
  assert.match(index, /frame.src = 'hanzi.html'/);
  assert.match(index, /HanziApp\?\.leave\(\)/);
});

test('home page lists every theme and gives each story its own photo', () => {
  const source = fs.readFileSync(path.join(__dirname,'hanzi.js'),'utf8');
  const map = source.slice(source.indexOf('function renderMap('),source.indexOf('function openGate('));
  assert.match(map, /chapters\.map\(/);
  assert.match(map, /art\.icon\(lesson\.id\)/);
  assert.doesNotMatch(source, /chapter-select|selectChapter|art\.island|scrollIntoView/);
  assert.ok(map.indexOf('class="today-card"') < map.indexOf('class="story-atlas"'));
});

test('photographic review choices avoid ambiguous natural backgrounds', () => {
  for (const id of ['water','wood','stone']) {
    assert.deepEqual(lessons.find(lesson => lesson.id === id).meaningDistractors,['mouth','eye']);
  }
  for (const id of ['flower','grass','leaf','bamboo']) {
    assert.deepEqual(lessons.find(lesson => lesson.id === id).meaningDistractors,['rice','mouth']);
  }
  assert.equal(lessons.find(lesson => lesson.id === 'ear').contexts[2].label,'正在听人说话的耳朵');
  assert.equal(lessons.find(lesson => lesson.id === 'rabbit').contexts[0].label,'胡萝卜旁自然坐起的兔');
});

test('photo provenance covers every lesson exactly once', () => {
  const directory = path.join(__dirname,'hanzi-images','realistic-v1');
  const entries = fs.readdirSync(directory).filter(name => /^batch-.*\.json$/.test(name))
    .flatMap(name => JSON.parse(fs.readFileSync(path.join(directory,name),'utf8')));
  const expected = lessons.map(lesson => lesson.id).sort();
  assert.deepEqual(entries.map(entry => entry.id).sort(),expected);
  for (const entry of entries) {
    assert.ok(typeof entry.sourcePath === 'string' && entry.sourcePath.endsWith('.png'));
    assert.ok(entry.prompt === null || (typeof entry.prompt === 'string' && entry.prompt.length > 100));
    assert.ok(entry.reviewNotes && !/pending|require visual review/i.test(entry.reviewNotes));
    assert.equal(entry.cuts.length,2);
    assert.ok(entry.cuts.every(Number.isInteger));
    assert.ok(entry.cuts[0] > 400 && entry.cuts[1] > entry.cuts[0] + 400 && entry.cuts[1] < 1392);
  }
});

test('exports the agreed CommonJS API and fresh independent state containers', () => {
  assert.equal(core.STORAGE_KEY, 'pb_hanzi_v1');
  assert.deepEqual(core.DIMENSIONS, ['audio_shape', 'meaning', 'oral']);
  const first = core.createState();
  const second = core.createState();
  assert.deepEqual(first, { version: 1, consent: null, sound: true, completed: {}, attempts: [], draft: null });
  assert.notEqual(first, second);
  assert.notEqual(first.completed, second.completed);
  assert.notEqual(first.attempts, second.attempts);
});

test('UMD exposes window.HanziCore without require or other dependencies', () => {
  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, 'hanzi-core.js'), 'utf8'), sandbox);
  const browserCore = sandbox.window.HanziCore;
  assert.equal(browserCore.STORAGE_KEY, core.STORAGE_KEY);
  assert.deepEqual(Object.keys(browserCore), Object.keys(core));
  assert.equal(browserCore.addDays('2026-12-31', 1), '2027-01-01');
  assert.equal(browserCore.createState().consent, null);
});

test('dateKey is a zero-padded local date, including the default today', () => {
  assert.equal(core.dateKey(new Date(2026, 0, 2, 0, 1)), '2026-01-02');
  const now = new Date();
  const expected = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  assert.equal(core.dateKey(now), expected);
  assert.equal(core.dateKey(), expected);
  assert.throws(() => core.dateKey(new Date(NaN)), RangeError);
  assert.throws(() => core.dateKey('2026-01-02'), RangeError);
});

test('addDays handles local calendar boundaries, leap years, negative days and early years', () => {
  for (const [input, count, expected] of [
    ['2026-01-31', 1, '2026-02-01'], ['2026-12-31', 1, '2027-01-01'],
    ['2026-01-01', -1, '2025-12-31'], ['2024-02-28', 1, '2024-02-29'],
    ['2024-02-29', 1, '2024-03-01'], ['2100-02-28', 1, '2100-03-01'],
    ['2000-02-28', 1, '2000-02-29'], ['0001-01-01', 1, '0001-01-02'],
    ['0099-12-31', 1, '0100-01-01'], ['2026-06-15', 0, '2026-06-15']
  ]) assert.equal(core.addDays(input, count), expected);
  for (const input of ['2026-02-29', '2026-04-31', '2026-13-01', '2026-00-01', '2026-01-00', '0000-01-01', '2026-1-1', null]) {
    assert.throws(() => core.addDays(input, 1), RangeError);
  }
  for (const count of [1.5, '1', NaN, Infinity]) assert.throws(() => core.addDays(day, count), RangeError);
});

test('calendar arithmetic and local keys survive DST and both UTC date boundaries', () => {
  const modulePath = JSON.stringify(path.join(__dirname, 'hanzi-core.js'));
  for (const [zone, instant, expected] of [
    ['America/New_York', '2026-03-08T04:30:00.000Z', '2026-03-07'],
    ['Asia/Shanghai', '2026-01-01T16:30:00.000Z', '2026-01-02'],
    ['Pacific/Honolulu', '2026-01-01T02:00:00.000Z', '2025-12-31']
  ]) {
    const script = `
      const assert = require('node:assert/strict');
      const core = require(${modulePath});
      assert.equal(core.dateKey(new Date(${JSON.stringify(instant)})), ${JSON.stringify(expected)});
      assert.equal(core.addDays('2026-03-07', 1), '2026-03-08');
      assert.equal(core.addDays('2026-03-08', 1), '2026-03-09');
      assert.equal(core.addDays('2026-03-09', -1), '2026-03-08');
      assert.equal(core.addDays('2026-10-31', 1), '2026-11-01');
      assert.equal(core.addDays('2026-11-01', 1), '2026-11-02');
      assert.equal(core.addDays('2026-11-02', -1), '2026-11-01');
      const state = core.createState();
      state.consent = ${JSON.stringify(consent)};
      core.completeLesson(state, 'local-lesson', '2026-03-07');
      core.completeReview(state, 'local-lesson', true, '2026-03-08');
      assert.equal(state.completed['local-lesson'].nextReview, '2026-03-10');
    `;
    const result = spawnSync(process.execPath, ['-e', script], { env: { ...process.env, TZ: zone }, encoding: 'utf8', timeout: 15000 });
    assert.equal(result.status, 0, `${zone}: ${result.error || result.stderr}`);
  }
});

test('storage corruption, non-JSON and mismatched versions reset to a fresh state', () => {
  for (const raw of [undefined, null, '', '{', 'null', '[]', 'true', '42', '"text"', '{}',
    JSON.stringify({ version: '1', consent }), JSON.stringify({ version: 2, consent }), core.createState()]) {
    assert.deepEqual(core.parseState(raw, lessons), core.createState());
  }
});

test('valid storage is copied, normalized and stripped of unknown fields', () => {
  const value = attempt();
  const state = core.parseState(stored({ sound: false, attempts: [{ ...value, injected: true }],
    completed: { [target.id]: { ...completed(), injected: true } }, injected: true }), lessons);
  assert.equal(state.sound, false);
  assert.deepEqual(state.consent, consent);
  assert.deepEqual(state.attempts, [value]);
  assert.deepEqual(state.completed[target.id], completed());
  assert.equal('injected' in state, false);
  assert.deepEqual(core.parseState(JSON.stringify(state), lessons), state);
  assert.equal(core.parseState(stored({ sound: 'false' }), lessons).sound, true);
});

test('malformed consent never unlocks or restores progress', () => {
  for (const bad of [undefined, null, true, {}, [], { at: consent.at }, { version: 1 },
    { at: consent.at, version: 2 }, { at: 'yesterday', version: 1 },
    { at: '2026-02-30T10:00:00Z', version: 1 }, { at: '2026-01-01', version: 1 },
    { at: '2026-01-01T24:00:00Z', version: 1 }, { at: '2026-01-01T10:60:00Z', version: 1 }]) {
    const state = core.parseState(stored({ consent: bad, attempts: [attempt()],
      completed: { [target.id]: completed() }, draft: draft() }), lessons);
    assert.equal(state.consent, null);
    assert.deepEqual(state.completed, {});
    assert.deepEqual(state.attempts, []);
    assert.equal(state.draft, null);
    assert.equal(core.recordAttempt(state, attempt()), false);
    assert.equal(core.completeLesson(state, target.id, day), false);
  }
  assert.deepEqual(core.parseState(stored({ consent: { at: '2026-01-01T18:00:00+08:00', version: 1 } }), lessons).consent,
    { at: '2026-01-01T18:00:00+08:00', version: 1 });
});

test('storage excludes unknown IDs and prototype keys; catalog remains attached to a fresh parsed state', () => {
  const raw = stored({ completed: { [target.id]: completed(), unknown: completed(), ['__proto__']: completed() },
    attempts: [attempt({ lessonId: 'unknown' }), attempt({ lessonId: '__proto__' }), attempt()] });
  const state = core.parseState(raw, lessons);
  assert.deepEqual(Object.keys(state.completed), [target.id]);
  assert.equal(state.attempts.length, 1);
  assert.equal({}.firstDate, undefined);
  assert.equal(core.recordAttempt(state, attempt({ lessonId: 'unknown' })), false);
  assert.equal(core.completeLesson(state, 'unknown', day), false);
  assert.equal(core.completeReview(state, 'unknown', true, '2026-01-11'), false);
  const fresh = stateWithConsent();
  assert.equal(core.completeLesson(fresh, 'unknown', day), false);
  assert.equal(core.recordAttempt(fresh, attempt({ lessonId: 'unknown' })), false);
  assert.equal(core.parseState(raw, []).attempts.length, 0);
  assert.deepEqual(core.parseState(raw).completed, {});
});

test('missing containers normalize and invalid completion dates are dropped', () => {
  for (const wrong of [null, [], 'bad', 9]) {
    const state = core.parseState(stored({ completed: wrong, attempts: wrong, draft: wrong }), lessons);
    assert.deepEqual(state.completed, {});
    assert.deepEqual(state.attempts, []);
    assert.equal(state.draft, null);
  }
  for (const change of [{ firstDate: undefined }, { lastDate: '2026-02-30' }, { nextReview: 'tomorrow' },
    { firstDate: '2026-01-12' }, { lastDate: '2026-01-09' }, { nextReview: day }]) {
    assert.deepEqual(core.parseState(stored({ completed: { [target.id]: completed(change) } }), lessons).completed, {});
  }
  for (const reviewStage of [undefined, -1, 4, 1.5, '3', true]) {
    assert.equal(core.parseState(stored({ completed: { [target.id]: completed({ reviewStage }) } }), lessons).completed[target.id].reviewStage, 0);
  }
  for (const reviewStage of [0, 1, 2, 3]) {
    assert.equal(core.parseState(stored({ completed: { [target.id]: completed({ reviewStage }) } }), lessons).completed[target.id].reviewStage, reviewStage);
  }
});

test('attempt validation rejects malformed evidence instead of granting independent status', () => {
  for (const change of [{ id: '' }, { lessonId: '' }, { dimension: 'reading' }, { firstAnswer: 'true' },
    { firstAnswer: undefined }, { correct: 1 }, { correct: undefined }, { hintLevel: -1 }, { hintLevel: 4 },
    { hintLevel: 0.5 }, { hintLevel: '0' }, { hintLevel: undefined }, { context: '' }, { context: '   ' },
    { context: {} }, { date: '2026-02-29' }, { date: '2026-01-10T00:00:00Z' }, { source: 'robot' },
    { source: 'parent' }, { dimension: 'oral', source: 'interaction' }]) {
    const value = attempt(change);
    const state = stateWithConsent();
    assert.equal(core.recordAttempt(state, value), false, JSON.stringify(change));
    assert.deepEqual(state.attempts, []);
    const parsed = core.parseState(stored({ attempts: [value] }), lessons);
    assert.deepEqual(parsed.attempts, []);
    assert.equal(evidence(parsed).status, 'unseen');
  }
});

test('recordAttempt changes attempts only, copies input and deduplicates by ID', () => {
  const state = stateWithConsent();
  const before = { ...state, attempts: [] };
  const value = attempt({ context: ` ${target.contexts[0].id} ` });
  assert.equal(core.recordAttempt(state, value), true);
  assert.deepEqual({ ...state, attempts: [] }, before);
  assert.notEqual(state.attempts[0], value);
  assert.equal(state.attempts[0].context, target.contexts[0].id);
  value.correct = false;
  assert.equal(state.attempts[0].correct, true);
  assert.equal(core.recordAttempt(state, { ...value, dimension: 'meaning' }), false);
  assert.equal(state.attempts.length, 1);
  const parsed = core.parseState(stored({ attempts: [state.attempts[0], { ...state.attempts[0], correct: false }] }), lessons);
  assert.equal(parsed.attempts.length, 1);
  assert.equal(parsed.attempts[0].correct, true);
  assert.equal(core.recordAttempt(parsed, state.attempts[0]), false);
});

test('reload resets audio readiness and copies valid drafts without treating audio as durable', () => {
  const input = draft();
  const state = core.parseState(stored({ draft: input }), lessons);
  assert.deepEqual(state.draft, { ...input, audioReady: false });
  assert.notEqual(state.draft.choices, input.choices);
  for (let step = 0; step <= 6; step++) {
    assert.equal(core.parseState(stored({ draft: draft({ step }) }), lessons).draft.step, step);
  }
  assert.equal(core.parseState(stored({ draft: draft({ feedback: undefined, audioReady: undefined }) }), lessons).draft.feedback, '');
  assert.equal(core.parseState(stored({ draft: draft({ hintLevel: 1 }) }), lessons).draft.assisted, true);
  assert.equal(core.parseState(stored({ draft: draft({ wrongCount: 1, firstRecorded: true }) }), lessons).draft.assisted, true);
});

test('invalid draft IDs, choices, bounds and field types are discarded', () => {
  for (const change of [{ lessonId: 'unknown' }, { mode: 'exam' }, { step: -1 }, { step: 7 }, { step: 1.5 },
    { contextIndex: -1 }, { contextIndex: 3 }, { contextIndex: '1' }, { choices: [] },
    { choices: [target.id, target.id] }, { choices: [other.id, third.id] }, { choices: [target.id, 'unknown'] },
    { choices: [target.id, other.id, third.id] }, { choices: 'bad' }, { hintLevel: 4 }, { hintLevel: undefined },
    { wrongCount: 3 }, { wrongCount: -1 }, { firstRecorded: 1 }, { firstRecorded: undefined },
    { answered: 'false' }, { assisted: 'true' }, { feedback: {} }, { audioReady: 'true' }]) {
    assert.equal(core.parseState(stored({ draft: draft(change) }), lessons).draft, null, JSON.stringify(change));
  }
  assert.equal(core.parseState(stored({ draft: draft({ mode: 'review' }) }), lessons).draft, null);
  const state = core.parseState(stored({ completed: { [target.id]: completed() }, draft: draft({ mode: 'review', step: 0, contextIndex: 1 }) }), lessons);
  assert.equal(state.draft.mode, 'review');
  for (const invalid of [{mode:'review',step:3,contextIndex:1},{mode:'review',step:0,contextIndex:0},{mode:'lesson',contextIndex:1}]) {
    const value = core.parseState(stored({completed:{[target.id]:completed()},draft:draft(invalid)}),lessons);
    assert.equal(value.draft,null);
  }
});

test('persisted feedback cannot introduce markup or extra draft fields', () => {
  const state = core.parseState(stored({ draft: draft({ feedback: '<img src=x onerror=alert(1)>', injected: true }) }), lessons);
  assert.equal(state.draft.feedback, '');
  assert.equal('injected' in state.draft, false);
  assert.equal(core.parseState(stored({ draft: draft({ feedback: '自己试一试' }) }), lessons).draft.feedback, '自己试一试');
});

test('unseen evidence remains unseen after followups or a lesson completion', () => {
  const state = stateWithConsent();
  assert.deepEqual(evidence(state), { status: 'unseen', label: '未观察', independentCount: 0, dates: [], contexts: [], last: null });
  record(state, { firstAnswer: false });
  assert.equal(evidence(state).status, 'unseen');
  assert.equal(core.completeLesson(state, target.id, day), true);
  assert.equal(evidence(state).status, 'unseen');
  assert.equal(core.evidenceFor(state, target.id, 'unknown').status, 'unseen');
  assert.equal(core.evidenceFor(state, 'unknown', 'audio_shape').status, 'unseen');
});

test('only correct unhinted first answers are independent', () => {
  for (const changes of [{ correct: false }, { hintLevel: 1 }, { hintLevel: 2 }, { hintLevel: 3 }]) {
    const state = stateWithConsent();
    record(state, changes);
    assert.equal(evidence(state).status, 'prompted');
    assert.equal(evidence(state).label, '提示中');
    assert.equal(evidence(state).independentCount, 0);
    record(state, { firstAnswer: false, correct: true, date: '2026-01-11', context: target.contexts[1].id });
    assert.equal(evidence(state).status, 'prompted');
  }
  const state = stateWithConsent();
  const first = record(state);
  assert.deepEqual(evidence(state), { status: 'independent', label: '独立尝试', independentCount: 1,
    dates: [day], contexts: [target.contexts[0].id], last: first });
});

test('retention needs multiple independent first answers on different dates and in different contexts', () => {
  const sameDay = stateWithConsent();
  record(sameDay);
  record(sameDay, { context: target.contexts[1].id });
  assert.equal(evidence(sameDay).status, 'independent');
  const sameContext = stateWithConsent();
  record(sameContext);
  record(sameContext, { date: '2026-01-11' });
  assert.equal(evidence(sameContext).status, 'independent');
  const state = stateWithConsent();
  record(state);
  record(state, { date: '2026-01-11', context: target.contexts[1].id });
  assert.equal(evidence(state).status, 'retained');
  assert.equal(evidence(state).label, '跨日可用');
  assert.equal(evidence(state).independentCount, 2);
  assert.deepEqual(evidence(state).dates, [day, '2026-01-11']);
  assert.deepEqual(evidence(state).contexts, [target.contexts[0].id, target.contexts[1].id]);
});

test('wrong or hinted first answers regress retention; corrected followups do not restore it', () => {
  for (const changes of [{ correct: false }, { hintLevel: 1 }]) {
    const state = stateWithConsent();
    record(state);
    record(state, { date: '2026-01-11', context: target.contexts[1].id });
    assert.equal(evidence(state).status, 'retained');
    const failure = record(state, { date: '2026-01-12', ...changes });
    assert.equal(evidence(state).status, 'prompted');
    assert.equal(evidence(state).independentCount, 0);
    record(state, { date: '2026-01-12', firstAnswer: false });
    assert.equal(evidence(state).last.id, failure.id);
    assert.equal(evidence(state).status, 'prompted');
    record(state, { date: '2026-01-12' });
    assert.equal(evidence(state).status, 'independent');
    record(state, { date: '2026-01-12', context: target.contexts[1].id });
    assert.equal(evidence(state).status, 'independent');
    record(state, { date: '2026-01-13', context: target.contexts[1].id });
    assert.equal(evidence(state).status, 'retained');
  }
});

test('followup failures do not regress independent first-response evidence', () => {
  const state = stateWithConsent();
  const first = record(state);
  record(state, { firstAnswer: false, correct: false, hintLevel: 3 });
  assert.equal(evidence(state).status, 'independent');
  assert.equal(evidence(state).last.id, first.id);
  assert.equal(evidence(state).independentCount, 1);
});

test('audio, meaning and parent-only oral observations remain separate', () => {
  const state = stateWithConsent();
  record(state);
  record(state, { dimension: 'meaning', date: '2026-01-11', context: target.contexts[1].id });
  assert.equal(evidence(state).status, 'independent');
  assert.equal(evidence(state, 'meaning').status, 'independent');
  assert.equal(evidence(state, 'oral').status, 'unseen');
  record(state, { dimension: 'oral', source: 'parent', context: 'home-cup' });
  record(state, { dimension: 'oral', source: 'parent', context: 'home-bowl', date: '2026-01-11' });
  assert.equal(evidence(state, 'oral').status, 'retained');
  assert.equal(evidence(state).status, 'independent');
  assert.equal(evidence(state, 'meaning').status, 'independent');
  record(state, { lessonId: other.id, date: '2026-01-11', context: 'another-lesson' });
  assert.equal(evidence(state).status, 'independent');
  record(state, { dimension: 'oral', source: 'parent', correct: false });
  assert.equal(evidence(state, 'oral').status, 'prompted');
  assert.equal(evidence(state).status, 'independent');
});

test('evidence also ignores malformed, duplicate and wrong-source entries inserted directly', () => {
  const state = stateWithConsent();
  const first = record(state);
  state.attempts.push({ ...first, date: '2026-01-11', context: 'fake-other-context' });
  state.attempts.push(attempt({ source: 'parent', date: '2026-01-11', context: 'fake-other-context' }));
  state.attempts.push(attempt({ dimension: 'oral', source: 'interaction' }));
  state.attempts.push(attempt({ hintLevel: undefined }));
  state.attempts.push(null);
  assert.equal(evidence(state).independentCount, 1);
  assert.equal(evidence(state).status, 'independent');
  assert.equal(evidence(state, 'oral').status, 'unseen');
});

test('all mutations require valid consent and invalid calls are non-mutating', () => {
  for (const bad of [null, true, {}, { ...consent, version: 2 }, { at: 'no', version: 1 }]) {
    const state = core.createState();
    state.consent = bad;
    state.completed[target.id] = completed();
    const before = JSON.stringify(state);
    assert.equal(core.recordAttempt(state, attempt()), false);
    assert.equal(core.completeLesson(state, other.id, day), false);
    assert.equal(core.completeReview(state, target.id, true, '2026-01-11'), false);
    assert.equal(JSON.stringify(state), before);
  }
  assert.equal(core.recordAttempt(null, attempt()), false);
  assert.equal(core.completeLesson(null, target.id, day), false);
  assert.equal(core.completeReview(null, target.id, true, day), false);
});

test('first completion schedules tomorrow and replays never alter completion or evidence', () => {
  const state = stateWithConsent();
  assert.equal(core.completeLesson(state, target.id, day), true);
  assert.deepEqual(state.completed[target.id], completed());
  const before = JSON.stringify(state);
  assert.equal(core.completeLesson(state, target.id, day), false);
  assert.equal(core.completeLesson(state, target.id, '2026-01-20'), false);
  assert.equal(JSON.stringify(state), before);
  assert.equal(evidence(state).status, 'unseen');
});

test('day 1, day 3 and day 7 reviews stay anchored to the first completion then go weekly', () => {
  const state = stateWithConsent();
  core.completeLesson(state, target.id, day);
  assert.deepEqual(core.dueReviews(state, lessons, day), []);
  assert.deepEqual(core.dueReviews(state, lessons, '2026-01-11'), [target]);
  assert.equal(core.completeReview(state, target.id, true, '2026-01-11'), true);
  assert.deepEqual(state.completed[target.id], completed({ lastDate: '2026-01-11', nextReview: '2026-01-13', reviewStage: 1 }));
  assert.deepEqual(core.dueReviews(state, lessons, '2026-01-12'), []);
  assert.deepEqual(core.dueReviews(state, lessons, '2026-01-13'), [target]);
  assert.equal(core.completeReview(state, target.id, true, '2026-01-13'), true);
  assert.deepEqual(state.completed[target.id], completed({ lastDate: '2026-01-13', nextReview: '2026-01-17', reviewStage: 2 }));
  assert.equal(core.completeReview(state, target.id, true, '2026-01-17'), true);
  assert.deepEqual(state.completed[target.id], completed({ lastDate: '2026-01-17', nextReview: '2026-01-24', reviewStage: 3 }));
  assert.equal(core.completeReview(state, target.id, true, '2026-01-24'), true);
  assert.equal(state.completed[target.id].nextReview, '2026-01-31');
  assert.equal(state.completed[target.id].reviewStage, 3);
  assert.equal(state.completed[target.id].firstDate, day);
  assert.equal(evidence(state).status, 'unseen');
});

test('same-day or backdated reviews do not advance or reset scheduling', () => {
  const state = stateWithConsent();
  core.completeLesson(state, target.id, day);
  let before = JSON.stringify(state);
  for (const independent of [true, false]) {
    assert.equal(core.completeReview(state, target.id, independent, day), false);
    assert.equal(core.completeReview(state, target.id, independent, '2026-01-09'), false);
    assert.equal(JSON.stringify(state), before);
  }
  core.completeReview(state, target.id, true, '2026-01-11');
  before = JSON.stringify(state);
  for (let i = 0; i < 5; i++) {
    assert.equal(core.completeReview(state, target.id, true, '2026-01-11'), false);
    assert.equal(core.completeReview(state, target.id, false, '2026-01-11'), false);
    assert.equal(core.completeLesson(state, target.id, '2026-01-11'), false);
  }
  assert.equal(JSON.stringify(state), before);
  assert.deepEqual(core.dueReviews(state, lessons, '2026-01-11'), []);
});

test('review failure resets to stage zero and tomorrow without changing first completion', () => {
  const state = stateWithConsent();
  core.completeLesson(state, target.id, day);
  core.completeReview(state, target.id, true, '2026-01-11');
  assert.equal(core.completeReview(state, target.id, false, '2026-01-13'), true);
  assert.deepEqual(state.completed[target.id], completed({ lastDate: '2026-01-13', nextReview: '2026-01-14', reviewStage: 0 }));
  assert.equal(core.completeReview(state, target.id, true, '2026-01-13'), false);
  assert.equal(core.completeReview(state, target.id, true, '2026-01-14'), true);
  assert.equal(state.completed[target.id].nextReview, '2026-01-17');
  assert.equal(state.completed[target.id].reviewStage, 1);
});

test('late reviews choose a future original checkpoint or a week from today', () => {
  const state = stateWithConsent();
  core.completeLesson(state, target.id, day);
  core.completeReview(state, target.id, true, '2026-01-15');
  assert.equal(state.completed[target.id].nextReview, '2026-01-17');
  assert.equal(state.completed[target.id].reviewStage, 1);
  core.completeReview(state, target.id, true, '2026-01-20');
  assert.equal(state.completed[target.id].nextReview, '2026-01-27');
  assert.equal(state.completed[target.id].reviewStage, 2);
  core.completeReview(state, target.id, false, '2026-01-27');
  assert.equal(state.completed[target.id].nextReview, '2026-01-28');
  core.completeReview(state, target.id, true, '2026-01-28');
  assert.equal(state.completed[target.id].nextReview, '2026-02-04');
});

test('completion validates IDs, calendar days, completed entries and boolean review outcomes', () => {
  const state = stateWithConsent();
  assert.equal(core.completeLesson(state, target.id, '2026-02-30'), false);
  assert.equal(core.completeLesson(state, '__proto__', day), false);
  assert.equal(core.completeLesson(state, target.id, '9999-12-31'), false);
  assert.equal(core.completeReview(state, target.id, true, '2026-01-11'), false);
  core.completeLesson(state, target.id, day);
  const before = JSON.stringify(state);
  for (const value of ['true', 1, undefined, null]) assert.equal(core.completeReview(state, target.id, value, '2026-01-11'), false);
  assert.equal(core.completeReview(state, target.id, true, 'bad'), false);
  assert.equal(JSON.stringify(state), before);
  state.completed[other.id] = {};
  assert.equal(core.completeReview(state, other.id, true, '2026-01-11'), false);
});

test('dueReviews returns known lesson objects oldest first, never more than two', () => {
  const state = stateWithConsent();
  core.completeLesson(state, target.id, '2026-01-10');
  core.completeLesson(state, other.id, '2026-01-08');
  core.completeLesson(state, third.id, '2026-01-09');
  state.completed.unknown = completed({ firstDate: '2026-01-01', lastDate: '2026-01-01', nextReview: '2026-01-02' });
  const before = JSON.stringify(state);
  assert.deepEqual(core.dueReviews(state, lessons, '2026-01-11'), [other, third]);
  assert.deepEqual(core.dueReviews(state, lessons, '2026-01-11', 100), [other, third]);
  assert.deepEqual(core.dueReviews(state, lessons, '2026-01-11', 1), [other]);
  assert.deepEqual(core.dueReviews(state, lessons, '2026-01-11', 0), []);
  assert.deepEqual(core.dueReviews(state, lessons, '2026-01-11', -1), []);
  assert.deepEqual(core.dueReviews(state, lessons, 'bad'), []);
  assert.equal(JSON.stringify(state), before);
  core.completeReview(state, other.id, false, '2026-01-11');
  assert.deepEqual(core.dueReviews(state, lessons, '2026-01-11'), [third]);
  assert.equal(core.dueReviews(state, lessons, '2026-01-11')[0], third);
  core.completeReview(state, third.id, true, '2026-01-11');
  assert.deepEqual(core.dueReviews(state, lessons, '2026-01-11'), []);
  assert.ok(core.dueReviews(state, lessons, '2026-01-12').includes(target));
});

test('nextLesson picks the first incomplete real lesson and does not teach distractors', () => {
  const state = stateWithConsent();
  assert.equal(core.nextLesson(state, lessons), target);
  core.shuffledChoices(target.id, lessons, () => 0.8);
  assert.deepEqual(state.completed, {});
  core.completeLesson(state, target.id, day);
  assert.equal(core.nextLesson(state, lessons), other);
  state.completed[other.id] = {};
  assert.equal(core.nextLesson(state, lessons), other);
  delete state.completed[other.id];
  for (const lesson of lessons) core.completeLesson(state, lesson.id, day);
  assert.equal(core.nextLesson(state, lessons), null);
  assert.equal(core.nextLesson(state, []), null);
});

test('shuffledChoices produces distinct target plus varying known distractors and both orders', () => {
  const before = JSON.stringify(lessons);
  const alternatives = lessons.filter(lesson => lesson.id !== target.id);
  const seen = new Set();
  for (let index = 0; index < alternatives.length; index++) {
    const draws = [(index + 0.1) / alternatives.length, 0.9];
    const choices = core.shuffledChoices(target.id, lessons, () => draws.shift());
    assert.deepEqual(choices, [target.id, alternatives[index].id]);
    assert.equal(new Set(choices).size, 2);
    seen.add(choices[1]);
  }
  assert.equal(seen.size, alternatives.length);
  assert.deepEqual(core.shuffledChoices(target.id, lessons, () => 0), [other.id, target.id]);
  assert.equal(JSON.stringify(lessons), before);
  for (let i = 0; i < 100; i++) {
    const choices = core.shuffledChoices(target.id, lessons);
    assert.equal(choices.length, 2);
    assert.equal(new Set(choices).size, 2);
    assert.ok(choices.includes(target.id));
    assert.ok(choices.every(id => lessons.some(lesson => lesson.id === id)));
  }
});

test('choices handle missing targets, insufficient lessons and duplicate catalog entries', () => {
  assert.deepEqual(core.shuffledChoices('unknown', lessons), []);
  assert.deepEqual(core.shuffledChoices(target.id, []), []);
  assert.deepEqual(core.shuffledChoices(target.id, [target, target]), []);
  assert.deepEqual(core.shuffledChoices(target.id, [target, target, other, other], () => 0.9), [target.id, other.id]);
  for (const value of [1, -1, NaN]) {
    const choices = core.shuffledChoices(target.id, lessons, () => value);
    assert.equal(choices.length, 2);
    assert.equal(new Set(choices).size, 2);
    assert.ok(choices.includes(target.id));
  }
});
