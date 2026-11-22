(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.HanziCore = factory();
}(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';

  const STORAGE_KEY = 'pb_hanzi_v1';
  const DIMENSIONS = Object.freeze(['audio_shape', 'meaning', 'oral']);
  const LABELS = Object.freeze({
    unseen: '未观察', prompted: '提示中', independent: '独立尝试', retained: '跨日可用'
  });
  const catalogs = new WeakMap();
  const own = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
  const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const integer = (value, min, max) => Number.isInteger(value) && value >= min && value <= max;
  const text = value => typeof value === 'string' && value.trim().length > 0;
  const validId = value => text(value) && value === value.trim() &&
    !['__proto__', 'prototype', 'constructor'].includes(value);

  function validDay(day) {
    if (typeof day !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(day)) return false;
    const [year, month, date] = day.split('-').map(Number);
    if (year < 1 || month < 1 || month > 12) return false;
    const leap = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    return date >= 1 && date <= [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month - 1];
  }

  function dateKey(date = new Date()) {
    if (!(date instanceof Date) || !Number.isFinite(date.getTime()) ||
        !integer(date.getFullYear(), 1, 9999)) throw new RangeError('Invalid local date');
    return [String(date.getFullYear()).padStart(4, '0'),
      String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
  }

  function addDays(day, count) {
    if (!validDay(day) || !Number.isSafeInteger(count)) throw new RangeError('Invalid calendar day or count');
    const [year, month, date] = day.split('-').map(Number);
    const local = new Date(0);
    local.setHours(12, 0, 0, 0);
    local.setFullYear(year, month - 1, date);
    local.setDate(local.getDate() + count);
    return dateKey(local);
  }

  function consentValue(value) {
    if (!object(value) || value.version !== 1 || typeof value.at !== 'string') return null;
    const match = /^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,3})?(Z|[+-]\d{2}:\d{2})$/.exec(value.at);
    if (!match || !validDay(match[1]) || Number(match[2]) > 23 || Number(match[3]) > 59 ||
        Number(match[4]) > 59 || !Number.isFinite(Date.parse(value.at))) return null;
    if (match[5] !== 'Z' && (Number(match[5].slice(1, 3)) > 23 || Number(match[5].slice(4)) > 59)) return null;
    return { at: value.at, version: 1 };
  }

  function lessonList(lessons) {
    const seen = new Set();
    return (Array.isArray(lessons) ? lessons : []).filter(lesson => {
      if (!object(lesson) || !validId(lesson.id) || seen.has(lesson.id)) return false;
      seen.add(lesson.id);
      return true;
    });
  }

  function knownId(state, id) {
    return validId(id) && (!catalogs.has(state) || catalogs.get(state).has(id));
  }

  function writable(state) {
    return object(state) && state.version === 1 && consentValue(state.consent) !== null;
  }

  function createState() {
    return { version: 1, consent: null, sound: true, completed: {}, attempts: [], draft: null };
  }

  function completionValue(value) {
    if (!object(value) || !validDay(value.firstDate) || !validDay(value.lastDate) ||
        !validDay(value.nextReview) || value.firstDate > value.lastDate ||
        value.nextReview <= value.lastDate) return null;
    return {
      firstDate: value.firstDate, lastDate: value.lastDate, nextReview: value.nextReview,
      reviewStage: integer(value.reviewStage, 0, 3) ? value.reviewStage : 0
    };
  }

  function attemptValue(value, ids) {
    if (!object(value) || !validId(value.id) || !validId(value.lessonId) ||
        (ids && !ids.has(value.lessonId)) || !DIMENSIONS.includes(value.dimension) ||
        typeof value.firstAnswer !== 'boolean' || typeof value.correct !== 'boolean' ||
        !integer(value.hintLevel, 0, 3) || !text(value.context) || !validDay(value.date) ||
        (value.dimension === 'oral' ? value.source !== 'parent' : value.source !== 'interaction')) return null;
    return {
      id: value.id, lessonId: value.lessonId, dimension: value.dimension,
      firstAnswer: value.firstAnswer, correct: value.correct, hintLevel: value.hintLevel,
      context: value.context.trim(), date: value.date, source: value.source
    };
  }

  function playValue(value) {
    if (!object(value) || !integer(value.stage, 0, 3) || !integer(value.selected, -1, 5) ||
        !Array.isArray(value.done) || value.done.length > 6 ||
        new Set(value.done).size !== value.done.length || !value.done.every(index => integer(index, 0, 5))) {
      return { stage: 0, done: [], selected: -1 };
    }
    return { stage: value.stage, done: value.done.slice(), selected: value.selected };
  }

  function draftValue(value, ids, completed) {
    if (!object(value) || !ids.has(value.lessonId) || !['lesson', 'review'].includes(value.mode) ||
        (value.mode === 'review' && !own(completed, value.lessonId)) ||
        !integer(value.step, 0, value.mode === 'review' ? 2 : 6) ||
        !integer(value.contextIndex, value.mode === 'review' ? 1 : 0, value.mode === 'review' ? 2 : 0) ||
        !Array.isArray(value.choices) || value.choices.length !== 2 ||
        value.choices[0] === value.choices[1] || !value.choices.includes(value.lessonId) ||
        !value.choices.every(id => ids.has(id)) || !integer(value.hintLevel, 0, 3) ||
        !integer(value.wrongCount, 0, 2) || typeof value.firstRecorded !== 'boolean' ||
        typeof value.answered !== 'boolean' || typeof value.assisted !== 'boolean' ||
        (value.feedback !== undefined && typeof value.feedback !== 'string') ||
        (value.audioReady !== undefined && typeof value.audioReady !== 'boolean')) return null;
    // Reject tag-like feedback; persisted feedback is plain text, never trusted markup.
    const feedback = typeof value.feedback === 'string' && !/[<>]/.test(value.feedback) ? value.feedback.slice(0, 1000) : '';
    return {
      lessonId: value.lessonId, mode: value.mode, step: value.step, contextIndex: value.contextIndex,
      choices: value.choices.slice(), hintLevel: value.hintLevel, wrongCount: value.wrongCount,
      firstRecorded: value.firstRecorded, answered: value.answered, feedback, audioReady: false,
      assisted: value.assisted || value.hintLevel > 0 || value.wrongCount > 0,
      ...(value.play !== undefined ? { play: playValue(value.play) } : {})
    };
  }

  function parseState(raw, lessons) {
    const state = createState();
    const ids = new Set(lessonList(lessons).map(lesson => lesson.id));
    // The supplied catalog also constrains later mutations without entering stored JSON.
    catalogs.set(state, ids);
    let value;
    try { value = typeof raw === 'string' ? JSON.parse(raw) : null; } catch (_) { return state; }
    if (!object(value) || value.version !== 1) return state;
    state.sound = typeof value.sound === 'boolean' ? value.sound : true;
    state.consent = consentValue(value.consent);
    if (!state.consent) return state;
    if (object(value.completed)) {
      for (const id of ids) {
        if (!own(value.completed, id)) continue;
        const completed = completionValue(value.completed[id]);
        if (completed) state.completed[id] = completed;
      }
    }
    const seen = new Set();
    if (Array.isArray(value.attempts)) {
      for (const item of value.attempts) {
        const attempt = attemptValue(item, ids);
        if (attempt && !seen.has(attempt.id)) {
          seen.add(attempt.id);
          state.attempts.push(attempt);
        }
      }
    }
    state.draft = draftValue(value.draft, ids, state.completed);
    return state;
  }

  function recordAttempt(state, attempt) {
    if (!writable(state) || !Array.isArray(state.attempts)) return false;
    const value = attemptValue(attempt, catalogs.get(state));
    if (!value || state.attempts.some(item => object(item) && item.id === value.id)) return false;
    state.attempts.push(value);
    return true;
  }

  function evidenceFor(state, lessonId, dimension) {
    const result = { status: 'unseen', label: LABELS.unseen, independentCount: 0, dates: [], contexts: [], last: null };
    if (!object(state) || !knownId(state, lessonId) || !DIMENSIONS.includes(dimension) || !Array.isArray(state.attempts)) return result;
    const seen = new Set();
    let streak = [];
    for (const item of state.attempts) {
      const attempt = attemptValue(item, catalogs.get(state));
      if (!attempt || seen.has(attempt.id)) continue;
      seen.add(attempt.id);
      if (attempt.lessonId !== lessonId || attempt.dimension !== dimension || !attempt.firstAnswer) continue;
      result.last = attempt;
      // Retention uses only independent first answers since the last wrong or hinted first answer.
      if (attempt.correct && attempt.hintLevel === 0) streak.push(attempt);
      else streak = [];
    }
    if (!result.last) return result;
    result.independentCount = streak.length;
    result.dates = Array.from(new Set(streak.map(attempt => attempt.date))).sort();
    result.contexts = Array.from(new Set(streak.map(attempt => attempt.context)));
    result.status = !streak.length ? 'prompted' :
      streak.length >= 2 && result.dates.length >= 2 && result.contexts.length >= 2 ? 'retained' : 'independent';
    result.label = LABELS[result.status];
    return result;
  }

  function completeLesson(state, id, today = dateKey()) {
    if (!writable(state) || !knownId(state, id) || !validDay(today) ||
        !object(state.completed) || own(state.completed, id)) return false;
    let nextReview;
    try { nextReview = addDays(today, 1); } catch (_) { return false; }
    state.completed[id] = { firstDate: today, lastDate: today, nextReview, reviewStage: 0 };
    return true;
  }

  function completeReview(state, id, independent, today = dateKey()) {
    if (!writable(state) || !knownId(state, id) || typeof independent !== 'boolean' || !validDay(today) ||
        !object(state.completed) || !own(state.completed, id)) return false;
    const entry = completionValue(state.completed[id]);
    if (!entry || entry.lastDate >= today) return false;
    const stage = independent ? Math.min(entry.reviewStage + 1, 3) : 0;
    let nextReview;
    try {
      nextReview = independent ? [1, 3, 7].slice(stage).map(days => addDays(entry.firstDate, days)).find(day => day > today) : null;
      if (!nextReview) nextReview = addDays(today, independent ? 7 : 1);
    } catch (_) { return false; }
    state.completed[id] = { firstDate: entry.firstDate, lastDate: today, nextReview, reviewStage: stage };
    return true;
  }

  function dueReviews(state, lessons, today = dateKey(), limit = 2) {
    if (!object(state) || !object(state.completed) || !validDay(today)) return [];
    const entries = lessonList(lessons).map(lesson => ({ lesson,
      entry: own(state.completed, lesson.id) ? completionValue(state.completed[lesson.id]) : null
    }));
    const reviewedToday = entries.filter(item => item.entry && item.entry.lastDate === today && item.entry.firstDate < today).length;
    const remaining = Math.max(0, 2 - reviewedToday);
    const count = Number.isInteger(limit) ? Math.max(0, Math.min(remaining, limit)) : remaining;
    return entries.filter(item => item.entry && item.entry.nextReview <= today && item.entry.lastDate < today)
      .sort((a, b) => a.entry.nextReview.localeCompare(b.entry.nextReview))
      .slice(0, count).map(item => item.lesson);
  }

  function nextLesson(state, lessons) {
    const completed = object(state) && object(state.completed) ? state.completed : {};
    return lessonList(lessons).find(lesson => !own(completed, lesson.id) || !completionValue(completed[lesson.id])) || null;
  }

  function shuffledChoices(targetId, lessons, random = Math.random) {
    const ids = lessonList(lessons).map(lesson => lesson.id);
    if (!ids.includes(targetId)) return [];
    const distractors = ids.filter(id => id !== targetId);
    if (!distractors.length) return [];
    function pick(length) {
      const value = random();
      return Number.isFinite(value) ? Math.max(0, Math.min(length - 1, Math.floor(value * length))) : 0;
    }
    const choices = [targetId, distractors[pick(distractors.length)]];
    if (pick(2) === 0) choices.reverse();
    return choices;
  }

  return Object.freeze({ STORAGE_KEY, DIMENSIONS, createState, dateKey, addDays, parseState,
    recordAttempt, evidenceFor, completeLesson, completeReview, dueReviews, nextLesson, shuffledChoices });
}));
