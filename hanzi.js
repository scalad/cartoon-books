'use strict';
(() => {
    const C = window.HanziCore, lessons = window.HanziLessons, art = window.HanziArt;
    const chapters = Array.from(new Set(lessons.map(lesson => lesson.region)), name => ({name, lessons:lessons.filter(lesson => lesson.region === name)}));
    const $ = id => document.getElementById(id);
    const esc = text => String(text ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const speaker = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4ZM17 8q5 4 0 8m3-11q8 7 0 14" stroke-linejoin="round" stroke-linecap="round"/></svg>';
    let data = C.createState(), page = 'map', parentAccess = false, noticeTimer, speechToken = 0, speaking = false;
    let gateAction = null, gateAnswer = 0, activeUtterance = null, storageSnapshot = null;
    const byId = id => lessons.find(lesson => lesson.id === id);
    try { storageSnapshot = localStorage.getItem(C.STORAGE_KEY); data = C.parseState(storageSnapshot, lessons); }
    catch { storageWarning(); }
    window.speechSynthesis?.getVoices();
    try { document.body.dataset.theme = localStorage.getItem('pb_theme') || 'light'; } catch {}
    function storageWarning() {
        $('storage-warning').hidden = false;
        $('storage-warning').textContent = '当前浏览器无法保存记录。可以继续体验，但关闭页面后进度可能丢失；请检查浏览器存储设置。';
    }
    function syncStorage() {
        try {
            const latest = localStorage.getItem(C.STORAGE_KEY);
            if (latest === storageSnapshot) return true;
            stopAudio();
            storageSnapshot = latest;
            data = C.parseState(latest,lessons);
            parentAccess = false;
            gateAction = null;
            if ($('parent-dialog').open) $('parent-dialog').close();
            navigate('map',false);
            notify('另一页面已更新或删除记录，这里已同步。');
            return false;
        } catch { storageWarning(); return true; }
    }
    function save() {
        if (!syncStorage()) return false;
        try {
            const next = JSON.stringify(data);
            localStorage.setItem(C.STORAGE_KEY,next);
            storageSnapshot = next;
        } catch { storageWarning(); }
        return true;
    }
    function notify(text) {
        $('notice').textContent = text;
        $('notice').hidden = false;
        clearTimeout(noticeTimer);
        noticeTimer = setTimeout(() => { $('notice').hidden = true; }, 4200);
    }
    function stopAudio() {
        speechToken++;
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        activeUtterance = null;
        speaking = false;
    }
    function localVoice() {
        return window.speechSynthesis?.getVoices().find(voice => /^zh([_-]|$)/i.test(voice.lang) && voice.localService);
    }
    function speak(text, onHeard) {
        stopAudio();
        if (!data.sound) { notify('朗读已关闭。可打开右上角声音，或请大人一起读。'); return; }
        const voice = localVoice();
        if (!voice) { notify('本机离线中文语音尚未就绪或不可用。可稍后重试，或请大人陪读并选择“我想要帮助”。'); return; }
        const token = speechToken;
        activeUtterance = new SpeechSynthesisUtterance(text);
        activeUtterance.voice = voice;
        activeUtterance.lang = voice.lang;
        activeUtterance.rate = .82;
        speaking = true;
        activeUtterance.onend = () => {
            if (token !== speechToken) return;
            speaking = false;
            activeUtterance = null;
            onHeard?.();
        };
        activeUtterance.onerror = () => {
            if (token !== speechToken) return;
            speaking = false;
            activeUtterance = null;
            notify('这次没有完成朗读，请再听一次，或请大人帮忙。');
        };
        try { window.speechSynthesis.speak(activeUtterance); }
        catch { speaking = false; notify('当前浏览器无法朗读，请选择帮助，与大人一起读。'); }
    }
    function soundButton() {
        $('sound-toggle').innerHTML = data.sound ? speaker : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4ZM17 9l5 6m0-6-5 6"/></svg>';
        $('sound-toggle').setAttribute('aria-pressed', String(data.sound));
        $('sound-toggle').setAttribute('aria-label', data.sound ? '关闭朗读' : '打开朗读');
    }
    function navigate(next, focus = true) {
        stopAudio();
        if (page === 'story' && data.draft) { data.draft.audioReady = false; save(); }
        if (next !== 'parents') parentAccess = false;
        page = next;
        document.querySelectorAll('[data-nav]').forEach(button => button.classList.toggle('selected', button.dataset.nav === next));
        render();
        if (focus) { $('app').focus({preventScroll:true}); window.scrollTo(0, 0); }
    }
    function render() {
        soundButton();
        if (page === 'story' && data.draft) renderStory();
        else if (page === 'collection') renderCollection();
        else if (page === 'parents' && parentAccess) renderParents();
        else { page = 'map'; renderMap(); }
    }
    function renderMap() {
        const next = C.nextLesson(data, lessons), draft = data.draft, due = draft ? [] : C.dueReviews(data, lessons);
        const total = Object.keys(data.completed).length;
        const atlas = chapters.map((item,index) => `<section class="chapter-section" aria-labelledby="chapter-${index}"><header class="chapter-head"><span class="eyebrow">Chapter ${String(index+1).padStart(2,'0')}</span><h3 id="chapter-${index}">${esc(item.name)}</h3><span class="chapter-progress">${item.lessons.filter(lesson => data.completed[lesson.id]).length} / ${item.lessons.length}</span></header><div class="tale-grid">${item.lessons.map(lesson => {
            const completed = !!data.completed[lesson.id], paused = draft?.lessonId === lesson.id, isNext = next?.id === lesson.id, status = paused ? '继续上次的故事' : completed ? '重温故事' : isNext ? '可以出发' : '完成前面的故事后开启';
            return `<button class="tale-card ${isNext || paused ? 'current' : ''} ${completed ? 'done' : ''}" data-action="${paused ? 'resume' : 'start'}" data-id="${lesson.id}" ${completed || isNext || paused ? '' : 'disabled'} aria-label="${esc(lesson.title)}，${status}"><span class="tale-photo">${art.icon(lesson.id)}<span class="tale-char" aria-hidden="true">${lesson.char}</span></span><span class="tale-info"><span class="tale-number">${String(lessons.indexOf(lesson)+1).padStart(2,'0')}</span><span class="tale-title">${esc(lesson.title)}</span><span class="tale-status">${paused ? '继续上次 →' : completed ? '✓ 重温' : isNext ? '可以出发 →' : '待开启'}</span></span></button>`;
        }).join('')}</div></section>`).join('');
        $('app').innerHTML = `<section class="welcome"><div><div class="eyebrow">Little words, wonderful adventures</div><h1>在故事里，遇见汉字</h1><p>和森林伙伴一起出发，让每一个字都有自己的故事。</p></div><div class="welcome-note"><span class="note-icon" aria-hidden="true">木</span><span>今天也不着急<br>一次认识一个新朋友</span></div></section>
            <section class="story-atlas" aria-labelledby="atlas-title"><div class="atlas-heading"><div><h2 id="atlas-title">小岛的故事地图</h2><p>${chapters.length} 个主题 · ${lessons.length} 段奇遇，每段故事都有自己的风景</p></div><span class="atlas-progress">${total} / ${lessons.length} 段故事已收入口袋</span></div>${atlas}</section>
            ${due.length ? `<section class="review-strip"><span class="review-count">${due.length}</span><div><strong>老朋友寄来了一张新图卡</strong><p>今天只安排一小组复习，落下的不用一次补完。</p></div><button class="soft-button" data-action="review" data-id="${due[0].id}">打开图卡 →</button></section>` : ''}`;
    }
    function openGate(action, consent = false) {
        if (!syncStorage()) return;
        stopAudio();
        gateAction = action;
        const a = 6 + Math.floor(Math.random() * 4), b = 3 + Math.floor(Math.random() * 5);
        gateAnswer = a * b;
        $('parent-dialog').innerHTML = `<div class="eyebrow">For grown-ups</div><h2 id="dialog-title">${consent ? '先请大人来陪伴' : '欢迎来到家长区'}</h2><p>${consent ? '本体验只在当前浏览器保存故事进度和答题记录，不收集姓名或录音，不上传学习数据。朗读只使用本机离线中文语音；没有语音时请成人陪读。' : '这里展示的是具体尝试，不是识字量排名。请成人完成下面的操作确认。'}</p><p>当前 ${lessons.length} 课为体验版内容，尚待教育者审阅。请成人陪同使用。</p><form id="gate-form"><label for="gate-answer">请计算 ${a} × ${b} = ?</label><input id="gate-answer" type="number" inputmode="numeric" autocomplete="off" required aria-describedby="gate-note" placeholder="填写答案"><small id="gate-note" class="muted">这是成人操作确认，不是身份认证。</small>${consent ? '<label class="checkbox-label"><input id="consent-check" type="checkbox" required><span>我是监护人，了解并同意在此浏览器保存学习记录；可随时在家长区删除。</span></label>' : ''}<div id="gate-error" class="dialog-error" role="status"></div><div class="dialog-buttons"><button type="button" class="secondary" data-dialog="cancel">暂时不进</button><button type="submit" class="primary">${consent ? '同意并开始' : '进入家长区'}</button></div></form>`;
        $('gate-form').addEventListener('submit', event => {
            event.preventDefault();
            if (!syncStorage()) return;
            if (Number($('gate-answer').value) !== gateAnswer) { $('gate-error').textContent = '答案还不对，请大人再看一看。'; return; }
            if (consent) { data.consent = {at:new Date().toISOString(),version:1}; if (!save()) return; }
            const callback = gateAction;
            gateAction = null;
            $('parent-dialog').close();
            callback?.();
        });
        $('parent-dialog').showModal();
    }
    function ensureConsent(action) {
        if (data.consent) action();
        else openGate(action, true);
    }
    function start(lessonId, mode = 'lesson') {
        const lesson = byId(lessonId);
        if (!lesson) return;
        if (mode === 'lesson' && !data.completed[lessonId] && C.nextLesson(data, lessons)?.id !== lessonId) return;
        if (mode === 'review' && !C.dueReviews(data,lessons).some(item => item.id === lessonId)) return;
        ensureConsent(() => {
            if (data.draft) {
                navigate('story');
                if (data.draft.lessonId !== lessonId || data.draft.mode !== mode) notify('先继续上次的故事。完成后再打开其他图卡。');
                return;
            }
            const lastMeaning = data.attempts.filter(a => a.lessonId === lessonId && a.dimension === 'meaning').at(-1);
            const contextIndex = mode === 'review' ? (lastMeaning?.context === lesson.contexts[1].id ? 2 : 1) : 0;
            data.draft = {lessonId,mode,step:0,contextIndex,choices:C.shuffledChoices(lessonId, mode === 'review' ? lessons.filter(item => item.id === lessonId || lesson.meaningDistractors.includes(item.id)) : lessons),hintLevel:0,wrongCount:0,firstRecorded:false,answered:false,feedback:'',audioReady:false,assisted:false};
            save();
            navigate('story');
        });
    }
    function evidence(attempt) {
        const draft = data.draft;
        const listening = attempt.dimension === 'audio_shape' && (draft.mode === 'review' || draft.step === 5);
        const context = listening ? `letters:${draft.choices.slice().sort().join(',')}` : byId(draft.lessonId).contexts[draft.contextIndex].id;
        C.recordAttempt(data, {id:crypto.randomUUID(),lessonId:draft.lessonId,date:C.dateKey(),source:'interaction',context,...attempt});
        return save();
    }
    function contextLabel(lesson, context) {
        if (context.startsWith('letters:')) return '听音辨认字组：' + context.slice(8).split(',').map(id => byId(id)?.char || id).join(' / ');
        if (context === 'parent-card') return '家中纯字卡';
        if (context === 'parent-print') return '无配图文字';
        return lesson.contexts.find(item => item.id === context)?.label || context;
    }
    function renderStory() {
        if (!data.draft) { page = 'map'; renderMap(); return; }
        const d = data.draft, lesson = byId(d.lessonId), review = d.mode === 'review';
        const count = review ? 3 : 7;
        const headings = review ? ['换张图，还认得吗','听一听，找一找','老朋友，下次再见'] : ['小伙伴需要你的帮助','先来发现它','它有一个汉字名字','用字牌帮一个忙','故事圆满啦','听一听，找一找','把这段奇遇装进口袋'];
        let body = '', controls = '', narration = '';
        const listen = '<button class="listen-button" data-action="narrate">' + speaker + ' 听一听</button>';
        const assessment = review ? d.step < 2 : d.step === 5;
        const meaning = review && d.step === 0;
        if (assessment) {
            if (meaning) {
                body = `<p class="story-copy small">看看这个字，哪幅图里有它？</p><div class="character-tile centered">${lesson.char}</div>`;
                narration = '看看这个字，哪幅图里有它？';
            } else {
                body = `<p class="story-copy small">先听题目，再点一张字牌。</p><button class="listen-prompt" data-action="question" aria-label="播放听音题目">${speaker}</button><p class="muted" style="font-size:12px">${d.audioReady ? '听好了，选一张字牌吧' : '点一下小喇叭听题目'}</p>`;
            }
            if (d.hintLevel > 0) body += `<p class="story-copy small">我们一起看：<strong>${lesson.char}</strong>，${lesson.contexts[d.contextIndex].label}。</p>`;
            body += `<div class="choices">${d.choices.map(id => `<button class="choice ${meaning ? 'picture' : ''} ${d.answered && id === lesson.id ? 'correct' : ''}" data-action="answer" data-id="${id}" ${d.answered ? 'disabled' : ''} aria-label="${meaning ? esc(byId(id).contexts[d.contextIndex].label) : byId(id).char}">${meaning ? art.icon(id,d.contextIndex) : byId(id).char}</button>`).join('')}</div>`;
            if (!d.answered) controls = '<button class="help-link" data-action="help">我想要帮助</button><button class="help-link" data-action="skip">先跳过，没关系</button>';
            else controls = `<button class="primary" data-action="next">${review && d.step === 0 ? '再听一道题' : '收好这次尝试'} <span aria-hidden="true">→</span></button>`;
        } else if (!review && d.step === 0) {
            body = `<div class="story-scene">${art.scene(lesson.id)}</div><p class="story-copy">${esc(lesson.mission)}</p>${listen}`;
            narration = `${lesson.partner}说：${lesson.mission}`;
            controls = '<button class="primary" data-action="next">好呀，我们一起去 →</button>';
        } else if (!review && d.step === 1) {
            body = `<div class="story-scene">${art.scene(lesson.id, d.answered ? 1 : 0)}</div><p class="story-copy small">${esc(d.answered ? lesson.actionResult : lesson.meaning)}</p>${listen}`;
            narration = d.answered ? lesson.actionResult : lesson.meaning;
            controls = `<button class="primary" data-action="${d.answered ? 'next' : 'interact'}">${d.answered ? '认识它的名字 →' : esc(lesson.actionLabel)}</button>`;
        } else if (!review && d.step === 2) {
            body = `<div class="teaching-pair"><div class="teaching-object">${art.icon(lesson.id)}</div><span class="teaching-arrow" aria-hidden="true">→</span><div><div class="character-tile">${lesson.char}</div><div class="pinyin">${lesson.pinyin}</div></div></div><p class="story-copy">这个字读“${lesson.char}”。</p><p class="story-copy small">${esc(lesson.meaning)}</p>${listen}<p class="evidence-note">图片帮助理解，方框里才是规范汉字。不要求描写。</p>`;
            narration = `这个字读${lesson.char}。${lesson.meaning}`;
            controls = '<button class="primary" data-action="next">带着字牌，去帮忙 →</button>';
        } else if (!review && d.step === 3) {
            body = `<div class="story-scene">${art.scene(lesson.id)}</div><p class="story-copy small">${esc(lesson.application)}</p>${listen}<div class="choices">${d.choices.map(id => `<button class="choice ${id === lesson.id ? 'correct' : ''}" data-action="answer" data-id="${id}" ${d.answered ? 'disabled' : ''}>${byId(id).char}</button>`).join('')}</div>`;
            narration = lesson.application;
            controls = d.answered ? '<button class="primary" data-action="next">去看看小伙伴 →</button>' : '<button class="help-link" data-action="help">一起完成</button>';
        } else if (!review && d.step === 4) {
            body = `<div class="recap"><figure>${art.icon(lesson.id)}<figcaption>发现生活里的它</figcaption></figure><figure><div style="font:78px var(--serif);line-height:105px">${lesson.char}</div><figcaption>认一张汉字牌</figcaption></figure><figure>${art.icon(lesson.id,1)}<figcaption>用汉字帮一个忙</figcaption></figure></div><p class="story-copy small">${esc(lesson.ending)}</p><p class="story-copy">${esc(lesson.cloze)}</p>${listen}<p class="evidence-note">可以一起接话，也可以只听故事；这里不算独立认读。</p>`;
            narration = `${lesson.ending} ${lesson.cloze}`;
            controls = '<button class="primary" data-action="next">把图画收起，试一试 →</button>';
        } else {
            body = `<div class="reward">${art.icon(lesson.id)}</div><h2>${review ? '见到老朋友，真开心' : esc(lesson.item)}</h2><p class="story-copy small">${review ? '这次见面已经记下。需要提示也没关系，下次换个地方再看看。' : '故事收好了，谢谢你的帮助！今天就到这里，也很棒。'}</p><p class="evidence-note">${review ? '跨日、换场景的独立尝试会单独记录。' : '完成故事不等于学会；隔天会带来一张新图卡。'}</p>`;
            controls = '<button class="primary" data-action="finish">回到小岛</button><button class="secondary" data-action="finish-collection">看看故事口袋</button>';
        }
        $('app').innerHTML = `<div class="story-top"><button class="back-button" data-action="pause">← 稍后继续</button><div class="story-steps" aria-label="第 ${d.step+1} 步，共 ${count} 步">${Array.from({length:count},(_,i)=>`<span class="${i <= d.step ? 'done' : ''}"></span>`).join('')}</div><span class="step-count">${d.step+1} / ${count}</span></div><section class="story-card"><div class="eyebrow">${review ? '老朋友的新图卡' : assessment ? '不着急，试试看' : esc(lesson.region) + ' · 小小奇遇'}</div><h1>${headings[d.step]}</h1>${body}<div class="feedback" role="status" aria-live="polite">${esc(d.feedback)}</div><div class="story-controls">${controls}</div>${assessment ? '<p class="evidence-note">这是一次尝试，不是考试。需要帮助就说出来。</p>' : ''}</section>`;
        $('app').dataset.narration = narration;
    }
    function playQuestion() {
        const d = data.draft;
        if (!d || d.answered) return;
        const target = d;
        speak(`请找${byId(d.lessonId).char}。`, () => {
            if (data.draft !== target || page !== 'story') return;
            d.audioReady = true;
            save();
            renderStory();
        });
    }
    function answer(id) {
        const d = data.draft;
        if (!d || d.answered || !d.choices.includes(id)) return;
        const teaching = d.mode === 'lesson' && d.step === 3;
        const meaning = d.mode === 'review' && d.step === 0;
        if (!teaching && !meaning && !d.audioReady && d.hintLevel === 0) {
            notify(speaking ? '先听完这句话，再选字牌吧。' : '先点小喇叭听题目；听不到时可以点“我想要帮助”。');
            return;
        }
        stopAudio();
        const correct = id === d.lessonId;
        if (!evidence({dimension:meaning ? 'meaning' : 'audio_shape',correct,hintLevel:teaching ? 3 : d.hintLevel,firstAnswer:!d.firstRecorded})) return;
        d.firstRecorded = true;
        if (correct) {
            d.answered = true;
            d.feedback = teaching ? '字牌送到了，谢谢你的帮助！' : d.hintLevel ? '我们一起找到了，慢慢来就好。' : '你做了自己的选择，这次尝试记下啦。';
        } else {
            d.wrongCount++;
            d.assisted = true;
            d.hintLevel = d.wrongCount >= 2 ? 3 : 2;
            d.feedback = d.wrongCount >= 2 ? `我们一起完成：这是“${byId(d.lessonId).char}”。今天先到这里也很棒。` : `没关系，一起看看“${byId(d.lessonId).char}”这张字牌，再试一次。`;
            if (d.wrongCount >= 2) d.answered = true;
        }
        save();
        renderStory();
    }
    function help(skip = false) {
        const d = data.draft;
        if (!d || d.answered) return;
        stopAudio();
        const meaning = d.mode === 'review' && d.step === 0;
        if (!d.firstRecorded) {
            if (!evidence({dimension:meaning ? 'meaning' : 'audio_shape',correct:false,hintLevel:skip ? 3 : 2,firstAnswer:true})) return;
            d.firstRecorded = true;
        }
        d.hintLevel = skip ? 3 : 2;
        d.assisted = true;
        d.feedback = skip ? '今天先一起看看，不用一直答题。' : `请大人一起读：${byId(d.lessonId).char}。看好字形，再点一张吧。`;
        if (skip || (d.mode === 'lesson' && d.step === 3)) { d.answered = true; d.hintLevel = 3; }
        save();
        renderStory();
    }
    function nextStep() {
        const d = data.draft;
        if (!d) return;
        stopAudio();
        const review = d.mode === 'review';
        const requiredAnswer = review ? d.step < 2 : [1,3,5].includes(d.step);
        if (requiredAnswer && !d.answered) return;
        const earlyFinish = d.wrongCount >= 2;
        if (review && (d.step === 1 || earlyFinish)) C.completeReview(data,d.lessonId,!d.assisted,C.dateKey());
        if (!review && (d.step === 5 || earlyFinish)) C.completeLesson(data,d.lessonId,C.dateKey());
        d.step = earlyFinish ? (review ? 2 : 6) : d.step + 1;
        d.choices = C.shuffledChoices(d.lessonId, lessons);
        d.hintLevel = review && d.step === 1 && d.assisted ? 2 : 0;
        d.wrongCount = 0;
        d.firstRecorded = false;
        d.answered = false;
        d.feedback = '';
        d.audioReady = false;
        save();
        renderStory();
        $('app').focus({preventScroll:true});
        window.scrollTo(0,0);
    }
    function renderCollection() {
        const completed = lessons.filter(lesson => data.completed[lesson.id]);
        $('app').innerHTML = `<section class="welcome"><div><div class="eyebrow">A pocket full of stories</div><h1>我的故事口袋</h1><p>收藏的是和小伙伴一起做过的事，想念时，就再听一遍。</p></div><div class="welcome-note">${completed.length} 段小小奇遇</div></section>${completed.length ? `<div class="collection-grid">${completed.map(lesson => `<article class="collection-item"><div class="collect-art">${art.icon(lesson.id)}</div><h3>${esc(lesson.item)}</h3><p>${esc(lesson.title)} · ${data.completed[lesson.id].firstDate}</p><button class="soft-button" data-action="start" data-id="${lesson.id}">再听这个故事</button></article>`).join('')}</div>` : '<div class="empty-state"><h2>第一段故事，等你来装进口袋</h2><p>小鹿的水杯还是空的，一起去帮帮它吧。</p><button class="primary" data-action="map">回到奇遇地图 →</button></div>'}`;
    }
    function renderParents() {
        const seen = lessons.filter(l => data.completed[l.id] || data.attempts.some(a => a.lessonId === l.id));
        const dims = [['audio_shape','听音辨认'],['meaning','意义理解'],['oral','自主认读']];
        const day = C.dateKey();
        $('app').innerHTML = `<section class="welcome"><div><div class="eyebrow">Every little step matters</div><h1>看见每一步，而不只看答案</h1><p>学习证据来自实际互动与成人观察，不以通关替代学会。</p></div><button class="secondary" data-action="map">退出家长区</button></section><div class="parent-intro"><strong>目前阶段：听故事，建立音、形、义的联系</strong>提示中 → 独立尝试 → 跨日可用。至少在两个不同日期、两种情境中独立成功，才会标记相应维度“跨日可用”；近期需要帮助会回退。听音选字不等于自主认读，同一天反复做不算跨日证据。<br>听音辨认的情境以不同干扰字组合区分，意义理解以不同图卡区分。字形辨别随听音选字一起观察，暂不单独推断；换图卡成功不代表已能自主阅读。</div><div class="parent-summary"><div><strong>${Object.keys(data.completed).length}</strong>完成的故事（非识字量）</div><div><strong>${C.dueReviews(data,lessons,day).length}</strong>本次待复习（最多 2 字）</div><div><strong>${data.attempts.filter(a => a.firstAnswer && a.date === day).length}</strong>今天的首答 / 观察</div></div>${seen.length ? seen.map(lesson => {
            const progress = data.completed[lesson.id];
            const attempts = data.attempts.filter(a => a.lessonId === lesson.id);
            return `<article class="evidence-card"><div class="evidence-heading"><div class="evidence-char">${lesson.char}</div><div><h3>${esc(lesson.title)}</h3><p>故事${progress ? '已完成' : '体验中'} · 不等于掌握</p></div><span class="review-date">${progress ? `下次复习 ${progress.nextReview}` : '完成故事后安排复习'}</span></div><div class="evidence-dimensions">${dims.map(([key,label]) => {
                const item = C.evidenceFor(data,lesson.id,key), last = item.last;
                return `<div class="dimension"><strong>${label}</strong><span class="status-label ${item.status}">${item.label}</span><p>${last ? `${last.date} · ${last.source === 'parent' ? '家长观察' : '互动记录'}<br>${last.hintLevel ? '有提示 / 有帮助' : '无提示'} · ${last.correct ? '首答正确' : '尚未独立完成'}` : '暂无证据，不作推断'}${item.independentCount ? `<br>${item.dates.length} 个日期 / ${item.contexts.length} 种情境独立成功` : ''}</p></div>`;
            }).join('')}</div><p class="home-tip">家庭共读建议：${esc(lesson.homeTip)}</p><form class="parent-observation" data-lesson="${lesson.id}"><span>无声音、无图片时读“${lesson.char}”</span><select name="context" aria-label="${lesson.char}的观察情境"><option value="parent-card">家中的纯字卡</option><option value="parent-print">其他无配图文字材料</option></select><button class="soft-button" type="submit" name="result" value="yes">独立读出</button><button class="secondary" type="submit" name="result" value="no">需要帮助</button></form><details class="evidence-log"><summary>查看 ${attempts.length} 条具体记录</summary><ul>${attempts.slice(-12).reverse().map(a=>`<li>${a.date} · ${dims.find(([key])=>key===a.dimension)?.[1] || ''} · ${esc(contextLabel(lesson,a.context))} · ${a.firstAnswer ? '首答' : '后续尝试'} · ${a.hintLevel ? `提示等级 ${a.hintLevel}` : '无提示'} · ${a.correct ? '完成' : '未独立完成'} · ${a.source === 'parent' ? '成人观察' : '页面互动'}</li>`).join('')}</ul>${attempts.length > 12 ? '<p>页面显示最近 12 条，导出包含全部记录。</p>' : ''}</details></article>`;
        }).join('') : '<div class="empty-state"><h2>还没有学习证据</h2><p>体验故事后，这里会分维度展示过程，不会自动宣称“已掌握”。</p></div>'}<div class="data-actions"><button class="secondary" data-action="export">导出本机学习记录</button><button class="danger-button" data-action="delete">删除汉字学习数据</button></div><p class="parent-disclaimer">仅存本机浏览器，不跨设备同步。默认不录音、不采集身份信息、不发送学习记录；仅使用本机离线朗读。删除会同时撤回本机保存同意，不影响绘本和古诗数据。<br>内容版本 2026-11-21 · ${lessons.length} 课均为待教育者审阅的体验稿；复习节奏为次日、第 3 日、第 7 日的初始设计，不是学习效果承诺。</p>`;
    }
    function observe(form, result) {
        if (!syncStorage() || !parentAccess || !data.consent) return;
        const lessonId = form.dataset.lesson, context = new FormData(form).get('context'), date = C.dateKey();
        if (!byId(lessonId) || !['parent-card','parent-print'].includes(context)) return;
        if (data.attempts.some(a => a.lessonId === lessonId && a.dimension === 'oral' && a.context === context && a.date === date)) {
            notify('今天这个情境已有记录。保留第一次观察，改天再自然地看看。'); return;
        }
        C.recordAttempt(data,{id:crypto.randomUUID(),lessonId,dimension:'oral',firstAnswer:true,correct:result === 'yes',hintLevel:result === 'yes' ? 0 : 2,context,date,source:'parent'});
        save();
        renderParents();
        notify('已记为家长观察，与页面互动分开显示。');
    }
    function deleteDialog() {
        if (!parentAccess) return;
        $('parent-dialog').innerHTML = '<h2 id="dialog-title">删除本机汉字学习记录？</h2><p>将删除故事进度、续学位置、答题与家长观察，并撤回保存同意。这不能撤销，但不会影响绘本、视频或古诗记录。</p><div class="dialog-buttons"><button class="secondary" data-dialog="cancel">保留记录</button><button class="danger-button" data-dialog="confirm-delete">确认删除</button></div>';
        $('parent-dialog').showModal();
    }
    function exportData() {
        if (!parentAccess) return;
        const blob = new Blob([JSON.stringify({...data,exportedAt:new Date().toISOString()},null,2)],{type:'application/json'});
        const url = URL.createObjectURL(blob), link = document.createElement('a');
        link.href = url;
        link.download = `hanzi-learning-${C.dateKey()}.json`;
        link.click();
        setTimeout(()=>URL.revokeObjectURL(url),1000);
    }
    $('app').addEventListener('click',event=>{
        const button = event.target.closest('[data-action]');
        if (!button || button.disabled || !syncStorage()) return;
        const {action,id} = button.dataset;
        if (['map','collection'].includes(action)) navigate(action);
        else if (action === 'start') start(id);
        else if (action === 'review') start(id,'review');
        else if (action === 'resume') ensureConsent(()=>navigate('story'));
        else if (action === 'pause') navigate('map');
        else if (action === 'next') nextStep();
        else if (action === 'interact' && data.draft) { data.draft.answered = true; data.draft.feedback = '谢谢你，小伙伴收到你的帮助啦。'; if (!save()) return; renderStory(); speak(byId(data.draft.lessonId).actionResult); }
        else if (action === 'answer') answer(id);
        else if (action === 'question') playQuestion();
        else if (action === 'help') help();
        else if (action === 'skip') help(true);
        else if (action === 'narrate') speak($('app').dataset.narration);
        else if (action === 'finish' || action === 'finish-collection') {
            data.draft = null;
            if (!save()) return;
            navigate(action === 'finish' ? 'map' : 'collection');
        }
        else if (action === 'export') exportData();
        else if (action === 'delete') deleteDialog();
    });
    $('app').addEventListener('submit',event=>{
        if (!event.target.matches('.parent-observation')) return;
        event.preventDefault();
        observe(event.target,event.submitter?.value);
    });
    $('parent-dialog').addEventListener('click',event=>{
        const action = event.target.closest('[data-dialog]')?.dataset.dialog;
        if (action === 'cancel') { gateAction = null; $('parent-dialog').close(); }
        if (action === 'confirm-delete' && parentAccess) {
            if (!syncStorage()) return;
            try { localStorage.removeItem(C.STORAGE_KEY); storageSnapshot = null; }
            catch { notify('删除失败，请检查浏览器存储权限后再试。'); return; }
            data = C.parseState(null,lessons);
            parentAccess = false;
            $('parent-dialog').close();
            navigate('map');
            notify('本机汉字学习数据已删除。');
        }
    });
    $('parent-dialog').addEventListener('cancel',()=>{ gateAction = null; });
    $('sound-toggle').addEventListener('click',()=>{
        if (!syncStorage()) return;
        data.sound = !data.sound;
        stopAudio();
        if (data.consent) save();
        soundButton();
        if (data.sound && !localVoice()) notify('本机暂无离线中文语音，可请成人陪读。');
    });
    $('parent-button').addEventListener('click',()=>openGate(()=>{ parentAccess = true; navigate('parents'); },!data.consent));
    document.querySelectorAll('[data-nav]').forEach(button=>button.addEventListener('click',()=>navigate(button.dataset.nav)));
    document.querySelector('.island-brand').addEventListener('click',event=>{event.preventDefault();navigate('map');});
    window.addEventListener('pagehide',stopAudio);
    window.addEventListener('storage',event=>{ if (event.key === C.STORAGE_KEY || event.key === null) syncStorage(); });
    document.addEventListener('visibilitychange',()=>{ if (document.hidden) stopAudio(); else syncStorage(); });
    document.addEventListener('keydown',event=>{
        if (!event.repeat && !event.ctrlKey && !event.metaKey && !event.altKey && !event.target.matches('input,select,textarea') && !event.target.isContentEditable && (event.key === 'f' || event.key === 'F')) {
            if (window.parent !== window && typeof window.parent.togglePoetryFullscreen === 'function') {event.preventDefault();window.parent.togglePoetryFullscreen();}
        }
    });
    window.HanziApp = {home:()=>navigate('map'),stopAudio,leave:()=>{
        stopAudio();
        if ($('parent-dialog').open) $('parent-dialog').close();
        gateAction = null;
        if (parentAccess) navigate('map',false);
        parentAccess = false;
        if (data.draft) {data.draft.audioReady = false; save();}
        if (page === 'story') render();
    }};
    render();
})();
