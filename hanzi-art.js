'use strict';
(() => {
    const directory = 'hanzi-images/realistic-v1';
    function icon(id, variant = 0) {
        return `<img class="photo-art" src="${directory}/${id}-${variant}.jpg" alt="" width="1008" height="568" loading="lazy" decoding="async">`;
    }
    function scene(id, variant = 0) {
        return `<img class="photo-art scene-art" src="${directory}/${id}-${variant}.jpg" alt="" width="1008" height="568" decoding="async">`;
    }
    window.HanziArt = {icon, scene};
})();
