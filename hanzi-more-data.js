(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = lessons => factory(lessons, [
      require('./hanzi-scenes-nature.js'), require('./hanzi-scenes-garden.js'),
      require('./hanzi-scenes-animals.js'), require('./hanzi-scenes-senses.js'),
      require('./hanzi-scenes-home.js'), require('./hanzi-scenes-kitchen.js'),
      require('./hanzi-scenes-travel.js'), require('./hanzi-scenes-seaside.js'),
      require('./hanzi-scenes-workshop.js'), require('./hanzi-scenes-community.js')
    ]);
  } else root.HanziLessons.push(...factory(root.HanziLessons, root.HanziSceneCatalogs));
}(typeof window !== 'undefined' ? window : globalThis, function (lessons, catalogs) {
  'use strict';
  const originals = new Map(lessons.map(lesson => [lesson.id, lesson]));
  return catalogs.flatMap(({category, stories}) => stories.map(story => {
    const base = originals.get(story.baseId);
    const contexts = [
      {id: `${story.id}-scene0`, label: story.sceneLabel, image: `hanzi-images/realistic-v1/${story.id}-0.jpg`, framing: 'wide'},
      ...base.contexts.slice(1).map((context, index) => ({
        id: `${story.id}-scene${index + 1}`, label: context.label,
        image: `hanzi-images/realistic-v1/${base.id}-${index + 1}.jpg`
      }))
    ];
    const game = {...story.game};
    if (game.type === 'reveal') game.spots = contexts.flatMap(context => [
      `${context.label}的图卡揭开了一半。`, `${context.label}的图卡完整露出了，可以自由观察。`
    ]);
    return {
      ...base, ...story, contexts, game, sceneCategory: category, region: category,
      contentVersion: '2026-11-23', reviewStatus: 'draft'
    };
  }));
}));
