(function (root, factory) {
  const catalog = factory();
  if (typeof module === 'object' && module.exports) module.exports = catalog;
  if (root) (root.HanziSceneCatalogs ||= []).push(catalog);
})(typeof window !== 'undefined' ? window : null, function () {
  return {
    category: '花园种植',
    stories: [
      {
        id: 'garden-stone-01', baseId: 'stone', title: '圆石围出花坛边',
        partner: '园艺阿姨', item: '圆石花坛设计页', mission: '“请在屏幕上给花坛围一圈石头边！”',
        sceneLabel: '围在圆形花坛边的石头',
        sceneDescription: 'Photorealistic landscape photograph of smooth rounded gray stones forming the visible border of a small circular flower bed. Low flowering plants grow inside the ring and lawn lies outside. Show the whole stone border from a slightly elevated angle, with natural daylight, real mineral texture and generous crop-safe margins. No people, lettering or watermarks.',
        actionLabel: '拼好花坛围边', actionResult: '三段石头围边示意块都落进了花坛边的位置。',
        application: '给圆形花坛围边的照片放上“石”字牌。', ending: '阿姨把设计页夹进花坛册，真正搬石头的事留给大人。',
        cloze: '围住花坛的硬硬材料是——。', homeTip: '经过有石头围边的花坛时，听孩子自发的描述，不指边框、不读字、不追问；不搬石头，沿开放步道走。',
        game: {
          type: 'build', title: '围边设计台', instruction: '把三段围边示意块拖到对应的上边、左边和右边位置，顺序不限。',
          success: '花坛的三段示意围边就位了。', safety: '只拼屏幕示意图，真实石头由成人搬放，不踩花坛。',
          pieces: [{ label: '上边弧形石边', variant: 0, photo: false }, { label: '左边弧形石边', variant: 0, photo: false }, { label: '右边弧形石边', variant: 0, photo: false }],
          targets: [{ label: '花坛上边', x: 50, y: 22 }, { label: '花坛左边', x: 25, y: 64 }, { label: '花坛右边', x: 75, y: 64 }], matches: [0, 1, 2]
        }
      },
      {
        id: 'garden-stone-02', baseId: 'stone', title: '石园凳的两份布置单',
        partner: '花园管理员', item: '园凳与小路布置单', mission: '“请把石凳和路边的布置卡分开收好！”',
        sceneLabel: '花木旁的整块石头园凳',
        sceneDescription: 'Photorealistic landscape photograph of a low solid granite garden bench beside flowering shrubs. A single rectangular stone seat rests securely on two broad stone supports, with a gravel path in the background. Frame the complete bench centrally, showing natural speckled granite and believable construction in soft daylight. No people, text or watermarks.',
        actionLabel: '分好园凳布置卡', actionResult: '园凳的两张示意卡与路边的两张示意卡分进了不同格。',
        application: '给整块石头园凳的照片放上“石”字牌。', ending: '管理员收起两份布置单，石凳旁仍留着安静的赏花位置。',
        cloze: '这张园凳用坚硬的——做成。', homeTip: '日常在公园休息时，留意孩子是否主动谈到凳子的材料，不提示字音、不让孩子敲凳验证；成人陪伴，不攀凳。',
        game: {
          type: 'sort', title: '园凳和路边各一格', instruction: '看示意卡名称，把园凳部件放进园凳格，把路边材料放进路边格。',
          success: '两份布置单的示意卡分开了。', safety: '屏幕分类不需要搬石凳或拿工具，实际布置由成人完成。',
          pieces: [{ label: '园凳座面示意卡', variant: 0, photo: false }, { label: '园凳支脚示意卡', variant: 0, photo: false }, { label: '路边铺石示意卡', variant: 0, photo: false }, { label: '路边围石示意卡', variant: 0, photo: false }],
          targets: [{ label: '园凳布置格', x: 28, y: 57 }, { label: '路边布置格', x: 72, y: 57 }], matches: [0, 0, 1, 1]
        }
      },
      {
        id: 'garden-stone-03', baseId: 'stone', title: '盆景石送进材料册',
        partner: '盆景老师', item: '三处石头材料页', mission: '“请把盆景和园里的石头照片收进材料册！”',
        sceneLabel: '浅盆景里露出的石头',
        sceneDescription: 'Photorealistic landscape close-up of a textured limestone rock rising from soil in a shallow ceramic bonsai tray, with a small living tree beside it. The rock is the dominant subject, wholly inside the frame with ample margins. Show authentic stone pores, dark soil and ceramic surface in diffuse garden light. No people, labels, text or watermarks.',
        actionLabel: '收好石头照片', actionResult: '盆景、花园小路和池塘的石头照片都进了材料册。',
        application: '给浅盆景里石头的照片放上“石”字牌。', ending: '老师翻开材料册，盆景的石头继续安稳地待在浅盆里。',
        cloze: '盆景中露出的一块硬硬的——。', homeTip: '自然看盆景照片时，接纳孩子自己的观察，不先指石头或问是什么字；不要求触摸、拆盆或取出小石块。',
        game: {
          type: 'collect', title: '石头材料册', instruction: '把三张石头照片拖进材料册，先收哪张都可以。',
          success: '材料册收齐了三张石头照片。', safety: '只移动照片，不取盆景石、不靠近池塘、不玩小石块。',
          pieces: [{ label: '浅盆景里露出的石头', variant: 0, photo: true }, { label: '花园里铺路的石头', variant: 1, photo: true }, { label: '池塘里的石头', variant: 2, photo: true }],
          targets: [{ label: '石头材料册', x: 50, y: 62 }], matches: [0, 0, 0]
        }
      },
      {
        id: 'garden-field-01', baseId: 'field', title: '顺着田边看萝卜地',
        partner: '农园讲解员', item: '萝卜田参观图', mission: '“请在屏幕地图上沿田边走到观察点！”',
        sceneLabel: '成行种着萝卜的田',
        sceneDescription: 'Photorealistic landscape photograph of a small cultivated radish field with parallel rows of green radish leaves and visible brown soil between rows. A level visitor path runs beside the field, separated by a low wooden boundary rail. Use a slightly elevated wide view that clearly shows cultivated land, realistic foliage and daylight. No people, signs, lettering or watermarks.',
        actionLabel: '走完田边地图', actionResult: '屏幕标记依次到了入口、田边步道和萝卜田观察点。',
        application: '给萝卜种植地的照片放上“田”字牌。', ending: '讲解员把参观图留在册里，萝卜仍在田里慢慢长。',
        cloze: '成行种着萝卜的这块地是——。', homeTip: '自然看农园照片时，听孩子怎样描述种植地，不提示“田”、不要求带路；真实参观由成人陪伴，不进入种植行。',
        game: {
          type: 'route', title: '萝卜田边参观线', instruction: '按入口、田边步道、萝卜田观察点的顺序点击三个地图站点。',
          success: '屏幕参观线到达了萝卜田观察点。', safety: '这是屏幕路线；实地只在开放步道由成人陪伴，不翻栏、不拔萝卜。',
          steps: [{ label: '农园入口', result: '地图标记到了入口。' }, { label: '田边步道', result: '地图标记沿田边步道前进。' }, { label: '萝卜田观察点', result: '地图标记停在田外的观察点。' }],
          targets: [{ label: '农园入口', x: 18, y: 76 }, { label: '田边步道', x: 48, y: 52 }, { label: '萝卜田观察点', x: 80, y: 25 }]
        }
      },
      {
        id: 'garden-field-02', baseId: 'field', title: '玉米田加入庄稼相册',
        partner: '农园摄影师', item: '三种庄稼田相册页', mission: '“请收好玉米、蔬菜和小麦种植地的照片！”',
        sceneLabel: '成排长着玉米的田',
        sceneDescription: 'Photorealistic landscape photograph of a cultivated corn field with several orderly rows of tall corn plants, visible tassels and broad leaves. Brown soil paths between rows remain visible in the foreground, establishing the field as planted farmland. Show natural morning light, realistic plant scale and crop-safe framing without people, machinery, signs, lettering or watermarks.',
        actionLabel: '收集庄稼田照片', actionResult: '玉米田、蔬菜田和小麦田的照片都收进了相册。',
        application: '给玉米种植地的照片放上“田”字牌。', ending: '摄影师把三张照片并排排好，不同庄稼都有自己的种植地。',
        cloze: '玉米成排长在这块——里。', homeTip: '出行自然见到成片庄稼时，记录孩子自己的发现，不先报作物名称或让孩子找字；不停在道路危险位置观察。',
        game: {
          type: 'collect', title: '庄稼田相册', instruction: '把三张种植地照片拖进相册，顺序不限。',
          success: '三种庄稼田的照片都入册了。', safety: '只整理照片，不进入玉米行、不触碰农机或农药。',
          pieces: [{ label: '成排长着玉米的田', variant: 0, photo: true }, { label: '种蔬菜的田', variant: 1, photo: true }, { label: '种小麦的田', variant: 2, photo: true }],
          targets: [{ label: '庄稼田相册', x: 50, y: 58 }], matches: [0, 0, 0]
        }
      },
      {
        id: 'garden-field-03', baseId: 'field', title: '两块菜田各留一页',
        partner: '菜园记录员', item: '蔬菜田与小麦田对照页', mission: '“请把蔬菜种植地和小麦种植地的照片分开！”',
        sceneLabel: '成片种着卷心菜的田',
        sceneDescription: 'Photorealistic landscape photograph of neat rows of mature cabbages growing in a small cultivated field. Rounded pale-green cabbage heads and surrounding leaves are clearly visible above dark soil, with a narrow field boundary at the back. Frame a complete foreground section in soft daylight with realistic leaf veins and generous margins. No people, text, signs or watermarks.',
        actionLabel: '分好种植地照片', actionResult: '卷心菜田与蔬菜田照片进了蔬菜页，小麦田照片进了小麦页。',
        application: '给卷心菜种植地的照片放上“田”字牌。', ending: '记录员翻开两页，菜田和麦田的照片各有位置。',
        cloze: '用来种卷心菜的土地是一块——。', homeTip: '自然翻看乡村相册时，让孩子决定看哪页，不先安排比较、不问共同的字；真实菜田不随意踩入或采摘。',
        game: {
          type: 'sort', title: '蔬菜页和小麦页', instruction: '把卷心菜田和蔬菜田照片放进蔬菜页，把小麦田照片放进小麦页。',
          success: '三张照片按种植内容分到两页了。', safety: '只分照片，不摘菜、不靠近田间工具。',
          pieces: [{ label: '成片种着卷心菜的田', variant: 0, photo: true }, { label: '种蔬菜的田', variant: 1, photo: true }, { label: '种小麦的田', variant: 2, photo: true }],
          targets: [{ label: '蔬菜种植地页', x: 28, y: 56 }, { label: '小麦种植地页', x: 72, y: 56 }], matches: [0, 0, 1]
        }
      },
      {
        id: 'garden-earth-01', baseId: 'earth', title: '香草盆先留一层土',
        partner: '种植老师', item: '香草盆准备步骤页', mission: '“请在屏幕上排好装土的小步骤！”',
        sceneLabel: '香草苗旁花盆里露出的土',
        sceneDescription: 'Photorealistic landscape close-up of a terracotta pot containing a small living basil plant and a broad visible surface of loose brown potting soil around its stem. Set the pot on a plain outdoor potting bench, with the entire rim and soil surface visible. Show realistic soil crumbs and soft natural light. No hands, people, tools, lettering or watermarks.',
        actionLabel: '排好装土步骤', actionResult: '空盆、装土和预留栽苗位置的示意卡按顺序排好了。',
        application: '给香草花盆里泥土的照片放上“土”字牌。', ending: '老师收好准备页，真实装盆和栽苗由大人照料。',
        cloze: '香草的根可以长在盆里的——中。', homeTip: '家人日常照料香草盆时，留意孩子主动看哪里，不先指泥土、不测试；不让孩子接触肥料，参与后洗手。',
        game: {
          type: 'sequence', title: '香草盆准备顺序', instruction: '依次把空盆示意卡、装土示意卡、预留苗位示意卡放到三个步骤格。',
          success: '香草盆的准备步骤排成一列了。', safety: '步骤只在屏幕上模拟；实际装土由成人处理，不扬土、不碰肥料。',
          pieces: [{ label: '放好空盆', variant: 0, photo: false }, { label: '给盆装土', variant: 0, photo: false }, { label: '预留栽苗位置', variant: 0, photo: false }],
          targets: [{ label: '第一步：空盆', x: 20, y: 58 }, { label: '第二步：装土', x: 50, y: 58 }, { label: '第三步：留苗位', x: 80, y: 58 }], matches: [0, 1, 2]
        }
      },
      {
        id: 'garden-earth-02', baseId: 'earth', title: '长种植箱分成三格',
        partner: '社区园艺师', item: '种植箱土格设计页', mission: '“请在屏幕种植箱里拼好三格土床！”',
        sceneLabel: '长方形种植箱里松软的土',
        sceneDescription: 'Photorealistic landscape photograph of a sturdy rectangular raised garden planter filled with loose dark-brown soil, viewed slightly from above. The planter stands on level paving in a quiet community garden, with a few distant plants outside it. Emphasize the broad uncovered soil surface and authentic crumb texture. Entire box within crop-safe margins; no people, labels, text or watermarks.',
        actionLabel: '拼好种植箱土格', actionResult: '左、中、右三块土床示意块都填进了对应的箱格。',
        application: '给长种植箱里泥土的照片放上“土”字牌。', ending: '园艺师把设计页交给照料的大人，箱里留着后续种植的位置。',
        cloze: '长种植箱里装着松软的——。', homeTip: '自然经过社区种植箱时，听孩子自己的说法，不引导触摸或读字；不踩箱沿、不挖土，照料后洗手。',
        game: {
          type: 'build', title: '三格土床拼图', instruction: '把左格、中格、右格土床示意块拖进对应的箱格，顺序不限。',
          success: '种植箱的三格土床示意图拼好了。', safety: '这是屏幕箱格，不抬种植箱、不挖真实泥土、不接触肥料。',
          pieces: [{ label: '左格土床块', variant: 0, photo: false }, { label: '中格土床块', variant: 0, photo: false }, { label: '右格土床块', variant: 0, photo: false }],
          targets: [{ label: '箱内左格', x: 22, y: 58 }, { label: '箱内中格', x: 50, y: 58 }, { label: '箱内右格', x: 78, y: 58 }], matches: [0, 1, 2]
        }
      },
      {
        id: 'garden-earth-03', baseId: 'earth', title: '换盆前看看土团',
        partner: '盆栽照料员', item: '土团观察页', mission: '“请揭开照片，看看土在不同地方的样子！”',
        sceneLabel: '换盆托盘上带着细根的土团',
        sceneDescription: 'Photorealistic landscape close-up of an intact brown root ball resting securely in a shallow plastic potting tray beside an empty plant pot. A small leafy plant remains upright in the root ball, whose broad soil surface and a few fine roots are visible. Natural shaded garden light, authentic crumbly soil, whole root ball within generous margins. No people, tools, text or watermarks.',
        actionLabel: '揭开泥土照片', actionResult: '土团、花园泥土和育苗盘泥土的三张照片逐渐露出了。',
        application: '给换盆托盘上土团的照片放上“土”字牌。', ending: '照料员把观察页收好，真实换盆由大人继续完成。',
        cloze: '托盘上包着细根的一团材料是——。', homeTip: '成人日常换盆时让孩子在安全位置自由观看，不先指土团或求答案；不为认字额外拔植物，结束后洗手。',
        game: {
          type: 'reveal', title: '土在三个地方', instruction: '点击遮片，逐步揭开三张泥土照片，可以自由观察整张图。',
          success: '三张泥土照片都完整露出了。', safety: '只揭照片，不拆土团、不扬土，真实换盆由成人操作。',
          spots: ['换盆托盘上带着细根的土团的图卡揭开了一半。', '换盆托盘上带着细根的土团的图卡完整露出了，可以自由观察。', '花园里的土的图卡揭开了一半。', '花园里的土的图卡完整露出了，可以自由观察。', '育苗盘里的土的图卡揭开了一半。', '育苗盘里的土的图卡完整露出了，可以自由观察。']
        }
      },
      {
        id: 'garden-flower-01', baseId: 'flower', title: '葵花把相册点亮了',
        partner: '花园摄影师', item: '葵花赏花页', mission: '“请把三处花的照片收进赏花页！”',
        sceneLabel: '花坛里开放的向日葵花',
        sceneDescription: 'Photorealistic landscape close-up of an open sunflower head on a living stem in a garden flower bed. The complete yellow petal ring and textured brown central disk face the camera, with leaves and soil softly visible behind. Natural daylight, true plant anatomy and generous crop-safe margins around the flower. No people, lettering, signs or watermarks.',
        actionLabel: '收好赏花照片', actionResult: '向日葵花、瓶里的花和园里的花都收进了赏花页。',
        application: '给花坛中向日葵花的照片放上“花”字牌。', ending: '摄影师留下一页花的颜色，园里的花没有被摘走。',
        cloze: '向日葵茎顶开放着一朵——。', homeTip: '经过向日葵花坛时，记录孩子自发关注的地方，不先说花名、不让孩子摘花；沿步道观察，不靠近蜂。',
        game: {
          type: 'collect', title: '葵花赏花页', instruction: '把三张花的照片拖进赏花页，顺序不限。',
          success: '赏花页收齐了三张花的照片。', safety: '只收照片，不摘花、不触碰花上的小动物。',
          pieces: [{ label: '花坛里开放的向日葵花', variant: 0, photo: true }, { label: '花瓶里插着的花', variant: 1, photo: true }, { label: '花园里开放的花', variant: 2, photo: true }],
          targets: [{ label: '赏花页', x: 50, y: 60 }], matches: [0, 0, 0]
        }
      },
      {
        id: 'garden-flower-02', baseId: 'flower', title: '花墙和瓶花分两页',
        partner: '园艺展览员', item: '生长与插花展示页', mission: '“请把长在园里的花和插在瓶里的花分开放！”',
        sceneLabel: '花园矮墙旁开放的蔷薇花',
        sceneDescription: 'Photorealistic landscape photograph of several open pink climbing rose flowers growing on living stems beside a low garden wall. Show intact flowers and leaves in the central foreground, with the wall providing a clear setting. Realistic petal layers, soft outdoor light and crop-safe margins; no people, cut bouquets, labels, text or watermarks.',
        actionLabel: '分好花的展示页', actionResult: '蔷薇花和花园花照片进了生长页，瓶花照片进了插花页。',
        application: '给矮墙旁蔷薇花的照片放上“花”字牌。', ending: '展览员翻开两页，花的照片留在册里，蔷薇仍长在墙边。',
        cloze: '矮墙旁的枝条上开着粉色的——。', homeTip: '散步自然遇到蔷薇时，听孩子自己的描述，不提示字音或指花瓣；不摸带刺枝条、不摘花。',
        game: {
          type: 'sort', title: '长着的花与瓶里的花', instruction: '把蔷薇花和花园花照片放进园里生长页，把花瓶照片放进瓶中插花页。',
          success: '三张花照片按所在位置分成了两页。', safety: '只分照片，不碰花刺或玻璃瓶，不采摘。',
          pieces: [{ label: '花园矮墙旁开放的蔷薇花', variant: 0, photo: true }, { label: '花瓶里插着的花', variant: 1, photo: true }, { label: '花园里开放的花', variant: 2, photo: true }],
          targets: [{ label: '园里生长页', x: 28, y: 56 }, { label: '瓶中插花页', x: 72, y: 56 }], matches: [0, 1, 0]
        }
      },
      {
        id: 'garden-flower-03', baseId: 'flower', title: '郁金香观花页装订好',
        partner: '园艺记录员', item: '郁金香观花页', mission: '“请按顺序把照片、边框和页签装进观花页！”',
        sceneLabel: '花坛里盛开的红色郁金香花',
        sceneDescription: 'Photorealistic landscape close-up of red tulip flowers blooming on upright stems in a cultivated flower bed. Show several complete cup-shaped flowers with green leaves and a small visible patch of soil. The central flower is fully framed with ample margins, realistic petals and soft morning light. No people, signs, lettering or watermarks.',
        actionLabel: '装订观花示意页', actionResult: '照片卡、边框卡和页签卡按顺序放进了装订步骤格。',
        application: '给红色郁金香花的照片放上“花”字牌。', ending: '记录员把观花页夹好，下一次翻册还能看到红色花朵。',
        cloze: '郁金香的茎顶开出了红色的——。', homeTip: '自然看郁金香照片时，让孩子自由停留，不要求复述名字、不先读字；真实赏花不摘、不尝植物。',
        game: {
          type: 'sequence', title: '观花页装订顺序', instruction: '依次放入照片示意卡、边框示意卡、页签示意卡，完成三步装订图。',
          success: '观花页的三步装订示意排好了。', safety: '只排屏幕卡，不使用订书机、剪刀或真实花枝。',
          pieces: [{ label: '放入照片卡', variant: 0, photo: false }, { label: '加上边框卡', variant: 0, photo: false }, { label: '贴好页签卡', variant: 0, photo: false }],
          targets: [{ label: '第一步：照片', x: 20, y: 57 }, { label: '第二步：边框', x: 50, y: 57 }, { label: '第三步：页签', x: 80, y: 57 }], matches: [0, 1, 2]
        }
      },
      {
        id: 'garden-grass-01', baseId: 'grass', title: '小径边的草露出来了',
        partner: '花园观察员', item: '小径草地观察页', mission: '“请揭开三张照片，慢慢看草的样子！”',
        sceneLabel: '花园砖径旁细长叶片的草',
        sceneDescription: 'Photorealistic landscape close-up of a dense patch of narrow-bladed green grass beside a level brick garden path. Individual long slender blades are clearly visible in the foreground, with the path forming one edge of the scene. Natural diffuse daylight, authentic grass texture and generous margins around the patch. No people, tools, lettering or watermarks.',
        actionLabel: '揭开草的观察页', actionResult: '砖径边、河边和盆里的草照片都慢慢露出来了。',
        application: '给砖径旁草的照片放上“草”字牌。', ending: '观察员把三张草照片留在一页，小径旁的草继续自然生长。',
        cloze: '砖径旁长着一片细细叶子的——。', homeTip: '沿花园砖径散步时，留意孩子是否自发谈到路边植物，不指出叶形、不问字；不采草，远离水边。',
        game: {
          type: 'reveal', title: '草地照片慢慢开', instruction: '点击遮片揭开三张草照片，每张都可以完整观察，不必寻找某个小点。',
          success: '三张草照片都完整露出了。', safety: '只揭照片，不到河岸采草、不把植物放入口中。',
          spots: ['花园砖径旁细长叶片的草的图卡揭开了一半。', '花园砖径旁细长叶片的草的图卡完整露出了，可以自由观察。', '河边长着的草的图卡揭开了一半。', '河边长着的草的图卡完整露出了，可以自由观察。', '盆里种着的草的图卡揭开了一半。', '盆里种着的草的图卡完整露出了，可以自由观察。']
        }
      },
      {
        id: 'garden-grass-02', baseId: 'grass', title: '花树之间留条草带',
        partner: '园林设计师', item: '草带布局页', mission: '“请给屏幕花园的三块空地拼上草带！”',
        sceneLabel: '两排花树之间成片的草',
        sceneDescription: 'Photorealistic landscape photograph of a broad strip of low green lawn grass between two rows of small flowering garden trees. Narrow grass blades fill the central foreground, while tree trunks and flowering branches frame the sides. Show a believable maintained garden, natural daylight and ample crop-safe margins. No people, lawn machinery, signage, text or watermarks.',
        actionLabel: '拼好草带布局', actionResult: '前段、中段和后段草带示意块都到了对应的位置。',
        application: '给花树之间草带的照片放上“草”字牌。', ending: '设计师保存了草带布局页，真实养护不需要孩子操作机器。',
        cloze: '两排花树之间长着绿绿的——。', homeTip: '自然经过园林草带时，听孩子主动的说法，不引导踩入或拔草；走开放步道，远离养护机器。',
        game: {
          type: 'build', title: '三段草带布局', instruction: '把前段、中段、后段草带示意块拖到同名空地，顺序不限。',
          success: '花树之间的三段草带示意图拼好了。', safety: '只拼屏幕草带，不操作割草机、不铺真实草皮。',
          pieces: [{ label: '前段草带块', variant: 0, photo: false }, { label: '中段草带块', variant: 0, photo: false }, { label: '后段草带块', variant: 0, photo: false }],
          targets: [{ label: '前段空地', x: 50, y: 78 }, { label: '中段空地', x: 50, y: 52 }, { label: '后段空地', x: 50, y: 26 }], matches: [0, 1, 2]
        }
      },
      {
        id: 'garden-leaf-01', baseId: 'leaf', title: '草莓叶和秋叶分册',
        partner: '植物图册老师', item: '绿叶与秋叶对照页', mission: '“请把绿叶照片和红黄秋叶照片分开放！”',
        sceneLabel: '草莓植株上带锯齿的绿叶',
        sceneDescription: 'Photorealistic landscape macro photograph of a living strawberry plant in a garden planter, focused on its complete green trifoliate leaf. Serrated edges and fine branching veins are clear, with dark soil softly visible behind. The entire leaf is centered with generous crop-safe margins and natural daylight. No fruit required, no people, labels, lettering or watermarks.',
        actionLabel: '分好绿叶秋叶照片', actionResult: '草莓绿叶进了绿叶页，红枫叶和黄银杏叶进了秋叶页。',
        application: '给草莓植株绿叶的照片放上“叶”字牌。', ending: '老师翻开两页，各种叶子的颜色和形状都有位置。',
        cloze: '草莓植株上长着带锯齿的绿——。', homeTip: '日常看草莓盆栽时，记录孩子自发关注的部位，不指叶缘、不提示补字；不摘叶或品尝未经成人确认的植物。',
        game: {
          type: 'sort', title: '绿叶页与秋叶页', instruction: '把草莓绿叶照片放进绿叶页，把红枫叶和黄银杏叶照片放进秋叶页。',
          success: '三张叶照片按画面颜色分到了两页。', safety: '只分照片，不为分类摘叶，不把叶子放入口中。',
          pieces: [{ label: '草莓植株上带锯齿的绿叶', variant: 0, photo: true }, { label: '红色的枫叶', variant: 1, photo: true }, { label: '黄色的银杏叶', variant: 2, photo: true }],
          targets: [{ label: '绿色叶照片页', x: 28, y: 56 }, { label: '红黄秋叶照片页', x: 72, y: 56 }], matches: [0, 1, 1]
        }
      },
      {
        id: 'garden-leaf-02', baseId: 'leaf', title: '圆荷叶加入叶子册',
        partner: '水生植物讲解员', item: '荷叶形状相册页', mission: '“请把荷叶和两种树叶照片收进叶子册！”',
        sceneLabel: '荷花池水面上方的圆荷叶',
        sceneDescription: 'Photorealistic landscape close-up of a complete round green lotus leaf held above the water on its upright stalk in a garden lotus pond. Radiating leaf veins and the naturally cupped surface are clearly visible; pond water is a soft background. Keep the whole leaf inside generous crop-safe margins in natural daylight. No people, lettering or watermarks.',
        actionLabel: '收好叶子照片', actionResult: '圆荷叶、红枫叶和黄银杏叶照片都收进了叶子册。',
        application: '给圆荷叶的照片放上“叶”字牌。', ending: '讲解员把叶子册合好，荷叶仍留在池中。',
        cloze: '荷花池里展开了圆圆的荷——。', homeTip: '自然翻到荷花池照片时，听孩子自己的描述，不先圈荷叶或要求认字；真实观察在护栏外由成人陪伴，不探身。',
        game: {
          type: 'collect', title: '叶子形状册', instruction: '把三张叶子照片拖进形状册，先收哪张都可以。',
          success: '形状册里有了三种叶子的照片。', safety: '只收照片，不采荷叶、不到池边伸手。',
          pieces: [{ label: '荷花池水面上方的圆荷叶', variant: 0, photo: true }, { label: '红色的枫叶', variant: 1, photo: true }, { label: '黄色的银杏叶', variant: 2, photo: true }],
          targets: [{ label: '叶子形状册', x: 50, y: 60 }], matches: [0, 0, 0]
        }
      },
      {
        id: 'garden-leaf-03', baseId: 'leaf', title: '薄荷叶的纹路露出来',
        partner: '香草园老师', item: '薄荷叶观察页', mission: '“请揭开三张叶的照片，自由看看纹路和颜色！”',
        sceneLabel: '薄荷枝上纹路清楚的绿叶',
        sceneDescription: 'Photorealistic landscape macro photograph of a living mint branch growing in a garden pot. Two complete green mint leaves with serrated edges and wrinkled vein patterns occupy the center, while the pot is softly blurred behind. Authentic plant texture, soft natural light and generous margins around each leaf. No people, hands, text or watermarks.',
        actionLabel: '揭开叶的纹路照片', actionResult: '薄荷绿叶、红枫叶和黄银杏叶照片逐步露出了。',
        application: '给薄荷枝上绿叶的照片放上“叶”字牌。', ending: '老师收好观察页，不需要摘下叶子才能留下纹路的样子。',
        cloze: '薄荷枝上展开了纹路清楚的绿——。', homeTip: '家里自然照料薄荷时，留意孩子主动的观察，不提示纹路、不要求闻或尝；不以任何感官动作测试认字。',
        game: {
          type: 'reveal', title: '叶的照片观察窗', instruction: '点击遮片揭开整张照片，慢慢看叶子的纹路，不必寻找指定小区域。',
          success: '三张叶的照片都完整露出了。', safety: '只揭照片，不摘叶、不揉叶、不品尝植物。',
          spots: ['薄荷枝上纹路清楚的绿叶的图卡揭开了一半。', '薄荷枝上纹路清楚的绿叶的图卡完整露出了，可以自由观察。', '红色的枫叶的图卡揭开了一半。', '红色的枫叶的图卡完整露出了，可以自由观察。', '黄色的银杏叶的图卡揭开了一半。', '黄色的银杏叶的图卡完整露出了，可以自由观察。']
        }
      },
      {
        id: 'garden-bamboo-01', baseId: 'bamboo', title: '竹丛观察点在转弯处',
        partner: '植物园讲解员', item: '竹丛参观路线页', mission: '“请在屏幕地图上找到竹丛观察点！”',
        sceneLabel: '植物园步道旁带节的竹丛',
        sceneDescription: 'Photorealistic landscape photograph of living green bamboo growing in a compact clump beside a level botanical garden path. Several complete lower stalk sections show clear nodes, with leafy branches above. A low boundary rail separates plants from the path. Frame the bamboo centrally in natural daylight, with authentic texture and no people, signs, lettering or watermarks.',
        actionLabel: '找到竹丛观察点', actionResult: '屏幕标记经过展区入口和步道转弯，到了竹丛观察点。',
        application: '给步道旁竹丛的照片放上“竹”字牌。', ending: '讲解员留下路线页，竹丛旁的参观位置清楚了。',
        cloze: '步道旁一节一节的植物是——。', homeTip: '自然逛植物园时，记录孩子自发的描述，不先强调竹节、不考带路；成人陪伴走开放步道，不折竹枝。',
        game: {
          type: 'route', title: '转弯处的竹丛', instruction: '按展区入口、步道转弯、竹丛观察点的顺序点击地图站点。',
          success: '地图标记停在竹丛观察点了。', safety: '只走屏幕路线；实地成人陪伴，不钻竹丛、不翻栏。',
          steps: [{ label: '展区入口', result: '地图标记进入展区入口。' }, { label: '步道转弯', result: '地图标记到了步道转弯。' }, { label: '竹丛观察点', result: '地图标记停在竹丛外的观察点。' }],
          targets: [{ label: '展区入口', x: 18, y: 78 }, { label: '步道转弯', x: 48, y: 48 }, { label: '竹丛观察点', x: 80, y: 25 }]
        }
      },
      {
        id: 'garden-bamboo-02', baseId: 'bamboo', title: '菜畦竹架设计台',
        partner: '菜园管理员', item: '竹架部件设计页', mission: '“请在屏幕上拼好菜畦的竹架示意图！”',
        sceneLabel: '菜畦上用带节竹竿搭成的架子',
        sceneDescription: 'Photorealistic landscape photograph of a small sturdy garden trellis made from tan bamboo poles above a vegetable bed. Two upright poles and a horizontal crosspiece have visible bamboo nodes and securely tied joints. Small climbing plants grow below without hiding the poles. Show the complete trellis centrally with ample margins, realistic materials and daylight. No people, tools, text or watermarks.',
        actionLabel: '拼好竹架部件', actionResult: '左右立竿和横竿示意块都到了相应的架子位置。',
        application: '给菜畦竹架的照片放上“竹”字牌。', ending: '管理员收好设计页，真实搭架和系牢的工作交给成人。',
        cloze: '菜畦架子用带节的——竿搭成。', homeTip: '自然看到菜园竹架时，听孩子主动的说法，不提示材料、不要求搭架；不攀架、不摸切口或绑绳。',
        game: {
          type: 'build', title: '竹架设计拼图', instruction: '把左立竿、右立竿和横竿示意块拖到对应位置，顺序不限。',
          success: '竹架的三块部件示意图拼好了。', safety: '只拼屏幕部件，不用真竹竿或刀具，不系真实绳结、不攀架。',
          pieces: [{ label: '左立竹竿示意块', variant: 0, photo: false }, { label: '右立竹竿示意块', variant: 0, photo: false }, { label: '横竹竿示意块', variant: 0, photo: false }],
          targets: [{ label: '左立竿位置', x: 28, y: 65 }, { label: '右立竿位置', x: 72, y: 65 }, { label: '上方横竿位置', x: 50, y: 25 }], matches: [0, 1, 2]
        }
      },
      {
        id: 'garden-tree-01', baseId: 'tree', title: '苹果树旁留个观察位',
        partner: '果园讲解员', item: '苹果树参观图', mission: '“请把屏幕标记带到苹果树观察位！”',
        sceneLabel: '果园里长着苹果的树',
        sceneDescription: 'Photorealistic landscape photograph of a modest apple tree in a cultivated orchard, showing its complete woody trunk and leafy crown with several attached apples. A level visitor path lies beside the planting area. Frame the whole tree with generous crop-safe margins in natural daylight, with realistic bark and foliage. No people, ladders, tools, signs, text or watermarks.',
        actionLabel: '走到苹果树观察位', actionResult: '屏幕标记从果园入口经过参观步道，到了树旁观察位。',
        application: '给果园苹果树的照片放上“树”字牌。', ending: '讲解员把参观图收进册里，苹果继续留在树上。',
        cloze: '苹果长在有树干和树冠的——上。', homeTip: '自然看果园照片时，留意孩子自己的发现，不先指树干、不要求说目标字；真实参观不攀树、不自行摘果。',
        game: {
          type: 'route', title: '苹果树参观线', instruction: '依次点击果园入口、参观步道、苹果树观察位三个地图站点。',
          success: '屏幕标记到了苹果树观察位。', safety: '屏幕路线不代表独自带路；实地成人陪伴，不爬树、不用梯子。',
          steps: [{ label: '果园入口', result: '地图标记到了果园入口。' }, { label: '参观步道', result: '地图标记沿参观步道移动。' }, { label: '苹果树观察位', result: '地图标记停在树旁的开放观察位。' }],
          targets: [{ label: '果园入口', x: 18, y: 76 }, { label: '参观步道', x: 50, y: 52 }, { label: '苹果树观察位', x: 80, y: 24 }]
        }
      },
      {
        id: 'garden-tree-02', baseId: 'tree', title: '小院柠檬树展开了',
        partner: '庭院园艺师', item: '庭院树木观察页', mission: '“请揭开照片，看看不同树的样子！”',
        sceneLabel: '庭院大盆里长着的柠檬树',
        sceneDescription: 'Photorealistic landscape photograph of a small living lemon tree in a large terracotta planter on level courtyard paving. Its complete woody trunk, branching leafy crown and a few attached yellow lemons are visible. Frame the entire tree and planter centrally with generous margins, authentic bark texture and soft natural daylight. No people, text, labels or watermarks.',
        actionLabel: '揭开树木照片', actionResult: '盆里的柠檬树、针叶树和冬天落叶后的树照片都露出了。',
        application: '给庭院盆中柠檬树的照片放上“树”字牌。', ending: '园艺师把观察页留在册里，不同树的模样都能慢慢看。',
        cloze: '庭院的大盆里长着一棵柠檬——。', homeTip: '日常在庭院停留时，听孩子主动谈到的植物，不提示字音、不安排摘果；不推大盆，不碰枝刺。',
        game: {
          type: 'reveal', title: '庭院树木观察窗', instruction: '点击遮片，逐步揭开三张树的照片，可以自由观察完整画面。',
          success: '三张树的照片都完整露出了。', safety: '只揭照片，不搬大盆、不攀树、不折枝。',
          spots: ['庭院大盆里长着的柠檬树的图卡揭开了一半。', '庭院大盆里长着的柠檬树的图卡完整露出了，可以自由观察。', '长着针叶的树的图卡揭开了一半。', '长着针叶的树的图卡完整露出了，可以自由观察。', '冬天落叶后的树的图卡揭开了一半。', '冬天落叶后的树的图卡完整露出了，可以自由观察。']
        }
      },
      {
        id: 'garden-tree-03', baseId: 'tree', title: '新栽树的照料记录页',
        partner: '社区园艺阿姨', item: '新栽树照料记录页', mission: '“请按顺序排好大人照料小树的记录卡！”',
        sceneLabel: '花园里有支撑的新栽小树',
        sceneDescription: 'Photorealistic landscape photograph of a newly planted young deciduous tree in a garden soil bed. A clear woody trunk and small leafy crown stand beside two low wooden support stakes with loose protective ties. The entire tree and stable supports are visible in a wide frame with generous margins. Natural daylight, realistic bark and soil; no people, tools, lettering or watermarks.',
        actionLabel: '排好照料记录', actionResult: '查看树位、记录成人固定支撑和完成照料备注的卡按顺序排好了。',
        application: '给有支撑的新栽小树照片放上“树”字牌。', ending: '阿姨把记录页存好，小树的真实照料继续由大人负责。',
        cloze: '花园里新栽的一棵小——有支撑。', homeTip: '自然经过新栽树时，记录孩子自发的话，不解释支撑来求答案；不拉绑带、不晃树，沿步道走。',
        game: {
          type: 'sequence', title: '照料记录三步骤', instruction: '依次放入查看树位、成人固定支撑记录、完成照料备注三张示意卡。',
          success: '小树照料记录的三个步骤排好了。', safety: '只排记录卡，不进行真实固定、绑带或挖树操作，照料由成人完成。',
          pieces: [{ label: '查看树位示意卡', variant: 0, photo: false }, { label: '成人固定支撑记录卡', variant: 0, photo: false }, { label: '完成照料备注卡', variant: 0, photo: false }],
          targets: [{ label: '第一步：查看', x: 20, y: 57 }, { label: '第二步：记录支撑', x: 50, y: 57 }, { label: '第三步：留备注', x: 80, y: 57 }], matches: [0, 1, 2]
        }
      },
      {
        id: 'garden-root-01', baseId: 'root', title: '萝卜根在观察盒里',
        partner: '植物观察老师', item: '萝卜根观察页', mission: '“请揭开照片，看看植物根所在的地方！”',
        sceneLabel: '透明种植观察盒中萝卜的根',
        sceneDescription: 'Photorealistic landscape close-up of a clear-sided educational growing box containing a living young radish plant. A red thickened radish root with a pale taproot and fine side roots is visible against brown soil through the transparent front wall, with green leaves above. Show the complete observation box centrally, realistic roots and gentle daylight. No hands, people, printed markings, lettering or watermarks.',
        actionLabel: '揭开根的观察照片', actionResult: '观察盒里的萝卜根、露出的树根和水中的根照片逐渐露出了。',
        application: '给透明观察盒里萝卜根的照片放上“根”字牌。', ending: '老师把照片放进观察页，不用挖开植物也能留下根的样子。',
        cloze: '观察盒的土里长着萝卜的——。', homeTip: '自然遇到根部观察图时，听孩子自己的发现，不先指细根或问答案；不拔萝卜、不挖树根。',
        game: {
          type: 'reveal', title: '根的三个观察窗', instruction: '点击遮片揭开三张根的照片，整张图都可以自由观察。',
          success: '三张根的照片都完整露出了。', safety: '只揭照片，透明观察盒由成人照料，不拆盒、不挖根。',
          spots: ['透明种植观察盒中萝卜的根的图卡揭开了一半。', '透明种植观察盒中萝卜的根的图卡完整露出了，可以自由观察。', '树干旁露出的根的图卡揭开了一半。', '树干旁露出的根的图卡完整露出了，可以自由观察。', '水培植物水中的根的图卡揭开了一半。', '水培植物水中的根的图卡完整露出了，可以自由观察。']
        }
      },
      {
        id: 'garden-root-02', baseId: 'root', title: '吊兰根的水培一页',
        partner: '水培园艺师', item: '水中根与树旁根对照页', mission: '“请把水中的根照片和树旁露出的根照片分开！”',
        sceneLabel: '透明水培瓶中吊兰的根',
        sceneDescription: 'Photorealistic landscape close-up of a small spider plant supported at the neck of a clear glass hydroponic jar. Numerous slender pale roots hang visibly in clean water below, while arching green leaves remain above the jar. Frame the entire jar and visible root system with ample margins in soft daylight. No people, hands, text, markings or watermarks.',
        actionLabel: '分好根的所在位置', actionResult: '吊兰水中根和水培根照片进了水中页，树旁根照片进了露出页。',
        application: '给水培瓶中吊兰根的照片放上“根”字牌。', ending: '园艺师收好对照页，瓶里的根没有被拉出来。',
        cloze: '吊兰在水培瓶里伸出了细细的——。', homeTip: '日常经过已有水培植物时，留意孩子主动看哪里，不指瓶底、不测试；不让孩子搬玻璃瓶或拉根。',
        game: {
          type: 'sort', title: '水中页与露出页', instruction: '把两张水中根照片放进水中页，把树干旁露出的根照片放进树旁露出页。',
          success: '三张根照片按所在位置分到了两页。', safety: '只分照片，水培容器与换水由成人处理，不喝瓶中水、不挖根。',
          pieces: [{ label: '透明水培瓶中吊兰的根', variant: 0, photo: true }, { label: '树干旁露出的根', variant: 1, photo: true }, { label: '水培植物水中的根', variant: 2, photo: true }],
          targets: [{ label: '水中根照片页', x: 28, y: 56 }, { label: '树旁露出根照片页', x: 72, y: 56 }], matches: [0, 1, 0]
        }
      },
      {
        id: 'garden-root-03', baseId: 'root', title: '小苗根把相册连起来',
        partner: '育苗老师', item: '幼苗根部相册页', mission: '“请把小苗和其他植物的根照片收好！”',
        sceneLabel: '透明育苗杯侧壁可见的细根',
        sceneDescription: 'Photorealistic landscape close-up of a living vegetable seedling in a clear plastic nursery cup filled with brown soil. Fine pale roots are visibly growing along the inner transparent side wall, with small green leaves above. Show the whole cup and root-bearing side centrally in natural diffuse light, realistic soil and ample margins. No people, labels, lettering or watermarks.',
        actionLabel: '收好根部照片', actionResult: '育苗杯细根、树旁根和水培根照片都进了根部相册。',
        application: '给透明育苗杯里细根的照片放上“根”字牌。', ending: '老师把相册夹好，幼苗留在杯里继续生长。',
        cloze: '透明育苗杯侧面可以看到细细的——。', homeTip: '自然看育苗记录照片时，接纳孩子自己的描述，不先指出白色细线、不要求配字；不拔苗或拆杯。',
        game: {
          type: 'collect', title: '幼苗根部相册', instruction: '把三张植物根的照片拖进根部相册，顺序不限。',
          success: '根部相册收齐了三张照片。', safety: '只移动照片，不拔幼苗、不取水培根、不挖树根。',
          pieces: [{ label: '透明育苗杯侧壁可见的细根', variant: 0, photo: true }, { label: '树干旁露出的根', variant: 1, photo: true }, { label: '水培植物水中的根', variant: 2, photo: true }],
          targets: [{ label: '根部相册', x: 50, y: 60 }], matches: [0, 0, 0]
        }
      },
      {
        id: 'garden-sprout-01', baseId: 'sprout', title: '玫瑰新芽留在记录里',
        partner: '花园记录员', item: '玫瑰新芽观察记录页', mission: '“请按顺序排好看芽、留图和收页的记录卡！”',
        sceneLabel: '玫瑰枝条上刚展开的嫩芽',
        sceneDescription: 'Photorealistic landscape macro photograph of a living rose stem in a garden, focused on a newly opening vegetative bud with tiny reddish-green folded leaves. Show the complete young shoot at a stem node and a soft garden background. Authentic plant anatomy, gentle daylight and generous crop-safe margins around the bud. No hands, people, text or watermarks.',
        actionLabel: '排好新芽记录卡', actionResult: '观察芽、留图片和收记录页的三张示意卡按顺序排好了。',
        application: '给玫瑰枝条嫩芽的照片放上“芽”字牌。', ending: '记录员夹好一页记录，玫瑰新芽不需要被碰一碰。',
        cloze: '玫瑰枝条上刚冒出了嫩——。', homeTip: '日常看玫瑰盆栽时，留意孩子自己发现什么，不指新芽、不要求每天回答；不摸枝刺、不掐芽。',
        game: {
          type: 'sequence', title: '新芽观察记录顺序', instruction: '依次放入观察芽示意卡、留图片示意卡、收记录页示意卡。',
          success: '新芽记录的三个步骤排好了。', safety: '只排屏幕示意卡，不要求实际拍照，不掐芽、不碰玫瑰刺。',
          pieces: [{ label: '观察芽示意卡', variant: 0, photo: false }, { label: '留图片示意卡', variant: 0, photo: false }, { label: '收记录页示意卡', variant: 0, photo: false }],
          targets: [{ label: '第一步：观察', x: 20, y: 57 }, { label: '第二步：留图', x: 50, y: 57 }, { label: '第三步：收页', x: 80, y: 57 }], matches: [0, 1, 2]
        }
      },
      {
        id: 'garden-sprout-02', baseId: 'sprout', title: '葵花小芽顶开土面',
        partner: '育苗观察老师', item: '葵花小芽观察页', mission: '“请揭开照片，看看小芽出现的地方！”',
        sceneLabel: '刚顶出土面的向日葵芽',
        sceneDescription: 'Photorealistic landscape macro photograph of a sunflower seed just germinating in a nursery pot. A tiny pale-green emerging shoot with folded cotyledons rises barely above dark soil beside its split striped seed coat. The subject is clearly a very young emerging sprout, centrally framed with generous margins, real soil texture and natural light. No people, text or watermarks.',
        actionLabel: '揭开小芽照片', actionResult: '向日葵芽、枝条芽和刚钻出土面的芽照片都露出了。',
        application: '给刚顶出土面向日葵芽的照片放上“芽”字牌。', ending: '老师留下观察页，土面的幼小新芽继续慢慢展开。',
        cloze: '向日葵种子刚顶出土面的是——。', homeTip: '家人自然照料育苗盆时，记录孩子主动的发现，不先宣布发芽、不要求找字；不掀土、不拉芽，种子由成人保管。',
        game: {
          type: 'reveal', title: '小芽出现在哪里', instruction: '点击遮片，逐步揭开三张芽的照片，整张画面都可以自由观察。',
          success: '三张芽的照片都完整露出了。', safety: '只揭照片，不翻土找芽、不玩散种子。',
          spots: ['刚顶出土面的向日葵芽的图卡揭开了一半。', '刚顶出土面的向日葵芽的图卡完整露出了，可以自由观察。', '枝条上鼓起的芽的图卡揭开了一半。', '枝条上鼓起的芽的图卡完整露出了，可以自由观察。', '刚钻出土面的芽的图卡揭开了一半。', '刚钻出土面的芽的图卡完整露出了，可以自由观察。']
        }
      },
      {
        id: 'garden-sprout-03', baseId: 'sprout', title: '葡萄新芽观察站',
        partner: '藤本园讲解员', item: '葡萄新芽参观页', mission: '“请在屏幕地图上走到葡萄新芽观察站！”',
        sceneLabel: '葡萄藤节上刚展开的芽',
        sceneDescription: 'Photorealistic landscape macro photograph of a vegetative bud opening at a node on a woody grapevine in a cultivated garden. Tiny folded pale-green leaves and delicate fuzz are visible on the new shoot, with the old vine and a soft trellis background. Center the complete bud with ample margins and natural daylight. No people, grapes, tools, lettering or watermarks.',
        actionLabel: '到达新芽观察站', actionResult: '屏幕标记经过藤本区入口和架旁步道，到了葡萄新芽观察站。',
        application: '给葡萄藤节上新芽的照片放上“芽”字牌。', ending: '讲解员收好参观页，葡萄的新芽留在藤上继续展开。',
        cloze: '葡萄藤的节上长出了新——。', homeTip: '自然看葡萄藤照片时，听孩子自己的描述，不指嫩绿部分、不问答案；真实参观不攀架、不掐芽。',
        game: {
          type: 'route', title: '葡萄芽观察路线', instruction: '依次点击藤本区入口、架旁步道、葡萄新芽观察站三个地图站点。',
          success: '地图标记到了葡萄新芽观察站。', safety: '只走屏幕地图；实地成人陪伴，不钻藤架、不触碰嫩芽或农药。',
          steps: [{ label: '藤本区入口', result: '地图标记到了藤本区入口。' }, { label: '架旁步道', result: '地图标记沿架旁步道前进。' }, { label: '葡萄新芽观察站', result: '地图标记停在葡萄藤外的观察站。' }],
          targets: [{ label: '藤本区入口', x: 18, y: 77 }, { label: '架旁步道', x: 50, y: 51 }, { label: '葡萄新芽观察站', x: 80, y: 24 }]
        }
      },
      {
        id: 'garden-seed-01', baseId: 'seed', title: '豌豆种单独留一格',
        partner: '育种资料老师', item: '种子照片分格页', mission: '“请把豌豆种照片和另外两种种子照片分格收好！”',
        sceneLabel: '育苗托盘里干燥的豌豆种子',
        sceneDescription: 'Photorealistic landscape close-up of several dry wrinkled pea seeds resting in a shallow unmarked nursery tray on a garden potting bench. The seeds are roundish, pale-green to cream and clearly dry rather than fresh peas in a pod. Show the complete small group centrally, authentic seed texture and soft daylight. No people, hands, text, labels or watermarks.',
        actionLabel: '分好种子照片页', actionResult: '豌豆种照片进了豌豆格，向日葵种与南瓜种照片进了其他种子格。',
        application: '给育苗托盘中豌豆种子的照片放上“种”字牌，读zhǒng。', ending: '老师把照片页收好，真实种子仍由成人保管。',
        cloze: '托盘里这些豌豆是用来育苗的——。', homeTip: '自然翻看种子图册时，记录孩子主动的说法，不先念zhǒng、不要求分类；不拿散种子做认字活动。',
        game: {
          type: 'sort', title: '豌豆种照片单独一格', instruction: '把豌豆种照片放进豌豆格，把向日葵种和南瓜种照片放进其他种子格。',
          success: '三张种子照片分到了两个资料格。', safety: '只分照片，真实种子由成人保管，不玩散粒、不塞入口鼻。',
          pieces: [{ label: '育苗托盘里干燥的豌豆种子', variant: 0, photo: true }, { label: '托盘里的向日葵种子', variant: 1, photo: true }, { label: '托盘里的南瓜种子', variant: 2, photo: true }],
          targets: [{ label: '豌豆种照片格', x: 28, y: 56 }, { label: '其他种子照片格', x: 72, y: 56 }], matches: [0, 1, 1]
        }
      },
      {
        id: 'garden-seed-02', baseId: 'seed', title: '葵花盘留下种子照',
        partner: '花园资料员', item: '葵花种子资料页', mission: '“请收好花盘和托盘里的种子照片！”',
        sceneLabel: '成熟向日葵花盘里密排的种子',
        sceneDescription: 'Photorealistic landscape close-up of a mature dried sunflower head resting securely in a shallow tray on a garden bench. Its whole central disk is densely packed with visible striped seeds, with a few dry petal remnants at the edge. Center the complete head with generous margins, authentic seed structure and soft daylight. No people, hands, lettering or watermarks.',
        actionLabel: '收好种子资料照', actionResult: '成熟花盘种子、托盘向日葵种和托盘南瓜种照片都进了资料页。',
        application: '给成熟向日葵花盘种子的照片放上“种”字牌，读zhǒng。', ending: '资料员保存了照片，处理花盘和种子的事留给成人。',
        cloze: '成熟葵花盘里密密排着的是——。', homeTip: '自然看到成熟葵花盘照片时，接纳孩子自己的发现，不先指出种子、不测试；不要求剥粒或品尝种子。',
        game: {
          type: 'collect', title: '花盘种子资料页', instruction: '把三张种子照片拖进资料页，顺序不限。',
          success: '资料页收齐了三张种子照片。', safety: '只收照片，不剥花盘、不玩散种子，真实种子由成人保管。',
          pieces: [{ label: '成熟向日葵花盘里密排的种子', variant: 0, photo: true }, { label: '托盘里的向日葵种子', variant: 1, photo: true }, { label: '托盘里的南瓜种子', variant: 2, photo: true }],
          targets: [{ label: '种子资料页', x: 50, y: 60 }], matches: [0, 0, 0]
        }
      },
      {
        id: 'garden-seed-03', baseId: 'seed', title: '菜种资料袋封好了',
        partner: '菜园资料老师', item: '菜种保管步骤页', mission: '“请在屏幕上排好种子资料袋的保管步骤！”',
        sceneLabel: '透明封口资料袋里的萝卜种子',
        sceneDescription: 'Photorealistic landscape close-up of a small sealed clear storage pouch containing dry reddish-brown radish seeds, lying flat in a shallow nursery tray. The pouch is unprinted and securely closed, and the real seed shapes are visible through the plastic. Frame the complete pouch centrally with ample margins and soft garden daylight. No people, hands, labels, text or watermarks.',
        actionLabel: '排好资料袋保管步骤', actionResult: '入袋、封口和交给成人保管的示意卡按顺序排好了。',
        application: '给封口资料袋中萝卜种子的照片放上“种”字牌，读zhǒng。', ending: '老师把步骤页收好，真实菜种袋交由大人保存。',
        cloze: '袋里留着能育出萝卜新植物的——。', homeTip: '自然遇到种子包装图片时，听孩子主动的描述，不提示读音、不要求认包装；种子袋不交给幼儿拆玩。',
        game: {
          type: 'sequence', title: '资料袋保管顺序', instruction: '依次放入入袋示意卡、封口示意卡、成人保管示意卡，排成三步。',
          success: '资料袋的三步保管示意排好了。', safety: '只排屏幕示意卡，不实际分装种子或操作封袋器，种子由成人保管。',
          pieces: [{ label: '种子入袋示意卡', variant: 0, photo: false }, { label: '封好袋口示意卡', variant: 0, photo: false }, { label: '交给成人保管卡', variant: 0, photo: false }],
          targets: [{ label: '第一步：入袋', x: 20, y: 57 }, { label: '第二步：封口', x: 50, y: 57 }, { label: '第三步：成人保管', x: 80, y: 57 }], matches: [0, 1, 2]
        }
      },
      {
        id: 'garden-seedling-01', baseId: 'seedling', title: '番茄苗住进三格架',
        partner: '温室园艺师', item: '菜苗架布局页', mission: '“请给屏幕上的菜苗架拼好三格位置！”',
        sceneLabel: '育苗小盆里长着的番茄苗',
        sceneDescription: 'Photorealistic landscape close-up of several young tomato seedlings growing in small nursery pots set in a tray. Their thin stems and a few true leaves show that they are small immature plants, not mature fruiting vines. Show complete seedlings and pot rims centrally with dark soil, soft greenhouse daylight and ample margins. No people, fruit, labels, lettering or watermarks.',
        actionLabel: '拼好菜苗架位置', actionResult: '左、中、右三格苗盆示意块都放进了对应的架格。',
        application: '给育苗盆中番茄苗的照片放上“苗”字牌。', ending: '园艺师保存了布局页，真实搬盆与架子固定由成人处理。',
        cloze: '小盆里刚开始长的番茄植物还是——。', homeTip: '日常经过育苗处时，留意孩子主动的观察，不先比较大小、不问目标字；不搬架子，不接触肥料或农药。',
        game: {
          type: 'build', title: '三格苗架布局', instruction: '把左格、中格、右格苗盆示意块放入同名架格，顺序不限。',
          success: '三格菜苗架布局示意图拼好了。', safety: '只拼屏幕架格，不搭真实架子、不搬苗盆、不登高。',
          pieces: [{ label: '左格苗盆示意块', variant: 0, photo: false }, { label: '中格苗盆示意块', variant: 0, photo: false }, { label: '右格苗盆示意块', variant: 0, photo: false }],
          targets: [{ label: '苗架左格', x: 22, y: 58 }, { label: '苗架中格', x: 50, y: 58 }, { label: '苗架右格', x: 78, y: 58 }], matches: [0, 1, 2]
        }
      },
      {
        id: 'garden-seedling-02', baseId: 'seedling', title: '生菜苗搬位留记录',
        partner: '菜园照料阿姨', item: '生菜苗搬位记录页', mission: '“请按顺序排好大人搬苗的记录卡！”',
        sceneLabel: '育苗盘里浅绿的生菜苗',
        sceneDescription: 'Photorealistic landscape close-up of young lettuce seedlings growing in separate cells of a nursery tray. Each small plant has a short cluster of soft pale-green leaves above visible brown soil, clearly immature rather than full-grown lettuce heads. Frame a complete central group with realistic cell construction, diffuse greenhouse daylight and ample margins. No people, hands, labels, text or watermarks.',
        actionLabel: '排好搬苗记录步骤', actionResult: '查看位置、成人搬盘记录和留照料备注的卡按顺序排好了。',
        application: '给育苗盘中生菜苗的照片放上“苗”字牌。', ending: '阿姨夹好搬位记录页，真实幼苗留在大人的照料中。',
        cloze: '育苗盘里幼小的生菜植物是菜——。', homeTip: '家人日常照料菜苗时，听孩子自己的话，不要求复述搬位步骤、不先读字；搬盘由成人处理，孩子不碰肥料。',
        game: {
          type: 'sequence', title: '搬位记录三步', instruction: '依次放入查看位置卡、成人搬盘记录卡、留照料备注卡。',
          success: '生菜苗搬位记录的三步排好了。', safety: '只排记录卡，不要求孩子实际搬盘、浇水或判断施肥，照料由成人处理。',
          pieces: [{ label: '查看新位置示意卡', variant: 0, photo: false }, { label: '成人搬盘记录卡', variant: 0, photo: false }, { label: '留照料备注示意卡', variant: 0, photo: false }],
          targets: [{ label: '第一步：看位置', x: 20, y: 57 }, { label: '第二步：记录搬盘', x: 50, y: 57 }, { label: '第三步：留备注', x: 80, y: 57 }], matches: [0, 1, 2]
        }
      },
      {
        id: 'garden-seedling-03', baseId: 'seedling', title: '小菊苗加入幼苗册',
        partner: '花圃老师', item: '花苗与稻苗相册页', mission: '“请把三处幼苗的照片收进幼苗册！”',
        sceneLabel: '小花盆里尚未开花的菊花苗',
        sceneDescription: 'Photorealistic landscape close-up of a small young chrysanthemum plant growing in a nursery flower pot. A short stem and several fresh lobed green leaves rise above visible potting soil, without flowers or developed flower buds. Show the entire immature plant and pot centrally, authentic leaf texture, gentle daylight and generous crop-safe margins. No people, labels, lettering or watermarks.',
        actionLabel: '收好幼苗照片', actionResult: '菊花苗、盆里花苗和田里稻苗照片都收进了幼苗册。',
        application: '给小花盆中菊花苗的照片放上“苗”字牌。', ending: '老师把幼苗册留在花圃角，小菊苗继续生长。',
        cloze: '小盆里尚未长大的菊花植物是花——。', homeTip: '自然看花圃生长照片时，记录孩子自己的发现，不先提示“还小”、不要求认字；不拔苗，不为测试搬盆。',
        game: {
          type: 'collect', title: '幼苗相册页', instruction: '把三张幼苗照片拖进幼苗册，先收哪张都可以。',
          success: '幼苗册收齐了三张照片。', safety: '只收照片，不拔花苗、不进稻田、不接触肥料。',
          pieces: [{ label: '小花盆里尚未开花的菊花苗', variant: 0, photo: true }, { label: '花盆里的花苗', variant: 1, photo: true }, { label: '田里成行的稻苗', variant: 2, photo: true }],
          targets: [{ label: '幼苗册', x: 50, y: 60 }], matches: [0, 0, 0]
        }
      },
      {
        id: 'garden-garden-01', baseId: 'garden', title: '香草园的参观入口',
        partner: '香草园讲解员', item: '香草园参观图', mission: '“请在屏幕地图上从入口走到香草观察区！”',
        sceneLabel: '分畦种着香草的园子',
        sceneDescription: 'Photorealistic landscape wide photograph of a small cultivated herb garden with several orderly beds of rosemary, mint and basil separated by level visitor paths. Low boundaries define the planting beds and a simple open entrance is visible. Clearly show the garden as a whole place with authentic foliage, natural daylight and ample margins. No people, signs, lettering or watermarks.',
        actionLabel: '走到香草观察区', actionResult: '屏幕标记依次经过园子入口和分畦步道，到了香草观察区。',
        application: '给分畦香草园的照片放上“园”字牌。', ending: '讲解员留下参观图，香草园的步道和观察位置清楚了。',
        cloze: '分畦种着香草的这处地方是香草——。', homeTip: '自然参观香草园时，听孩子主动描述地方，不先读招牌、不测试共同字；成人陪伴，不摘、不尝香草。',
        game: {
          type: 'route', title: '香草园参观路线', instruction: '按园子入口、分畦步道、香草观察区的顺序点击三个地图站点。',
          success: '屏幕标记到了香草观察区。', safety: '只走屏幕路线；实地成人陪伴走开放步道，不采摘、不品尝植物。',
          steps: [{ label: '园子入口', result: '地图标记到了香草园入口。' }, { label: '分畦步道', result: '地图标记沿种植畦之间的步道移动。' }, { label: '香草观察区', result: '地图标记停在开放的香草观察区。' }],
          targets: [{ label: '园子入口', x: 18, y: 78 }, { label: '分畦步道', x: 50, y: 51 }, { label: '香草观察区', x: 80, y: 24 }]
        }
      },
      {
        id: 'garden-garden-02', baseId: 'garden', title: '社区小菜园布局台',
        partner: '社区园艺设计师', item: '共享菜园布局页', mission: '“请在屏幕布局台拼好菜畦、步道和观察区！”',
        sceneLabel: '社区院落里分畦种菜的园子',
        sceneDescription: 'Photorealistic landscape wide photograph of a small community vegetable garden in a quiet courtyard. Rectangular beds contain leafy vegetables, with level paths between them and an open viewing space along one side. Show the entire coherent planted garden, realistic soil and foliage, modest courtyard walls and natural daylight. No people, signage, lettering or watermarks.',
        actionLabel: '拼好菜园布局块', actionResult: '菜畦区、步道区和观察区示意块都放进了对应的布局位置。',
        application: '给社区菜园整体照片放上“园”字牌。', ending: '设计师保存了布局页，真实菜园的建造与照料由成人完成。',
        cloze: '社区里专门种菜的这一处是菜——。', homeTip: '日常经过社区菜园时，接纳孩子自己的说法，不先命名整个地方、不要求配字；不翻栏、不碰园艺工具。',
        game: {
          type: 'build', title: '共享菜园布局图', instruction: '把菜畦区、步道区、观察区三个示意块拖到同名位置，顺序不限。',
          success: '共享菜园的三个布局区拼好了。', safety: '只拼屏幕区域，不施工、不挖土、不用真工具，真实园艺由成人处理。',
          pieces: [{ label: '菜畦区示意块', variant: 0, photo: false }, { label: '步道区示意块', variant: 0, photo: false }, { label: '观察区示意块', variant: 0, photo: false }],
          targets: [{ label: '菜畦区位置', x: 28, y: 30 }, { label: '步道区位置', x: 50, y: 56 }, { label: '观察区位置', x: 76, y: 77 }], matches: [0, 1, 2]
        }
      },
      {
        id: 'garden-garden-03', baseId: 'garden', title: '球根花园的参观终点',
        partner: '植物园导览员', item: '球根花园参观页', mission: '“请在屏幕地图上走到球根花园的展示区！”',
        sceneLabel: '种着郁金香和水仙的花园',
        sceneDescription: 'Photorealistic landscape wide photograph of a cultivated spring bulb garden with separate beds of blooming tulips and daffodils. A level curving visitor path connects the beds, and low planted boundaries define the garden as a coherent place. Show complete foreground beds in realistic daylight with authentic flowers and generous crop-safe margins. No people, signs, lettering or watermarks.',
        actionLabel: '到达花园展示区', actionResult: '屏幕标记从花园入口经过弯曲步道，到了球根花卉展示区。',
        application: '给郁金香与水仙花园的整体照片放上“园”字牌。', ending: '导览员收好参观页，花留在园里，展示区就是这条路线的终点。',
        cloze: '种着郁金香和水仙的地方是一座花——。', homeTip: '自然看春季游园照片时，听孩子自己的描述，不先指花床、不问地点字；真实游园成人陪伴，不摘花、不挖球根。',
        game: {
          type: 'route', title: '花园展示区参观线', instruction: '依次点击花园入口、弯曲步道、球根花卉展示区三个地图站点。',
          success: '地图标记到达了球根花卉展示区，参观线结束了。', safety: '路线只在屏幕上；实地成人陪伴走开放步道，不进入花床、不挖球根、不尝植物。',
          steps: [{ label: '花园入口', result: '地图标记到了花园入口。' }, { label: '弯曲步道', result: '地图标记沿开放的弯曲步道移动。' }, { label: '球根花卉展示区', result: '地图标记停在花床外的展示区，路线到达终点。' }],
          targets: [{ label: '花园入口', x: 18, y: 77 }, { label: '弯曲步道', x: 48, y: 51 }, { label: '球根花卉展示区', x: 80, y: 24 }]
        }
      }
    ]
  };
});
