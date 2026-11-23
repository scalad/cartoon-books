'use strict';
(() => {
    const directory = 'hanzi-images/realistic-v1';
    const scenes = new Map((window.HanziLessons || []).map(lesson => [lesson.id, lesson.contexts]));
    function source(id, variant = 0) {
        return scenes.get(id)?.[variant]?.image || `${directory}/${id}-${variant}.jpg`;
    }
    function icon(id, variant = 0) {
        return `<img class="photo-art${scenes.get(id)?.[variant]?.framing === 'wide' ? ' photo-wide' : ''}" src="${source(id, variant)}" alt="" width="1008" height="568" loading="lazy" decoding="async">`;
    }
    function scene(id, variant = 0) {
        return `<img class="photo-art scene-art${scenes.get(id)?.[variant]?.framing === 'wide' ? ' photo-wide' : ''}" src="${source(id, variant)}" alt="" width="1008" height="568" decoding="async">`;
    }
    window.HanziArt = {source, icon, scene};
})();
