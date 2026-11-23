(function (root, factory) {
    'use strict';
    const catalog = factory();
    if (typeof module === 'object' && module.exports) module.exports = catalog;
    else (root.HanziSceneCatalogs = root.HanziSceneCatalogs || []).push(catalog);
}(typeof window !== 'undefined' ? window : globalThis, function () {
    'use strict';
    return {
        category: '出行交通',
        stories: [
            {
                id: 'travel-vehicle-01', baseId: 'vehicle', title: '出租车照片进候车册',
                partner: '同行的爸爸', item: '出租车候车纪念页', mission: '“帮我把几种车的照片收进候车册！”',
                sceneLabel: '候车区里停着的出租车',
                sceneDescription: 'Photorealistic landscape photograph of a stationary silver taxi with a plain roof light in a quiet designated pickup bay. Show the entire car in three-quarter view with a curb and shelter behind it, realistic tires and daylight, generous crop-safe margins, no people, readable plates, writing or logos.',
                actionLabel: '收集候车册里的车照片', actionResult: '三张车的照片都收进了屏幕候车册。',
                application: '给候车区出租车的照片放“车”字牌。', ending: '爸爸收好候车册，我们在故事里等大人安排出发。',
                cloze: '候车区里停着一辆出租——',
                homeTip: '日常乘车等候时，听孩子是否自然提到车的样子，不提示字音、不追问；站在成人身旁的安全候车位置，不走近车辆。',
                game: {
                    type: 'collect', title: '候车册收照片', instruction: '点选或拖动三张车的照片，放进候车册；先放哪张都可以。',
                    success: '出租车、公交车和自行车的照片都收好了。', safety: '只整理屏幕照片，不去找车、追车或碰车。',
                    pieces: [{label: '候车区里停着的出租车', variant: 0, photo: true}, {label: '一辆公交车', variant: 1, photo: true}, {label: '一辆自行车', variant: 2, photo: true}],
                    targets: [{label: '候车册', x: 50, y: 58}], matches: [0, 0, 0]
                }
            },
            {
                id: 'travel-vehicle-02', baseId: 'vehicle', title: '公交车旁的候车图拼好啦',
                partner: '公交站的讲解阿姨', item: '公交候车示意页', mission: '“帮我拼好候车位置的示意图！”',
                sceneLabel: '港湾式车站里停着的公交车',
                sceneDescription: 'Photorealistic landscape photograph of a full-size green city bus standing in a recessed roadside bus bay beside an empty covered shelter. Frame the whole bus from a pedestrian-side viewpoint, doors closed, curb clearly separate from the lane, realistic glass and rubber, no people, lettering, logos or readable registration plates.',
                actionLabel: '拼放候车图上的示意卡', actionResult: '候车区、公交车和道路三张示意卡各有了位置。',
                application: '给停在港湾式车站的公交车照片放“车”字牌。', ending: '阿姨把示意页收进讲解夹，真实乘车仍由成人安排。',
                cloze: '港湾式车站里停着一辆公交——',
                homeTip: '和家人正常等公交时，留意孩子自发的描述，不要求指出或读字；由成人看顾，远离路沿，车辆停稳后按现场规则乘车。',
                game: {
                    type: 'build', title: '拼好候车示意页', instruction: '把候车区、公交车和道路的示意卡放进同名位置；这些是图卡，不是真车操作。',
                    success: '三张示意卡拼成了候车位置图。', safety: '全部拼搭在屏幕上，不独自候车、上车或进入车道。',
                    pieces: [{label: '候车区示意卡', variant: 0, photo: false}, {label: '公交车示意卡', variant: 0, photo: false}, {label: '道路示意卡', variant: 0, photo: false}],
                    targets: [{label: '候车区示意卡位置', x: 25, y: 35}, {label: '公交车示意卡位置', x: 50, y: 55}, {label: '道路示意卡位置', x: 75, y: 75}], matches: [0, 1, 2]
                }
            },
            {
                id: 'travel-vehicle-03', baseId: 'vehicle', title: '车站旁的自行车分进图册',
                partner: '整理出游册的姐姐', item: '车站换乘照片页', mission: '“把自行车和公交车的照片分开放好吗？”',
                sceneLabel: '车站车架旁停放的自行车',
                sceneDescription: 'Photorealistic landscape photograph of a complete blue commuter bicycle parked in a metal cycle rack outside a railway station. Show both wheels, pedals, saddle and handlebar clearly in side view, with a quiet paved forecourt and station canopy softly behind it; no people, writing, brands or motion.',
                actionLabel: '按车的种类分照片', actionResult: '两张自行车照片和一张公交车照片分进了对应格。',
                application: '给车架旁自行车的照片放“车”字牌。', ending: '姐姐合上换乘照片页，车站旁的小车架留在照片里。',
                cloze: '车站旁的架子里停着自行——',
                homeTip: '日常翻看出游照片时，让孩子自由说到不同车辆，不先给分类答案、不测试；真实自行车停放和骑行由成人负责安排。',
                game: {
                    type: 'sort', title: '自行车与公交车分格', instruction: '把两张自行车照片放进自行车格，把公交车照片放进公交车格。',
                    success: '自行车和公交车的照片分好了。', safety: '只给屏幕照片分类，不靠近停放或行驶的车辆。',
                    pieces: [{label: '车站车架旁停放的自行车', variant: 0, photo: true}, {label: '一辆公交车', variant: 1, photo: true}, {label: '一辆自行车', variant: 2, photo: true}],
                    targets: [{label: '自行车照片格', x: 28, y: 55}, {label: '公交车照片格', x: 72, y: 55}], matches: [0, 1, 0]
                }
            },
            {
                id: 'travel-vehicle-04', baseId: 'vehicle', title: '机场接驳车的照片开窗了',
                partner: '同行的妈妈', item: '接驳车观察页', mission: '“一起揭开接驳车和另外两种车的照片吧！”',
                sceneLabel: '机场接驳区停着的小巴车',
                sceneDescription: 'Photorealistic landscape photograph of a stationary white passenger minibus in an airport ground transport pickup bay. Keep the complete vehicle centered in three-quarter side view, closed passenger door and visible wheels, an empty terminal canopy behind, realistic daylight and reflections, no people, airline logos, writing or readable plates.',
                actionLabel: '揭开三种车的照片', actionResult: '小巴车、公交车和自行车的三张照片都揭开了。',
                application: '给机场接驳小巴的照片放“车”字牌。', ending: '妈妈把接驳车观察页放进旅行册，故事里的等候结束了。',
                cloze: '机场接驳区停着一辆小巴——',
                homeTip: '自然看到交通照片时，听孩子自己的发现，不指车门或提示读音；真实机场出行由成人带领，不在车辆旁逗留。',
                game: {
                    type: 'reveal', title: '揭开接驳车观察页', instruction: '自由点开三张照片的六块遮片，看看不同的车；不用寻找某一小块里的零件。',
                    success: '三张车照片全部展开了。', safety: '只揭屏幕照片，不操作真实车门或车辆。',
                    spots: ['机场接驳区停着的小巴车。', '这一张是机场接驳区停着的小巴车。', '一辆公交车。', '这一张是一辆公交车。', '一辆自行车。', '这一张是一辆自行车。']
                }
            },
            {
                id: 'travel-vehicle-05', baseId: 'vehicle', title: '长途客车的出发页按顺序收好',
                partner: '旅行册管理员叔叔', item: '客车出发纪念页', mission: '“先放客车照片，再放出发标记，最后放封面卡！”',
                sceneLabel: '客运站停车位里的长途客车',
                sceneDescription: 'Photorealistic landscape photograph of a large blue intercity coach standing in an empty marked terminal parking bay. Include the whole coach with its tall windows, luggage compartment outlines and wheels, seen from a safe forecourt viewpoint, soft morning light, no passengers, lettering, brands or readable number plates.',
                actionLabel: '依次收好客车纪念页', actionResult: '客车照片、出发示意标记和封面卡按顺序放好了。',
                application: '给长途客车的照片放“车”字牌。', ending: '叔叔收起完成的纪念页，真实旅程不需要照着游戏操作。',
                cloze: '客运站停车位里有一辆长途客——',
                homeTip: '日常出行后翻看照片时，记录孩子主动说到的车辆，不追问字音、不要求复述步骤；乘车安排和行李搬放由成人处理。',
                game: {
                    type: 'sequence', title: '客车纪念页三步收纳', instruction: '依次把客车照片、出发示意标记、封面卡放进纪念页的三个位置。',
                    success: '三步收纳结束，客车纪念页做好了。', safety: '这是整理屏幕图卡，不是上车、驾驶或装行李的步骤。',
                    pieces: [{label: '客运站停车位里的长途客车', variant: 0, photo: true}, {label: '出发示意标记', variant: 0, photo: false}, {label: '纪念页封面卡', variant: 0, photo: false}],
                    targets: [{label: '照片位', x: 25, y: 38}, {label: '出发标记位', x: 50, y: 55}, {label: '封面卡位', x: 75, y: 72}], matches: [0, 1, 2]
                }
            },
            {
                id: 'travel-vehicle-06', baseId: 'vehicle', title: '电车照片送到交通展厅',
                partner: '交通展厅的讲解员', item: '电车参观路线页', mission: '“沿着屏幕路线，把电车照片送到展厅吧！”',
                sceneLabel: '检修库外轨道上停着的电车',
                sceneDescription: 'Photorealistic landscape photograph of a modern red tram stationary on rails outside a closed depot building. Frame the entire tram from the side with its overhead contact equipment visible and wheels largely screened by the bodywork, wide paved surroundings and natural daylight, no workers, readable route displays, writing or logos.',
                actionLabel: '沿示意路线送电车照片', actionResult: '照片标记依次经过入口、走廊，到了交通展厅。',
                application: '给停在轨道上的电车照片放“车”字牌。', ending: '讲解员把电车照片收进展厅的交通相册。',
                cloze: '轨道上安静停着一辆电——',
                homeTip: '自然看电车照片或在安全公共位置乘车时，听孩子自发的描述，不引导找字；不进入轨道或检修区域，成人全程陪伴。',
                game: {
                    type: 'route', title: '电车照片的展厅路线', instruction: '依次点击屏幕地图上的展馆入口、参观走廊、交通展厅，移动的是照片标记。',
                    success: '电车照片标记到达交通展厅。', safety: '路线只在屏幕地图上，不进入真实轨道或检修库，也不驾驶电车。',
                    steps: [{label: '到展馆入口', result: '照片标记到达展馆入口。'}, {label: '到参观走廊', result: '照片标记到达参观走廊。'}, {label: '到交通展厅', result: '照片标记到达交通展厅。'}],
                    targets: [{label: '展馆入口', x: 25, y: 72}, {label: '参观走廊', x: 50, y: 50}, {label: '交通展厅', x: 78, y: 28}]
                }
            },
            {
                id: 'travel-bridge-01', baseId: 'bridge', title: '运河石桥收进游览册',
                partner: '一起看相册的奶奶', item: '运河桥梁纪念页', mission: '“把运河石桥和另外两座桥的照片收好吧！”',
                sceneLabel: '运河两岸之间的石拱桥',
                sceneDescription: 'Photorealistic landscape photograph of a single-arch stone pedestrian bridge spanning a narrow urban canal. Show the complete masonry arch, deck and low stone parapets with both banks in frame, still water reflecting the bridge, natural overcast light and authentic stone texture, no people or writing.',
                actionLabel: '收集三座桥的照片', actionResult: '三张桥的照片都放进了游览册。',
                application: '给运河石拱桥的照片放“桥”字牌。', ending: '奶奶合上游览册，石桥连接两岸的样子留在这一页。',
                cloze: '运河两岸之间连着一座石拱——',
                homeTip: '自然看出游相册时，听孩子如何说到桥和两岸，不先给名称、不测试；真实经过桥时由成人陪伴，不探身或停在危险位置。',
                game: {
                    type: 'collect', title: '桥梁照片收进册', instruction: '把运河石桥、木板桥和带栏杆步行桥的照片放进游览册，不用按顺序。',
                    success: '三座桥的照片收齐了。', safety: '只收集屏幕照片，不到桥边、水边找实物。',
                    pieces: [{label: '运河两岸之间的石拱桥', variant: 0, photo: true}, {label: '木板铺成的桥', variant: 1, photo: true}, {label: '带栏杆的步行桥', variant: 2, photo: true}],
                    targets: [{label: '桥梁游览册', x: 50, y: 55}], matches: [0, 0, 0]
                }
            },
            {
                id: 'travel-bridge-02', baseId: 'bridge', title: '溪沟木桥的示意页拼好了',
                partner: '公园的讲解叔叔', item: '木桥连接示意页', mission: '“用示意卡把两边和中间的桥排好！”',
                sceneLabel: '干溪沟上带护栏的木桥',
                sceneDescription: 'Photorealistic landscape photograph of a short timber footbridge over a dry shallow stream bed in a maintained park. Include the entire plank deck, two wooden handrails and both approach paths, realistic bolted timber construction, leaves and dry stones below, diffuse daylight, no people, tools or text.',
                actionLabel: '拼放两岸与桥的示意卡', actionResult: '左侧、桥段和右侧三张示意卡拼成了连接图。',
                application: '给干溪沟上木桥的照片放“桥”字牌。', ending: '叔叔把连接图放进讲解册，真实木桥不用我们修理。',
                cloze: '干溪沟的两边连着一座木——',
                homeTip: '自然看公园照片时，听孩子自己说到连接和通行，不指图求答案；不进入溪沟、不搬木板，真实修理交给成人。',
                game: {
                    type: 'build', title: '两边用桥连接', instruction: '把左侧步道、桥段和右侧步道的示意卡放到同名位置，拼成连接图。',
                    success: '三张卡拼出了木桥连接两边的示意图。', safety: '只拼屏幕示意卡，不修真桥、不碰工具或进入溪沟。',
                    pieces: [{label: '左侧步道示意卡', variant: 0, photo: false}, {label: '桥段示意卡', variant: 0, photo: false}, {label: '右侧步道示意卡', variant: 0, photo: false}],
                    targets: [{label: '左侧步道示意位', x: 23, y: 55}, {label: '桥段示意位', x: 50, y: 55}, {label: '右侧步道示意位', x: 77, y: 55}], matches: [0, 1, 2]
                }
            },
            {
                id: 'travel-bridge-03', baseId: 'bridge', title: '溪谷桥梁照片各回一格',
                partner: '制作旅行页的哥哥', item: '溪谷桥梁分类页', mission: '“把这三座桥的照片放进各自的名字格！”',
                sceneLabel: '溪谷中横跨水流的石拱桥',
                sceneDescription: 'Photorealistic landscape photograph of a small rough-stone arch bridge crossing a clear stream in a wooded valley. Frame the entire bridge and both landings from a distant bank viewpoint, moss on masonry and calm water beneath, realistic daylight and construction, no people, signage or lettering.',
                actionLabel: '按桥梁照片名称分格', actionResult: '石拱桥、木板桥和带栏杆步行桥照片各放好了一格。',
                application: '给溪谷石拱桥的照片放“桥”字牌。', ending: '哥哥把分类页放进旅行册，不同样子的桥各有位置。',
                cloze: '溪谷里横跨水流的是石拱——',
                homeTip: '日常自由翻看风景照片时，记录孩子自然说到的桥，不先强调材料、不要求分类；户外不为辨认到溪边或桥下。',
                game: {
                    type: 'sort', title: '三座桥各有照片格', instruction: '把溪谷石拱桥、木板桥、带栏杆步行桥的照片放进相应的照片格。',
                    success: '三座桥的照片分别归位了。', safety: '照片分类只在屏幕上，不去摸桥体或走进桥下。',
                    pieces: [{label: '溪谷中横跨水流的石拱桥', variant: 0, photo: true}, {label: '木板铺成的桥', variant: 1, photo: true}, {label: '带栏杆的步行桥', variant: 2, photo: true}],
                    targets: [{label: '溪谷石拱桥照片格', x: 23, y: 48}, {label: '木板桥照片格', x: 50, y: 62}, {label: '带栏杆步行桥照片格', x: 77, y: 48}], matches: [0, 1, 2]
                }
            },
            {
                id: 'travel-bridge-04', baseId: 'bridge', title: '铁路上方的步行桥展开了',
                partner: '交通展厅的阿姨', item: '跨线桥观察页', mission: '“揭开照片，看看连接两边的桥！”',
                sceneLabel: '铁路上方带高护栏的步行桥',
                sceneDescription: 'Photorealistic landscape photograph of a steel pedestrian overbridge spanning two empty railway tracks. Show the whole elevated span, high protective side fencing and both stair approaches from a distant public viewpoint, realistic structural supports and daylight, no trains, people, signs or writing.',
                actionLabel: '揭开跨线桥观察照片', actionResult: '跨线步行桥和另外两座桥的照片全部展开了。',
                application: '给铁路上方步行桥的照片放“桥”字牌。', ending: '阿姨收起观察页，桥和铁路的位置留在照片里。',
                cloze: '铁路上方连接两边的是步行——',
                homeTip: '自然看交通图片时听孩子的发现，不提示字音或让孩子找细节；真实铁路观察仅在开放安全区域，不进入轨道。',
                game: {
                    type: 'reveal', title: '跨线桥照片开窗', instruction: '自由揭开三张照片的六块遮片，展开完整画面；不必在小格里找栏杆。',
                    success: '三张桥梁照片全展开了。', safety: '只揭屏幕照片，不进入铁路或攀桥栏杆。',
                    spots: ['铁路上方带高护栏的步行桥。', '这一张是铁路上方带高护栏的步行桥。', '木板铺成的桥。', '这一张是木板铺成的桥。', '带栏杆的步行桥。', '这一张是带栏杆的步行桥。']
                }
            },
            {
                id: 'travel-bridge-05', baseId: 'bridge', title: '吊桥游览页三步装订',
                partner: '整理照片的外公', item: '吊桥游览纪念页', mission: '“先放桥的照片，再放两岸标记，最后放页签！”',
                sceneLabel: '山谷两岸之间的步行吊桥',
                sceneDescription: 'Photorealistic landscape photograph of a pedestrian suspension bridge spanning a green mountain valley. Keep the complete deck, load-bearing cables, railings and both anchored ends visible in a wide distant view, credible engineering and soft daylight, no people, lettering or dramatic unsafe behavior.',
                actionLabel: '依次装订吊桥纪念页', actionResult: '吊桥照片、两岸示意卡和纪念页签按顺序放好了。',
                application: '给山谷步行吊桥的照片放“桥”字牌。', ending: '外公合上装好的纪念页，我们只在照片里看山谷。',
                cloze: '山谷两岸之间连着一座吊——',
                homeTip: '自然翻看旅行照片时，听孩子自己的描述，不问桥叫什么、不要求重复游戏；不安排登高或过吊桥来验证识字。',
                game: {
                    type: 'sequence', title: '吊桥照片页装订', instruction: '按顺序把吊桥照片、两岸示意卡、纪念页签放进对应位置。',
                    success: '吊桥游览纪念页的三步装订完成了。', safety: '只整理屏幕图卡，不在真实高处活动，也不搭建或检修吊桥。',
                    pieces: [{label: '山谷两岸之间的步行吊桥', variant: 0, photo: true}, {label: '两岸连接示意卡', variant: 0, photo: false}, {label: '吊桥纪念页签', variant: 0, photo: false}],
                    targets: [{label: '吊桥照片位', x: 25, y: 35}, {label: '两岸示意卡位', x: 50, y: 55}, {label: '纪念页签位', x: 75, y: 75}], matches: [0, 1, 2]
                }
            },
            {
                id: 'travel-bridge-06', baseId: 'bridge', title: '湖岸小桥照片送到游览亭',
                partner: '游览亭的管理员', item: '湖岸桥梁路线页', mission: '“把小桥照片沿地图送到游览亭！”',
                sceneLabel: '湖岸步道之间的短步行桥',
                sceneDescription: 'Photorealistic landscape photograph of a short railed pedestrian bridge across a narrow inlet along a lake shore. Show the complete bridge, solid deck and both connected lakeside paths from a distant landscaped bank, calm water, realistic railings and morning light, no people, lettering or signs.',
                actionLabel: '沿地图送湖岸桥照片', actionResult: '照片标记经过游园入口和相册角，到达了游览亭。',
                application: '给湖岸短步行桥的照片放“桥”字牌。', ending: '管理员把照片收在游览亭的风景册里。',
                cloze: '湖岸两段步道之间连着一座小——',
                homeTip: '日常看湖岸照片时，观察孩子主动说到的景物，不先读字或要求带路；真实散步由成人陪伴，不靠近水边。',
                game: {
                    type: 'route', title: '桥照片去游览亭', instruction: '按顺序点击屏幕地图的游园入口、相册角、游览亭，把照片标记送到终点。',
                    success: '湖岸桥的照片标记到达游览亭。', safety: '只走屏幕示意路线，不独自过桥、临水或带路。',
                    steps: [{label: '到游园入口', result: '照片标记到了游园入口。'}, {label: '到相册角', result: '照片标记到了相册角。'}, {label: '到游览亭', result: '照片标记到了游览亭。'}],
                    targets: [{label: '游园入口', x: 25, y: 74}, {label: '相册角', x: 52, y: 50}, {label: '游览亭', x: 80, y: 26}]
                }
            },
            {
                id: 'travel-road-01', baseId: 'road', title: '老街小路照片收进册',
                partner: '看街景相册的爷爷', item: '老街步行纪念页', mission: '“帮我收好这几条路的照片！”',
                sceneLabel: '老街房屋之间的石板小路',
                sceneDescription: 'Photorealistic landscape photograph of an empty stone-paved pedestrian lane between low old-town houses. Frame the walking surface broadly in the foreground as it recedes between walls, clear paving joints and a gentle bend, soft natural daylight, no people, vehicles, shop names, lettering or signs.',
                actionLabel: '收集不同小路的照片', actionResult: '老街小路、有人行横道的道路和公园步道照片收好了。',
                application: '给老街石板小路的照片放“路”字牌。', ending: '爷爷把老街这一页收进册子，步行的地方留在照片中。',
                cloze: '老街房屋之间有一条石板小——',
                homeTip: '在熟悉开放的步道正常散步时，听孩子自己的描述，不先指出字、不让孩子独自带路；成人看顾，行走安全优先。',
                game: {
                    type: 'collect', title: '小路相册收照片', instruction: '把三张路的照片放进相册，顺序可以自己选。',
                    success: '三条路的照片都收进相册了。', safety: '只收屏幕照片，不离开成人去找路或穿过街道。',
                    pieces: [{label: '老街房屋之间的石板小路', variant: 0, photo: true}, {label: '画着人行横道的道路', variant: 1, photo: true}, {label: '公园里的步行小路', variant: 2, photo: true}],
                    targets: [{label: '步行相册', x: 50, y: 58}], matches: [0, 0, 0]
                }
            },
            {
                id: 'travel-road-02', baseId: 'road', title: '车站前的小路图拼起来',
                partner: '车站服务台的阿姨', item: '站前步道示意页', mission: '“把三段示意卡拼成站前的小路！”',
                sceneLabel: '车站广场通向入口的步行路',
                sceneDescription: 'Photorealistic landscape photograph of a broad level pedestrian path leading across an empty railway station forecourt to a glazed entrance. Show the full-width paving in the foreground, planter edges and continuous accessible walking surface, believable architectural materials, no people, vehicles, station names or other text.',
                actionLabel: '拼放站前步道示意卡', actionResult: '广场、中段和入口三张路段示意卡拼好了。',
                application: '给车站广场步行路的照片放“路”字牌。', ending: '阿姨把示意页收在服务台，真实进站由同行成人带领。',
                cloze: '从车站广场通向入口的是步行——',
                homeTip: '日常经过广场时，听孩子自然谈到行走的地方，不安排寻路考查；成人全程带领，不让孩子在人流中独走。',
                game: {
                    type: 'build', title: '拼好站前小路图', instruction: '把广场路段、中间路段和入口路段的示意卡放到同名位置，组成屏幕地图。',
                    success: '站前小路的三段示意卡拼好了。', safety: '只拼屏幕地图，不独自进站、穿行车道或带路。',
                    pieces: [{label: '广场路段示意卡', variant: 0, photo: false}, {label: '中间路段示意卡', variant: 0, photo: false}, {label: '入口路段示意卡', variant: 0, photo: false}],
                    targets: [{label: '广场路段位', x: 23, y: 70}, {label: '中间路段位', x: 50, y: 50}, {label: '入口路段位', x: 77, y: 30}], matches: [0, 1, 2]
                }
            },
            {
                id: 'travel-road-03', baseId: 'road', title: '海岸道路和公园步道分两页',
                partner: '整理照片的妈妈', item: '出行道路分类页', mission: '“把行车道路和公园步道照片分开放！”',
                sceneLabel: '沿海岸延伸的公路',
                sceneDescription: 'Photorealistic landscape photograph of an empty two-lane coastal road curving along a rocky shore. Frame the asphalt surface, ordinary lane markings and roadside guardrail prominently with the sea beyond, viewed from a distant safe overlook, realistic terrain and daylight, no people, vehicles, written signs or text.',
                actionLabel: '把道路照片分到两页', actionResult: '两张行车道路照片和一张公园步道照片分开放好了。',
                application: '给沿海公路的照片放“路”字牌。', ending: '妈妈收起分类页，不同的通行地方都有“路”这个字。',
                cloze: '海岸边延伸着一条公——',
                homeTip: '自然看风景相册时，记录孩子自己对道路的描述，不提示分类、不追问；不带孩子站在公路边观察或拍照。',
                game: {
                    type: 'sort', title: '道路照片分两页', instruction: '把沿海公路和画着人行横道的道路照片放到行车道路页，把公园步道照片放到公园步道页。',
                    success: '行车道路页和公园步道页各收好了照片。', safety: '分类只在屏幕上，不到真实道路寻找或验证。',
                    pieces: [{label: '沿海岸延伸的公路', variant: 0, photo: true}, {label: '画着人行横道的道路', variant: 1, photo: true}, {label: '公园里的步行小路', variant: 2, photo: true}],
                    targets: [{label: '行车道路页', x: 28, y: 55}, {label: '公园步道页', x: 72, y: 55}], matches: [0, 0, 1]
                }
            },
            {
                id: 'travel-road-04', baseId: 'road', title: '果园通行小路慢慢展开',
                partner: '果园参观的讲解员', item: '果园小路观察页', mission: '“把小路照片的遮片揭开吧！”',
                sceneLabel: '果园树行之间的碎石小路',
                sceneDescription: 'Photorealistic landscape photograph of a maintained gravel walking path between rows of mature orchard trees. Show the continuous path broadly in the foreground leading to a simple distant resting shelter, realistic gravel and foliage in soft morning light, no people, harvesting equipment, fruit labels, lettering or signs.',
                actionLabel: '揭开果园小路照片', actionResult: '果园小路和另外两条路的照片都展开了。',
                application: '给果园碎石小路的照片放“路”字牌。', ending: '讲解员把观察页放进参观册，果园小路留在照片里。',
                cloze: '果园树行之间有一条碎石小——',
                homeTip: '自然翻到果园图片时，听孩子说到哪些景物，不先指路、不测试；真实参观走开放步道，成人陪伴，不进入作业区。',
                game: {
                    type: 'reveal', title: '小路照片去遮片', instruction: '自由揭开三张路照片的六块遮片，展开完整照片，不用找某个小格里的石子。',
                    success: '三条路的照片全展开了。', safety: '只揭屏幕照片，不独自走进果园或道路。',
                    spots: ['果园树行之间的碎石小路。', '这一张是果园树行之间的碎石小路。', '画着人行横道的道路。', '这一张是画着人行横道的道路。', '公园里的步行小路。', '这一张是公园里的步行小路。']
                }
            },
            {
                id: 'travel-road-05', baseId: 'road', title: '山间公路的照片页装好啦',
                partner: '整理旅行册的爸爸', item: '山间公路纪念页', mission: '“按顺序放好公路照片、弯道示意卡和页签！”',
                sceneLabel: '山坡间弯曲延伸的公路',
                sceneDescription: 'Photorealistic landscape photograph of an empty paved mountain road making a broad gentle bend between green slopes. Show the asphalt road and protective guardrail clearly from a distant scenic viewpoint, natural rock and vegetation, calm daylight, no vehicles, people, written signs or text.',
                actionLabel: '依次整理山路纪念页', actionResult: '公路照片、弯道示意卡和纪念页签按顺序放好了。',
                application: '给山间弯曲公路的照片放“路”字牌。', ending: '爸爸合上山路纪念页，出行的回忆收好了。',
                cloze: '山坡间弯曲延伸着一条公——',
                homeTip: '自然翻看山景照片时，留意孩子自己的描述，不先提示字音或要求辨认弯道；不安排公路边停留或独自行走。',
                game: {
                    type: 'sequence', title: '山路纪念页三步整理', instruction: '依次把山间公路照片、弯道示意卡、纪念页签放到各自的位置。',
                    success: '山间公路纪念页整理好了。', safety: '这是屏幕照片页整理，不是开车、走山路或判断过路时机的练习。',
                    pieces: [{label: '山坡间弯曲延伸的公路', variant: 0, photo: true}, {label: '弯道示意卡', variant: 0, photo: false}, {label: '山路纪念页签', variant: 0, photo: false}],
                    targets: [{label: '山路照片位', x: 25, y: 38}, {label: '弯道示意卡位', x: 50, y: 55}, {label: '纪念页签位', x: 75, y: 72}], matches: [0, 1, 2]
                }
            },
            {
                id: 'travel-road-06', baseId: 'road', title: '站前步道照片送去服务台',
                partner: '车站志愿者阿姨', item: '有顶步道路线页', mission: '“沿屏幕地图把步道照片送到服务台！”',
                sceneLabel: '车站旁通向等候厅的有顶步道',
                sceneDescription: 'Photorealistic landscape photograph of an empty covered pedestrian walkway alongside a railway station, leading toward an enclosed waiting hall. Show a continuous level paved path, canopy columns and distant hall doorway, realistic metal and glass, natural diffused light, no people, directional writing, logos or signs.',
                actionLabel: '沿地图送步道照片', actionResult: '照片标记经过广场口和展示廊，到达了服务台。',
                application: '给通向等候厅的有顶步道照片放“路”字牌。', ending: '阿姨把步道照片收在服务台的出行册里。',
                cloze: '通向等候厅的是有顶步行——',
                homeTip: '正常进站时听孩子自然说到的环境，不让孩子负责带路或找字；真实路线由成人安排，遵守现场通行规则。',
                game: {
                    type: 'route', title: '步道照片到服务台', instruction: '依次点击屏幕地图上的广场口、展示廊、服务台，移动照片标记到终点。',
                    success: '步道照片标记到了服务台。', safety: '只走屏幕示意地图，不让孩子独自进站、带路或过马路。',
                    steps: [{label: '到广场口', result: '照片标记到了广场口。'}, {label: '到展示廊', result: '照片标记到了展示廊。'}, {label: '到服务台', result: '照片标记到了服务台。'}],
                    targets: [{label: '广场口', x: 25, y: 72}, {label: '展示廊', x: 52, y: 48}, {label: '服务台', x: 80, y: 26}]
                }
            },
            {
                id: 'travel-ship-01', baseId: 'ship', title: '渡口的船照片收进游览册',
                partner: '渡口展板的讲解叔叔', item: '渡口船舶纪念页', mission: '“把渡口的船和另外两艘船的照片收好！”',
                sceneLabel: '渡口泊位里停着的渡船',
                sceneDescription: 'Photorealistic landscape photograph of a small passenger ferry moored in a sheltered river landing berth. Show the complete hull, enclosed cabin and side railings from a distant shore viewpoint, landing pontoon beside it and calm water below, realistic construction and daylight, no people, writing or logos.',
                actionLabel: '收集渡口船舶照片', actionResult: '三张船舶照片都收进了游览册。',
                application: '给渡口渡船的照片放“船”字牌。', ending: '叔叔收好游览册，船留在照片里的泊位上。',
                cloze: '渡口泊位里停着一艘渡——',
                homeTip: '自然翻看船舶照片时，听孩子自己的称呼，不纠正自然说法、不测试；不去水边找船，真实乘船由成人按安全规则安排。',
                game: {
                    type: 'collect', title: '渡口相册收照片', instruction: '把渡口渡船、货船和水上渡船的照片放进游览册，先放哪张都可以。',
                    success: '三张船舶照片都收好了。', safety: '只收屏幕照片，不登船、临水或操作缆绳。',
                    pieces: [{label: '渡口泊位里停着的渡船', variant: 0, photo: true}, {label: '水上的货船', variant: 1, photo: true}, {label: '水上的渡船', variant: 2, photo: true}],
                    targets: [{label: '渡口船舶游览册', x: 50, y: 58}], matches: [0, 0, 0]
                }
            },
            {
                id: 'travel-ship-02', baseId: 'ship', title: '货船参观示意页拼好了',
                partner: '港口展厅的讲解员', item: '货船港口示意页', mission: '“把货船、水面和岸边三张示意卡放好！”',
                sceneLabel: '港口码头旁停泊的集装箱货船',
                sceneDescription: 'Photorealistic landscape photograph of a container cargo ship moored beside a commercial quay, viewed from a distant public overlook. Frame the whole vessel, stacked plain containers, bridge superstructure and waterline with generous margins, realistic scale and overcast daylight, no people, active loading, readable container codes, writing or logos.',
                actionLabel: '拼放港口场景示意卡', actionResult: '货船、水面和岸边示意卡拼成了港口场景页。',
                application: '给码头旁集装箱货船的照片放“船”字牌。', ending: '讲解员把示意页收进展厅相册，真实港口作业交给工作人员。',
                cloze: '码头旁停泊着一艘集装箱货——',
                homeTip: '自然看港口图片时，听孩子自发的描述，不要求数箱子或读字；不进入港口作业区，也不靠近岸边设备。',
                game: {
                    type: 'build', title: '港口示意页拼图', instruction: '把货船、水面、岸边的示意卡放到同名位置，拼成讲解页，不是真实港口操作。',
                    success: '货船港口示意页拼好了。', safety: '只拼屏幕卡片，不搬货、登船或操作港口设备。',
                    pieces: [{label: '货船示意卡', variant: 0, photo: false}, {label: '水面示意卡', variant: 0, photo: false}, {label: '岸边示意卡', variant: 0, photo: false}],
                    targets: [{label: '货船示意位', x: 32, y: 40}, {label: '水面示意位', x: 50, y: 70}, {label: '岸边示意位', x: 76, y: 40}], matches: [0, 1, 2]
                }
            },
            {
                id: 'travel-ship-03', baseId: 'ship', title: '湖上客船和货船各有照片格',
                partner: '水上交通展厅的阿姨', item: '船舶照片分类页', mission: '“把游览客船、货船和渡船的照片分别放好！”',
                sceneLabel: '湖面上停泊的双层游览客船',
                sceneDescription: 'Photorealistic landscape photograph of a two-deck sightseeing passenger vessel stationary on a calm lake beside a distant landing. Show the whole hull, lower cabin windows and an upper glazed viewing level with railings in broad side view, realistic water reflections and surrounding hills, no people, lettering or logos.',
                actionLabel: '按船舶照片名称分格', actionResult: '游览客船、货船和渡船三张照片各回一格。',
                application: '给湖上游览客船的照片放“船”字牌。', ending: '阿姨收好分类页，三种船的照片都有了名字格。',
                cloze: '湖面上停泊着双层游览客——',
                homeTip: '自然看水上交通照片时，记录孩子主动的称呼，不先告诉分类、不追问；无需乘船验证，户外远离无护栏水边。',
                game: {
                    type: 'sort', title: '船舶照片各回一格', instruction: '把双层游览客船、货船和渡船的照片放进对应的照片格。',
                    success: '三张船舶照片分别归位了。', safety: '只给屏幕照片分类，不登船或接近船舶作业区。',
                    pieces: [{label: '湖面上停泊的双层游览客船', variant: 0, photo: true}, {label: '水上的货船', variant: 1, photo: true}, {label: '水上的渡船', variant: 2, photo: true}],
                    targets: [{label: '游览客船照片格', x: 23, y: 48}, {label: '货船照片格', x: 50, y: 62}, {label: '渡船照片格', x: 77, y: 48}], matches: [0, 1, 2]
                }
            },
            {
                id: 'travel-ship-04', baseId: 'ship', title: '渔港里停泊的船展开了',
                partner: '一起看相册的外婆', item: '渔港船舶观察页', mission: '“揭开照片，看看停在渔港里的船！”',
                sceneLabel: '渔港泊位里停着的渔船',
                sceneDescription: 'Photorealistic landscape photograph of a modest fishing vessel moored in a quiet fishing harbor. Show the entire hull, wheelhouse, mast and secured empty deck from a distant shore viewpoint, calm water and other indistinct berths behind, realistic marine materials, no people, animals, active fishing, writing or logos.',
                actionLabel: '揭开渔港船舶照片', actionResult: '渔船、货船和渡船的三张照片全展开了。',
                application: '给渔港停泊渔船的照片放“船”字牌。', ending: '外婆合上观察页，渔港的安静时刻留在册子里。',
                cloze: '渔港泊位里停着一艘渔——',
                homeTip: '自然看渔港照片时听孩子自己说到的东西，不先提示字音；不安排靠近渔船、渔具或水边的活动。',
                game: {
                    type: 'reveal', title: '渔港船照片开窗', instruction: '自由点开三张船舶照片的六块遮片，看到完整照片；不要求小格里有某件渔具。',
                    success: '三张船舶照片全展开了。', safety: '只揭屏幕照片，不登渔船、不碰渔具或缆绳。',
                    spots: ['渔港泊位里停着的渔船。', '这一张是渔港泊位里停着的渔船。', '水上的货船。', '这一张是水上的货船。', '水上的渡船。', '这一张是水上的渡船。']
                }
            },
            {
                id: 'travel-ship-05', baseId: 'ship', title: '拖船照片的参观页装好了',
                partner: '海事展厅的叔叔', item: '港口拖船纪念页', mission: '“先放拖船照片，再放港口示意卡，最后放页签！”',
                sceneLabel: '港池里停泊的港口拖船',
                sceneDescription: 'Photorealistic landscape photograph of a harbor tugboat stationary in a sheltered port basin. Frame the whole compact vessel in three-quarter side view, stout hull, black rubber fenders and wheelhouse clearly visible, calm water and distant quay, natural daylight, no crew, towing activity, writing or logos.',
                actionLabel: '依次整理拖船照片页', actionResult: '拖船照片、港口示意卡和纪念页签按顺序放好了。',
                application: '给港口拖船的照片放“船”字牌。', ending: '叔叔把拖船纪念页收进展厅册，真实拖带工作由专业人员进行。',
                cloze: '港池里停泊着一艘拖——',
                homeTip: '日常翻看船舶图册时，听孩子自发的名称和描述，不要求模仿拖带；不让孩子触碰缆绳或去港池边验证。',
                game: {
                    type: 'sequence', title: '拖船照片页三步收纳', instruction: '依次把拖船照片、港口示意卡、纪念页签放到各自位置。',
                    success: '拖船参观纪念页整理好了。', safety: '只整理屏幕卡片，不驾驶、拖带、系绳或登船。',
                    pieces: [{label: '港池里停泊的港口拖船', variant: 0, photo: true}, {label: '港口示意卡', variant: 0, photo: false}, {label: '拖船纪念页签', variant: 0, photo: false}],
                    targets: [{label: '拖船照片位', x: 25, y: 38}, {label: '港口示意卡位', x: 50, y: 55}, {label: '纪念页签位', x: 75, y: 72}], matches: [0, 1, 2]
                }
            },
            {
                id: 'travel-ship-06', baseId: 'ship', title: '河上客船照片送到游客中心',
                partner: '游客中心的管理员', item: '河上客船路线页', mission: '“把客船照片沿屏幕路线送到游客中心！”',
                sceneLabel: '河岸泊位旁停着的游览客船',
                sceneDescription: 'Photorealistic landscape photograph of a long single-deck river sightseeing passenger boat moored beside an urban riverside pontoon. Include the entire hull and glazed cabin with both ends visible, calm river and distant embankment in soft daylight, no people, boarding activity, writing or logos.',
                actionLabel: '沿地图送客船照片', actionResult: '照片标记经过相册入口和展示廊，到达了游客中心。',
                application: '给河岸游览客船的照片放“船”字牌。', ending: '管理员把客船照片放进游客中心的游览册。',
                cloze: '河岸泊位旁停着游览客——',
                homeTip: '自然看河岸出游照片时，记录孩子自发的说法，不提示读音或要求乘船；真实临水和乘船活动由成人按安全规则安排。',
                game: {
                    type: 'route', title: '客船照片到游客中心', instruction: '依次点击屏幕地图的相册入口、展示廊、游客中心，送到终点的是照片标记。',
                    success: '客船照片标记到了游客中心。', safety: '这是屏幕地图送照片，不驾驶船、不登船、不操作缆绳。',
                    steps: [{label: '到相册入口', result: '照片标记到了相册入口。'}, {label: '到展示廊', result: '照片标记到了展示廊。'}, {label: '到游客中心', result: '照片标记到了游客中心。'}],
                    targets: [{label: '相册入口', x: 25, y: 72}, {label: '展示廊', x: 52, y: 48}, {label: '游客中心', x: 80, y: 26}]
                }
            },
            {
                id: 'travel-wheel-01', baseId: 'wheel', title: '行李推车的轮照片收好了',
                partner: '车站展厅的阿姨', item: '行李推车车轮观察页', mission: '“把不同车轮的照片收进观察册！”',
                sceneLabel: '静止行李推车底部的轮',
                sceneDescription: 'Photorealistic landscape close-up photograph of a rubber wheel on a stationary airport-style luggage trolley on an empty airport terminal forecourt. Keep the complete circular wheel, axle bracket and a portion of the trolley frame visible, realistic metal and rubber with a clean paved background, no people, luggage labels or writing.',
                actionLabel: '收集不同车轮照片', actionResult: '行李推车轮、汽车轮和手推车轮的照片收好了。',
                application: '给行李推车底部车轮的照片放“轮”字牌。', ending: '阿姨把车轮观察页放进出行册，真实推车留在原处。',
                cloze: '行李推车底部装着车——',
                homeTip: '日常看推车照片时，留意孩子主动说到的部件，不先指出轮或要求转动；真实推车由成人使用，孩子远离转动和夹缝处。',
                game: {
                    type: 'collect', title: '车轮照片收进册', instruction: '把三张车轮照片放进观察册，放置顺序自己选。',
                    success: '三张车轮照片都收进观察册了。', safety: '只收屏幕照片，不摸车轮、钻车底或推动真实推车。',
                    pieces: [{label: '静止行李推车底部的轮', variant: 0, photo: true}, {label: '汽车的轮', variant: 1, photo: true}, {label: '手推车的轮', variant: 2, photo: true}],
                    targets: [{label: '车轮观察册', x: 50, y: 58}], matches: [0, 0, 0]
                }
            },
            {
                id: 'travel-wheel-02', baseId: 'wheel', title: '折叠自行车的轮示意页拼好了',
                partner: '交通展厅的讲解哥哥', item: '自行车车轮示意页', mission: '“把轮圈、轮胎和轮轴的示意卡各放好！”',
                sceneLabel: '停放的折叠自行车上的轮',
                sceneDescription: 'Photorealistic landscape close-up photograph of the front wheel of a stationary folding bicycle beside a cycle rack. Show the complete small circular tire, rim, spokes and hub with part of the fork and bicycle frame, credible mechanical construction and daylight, no hands, people, brand labels or writing.',
                actionLabel: '拼放车轮部件示意卡', actionResult: '轮圈、轮胎和轮轴三张示意卡各到了位置。',
                application: '给折叠自行车车轮的照片放“轮”字牌。', ending: '哥哥收起示意页，真实自行车维修交给成人。',
                cloze: '折叠自行车前面装着一个车——',
                homeTip: '自然看交通照片或已有模型时，听孩子自己的描述，不提示部件名称、不要求拆装；不触摸真实车轮或转动部件。',
                game: {
                    type: 'build', title: '车轮部件示意卡归位', instruction: '把轮圈、轮胎和轮轴三张示意卡放进同名位置，组成车轮讲解页。',
                    success: '车轮部件示意页拼好了。', safety: '只拼屏幕示意卡，不拆轮、充气或使用维修工具。',
                    pieces: [{label: '轮圈示意卡', variant: 0, photo: false}, {label: '轮胎示意卡', variant: 0, photo: false}, {label: '轮轴示意卡', variant: 0, photo: false}],
                    targets: [{label: '轮圈示意卡位', x: 25, y: 40}, {label: '轮胎示意卡位', x: 50, y: 60}, {label: '轮轴示意卡位', x: 75, y: 40}], matches: [0, 1, 2]
                }
            },
            {
                id: 'travel-wheel-03', baseId: 'wheel', title: '公交车轮和推车轮分进图册',
                partner: '看交通图册的爸爸', item: '公交车轮分类页', mission: '“把汽车车轮和手推车车轮的照片分两格！”',
                sceneLabel: '停站公交车上的轮',
                sceneDescription: 'Photorealistic landscape close-up photograph of one wheel on a stationary city bus in a terminal bay. Include the whole large tire and metal wheel hub with the lower bus body and paved ground, side-on framing with generous margins, realistic rubber tread and daylight, no people, readable labels or writing.',
                actionLabel: '按车辆分车轮照片', actionResult: '公交车与汽车的车轮照片放到一格，手推车轮照片放到另一格。',
                application: '给公交车车轮的照片放“轮”字牌。', ending: '爸爸收起图册，照片中的轮都留在各自的车上。',
                cloze: '公交车下方装着圆圆的车——',
                homeTip: '自然看车轮照片时，记录孩子自己的说法，不先给分类或要求辨认；不为看轮走近公交车或站在车辆旁。',
                game: {
                    type: 'sort', title: '汽车车轮与推车轮分格', instruction: '把公交车轮和汽车轮照片放进汽车类车轮格，把手推车轮照片放进手推车轮格。',
                    success: '汽车类车轮和手推车轮的照片分好了。', safety: '只给屏幕照片分类，不靠近车辆、不摸轮或钻车底。',
                    pieces: [{label: '停站公交车上的轮', variant: 0, photo: true}, {label: '汽车的轮', variant: 1, photo: true}, {label: '手推车的轮', variant: 2, photo: true}],
                    targets: [{label: '汽车类车轮照片格', x: 28, y: 55}, {label: '手推车轮照片格', x: 72, y: 55}], matches: [0, 0, 1]
                }
            },
            {
                id: 'travel-wheel-04', baseId: 'wheel', title: '空手推车的轮照片开窗了',
                partner: '社区出行展的阿姨', item: '手推车轮观察页', mission: '“一起揭开三张车轮照片！”',
                sceneLabel: '广场上静止手推车的轮',
                sceneDescription: 'Photorealistic landscape close-up photograph of a complete solid rubber wheel attached to an empty stationary handcart on a paved plaza. Include the axle, supporting metal frame and part of the flat cart platform, realistic wear and daylight, no people, motion, labels or writing.',
                actionLabel: '揭开手推车轮照片', actionResult: '广场手推车轮、汽车轮和另一张手推车轮照片全部展开了。',
                application: '给广场上手推车车轮的照片放“轮”字牌。', ending: '阿姨收好观察页，推车不用我们转动或搬走。',
                cloze: '空手推车底下装着车——',
                homeTip: '自然看到推车或它的照片时，听孩子主动说到什么，不先指轮、不要求触摸；由成人使用推车，孩子避开夹缝和转动部件。',
                game: {
                    type: 'reveal', title: '手推车轮照片展开', instruction: '自由揭开三张照片上的六块遮片，展开完整画面，不用在小格里找轮轴。',
                    success: '三张车轮照片全展开了。', safety: '只揭屏幕照片，不转车轮、拆部件或推动真实手推车。',
                    spots: ['广场上静止手推车的轮。', '这一张是广场上静止手推车的轮。', '汽车的轮。', '这一张是汽车的轮。', '手推车的轮。', '这一张是手推车的轮。']
                }
            },
            {
                id: 'travel-wheel-05', baseId: 'wheel', title: '小汽车的轮照片页按顺序收好',
                partner: '整理旅行相册的妈妈', item: '停车场车轮纪念页', mission: '“先放车轮照片，再放圆形示意卡，最后放页签！”',
                sceneLabel: '停车位里小汽车上的轮',
                sceneDescription: 'Photorealistic landscape close-up photograph of a wheel on a stationary passenger car in a quiet parking space. Frame the entire round tire and alloy hub with part of the car fender and painted parking line, realistic metal and rubber, natural daylight, no people, hands, logos or readable lettering.',
                actionLabel: '依次收好车轮纪念页', actionResult: '汽车轮照片、圆形示意卡和纪念页签按顺序放好了。',
                application: '给停车位里汽车车轮的照片放“轮”字牌。', ending: '妈妈把纪念页收进相册，真实车轮不用我们碰。',
                cloze: '停车位里小汽车下方装着车——',
                homeTip: '自然翻看旅行相册时听孩子自己的发现，不先读字、不要求寻找轮；停车场仍由成人牵护，不在车旁停留辨认。',
                game: {
                    type: 'sequence', title: '汽车轮纪念页三步整理', instruction: '依次把汽车轮照片、圆形示意卡和纪念页签放到对应位置。',
                    success: '汽车轮纪念页按顺序整理好了。', safety: '只整理屏幕图卡，不更换车轮、不碰工具或真实车辆。',
                    pieces: [{label: '停车位里小汽车上的轮', variant: 0, photo: true}, {label: '圆形车轮示意卡', variant: 0, photo: false}, {label: '车轮纪念页签', variant: 0, photo: false}],
                    targets: [{label: '车轮照片位', x: 25, y: 38}, {label: '圆形示意卡位', x: 50, y: 55}, {label: '纪念页签位', x: 75, y: 72}], matches: [0, 1, 2]
                }
            },
            {
                id: 'travel-wheel-06', baseId: 'wheel', title: '平板推车轮照片送去展柜',
                partner: '交通展厅的管理员', item: '平板推车轮路线页', mission: '“把车轮照片沿屏幕路线送到展柜！”',
                sceneLabel: '静止平板推车底部的万向轮',
                sceneDescription: 'Photorealistic landscape close-up photograph of a caster wheel fixed beneath an empty stationary flatbed trolley in an indoor transport exhibit. Include the complete wheel, swivel bracket and lower trolley platform, realistic rubber and steel, softly lit floor background, no people, writing, exhibit labels or logos.',
                actionLabel: '沿地图送推车轮照片', actionResult: '照片标记经过展厅入口和照片桌，到达了车轮展柜。',
                application: '给平板推车万向轮的照片放“轮”字牌。', ending: '管理员把车轮照片收进展柜旁的观察册。',
                cloze: '平板推车底部装着万向——',
                homeTip: '自然看展品照片时，记录孩子主动的说法，不先提示部件或要求走路线；真实展品不触摸，工具和搬运由成人处理。',
                game: {
                    type: 'route', title: '车轮照片去展柜', instruction: '依次点击屏幕地图的展厅入口、照片桌、车轮展柜，把照片标记送到最后一站。',
                    success: '推车轮照片标记到了车轮展柜。', safety: '只移动屏幕照片标记，不搬推车、不转轮或操作真实展品。',
                    steps: [{label: '到展厅入口', result: '照片标记到了展厅入口。'}, {label: '到照片桌', result: '照片标记到了照片桌。'}, {label: '到车轮展柜', result: '照片标记到了车轮展柜。'}],
                    targets: [{label: '展厅入口', x: 25, y: 72}, {label: '照片桌', x: 52, y: 48}, {label: '车轮展柜', x: 80, y: 26}]
                }
            },
            {
                id: 'travel-bag-01', baseId: 'bag', title: '站台长椅旁的旅行包照片收好了',
                partner: '同行的爸爸', item: '候车旅行包纪念页', mission: '“把旅途中见到的包照片收进册子！”',
                sceneLabel: '候车长椅旁放着的旅行包',
                sceneDescription: 'Photorealistic landscape photograph of a closed navy fabric travel duffel bag resting on the floor beside a bench inside an empty station waiting area. Show the whole bag, two handles, shoulder strap and zipper clearly, realistic woven fabric and soft indoor daylight, no people, luggage tags, brands or writing.',
                actionLabel: '收集出行用包的照片', actionResult: '候车旅行包、手提包和另一张旅行包的照片都收好了。',
                application: '给候车长椅旁旅行包的照片放“包”字牌。', ending: '爸爸收好纪念页，真实行李一直由成人照看。',
                cloze: '候车长椅旁放着一个旅行——',
                homeTip: '日常整理随身物品时，观察孩子是否自然说到包和用途，不藏物考查、不提示字音；不让孩子提重行李或看管陌生物品。',
                game: {
                    type: 'collect', title: '旅行包照片收进册', instruction: '把三张包的照片收进出行册，先放哪张都可以。',
                    success: '三张出行用包的照片都收好了。', safety: '只整理屏幕照片，不搬真实行李、不捡陌生包。',
                    pieces: [{label: '候车长椅旁放着的旅行包', variant: 0, photo: true}, {label: '带提手的手提包', variant: 1, photo: true}, {label: '装行李的旅行包', variant: 2, photo: true}],
                    targets: [{label: '出行用包相册', x: 50, y: 58}], matches: [0, 0, 0]
                }
            },
            {
                id: 'travel-bag-02', baseId: 'bag', title: '换乘准备桌上的包照片分格',
                partner: '整理照片的姐姐', item: '换乘随身包分类页', mission: '“把双肩包、手提包和旅行包的照片分开放！”',
                sceneLabel: '换乘准备桌上的双肩包',
                sceneDescription: 'Photorealistic landscape photograph of a closed green backpack standing upright on a travel preparation table with its two shoulder straps clearly visible beside the bag. Include the whole backpack and a plain folded map in an empty station lounge setting, authentic fabric and daylight, no people, personal details, writing or logos.',
                actionLabel: '按包的样子分照片', actionResult: '双肩包、手提包和旅行包三张照片各进一格。',
                application: '给换乘准备桌上双肩包的照片放“包”字牌。', ending: '姐姐把分类页收进出行册，随身物品由成人照看。',
                cloze: '换乘准备桌上放着一个双肩——',
                homeTip: '日常出门准备时，听孩子主动说到的包，不先给类型、不要求分类；保管自己的用品，不展示姓名、地址或证件。',
                game: {
                    type: 'sort', title: '随身包照片各回一格', instruction: '把双肩包、手提包和旅行包的照片放进各自的照片格。',
                    success: '三种包的照片各自归位了。', safety: '只给屏幕照片分类，不整理陌生包，不填写或展示个人信息。',
                    pieces: [{label: '换乘准备桌上的双肩包', variant: 0, photo: true}, {label: '带提手的手提包', variant: 1, photo: true}, {label: '装行李的旅行包', variant: 2, photo: true}],
                    targets: [{label: '双肩包照片格', x: 23, y: 48}, {label: '手提包照片格', x: 50, y: 62}, {label: '旅行包照片格', x: 77, y: 48}], matches: [0, 1, 2]
                }
            },
            {
                id: 'travel-bag-03', baseId: 'bag', title: '游船候船厅的包纪念页装好了',
                partner: '同行的妈妈', item: '候船随身包纪念页', mission: '“先放包照片，再放物品示意卡，最后放页签！”',
                sceneLabel: '候船厅长凳上放着的手提包',
                sceneDescription: 'Photorealistic landscape photograph of a closed beige zippered tote bag with two handles resting on a bench inside an empty ferry waiting hall. Show the whole bag and its fabric texture, with a distant window overlooking a blurred harbor, calm indoor daylight, no people, readable tags, personal information, brands or writing.',
                actionLabel: '依次装好候船包纪念页', actionResult: '手提包照片、物品示意卡和纪念页签按顺序放好了。',
                application: '给候船厅手提包的照片放“包”字牌。', ending: '妈妈把纪念页收好，候船的回忆留在这一页。',
                cloze: '候船厅长凳上放着一个手提——',
                homeTip: '自然翻看出行相册时，记录孩子自己说到的物品，不要求补句或模仿收纳；真实候船由成人看顾，不让孩子看管行李。',
                game: {
                    type: 'sequence', title: '候船包纪念页三步整理', instruction: '依次放好手提包照片、物品示意卡、纪念页签，做一页屏幕纪念册。',
                    success: '候船随身包纪念页整理好了。', safety: '只整理屏幕图卡，不翻真实行李、不填写姓名或证件信息。',
                    pieces: [{label: '候船厅长凳上放着的手提包', variant: 0, photo: true}, {label: '随身物品示意卡', variant: 0, photo: false}, {label: '候船纪念页签', variant: 0, photo: false}],
                    targets: [{label: '手提包照片位', x: 25, y: 38}, {label: '物品示意卡位', x: 50, y: 55}, {label: '纪念页签位', x: 75, y: 72}], matches: [0, 1, 2]
                }
            },
            {
                id: 'travel-umbrella-01', baseId: 'umbrella', title: '雨天候车厅的伞照片分两格',
                partner: '整理雨天相册的爸爸', item: '候车雨伞分类页', mission: '“把收拢的伞和撑开的伞照片分开收好！”',
                sceneLabel: '候车厅伞架里收拢的弯柄伞',
                sceneDescription: 'Photorealistic landscape photograph of a fully closed curved-handled umbrella standing in an umbrella rack inside an empty transit waiting hall on a rainy day. Keep the whole folded canopy, shaft and handle visible, window rain softly behind, realistic damp fabric, no people, brands, lettering or signs.',
                actionLabel: '按伞的状态分照片', actionResult: '两张合拢伞照片与一张撑开伞照片分到对应格。',
                application: '给候车厅伞架里雨伞的照片放“伞”字牌。', ending: '爸爸收起分类页，真实雨伞由成人收放。',
                cloze: '候车厅伞架里放着一把雨——',
                homeTip: '日常雨天回家时，听孩子主动说到的雨具，不要求操作或说字音；撑收雨伞由成人处理，避免伞尖和夹手。',
                game: {
                    type: 'sort', title: '合拢伞和撑开伞分格', instruction: '把候车厅收拢的伞和合拢雨伞照片放到合拢格，把弯钩手柄的撑开伞照片放到撑开格。',
                    success: '合拢和撑开两种状态的伞照片分好了。', safety: '只给屏幕照片分类，不撑收真伞、不碰伞尖或夹缝。',
                    pieces: [{label: '候车厅伞架里收拢的弯柄伞', variant: 0, photo: true}, {label: '合拢的雨伞', variant: 1, photo: true}, {label: '带弯钩手柄的撑开的伞', variant: 2, photo: true}],
                    targets: [{label: '合拢伞照片格', x: 28, y: 55}, {label: '撑开伞照片格', x: 72, y: 55}], matches: [0, 0, 1]
                }
            },
            {
                id: 'travel-umbrella-02', baseId: 'umbrella', title: '站前雨具展示伞展开了',
                partner: '雨具展台的讲解阿姨', item: '站前雨伞观察页', mission: '“揭开三张伞照片，看看伞的样子！”',
                sceneLabel: '站前室内展架上撑开的雨伞',
                sceneDescription: 'Photorealistic landscape photograph of a fully open blue rain umbrella secured upright on a purpose-made indoor display stand near a transit station entrance. Show the complete canopy, shaft and curved handle within the frame, realistic fabric and ribs, quiet diffused daylight, no people, writing or branding.',
                actionLabel: '揭开展架雨伞照片', actionResult: '展架撑开伞、合拢伞和弯钩手柄撑开伞照片全部展开了。',
                application: '给站前展架上雨伞的照片放“伞”字牌。', ending: '阿姨收起观察页，展架上的伞不用我们操作。',
                cloze: '站前室内展架上撑着一把雨——',
                homeTip: '自然看到雨具图片时，记录孩子主动说到的样子，不先指伞骨或提示读音；不让孩子把撑收真伞当作识字任务。',
                game: {
                    type: 'reveal', title: '雨具展台照片开窗', instruction: '自由揭开三张照片的六块遮片，展开整个画面，不要求小格里出现某根伞骨。',
                    success: '三张雨伞照片全展开了。', safety: '只揭屏幕照片，不取展品、不操作真伞或碰伞尖。',
                    spots: ['站前室内展架上撑开的雨伞。', '这一张是站前室内展架上撑开的雨伞。', '合拢的雨伞。', '这一张是合拢的雨伞。', '带弯钩手柄的撑开的伞。', '这一张是带弯钩手柄的撑开的伞。']
                }
            },
            {
                id: 'travel-umbrella-03', baseId: 'umbrella', title: '雨天出行伞照片送到服务桌',
                partner: '出行服务桌的叔叔', item: '雨伞照片路线页', mission: '“沿屏幕地图把雨伞照片送到服务桌！”',
                sceneLabel: '车站准备台上合拢的折叠伞',
                sceneDescription: 'Photorealistic landscape photograph of a closed compact folding umbrella lying diagonally on a clean station travel preparation counter. Include the whole folded canopy, short handle and secured fabric strap, an empty windowed waiting area behind, realistic textile details and soft daylight, no people, brands, personal details or text.',
                actionLabel: '沿地图送雨伞照片', actionResult: '照片标记经过大厅入口和雨具展示角，到达了服务桌。',
                application: '给车站准备台上折叠伞的照片放“伞”字牌。', ending: '叔叔收好雨伞照片，雨天出行准备由成人安排。',
                cloze: '车站准备台上放着一把折叠——',
                homeTip: '日常出门整理雨具时，观察孩子主动说到什么，不藏伞考查、不要求读字；实际雨天出行由成人陪伴和安排。',
                game: {
                    type: 'route', title: '雨伞照片到服务桌', instruction: '依次点击屏幕地图的大厅入口、雨具展示角、服务桌，把雨伞照片标记送到终点。',
                    success: '雨伞照片标记到了服务桌。', safety: '只送屏幕照片，不独自雨天外出、不操作真实雨伞。',
                    steps: [{label: '到大厅入口', result: '照片标记到了大厅入口。'}, {label: '到雨具展示角', result: '照片标记到了雨具展示角。'}, {label: '到服务桌', result: '照片标记到了服务桌。'}],
                    targets: [{label: '大厅入口', x: 25, y: 72}, {label: '雨具展示角', x: 52, y: 48}, {label: '服务桌', x: 80, y: 26}]
                }
            },
            {
                id: 'travel-hat-01', baseId: 'hat', title: '夏日出游的帽照片收好了',
                partner: '同行的妈妈', item: '夏日出游帽子纪念页', mission: '“把不同帽子的照片收进出游册！”',
                sceneLabel: '出游准备桌上的宽檐遮阳帽',
                sceneDescription: 'Photorealistic landscape photograph of a wide-brimmed woven sunhat resting on an outdoor travel preparation table beneath a station courtyard canopy. Include the whole crown and brim with a plain folded map nearby, authentic straw texture and gentle summer light, no people, readable maps, lettering or brands.',
                actionLabel: '收集出游帽子照片', actionResult: '遮阳帽、毛线帽和棒球帽照片都收进了出游册。',
                application: '给出游准备桌上遮阳帽的照片放“帽”字牌。', ending: '妈妈收好这一页，真实出游穿戴由成人照看。',
                cloze: '夏日出游准备桌上放着遮阳——',
                homeTip: '日常出门穿戴时，留意孩子自然谈到的物品，不故意藏帽、不先说字音；成人根据天气安排穿戴，不做辨认测试。',
                game: {
                    type: 'collect', title: '出游帽照片收进册', instruction: '把三张帽子照片放到出游册，放置顺序自己选。',
                    success: '三种帽子的照片收好了。', safety: '只收屏幕照片，不试戴陌生帽子，不为游戏安排日晒。',
                    pieces: [{label: '出游准备桌上的宽檐遮阳帽', variant: 0, photo: true}, {label: '毛线织的帽子', variant: 1, photo: true}, {label: '前面有帽檐的棒球帽', variant: 2, photo: true}],
                    targets: [{label: '出游帽子相册', x: 50, y: 58}], matches: [0, 0, 0]
                }
            },
            {
                id: 'travel-hat-02', baseId: 'hat', title: '冬日候车帽照片各回一格',
                partner: '整理出行照片的奶奶', item: '冬日帽子分类页', mission: '“把毛线帽和棒球帽的照片分两格！”',
                sceneLabel: '冬日候车厅长椅上的毛线帽',
                sceneDescription: 'Photorealistic landscape photograph of a folded rib-knit wool hat resting on a bench inside an empty railway waiting room in winter. Show the whole hat with its rounded crown and turned-up cuff, realistic knitted yarn and soft cool window light, no people, brands, lettering or personal information.',
                actionLabel: '按帽的样子分照片', actionResult: '两张毛线帽照片和一张棒球帽照片分进了对应格。',
                application: '给冬日候车厅毛线帽的照片放“帽”字牌。', ending: '奶奶合上分类页，冬日候车的物品收在相册里。',
                cloze: '冬日候车厅长椅上放着毛线——',
                homeTip: '平常出门保暖时，听孩子主动说到的穿戴，不先给类型、不要求找字；不交换贴身帽子，成人安排适合天气的用品。',
                game: {
                    type: 'sort', title: '毛线帽和棒球帽分格', instruction: '把两张毛线帽照片放到毛线帽格，把棒球帽照片放到棒球帽格。',
                    success: '毛线帽与棒球帽的照片分好了。', safety: '只给屏幕照片分类，不试戴陌生帽子或交换贴身用品。',
                    pieces: [{label: '冬日候车厅长椅上的毛线帽', variant: 0, photo: true}, {label: '毛线织的帽子', variant: 1, photo: true}, {label: '前面有帽檐的棒球帽', variant: 2, photo: true}],
                    targets: [{label: '毛线帽照片格', x: 28, y: 55}, {label: '棒球帽照片格', x: 72, y: 55}], matches: [0, 0, 1]
                }
            },
            {
                id: 'travel-hat-03', baseId: 'hat', title: '游园集合桌上的帽纪念页装好了',
                partner: '同行的爸爸', item: '游园棒球帽纪念页', mission: '“先放帽照片，再放集合示意卡，最后放页签！”',
                sceneLabel: '游园集合桌上放着的棒球帽',
                sceneDescription: 'Photorealistic landscape photograph of a plain blue baseball cap resting on a picnic-style table in a sheltered park visitor meeting area. Show the whole crown, front visor and rear adjustment band in three-quarter view, realistic cotton texture and mild daylight, no people, team logos, lettering or signs.',
                actionLabel: '依次整理游园帽纪念页', actionResult: '棒球帽照片、集合示意卡和纪念页签按顺序放好了。',
                application: '给游园集合桌上棒球帽的照片放“帽”字牌。', ending: '爸爸收好纪念页，真实集合和穿戴由成人安排。',
                cloze: '游园集合桌上放着一顶棒球——',
                homeTip: '自然看游园相册时，听孩子自发说到的物品，不要求补句或复述；实际出游由成人全程陪伴，不独自去集合点。',
                game: {
                    type: 'sequence', title: '游园帽纪念页三步整理', instruction: '按顺序把棒球帽照片、集合示意卡和纪念页签放进三个对应位置。',
                    success: '游园帽子纪念页整理好了。', safety: '只整理屏幕图卡，不独自集合、不交换帽子或展示个人信息。',
                    pieces: [{label: '游园集合桌上放着的棒球帽', variant: 0, photo: true}, {label: '集合位置示意卡', variant: 0, photo: false}, {label: '游园纪念页签', variant: 0, photo: false}],
                    targets: [{label: '帽子照片位', x: 25, y: 38}, {label: '集合示意卡位', x: 50, y: 55}, {label: '纪念页签位', x: 75, y: 72}], matches: [0, 1, 2]
                }
            },
            {
                id: 'travel-boat-01', baseId: 'boat', title: '小港湾里的舟照片收进册',
                partner: '水上交通展的讲解员', item: '小港湾舟纪念页', mission: '“把木划艇、帆船和独木舟的照片收进游览册！”',
                sceneLabel: '小港湾里停泊的木划艇',
                sceneDescription: 'Photorealistic landscape photograph of an empty wooden rowboat floating at rest in a sheltered small harbor. Show the complete hull, wooden seats and a pair of secured oars from a distant shore viewpoint, calm water and simple mooring pontoon behind, authentic timber and daylight, no people, writing or logos.',
                actionLabel: '收集水上小船照片', actionResult: '木划艇、帆船和独木舟的照片都收好了。',
                application: '给小港湾木划艇的照片放“舟”字牌。', ending: '讲解员把纪念页收进游览册，“舟”也是说船的一种方式。',
                cloze: '木划艇也是船，船也可以叫作——',
                homeTip: '自然看船的照片时，听孩子自己的称呼，不纠正或要求改说“舟”；不安排划船来验证识字，不到水边找实物。',
                game: {
                    type: 'collect', title: '舟照片收进游览册', instruction: '把木划艇、帆船和独木舟的照片放进游览册，放置顺序自己选。',
                    success: '三张水上小船照片收好了，这里也用“舟”表示它们。', safety: '只收屏幕照片，不划船、登船、碰桨或临水。',
                    pieces: [{label: '小港湾里停泊的木划艇', variant: 0, photo: true}, {label: '带船帆的帆船', variant: 1, photo: true}, {label: '细长的独木舟', variant: 2, photo: true}],
                    targets: [{label: '舟游览册', x: 50, y: 58}], matches: [0, 0, 0]
                }
            },
            {
                id: 'travel-boat-02', baseId: 'boat', title: '码头独木舟照片各回一格',
                partner: '整理交通图册的姐姐', item: '独木舟与帆船分类页', mission: '“把独木舟和帆船的照片分两格收好！”',
                sceneLabel: '静水码头旁停着的独木舟',
                sceneDescription: 'Photorealistic landscape photograph of an empty long narrow canoe floating stationary beside a small dock on still lake water. Show the whole open hull and seats in a broad three-quarter side view, a secured paddle inside and distant reeds behind, realistic materials and daylight, no people, writing or logos.',
                actionLabel: '按小船样子分照片', actionResult: '两张独木舟照片和一张帆船照片分到对应格。',
                application: '给码头旁独木舟的照片放“舟”字牌。', ending: '姐姐收好分类页，不同的船在这一课也可以用“舟”表示。',
                cloze: '静水码头旁停着一艘独木——',
                homeTip: '自由看水上交通图册时，记录孩子自然的称呼，不先提示类别、不测试；不进入码头或碰船桨，不安排乘船验证。',
                game: {
                    type: 'sort', title: '独木舟和帆船分格', instruction: '把两张独木舟照片放进独木舟格，把帆船照片放进帆船格。',
                    success: '独木舟与帆船的照片分好了。', safety: '分类只在屏幕上，不登船、划桨或靠近码头边缘。',
                    pieces: [{label: '静水码头旁停着的独木舟', variant: 0, photo: true}, {label: '带船帆的帆船', variant: 1, photo: true}, {label: '细长的独木舟', variant: 2, photo: true}],
                    targets: [{label: '独木舟照片格', x: 28, y: 55}, {label: '帆船照片格', x: 72, y: 55}], matches: [0, 1, 0]
                }
            },
            {
                id: 'travel-boat-03', baseId: 'boat', title: '湖上帆船照片送到讲解角',
                partner: '游览中心的讲解叔叔', item: '帆船照片路线页', mission: '“把帆船照片沿屏幕地图送到讲解角！”',
                sceneLabel: '湖上泊位里展开船帆的小帆船',
                sceneDescription: 'Photorealistic landscape photograph of a small sailboat at rest on a calm sheltered lake with a fully raised white sail in light air. Show the entire hull, mast and complete sail inside generous crop-safe margins, distant mooring buoys and wooded shore, no people, readable sail numbers, writing or logos.',
                actionLabel: '沿地图送帆船照片', actionResult: '照片标记经过相册入口和照片桌，到达了讲解角。',
                application: '给湖上小帆船的照片放“舟”字牌。', ending: '叔叔把照片收进讲解册，这里用“舟”表示水上的小船。',
                cloze: '湖上的小帆船，也是一叶轻——',
                homeTip: '自然翻看船的照片时，听孩子自己的表达，不要求改说某个字；不让孩子操作船帆或绳索，不安排划船认字。',
                game: {
                    type: 'route', title: '帆船照片到讲解角', instruction: '依次点击屏幕地图的相册入口、照片桌、讲解角，移动的是帆船照片标记。',
                    success: '帆船照片标记到了讲解角。', safety: '只在屏幕地图送照片，不驾驶帆船、不登船或操作绳索。',
                    steps: [{label: '到相册入口', result: '照片标记到了相册入口。'}, {label: '到照片桌', result: '照片标记到了照片桌。'}, {label: '到讲解角', result: '照片标记到了讲解角。'}],
                    targets: [{label: '相册入口', x: 25, y: 72}, {label: '照片桌', x: 52, y: 48}, {label: '讲解角', x: 80, y: 26}]
                }
            },
            {
                id: 'travel-door-01', baseId: 'door', title: '候车厅入口的门照片开窗了',
                partner: '车站服务台的阿姨', item: '候车厅入口观察页', mission: '“揭开入口照片，看看不同的门！”',
                sceneLabel: '候车厅入口的两扇玻璃门',
                sceneDescription: 'Photorealistic landscape photograph of two closed side-by-side glass entrance doors at an empty railway waiting hall. Frame the entire doorway, rectangular door leaves, metal handles and threshold from the forecourt, realistic glass reflections and architecture, no people, station names, writing, stickers or logos.',
                actionLabel: '揭开候车厅门照片', actionResult: '候车厅玻璃门、打开的房间门和两扇并排门照片全展开了。',
                application: '给候车厅入口玻璃门的照片放“门”字牌。', ending: '阿姨收好观察页，真实进出候车厅由成人带领。',
                cloze: '候车厅入口装着两扇玻璃——',
                homeTip: '日常进出公共建筑时，听孩子自然说到的入口，不先读字、不要求开关门；成人带领通过，避免夹手，不碰门的机械部件。',
                game: {
                    type: 'reveal', title: '候车厅门照片展开', instruction: '自由揭开三张门照片的六块遮片，展开完整画面，不用在小格里找把手。',
                    success: '三张门的照片全展开了。', safety: '只揭屏幕照片，不推拉真门、不触碰夹缝或机械部件。',
                    spots: ['候车厅入口的两扇玻璃门。', '这一张是候车厅入口的两扇玻璃门。', '打开的房间门。', '这一张是打开的房间门。', '两扇并排的门。', '这一张是两扇并排的门。']
                }
            },
            {
                id: 'travel-door-02', baseId: 'door', title: '游客中心入口页按顺序装好了',
                partner: '游客中心的管理员', item: '游客中心门纪念页', mission: '“先放门照片，再放入口示意卡，最后放页签！”',
                sceneLabel: '游客中心入口打开的木门',
                sceneDescription: 'Photorealistic landscape photograph of a single wooden entrance door held open at a small visitor center. Show the entire door leaf, frame and level threshold with the quiet lobby visible beyond, authentic timber grain and soft daylight, no people, destination names, readable brochures, writing or signage.',
                actionLabel: '依次装好入口纪念页', actionResult: '木门照片、入口示意卡和纪念页签按顺序放好了。',
                application: '给游客中心打开木门的照片放“门”字牌。', ending: '管理员收起纪念页，入口的位置留在照片中。',
                cloze: '游客中心入口打开着一扇木——',
                homeTip: '自然看出游照片或正常进出建筑时，记录孩子主动的话，不要求反复开门或读字；成人带领，避免夹手和碰撞。',
                game: {
                    type: 'sequence', title: '游客中心入口页三步整理', instruction: '按顺序把木门照片、入口示意卡和纪念页签放到相应位置。',
                    success: '游客中心入口纪念页整理好了。', safety: '只整理屏幕图卡，不操作真门、不独自进入陌生建筑。',
                    pieces: [{label: '游客中心入口打开的木门', variant: 0, photo: true}, {label: '入口位置示意卡', variant: 0, photo: false}, {label: '游客中心纪念页签', variant: 0, photo: false}],
                    targets: [{label: '木门照片位', x: 25, y: 38}, {label: '入口示意卡位', x: 50, y: 55}, {label: '纪念页签位', x: 75, y: 72}], matches: [0, 1, 2]
                }
            },
            {
                id: 'travel-door-03', baseId: 'door', title: '候船厅入口照片送去相册桌',
                partner: '候船厅的讲解叔叔', item: '候船厅门照片路线页', mission: '“把入口的门照片沿屏幕地图送到相册桌！”',
                sceneLabel: '候船厅入口的两扇金属框门',
                sceneDescription: 'Photorealistic landscape photograph of a pair of closed metal-framed glass entrance doors at an empty ferry terminal waiting hall. Include both full door leaves, handles, frame and level entrance paving, with a calm harbor softly reflected in the glass, no people, boat schedules, writing, stickers or logos.',
                actionLabel: '沿地图送候船厅门照片', actionResult: '照片标记经过展示入口和照片廊，到达了相册桌。',
                application: '给候船厅入口金属框门的照片放“门”字牌。', ending: '叔叔把入口照片放进相册，真实候船由成人照看。',
                cloze: '候船厅入口有两扇金属框——',
                homeTip: '日常翻看旅途照片时，听孩子自然说到的建筑入口，不先读字、不安排独自找门；真实候船由成人带领，远离水边和门缝。',
                game: {
                    type: 'route', title: '入口照片到相册桌', instruction: '依次点击屏幕地图的展示入口、照片廊、相册桌，送到最后一站的是门的照片标记。',
                    success: '候船厅门照片标记到了相册桌。', safety: '只送屏幕照片，不独自进入候船厅、不登船或推拉真门。',
                    steps: [{label: '到展示入口', result: '照片标记到了展示入口。'}, {label: '到照片廊', result: '照片标记到了照片廊。'}, {label: '到相册桌', result: '照片标记到了相册桌。'}],
                    targets: [{label: '展示入口', x: 25, y: 72}, {label: '照片廊', x: 52, y: 48}, {label: '相册桌', x: 80, y: 26}]
                }
            }
        ]
    };
}));
