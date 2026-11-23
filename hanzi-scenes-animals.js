(function (root, factory) {
  const catalog = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = catalog;
  } else if (root) {
    (root.HanziSceneCatalogs ||= []).push(catalog);
  }
})(typeof window !== 'undefined' ? window : null, function () {
  'use strict';

  return {
    category: '动物朋友',
    stories: [
      {
        id: 'animals-bird-01',
        baseId: 'bird',
        title: '雪枝上的鸟寄来冬日照片',
        partner: '整理自然相册的爸爸',
        item: '雪枝观鸟纪念页',
        mission: '“把雪枝新照和两张旧照片收进同一册，让我们隔着屏幕看看鸟！”',
        sceneLabel: '停在覆雪细枝上的小鸟',
        sceneDescription: 'A small blue tit naturally perched on a slender snow-covered branch in a quiet winter woodland. Its complete feathered body, folded wings, feet gripping the twig and short beak are clearly visible. A softly blurred pale forest fills the background. Photorealistic wildlife photography with natural cold daylight, horizontal framing and at least eight percent crop-safe space around the bird. No people, artificial feeding stations, text or captions.',
        actionLabel: '收好三张鸟照片',
        actionResult: '雪枝上的小鸟、飞行中的燕子和站着的小鸟照片都进入了观鸟相册。',
        application: '给雪枝上的小鸟照片放上“鸟”字牌。',
        ending: '爸爸把冬日照片留在相册第一页，窗外仍然安安静静。',
        cloze: '雪枝上停着一只小——。',
        homeTip: '窗外自然出现鸟时，可以在原来的室内位置听孩子自己的描述；不先指鸟、不读字、不追问，也不用食物引鸟。',
        game: {
          type: 'collect',
          title: '冬日观鸟相册',
          instruction: '把三张照片拖进观鸟相册，先放哪一张都可以。',
          success: '三张鸟照片已经收好，可以自由翻看。',
          safety: '只移动屏幕照片，不投食、不追鸟，不打开窗户探身观察。',
          pieces: [
            { label: '停在覆雪细枝上的小鸟', variant: 0, photo: true },
            { label: '飞行中的燕子', variant: 1, photo: true },
            { label: '站着的小鸟', variant: 2, photo: true }
          ],
          targets: [{ label: '观鸟相册', x: 50, y: 50 }],
          matches: [0, 0, 0]
        }
      },
      {
        id: 'animals-bird-02',
        baseId: 'bird',
        title: '芦苇上方的飞鸟有了动作页',
        partner: '喜欢看自然照片的姐姐',
        item: '飞行与站立对照页',
        mission: '“把飞着的鸟照片放一起，再给站着的小鸟留一栏！”',
        sceneLabel: '掠过芦苇上方的飞鸟',
        sceneDescription: 'A single small wild bird in mid-flight above a reed bed beside a calm wetland. Both wings are extended in a credible flying posture, with its entire body separated clearly from the softly blurred reeds below. Natural morning light, realistic feathers and distant wildlife photography, landscape composition with ample crop-safe margins. No people, nests, lures, text or captions.',
        actionLabel: '按动作整理鸟照片',
        actionResult: '掠过芦苇的飞鸟和飞行中的燕子进入飞行栏，站着的小鸟进入站立栏。',
        application: '给掠过芦苇的飞鸟照片放上“鸟”字牌。',
        ending: '姐姐把两栏并排打开，飞着和站着的鸟都留在照片里。',
        cloze: '芦苇上方飞过一只——。',
        homeTip: '翻看已有的湿地照片时，接纳孩子自然谈到的动物或动作，不要求按动作分类、不提示字音；不为拍照惊动鸟。',
        game: {
          type: 'sort',
          title: '鸟的动作两栏',
          instruction: '把两张飞行照片放到飞行栏，把站着的小鸟照片放到站立栏。',
          success: '照片按画面里的动作分成了两栏。',
          safety: '这是屏幕照片整理，不追赶鸟，也不模仿飞行去攀高或跳下。',
          pieces: [
            { label: '掠过芦苇上方的飞鸟', variant: 0, photo: true },
            { label: '飞行中的燕子', variant: 1, photo: true },
            { label: '站着的小鸟', variant: 2, photo: true }
          ],
          targets: [
            { label: '飞行栏', x: 30, y: 50 },
            { label: '站立栏', x: 70, y: 50 }
          ],
          matches: [0, 0, 1]
        }
      },
      {
        id: 'animals-insect-01',
        baseId: 'insect',
        title: '露珠草叶旁的小虫展板',
        partner: '整理微距图册的妈妈',
        item: '草叶小虫三格展页',
        mission: '“给草叶上的瓢虫留中间一格，把蝴蝶和蚂蚁照片摆在两边！”',
        sceneLabel: '停在带露珠草叶上的瓢虫',
        sceneDescription: 'A red ladybug with black spots naturally resting on a curved green grass blade beside clear morning dew droplets. The full insect remains sharply visible while surrounding meadow grass falls softly out of focus. Authentic macro wildlife photography with realistic legs, wing covers and water reflections, landscape framing with safe space around the subject. No hands, collecting containers, text or captions.',
        actionLabel: '拼出小虫三格展板',
        actionResult: '瓢虫新照在中间，蝴蝶和蚂蚁照片在两边，三格展板摆好了。',
        application: '给草叶上的瓢虫照片放上“虫”字牌。',
        ending: '妈妈把展板收进微距图册，露珠仍停留在照片中的草叶上。',
        cloze: '草叶上的瓢虫是一只小——。',
        homeTip: '自然翻到微距图画时，听孩子主动说到的细节，不先指斑点、不要求认字；不用手抓虫或收集小虫来验证。',
        game: {
          type: 'build',
          title: '小虫三格展板',
          instruction: '把瓢虫照片放中间，把蝴蝶照片放左边，把蚂蚁照片放右边。',
          success: '三张小虫照片各有一格，展板完成了。',
          safety: '只拼屏幕照片，不触碰、捕捉小虫，也不采摘草叶。',
          pieces: [
            { label: '停在带露珠草叶上的瓢虫', variant: 0, photo: true },
            { label: '展开翅膀的蝴蝶', variant: 1, photo: true },
            { label: '爬行的蚂蚁', variant: 2, photo: true }
          ],
          targets: [
            { label: '中间瓢虫格', x: 50, y: 55 },
            { label: '左边蝴蝶格', x: 22, y: 40 },
            { label: '右边蚂蚁格', x: 78, y: 40 }
          ],
          matches: [0, 1, 2]
        }
      },
      {
        id: 'animals-insect-02',
        baseId: 'insect',
        title: '蚂蚁走过干土裂纹的静看页',
        partner: '陪看自然短片的爸爸',
        item: '干土小虫静看流程页',
        mission: '“先选干土上的蚂蚁照片，再打开屏幕放大框，最后把这页收好！”',
        sceneLabel: '在干土裂纹旁爬行的蚂蚁',
        sceneDescription: 'A single dark ant naturally walking along the edge of a narrow crack in dry garden soil. Its head, thorax, abdomen, antennae and six legs are visible against the rough earth texture. Close macro wildlife photograph with gentle side light and shallow depth of field, horizontal framing and the entire ant safely inside the crop margins. No people, bait, traps, text or captions.',
        actionLabel: '排好静看蚂蚁的步骤',
        actionResult: '选照片、打开屏幕放大框、收好观察页的三张步骤卡依次排好了。',
        application: '给干土上的蚂蚁照片放上“虫”字牌。',
        ending: '爸爸关好屏幕放大框，把干土观察页放回电子图册。',
        cloze: '蚂蚁是一种小——。',
        homeTip: '日常经过步道时，若孩子自然注意到蚂蚁，可以听他的描述；不先指出、不问答案，不蹲到蚁穴旁或拨动泥土。',
        game: {
          type: 'sequence',
          title: '屏幕静看三步骤',
          instruction: '依次把选照片卡、屏幕放大框卡、收页卡拖到第一、第二、第三步。',
          success: '静看准备顺序排好了，不需要碰真实的小虫。',
          safety: '放大框和步骤卡都是屏幕示意，不挖蚁穴、不抓蚂蚁，不把小物放入口中。',
          pieces: [
            { label: '选干土蚂蚁照片卡', variant: 0, photo: false },
            { label: '打开屏幕放大框卡', variant: 0, photo: false },
            { label: '收好观察页卡', variant: 0, photo: false }
          ],
          targets: [
            { label: '第一步：选照片', x: 20, y: 50 },
            { label: '第二步：屏幕放大', x: 50, y: 50 },
            { label: '第三步：收好页', x: 80, y: 50 }
          ],
          matches: [0, 1, 2]
        }
      },
      {
        id: 'animals-fish-01',
        baseId: 'fish',
        title: '海草间的鱼打开水下图册',
        partner: '整理水下照片的阿姨',
        item: '海草鱼照片浏览路线页',
        mission: '“沿屏幕图册路线，经过水下照片入口和海草展格，到鱼的纪念页停下！”',
        sceneLabel: '在海草叶间游动的银色鱼',
        sceneDescription: 'A silver marine fish swimming naturally between long green seagrass leaves in clear shallow seawater. Its full body, fins and tail are sharply visible, with soft sunlight filtering through the water and sandy seabed behind. Photorealistic underwater wildlife photograph, horizontal framing and generous crop-safe margins around the fish. No divers, fishing gear, feeding, text or captions.',
        actionLabel: '走完水下图册路线',
        actionResult: '屏幕浏览标记经过水下照片入口、海草展格，停在鱼的纪念页。',
        application: '给海草叶间游动的鱼照片放上“鱼”字牌。',
        ending: '阿姨把纪念页留在图册里，海草和鱼都可以隔着屏幕看。',
        cloze: '海草叶间游着一条——。',
        homeTip: '看已有的海底照片时，让孩子自行决定看哪里，不先指鱼、不追问；不安排下水、捕捞或喂鱼活动。',
        game: {
          type: 'route',
          title: '水下图册浏览图',
          instruction: '按顺序点屏幕上的水下照片入口、海草展格和鱼纪念页。',
          success: '浏览标记到达鱼纪念页，图册路线走完了。',
          safety: '路线只在屏幕图册中，不是下水路线，不潜水、不捕捞、不投食。',
          steps: [
            { label: '水下照片入口', result: '打开了水下照片栏目。' },
            { label: '海草展格', result: '浏览标记来到海草鱼照片旁。' },
            { label: '鱼纪念页', result: '浏览标记停在图册纪念页。' }
          ],
          targets: [
            { label: '水下照片入口', x: 20, y: 25 },
            { label: '海草展格', x: 50, y: 65 },
            { label: '鱼纪念页', x: 80, y: 35 }
          ]
        }
      },
      {
        id: 'animals-fish-02',
        baseId: 'fish',
        title: '沉木旁的鱼加入水中照片袋',
        partner: '喜欢水族图册的哥哥',
        item: '沉木鱼照片收藏页',
        mission: '“把沉木旁的新照片和河里、水族箱里的鱼照片一起收好！”',
        sceneLabel: '在水族箱沉木旁游动的橙色鱼',
        sceneDescription: 'A healthy orange aquarium fish naturally swimming beside a smooth piece of submerged driftwood in a spacious planted freshwater aquarium. The entire fish and its fins are clearly separated from the wood, with green aquatic plants and fine gravel in the background. Realistic aquarium photography under soft tank lighting, horizontal framing with ample crop-safe room. No hands, nets, food, text or captions.',
        actionLabel: '收集三张水中鱼照片',
        actionResult: '沉木旁的鱼、河里游动的鱼和水族箱里的鱼照片都收进了照片袋。',
        application: '给水族箱沉木旁的鱼照片放上“鱼”字牌。',
        ending: '哥哥把照片袋放在电子图册里，没有往真实水族箱里放任何东西。',
        cloze: '沉木旁边游来一条——。',
        homeTip: '自然看水族箱时，在成人陪伴的日常位置听孩子的描述，不先提示动物名、不拍玻璃，不伸手入水或投食。',
        game: {
          type: 'collect',
          title: '水中照片袋',
          instruction: '把三张鱼照片拖进水中照片袋，顺序不限。',
          success: '三张鱼照片都进了照片袋。',
          safety: '只收集屏幕照片，不捞鱼、不拍玻璃、不把物品或食物放进水里。',
          pieces: [
            { label: '在水族箱沉木旁游动的橙色鱼', variant: 0, photo: true },
            { label: '河里游动的鱼', variant: 1, photo: true },
            { label: '水族箱里的鱼', variant: 2, photo: true }
          ],
          targets: [{ label: '水中照片袋', x: 50, y: 50 }],
          matches: [0, 0, 0]
        }
      },
      {
        id: 'animals-rabbit-01',
        baseId: 'rabbit',
        title: '花草间的兔有了地点页',
        partner: '整理动物绘本的妈妈',
        item: '花草与洞口兔照片页',
        mission: '“把花草间的两张兔照片放一起，洞口的照片放到另一栏！”',
        sceneLabel: '在野花草地上休息的兔',
        sceneDescription: 'A brown wild rabbit resting naturally on a meadow patch among low white wildflowers and green grass. Its long ears, complete body and short tail are visible without any staged pose. Soft late-afternoon light and a distant blurred meadow background, photorealistic telephoto wildlife photograph with horizontal composition and safe margins. No people, carrots, feeding, handling, text or captions.',
        actionLabel: '整理兔照片的地点栏',
        actionResult: '野花草地和草地休息照片进入花草间栏，洞口的兔照片进入洞口栏。',
        application: '给野花草地上休息的兔照片放上“兔”字牌。',
        ending: '妈妈把两栏夹进绘本的电子附页，兔只在照片里被安静地观看。',
        cloze: '野花草地上休息着一只——。',
        homeTip: '孩子自由翻动物书时，听他主动谈到的兔或背景，不替他选页、不测试地点；不追逐、投食或触碰野兔。',
        game: {
          type: 'sort',
          title: '兔照片的两种地点',
          instruction: '把野花草地和草地休息照片放到花草间栏，把洞口照片放到洞口栏。',
          success: '三张兔照片按画面里的地点收好了。',
          safety: '只整理屏幕照片，不寻找兔洞、不靠近或触碰野兔。',
          pieces: [
            { label: '在野花草地上休息的兔', variant: 0, photo: true },
            { label: '待在洞口的兔', variant: 1, photo: true },
            { label: '在草地上休息的兔', variant: 2, photo: true }
          ],
          targets: [
            { label: '花草间栏', x: 30, y: 50 },
            { label: '洞口栏', x: 70, y: 50 }
          ],
          matches: [0, 1, 0]
        }
      },
      {
        id: 'animals-rabbit-02',
        baseId: 'rabbit',
        title: '雪地里的兔留在季节相框',
        partner: '收藏四季照片的爸爸',
        item: '雪地兔三格相框页',
        mission: '“让雪地里的兔在上面，洞口和草地上的兔照片在下面并排！”',
        sceneLabel: '在积雪地面上自然坐起的白兔',
        sceneDescription: 'A white mountain hare sitting naturally on a broad patch of snow at the edge of a quiet alpine meadow. Long upright ears with darker tips, the full body and a small short tail are clearly visible. Subtle snow texture and softly blurred low shrubs surround the animal. Authentic winter wildlife photography, horizontal composition with generous crop-safe margins. No people, bait, footprints leading to the animal, text or captions.',
        actionLabel: '拼好雪地兔相框',
        actionResult: '雪地里的白兔照片在上格，洞口和草地上的兔照片在下方两格。',
        application: '给积雪地面上的白兔照片放上“兔”字牌。',
        ending: '爸爸把季节相框存进相册，雪景不用亲自走进去也能看。',
        cloze: '积雪地面上坐着一只白——。',
        homeTip: '自然翻到雪景动物照片时，接纳孩子自己的描述，不先提示颜色或名称，也不安排寻找野兔的活动。',
        game: {
          type: 'build',
          title: '兔的季节相框',
          instruction: '把雪地白兔照片放上格，把洞口照片放左下格，把草地休息照片放右下格。',
          success: '三格相框拼好了，雪地新照片在上面。',
          safety: '这是屏幕相框拼摆，不进入积雪野地，不接近或投食野兔。',
          pieces: [
            { label: '在积雪地面上自然坐起的白兔', variant: 0, photo: true },
            { label: '待在洞口的兔', variant: 1, photo: true },
            { label: '在草地上休息的兔', variant: 2, photo: true }
          ],
          targets: [
            { label: '上方雪地格', x: 50, y: 25 },
            { label: '左下洞口格', x: 25, y: 70 },
            { label: '右下草地格', x: 75, y: 70 }
          ],
          matches: [0, 1, 2]
        }
      },
      {
        id: 'animals-cow-01',
        baseId: 'cow',
        title: '果树牧场里的牛需要照片页边',
        partner: '整理农场相册的舅舅',
        item: '果树牧场牛照片封页',
        mission: '“先选果树旁的牛照片，再放上电子页边，最后把封页收进相册！”',
        sceneLabel: '在果树牧草地上站着的花斑牛',
        sceneDescription: 'A black-and-white dairy cow standing naturally in a grassy orchard pasture, with several mature apple trees spaced widely in the background. The complete cow, its four legs and relaxed head are visible in side view. Natural morning sunlight, realistic fur and grass textures, landscape farm photograph with crop-safe space around the animal. No people, feeding equipment, handling, text or captions.',
        actionLabel: '排好牛照片封页步骤',
        actionResult: '选照片、放电子页边、收进相册的三张步骤卡依次归位。',
        application: '给果树牧草地上的花斑牛照片放上“牛”字牌。',
        ending: '舅舅把封页放好，果树牧场的牛仍然只出现在照片里。',
        cloze: '果树旁站着一头花斑——。',
        homeTip: '自然翻看农场照片时，听孩子主动谈到的动物或树，不先指花斑、不追问；不进牧场或靠近牛来验证识字。',
        game: {
          type: 'sequence',
          title: '牧场照片封页准备',
          instruction: '依次把选照片卡、电子页边卡、相册收页卡放到三个步骤位置。',
          success: '照片封页的准备顺序排好了。',
          safety: '只操作屏幕卡片，页边是电子示意；不进入牛栏，不牵牛或投食。',
          pieces: [
            { label: '选果树牧场照片卡', variant: 0, photo: false },
            { label: '放电子页边卡', variant: 0, photo: false },
            { label: '相册收页卡', variant: 0, photo: false }
          ],
          targets: [
            { label: '第一步：选照片', x: 20, y: 50 },
            { label: '第二步：放页边', x: 50, y: 50 },
            { label: '第三步：收封页', x: 80, y: 50 }
          ],
          matches: [0, 1, 2]
        }
      },
      {
        id: 'animals-cow-02',
        baseId: 'cow',
        title: '树荫下的牛通向安静观察页',
        partner: '带看牧场图册的奶奶',
        item: '树荫牛电子观察页',
        mission: '“沿屏幕上的牧场图册，经过照片目录和树荫展格，到安静观察页！”',
        sceneLabel: '在牧场树荫下卧着的棕色牛',
        sceneDescription: 'A brown cow lying naturally on pasture grass beneath the broad shade of a mature tree. Its full resting body, relaxed face and folded legs are visible, with sunlit meadow beyond the shade. Photorealistic farm photograph showing credible fur and dappled light, horizontal framing with generous clear margins around the cow. No people, feed deliveries, handling, text or captions.',
        actionLabel: '找到树荫牛观察页',
        actionResult: '屏幕标记从照片目录经过树荫展格，停在安静观察页。',
        application: '给树荫下卧着的棕色牛照片放上“牛”字牌。',
        ending: '奶奶在观察页停了一会儿，没有走进真实牧场打扰牛。',
        cloze: '树荫下卧着一头——。',
        homeTip: '日常翻看牧场图册时，留意孩子自然的描述，不先提示卧着的动物名，不要求复述；真实农场观察遵守成人和场地的距离安排。',
        game: {
          type: 'route',
          title: '牧场图册安静路线',
          instruction: '依次点照片目录、树荫展格和安静观察页，让浏览标记到终点。',
          success: '浏览标记到达安静观察页。',
          safety: '这是一条屏幕图册路线，不是进入牧场的路线，不靠近、触摸或喂牛。',
          steps: [
            { label: '照片目录', result: '打开牧场照片目录。' },
            { label: '树荫展格', result: '浏览标记来到树荫牛的新照片。' },
            { label: '安静观察页', result: '浏览标记停在安静观察页。' }
          ],
          targets: [
            { label: '照片目录', x: 20, y: 30 },
            { label: '树荫展格', x: 50, y: 65 },
            { label: '安静观察页', x: 80, y: 30 }
          ]
        }
      },
      {
        id: 'animals-sheep-01',
        baseId: 'sheep',
        title: '棚檐阴影里的羊收进牧场册',
        partner: '收藏牧场照片的爷爷',
        item: '棚檐羊照片收藏页',
        mission: '“把棚檐下的绵羊新照和另外两张羊照片收进牧场册！”',
        sceneLabel: '在开放棚檐阴影里站着的绵羊',
        sceneDescription: 'A woolly sheep standing naturally in the shade beneath the edge of an open-sided farm shelter. Its complete body and dense curled fleece are clearly visible, with a sunlit grass pasture beyond the shelter and simple timber posts well behind it. Photorealistic farm photography with soft reflected daylight, horizontal framing and crop-safe margins. No people, shearing tools, feeding, text or captions.',
        actionLabel: '收好棚檐羊照片',
        actionResult: '棚檐下的绵羊、长着胡须的山羊和侧身站着的羊照片都进入了牧场册。',
        application: '给棚檐阴影里的绵羊照片放上“羊”字牌。',
        ending: '爷爷合上电子牧场册，棚檐下的阴影留在了新照片里。',
        cloze: '棚檐下站着一只绵——。',
        homeTip: '自然翻到牧场照片时，听孩子自己谈到的动物或光影，不先提示羊毛或字音；不伸手进栏、不投食。',
        game: {
          type: 'collect',
          title: '牧场羊照片册',
          instruction: '把三张羊照片拖进牧场册，放入顺序不限。',
          success: '三张羊照片已经收进同一册。',
          safety: '只移动照片，不进羊舍，不剪羊毛、不触摸或喂动物。',
          pieces: [
            { label: '在开放棚檐阴影里站着的绵羊', variant: 0, photo: true },
            { label: '长着胡须的山羊', variant: 1, photo: true },
            { label: '侧身站着的羊', variant: 2, photo: true }
          ],
          targets: [{ label: '牧场羊照片册', x: 50, y: 50 }],
          matches: [0, 0, 0]
        }
      },
      {
        id: 'animals-sheep-02',
        baseId: 'sheep',
        title: '石墙旁的羊留两种观察记号',
        partner: '整理照片说明的姐姐',
        item: '石墙羊背景姿态记号页',
        mission: '“把石墙、草地记号放到背景栏，把侧身、站立记号放到姿态栏！”',
        sceneLabel: '在草地石墙旁侧身站着的绵羊',
        sceneDescription: 'A single woolly sheep standing naturally in side profile on level grass beside a low dry-stone wall in a rural pasture. The sheep is wholly visible, with its legs on the ground, curled fleece and relaxed head clearly shown. Realistic stone and grass textures in gentle overcast daylight, landscape photograph with generous crop-safe margins. No people, climbing, feeding, text or captions.',
        actionLabel: '分好羊照片的观察记号',
        actionResult: '石墙和草地记号进入背景栏，侧身和站立记号进入姿态栏。',
        application: '给石墙旁侧身站着的绵羊照片放上“羊”字牌。',
        ending: '姐姐把两栏记号留在照片旁，没有把记号当作真正的石墙或动物。',
        cloze: '石墙旁站着一只绵——。',
        homeTip: '看已有的羊照片时，接纳孩子自然注意到的背景或姿势，不要求分栏、不先提示；不靠近石墙或动物做演示。',
        game: {
          type: 'sort',
          title: '背景与姿态记号盒',
          instruction: '把石墙、草地两张示意记号放到背景栏，把侧身、站立两张示意记号放到姿态栏。',
          success: '四张观察记号分成了背景和姿态两栏。',
          safety: '记号都是屏幕示意卡，不移动真实石头，不进入牧场，不触碰动物。',
          pieces: [
            { label: '石墙背景记号', variant: 0, photo: false },
            { label: '草地背景记号', variant: 0, photo: false },
            { label: '侧身姿态记号', variant: 0, photo: false },
            { label: '站立姿态记号', variant: 0, photo: false }
          ],
          targets: [
            { label: '背景栏', x: 30, y: 50 },
            { label: '姿态栏', x: 70, y: 50 }
          ],
          matches: [0, 0, 1, 1]
        }
      },
      {
        id: 'animals-horse-01',
        baseId: 'horse',
        title: '沙丘草地上的马拼成风景页',
        partner: '整理旅行动物图册的妈妈',
        item: '沙丘马三格风景页',
        mission: '“把沙丘草地的马照片放大格，慢跑和拉空车的照片放两边！”',
        sceneLabel: '在海岸沙丘草地上站着的灰马',
        sceneDescription: 'A grey horse standing naturally on a level grassy area beside coastal sand dunes. Its full body, long face, mane and four grounded legs are visible, with dune grass and a distant pale sea horizon behind. Authentic landscape animal photography in soft coastal daylight, horizontal framing with ample crop-safe space. No people, riders, reins in use, text or captions.',
        actionLabel: '拼好马的三格风景页',
        actionResult: '沙丘草地的马照片进入中间大格，慢跑和拉空车的马照片进入两侧。',
        application: '给沙丘草地上站着的灰马照片放上“马”字牌。',
        ending: '妈妈把风景页存进旅行图册，这次旅行只发生在照片里。',
        cloze: '沙丘旁的草地上站着一匹——。',
        homeTip: '自然看旅行相册或动物图册时，听孩子自己的话，不先指出鬃毛、不测试；不安排骑乘或靠近马的活动。',
        game: {
          type: 'build',
          title: '马的风景三格页',
          instruction: '把沙丘灰马照片放中间大格，把慢跑照片放左格，把拉空车照片放右格。',
          success: '马的三格照片页拼好了。',
          safety: '只拼屏幕照片，不骑马、不牵马，也不靠近真实的车或动物。',
          pieces: [
            { label: '在海岸沙丘草地上站着的灰马', variant: 0, photo: true },
            { label: '正在慢跑的马', variant: 1, photo: true },
            { label: '拉着空车的马', variant: 2, photo: true }
          ],
          targets: [
            { label: '中间沙丘大格', x: 50, y: 55 },
            { label: '左边慢跑格', x: 22, y: 40 },
            { label: '右边空车格', x: 78, y: 40 }
          ],
          matches: [0, 1, 2]
        }
      },
      {
        id: 'animals-horse-02',
        baseId: 'horse',
        title: '水槽旁的马只在屏幕里静看',
        partner: '陪看牧场图册的爸爸',
        item: '饮水马静看准备页',
        mission: '“先打开水槽旁的马照片，再放静看标记，最后收好这一页！”',
        sceneLabel: '在牧场水槽旁低头饮水的棕马',
        sceneDescription: 'A chestnut horse naturally lowering its muzzle to drink from a stable low water trough in a grassy pasture. The complete horse remains visible, with a long mane, grounded legs and calm posture. The trough has a credible simple farm construction and stands on level ground. Photorealistic farm photograph with natural daylight, landscape framing and safe margins. No people, handling, feed, text or captions.',
        actionLabel: '排好饮水马静看步骤',
        actionResult: '打开照片、放静看标记、收页的三张准备卡按顺序放好了。',
        application: '给水槽旁饮水的棕马照片放上“马”字牌。',
        ending: '爸爸把静看页收好，真实水槽和马都不用操作。',
        cloze: '水槽旁饮水的是一匹——。',
        homeTip: '自然翻到饮水动物照片时，听孩子主动的描述，不先读字、不要求模仿；真实水槽和动物照料交给工作人员。',
        game: {
          type: 'sequence',
          title: '饮水照片静看准备',
          instruction: '依次把打开照片卡、静看标记卡、收页卡放到第一、第二、第三步。',
          success: '屏幕静看准备排好了，没有给真实动物送水。',
          safety: '只操作电子准备卡，不接近水槽、不喂马，不搬水或牵动物。',
          pieces: [
            { label: '打开饮水马照片卡', variant: 0, photo: false },
            { label: '放静看标记卡', variant: 0, photo: false },
            { label: '收好静看页卡', variant: 0, photo: false }
          ],
          targets: [
            { label: '第一步：打开照片', x: 20, y: 50 },
            { label: '第二步：放静看标记', x: 50, y: 50 },
            { label: '第三步：收页', x: 80, y: 50 }
          ],
          matches: [0, 1, 2]
        }
      },
      {
        id: 'animals-dog-01',
        baseId: 'dog',
        title: '门廊里睡着的狗通向休息页',
        partner: '整理宠物照片的阿姨',
        item: '门廊狗电子休息页',
        mission: '“沿电子相册的目录、门廊展格和休息页走一遍，不打扰照片里的狗！”',
        sceneLabel: '在门廊地垫上侧卧睡觉的狗',
        sceneDescription: 'A medium-sized tan domestic dog sleeping naturally on its side on a plain woven mat in a shaded house porch. Its whole body, relaxed paws and closed eyes are visible, with a simple doorway and porch floor softly blurred behind. Photorealistic pet photograph with gentle daylight and landscape framing, generous crop-safe margins. No people, collars with readable details, food, text or captions.',
        actionLabel: '找到门廊狗休息页',
        actionResult: '屏幕浏览标记经过宠物目录、门廊展格，停在休息页。',
        application: '给门廊地垫上睡觉的狗照片放上“狗”字牌。',
        ending: '阿姨把休息页停在屏幕上，没有叫醒或接近真实的狗。',
        cloze: '门廊地垫上睡着一只——。',
        homeTip: '自然翻看宠物相册时，听孩子自己的描述，不先提示动物名；不为认字叫醒宠物，也不接近陌生狗。',
        game: {
          type: 'route',
          title: '宠物相册休息路线',
          instruction: '按顺序点宠物目录、门廊展格和休息页。',
          success: '浏览标记到达电子休息页。',
          safety: '只走屏幕相册路线，不进入陌生门廊，不叫醒、触碰或逗弄真实的狗。',
          steps: [
            { label: '宠物目录', result: '打开宠物照片目录。' },
            { label: '门廊展格', result: '浏览标记来到门廊睡狗照片旁。' },
            { label: '休息页', result: '浏览标记停在电子休息页。' }
          ],
          targets: [
            { label: '宠物目录', x: 20, y: 25 },
            { label: '门廊展格', x: 50, y: 65 },
            { label: '休息页', x: 80, y: 35 }
          ]
        }
      },
      {
        id: 'animals-dog-02',
        baseId: 'dog',
        title: '落叶旁的狗进入秋天相册',
        partner: '收藏秋日照片的哥哥',
        item: '落叶狗秋日收藏页',
        mission: '“把落叶旁的新照片和垂耳、球旁的两张狗照片一起收进秋天相册！”',
        sceneLabel: '在院子落叶旁低头嗅闻的黑狗',
        sceneDescription: 'A black domestic dog naturally sniffing fallen golden leaves on level ground in a quiet enclosed garden. Its entire body and grounded paws are visible, with its nose lowered near the leaves and shrubs softly blurred behind. Realistic pet photography in warm autumn daylight, horizontal composition with ample crop-safe space. No people, thrown toys, food, readable tags, text or captions.',
        actionLabel: '收好秋日狗照片',
        actionResult: '落叶旁的黑狗、垂着耳朵的狗和站在球旁的狗照片都收进相册。',
        application: '给落叶旁嗅闻的黑狗照片放上“狗”字牌。',
        ending: '哥哥把秋日收藏页保存好，落叶只是照片的背景，不用捡来逗狗。',
        cloze: '院子的落叶旁有一只黑——。',
        homeTip: '自然看狗的照片时，留意孩子自己的描述，不先读字、不要求指出目标；不拿落叶、食物或玩具吸引陌生狗。',
        game: {
          type: 'collect',
          title: '秋日狗照片相册',
          instruction: '把三张狗照片拖进秋日相册，顺序不限。',
          success: '三张狗照片都已收好。',
          safety: '只收集照片，不抛物逗狗、不靠近陌生狗，也不追逐宠物。',
          pieces: [
            { label: '在院子落叶旁低头嗅闻的黑狗', variant: 0, photo: true },
            { label: '垂着耳朵的狗', variant: 1, photo: true },
            { label: '站在球旁边的狗', variant: 2, photo: true }
          ],
          targets: [{ label: '秋日相册', x: 50, y: 50 }],
          matches: [0, 0, 0]
        }
      },
      {
        id: 'animals-cat-01',
        baseId: 'cat',
        title: '窗台上的猫留下背景和动作记号',
        partner: '整理家中宠物图册的妈妈',
        item: '窗台猫背景动作页',
        mission: '“把窗台、阳光记号放背景栏，把睡觉、伸懒腰记号放动作栏！”',
        sceneLabel: '在室内宽窗台上趴着晒太阳的猫',
        sceneDescription: 'A tabby domestic cat lying naturally on a broad stable interior windowsill in a patch of soft sunlight. Its full body, whiskers, relaxed paws and tail are visible, with a closed window and a softly blurred garden beyond. Authentic indoor pet photography, realistic fur and wood textures, horizontal framing and crop-safe margins. No people, open windows, feeding, readable objects, text or captions.',
        actionLabel: '分好猫相册观察记号',
        actionResult: '窗台和阳光记号进入背景栏，睡觉和伸懒腰记号进入动作栏。',
        application: '给宽窗台上趴着的猫照片放上“猫”字牌。',
        ending: '妈妈把记号留在相册边上，孩子不需要爬窗台去重现照片。',
        cloze: '宽窗台上趴着一只——。',
        homeTip: '自然翻看猫的相册时，听孩子自己提到的细节，不先指窗台或说字音；不攀窗、不强抱宠物，不叫醒睡猫。',
        game: {
          type: 'sort',
          title: '猫照片的两类记号',
          instruction: '把窗台、阳光示意记号放背景栏，把睡觉、伸懒腰示意记号放动作栏。',
          success: '背景和动作记号分别收好了。',
          safety: '所有记号是屏幕示意卡，不爬窗台、不操作窗户，也不触碰或叫醒猫。',
          pieces: [
            { label: '窗台背景记号', variant: 0, photo: false },
            { label: '阳光背景记号', variant: 0, photo: false },
            { label: '睡觉动作记号', variant: 1, photo: false },
            { label: '伸懒腰动作记号', variant: 2, photo: false }
          ],
          targets: [
            { label: '背景栏', x: 30, y: 50 },
            { label: '动作栏', x: 70, y: 50 }
          ],
          matches: [0, 0, 1, 1]
        }
      },
      {
        id: 'animals-cat-02',
        baseId: 'cat',
        title: '庭院门阶上的猫有了三格画廊',
        partner: '收藏猫照片的姐姐',
        item: '门阶猫电子画廊页',
        mission: '“把门阶上的猫照片放中间，睡觉和伸懒腰的照片放两旁！”',
        sceneLabel: '在庭院低门阶上坐着的橘猫',
        sceneDescription: 'An orange domestic cat sitting naturally on a low stone doorstep facing a quiet planted courtyard. Its complete body, front paws, whiskers and loosely curved tail are clearly visible. Potted greenery remains in the softly blurred background without obscuring the cat. Photorealistic pet photograph in gentle morning light, horizontal framing and generous crop-safe margins. No people, feeding bowls, text or captions.',
        actionLabel: '拼好门阶猫画廊',
        actionResult: '门阶橘猫照片进入中间格，睡觉和伸懒腰的猫照片进入左右两格。',
        application: '给庭院低门阶上的橘猫照片放上“猫”字牌。',
        ending: '姐姐把电子画廊保存好，门阶旁的植物也留在新照片里。',
        cloze: '庭院门阶上坐着一只橘——。',
        homeTip: '孩子自然选宠物图册时，听他自己的描述，不替他选猫页、不追问；不追猫或强抱猫来配合活动。',
        game: {
          type: 'build',
          title: '猫照片三格画廊',
          instruction: '把门阶橘猫照片放中间，把睡觉照片放左边，把伸懒腰照片放右边。',
          success: '猫的三格电子画廊拼好了。',
          safety: '只拼电子照片，不搬动宠物、不把猫放到指定位置拍照。',
          pieces: [
            { label: '在庭院低门阶上坐着的橘猫', variant: 0, photo: true },
            { label: '蜷起来睡觉的猫', variant: 1, photo: true },
            { label: '伸懒腰的猫', variant: 2, photo: true }
          ],
          targets: [
            { label: '中间门阶格', x: 50, y: 55 },
            { label: '左边睡觉格', x: 22, y: 40 },
            { label: '右边伸懒腰格', x: 78, y: 40 }
          ],
          matches: [0, 1, 2]
        }
      },
      {
        id: 'animals-duck-01',
        baseId: 'duck',
        title: '卵石岸上的鸭需要安静看图准备',
        partner: '陪看水鸟照片的爸爸',
        item: '卵石鸭安静看图页',
        mission: '“先选卵石岸的鸭照片，再放安静标记，最后收好这张看图页！”',
        sceneLabel: '在河岸卵石上站着的鸭',
        sceneDescription: 'A mallard duck standing naturally on a broad level patch of rounded riverbank pebbles beside calm water. Its full feathered body, flat bill and webbed feet are visible, with reflected reeds softly blurred in the background. Photorealistic waterbird photography from a distant viewpoint, landscape framing and ample crop-safe space. No people, bread, feeding, fishing gear, text or captions.',
        actionLabel: '排好鸭照片静看步骤',
        actionResult: '选照片、放安静标记、收看图页的三张步骤卡依次放好了。',
        application: '给卵石河岸上站着的鸭照片放上“鸭”字牌。',
        ending: '爸爸收好安静看图页，不需要到河边投食或摆动石头。',
        cloze: '卵石河岸上站着一只——。',
        homeTip: '自然翻到水鸟照片时，听孩子自己描述，不先指出扁嘴或读字；真实散步由成人陪伴留在开放步道，不投食、不走到水边。',
        game: {
          type: 'sequence',
          title: '卵石鸭静看准备',
          instruction: '依次把选照片卡、安静标记卡、收看图页卡拖到三个步骤位置。',
          success: '安静看照片的步骤排好了。',
          safety: '只操作屏幕示意卡，不去河岸搬石头、不靠近水面、不喂鸭。',
          pieces: [
            { label: '选卵石岸鸭照片卡', variant: 0, photo: false },
            { label: '放安静标记卡', variant: 0, photo: false },
            { label: '收好看图页卡', variant: 0, photo: false }
          ],
          targets: [
            { label: '第一步：选照片', x: 20, y: 50 },
            { label: '第二步：放安静标记', x: 50, y: 50 },
            { label: '第三步：收页', x: 80, y: 50 }
          ],
          matches: [0, 1, 2]
        }
      },
      {
        id: 'animals-duck-02',
        baseId: 'duck',
        title: '睡莲间的鸭通向水鸟收藏页',
        partner: '整理水鸟相册的奶奶',
        item: '睡莲鸭电子收藏页',
        mission: '“在屏幕水鸟图册里经过目录和睡莲展格，最后到收藏页！”',
        sceneLabel: '在睡莲叶间游泳的鸭',
        sceneDescription: 'A single duck swimming naturally through a clear gap between floating water-lily leaves on a calm pond. Its complete body and flat bill are visible above the water, with gentle ripples and realistic leaf reflections around it. Authentic telephoto waterbird photograph in soft daylight, horizontal composition and generous crop-safe margins. No people, feeding, boats, text or captions.',
        actionLabel: '走到睡莲鸭收藏页',
        actionResult: '屏幕浏览标记经过水鸟目录和睡莲展格，到达收藏页。',
        application: '给睡莲叶间游泳的鸭照片放上“鸭”字牌。',
        ending: '奶奶把收藏页打开，水面的涟漪安静地留在照片中。',
        cloze: '睡莲叶间游着一只——。',
        homeTip: '看池塘相册时，听孩子自然的话，不先指鸭、不要求认字；户外由成人陪伴，留在护栏陆侧的开放步道上，不探身、不投食。',
        game: {
          type: 'route',
          title: '水鸟图册收藏路线',
          instruction: '依次点水鸟目录、睡莲展格和收藏页。',
          success: '浏览标记停在水鸟收藏页。',
          safety: '路线只在屏幕电子图册内，不到水边找鸭，不划船、不喂食。',
          steps: [
            { label: '水鸟目录', result: '打开水鸟照片目录。' },
            { label: '睡莲展格', result: '浏览标记来到睡莲鸭照片。' },
            { label: '收藏页', result: '浏览标记到达水鸟收藏页。' }
          ],
          targets: [
            { label: '水鸟目录', x: 20, y: 30 },
            { label: '睡莲展格', x: 50, y: 65 },
            { label: '收藏页', x: 80, y: 30 }
          ]
        }
      },
      {
        id: 'animals-chicken-01',
        baseId: 'chicken',
        title: '干土地上的鸡留一张沙浴照片',
        partner: '整理农场自然照片的舅妈',
        item: '鸡的自然活动照片页',
        mission: '“把干土地上的鸡新照和公鸡、白母鸡照片收进自然活动册！”',
        sceneLabel: '在干土地浅坑里自然沙浴的棕母鸡',
        sceneDescription: 'A brown hen naturally dust-bathing in a shallow hollow of dry soil in a spacious farmyard. Its complete feathered body is visible in a relaxed low posture with one wing slightly loosened, and no dramatic airborne dust obscures it. Realistic farm wildlife photography in gentle daylight, horizontal framing with crop-safe margins. No people, handling, feed scattering, text or captions.',
        actionLabel: '收好鸡的自然活动照片',
        actionResult: '沙浴的棕母鸡、农舍旁的公鸡和低头觅食的白母鸡照片收进了同一册。',
        application: '给干土浅坑里沙浴的棕母鸡照片放上“鸡”字牌。',
        ending: '舅妈收好自然活动页，沙浴只是鸡在照片里的自然动作。',
        cloze: '干土浅坑里有一只棕母——。',
        homeTip: '自然看农场相册时，听孩子主动描述，不先提示动物名、不让孩子模仿沙浴；不进栏、不抓鸡、不接触动物活动的泥土。',
        game: {
          type: 'collect',
          title: '鸡的自然活动册',
          instruction: '把三张鸡照片拖进自然活动册，先放哪张都可以。',
          success: '三张鸡照片都收进了自然活动册。',
          safety: '只移动照片，不接触沙浴泥土，不追鸡、抓鸡或投食。',
          pieces: [
            { label: '在干土地浅坑里自然沙浴的棕母鸡', variant: 0, photo: true },
            { label: '农舍旁的公鸡', variant: 1, photo: true },
            { label: '低头觅食的白母鸡', variant: 2, photo: true }
          ],
          targets: [{ label: '自然活动册', x: 50, y: 50 }],
          matches: [0, 0, 0]
        }
      },
      {
        id: 'animals-chicken-02',
        baseId: 'chicken',
        title: '果园里走路的鸡整理图册工具栏',
        partner: '制作电子农场册的哥哥',
        item: '果园鸡工具说明页',
        mission: '“把看图和收页按钮卡放工具栏，把母鸡和公鸡说明卡放说明栏！”',
        sceneLabel: '在果园草地上走路的花羽母鸡',
        sceneDescription: 'A speckled domestic hen walking naturally on level grass between widely spaced orchard trees. Its full body, feather pattern, bill and both legs are visible in a credible walking posture. Soft morning light and realistic grass textures, photorealistic farm photograph with horizontal framing and generous crop-safe space. No people, feed, handling, text or captions.',
        actionLabel: '分好鸡图册的两类卡',
        actionResult: '看图和收页按钮卡进入工具栏，母鸡和公鸡说明卡进入说明栏。',
        application: '给果园草地上走路的花羽母鸡照片放上“鸡”字牌。',
        ending: '哥哥把工具和说明分开收好，果园新照片可以安静地翻看。',
        cloze: '果园草地上走着一只母——。',
        homeTip: '自然翻看农场图册时，听孩子自己的描述，不先指出羽毛或要求分公母；真实观察只在成人安排的栏外位置，不追赶或伸手。',
        game: {
          type: 'sort',
          title: '看图工具与动物说明',
          instruction: '把看图、收页两张按钮示意卡放工具栏，把母鸡、公鸡两张说明卡放说明栏。',
          success: '图册工具卡和动物说明卡各自收好了。',
          safety: '所有卡片都是屏幕示意，不是真实按钮或动物照片；不进入果园追鸡，不投食。',
          pieces: [
            { label: '看图按钮示意卡', variant: 0, photo: false },
            { label: '收页按钮示意卡', variant: 0, photo: false },
            { label: '母鸡说明卡', variant: 0, photo: false },
            { label: '公鸡说明卡', variant: 1, photo: false }
          ],
          targets: [
            { label: '看图工具栏', x: 30, y: 50 },
            { label: '动物说明栏', x: 70, y: 50 }
          ],
          matches: [0, 0, 1, 1]
        }
      },
      {
        id: 'animals-goose-01',
        baseId: 'goose',
        title: '芦苇旁梳羽的鹅拼出水鸟展页',
        partner: '收藏水鸟照片的爷爷',
        item: '梳羽鹅三格展页',
        mission: '“把芦苇旁梳羽的白鹅放中间，水里和院子里的白鹅照片放两边！”',
        sceneLabel: '在芦苇旁岸地上自然梳羽的白鹅',
        sceneDescription: 'A white goose naturally preening its shoulder feathers while standing on a level grassy bank beside tall reeds. Its entire body, curved neck, bill and webbed feet remain clearly visible in a credible bird posture. Soft wetland daylight with detailed white feathers and a gently blurred reed background, landscape photorealistic wildlife photograph with safe margins. No people, feeding, handling, text or captions.',
        actionLabel: '拼好梳羽鹅三格页',
        actionResult: '梳羽白鹅照片在中格，水里游泳和院子站立的白鹅照片在两边。',
        application: '给芦苇旁梳羽的白鹅照片放上“鹅”字牌。',
        ending: '爷爷把三格展页收好，梳羽的动作只在照片里被观看。',
        cloze: '芦苇旁梳理羽毛的是一只白——。',
        homeTip: '自然翻到鹅的照片时，接纳孩子自己的发现，不先用叫声或动作提示；真实遇鹅保持距离，不投食、不触摸。',
        game: {
          type: 'build',
          title: '鹅照片三格展页',
          instruction: '把梳羽照片放中间，把水里游泳照片放左边，把院子站立照片放右边。',
          success: '三张鹅照片组成了展页。',
          safety: '只拼电子照片，不碰鹅或羽毛，不靠近芦苇水岸，不喂鹅。',
          pieces: [
            { label: '在芦苇旁岸地上自然梳羽的白鹅', variant: 0, photo: true },
            { label: '水里游泳的白鹅', variant: 1, photo: true },
            { label: '院子里站着的白鹅', variant: 2, photo: true }
          ],
          targets: [
            { label: '中间梳羽格', x: 50, y: 55 },
            { label: '左边游泳格', x: 22, y: 40 },
            { label: '右边院子格', x: 78, y: 40 }
          ],
          matches: [0, 1, 2]
        }
      },
      {
        id: 'animals-goose-02',
        baseId: 'goose',
        title: '柳影浅水里的鹅需要倒影页签',
        partner: '整理倒影相册的妈妈',
        item: '柳影鹅倒影页签页',
        mission: '“先选柳影里的鹅照片，再放倒影页签，最后收进电子相册！”',
        sceneLabel: '在柳树倒影旁浅水里站着的灰鹅',
        sceneDescription: 'A grey domestic goose standing naturally in shallow calm water near a bank, beside the soft reflection of willow branches. Its full feathered body and long neck are visible, with its feet discernible through the clear shallow water. Photorealistic waterbird photograph with realistic ripples and feather texture, horizontal framing and generous crop-safe margins. No people, bread, feeding, text or captions.',
        actionLabel: '排好鹅倒影页签步骤',
        actionResult: '选柳影照片、放倒影页签、收进相册的三张准备卡依次归位。',
        application: '给柳树倒影旁浅水里的灰鹅照片放上“鹅”字牌。',
        ending: '妈妈把倒影页签留在电子相册里，不需要到水中放任何东西。',
        cloze: '柳影旁的浅水里站着一只灰——。',
        homeTip: '自然看水鸟倒影照片时，听孩子自己谈到的画面，不先指鹅、不提示字音；不探身看水、不投食。',
        game: {
          type: 'sequence',
          title: '倒影相册页签准备',
          instruction: '依次把选柳影照片卡、倒影页签卡、相册收页卡放到三个步骤位置。',
          success: '倒影页签的准备顺序排好了。',
          safety: '页签和步骤卡都是屏幕示意，不下水、不放漂浮物、不靠近或喂鹅。',
          pieces: [
            { label: '选柳影灰鹅照片卡', variant: 0, photo: false },
            { label: '放倒影页签卡', variant: 0, photo: false },
            { label: '相册收页卡', variant: 0, photo: false }
          ],
          targets: [
            { label: '第一步：选照片', x: 20, y: 50 },
            { label: '第二步：放页签', x: 50, y: 50 },
            { label: '第三步：收页', x: 80, y: 50 }
          ],
          matches: [0, 1, 2]
        }
      },
      {
        id: 'animals-pig-01',
        baseId: 'pig',
        title: '牧草地上走路的猪通向自然记录页',
        partner: '带看农场图册的叔叔',
        item: '牧草猪电子自然记录页',
        mission: '“沿屏幕里的农场目录，经过牧草展格，到自然记录页停下！”',
        sceneLabel: '在农场牧草地上行走的黑猪',
        sceneDescription: 'A black domestic pig walking naturally across level green pasture in a spacious farm paddock. Its whole sturdy body, rounded snout disk, ears and four legs are clearly visible in side view. A distant simple farm shelter is softly blurred in the background. Authentic farm animal photography in natural daylight, horizontal composition with safe crop margins. No people, feeding, handling, text or captions.',
        actionLabel: '找到牧草猪记录页',
        actionResult: '屏幕标记从农场目录经过牧草展格，到达自然记录页。',
        application: '给牧草地上行走的黑猪照片放上“猪”字牌。',
        ending: '叔叔打开记录页，农场里的动物不用配合任何屏幕操作。',
        cloze: '牧草地上走着一头黑——。',
        homeTip: '自然翻看农场照片时，听孩子自己的描述，不先提示鼻子或毛色，不要求作答；真实农场活动由成人陪伴，不进栏、不投食。',
        game: {
          type: 'route',
          title: '农场图册记录路线',
          instruction: '依次点农场目录、牧草展格和自然记录页。',
          success: '浏览标记到达电子自然记录页。',
          safety: '只走屏幕图册路线，不进入猪栏，不靠近、触摸或喂猪。',
          steps: [
            { label: '农场目录', result: '打开农场照片目录。' },
            { label: '牧草展格', result: '浏览标记来到牧草黑猪照片。' },
            { label: '自然记录页', result: '浏览标记停在自然记录页。' }
          ],
          targets: [
            { label: '农场目录', x: 20, y: 25 },
            { label: '牧草展格', x: 50, y: 65 },
            { label: '自然记录页', x: 80, y: 35 }
          ]
        }
      },
      {
        id: 'animals-pig-02',
        baseId: 'pig',
        title: '橡树阴影里的猪收好午后照片',
        partner: '收藏农场相册的奶奶',
        item: '橡树猪午后照片页',
        mission: '“把橡树阴影里的新照片和花猪、卧着的猪照片收进午后照片袋！”',
        sceneLabel: '在橡树阴影里的土地上站着的粉色猪',
        sceneDescription: 'A pink domestic pig standing naturally on level dry ground in the shade of a mature oak tree in a spacious farm paddock. Its complete body, snout disk, ears and legs are visible, with dappled leaf shadows across the soil and grass beyond. Photorealistic farm photograph in soft afternoon light, landscape framing with ample crop-safe room. No people, feed, handling, text or captions.',
        actionLabel: '收好午后猪照片',
        actionResult: '橡树阴影里的粉色猪、站着的黑白花猪和卧着的粉色猪照片都收进照片袋。',
        application: '给橡树阴影里站着的粉色猪照片放上“猪”字牌。',
        ending: '奶奶合上午后照片袋，树荫留在了新的收藏页。',
        cloze: '橡树阴影里站着一头——。',
        homeTip: '日常看农场图册时，接纳孩子主动谈到的树荫或动物，不先读字、不要求比较颜色；不捡果实喂动物。',
        game: {
          type: 'collect',
          title: '午后猪照片袋',
          instruction: '把三张猪照片拖进午后照片袋，顺序不限。',
          success: '三张猪照片都放进了照片袋。',
          safety: '只收集屏幕照片，不捡橡果、不喂猪，也不进入动物活动区域。',
          pieces: [
            { label: '在橡树阴影里的土地上站着的粉色猪', variant: 0, photo: true },
            { label: '站着的黑白花猪', variant: 1, photo: true },
            { label: '卧着的粉色猪', variant: 2, photo: true }
          ],
          targets: [{ label: '午后照片袋', x: 50, y: 50 }],
          matches: [0, 0, 0]
        }
      },
      {
        id: 'animals-deer-01',
        baseId: 'deer',
        title: '野花间的鹿分出停留与行走页',
        partner: '整理野生动物相册的爸爸',
        item: '野花鹿动作对照页',
        mission: '“把休息和站着的鹿照片放停留栏，把行走的鹿照片放行走栏！”',
        sceneLabel: '在野花草地上卧着休息的鹿',
        sceneDescription: 'A deer resting naturally with its legs folded on a quiet meadow patch among low wildflowers. Its full body, slender face and ears are visible, with a distant softly blurred woodland edge behind. Authentic telephoto wildlife photography in gentle morning light, landscape framing and generous crop-safe space. No people, feeding, collars, touching, text or captions.',
        actionLabel: '按动作整理鹿照片',
        actionResult: '野花间休息和草地上站着的鹿照片进入停留栏，林间行走的鹿照片进入行走栏。',
        application: '给野花草地上休息的鹿照片放上“鹿”字牌。',
        ending: '爸爸把两栏打开看了一会儿，没有为看动作去惊动真实的鹿。',
        cloze: '野花草地上休息着一只——。',
        homeTip: '自然翻到鹿的照片时，听孩子主动谈到的动作，不先指鹿角或提示字音；不靠近、投食或追赶野生鹿。',
        game: {
          type: 'sort',
          title: '鹿照片的动作栏',
          instruction: '把休息和站着的鹿照片放停留栏，把林间行走的鹿照片放行走栏。',
          success: '三张鹿照片按画面里的动作放好了。',
          safety: '只整理照片，不惊动鹿来观察动作，不靠近、不投食、不触摸野生动物。',
          pieces: [
            { label: '在野花草地上卧着休息的鹿', variant: 0, photo: true },
            { label: '草地上站着的无角鹿', variant: 1, photo: true },
            { label: '林间行走的鹿', variant: 2, photo: true }
          ],
          targets: [
            { label: '停留栏：休息或站立', x: 30, y: 50 },
            { label: '行走栏', x: 70, y: 50 }
          ],
          matches: [0, 0, 1]
        }
      },
      {
        id: 'animals-deer-02',
        baseId: 'deer',
        title: '落叶林地里的鹿留三格林间相框',
        partner: '收藏森林照片的阿姨',
        item: '落叶鹿三格林间页',
        mission: '“把落叶地上休息的鹿照片放上格，站立和行走照片放下面两格！”',
        sceneLabel: '在林间落叶地上卧着的无角鹿',
        sceneDescription: 'An antlerless deer lying naturally with folded legs on dry fallen leaves in a quiet deciduous woodland. The complete resting body, slender head and alert ears are clearly visible between widely spaced tree trunks. Soft filtered forest daylight, realistic fur and leaf texture, photorealistic telephoto wildlife photograph with horizontal framing and crop-safe margins. No people, bait, touching, text or captions.',
        actionLabel: '拼好林间鹿相框',
        actionResult: '落叶林地休息照片在上格，草地站立和林间行走照片在下方两格。',
        application: '给林间落叶地上卧着的鹿照片放上“鹿”字牌。',
        ending: '阿姨保存了林间相框，森林里的休息场景只用照片来观看。',
        cloze: '林间落叶地上卧着一只——。',
        homeTip: '自然看森林相册时，留意孩子自己的话，不先指出动物位置、不要求回答；不离开开放步道寻找鹿。',
        game: {
          type: 'build',
          title: '林间鹿三格相框',
          instruction: '把落叶休息照片放上格，把草地站立照片放左下格，把林间行走照片放右下格。',
          success: '鹿的三格林间相框拼好了。',
          safety: '只拼屏幕相框，不进入林地找鹿，不投食、不追赶或触碰野生动物。',
          pieces: [
            { label: '在林间落叶地上卧着的无角鹿', variant: 0, photo: true },
            { label: '草地上站着的无角鹿', variant: 1, photo: true },
            { label: '林间行走的鹿', variant: 2, photo: true }
          ],
          targets: [
            { label: '上方落叶格', x: 50, y: 25 },
            { label: '左下站立格', x: 25, y: 70 },
            { label: '右下行走格', x: 75, y: 70 }
          ],
          matches: [0, 1, 2]
        }
      },
      {
        id: 'animals-bear-01',
        baseId: 'bear',
        title: '浅河里的熊只在自然照片里看',
        partner: '陪看野生动物图册的妈妈',
        item: '浅河熊安全看图准备页',
        mission: '“先选浅河里的熊照片，再放屏幕静看标记，最后收好自然图页！”',
        sceneLabel: '在浅河水中自然站着的棕熊',
        sceneDescription: 'A brown bear standing naturally in a shallow clear river with its four legs grounded on the stony riverbed. Its full strong body, round ears and relaxed head are visible, with gentle ripples and a forested far bank behind. No hunting or fish capture is shown. Authentic distant telephoto wildlife photograph with natural daylight, landscape framing and generous crop-safe margins. No people, bait, text or captions.',
        actionLabel: '排好熊照片静看步骤',
        actionResult: '选自然照片、放静看标记、收图页的三张步骤卡依次放好了。',
        application: '给浅河水中站着的棕熊照片放上“熊”字牌。',
        ending: '妈妈把自然图页收好，不需要到熊生活的河边走一趟。',
        cloze: '浅河水中站着一只棕——。',
        homeTip: '自然翻到熊的照片时，听孩子自己的描述，不先提示名称、不用玩具熊替代真实动物；不安排接近熊的活动。',
        game: {
          type: 'sequence',
          title: '熊照片安全看图准备',
          instruction: '依次把选自然照片卡、屏幕静看标记卡、收图页卡放到三个步骤位置。',
          success: '安全看照片的准备顺序排好了。',
          safety: '只操作电子步骤卡，不接近熊或熊生活的水岸，不喂食、不下水。',
          pieces: [
            { label: '选浅河棕熊照片卡', variant: 0, photo: false },
            { label: '放屏幕静看标记卡', variant: 0, photo: false },
            { label: '收好自然图页卡', variant: 0, photo: false }
          ],
          targets: [
            { label: '第一步：选照片', x: 20, y: 50 },
            { label: '第二步：放静看标记', x: 50, y: 50 },
            { label: '第三步：收图页', x: 80, y: 50 }
          ],
          matches: [0, 1, 2]
        }
      },
      {
        id: 'animals-bear-02',
        baseId: 'bear',
        title: '砾石河岸的熊通向远观图册页',
        partner: '整理自然影像的叔叔',
        item: '河岸熊电子远观页',
        mission: '“在电子自然馆里，从影像目录经过河岸展格，到远观图册页！”',
        sceneLabel: '在砾石河岸上自然行走的棕熊',
        sceneDescription: 'A brown bear walking naturally across a broad level gravel riverbank, with a calm river and distant conifer forest behind. Its full body, small round ears and grounded walking legs are visible in side view, with no prey or aggressive behavior. Photorealistic distant telephoto wildlife photography in soft overcast light, horizontal framing and generous crop-safe margins. No people, feeding, text or captions.',
        actionLabel: '找到河岸熊远观页',
        actionResult: '屏幕浏览标记经过影像目录、河岸展格，停在远观图册页。',
        application: '给砾石河岸上行走的棕熊照片放上“熊”字牌。',
        ending: '叔叔把远观页留在电子自然馆里，这条路线没有通向真实的熊。',
        cloze: '砾石河岸上走着一只棕——。',
        homeTip: '自然看野生动物图册时，接纳孩子自己的描述，不先指认、不追问；不把寻找、靠近或投食熊安排成家庭活动。',
        game: {
          type: 'route',
          title: '电子自然馆远观路线',
          instruction: '依次点影像目录、河岸展格和远观图册页。',
          success: '浏览标记到达电子远观图册页。',
          safety: '路线完全在屏幕自然馆中，不是野外找熊地图，不靠近、追赶、触碰或喂熊。',
          steps: [
            { label: '影像目录', result: '打开自然影像目录。' },
            { label: '河岸展格', result: '浏览标记来到河岸棕熊照片。' },
            { label: '远观图册页', result: '浏览标记停在电子远观页。' }
          ],
          targets: [
            { label: '影像目录', x: 20, y: 30 },
            { label: '河岸展格', x: 50, y: 65 },
            { label: '远观图册页', x: 80, y: 30 }
          ]
        }
      },
      {
        id: 'animals-bee-01',
        baseId: 'bee',
        title: '薰衣草花上的蜂进入近照册',
        partner: '收藏花间动物照片的姐姐',
        item: '薰衣草蜂近照收藏页',
        mission: '“把薰衣草上的蜜蜂新照和飞行、叶上侧身照片收进近照册！”',
        sceneLabel: '停在薰衣草花上的蜜蜂',
        sceneDescription: 'A honeybee naturally perched on a small lavender flower cluster in a garden. Its complete body, antennae, six legs and translucent wings are clearly visible among the purple blossoms. Authentic macro wildlife photography with detailed pollen and flower textures, soft natural daylight and shallow depth of field, horizontal framing with crop-safe margins. No hands, hives, collection jars, text or captions.',
        actionLabel: '收好花间蜂近照',
        actionResult: '薰衣草上的蜜蜂、空中飞行的蜜蜂和叶上侧身停留的蜜蜂照片都进入近照册。',
        application: '给薰衣草花上的蜜蜂照片放上“蜂”字牌。',
        ending: '姐姐收好近照册，花间的小动物只用照片来近看。',
        cloze: '薰衣草花上停着一只蜜——。',
        homeTip: '自然翻到花间动物近照时，听孩子自己说到的内容，不先模仿声音、不提示字音；真实遇蜂保持距离，不拍打、不捕捉。',
        game: {
          type: 'collect',
          title: '花间蜂近照册',
          instruction: '把三张蜜蜂照片拖进近照册，顺序不限。',
          success: '三张蜜蜂近照都收好了。',
          safety: '近看只用屏幕照片，不靠近蜂巢、不抓蜂、不拍打或触碰蜂。',
          pieces: [
            { label: '停在薰衣草花上的蜜蜂', variant: 0, photo: true },
            { label: '空中飞行的蜜蜂', variant: 1, photo: true },
            { label: '侧身停在叶上的蜜蜂', variant: 2, photo: true }
          ],
          targets: [{ label: '花间蜂近照册', x: 50, y: 50 }],
          matches: [0, 0, 0]
        }
      },
      {
        id: 'animals-bee-02',
        baseId: 'bee',
        title: '向日葵上的蜂留位置和动作记号',
        partner: '整理微距观察图册的爸爸',
        item: '向日葵蜂位置动作页',
        mission: '“把向日葵、叶片记号放位置栏，把飞行、侧身停留记号放动作栏！”',
        sceneLabel: '侧身停在向日葵花盘上的蜜蜂',
        sceneDescription: 'A honeybee naturally resting in clear side view on the central disk of a sunflower. The complete bee, its legs, antennae and translucent wings are visible against the textured flower disk. The sunflower fills the foreground, with some outer yellow petals extending beyond the frame. Realistic macro wildlife photograph under gentle daylight, horizontal composition with ample crop-safe space. No people, hives, handling, text or captions.',
        actionLabel: '分好蜂照片观察记号',
        actionResult: '向日葵和叶片记号进入位置栏，飞行和侧身停留记号进入动作栏。',
        application: '给向日葵花盘上的蜜蜂照片放上“蜂”字牌。',
        ending: '爸爸把两栏记号存进图册，没有到花盘上找真实的蜂。',
        cloze: '向日葵花盘上停着一只蜜——。',
        homeTip: '自然看到花间微距图时，听孩子主动谈到的细节，不先指蜂、不要求分类；真实遇蜂不要靠近、拍打或触碰。',
        game: {
          type: 'sort',
          title: '蜂近照的位置动作栏',
          instruction: '把向日葵、叶片示意记号放位置栏，把飞行、侧身停留示意记号放动作栏。',
          success: '四张观察记号按位置和动作收好了。',
          safety: '记号都是屏幕示意卡，不摘花、不捉蜂，不靠近蜂巢或花上的蜂。',
          pieces: [
            { label: '向日葵位置记号', variant: 0, photo: false },
            { label: '叶片位置记号', variant: 2, photo: false },
            { label: '空中飞行动作记号', variant: 1, photo: false },
            { label: '侧身停留动作记号', variant: 0, photo: false }
          ],
          targets: [
            { label: '位置栏', x: 30, y: 50 },
            { label: '动作栏', x: 70, y: 50 }
          ],
          matches: [0, 0, 1, 1]
        }
      },
      {
        id: 'animals-butterfly-01',
        baseId: 'butterfly',
        title: '雏菊上的蝶留在花间相框',
        partner: '收藏花园照片的妈妈',
        item: '雏菊蝶三格花间页',
        mission: '“把雏菊上的蝶照片放中间，合拢翅膀和飞行的两张旧照片放两侧！”',
        sceneLabel: '合拢翅膀停在雏菊上的蝴蝶',
        sceneDescription: 'A butterfly naturally perched on the yellow center of a white daisy with its wings held closed upright. The entire insect, antennae, legs and visible outer wing pattern are sharply shown, and the complete daisy flower remains inside the frame. Authentic macro garden wildlife photograph in soft daylight, horizontal framing with generous crop-safe margins. No people, nets, touching, collection containers, text or captions.',
        actionLabel: '拼好花间蝶相框',
        actionResult: '雏菊上的蝴蝶照片在中格，合拢翅膀和飞行的蝴蝶旧照片在两侧。',
        application: '给雏菊上停着的蝴蝶照片放上“蝶”字牌。',
        ending: '妈妈保存花间相框，蝴蝶的翅膀只在照片里被安静地看。',
        cloze: '雏菊上停着一只蝴——。',
        homeTip: '散步自然看见蝴蝶时，听孩子自发的话，不先说字音、不要求追着看；不捉蝶、不触碰翅膀，不采花来吸引蝴蝶。',
        game: {
          type: 'build',
          title: '花间蝶三格相框',
          instruction: '把雏菊蝴蝶新照片放中间，把合拢翅膀旧照片放左边，把飞行旧照片放右边。',
          success: '三张蝴蝶照片组成了花间相框。',
          safety: '只拼屏幕照片，不捉蝶、不碰翅膀，也不追逐或采花吸引蝴蝶。',
          pieces: [
            { label: '合拢翅膀停在雏菊上的蝴蝶', variant: 0, photo: true },
            { label: '合拢翅膀的蝴蝶', variant: 1, photo: true },
            { label: '飞行中的蝴蝶', variant: 2, photo: true }
          ],
          targets: [
            { label: '中间雏菊新照格', x: 50, y: 55 },
            { label: '左边合翅旧照格', x: 22, y: 40 },
            { label: '右边飞行旧照格', x: 78, y: 40 }
          ],
          matches: [0, 1, 2]
        }
      }
    ]
  };
});
