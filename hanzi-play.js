(function (root, factory) {
    'use strict';
    const api = factory(root);
    if (typeof module === 'object' && module.exports) module.exports = api;
    else root.HanziPlay = api;
}(typeof window !== 'undefined' ? window : globalThis, function (root) {
    'use strict';

    const labels = Object.freeze({
        fill: '接水', build: '拼搭', route: '寻路', collect: '收集',
        sort: '分类', reveal: '揭图', sequence: '步骤操作'
    });
    const owns = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
    const integer = Number.isInteger;
    const inRange = (value, length) => integer(value) && value >= 0 && value < length;
    const escape = value => String(value ?? '').replace(/[&<>"']/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[character]));

    function createState() {
        return {stage: 0, done: [], selected: -1};
    }

    function validTarget(target) {
        return target && typeof target.label === 'string' &&
            Number.isFinite(target.x) && target.x >= 10 && target.x <= 90 &&
            Number.isFinite(target.y) && target.y >= 10 && target.y <= 90;
    }

    function validGame(game) {
        if (!game || !owns(labels, game.type)) return false;
        if (game.type === 'fill' || game.type === 'route') {
            return Array.isArray(game.steps) && game.steps.length === 3 &&
                Array.from(game.steps).every(step => step && typeof step.label === 'string' && typeof step.result === 'string') &&
                (game.type === 'fill' || (Array.isArray(game.targets) && game.targets.length === 3 && Array.from(game.targets).every(validTarget)));
        }
        if (game.type === 'reveal') {
            return Array.isArray(game.spots) && game.spots.length === 6 &&
                Array.from(game.spots).every(spot => typeof spot === 'string');
        }
        return Array.isArray(game.pieces) && game.pieces.length >= 3 && game.pieces.length <= 5 &&
            Array.from(game.pieces).every(piece => piece && typeof piece.label === 'string' && inRange(piece.variant, 3)) &&
            Array.isArray(game.targets) && game.targets.length >= 1 && game.targets.length <= 5 &&
            Array.from(game.targets).every(validTarget) && Array.isArray(game.matches) &&
            game.matches.length === game.pieces.length && Array.from(game.matches).every(target => inRange(target, game.targets.length));
    }

    function validState(game, state) {
        if (!state || !integer(state.stage) || !Array.isArray(state.done) || !integer(state.selected)) return false;
        if (game.type === 'fill' || game.type === 'route') {
            return state.stage >= 0 && state.stage <= 3 && state.done.length === 0 && state.selected === -1;
        }
        const length = game.type === 'reveal' ? 6 : game.pieces?.length;
        if (!integer(length) || state.stage !== 0 || Array.from(state.done).some(index => !inRange(index, length)) ||
            new Set(state.done).size !== state.done.length) return false;
        if (game.type === 'reveal') return state.selected === -1;
        if (state.selected !== -1 && (!inRange(state.selected, length) || state.done.includes(state.selected))) return false;
        return game.type !== 'sequence' || state.done.every((index, position) => index === position);
    }

    function isComplete(game, state) {
        if (!game || !owns(labels, game.type) || !validState(game, state)) return false;
        if (game.type === 'fill' || game.type === 'route') return state.stage === 3;
        if (game.type === 'reveal') return state.done.length === 6;
        return state.done.length === game.pieces.length;
    }

    function reduce(game, state, action, index, target) {
        const unchanged = feedback => ({state, feedback, changed: false});
        const update = (next, feedback) => ({state: next, feedback, changed: true});
        if (action === 'reset') {
            const initial = createState();
            const changed = !state || state.stage !== 0 || state.selected !== -1 || !Array.isArray(state.done) || state.done.length !== 0;
            return {state: changed ? initial : state, feedback: '重新开始操作，已获得的贴纸不受影响。', changed};
        }
        if (!['pick', 'drop', 'step', 'reveal'].includes(action)) return unchanged('请使用场景里的操作。');
        if (!validGame(game) || !validState(game, state)) return unchanged('操作暂未就绪，可以重新开始。');
        if (isComplete(game, state)) return unchanged('这次操作已经完成，可以重新玩。');

        if (action === 'step') {
            if (game.type !== 'fill' && game.type !== 'route') return unchanged('请先选择物件，再放到操作位置。');
            if (!inRange(index, 3)) return unchanged('请使用场景里当前的操作。');
            if (index < state.stage) return unchanged('这一步已经完成啦。');
            if (index !== state.stage) return unchanged('先完成眼前这一步，再继续。');
            return update({stage: state.stage + 1, done: state.done.slice(), selected: -1}, game.steps[index].result);
        }
        if (action === 'reveal') {
            if (game.type !== 'reveal' || !inRange(index, 6)) return unchanged('请点场景上还没有揭开的图块。');
            if (state.done.includes(index)) return unchanged('这一块已经揭开啦。');
            return update({stage: 0, done: state.done.concat(index), selected: -1}, game.spots[index]);
        }
        if (!['build', 'collect', 'sort', 'sequence'].includes(game.type)) return unchanged('请使用场景里的操作。');
        if (action === 'pick') {
            if (!inRange(index, game.pieces.length)) return unchanged('请先点选一个物件。');
            if (state.done.includes(index)) return unchanged('这个物件已经放好啦。');
            if (game.type === 'sequence' && index !== state.done.length) return unchanged(`先操作第 ${state.done.length + 1} 步，再来试这个。`);
            if (state.selected === index) return unchanged('已经选中，可以点击位置放下。');
            return update({stage: 0, done: state.done.slice(), selected: index}, `已选中${game.pieces[index].label}，点击位置放下。`);
        }

        // A click uses selected; a drag may supply its piece index directly.
        const pieceIndex = index === undefined || index === -1 ? state.selected : index;
        if (!inRange(pieceIndex, game.pieces.length)) return unchanged('先点选或拖动一个物件，再放下。');
        if (!inRange(target, game.targets.length)) return unchanged('请放到场景里的操作位置。');
        if (state.done.includes(pieceIndex)) return unchanged('这个物件已经放好啦。');
        if (game.type === 'sequence' && pieceIndex !== state.done.length) return unchanged(`先操作第 ${state.done.length + 1} 步，按顺序慢慢来。`);
        if (game.matches[pieceIndex] !== target) return unchanged('这里还不合适，物件仍在手边，换个位置试试。');
        const done = state.done.concat(pieceIndex);
        return update({stage: 0, done, selected: state.selected === pieceIndex ? -1 : state.selected},
            `${game.pieces[pieceIndex].label}已经放到${game.targets[target].label}。`);
    }

    function lessonId(lesson) {
        const id = String(lesson?.id ?? 'water');
        return /^[a-z0-9_-]+$/i.test(id) ? id : 'water';
    }

    function sceneSource(lesson, variant) {
        return lesson.contexts?.[variant]?.image || `hanzi-images/realistic-v1/${lessonId(lesson)}-${variant}.jpg`;
    }

    function thumbnail(lesson, variant, className = 'play-thumbnail') {
        const index = inRange(variant, 3) ? variant : 0;
        return `<img class="${className}${lesson.contexts?.[index]?.framing === 'wide' ? ' photo-wide' : ''}" src="${escape(sceneSource(lesson, index))}" alt="" width="1008" height="568" loading="lazy" decoding="async" draggable="false">`;
    }

    function photograph(lesson, variant = 0) {
        const id = lessonId(lesson);
        const scene = root.HanziArt && typeof root.HanziArt.scene === 'function'
            ? root.HanziArt.scene(id, variant)
            : `<img class="play-scene-image${lesson.contexts?.[variant]?.framing === 'wide' ? ' photo-wide' : ''}" src="${escape(sceneSource(lesson, variant))}" alt="" width="1008" height="568" decoding="async">`;
        return `<div class="play-photograph" aria-hidden="true">${scene}</div>`;
    }

    function stepsList(game, state) {
        return `<ol class="play-step-list">${game.steps.map((step, index) => {
            const status = index < state.stage ? '已完成' : index === state.stage ? '现在操作' : '稍后操作';
            return `<li class="play-step-item${index < state.stage ? ' play-step-done' : ''}${index === state.stage ? ' play-step-current' : ''}"><span class="play-step-number" aria-hidden="true">${index + 1}</span><span>${escape(step.label)}<small class="play-state-label">${status}</small></span></li>`;
        }).join('')}</ol>`;
    }

    function fillBoard(lesson, game, state) {
        const placed = state.stage >= 1, full = state.stage >= 2, flowing = state.stage === 2;
        const cup = lesson.id === 'cup', container = cup ? '水杯' : '水桶';
        const control = state.stage < 3 ? `<button type="button" class="play-fill-action ${state.stage === 0 ? 'play-bucket-action' : 'play-tap-action'}" data-action="play-step" data-index="${state.stage}">${escape(game.steps[state.stage].label)}</button>` : '';
        return `<figure class="play-figure"><div class="play-board play-fill-board">${photograph(lesson)}
            <div class="play-fill-schematic">
                <svg class="play-fill-svg" viewBox="0 0 440 300" aria-hidden="true" focusable="false">
                    ${cup ? '<rect x="220" y="16" width="100" height="78" rx="10" class="play-bucket-body"/><path class="play-pipe" d="M290 94v15"/>' : '<path class="play-pipe" d="M225 30v52h65v27"/><path class="play-tap" d="M240 62h68m-34-12v23"/>'}
                    <path class="play-tap-handle${flowing ? ' play-tap-open' : ''}" d="M259 47h30"/>
                    <path class="play-spout" d="M279 109h23"/>
                    <path class="play-ground" d="M25 285h390"/>
                    <g class="play-bucket${placed ? ' play-bucket-placed' : ''}${state.stage === 1 ? ' play-bucket-move' : ''}" style="--play-bucket-x:${placed ? 225 : 38}px">
                        <path class="play-bucket-body" d="M0 0h130l-22 108H22Z"/>
                        <path class="play-water${full ? ' play-water-full' : ''}" d="M12 30h106l-15 70H27Z"/>
                        <path class="play-bucket-rim" d="${cup ? 'M0 0h130M125 22c50-5 45 65-10 62' : 'M0 0h130M7 0c0-62 116-62 116 0'}"/>
                    </g>
                    ${flowing ? '<path class="play-water-stream" d="M290 116v85"/><path class="play-water-droplets" d="M285 121v80m10-80v80"/>' : ''}
                </svg>
                ${control}
                <span class="play-fill-label">${state.stage === 0 ? container + '还在一旁' : state.stage === 1 ? container + '已放到出水口下' : state.stage === 2 ? '开始出水 · 蓝色水位升起' : '停止出水 · 水流停止'}</span>
            </div></div><figcaption class="play-caption">写实AI场景 · 操作层为游戏示意</figcaption></figure>${stepsList(game, state)}`;
    }

    function routeBoard(lesson, game, state) {
        const start = {x: 10, y: 90};
        const stops = game.targets;
        const current = state.stage ? stops[state.stage - 1] : start;
        const previous = state.stage > 1 ? stops[state.stage - 2] : start;
        const points = [start].concat(stops).map(point => `${point.x},${point.y}`).join(' ');
        const travelled = [start].concat(stops.slice(0, state.stage)).map(point => `${point.x},${point.y}`).join(' ');
        const last = stops[2];
        return `<figure class="play-figure"><div class="play-board play-route-board">${photograph(lesson)}<div class="play-route-plane">
            <svg class="play-route-map" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
                <polyline class="play-route-path" points="${points}"/>
                <polyline class="play-route-travelled" points="${travelled}"/>
                ${state.stage === 3 && ['boat','ship'].includes(lesson.id) ? `<path class="play-rope" d="M${last.x} ${last.y}l-8 8h12m-4 0c-5-6 5-6 0 0c-5 6 5 6 0 0"/>` : ''}
            </svg>
            ${stops.map((stop, index) => {
                const content = `<span class="play-landmark-number">${index + 1}</span><span>${escape(stop.label)}</span><small class="play-state-label">${index < state.stage ? '已到达' : index === state.stage ? '点这里前进' : '下一站'}</small>`;
                const position = `left:${stop.x}%;top:${stop.y}%`;
                return index === state.stage
                    ? `<button type="button" class="play-route-stop play-route-next" style="${position}" data-action="play-step" data-index="${index}" aria-label="${escape(game.steps[index].label)}：${escape(stop.label)}">${content}</button>`
                    : `<span class="play-route-stop${index < state.stage ? ' play-route-visited' : ''}" style="${position}">${content}</span>`;
            }).join('')}
            <span class="play-route-token${state.stage > 0 ? ' play-route-move' : ''}" style="left:${current.x}%;top:${current.y}%;--play-from-x:${previous.x}%;--play-from-y:${previous.y}%;--play-to-x:${current.x}%;--play-to-y:${current.y}%" aria-label="物件${state.stage ? '已到达' + escape(current.label) : '在起点'}">${thumbnail(lesson, 0)}<span class="play-token-label">${state.stage === 3 ? (['boat','ship'].includes(lesson.id) ? '已系绳' : '已送达') : '同行物件'}</span></span>
            </div></div><figcaption class="play-caption">写实AI场景 · 操作层为游戏示意</figcaption></figure>${stepsList(game, state)}`;
    }

    function pieceVisual(lesson, piece, index) {
        if (piece.photo) return thumbnail(lesson, piece.variant);
        const colors = ['#75a8ce', '#e5b75a', '#81ae83'];
        const color = colors[index % 3];
        let shape;
        if (['wood', 'stone', 'sand'].includes(lesson.id)) {
            shape = `<rect x="15" y="${index ? 20 : 35}" width="110" height="${index ? 35 : 20}" rx="5" fill="${lesson.id === 'wood' ? '#b88c5b' : '#c9bea1'}"/><path d="M25 45h90"/>`;
        } else if (lesson.id === 'snow') {
            shape = index === 2 ? '<path d="M25 25h80v20H70v25H50V45H25Z" fill="#cd7f67"/>' : `<circle cx="70" cy="42" r="${index ? 23 : 32}" fill="#f8fcff"/>`;
        } else if (['tree', 'head'].includes(lesson.id)) {
            shape = lesson.id === 'tree' ? index === 0 ? '<rect x="55" y="10" width="30" height="65" rx="5" fill="#b88c5b"/>' : `<ellipse cx="70" cy="42" rx="42" ry="32" fill="#81ae83"/>` : '<path d="M45 70Q15 15 65 10Q115 5 115 45L95 48V70Z" fill="#e4b9a1"/>';
        } else if (['table', 'chair'].includes(lesson.id)) {
            shape = lesson.id === 'chair' ? `<path d="M40 45V15h60v30M35 45h75v12H35Zm8 12v20m58-20v20" fill="${color}"/>` : index === 0 ? '<rect x="15" y="25" width="110" height="20" rx="4" fill="#b88c5b"/>' : '<path d="M35 15h65v12H90v50H78V27H57v50H45V27H35Z" fill="#b88c5b"/>';
        } else if (lesson.id === 'wheel') {
            shape = '<circle cx="70" cy="42" r="32" fill="#626965"/><circle cx="70" cy="42" r="18" fill="#d5ddd9"/><circle cx="70" cy="42" r="5"/>';
        } else if (lesson.id === 'house') {
            shape = index === 2 ? '<path d="M15 60 70 10 125 60Z" fill="#cc8666"/>' : `<rect x="40" y="10" width="60" height="65" fill="${color}"/><rect x="55" y="25" width="30" height="25" fill="#fff9e6"/>`;
        } else if (lesson.id === 'clock') {
            shape = `<circle cx="70" cy="42" r="32" fill="${index === 2 ? '#eaf3f3' : '#fff9e6'}"/>${index === 1 ? '<path d="M70 20v22l18 10"/>' : ''}`;
        } else if (lesson.id === 'kite') {
            shape = index === 0 ? '<path d="M70 5 110 35 70 70 30 35Z" fill="#e5b75a"/><path d="M70 5v65M30 35h80"/>' : `<path d="M35 10Q95 25 50 40T80 75" fill="none" stroke="${color}" stroke-width="12"/>`;
        } else if (['dog', 'ball', 'cat'].includes(lesson.id)) {
            shape = `<circle cx="70" cy="42" r="28" fill="${color}"/><path d="M44 30q26 20 52 0M45 60q25-20 50 0"/>`;
            if (lesson.id === 'cat' && index < 2) shape = `<rect x="25" y="18" width="90" height="50" rx="12" fill="${color}"/><path d="M35 30h70m-70 25h70"/>`;
        } else if (['bag', 'book'].includes(lesson.id)) {
            shape = `<rect x="35" y="8" width="70" height="68" rx="4" fill="${color}"/><path d="M45 8v68m60-8H45"/>`;
        } else if (lesson.id === 'cow') {
            shape = '<rect x="20" y="20" width="100" height="45" rx="10" fill="#d6bc74"/><path d="M50 20v45m40-45v45M25 35h20m10 15h25m15-15h20"/>';
        } else if (lesson.id === 'rope') {
            shape = `<path d="${index < 2 ? 'M40 42h60' : 'M15 25h110q15 0 0 25H15'}" fill="none" stroke="${index % 2 ? '#e5b75a' : '#75a8ce'}" stroke-width="8"/>`;
        } else if (lesson.id === 'towel') {
            shape = `<rect x="25" y="10" width="90" height="65" rx="5" fill="${color}"/><path d="M30 65h80"/>${index === 0 ? '<circle cx="70" cy="35" r="11" fill="#fff9e6"/>' : index === 1 ? '<path d="M70 20q20 0 10 15 10 20-10 15-20 5-10-15-10-15 10-15Z" fill="#fff9e6"/>' : '<path d="M45 42h50L85 57H55ZM70 20v22l20-4Z" fill="#fff9e6"/>'}`;
        } else if (['wind', 'seedling', 'milk'].includes(lesson.id)) {
            shape = lesson.id === 'wind' ? `<rect x="25" y="20" width="90" height="50" rx="18" fill="${color}"/>` : lesson.id === 'milk' ? `<path d="M55 10h30v20l15 12v33H40V42l15-12Z" fill="#fff9e6"/><rect x="55" y="5" width="30" height="10" rx="3" fill="${color}"/>` : `<path d="M40 42h60L90 75H50Z" fill="${color}"/><path d="M70 42V15m0 15q-30 0-25-20 25 0 25 20m0 0q30 0 25-20-25 0-25 20" fill="#81ae83"/>`;
        }
        if (shape) return `<svg class="play-prop" viewBox="0 0 140 85" aria-hidden="true" focusable="false" fill="none" stroke="#52685d" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">${shape}</svg>`;
        return `<span class="play-operation-card" aria-hidden="true"><span>${lesson.game.type === 'sequence' ? '步骤示意' : '操作示意'}</span><strong>${index + 1}</strong></span>`;
    }

    function placedContents(lesson, game, state, targetIndex) {
        const placed = state.done.filter(index => game.matches[index] === targetIndex);
        return `<span class="play-placed-items">${placed.map(index => `<span class="play-placed-item">${pieceVisual(lesson, game.pieces[index], index)}<span>${escape(game.pieces[index].label)}</span></span>`).join('')}</span>`;
    }

    function placementBoard(lesson, game, state) {
        const hints = {
            build: '把部件接到对应位置', collect: '把物件装进篮子里',
            sort: '把物件放进对应的盒子', sequence: '依次拿起物件，在操作位置完成步骤'
        };
        const scaffold = game.type === 'build' && ['wood','bridge'].includes(lesson.id) ? '<svg class="play-bridge" viewBox="0 0 500 95" aria-hidden="true" focusable="false"><path class="play-bridge-water" d="M0 80q30-18 60 0t60 0t60 0t60 0t60 0t60 0t60 0t80 0"/><path class="play-bridge-frame" d="M25 20h450M35 60h430M55 15v55m390-55v55M45 60l40-40m330 0 40 40"/></svg>' : '';
        return `<figure class="play-figure"><div class="play-board play-placement-board${isComplete(game, state) ? ' play-assembled' : ''}">${photograph(lesson)}
            <div class="play-workbench"><p class="play-board-instruction">${hints[game.type]}${game.type === 'build' && isComplete(game, state) ? ' · 作品已拼搭完成' : ''}</p>${scaffold}
            <div class="play-targets">${game.targets.map((slot, index) => {
                const count = state.done.filter(piece => game.matches[piece] === index).length;
                const expected = game.matches.filter(target => target === index).length;
                return `<button type="button" class="play-target${count ? ' play-target-filled' : ''}" data-action="play-drop" data-target="${index}" data-play-target="${index}" aria-label="放到${escape(slot.label)}，已放 ${count} 件">
                    <span class="play-target-label">${game.type === 'sequence' ? `<span class="play-step-number" aria-hidden="true">${index + 1}</span>` : ''}${escape(slot.label)}</span>
                    ${placedContents(lesson, game, state, index)}
                    <small class="play-target-state">${count ? `已放 ${count} / ${expected} 件` : '点击或拖到这里'}</small>
                </button>`;
            }).join('')}</div></div></div><figcaption class="play-caption">写实AI场景 · 操作层为游戏示意</figcaption></figure>
            <div class="play-piece-tray" aria-label="可操作的物件">${game.pieces.map((piece, index) => {
                const placed = state.done.includes(index), selected = state.selected === index;
                return `<button type="button" class="play-piece${placed ? ' play-piece-placed' : ''}${selected ? ' play-piece-selected' : ''}" draggable="${placed ? 'false' : 'true'}" data-play-piece="${index}" data-action="play-pick" data-index="${index}" aria-pressed="${selected}"${placed ? ' disabled' : ''}>
                    ${game.type === 'sequence' ? `<span class="play-piece-order">第 ${index + 1} 步</span>` : ''}${pieceVisual(lesson, piece, index)}<span class="play-piece-label">${escape(piece.label)}</span><small class="play-state-label">${placed ? '已放好' : selected ? '已选中 · 点击位置放下' : '点选或拖动'}</small>
                </button>`;
            }).join('')}</div>`;
    }

    function revealBoard(lesson, game, state) {
        return `<figure class="play-figure"><div class="play-reveal-scenes">${lesson.contexts.map((context, variant) => `<div class="play-board play-reveal-board">${photograph(lesson, variant)}<div class="play-reveal-grid">${[0, 1].map(half => {
            const index = variant * 2 + half, revealed = state.done.includes(index);
            return `<button type="button" class="play-reveal-tile${revealed ? ' play-reveal-open' : ''}" data-action="play-reveal" data-index="${index}"${revealed ? ' disabled' : ''} aria-label="${revealed ? escape(context.label) + '，已揭开' : '揭开第 ' + (index + 1) + ' 块'}"><span class="play-reveal-label">${revealed ? escape(context.label) : `<span class="play-reveal-number">${index + 1}</span><span>点一下揭开</span>`}</span></button>`;
        }).join('')}</div></div>`).join('')}</div><figcaption class="play-caption">三种写实AI场景 · 每幅图片都可以自由揭开</figcaption></figure>`;
    }

    function stateMessage(game, state) {
        if (isComplete(game, state)) return `操作完成！${game.success || '场景里的操作已经完成。'}`;
        if (game.type === 'fill' || game.type === 'route') {
            const last = state.stage ? `${game.steps[state.stage - 1].result} ` : '';
            return `${last}接下来：${game.steps[state.stage].label}。`;
        }
        if (game.type === 'reveal') return `已经揭开 ${state.done.length} 块，点一下还盖着的图块。`;
        if (state.selected >= 0) return `已选中${game.pieces[state.selected].label}，点击位置放下，也可以拖动。`;
        if (game.type === 'sequence') return `接下来操作第 ${state.done.length + 1} 步：${game.pieces[state.done.length].label}。`;
        return '点选一个物件，再点击位置放下；也可以把物件拖到位置上。';
    }

    function render(lesson, state) {
        const game = lesson?.game;
        if (!validGame(game)) return '<section class="playground-game"><p class="play-feedback" role="status">操作场景暂未就绪。</p></section>';
        const current = validState(game, state) ? state : createState();
        const complete = isComplete(game, current);
        const total = game.type === 'fill' || game.type === 'route' ? 3 : game.type === 'reveal' ? 6 : game.pieces.length;
        const count = game.type === 'fill' || game.type === 'route' ? current.stage : current.done.length;
        const unit = game.type === 'reveal' ? '块' : game.type === 'fill' || game.type === 'route' || game.type === 'sequence' ? '步' : '件';
        const board = game.type === 'fill' ? fillBoard(lesson, game, current)
            : game.type === 'route' ? routeBoard(lesson, game, current)
            : game.type === 'reveal' ? revealBoard(lesson, game, current)
            : placementBoard(lesson, game, current);
        return `<section class="playground-game play-${game.type}${complete ? ' play-complete' : ''}" aria-label="${escape(game.title)}">
            <div class="play-heading"><span class="play-kind">${labels[game.type]}</span><h2 class="play-title">${escape(game.title)}</h2><p class="play-instruction">${escape(game.instruction)}</p>${game.safety ? `<p class="play-safety">安全提醒：${escape(game.safety)}</p>` : ''}</div>
            ${board}
            <div class="play-progress"><progress class="play-progress-bar" value="${count}" max="${total}" aria-label="已完成 ${count} / ${total} ${unit}">${count} / ${total}</progress><span class="play-progress-count">${count} / ${total} ${unit}${complete ? ' · 已完成' : ''}</span></div>
            <p class="play-feedback" role="status" aria-live="polite" aria-atomic="true">${escape(stateMessage(game, current))}</p>
            <div class="play-footer"><button type="button" class="play-reset" data-action="play-reset">重新玩</button><small class="play-reset-note">重新玩不会清除已获得的贴纸。这里只玩操作，不作为识字证据。</small></div>
        </section>`;
    }

    return Object.freeze({createState, reduce, isComplete, render, labels});
}));
