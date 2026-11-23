(function (root, factory) {
    'use strict';
    const catalog = factory();
    if (typeof module === 'object' && module.exports) module.exports = catalog;
    else (root.HanziSceneCatalogs = root.HanziSceneCatalogs || []).push(catalog);
}(typeof window !== 'undefined' ? window : globalThis, function () {
    'use strict';
    return {
        category: '海边发现',
        stories: [
            {
                id: 'seaside-shell-01', baseId: 'shell', title: '扇贝壳住进绒布托盘',
                partner: '海洋馆讲解员', item: '扇贝壳托盘纪念页',
                mission: '“请把展馆已有的空贝壳照片收进托盘相册！”',
                sceneLabel: '绒布托盘里的空扇贝壳',
                sceneDescription: 'Photorealistic close view of a single empty scallop shell resting on a dark blue velvet tray in a coastal natural history museum. Its complete fan-shaped outline and radial ridges are visible, centered with generous margins, soft exhibit lighting, no people or text.',
                actionLabel: '把贝壳照片收进相册', actionResult: '三张贝壳照片都放进了相册格。',
                application: '给绒布托盘里的空扇贝壳照片放“贝”字牌。',
                ending: '讲解员保留了实物原来的位置，把相册留在阅读台。',
                cloze: '托盘里放着空贝壳，这里可以用一个字表示它：——。',
                homeTip: '自然翻看展馆图册时，听孩子自己谈贝壳，不先指图、不读字、不提问测试；不采集活贝。',
                game: {
                    type: 'collect', title: '托盘相册收照片', instruction: '把三张贝壳照片放进相册格，先放哪张都可以。',
                    success: '贝壳照片已收好，实物仍留在展柜里。', safety: '只收屏幕照片，不捡拾贝壳或触摸展品。',
                    pieces: [{label: '绒布托盘里的空扇贝壳', variant: 0, photo: true}, {label: '卷卷的海螺壳', variant: 1, photo: true}, {label: '两片相合的蛤蜊壳', variant: 2, photo: true}],
                    targets: [{label: '贝壳相册格', x: 50, y: 66}], matches: [0, 0, 0]
                }
            },
            {
                id: 'seaside-shell-02', baseId: 'shell', title: '打开贝壳内侧观察页',
                partner: '自然博物馆老师', item: '贝壳内侧观察页',
                mission: '“请揭开照片，看看展柜里空贝壳的内侧！”',
                sceneLabel: '展柜里内侧朝上的空蛤蜊壳',
                sceneDescription: 'Photorealistic museum photograph of one empty clam shell half with its smooth pale inner surface facing upward on a neutral specimen pad inside a glass case. The entire curved shell is centered and unobstructed with crop-safe margins, subtle natural sheen, no animal tissue, people or text.',
                actionLabel: '揭开贝壳照片', actionResult: '三张贝壳照片的遮片都打开了。',
                application: '给内侧朝上的空蛤蜊壳照片放“贝”字牌。',
                ending: '老师合上展柜，只把观察页放在桌上供大家翻看。',
                cloze: '空空的蛤蜊壳也是贝壳，这里用一个字表示：——。',
                homeTip: '孩子自由看贝壳照片时，接纳自己的描述，不先提示内外侧或字音；实物不拿来考查，也不采活贝。',
                game: {
                    type: 'reveal', title: '贝壳观察窗', instruction: '自由点开六块遮片，观看三张完整照片，不用寻找细小位置。',
                    success: '三张贝壳照片都打开了，可以慢慢比较。', safety: '只看照片，不打开真实展柜，不采集海边动物。',
                    spots: ['展柜里内侧朝上的空蛤蜊壳照片打开了一部分。', '展柜里内侧朝上的空蛤蜊壳照片继续展开。', '卷卷的海螺壳照片打开了一部分。', '卷卷的海螺壳照片继续展开。', '两片相合的蛤蜊壳照片打开了一部分。', '两片相合的蛤蜊壳照片继续展开。']
                }
            },
            {
                id: 'seaside-shell-03', baseId: 'shell', title: '海螺壳照片分到展柜页',
                partner: '贝壳展览管理员', item: '贝壳照片索引页',
                mission: '“请按照片卡已有的名称，把贝壳照片送到对应照片页！”',
                sceneLabel: '透明展柜里完整的空海螺壳',
                sceneDescription: 'Photorealistic close museum view of a complete empty spiral sea snail shell resting horizontally on a clear acrylic support inside a coastal exhibit case. The spiral whorls and open aperture are visible, warm cream texture, full shell centered with wide margins, no living animal, labels, people or text.',
                actionLabel: '把照片分进对应照片页', actionResult: '展柜照片、海螺壳照片和蛤蜊壳照片各有了位置。',
                application: '给透明展柜里的空海螺壳照片放“贝”字牌。',
                ending: '管理员把索引页夹在图册前面，参观者不用移动实物也能浏览。',
                cloze: '展柜里的海螺壳属于贝壳，这里用一个字表示：——。',
                homeTip: '自然遇到博物馆贝壳图册时，听孩子原来的说法，不摆图要求配对、不读字提示；不捡活海螺。',
                game: {
                    type: 'sort', title: '贝壳照片索引', instruction: '根据每张照片的文字名称，放到同名的照片页。',
                    success: '三张照片已经按名称放进对应页。', safety: '分类的是照片，不搬动贝壳，不采集活体。',
                    pieces: [{label: '透明展柜里完整的空海螺壳', variant: 0, photo: true}, {label: '卷卷的海螺壳', variant: 1, photo: true}, {label: '两片相合的蛤蜊壳', variant: 2, photo: true}],
                    targets: [{label: '透明展柜照片页', x: 22, y: 62}, {label: '卷卷海螺壳照片页', x: 50, y: 62}, {label: '相合蛤蜊壳照片页', x: 78, y: 62}], matches: [0, 1, 2]
                }
            },
            {
                id: 'seaside-shell-04', baseId: 'shell', title: '贝壳观察台添好边框',
                partner: '海岸科普馆老师', item: '贝壳观察台布置页',
                mission: '“请在屏幕上给空贝壳观察台配好托垫和边框！”',
                sceneLabel: '观察台上成对摊开的空蛤蜊壳',
                sceneDescription: 'Photorealistic tabletop exhibit in a coastal science museum showing two empty matching clam shell halves laid open side by side on a flat gray observation mat. Both intact shells are the clear central subject with generous surrounding space, soft daylight, no tissue, tools, people or text.',
                actionLabel: '拼好观察台布置示意', actionResult: '托垫、左边框和右边框的示意卡放好了。',
                application: '给观察台上摊开的空蛤蜊壳照片放“贝”字牌。',
                ending: '老师照着布置页整理展台，空贝壳仍由馆员保管。',
                cloze: '两片摊开的空壳都是贝壳，这里用一个字表示：——。',
                homeTip: '孩子自然看展馆照片时，听自己的发现，不提醒贝壳名称、不安排补句；不收集活贝或随意拿展品。',
                game: {
                    type: 'build', title: '观察台边框拼搭', instruction: '把三张布置示意卡放到标出的对应位置，不用按顺序。',
                    success: '屏幕观察台的布置示意完整了。', safety: '这是屏幕布置图，真实展台和贝壳只由馆员处理。',
                    pieces: [{label: '托垫示意卡', variant: 0, photo: false}, {label: '左边框示意卡', variant: 0, photo: false}, {label: '右边框示意卡', variant: 0, photo: false}],
                    targets: [{label: '托垫位置', x: 50, y: 72}, {label: '左边框位置', x: 20, y: 48}, {label: '右边框位置', x: 80, y: 48}], matches: [0, 1, 2]
                }
            },
            {
                id: 'seaside-sand-01', baseId: 'sand', title: '沙纹展盒搭好展示底座',
                partner: '海岸地质馆老师', item: '沙纹展盒底座页',
                mission: '“请拼好展盒底座，让大家看清沙上的波纹！”',
                sceneLabel: '展盒里带浅浅波纹的沙',
                sceneDescription: 'Photorealistic close view of a shallow rectangular museum display tray filled with pale coastal sand shaped into low parallel ripple ridges. The sand grains and ripples are clear, the whole tray centered with safe margins on an indoor exhibit table, no water access, people or text.',
                actionLabel: '拼好沙纹底座示意', actionResult: '底板和两块支撑卡都放到了对应位置。',
                application: '给展盒里带波纹的沙照片放“沙”字牌。',
                ending: '老师把底座页收好，大家隔着展盒看沙纹。',
                cloze: '展盒里细小的颗粒聚在一起，形成了——。',
                homeTip: '自然看沙纹照片时，听孩子怎样说，不指沙、不问字音；不扬沙，不带孩子到水边验证。',
                game: {
                    type: 'build', title: '沙纹展盒底座', instruction: '把底板、左支撑和右支撑示意卡放到各自位置。',
                    success: '展盒底座示意拼好了，照片里的沙没有被移动。', safety: '仅屏幕拼搭；真实展盒由成人安放，不扬沙、不把沙放入口中。',
                    pieces: [{label: '底板示意卡', variant: 0, photo: false}, {label: '左支撑示意卡', variant: 0, photo: false}, {label: '右支撑示意卡', variant: 0, photo: false}],
                    targets: [{label: '底板位置', x: 50, y: 72}, {label: '左支撑位置', x: 25, y: 52}, {label: '右支撑位置', x: 75, y: 52}], matches: [0, 1, 2]
                }
            },
            {
                id: 'seaside-sand-02', baseId: 'sand', title: '把干燥沙面收进材料册',
                partner: '海边游客中心老师', item: '沙的材料照片页',
                mission: '“请把这张干燥沙面和另外两张沙照片收进材料册！”',
                sceneLabel: '室内沙盘里平铺的干沙',
                sceneDescription: 'Photorealistic close view of fine dry beige sand spread evenly inside a broad shallow indoor sand tray at a coastal visitor center. Individual grains and a gently leveled surface dominate the frame, tray edges visible with generous margins, soft side lighting, no people, water or text.',
                actionLabel: '收好沙的照片', actionResult: '干沙、沙堡和桶旁的沙照片都进了材料册。',
                application: '给室内沙盘里平铺的干沙照片放“沙”字牌。',
                ending: '老师把材料册放回阅读架，沙盘保持盖好。',
                cloze: '室内沙盘里平铺着细细的——。',
                homeTip: '自由翻看沙滩图册时，听孩子主动的描述，不先指照片、不提示答案；无需接触沙或走近海水。',
                game: {
                    type: 'collect', title: '沙材料册收照片', instruction: '将三张沙照片放进材料册，顺序由你决定。',
                    success: '三张沙照片已收进同一册。', safety: '只收照片，不取真实沙样，不扬沙、不入口。',
                    pieces: [{label: '室内沙盘里平铺的干沙', variant: 0, photo: true}, {label: '堆成城堡的沙', variant: 1, photo: true}, {label: '沙滩桶旁铺着的沙', variant: 2, photo: true}],
                    targets: [{label: '沙材料册', x: 50, y: 68}], matches: [0, 0, 0]
                }
            },
            {
                id: 'seaside-sand-03', baseId: 'sand', title: '沙层切面照片装入展页',
                partner: '海岸地质讲解员', item: '沙层切面展页',
                mission: '“请先放展页底卡，再放沙层照片，最后加上保护页！”',
                sceneLabel: '透明展盒里不同浅色层次的沙',
                sceneDescription: 'Photorealistic frontal close view of a sealed clear rectangular museum box displaying horizontal layers of beige, cream and light gray coastal sand. Fine grains remain identifiable through the transparent front, entire box centered on an indoor shelf with broad margins, no people or text.',
                actionLabel: '依次装好沙层展页', actionResult: '底卡、沙层照片和保护页按顺序放好了。',
                application: '给透明展盒里的沙照片放“沙”字牌。',
                ending: '讲解员把展页放到阅读台，沙层留在密封盒里。',
                cloze: '透明盒里一层层细小颗粒的材料是——。',
                homeTip: '自然遇到地质照片时，听孩子自己说，不提示层次或目标字；不安排挖沙、取样或靠近海岸。',
                game: {
                    type: 'sequence', title: '沙层展页装配', instruction: '依次放底卡、沙层照片、保护页，每一步放到同名位置。',
                    success: '沙层展页的三个步骤完成了。', safety: '操作的是屏幕展页，不开盒、不挖沙、不取海岸样本。',
                    pieces: [{label: '展页底卡示意', variant: 0, photo: false}, {label: '透明展盒里不同浅色层次的沙', variant: 0, photo: true}, {label: '保护页示意', variant: 0, photo: false}],
                    targets: [{label: '底卡位置', x: 22, y: 66}, {label: '沙层照片位置', x: 50, y: 66}, {label: '保护页位置', x: 78, y: 66}], matches: [0, 1, 2]
                }
            },
            {
                id: 'seaside-sand-04', baseId: 'sand', title: '揭开风吹沙丘的照片',
                partner: '海岸自然馆老师', item: '沙丘纹路观察页',
                mission: '“请打开沙丘照片，留意沙也能铺成大大的起伏！”',
                sceneLabel: '海岸沙丘表面起伏的沙',
                sceneDescription: 'Photorealistic landscape photograph of low coastal sand dunes with fine wind-made ripple textures across a broad foreground slope. Beige sand is the dominant central subject, distant dune grass near the upper edge, gentle daylight, wide crop-safe composition, no people, sea access or text.',
                actionLabel: '打开沙的场景照片', actionResult: '沙丘、沙堡和桶旁沙面的照片全部展开了。',
                application: '给海岸沙丘表面的沙照片放“沙”字牌。',
                ending: '老师把沙丘页夹回图册，大家在馆里继续看风景。',
                cloze: '照片里沙丘表面细细的材料是——。',
                homeTip: '自然翻到沙丘风景时，听孩子的说法，不先圈纹路或读字；不登沙丘、不靠近水边作验证。',
                game: {
                    type: 'reveal', title: '沙的三张风景窗', instruction: '自由打开六块遮片，看三张完整沙景，不要求找某一道纹路。',
                    success: '三张沙景已展开，可以自由看看。', safety: '只观看屏幕照片，不攀沙丘、不扬沙、不进入海水。',
                    spots: ['海岸沙丘表面起伏的沙照片打开了一部分。', '海岸沙丘表面起伏的沙照片继续展开。', '堆成城堡的沙照片打开了一部分。', '堆成城堡的沙照片继续展开。', '沙滩桶旁铺着的沙照片打开了一部分。', '沙滩桶旁铺着的沙照片继续展开。']
                }
            },
            {
                id: 'seaside-net-01', baseId: 'net', title: '渔网展框拼好四角',
                partner: '渔业博物馆老师', item: '渔网展框布置页',
                mission: '“请在屏幕上拼好展框，让交错的网线有展示位置！”',
                sceneLabel: '博物馆木框上平展的渔网',
                sceneDescription: 'Photorealistic frontal museum view of a clean fishing net stretched flat across a rectangular wooden exhibition frame. Intersecting fibers and open diamond mesh are sharply visible, whole frame centered with generous margins against a neutral indoor wall, no hooks, trapped animals, people or text.',
                actionLabel: '拼好渔网展框示意', actionResult: '上框、下框和侧框组合卡都放到了位置。',
                application: '给木框上平展的渔网照片放“网”字牌。',
                ending: '老师收好布置页，真实渔网仍固定在展框上。',
                cloze: '木框里交错的线留着一个个网眼，结成了——。',
                homeTip: '自然看渔业展览照片时，听孩子原话，不指网眼、不提示字音；不触摸、钻入或拉扯真实网具。',
                game: {
                    type: 'build', title: '渔网展示框', instruction: '把上框、下框、侧框组合示意卡放到对应位置。',
                    success: '屏幕上的渔网展示框示意拼好了。', safety: '仅拼屏幕示意，真网具由成人保管，不捕鱼、不钻网。',
                    pieces: [{label: '上框示意卡', variant: 0, photo: false}, {label: '下框示意卡', variant: 0, photo: false}, {label: '两侧框组合示意卡', variant: 0, photo: false}],
                    targets: [{label: '上框位置', x: 50, y: 22}, {label: '下框位置', x: 50, y: 78}, {label: '侧框组合位置', x: 22, y: 50}], matches: [0, 1, 2]
                }
            },
            {
                id: 'seaside-net-02', baseId: 'net', title: '海边球场的网分进图册',
                partner: '海滨运动馆老师', item: '排球网与球门网照片页',
                mission: '“请把排球网照片放到排球页，把球门网照片放到足球页！”',
                sceneLabel: '海滨沙地球场中间的排球网',
                sceneDescription: 'Photorealistic view of a taut volleyball net between two upright poles on an empty coastal sand sports court. The entire net and its rectangular mesh dominate the centered frame with crop-safe margins, a distant promenade in the background, calm daylight, no players, water activity or text.',
                actionLabel: '按运动场整理网照片', actionResult: '两张排球网照片进了排球页，一张球门网照片进了足球页。',
                application: '给海滨球场中间的排球网照片放“网”字牌。',
                ending: '老师把两页图册并排摆好，大家在馆里看不同的网。',
                cloze: '排球场中间交错的线结成了——。',
                homeTip: '自然遇到运动图片时，听孩子自己的描述，不提示用途分类、不求配对；不让孩子钻网或拉网。',
                game: {
                    type: 'sort', title: '运动网照片分页', instruction: '按卡上写明的名称，排球网照片放排球页，球门网照片放足球页。',
                    success: '三张网照片按运动场名称放好了。', safety: '分类照片，不接触网具、不捕鱼，真实球场由成人陪伴。',
                    pieces: [{label: '海滨沙地球场中间的排球网', variant: 0, photo: true}, {label: '足球球门上的网', variant: 1, photo: true}, {label: '排球场中间的网', variant: 2, photo: true}],
                    targets: [{label: '排球网照片页', x: 32, y: 66}, {label: '足球球门网照片页', x: 72, y: 66}], matches: [0, 1, 0]
                }
            },
            {
                id: 'seaside-net-03', baseId: 'net', title: '网具陈列页加上保护提醒',
                partner: '渔具展馆管理员', item: '网具陈列保护页',
                mission: '“请先放展页底卡，再放网照片，最后放只看不碰提醒卡！”',
                sceneLabel: '展柜里整齐叠放的干净渔网',
                sceneDescription: 'Photorealistic close museum photograph of a clean fishing net folded neatly on a wide shelf behind glass, with an outer mesh section spread enough to show crossing strands and open mesh. Net is central and fully within the frame, soft indoor light, no fish, hooks, people or text.',
                actionLabel: '依次放好网具陈列卡', actionResult: '底卡、渔网照片和只看不碰提醒卡顺序放好了。',
                application: '给展柜里叠放的渔网照片放“网”字牌。',
                ending: '管理员把陈列页留在柜外，网具继续安全地放在柜内。',
                cloze: '展柜里叠着交错线条结成的渔——。',
                homeTip: '日常翻看展馆照片时，听孩子自然表达，不要求复述提醒或认字；不取网具来演示。',
                game: {
                    type: 'sequence', title: '网具陈列页三步', instruction: '按底卡、网照片、只看不碰提醒卡的顺序放入对应位置。',
                    success: '网具陈列页和保护提醒已放好。', safety: '只操作屏幕卡片，不搬网、不缠网、不捕捉动物。',
                    pieces: [{label: '陈列页底卡示意', variant: 0, photo: false}, {label: '展柜里整齐叠放的干净渔网', variant: 0, photo: true}, {label: '只看不碰提醒示意卡', variant: 0, photo: false}],
                    targets: [{label: '底卡位置', x: 22, y: 68}, {label: '网照片位置', x: 50, y: 68}, {label: '提醒卡位置', x: 78, y: 68}], matches: [0, 1, 2]
                }
            },
            {
                id: 'seaside-boat-01', baseId: 'boat', title: '沿馆内参观图找到木舟',
                partner: '海事博物馆老师', item: '木舟展厅参观页',
                mission: '“请在屏幕参观图上经过入口和走廊，找到木舟展区！”',
                sceneLabel: '海事博物馆里支架上的木划艇',
                sceneDescription: 'Photorealistic wide interior museum view of an intact small wooden rowboat supported securely on low exhibition cradles. Curved hull, wooden seats and complete outline are clearly visible, centered with wide margins in a coastal maritime gallery, no visitors, boarding, water or text.',
                actionLabel: '在屏幕馆图上走到木舟展区', actionResult: '参观标记经过入口和馆内走廊，到达了木舟展区。',
                application: '给博物馆支架上的木划艇照片放“舟”字牌。',
                ending: '老师在展区旁讲船的样子，大家没有登上展品。',
                cloze: '这只木划艇也是船，另一种说法是——。',
                homeTip: '自然看博物馆船照片时，听孩子自己的称呼，不纠正说法、不提示“舟”；不安排登船验证。',
                game: {
                    type: 'route', title: '馆内木舟参观图', instruction: '依次点击入口、馆内走廊和木舟展区三个屏幕标记。',
                    success: '屏幕标记到了木舟展区，参观路线完成。', safety: '仅屏幕室内地图；真实参观由成人陪伴，不登船、不靠近水边。',
                    steps: [{label: '展厅入口', result: '标记到了展厅入口。'}, {label: '馆内走廊', result: '标记沿馆内走廊前进。'}, {label: '木舟展区', result: '标记到了木舟展区旁。'}],
                    targets: [{label: '展厅入口', x: 20, y: 75}, {label: '馆内走廊', x: 50, y: 55}, {label: '木舟展区', x: 78, y: 30}]
                }
            },
            {
                id: 'seaside-boat-02', baseId: 'boat', title: '小帆舟的照片进了航海册',
                partner: '航海馆讲解员', item: '小舟航海照片页',
                mission: '“请把停泊的小帆舟和另两种舟的照片放进航海册！”',
                sceneLabel: '平静港湾里停泊的小帆船',
                sceneDescription: 'Photorealistic harbor photograph of a small unoccupied sailboat moored in calm coastal water, with a clearly visible mast and neatly furled sail. Complete hull centered with broad margins, distant quay softly blurred, viewed from a fixed land vantage, no people, boarding or text.',
                actionLabel: '收集小舟照片', actionResult: '港湾帆船、带帆帆船和独木舟照片收进了同一册。',
                application: '给平静港湾里停泊的小帆船照片放“舟”字牌。',
                ending: '讲解员把航海册留在馆里，照片中的小舟仍安静停泊。',
                cloze: '小帆船是船，这里也可以称为——。',
                homeTip: '自然翻看船图册时，听孩子自己的说法，不指定照片、不先读字；不去码头或乘船考查。',
                game: {
                    type: 'collect', title: '小舟航海册', instruction: '把三张小舟照片放进航海册，顺序不限。',
                    success: '小舟照片已收好，这不是实际航行。', safety: '仅收屏幕照片，不解缆、不登船、不接近码头水边。',
                    pieces: [{label: '平静港湾里停泊的小帆船', variant: 0, photo: true}, {label: '带船帆的帆船', variant: 1, photo: true}, {label: '细长的独木舟', variant: 2, photo: true}],
                    targets: [{label: '小舟航海册', x: 50, y: 66}], matches: [0, 0, 0]
                }
            },
            {
                id: 'seaside-boat-03', baseId: 'boat', title: '独木舟展页拼好留白框',
                partner: '海岸历史馆老师', item: '独木舟展页边框',
                mission: '“请给独木舟照片拼好边框，把整只舟留在画面里！”',
                sceneLabel: '海岸历史馆架上完整的独木舟',
                sceneDescription: 'Photorealistic side view of a long intact dugout canoe displayed on secure low padded supports in a coastal history museum. Narrow wooden hull and hollow interior are both visible, the entire canoe centered with generous end margins, natural wood grain, soft indoor light, no people or text.',
                actionLabel: '拼好独木舟展页边框', actionResult: '左框、右框和下托条示意卡放好了。',
                application: '给历史馆架上的独木舟照片放“舟”字牌。',
                ending: '老师把展页摆到阅读架，独木舟不需要搬动。',
                cloze: '这只细长的独木船，也可以称作——。',
                homeTip: '自由看船的照片时，听孩子想说什么，不先强调长短、不要求认字；真实展品不攀爬、不触摸。',
                game: {
                    type: 'build', title: '独木舟展页框', instruction: '把左框、右框和下托条示意卡放到同名位置。',
                    success: '屏幕展页边框拼好了，整只舟照片仍可浏览。', safety: '只拼屏幕边框，不造真舟、不用工具、不登展品。',
                    pieces: [{label: '左框示意卡', variant: 0, photo: false}, {label: '右框示意卡', variant: 0, photo: false}, {label: '下托条示意卡', variant: 0, photo: false}],
                    targets: [{label: '左框位置', x: 18, y: 50}, {label: '右框位置', x: 82, y: 50}, {label: '下托条位置', x: 50, y: 76}], matches: [0, 1, 2]
                }
            },
            {
                id: 'seaside-ship-01', baseId: 'ship', title: '港口图册区找到客船大照片',
                partner: '港口博物馆老师', item: '客船图册区路线页',
                mission: '“请在馆内屏幕图上走过入口和阅读台，到客船照片墙！”',
                sceneLabel: '港湾里停泊的白色客船',
                sceneDescription: 'Photorealistic coastal harbor photograph of a white passenger ship moored in calm water. Complete hull and several deck levels are clearly centered with broad crop-safe margins, distant port buildings, soft daylight, view from a fixed land position, no identifiable people or text.',
                actionLabel: '在馆图上找到客船照片墙', actionResult: '屏幕标记经过入口和阅读台，到达客船照片墙。',
                application: '给港湾里停泊的白色客船照片放“船”字牌。',
                ending: '老师在照片墙前停下，参观一直留在博物馆里。',
                cloze: '港湾里停泊着一艘载客的——。',
                homeTip: '自然看港口图册时，听孩子主动描述，不先说名称、不要求带路；不安排靠近港口水边。',
                game: {
                    type: 'route', title: '客船图册馆内路线', instruction: '依次点击图册区入口、阅读台和客船照片墙。',
                    success: '屏幕馆图路线已到达客船照片墙。', safety: '仅屏幕室内路线，不进入码头、不登船；真实参观成人陪伴。',
                    steps: [{label: '图册区入口', result: '标记到了图册区入口。'}, {label: '阅读台', result: '标记经过馆内阅读台。'}, {label: '客船照片墙', result: '标记到了客船照片墙。'}],
                    targets: [{label: '图册区入口', x: 20, y: 75}, {label: '阅读台', x: 50, y: 52}, {label: '客船照片墙', x: 78, y: 28}]
                }
            },
            {
                id: 'seaside-ship-02', baseId: 'ship', title: '货船照片配好港口展页',
                partner: '海运馆讲解员', item: '集装箱货船展页',
                mission: '“请依次放底卡、货船照片和展页封签！”',
                sceneLabel: '港湾水面上载着集装箱的货船',
                sceneDescription: 'Photorealistic harbor photograph of a cargo ship carrying orderly stacks of shipping containers on calm coastal water. The full hull, deck cargo and bridge are distinct and centered with generous margins, viewed from land in daylight, no loading workers, activity hazards or readable text.',
                actionLabel: '依次装好货船展页', actionResult: '底卡、货船照片和封签卡都按顺序放好了。',
                application: '给载着集装箱的货船照片放“船”字牌。',
                ending: '讲解员把展页放进海运图册，大家只在馆内看照片。',
                cloze: '水上运送货物的交通工具是货——。',
                homeTip: '自然遇到运输照片时，听孩子自己的描述，不先强调用途或读字；不进入港口作业区验证。',
                game: {
                    type: 'sequence', title: '货船展页装配', instruction: '依次把底卡、货船照片、封签示意卡放进对应位置。',
                    success: '货船展页的三个步骤已完成。', safety: '仅屏幕展页，不装卸货物、不操作船舶、不进入港口作业区。',
                    pieces: [{label: '货船展页底卡示意', variant: 0, photo: false}, {label: '港湾水面上载着集装箱的货船', variant: 0, photo: true}, {label: '展页封签示意卡', variant: 0, photo: false}],
                    targets: [{label: '底卡位置', x: 22, y: 68}, {label: '货船照片位置', x: 50, y: 68}, {label: '封签位置', x: 78, y: 68}], matches: [0, 1, 2]
                }
            },
            {
                id: 'seaside-ship-03', baseId: 'ship', title: '海湾渡船照片找到同名页',
                partner: '海湾交通馆老师', item: '渡船与货船索引页',
                mission: '“请把卡上写着渡船的照片放渡船页，货船照片放货船页！”',
                sceneLabel: '海湾里航行的双头渡船',
                sceneDescription: 'Photorealistic photograph of a double-ended coastal ferry traveling across a calm bay, showing its complete broad hull and enclosed passenger cabin. Vessel centered with generous margins, a modest wake and distant hills, daylight, no identifiable passengers, close water viewpoint or text.',
                actionLabel: '按船的名称分照片', actionResult: '两张渡船照片进了渡船页，一张货船照片进了货船页。',
                application: '给海湾里航行的渡船照片放“船”字牌。',
                ending: '老师把索引页夹入图册，航行只留在照片里。',
                cloze: '照片里在海湾运送乘客的渡——正在航行。',
                homeTip: '自然翻看船图册时，听孩子怎么称呼，不考渡船和货船的区别、不先读字；不安排乘船验证。',
                game: {
                    type: 'sort', title: '船的同名照片页', instruction: '按照片卡上已有的名称，渡船进渡船页，货船进货船页。',
                    success: '三张船照片已按名称放好。', safety: '这是照片分类，不是航行、泊船或登船操作。',
                    pieces: [{label: '海湾里航行的双头渡船', variant: 0, photo: true}, {label: '水上的货船', variant: 1, photo: true}, {label: '水上的渡船', variant: 2, photo: true}],
                    targets: [{label: '渡船照片页', x: 32, y: 66}, {label: '货船照片页', x: 72, y: 66}], matches: [0, 1, 0]
                }
            },
            {
                id: 'seaside-water-01', baseId: 'water', title: '从馆里展开海湾水面',
                partner: '海岸科普馆老师', item: '海湾水面观察页',
                mission: '“请打开海湾照片，看看宽宽的水面！”',
                sceneLabel: '海湾里带轻轻波纹的水',
                sceneDescription: 'Photorealistic landscape photograph of a calm sheltered coastal bay with blue-green water and gentle surface ripples filling most of the frame. Distant shore confined to the upper background, centered open water with wide margins, view from an elevated fixed land vantage, no people or text.',
                actionLabel: '展开水的三张照片', actionResult: '海湾、杯子和碗里的水照片都展开了。',
                application: '给海湾里带波纹的水照片放“水”字牌。',
                ending: '老师把观察页放在馆里，提醒海水不能直接喝。',
                cloze: '海湾里轻轻起波纹的是——。',
                homeTip: '自然看海景照片时，听孩子自己的说法，不指水、不追问；不带孩子靠近海水，不尝海水。',
                game: {
                    type: 'reveal', title: '海湾水面观察窗', instruction: '自由打开六块遮片，看三张水照片，不要求点中某条波纹。',
                    success: '三张水照片都展开了。', safety: '仅看照片，海水不能直接喝；不走近水边、不伸手取水。',
                    spots: ['海湾里带轻轻波纹的水照片打开了一部分。', '海湾里带轻轻波纹的水照片继续展开。', '杯子里的水照片打开了一部分。', '杯子里的水照片继续展开。', '碗里的水照片打开了一部分。', '碗里的水照片继续展开。']
                }
            },
            {
                id: 'seaside-water-02', baseId: 'water', title: '波浪展箱照片收进水册',
                partner: '海洋科学馆老师', item: '波浪展箱照片页',
                mission: '“请把密封展箱里水的照片和杯碗里的水收进一册！”',
                sceneLabel: '密封透明波浪展箱里的水',
                sceneDescription: 'Photorealistic close view of a sealed transparent rectangular wave demonstration tank in an indoor marine science museum. Clear water fills the lower half with a visible gently curved surface and empty space above, whole tank centered with generous margins, no people, controls being operated or text.',
                actionLabel: '把水照片收进展册', actionResult: '展箱、杯子和碗里的水照片都放入了展册。',
                application: '给密封波浪展箱里的水照片放“水”字牌。',
                ending: '老师把展册放到低矮阅读台，设备仍由馆员照管。',
                cloze: '透明波浪展箱里装着会流动的——。',
                homeTip: '日常自然看科学图册时，听孩子的描述，不提示字、不要求演示；不让孩子开箱、玩设备或取水。',
                game: {
                    type: 'collect', title: '水的展册收照片', instruction: '把三张水照片放进展册格，顺序不限。',
                    success: '三张水照片已收进展册。', safety: '只操作屏幕照片，不操作波浪设备，不取展箱里的水。',
                    pieces: [{label: '密封透明波浪展箱里的水', variant: 0, photo: true}, {label: '杯子里的水', variant: 1, photo: true}, {label: '碗里的水', variant: 2, photo: true}],
                    targets: [{label: '水的展册格', x: 50, y: 68}], matches: [0, 0, 0]
                }
            },
            {
                id: 'seaside-water-03', baseId: 'water', title: '浪花照片加好不饮用标记',
                partner: '海滨游客中心老师', item: '海水照片提醒页',
                mission: '“请先放海水照片，再加不饮用提醒，最后放好保护页！”',
                sceneLabel: '海面上带白色浪花的水',
                sceneDescription: 'Photorealistic coastal photograph of blue seawater forming a low rolling wave with a clear band of white foam. Water and foam dominate the center, no beach access point or people, viewed with a telephoto lens from a fixed land position, natural daylight, generous margins, no text.',
                actionLabel: '依次放好海水提醒页', actionResult: '海水照片、不饮用提醒卡和保护页按顺序放好了。',
                application: '给海面上带浪花的水照片放“水”字牌。',
                ending: '老师把提醒页留在室内图册旁，大家不用走到海边。',
                cloze: '白色浪花下流动着海——。',
                homeTip: '自然遇到浪花照片时，听孩子自己的话，不要求补句、不先说字音；不玩浪、不取海水、不尝海水。',
                game: {
                    type: 'sequence', title: '海水提醒页三步', instruction: '依次放海水照片、不饮用提醒示意卡、保护页示意卡。',
                    success: '海水照片的提醒页已装好。', safety: '仅屏幕排页；海水不可直接饮用，不接近浪区、不下水。',
                    pieces: [{label: '海面上带白色浪花的水', variant: 0, photo: true}, {label: '不饮用提醒示意卡', variant: 0, photo: false}, {label: '保护页示意卡', variant: 0, photo: false}],
                    targets: [{label: '海水照片位置', x: 22, y: 68}, {label: '不饮用提醒位置', x: 50, y: 68}, {label: '保护页位置', x: 78, y: 68}], matches: [0, 1, 2]
                }
            },
            {
                id: 'seaside-wind-01', baseId: 'wind', title: '海岸风向袋照片打开了',
                partner: '海岸气象馆老师', item: '风向袋观察页',
                mission: '“请打开照片，看看风吹起风向袋的样子！”',
                sceneLabel: '海岸气象站被风吹起的风向袋',
                sceneDescription: 'Photorealistic view of an orange fabric windsock extended gently by moving air on a short weather-station pole near a coastal observation building. Entire windsock centered with broad margins against a pale sky, fabric folds visible, no people, storm conditions, access hazards or text.',
                actionLabel: '揭开风吹过的照片', actionResult: '风向袋、窗帘和蓝色旗帜的照片都展开了。',
                application: '给被风吹起的风向袋照片放“风”字牌，表示流动的空气。',
                ending: '老师把观察页留在室内，风向袋的变化只在照片里观看。',
                cloze: '让风向袋轻轻飘起的流动空气是——。',
                homeTip: '自然看到风景照片时，听孩子自己的感受，不指飘动物、不读字提示；大风留在室内。',
                game: {
                    type: 'reveal', title: '风的照片窗', instruction: '自由打开六块遮片，看风吹动物体的三张照片，不找隐藏小点。',
                    success: '三张风的场景照片都展开了，空气本身通常看不见。', safety: '只看照片，不到气象设备旁，不追风中物品；大风留在室内。',
                    spots: ['海岸气象站被风吹起的风向袋照片打开了一部分。', '海岸气象站被风吹起的风向袋照片继续展开。', '被风吹起的窗帘照片打开了一部分。', '被风吹起的窗帘照片继续展开。', '被风吹起的蓝色旗帜照片打开了一部分。', '被风吹起的蓝色旗帜照片继续展开。']
                }
            },
            {
                id: 'seaside-wind-02', baseId: 'wind', title: '海滨飘带进了风的图页',
                partner: '海滨科普馆老师', item: '风的飘动场景页',
                mission: '“请把飘动场景照片放到照片页，把页名卡放到标题格！”',
                sceneLabel: '海滨观测杆上被风吹起的布飘带',
                sceneDescription: 'Photorealistic close view of several short fabric ribbons attached to a coastal observation pole, extending gently sideways in a light breeze. Ribbons are fully visible and centered with generous margins, a distant seaside visitor building softly blurred, no people, loose litter or text.',
                actionLabel: '分好风景照片和页名卡', actionResult: '三张飘动场景照片进了照片页，页名卡放在标题格。',
                application: '给被风吹起的布飘带照片放“风”字牌，表示吹动它们的空气。',
                ending: '老师把照片页放回图册，大家不追逐或拉扯真实飘带。',
                cloze: '吹动观测杆上布飘带的流动空气是——。',
                homeTip: '日常自然遇到微风时，听孩子自己的话，不先指飘带或给字音；不为活动制造强风，大风不外出。',
                game: {
                    type: 'sort', title: '风景照片与标题格', instruction: '有照片的卡放照片页，写着页名示意的卡放标题格。',
                    success: '飘动照片与页名卡分别放好了。', safety: '只分类屏幕卡，不拉扯飘带、不接近观测杆，不在大风里活动。',
                    pieces: [{label: '海滨观测杆上被风吹起的布飘带', variant: 0, photo: true}, {label: '被风吹起的窗帘', variant: 1, photo: true}, {label: '被风吹起的蓝色旗帜', variant: 2, photo: true}, {label: '风景照片页名示意卡', variant: 0, photo: false}],
                    targets: [{label: '飘动场景照片页', x: 32, y: 66}, {label: '页名标题格', x: 72, y: 66}], matches: [0, 0, 0, 1]
                }
            },
            {
                id: 'seaside-wind-03', baseId: 'wind', title: '馆内地图走到海风照片墙',
                partner: '海岸气象馆讲解员', item: '海风照片墙参观页',
                mission: '“请在屏幕馆图上经过入口和气象图册台，找到海风照片墙！”',
                sceneLabel: '海岸步道旁被风吹弯的草叶',
                sceneDescription: 'Photorealistic landscape close view of coastal grass beside a level promenade, with long leaves bending together in a gentle breeze. Bent green blades are centered and clear with generous margins, distant visitor-center wall and pale sky, no people, storms, cliff edges or text.',
                actionLabel: '在馆图上走到海风照片墙', actionResult: '屏幕标记经过入口和气象图册台，到达了海风照片墙。',
                application: '给海岸被风吹弯的草叶照片放“风”字牌，表示吹动草叶的空气。',
                ending: '讲解员在馆里展开照片，大风天气也不需要外出。',
                cloze: '让草叶轻轻弯向一边的流动空气是——。',
                homeTip: '自然看气象图片时，听孩子自发描述，不问是什么吹动草叶、不先读字；不在大风中验证。',
                game: {
                    type: 'route', title: '馆内海风照片墙路线', instruction: '依次点入口、气象图册台、海风照片墙三个馆内标记。',
                    success: '屏幕标记到了海风照片墙。', safety: '这是馆内屏幕路线，不走海岸风口，不追物品；真实参观成人陪伴。',
                    steps: [{label: '气象馆入口', result: '标记到了气象馆入口。'}, {label: '气象图册台', result: '标记经过馆内气象图册台。'}, {label: '海风照片墙', result: '标记到了海风照片墙。'}],
                    targets: [{label: '气象馆入口', x: 20, y: 75}, {label: '气象图册台', x: 50, y: 53}, {label: '海风照片墙', x: 78, y: 28}]
                }
            },
            {
                id: 'seaside-cloud-01', baseId: 'cloud', title: '港湾上空白云收进天气册',
                partner: '海岸气象馆老师', item: '港湾白云天气页',
                mission: '“请把港湾上空和另外两处的云照片收进天气册！”',
                sceneLabel: '港湾上空一团团的白云',
                sceneDescription: 'Photorealistic coastal landscape with distinct white cumulus clouds above a small calm harbor. Puffy clouds dominate the central upper frame, a thin strip of quay and water below provides context, balanced daylight and generous crop-safe margins, no people or text.',
                actionLabel: '收好三张云照片', actionResult: '港湾、房子和海面上方的云照片都进了天气册。',
                application: '给港湾上空的白云照片放“云”字牌。',
                ending: '老师把天气册摆在馆内，大家可以坐着看不同地方的云。',
                cloze: '港湾上空飘着一团团白——。',
                homeTip: '自然看天气图片时，听孩子自由描述，不先指白云、不求形状答案；不安排去海边观察。',
                game: {
                    type: 'collect', title: '港湾天气册', instruction: '把三张云照片放进天气册格，先后不限。',
                    success: '三处的云照片已收进天气册。', safety: '只看照片，雷雨和大风留在室内，不攀高看云。',
                    pieces: [{label: '港湾上空一团团的白云', variant: 0, photo: true}, {label: '房子上方的云', variant: 1, photo: true}, {label: '海面上方的云', variant: 2, photo: true}],
                    targets: [{label: '云的天气册格', x: 50, y: 68}], matches: [0, 0, 0]
                }
            },
            {
                id: 'seaside-cloud-02', baseId: 'cloud', title: '展开海岛上方的层云',
                partner: '海洋气象馆讲解员', item: '海岛层云照片页',
                mission: '“请揭开照片，看看海岛上方连成一片的云！”',
                sceneLabel: '海岛上方连成一片的灰白云',
                sceneDescription: 'Photorealistic coastal landscape showing a continuous gray-white stratus cloud layer clearly above a distant low island and calm sea. Cloud deck occupies most of the frame with its soft lower boundary visible, wide centered composition, no fog obscuring the subject, people, storms or text.',
                actionLabel: '展开云的场景照片', actionResult: '海岛、房子和海面上方的云照片全部展开了。',
                application: '给海岛上方连成一片的云照片放“云”字牌。',
                ending: '讲解员把层云页夹回图册，灰白的云也有自己的观察页。',
                cloze: '海岛上方连成一片的灰白色景物是——。',
                homeTip: '自然遇到多云风景时，听孩子自己谈，不先说云的类型、不追问；不在恶劣天气外出验证。',
                game: {
                    type: 'reveal', title: '海岛云层观察窗', instruction: '自由打开六块遮片，看三张完整云景，不寻找指定的小形状。',
                    success: '三张云景都展开了。', safety: '仅看馆内照片，不出海、不攀高，雷雨留在室内。',
                    spots: ['海岛上方连成一片的灰白云照片打开了一部分。', '海岛上方连成一片的灰白云照片继续展开。', '房子上方的云照片打开了一部分。', '房子上方的云照片继续展开。', '海面上方的云照片打开了一部分。', '海面上方的云照片继续展开。']
                }
            },
            {
                id: 'seaside-cloud-03', baseId: 'cloud', title: '海岸高云照片找到地点页',
                partner: '天气图册管理员', item: '海岸高云地点索引页',
                mission: '“请按卡上的地点名称，把三张云照片放到对应页！”',
                sceneLabel: '海岸沙丘上方细丝状的云',
                sceneDescription: 'Photorealistic landscape photograph of thin wispy cirrus clouds spread across a blue sky over low coastal sand dunes. Fine white cloud strands are clearly visible and dominate the centered sky area, dunes limited to the bottom, generous margins, no people, water access or text.',
                actionLabel: '按地点整理云照片', actionResult: '沙丘、房子和海面的云照片各自放到了地点页。',
                application: '给海岸沙丘上方细丝状的云照片放“云”字牌。',
                ending: '管理员把索引页插进图册，地点名称帮助大家浏览照片。',
                cloze: '沙丘上方天空里细丝状的白色景物是——。',
                homeTip: '自然翻看天气图册时，听孩子自己的发现，不圈出细丝、不让孩子分类作答；不爬沙丘看云。',
                game: {
                    type: 'sort', title: '云照片地点页', instruction: '依据卡上已有的地点名称，分别放入沙丘、房子、海面照片页。',
                    success: '三张云照片已按地点名称放好。', safety: '只分类屏幕照片，不离开成人去寻找地点，不攀沙丘。',
                    pieces: [{label: '海岸沙丘上方细丝状的云', variant: 0, photo: true}, {label: '房子上方的云', variant: 1, photo: true}, {label: '海面上方的云', variant: 2, photo: true}],
                    targets: [{label: '沙丘上方云照片页', x: 22, y: 66}, {label: '房子上方云照片页', x: 50, y: 66}, {label: '海面上方云照片页', x: 78, y: 66}], matches: [0, 1, 2]
                }
            },
            {
                id: 'seaside-sun-01', baseId: 'sun', title: '海上日出照片装好保护页',
                partner: '海岸摄影馆老师', item: '海上日出图册页',
                mission: '“请依次放底卡、日出照片和保护页，只在图册里看太阳！”',
                sceneLabel: '海平线上刚升起的太阳',
                sceneDescription: 'Photorealistic sunrise photograph with the complete orange solar disk just above a calm sea horizon and a soft reflection on the water. Sun clearly centered with generous margins, natural warm dawn colors, an image composed for indoor viewing, no people or text.',
                actionLabel: '依次装好日出展页', actionResult: '底卡、日出照片和保护页都按顺序放好了。',
                application: '给海平线上刚升起的太阳照片放“日”字牌。',
                ending: '老师把展页放进图册，大家不需要直视真实太阳。',
                cloze: '这里把照片里的太阳用一个字表示：——。',
                homeTip: '自然翻看日出照片时，听孩子自己的说法，不先指太阳、不读字提示；绝不直视太阳或用镜头看太阳。',
                game: {
                    type: 'sequence', title: '日出照片保护页', instruction: '依次把底卡、日出照片、保护页示意卡放进对应位置。',
                    success: '日出展页已装好，可以安全地看照片。', safety: '仅看屏幕照片，不直视太阳，不用望远镜或相机对准太阳。',
                    pieces: [{label: '日出展页底卡示意', variant: 0, photo: false}, {label: '海平线上刚升起的太阳', variant: 0, photo: true}, {label: '保护页示意卡', variant: 0, photo: false}],
                    targets: [{label: '底卡位置', x: 22, y: 68}, {label: '日出照片位置', x: 50, y: 68}, {label: '保护页位置', x: 78, y: 68}], matches: [0, 1, 2]
                }
            },
            {
                id: 'seaside-sun-02', baseId: 'sun', title: '港湾落日收进太阳照片册',
                partner: '海滨摄影馆讲解员', item: '港湾落日照片页',
                mission: '“请把港湾落日和另外两张太阳照片收进一册！”',
                sceneLabel: '港湾上方傍晚的太阳',
                sceneDescription: 'Photorealistic sunset image of a fully visible warm orange sun above the distant horizon of a quiet coastal harbor, with small moored boats below. Sun remains a distinct centered subject with wide crop-safe margins, gentle evening colors, indoor photo reference, no people or text.',
                actionLabel: '收好太阳照片', actionResult: '港湾、海面和田野上方的太阳照片都进了照片册。',
                application: '给港湾上方傍晚的太阳照片放“日”字牌。',
                ending: '讲解员把落日页留在室内，大家可以随时翻看。',
                cloze: '照片里傍晚的太阳，这里用一个字表示：——。',
                homeTip: '自然看日落图册时，听孩子自己的描述，不指太阳、不问字音；不把看真太阳作为活动，绝不直视。',
                game: {
                    type: 'collect', title: '太阳照片册', instruction: '把三张太阳照片放进照片册，顺序不限。',
                    success: '三张太阳照片已收好。', safety: '只看屏幕照片，不直视太阳，不用任何光学设备观日。',
                    pieces: [{label: '港湾上方傍晚的太阳', variant: 0, photo: true}, {label: '海面上方的太阳', variant: 1, photo: true}, {label: '田野上方的太阳', variant: 2, photo: true}],
                    targets: [{label: '太阳照片册格', x: 50, y: 68}], matches: [0, 0, 0]
                }
            },
            {
                id: 'seaside-moon-01', baseId: 'moon', title: '灯塔上方月亮展开了',
                partner: '海岸夜景馆老师', item: '灯塔月亮夜景页',
                mission: '“请在馆里揭开夜景照片，看看灯塔上方的月亮！”',
                sceneLabel: '海岸灯塔上方圆圆的月亮',
                sceneDescription: 'Photorealistic coastal twilight photograph of a round moon with visible lunar shading above a small distant lighthouse. Moon is clearly distinct from the lighthouse lamp and centered in an open sky area with generous margins, quiet shoreline below, no people, water access or text.',
                actionLabel: '揭开月亮夜景照片', actionResult: '灯塔、湖面和屋顶上方的月亮照片都展开了。',
                application: '给灯塔上方圆圆的月亮照片放“月”字牌。',
                ending: '老师把夜景页放在白天也能浏览的馆内图册里。',
                cloze: '灯塔上方圆圆的月亮，这里用一个字表示：——。',
                homeTip: '自然翻看月夜照片时，听孩子自己的话，不先指月亮、不要求补句；不去夜间水边或攀登灯塔。',
                game: {
                    type: 'reveal', title: '灯塔月亮夜景窗', instruction: '自由打开六块遮片，看完整夜景，不要求点中小月亮的位置。',
                    success: '三张月亮夜景都展开了。', safety: '只看室内屏幕照片，不夜行到水边，不攀灯塔。',
                    spots: ['海岸灯塔上方圆圆的月亮照片打开了一部分。', '海岸灯塔上方圆圆的月亮照片继续展开。', '湖面上方的月亮照片打开了一部分。', '湖面上方的月亮照片继续展开。', '屋顶上方的月亮照片打开了一部分。', '屋顶上方的月亮照片继续展开。']
                }
            },
            {
                id: 'seaside-moon-02', baseId: 'moon', title: '馆内小地图找到海湾月牙页',
                partner: '海湾天象馆老师', item: '海湾月牙图册路线页',
                mission: '“请在屏幕馆图上经过入口和夜景台，到月牙图册架！”',
                sceneLabel: '海湾上方弯弯的月亮',
                sceneDescription: 'Photorealistic twilight landscape of a clear crescent moon above a sheltered coastal bay. Crescent is large enough to recognize and wholly inside the centered sky area, distant coastline below, soft blue evening light, generous crop-safe margins, no people, night activity or text.',
                actionLabel: '在馆图上找到月牙图册架', actionResult: '屏幕标记经过入口和夜景台，到达了月牙图册架。',
                application: '给海湾上方弯弯的月亮照片放“月”字牌。',
                ending: '老师从馆内书架取下月牙页，大家不必夜间外出。',
                cloze: '海湾上方弯弯的月亮，这里用一个字表示：——。',
                homeTip: '孩子自由看月亮图册时，听自己的描述，不提示圆缺或字音；不安排夜间海边活动来考查。',
                game: {
                    type: 'route', title: '月牙图册馆内路线', instruction: '依次点击馆内入口、夜景台和月牙图册架三个标记。',
                    success: '屏幕标记到了月牙图册架。', safety: '仅屏幕室内地图；真实参观成人陪伴，不去夜间海边、不攀高。',
                    steps: [{label: '天象馆入口', result: '标记到了天象馆入口。'}, {label: '夜景阅读台', result: '标记经过馆内夜景阅读台。'}, {label: '月牙图册架', result: '标记到了月牙图册架。'}],
                    targets: [{label: '天象馆入口', x: 20, y: 75}, {label: '夜景阅读台', x: 50, y: 52}, {label: '月牙图册架', x: 78, y: 28}]
                }
            },
            {
                id: 'seaside-stone-01', baseId: 'stone', title: '海岸岩石标本拼好展示托架',
                partner: '海岸地质馆老师', item: '岩石标本托架页',
                mission: '“请拼好屏幕托架，让展馆岩石标本有布置位置！”',
                sceneLabel: '地质展台上带浅色条纹的石头',
                sceneDescription: 'Photorealistic close view of a complete coastal rock specimen with pale mineral bands displayed on a low padded museum pedestal. Rough stone texture and natural bands are visible, specimen centered with generous margins, neutral indoor background, no hands, tools, loose fragments or text.',
                actionLabel: '拼好石头托架示意', actionResult: '底板、左托块和右托块示意卡都放好了。',
                application: '给地质展台上带条纹的石头照片放“石”字牌。',
                ending: '老师收下布置页，沉重的标本仍由馆员安放。',
                cloze: '展台上有浅色条纹的坚硬标本是一块——。',
                homeTip: '自然看地质图册时，听孩子自己的发现，不指条纹、不读字提示；不搬石、不敲石、不捡小石入口。',
                game: {
                    type: 'build', title: '岩石展示托架', instruction: '把底板、左托块、右托块示意卡放到对应位置。',
                    success: '岩石标本的屏幕托架示意拼好了。', safety: '只拼示意卡，不搬真石头、不使用工具，标本交给成人。',
                    pieces: [{label: '托架底板示意卡', variant: 0, photo: false}, {label: '左托块示意卡', variant: 0, photo: false}, {label: '右托块示意卡', variant: 0, photo: false}],
                    targets: [{label: '底板位置', x: 50, y: 76}, {label: '左托块位置', x: 25, y: 55}, {label: '右托块位置', x: 75, y: 55}], matches: [0, 1, 2]
                }
            },
            {
                id: 'seaside-stone-02', baseId: 'stone', title: '圆石标本照片和说明卡分格',
                partner: '海岸地质展馆管理员', item: '圆石标本索引页',
                mission: '“请把石头照片放照片格，把说明示意卡放说明格！”',
                sceneLabel: '封闭展柜里几块圆润的海岸石头',
                sceneDescription: 'Photorealistic museum photograph of several smooth rounded coastal stones displayed on a flat gray specimen mat behind glass. Complete stones in muted gray and brown tones centered with generous margins, polished natural surfaces visible, soft indoor light, no people, handling or text.',
                actionLabel: '分好石头照片和说明卡', actionResult: '三张石头照片进了照片格，说明卡进了说明格。',
                application: '给展柜里圆润的海岸石头照片放“石”字牌。',
                ending: '管理员把索引页夹好，石头留在展柜中。',
                cloze: '封闭展柜里圆润而坚硬的标本是——。',
                homeTip: '自由看石头照片时，听孩子自己的话，不问圆不圆、不提示答案；不去海岸捡拾或搬动石头。',
                game: {
                    type: 'sort', title: '石头索引分格', instruction: '有照片的卡放照片格，说明示意卡放说明格。',
                    success: '石头照片和说明卡已分格放好。', safety: '仅屏幕卡片分类，不拾石、不搬石、不把小物放入口中。',
                    pieces: [{label: '封闭展柜里几块圆润的海岸石头', variant: 0, photo: true}, {label: '花园里铺路的石头', variant: 1, photo: true}, {label: '池塘里的石头', variant: 2, photo: true}, {label: '标本说明示意卡', variant: 0, photo: false}],
                    targets: [{label: '石头照片格', x: 32, y: 66}, {label: '标本说明格', x: 72, y: 66}], matches: [0, 0, 0, 1]
                }
            },
            {
                id: 'seaside-stone-03', baseId: 'stone', title: '海岸岩柱照片收进石头册',
                partner: '海岸地质馆讲解员', item: '岩柱风景照片页',
                mission: '“请把海岸岩柱和花园、池塘里的石头照片收进一册！”',
                sceneLabel: '海岸地质照片里成排的柱状石头',
                sceneDescription: 'Photorealistic coastal geology photograph of closely packed natural basalt columns forming a low rock outcrop. Complete polygonal stone faces and vertical joints dominate the centered frame with generous margins, a narrow distant sea strip gives coastal context, no people, climbing or text.',
                actionLabel: '收好不同地点的石头照片', actionResult: '岩柱、花园和池塘里的石头照片都进了图册。',
                application: '给海岸成排的柱状石头照片放“石”字牌。',
                ending: '讲解员把岩柱页放在馆里，大家不用攀爬真实岩柱。',
                cloze: '照片里成排的坚硬岩柱由——组成。',
                homeTip: '自然看地质风景时，听孩子原话，不先指岩柱、不要求认字；不攀岩、不走到海岸礁石上。',
                game: {
                    type: 'collect', title: '石头地点照片册', instruction: '把三张石头照片放进同一个图册格，顺序不限。',
                    success: '三处石头照片收好了。', safety: '只收屏幕照片，不攀岩柱、不下礁石、不接近水边。',
                    pieces: [{label: '海岸地质照片里成排的柱状石头', variant: 0, photo: true}, {label: '花园里铺路的石头', variant: 1, photo: true}, {label: '池塘里的石头', variant: 2, photo: true}],
                    targets: [{label: '石头地点图册格', x: 50, y: 68}], matches: [0, 0, 0]
                }
            },
            {
                id: 'seaside-fish-01', baseId: 'fish', title: '水族馆的礁鱼照片展开了',
                partner: '海洋水族馆老师', item: '礁鱼观察照片页',
                mission: '“请打开馆里的照片，看看鱼在水中自然游动！”',
                sceneLabel: '海洋水族箱里游动的条纹鱼',
                sceneDescription: 'Photorealistic aquarium photograph of one striped marine reef fish swimming naturally in clear water inside a maintained marine display tank. Complete fish body, fins and tail centered with generous margins, rocks softly blurred behind, no hands, feeding, people or text.',
                actionLabel: '揭开鱼的水中照片', actionResult: '条纹鱼、河里的鱼和水族箱里的鱼照片都展开了。',
                application: '给海洋水族箱里游动的条纹鱼照片放“鱼”字牌。',
                ending: '老师把观察页留在馆里，鱼继续自然游动，不被打扰。',
                cloze: '水族箱里用鳍和尾巴游动的动物是——。',
                homeTip: '自然看水族箱图片时，听孩子自己的描述，不指鱼、不读字提示；不敲玻璃、不喂食、不捕捉。',
                game: {
                    type: 'reveal', title: '鱼的水中观察窗', instruction: '自由打开六块遮片，看完整照片，不要求点中鱼身某一处。',
                    success: '三张鱼照片都展开了。', safety: '仅看照片，不敲真实水族箱、不喂鱼、不伸手入水。',
                    spots: ['海洋水族箱里游动的条纹鱼照片打开了一部分。', '海洋水族箱里游动的条纹鱼照片继续展开。', '河里游动的鱼照片打开了一部分。', '河里游动的鱼照片继续展开。', '水族箱里的鱼照片打开了一部分。', '水族箱里的鱼照片继续展开。']
                }
            },
            {
                id: 'seaside-fish-02', baseId: 'fish', title: '近海鱼群收进水下图册',
                partner: '海洋自然馆讲解员', item: '近海鱼群照片页',
                mission: '“请把图册里的鱼群和另外两张鱼照片收好！”',
                sceneLabel: '近海水下照片里成群的银色鱼',
                sceneDescription: 'Photorealistic underwater coastal photograph of a small school of silver marine fish swimming naturally in clear blue-green water. Several complete fish bodies with visible fins and tails occupy the center with generous margins, rocky seabed faintly below, no divers, people, nets or text.',
                actionLabel: '收好鱼的水下照片', actionResult: '鱼群、河鱼和水族箱鱼照片都进了图册。',
                application: '给近海水下照片里的银色鱼放“鱼”字牌。',
                ending: '讲解员把照片页交给馆内阅读台，鱼群没有被捕捉。',
                cloze: '水下照片里成群游动的银色动物是——。',
                homeTip: '自由看水下图册时，听孩子自己的话，不用颜色提示、不要求找字；不潜水、不捕捉或收集活鱼。',
                game: {
                    type: 'collect', title: '水下鱼照片册', instruction: '把三张鱼照片放进图册格，先放哪张都可以。',
                    success: '三张鱼照片已收好，没有移动真实动物。', safety: '只收照片，不下水、不捕鱼、不触摸或收集活体。',
                    pieces: [{label: '近海水下照片里成群的银色鱼', variant: 0, photo: true}, {label: '河里游动的鱼', variant: 1, photo: true}, {label: '水族箱里的鱼', variant: 2, photo: true}],
                    targets: [{label: '水下鱼图册格', x: 50, y: 68}], matches: [0, 0, 0]
                }
            },
            {
                id: 'seaside-fish-03', baseId: 'fish', title: '海鱼展页添上安静观看卡',
                partner: '海洋水族馆讲解员', item: '海鱼安静观看展页',
                mission: '“请依次放展页底卡、海鱼照片和不敲玻璃提醒卡！”',
                sceneLabel: '海洋水族箱里自然游动的扁身鱼',
                sceneDescription: 'Photorealistic side view of a disk-shaped marine fish swimming naturally in a clear maintained aquarium. Entire laterally flattened body, fins, eye and tail are centered with broad margins, softly blurred submerged stones behind, natural exhibit lighting, no hands, feeding, people or text.',
                actionLabel: '依次装好海鱼观看页', actionResult: '底卡、海鱼照片和不敲玻璃提醒卡放好了。',
                application: '给水族箱里自然游动的扁身鱼照片放“鱼”字牌。',
                ending: '讲解员把展页放在玻璃外，大家安静看，不打扰鱼。',
                cloze: '这只扁身、用鳍和尾巴游动的动物是——。',
                homeTip: '自然看水族馆照片时，听孩子自己的描述，不提示身体形状、不要求复述；真实参观不敲玻璃、不喂食。',
                game: {
                    type: 'sequence', title: '海鱼安静观看页', instruction: '依次放底卡、海鱼照片、不敲玻璃提醒示意卡。',
                    success: '海鱼展页和安静观看提醒已装好。', safety: '只操作屏幕卡，不敲玻璃、不喂鱼、不伸手取鱼。',
                    pieces: [{label: '海鱼展页底卡示意', variant: 0, photo: false}, {label: '海洋水族箱里自然游动的扁身鱼', variant: 0, photo: true}, {label: '不敲玻璃提醒示意卡', variant: 0, photo: false}],
                    targets: [{label: '底卡位置', x: 22, y: 68}, {label: '海鱼照片位置', x: 50, y: 68}, {label: '提醒卡位置', x: 78, y: 68}], matches: [0, 1, 2]
                }
            },
            {
                id: 'seaside-bird-01', baseId: 'bird', title: '沙洲海鸥照片慢慢打开',
                partner: '海岸观鸟馆老师', item: '沙洲海鸥观察页',
                mission: '“请打开远距离拍摄的照片，看看沙洲上安静站着的鸟！”',
                sceneLabel: '远距离照片里站在沙洲上的海鸥',
                sceneDescription: 'Photorealistic telephoto photograph of a gull standing naturally on a dry coastal sandbar. Complete bird with feathers, folded wings, beak and legs centered with generous margins, distant water softly blurred, no people, feeding, nests or disturbance, no text.',
                actionLabel: '打开鸟的场景照片', actionResult: '海鸥、飞行燕子和站着小鸟的照片都展开了。',
                application: '给沙洲上安静站着的海鸥照片放“鸟”字牌。',
                ending: '老师把海鸥页放在馆里，大家不用走上沙洲打扰它。',
                cloze: '沙洲上的海鸥长着羽毛和翅膀，是一只——。',
                homeTip: '自然看观鸟照片时，听孩子的描述，不模仿叫声提示、不追问；不走上沙洲、不追鸟、不投食。',
                game: {
                    type: 'reveal', title: '海鸥观鸟照片窗', instruction: '自由打开六块遮片，看三张完整鸟照片，不要求找到羽毛小点。',
                    success: '三张鸟照片都展开了。', safety: '只看照片，不追鸟、不喂鸟、不靠近巢穴，不走入潮间带。',
                    spots: ['远距离照片里站在沙洲上的海鸥照片打开了一部分。', '远距离照片里站在沙洲上的海鸥照片继续展开。', '飞行中的燕子照片打开了一部分。', '飞行中的燕子照片继续展开。', '站着的小鸟照片打开了一部分。', '站着的小鸟照片继续展开。']
                }
            },
            {
                id: 'seaside-bird-02', baseId: 'bird', title: '海燕鸥飞行照分到动作页',
                partner: '海岸观鸟馆讲解员', item: '飞行与站立观鸟页',
                mission: '“请按卡上写的动作，把飞行照片和站立照片分开！”',
                sceneLabel: '海岸上空展开翅膀飞行的燕鸥',
                sceneDescription: 'Photorealistic telephoto image of a tern in natural flight above a distant coast, with both pointed wings fully extended and the complete body visible. Bird centered with generous margins against a pale blue sky, small coastal strip far below, no people, nests, feeding or text.',
                actionLabel: '按照片动作分好鸟照片', actionResult: '燕鸥和燕子的飞行照进了飞行页，站着的小鸟进了站立页。',
                application: '给海岸上空飞行的燕鸥照片放“鸟”字牌。',
                ending: '讲解员把两页相册并排放好，鸟的动作只在照片里观察。',
                cloze: '海岸上空展开羽毛翅膀飞行的燕鸥是一只——。',
                homeTip: '自然翻看鸟的照片时，听孩子自己的发现，不要求分类、不先读字；不追鸟或惊动它飞起。',
                game: {
                    type: 'sort', title: '鸟的动作照片页', instruction: '卡上写飞行的放飞行页，写站着的放站立页。',
                    success: '三张鸟照片已按写明的动作分好。', safety: '分类屏幕照片，不惊鸟、不投食、不靠近鸟巢。',
                    pieces: [{label: '海岸上空展开翅膀飞行的燕鸥', variant: 0, photo: true}, {label: '飞行中的燕子', variant: 1, photo: true}, {label: '站着的小鸟', variant: 2, photo: true}],
                    targets: [{label: '飞行照片页', x: 32, y: 66}, {label: '站立照片页', x: 72, y: 66}], matches: [0, 0, 1]
                }
            },
            {
                id: 'seaside-bird-03', baseId: 'bird', title: '鸬鹚晒翅照片收进海鸟册',
                partner: '海洋自然馆老师', item: '鸬鹚晒翅照片页',
                mission: '“请把远拍的鸬鹚和另外两张鸟照片收进相册！”',
                sceneLabel: '远距离照片里在海岸岩石上展开翅膀的鸬鹚',
                sceneDescription: 'Photorealistic telephoto photograph of a cormorant standing naturally on a coastal rock with wings spread in a typical drying posture. Complete feathered body and both wings centered with broad margins, softly blurred sea behind, no people, handling, bait, nests or text.',
                actionLabel: '收好海鸟和小鸟照片', actionResult: '鸬鹚、飞行燕子和站着小鸟的照片都进了相册。',
                application: '给海岸岩石上展开翅膀的鸬鹚照片放“鸟”字牌。',
                ending: '老师把晒翅页放在馆内，真实鸬鹚继续不受打扰。',
                cloze: '岩石上的鸬鹚有羽毛和翅膀，也是一只——。',
                homeTip: '孩子自由看海鸟图册时，听自己的描述，不要求模仿动作、不提示字；不靠近礁石、不追逐或喂鸟。',
                game: {
                    type: 'collect', title: '海鸟观察相册', instruction: '把三张鸟照片放进相册格，先后不限。',
                    success: '三张鸟照片已收好，没有打扰真实动物。', safety: '只收屏幕照片，不到礁石上、不追鸟、不诱鸟摆姿势。',
                    pieces: [{label: '远距离照片里在海岸岩石上展开翅膀的鸬鹚', variant: 0, photo: true}, {label: '飞行中的燕子', variant: 1, photo: true}, {label: '站着的小鸟', variant: 2, photo: true}],
                    targets: [{label: '观鸟相册格', x: 50, y: 68}], matches: [0, 0, 0]
                }
            },
            {
                id: 'seaside-hat-01', baseId: 'hat', title: '海滨遮阳帽照片按样式分页',
                partner: '海滨游客中心老师', item: '帽子样式照片页',
                mission: '“请按卡上写的样式，把三张帽子照片放到对应页！”',
                sceneLabel: '游客中心桌上有宽帽檐的布遮阳帽',
                sceneDescription: 'Photorealistic close view of a complete wide-brimmed cotton sunhat resting on an indoor table at a coastal visitor center. Crown and broad brim are clearly visible, centered with generous margins, soft window light and blurred travel brochures without readable writing, no people or text.',
                actionLabel: '按样式放好帽子照片', actionResult: '宽檐帽、毛线帽和棒球帽照片分别放到了样式页。',
                application: '给游客中心桌上的遮阳帽照片放“帽”字牌。',
                ending: '老师把帽子图页收好，真正出门的穿戴由家人照常安排。',
                cloze: '桌上这顶有宽帽檐的遮阳用品是一顶——。',
                homeTip: '日常出门时，听孩子自然谈穿戴，不藏帽子作测试、不先读字；防晒照常由成人安排。',
                game: {
                    type: 'sort', title: '帽子样式照片页', instruction: '根据卡上写明的宽檐、毛线、棒球帽名称，放进对应页。',
                    success: '三张帽子照片已按样式名称放好。', safety: '只分类照片，不交换真实个人帽子，不以认字结果决定防晒。',
                    pieces: [{label: '游客中心桌上有宽帽檐的布遮阳帽', variant: 0, photo: true}, {label: '毛线织的帽子', variant: 1, photo: true}, {label: '前面有帽檐的棒球帽', variant: 2, photo: true}],
                    targets: [{label: '宽檐遮阳帽照片页', x: 22, y: 66}, {label: '毛线帽照片页', x: 50, y: 66}, {label: '棒球帽照片页', x: 78, y: 66}], matches: [0, 1, 2]
                }
            },
            {
                id: 'seaside-hat-02', baseId: 'hat', title: '海边帽子展页放好防晒提醒',
                partner: '海滨科普馆老师', item: '草编遮阳帽提醒页',
                mission: '“请依次放底卡、草编帽照片和防晒提醒示意卡！”',
                sceneLabel: '海滨科普馆展台上的草编遮阳帽',
                sceneDescription: 'Photorealistic close museum view of a complete straw sunhat with a broad brim resting on a low neutral exhibit stand in a coastal science visitor gallery. Woven texture and hat shape centered with generous margins, gentle indoor daylight, no people, exposed sun-viewing activity or text.',
                actionLabel: '依次装好帽子提醒页', actionResult: '底卡、草编帽照片和防晒提醒卡顺序放好了。',
                application: '给展台上的草编遮阳帽照片放“帽”字牌。',
                ending: '老师把提醒页放在游客中心，防晒不只是戴帽子，还由成人安排。',
                cloze: '展台上草编的遮阳用品是一顶——。',
                homeTip: '自然准备日常穿戴时，听孩子自己的说法，不先说帽子、不要求完成步骤；防晒由成人照常照顾。',
                game: {
                    type: 'sequence', title: '遮阳帽提醒页', instruction: '依次放底卡、草编遮阳帽照片、防晒提醒示意卡。',
                    success: '遮阳帽提醒页装好了，实际防晒仍由成人安排。', safety: '只操作屏幕卡，不以游戏结果代替真实防晒，不直视太阳。',
                    pieces: [{label: '帽子展页底卡示意', variant: 0, photo: false}, {label: '海滨科普馆展台上的草编遮阳帽', variant: 0, photo: true}, {label: '防晒提醒示意卡', variant: 0, photo: false}],
                    targets: [{label: '底卡位置', x: 22, y: 68}, {label: '帽子照片位置', x: 50, y: 68}, {label: '防晒提醒位置', x: 78, y: 68}], matches: [0, 1, 2]
                }
            },
            {
                id: 'seaside-rope-01', baseId: 'rope', title: '缆绳展台拼好展示垫',
                partner: '海事博物馆老师', item: '缆绳展台布置页',
                mission: '“请在屏幕上拼好垫板和边条，让缆绳照片有展示位置！”',
                sceneLabel: '海事展柜里盘好的粗编织缆绳',
                sceneDescription: 'Photorealistic close museum photograph of a thick twisted-strand marine mooring rope coiled neatly on a flat padded shelf behind glass. Complete coil and visible fiber texture centered with generous margins, neutral maritime gallery background, no people, attached vessel, tensioned line or text.',
                actionLabel: '拼好缆绳展示垫示意', actionResult: '垫板、左边条和右边条示意卡都放好了。',
                application: '给海事展柜里盘好的缆绳照片放“绳”字牌。',
                ending: '老师收好布置页，真实缆绳由馆员继续保管。',
                cloze: '展柜里盘着一圈圈编织的缆——。',
                homeTip: '自然看海事照片时，听孩子自己的描述，不要求打结、不先读字；真绳由成人保管，不缠人、不绕颈。',
                game: {
                    type: 'build', title: '缆绳展示垫', instruction: '把垫板、左边条、右边条示意卡放到对应位置。',
                    success: '屏幕展示垫示意拼好了。', safety: '只拼屏幕示意，不拿真绳、不打结、不缠绕身体，不接近码头缆绳。',
                    pieces: [{label: '展示垫板示意卡', variant: 0, photo: false}, {label: '左边条示意卡', variant: 0, photo: false}, {label: '右边条示意卡', variant: 0, photo: false}],
                    targets: [{label: '垫板位置', x: 50, y: 72}, {label: '左边条位置', x: 22, y: 50}, {label: '右边条位置', x: 78, y: 50}], matches: [0, 1, 2]
                }
            },
            {
                id: 'seaside-rope-02', baseId: 'rope', title: '航海绳照片和页名卡分格',
                partner: '航海历史馆管理员', item: '航海绳索引页',
                mission: '“请把绳的照片放照片页，把索引页名卡放标题格！”',
                sceneLabel: '航海展台上整齐盘放的麻绳',
                sceneDescription: 'Photorealistic close view of a thick natural-fiber rope arranged as a neat flat coil on an indoor maritime history exhibit table. Twisted strands and the complete coil are centered with generous margins, warm tan fibers against a muted mat, no people, tools, attached equipment or text.',
                actionLabel: '分好绳照片和索引卡', actionResult: '三张绳照片进了照片页，索引页名卡进了标题格。',
                application: '给航海展台上盘放的麻绳照片放“绳”字牌。',
                ending: '管理员把索引页夹好，展台上的绳仍不供拿取。',
                cloze: '航海展台上盘着一圈圈细长的麻——。',
                homeTip: '孩子自然看绳的图册时，听自己的话，不问长短、不安排真实绳分类；绳由成人保管，不绑人。',
                game: {
                    type: 'sort', title: '航海绳索引分格', instruction: '有照片的卡放照片页，索引页名示意卡放标题格。',
                    success: '绳照片与页名卡已分开放好。', safety: '只分类屏幕卡，不接触真实缆绳，不绕颈、不绑人、不拉绳。',
                    pieces: [{label: '航海展台上整齐盘放的麻绳', variant: 0, photo: true}, {label: '盘好的编织绳', variant: 1, photo: true}, {label: '平放的跳绳', variant: 2, photo: true}, {label: '航海绳索引页名示意卡', variant: 0, photo: false}],
                    targets: [{label: '绳照片页', x: 32, y: 66}, {label: '索引标题格', x: 72, y: 66}], matches: [0, 0, 0, 1]
                }
            },
            {
                id: 'seaside-rope-03', baseId: 'rope', title: '航海绳结照片加好只看不碰卡',
                partner: '海事博物馆讲解员', item: '绳结标本保护页',
                mission: '“请依次放底卡、绳结照片和只看不碰提醒卡，不用自己打结！”',
                sceneLabel: '海事展板上固定成结的粗绳',
                sceneDescription: 'Photorealistic close museum view of one thick rope tied into a simple finished knot and fixed securely to a flat maritime teaching display board. Knot, strand texture and short secured ends wholly visible at center with generous margins, no people, hands, hanging loops or text.',
                actionLabel: '依次装好绳结保护页', actionResult: '底卡、绳结照片和只看不碰提醒卡放好了。',
                application: '给海事展板上固定成结的粗绳照片放“绳”字牌。',
                ending: '讲解员把保护页放到展板旁，真实绳结继续固定在板上。',
                cloze: '展板上的结由细长柔软的——打成。',
                homeTip: '自然看海事图册时，听孩子自己的描述，不要求模仿打结或说字；真绳由成人保管，不套手脚、不绑人。',
                game: {
                    type: 'sequence', title: '绳结标本保护页', instruction: '依次放底卡、绳结照片、只看不碰提醒示意卡；不是打结操作。',
                    success: '绳结保护页已装好，没有操作真实绳结。', safety: '只排屏幕展页，不教幼儿打结，不缠绕身体，真绳由成人保管。',
                    pieces: [{label: '绳结保护页底卡示意', variant: 0, photo: false}, {label: '海事展板上固定成结的粗绳', variant: 0, photo: true}, {label: '只看不碰提醒示意卡', variant: 0, photo: false}],
                    targets: [{label: '底卡位置', x: 22, y: 68}, {label: '绳结照片位置', x: 50, y: 68}, {label: '提醒卡位置', x: 78, y: 68}], matches: [0, 1, 2]
                }
            },
            {
                id: 'seaside-umbrella-01', baseId: 'umbrella', title: '雨天馆图找到海滨伞架',
                partner: '海滨游客中心老师', item: '室内伞架路线页',
                mission: '“请在屏幕馆图上经过入口和接待台，找到室内伞架！”',
                sceneLabel: '海滨游客中心伞架里合拢的雨伞',
                sceneDescription: 'Photorealistic close interior view of a closed curved-handled rain umbrella standing securely in an umbrella rack at a coastal visitor center entrance. Complete folded canopy and handle visible, centered with generous margins, rain-speckled glass door softly blurred behind, no people or text.',
                actionLabel: '在馆图上找到室内伞架', actionResult: '屏幕标记经过入口和接待台，到达室内伞架。',
                application: '给游客中心伞架里合拢的雨伞照片放“伞”字牌。',
                ending: '老师把雨具交给成人收放，大家留在室内翻看图册。',
                cloze: '伞架里合拢的挡雨用品是一把——。',
                homeTip: '日常雨天回家时，听孩子自然谈雨具，不要求收伞步骤、不提示字音；成人处理伞尖和湿地面。',
                game: {
                    type: 'route', title: '游客中心室内伞架路线', instruction: '依次点击馆内入口、接待台和室内伞架三个标记。',
                    success: '屏幕标记到了室内伞架。', safety: '仅屏幕室内路线；真实雨具由成人收放，注意防滑，雷雨不外出。',
                    steps: [{label: '游客中心入口', result: '标记到了游客中心入口。'}, {label: '室内接待台', result: '标记经过室内接待台。'}, {label: '室内伞架', result: '标记到了室内伞架。'}],
                    targets: [{label: '游客中心入口', x: 20, y: 75}, {label: '室内接待台', x: 50, y: 52}, {label: '室内伞架', x: 78, y: 28}]
                }
            },
            {
                id: 'seaside-umbrella-02', baseId: 'umbrella', title: '海滨雨具展页拼好相框',
                partner: '海滨生活馆老师', item: '雨伞展页相框',
                mission: '“请在屏幕上拼好雨伞照片框，不用打开真实雨伞！”',
                sceneLabel: '海滨生活馆支架上撑开的雨伞',
                sceneDescription: 'Photorealistic frontal interior museum photograph of an open blue rain umbrella secured to a stable low display support in a coastal everyday-life gallery. Complete canopy, shaft and curved handle clearly visible, centered with generous margins, neutral wall and soft lighting, no people or text.',
                actionLabel: '拼好雨伞照片框示意', actionResult: '上框、下框和侧框组合卡都放到了对应位置。',
                application: '给生活馆支架上撑开的雨伞照片放“伞”字牌。',
                ending: '老师把相框页摆进图册，展伞不需要小朋友操作。',
                cloze: '展架上撑开的挡雨用品是一把——。',
                homeTip: '自然看雨具照片时，听孩子自己的描述，不先说开合、不要求认字；真伞开合由成人处理，避免伞尖。',
                game: {
                    type: 'build', title: '雨伞展页相框', instruction: '把上框、下框和侧框组合示意卡放到对应位置，不用按顺序。',
                    success: '雨伞照片的屏幕相框示意拼好了。', safety: '只拼屏幕相框，不开合真伞、不触碰伞尖，雨具由成人处理。',
                    pieces: [{label: '上框示意卡', variant: 0, photo: false}, {label: '下框示意卡', variant: 0, photo: false}, {label: '两侧框组合示意卡', variant: 0, photo: false}],
                    targets: [{label: '上框位置', x: 50, y: 22}, {label: '下框位置', x: 50, y: 78}, {label: '侧框组合位置', x: 22, y: 50}], matches: [0, 1, 2]
                }
            }
        ]
    };
}));
