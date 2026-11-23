(function (root, factory) {
    const catalog = factory();
    if (typeof module === 'object' && module.exports) module.exports = catalog;
    if (typeof window !== 'undefined') (window.HanziSceneCatalogs ||= []).push(catalog);
})(typeof window !== 'undefined' ? window : globalThis, function () {
    return {
        category: '创作工坊',
        stories: [
            {
                id: 'workshop-wood-01', baseId: 'wood', title: '木块拱门的小舞台',
                partner: '模型工坊的老师', item: '木块舞台纪念页',
                mission: '“请把两边的木块和横梁示意片放好，搭一座桌面舞台入口！”',
                sceneLabel: '工坊桌上搭成舞台入口的木积木',
                sceneDescription: 'A tabletop stage entrance made of three smooth wooden blocks, two upright supports and one horizontal lintel, on a craft mat. Clearly show the natural wood grain and complete small structure from a slightly elevated angle in soft daylight. No people, tools, text, logos or watermarks.',
                actionLabel: '拼好舞台入口示意图', actionResult: '左支块、右支块和横梁三块示意片都到位了。',
                application: '给舞台入口的木积木照片放“木”字牌，表示木头这种材料。', ending: '老师把纪念页放在模型旁，舞台入口有了材料介绍。',
                cloze: '这座模型入口的积木是用——头做的。',
                homeTip: '孩子自然玩大块木积木时，听他是否主动谈到材料或搭法，不先指字、不要求照图搭；不使用真工具。',
                game: {
                    type: 'build', title: '舞台入口三块拼板', instruction: '把左支块、右支块和横梁示意片放到对应位置，顺序不限。', success: '三块入口示意片都放好了。', safety: '只拼屏幕示意片；真实木料加工由成人处理，不碰锯子或钉子。',
                    pieces: [{label: '左支块示意片', variant: 0, photo: false}, {label: '右支块示意片', variant: 0, photo: false}, {label: '横梁示意片', variant: 0, photo: false}],
                    targets: [{label: '左侧支块', x: 25, y: 68}, {label: '右侧支块', x: 75, y: 68}, {label: '上方横梁', x: 50, y: 28}], matches: [0, 1, 2]
                }
            },
            {
                id: 'workshop-wood-02', baseId: 'wood', title: '木纹样本的三页册',
                partner: '材料展的布置老师', item: '木纹材料纪念页',
                mission: '“木纹样本摆好了，请收下木板和两种木制品的照片！”',
                sceneLabel: '材料台上平放的木纹样本板',
                sceneDescription: 'Three smooth rectangular wood sample boards laid flat on a neutral craft table, displaying clearly visible grain in different natural brown tones. Frame all boards fully with ample margin and a soft blurred workshop background. No people, sharp tools, labels, text, logos or watermarks.',
                actionLabel: '收齐木材料照片', actionResult: '样本板、木长凳和木积木的三张照片都收进了材料册。',
                application: '给木纹样本板照片放“木”字牌。', ending: '老师夹好材料页，翻页时可以看看木头的不同用法。',
                cloze: '样本板上能看到——头的纹路。',
                homeTip: '日常自然看到木家具时，听孩子自己的材料描述，不先提示纹路或字音，不安排触摸检查或材料测试。',
                game: {
                    type: 'collect', title: '木头材料照片册', instruction: '把三张照片放进材料册，先放哪张都可以。', success: '三张木材料照片收齐了。', safety: '只收集屏幕照片，不拿未打磨木料，不搬重家具。',
                    pieces: [{label: '材料台上平放的木纹样本板', variant: 0, photo: true}, {label: '木头做的长凳', variant: 1, photo: true}, {label: '木头做的积木', variant: 2, photo: true}],
                    targets: [{label: '木材料照片册', x: 50, y: 65}], matches: [0, 0, 0]
                }
            },
            {
                id: 'workshop-wood-03', baseId: 'wood', title: '木片相框的四角位',
                partner: '相框模型的指导老师', item: '四角相框纪念页',
                mission: '“请把四块角片放回相框示意图，不用安装真相框！”',
                sceneLabel: '工坊软垫上摆好的木片方相框',
                sceneDescription: 'A small square wooden picture frame with rounded smooth corners resting flat on a padded craft mat. Its four broad wooden sides surround an empty opening with no glass, and the wood grain is clearly visible. Show the complete frame from above. No people, fasteners, tools, text or watermarks.',
                actionLabel: '放好相框四角片', actionResult: '左上、右上、左下、右下四块角片都放到了约定位置。',
                application: '给木片相框照片放“木”字牌，说明相框的材料。', ending: '老师留下四角纪念页，相框模型的布置完成了。',
                cloze: '这个小相框的边框是——头做的。',
                homeTip: '自然翻看家里的相框时，听孩子主动说到的边框或材料，不先读字、不要求拆开；玻璃相框由成人拿放。',
                game: {
                    type: 'build', title: '相框四角示意拼板', instruction: '把四块有位置名称的角片放到对应角位，顺序不限。', success: '相框四角示意片全部到位。', safety: '只拼屏幕角片，不操作玻璃、钉子、胶枪或真实装框工具。',
                    pieces: [{label: '左上角示意片', variant: 0, photo: false}, {label: '右上角示意片', variant: 0, photo: false}, {label: '左下角示意片', variant: 0, photo: false}, {label: '右下角示意片', variant: 0, photo: false}],
                    targets: [{label: '左上角', x: 25, y: 25}, {label: '右上角', x: 75, y: 25}, {label: '左下角', x: 25, y: 75}, {label: '右下角', x: 75, y: 75}], matches: [0, 1, 2, 3]
                }
            },
            {
                id: 'workshop-wood-04', baseId: 'wood', title: '木质底座的展示准备',
                partner: '模型展示区的老师', item: '木底座布置纪念页',
                mission: '“把铺垫、摆底座、放模型的准备卡按顺序排好吧！”',
                sceneLabel: '模型展示台上托着纸屋的木底座',
                sceneDescription: 'A broad smooth wooden display base supporting a small folded paper house on a craft exhibition table. The exposed wooden platform and its grain occupy the foreground, with the whole paper house safely inside the base. Soft indoor daylight, no people, sharp tools, readable text, logos or watermarks.',
                actionLabel: '排好底座布置卡', actionResult: '铺软垫、摆木底座、放纸屋模型三张准备卡依次到位。',
                application: '给纸屋下方的木底座照片放“木”字牌。', ending: '老师收好准备页，桌面模型有了平稳的展示位置。',
                cloze: '纸屋下面的底座是用——头做的。',
                homeTip: '孩子自然摆放已有模型时，听他自己的位置和材料描述，不要求复述流程；较重底座由成人搬放，不碰工具。',
                game: {
                    type: 'sequence', title: '木底座布置三步', instruction: '按铺软垫、摆木底座、放纸屋模型的顺序放步骤卡。', success: '三张布置步骤卡按顺序排好了。', safety: '仅在屏幕上安排流程，不要求幼儿搬木板或修理底座。',
                    pieces: [{label: '铺软垫卡', variant: 0, photo: false}, {label: '摆木底座卡', variant: 0, photo: false}, {label: '放纸屋模型卡', variant: 0, photo: false}],
                    targets: [{label: '第一步铺垫', x: 22, y: 65}, {label: '第二步摆底座', x: 50, y: 65}, {label: '第三步放模型', x: 78, y: 65}], matches: [0, 1, 2]
                }
            },
            {
                id: 'workshop-wood-05', baseId: 'wood', title: '木材与成品的两栏页',
                partner: '工坊材料角的老师', item: '木材成品对照页',
                mission: '“把材料板照片放材料栏，把长凳和积木照片放成品栏！”',
                sceneLabel: '工坊材料架上整齐摆放的木板',
                sceneDescription: 'Several smooth unfinished wooden boards stored horizontally on a low workshop material shelf, showing broad surfaces, clean ends and natural grain. Frame the full shelf section and boards in soft daylight with a neutral wall behind. No people, saws, nails, labels, printed text, logos or watermarks.',
                actionLabel: '分好木材与成品照片', actionResult: '木板照片在材料栏，木长凳和木积木照片在成品栏。',
                application: '给材料架上的木板照片放“木”字牌。', ending: '老师把两栏页夹进材料册，材料与用它做的物品都有了记录。',
                cloze: '材料架上这些板的材料是——头。',
                homeTip: '自然见到木制品时，听孩子是否主动谈到材料和用途，不要求找共同字；不带孩子进入加工区或摸毛刺木板。',
                game: {
                    type: 'sort', title: '木材料与木成品', instruction: '把木板放材料栏，把长凳和积木放成品栏。', success: '材料和成品照片分栏完成。', safety: '只整理屏幕照片，不搬木料，不操作真实加工器械。',
                    pieces: [{label: '工坊材料架上整齐摆放的木板', variant: 0, photo: true}, {label: '木头做的长凳', variant: 1, photo: true}, {label: '木头做的积木', variant: 2, photo: true}],
                    targets: [{label: '木材料板', x: 28, y: 65}, {label: '木制成品', x: 72, y: 65}], matches: [0, 1, 1]
                }
            },
            {
                id: 'workshop-pen-01', baseId: 'pen', title: '粗头水彩笔的点画准备',
                partner: '自由画画角的老师', item: '点画准备纪念页',
                mission: '“先排好铺纸、选笔、画圆点的步骤卡，再看看桌上的笔！”',
                sceneLabel: '点画台纸张旁的粗头水彩笔',
                sceneDescription: 'A thick water-based felt-tip marker lying beside a sheet of white paper with a few colored round dots on a clean art table. Show the whole marker with its broad rounded tip and its cap placed separately nearby. Soft daylight, no people, sharp tools, lettering, logos or watermarks.',
                actionLabel: '排好点画准备卡', actionResult: '铺好纸、选水彩笔、画圆点三张步骤卡按顺序排好了。',
                application: '给点画台上的水彩笔照片放“笔”字牌。', ending: '老师留好准备页，孩子可以自己决定是否继续画画。',
                cloze: '纸边这支水彩——可以画圆点。',
                homeTip: '孩子自愿自由画画时，听他主动说到的画具，不要求描字或模仿圆点；成人陪伴用适龄画具，不含笔、不玩笔帽。',
                game: {
                    type: 'sequence', title: '点画三步卡', instruction: '按铺好纸、选水彩笔、画圆点的顺序放步骤卡。', success: '点画的三张步骤卡排好了。', safety: '只是屏幕步骤模拟，不要求实际画画；不用削笔刀，不把笔或笔帽放入口中。',
                    pieces: [{label: '铺好纸卡', variant: 0, photo: false}, {label: '选水彩笔卡', variant: 0, photo: false}, {label: '画圆点卡', variant: 0, photo: false}],
                    targets: [{label: '第一步铺纸', x: 22, y: 65}, {label: '第二步选笔', x: 50, y: 65}, {label: '第三步点画', x: 78, y: 65}], matches: [0, 1, 2]
                }
            },
            {
                id: 'workshop-pen-02', baseId: 'pen', title: '毛笔与水彩笔的分格盘',
                partner: '画具展示角的老师', item: '两种笔对照纪念页',
                mission: '“把毛笔照片放同一格，水彩笔照片放另一格吧！”',
                sceneLabel: '画具展示盘里平放的毛笔',
                sceneDescription: 'A traditional writing brush with a smooth bamboo handle and soft tapered bristles resting horizontally in a shallow display tray on an art table. The entire brush is visible with no ink or liquid nearby. Natural soft lighting, no people, readable words, labels, logos or watermarks.',
                actionLabel: '分好两种笔照片', actionResult: '两张毛笔照片放进毛笔格，一张水彩笔照片放进水彩笔格。',
                application: '给展示盘里的毛笔照片放“笔”字牌。', ending: '老师把对照页夹好，不同样子的笔都有了位置。',
                cloze: '展示盘里带软毛的这支是毛——。',
                homeTip: '自然翻看画具图或自由画画时，听孩子自己的名称和用途描述，不指定分类、不先读字；毛笔清理交给成人。',
                game: {
                    type: 'sort', title: '毛笔和水彩笔照片格', instruction: '把两张毛笔照片放毛笔格，把水彩笔照片放水彩笔格。', success: '两种笔的照片分格完成。', safety: '只分屏幕照片，不蘸墨，不拆笔，不触碰削笔工具。',
                    pieces: [{label: '画具展示盘里平放的毛笔', variant: 0, photo: true}, {label: '一支水彩笔', variant: 1, photo: true}, {label: '一支毛笔', variant: 2, photo: true}],
                    targets: [{label: '毛笔照片格', x: 28, y: 65}, {label: '水彩笔照片格', x: 72, y: 65}], matches: [0, 1, 0]
                }
            },
            {
                id: 'workshop-pen-03', baseId: 'pen', title: '画笔旅行盒的三格底板',
                partner: '桌面创作区的老师', item: '旅行画笔盒纪念页',
                mission: '“请把底板和两块分隔片放进盒子示意图，让画笔各有空位！”',
                sceneLabel: '工坊桌面软盒里平放的水彩笔',
                sceneDescription: 'An open soft fabric stationery case containing three capped water-based markers laid horizontally in separate padded compartments on a craft table. Show the complete case and recognizable marker bodies from above with natural fabric texture. No people, scissors, blades, readable text, brands, logos or watermarks.',
                actionLabel: '拼好画笔盒示意底板', actionResult: '底板、左分隔片和右分隔片都放好，示意盒的三个空格准备好了。',
                application: '给软盒里的水彩笔照片放“笔”字牌。', ending: '老师收下底板纪念页，画笔盒的屏幕布置完成了。',
                cloze: '软盒里平放着几支水彩——。',
                homeTip: '日常自然收画具时，听孩子主动谈到的物品，不藏笔考查、不要求按格放；小笔帽由成人看护，不碰刀具。',
                game: {
                    type: 'build', title: '画笔盒三片拼板', instruction: '把底板、左分隔片和右分隔片放到各自位置，顺序不限。', success: '画笔盒的示意底板和分隔片到位了。', safety: '只拼屏幕示意盒，不裁布、不缝针、不操作真实工具。',
                    pieces: [{label: '盒底示意片', variant: 0, photo: false}, {label: '左分隔示意片', variant: 0, photo: false}, {label: '右分隔示意片', variant: 0, photo: false}],
                    targets: [{label: '盒底位置', x: 50, y: 78}, {label: '左分隔位置', x: 35, y: 40}, {label: '右分隔位置', x: 65, y: 40}], matches: [0, 1, 2]
                }
            },
            {
                id: 'workshop-pen-04', baseId: 'pen', title: '桌边铅笔的画具照片册',
                partner: '写生角的老师', item: '写生画具纪念页',
                mission: '“铅笔在写生垫旁等着，请把三种笔的照片收进画具册！”',
                sceneLabel: '工坊写生垫旁平放的铅笔',
                sceneDescription: 'A single graphite pencil lying beside an open sketch pad with a simple line drawing of a ceramic vase on a clean studio table. Center the entire pencil and show its wooden body and short graphite point clearly. No people, sharpeners, blades, readable writing, logos or watermarks.',
                actionLabel: '收齐三种笔照片', actionResult: '铅笔、水彩笔和毛笔的三张照片都进了画具册。',
                application: '给写生垫旁的铅笔照片放“笔”字牌。', ending: '老师夹好画具页，下次翻阅可以看看笔的不同样子。',
                cloze: '写生垫旁放着一支铅——。',
                homeTip: '孩子自然涂画时，听他是否主动描述笔或线条，不先读字、不要求握笔展示；不含笔，削笔由成人处理。',
                game: {
                    type: 'collect', title: '三种画笔照片册', instruction: '把三张笔照片放进画具册，顺序不限。', success: '三种笔的照片收齐了。', safety: '仅收集屏幕照片，不削笔，不用真实尖端做操作任务。',
                    pieces: [{label: '工坊写生垫旁平放的铅笔', variant: 0, photo: true}, {label: '一支水彩笔', variant: 1, photo: true}, {label: '一支毛笔', variant: 2, photo: true}],
                    targets: [{label: '写生画具册', x: 50, y: 65}], matches: [0, 0, 0]
                }
            },
            {
                id: 'workshop-pen-05', baseId: 'pen', title: '笔尖朝内的收笔流程',
                partner: '美术活动室的老师', item: '铅笔收纳纪念页',
                mission: '“用步骤卡安排收笔：收起画纸、把笔平放、请成人收好盒子！”',
                sceneLabel: '美术桌上内衬盒里平放的铅笔',
                sceneDescription: 'Two graphite pencils resting horizontally inside an open padded pencil box on an art room table, with their short points facing inward away from the box opening. Show the entire pencils and fabric lining from above. No people, sharpeners, scissors, readable text, logos or watermarks.',
                actionLabel: '排好铅笔收纳卡', actionResult: '收起画纸、平放铅笔、请成人收盒三张步骤卡依次到位。',
                application: '给内衬盒里的铅笔照片放“笔”字牌。', ending: '老师保留收纳页，真实画具仍由成人确认并收好。',
                cloze: '盒里平放着两支铅——。',
                homeTip: '日常结束画画时，听孩子自己说到的画具，不要求再演示流程；成人收好有尖端的笔和小零件，不含笔。',
                game: {
                    type: 'sequence', title: '收笔三张步骤卡', instruction: '按收起画纸、平放铅笔、请成人收盒的顺序放卡。', success: '三张收笔步骤卡排好了。', safety: '屏幕模拟不要求拿真铅笔；不碰削笔刀，不把笔尖朝人，不强迫参与收纳。',
                    pieces: [{label: '收起画纸卡', variant: 0, photo: false}, {label: '平放铅笔卡', variant: 0, photo: false}, {label: '请成人收盒卡', variant: 0, photo: false}],
                    targets: [{label: '第一步收纸', x: 22, y: 65}, {label: '第二步平放笔', x: 50, y: 65}, {label: '第三步成人收盒', x: 78, y: 65}], matches: [0, 1, 2]
                }
            },
            {
                id: 'workshop-paper-01', baseId: 'paper', title: '方纸三角折页的步骤卡',
                partner: '软纸创作角的老师', item: '三角折页纪念页',
                mission: '“把选方纸、对角折、轻压折线的步骤卡排好吧！”',
                sceneLabel: '折纸垫上的方纸和三角折页',
                sceneDescription: 'A soft square sheet of colored paper beside another sheet folded diagonally into a simple triangle on a clean folding mat. Clearly show the thin paper edges, crease and complete triangular shape from overhead in natural daylight. No people, scissors, cutters, printed text, logos or watermarks.',
                actionLabel: '排好三角折页卡', actionResult: '选方纸、对角折、轻压折线三张步骤卡依次排好了。',
                application: '给折纸垫上的纸照片放“纸”字牌。', ending: '老师夹好折页纪念页，想继续折纸的人可以自由选择。',
                cloze: '三角折页是用一张软——折的。',
                homeTip: '孩子自愿玩软纸时，听他主动描述折痕或形状，不指定字形、不考步骤；不使用裁纸刀、剪刀或订书机。',
                game: {
                    type: 'sequence', title: '三角折页三步卡', instruction: '按选方纸、对角折、轻压折线的顺序放步骤卡。', success: '折页的三张步骤卡排好了。', safety: '只是屏幕模拟，不要求真实折纸；真实活动仅用适龄软纸并由成人陪伴，不用裁切工具。',
                    pieces: [{label: '选方纸卡', variant: 0, photo: false}, {label: '对角折卡', variant: 0, photo: false}, {label: '轻压折线卡', variant: 0, photo: false}],
                    targets: [{label: '第一步选纸', x: 22, y: 65}, {label: '第二步对角折', x: 50, y: 65}, {label: '第三步压折线', x: 78, y: 65}], matches: [0, 1, 2]
                }
            },
            {
                id: 'workshop-paper-02', baseId: 'paper', title: '彩纸拼贴的三色位置',
                partner: '拼贴活动的老师', item: '三色纸拼贴纪念页',
                mission: '“把红、黄、蓝三块纸片示意卡放到约定的拼贴位置！”',
                sceneLabel: '拼贴台上红黄蓝三张彩纸',
                sceneDescription: 'Three thin sheets of red, yellow and blue craft paper laid partly overlapping on a white collage table, with a blank backing sheet nearby. Frame all three sheets fully from above so their paper edges and matte surfaces are clear. No people, glue guns, blades, scissors, text or watermarks.',
                actionLabel: '放好三色纸片示意卡', actionResult: '红纸片在左边、黄纸片在中间、蓝纸片在右边，三块示意卡都到位了。',
                application: '给红黄蓝彩纸照片放“纸”字牌。', ending: '老师把三色纪念页留下，真实拼贴可以有自己的布局。',
                cloze: '拼贴台上平铺着三张彩——。',
                homeTip: '自然自由拼贴时，听孩子自己谈到的颜色和材料，不要求照示意图摆、不提示字音；用成人准备的软纸，不碰裁切工具。',
                game: {
                    type: 'build', title: '三色纸片示意拼贴', instruction: '把红、黄、蓝纸片示意卡放到同名位置，顺序不限。', success: '三色纸片示意卡都放好了。', safety: '只放屏幕纸片卡，不剪纸，不使用胶枪或真实锋利工具。',
                    pieces: [{label: '红纸片示意卡', variant: 0, photo: false}, {label: '黄纸片示意卡', variant: 0, photo: false}, {label: '蓝纸片示意卡', variant: 0, photo: false}],
                    targets: [{label: '左边红纸片', x: 22, y: 65}, {label: '中间黄纸片', x: 50, y: 65}, {label: '右边蓝纸片', x: 78, y: 65}], matches: [0, 1, 2]
                }
            },
            {
                id: 'workshop-paper-03', baseId: 'paper', title: '白纸彩纸牛皮纸的材料栏',
                partner: '纸材料角的老师', item: '三种纸对照纪念页',
                mission: '“白纸、彩纸和牛皮纸的照片各有一栏，请帮它们找到位置！”',
                sceneLabel: '创作材料盘里叠放的白纸',
                sceneDescription: 'A neat small stack of plain white paper sheets in a shallow stationery tray on a bright craft table. Show the top blank sheet and fine layered paper edges from a gentle overhead angle, with a neutral background. No people, cutting tools, printed words, logos or watermarks.',
                actionLabel: '分好三种纸照片', actionResult: '白纸、彩纸和牛皮纸照片分别放进了各自的材料栏。',
                application: '给材料盘里的白纸照片放“纸”字牌。', ending: '老师保存材料栏，三种纸的样子都能慢慢看。',
                cloze: '材料盘里叠放着白——。',
                homeTip: '日常自然用纸时，听孩子自己的材料描述，不先摆三种纸让他答题、不读字提示；裁纸和装订由成人处理。',
                game: {
                    type: 'sort', title: '三种纸照片栏', instruction: '把白纸、彩纸和牛皮纸照片放到同名材料栏。', success: '三种纸照片都分到对应栏了。', safety: '只分类屏幕照片，不操作裁纸刀、剪刀或订书机。',
                    pieces: [{label: '创作材料盘里叠放的白纸', variant: 0, photo: true}, {label: '平铺的彩纸', variant: 1, photo: true}, {label: '平铺的牛皮纸', variant: 2, photo: true}],
                    targets: [{label: '白纸栏', x: 22, y: 65}, {label: '彩纸栏', x: 50, y: 65}, {label: '牛皮纸栏', x: 78, y: 65}], matches: [0, 1, 2]
                }
            },
            {
                id: 'workshop-paper-04', baseId: 'paper', title: '牛皮纸袋的材料相册',
                partner: '包装创作角的老师', item: '牛皮纸材料观察页',
                mission: '“揭开材料相册，看看纸袋旁的牛皮纸和别的纸！”',
                sceneLabel: '包装台上纸袋旁展开的牛皮纸',
                sceneDescription: 'An unprinted brown kraft paper bag standing beside a broad unfolded kraft paper sheet on a craft packaging table. Center the sheet and bag, showing fibrous paper texture, thin edges and folded seams in soft daylight. No people, cord loops, staplers, sharp tools, labels, text, logos or watermarks.',
                actionLabel: '展开纸材料相册', actionResult: '包装台牛皮纸、平铺彩纸和平铺牛皮纸三幅照片都展开了。',
                application: '给纸袋旁展开的牛皮纸照片放“纸”字牌。', ending: '老师留下材料观察页，纸袋用的材料也有了记录。',
                cloze: '包装台上的袋子是用牛皮——做的。',
                homeTip: '日常自然看到纸包装时，听孩子自发的材料描述，不要求拆袋配字；纸袋不套头，不碰订钉或裁切工具。',
                game: {
                    type: 'reveal', title: '包装纸材料相册', instruction: '自由揭开六块遮片，观察三幅完整纸照片。', success: '三幅纸材料照片都展开了。', safety: '只揭开屏幕照片，不拆包装钉，不把袋子套在头上，不要求实际包装。',
                    spots: ['看见包装台上纸袋旁展开的牛皮纸。', '包装台上纸袋旁展开的牛皮纸照片展开了。', '看见平铺的彩纸。', '平铺的彩纸照片展开了。', '看见平铺的牛皮纸。', '平铺的牛皮纸照片展开了。']
                }
            },
            {
                id: 'workshop-paper-05', baseId: 'paper', title: '纸卷印纹台的材料册',
                partner: '印纹展示区的老师', item: '纸卷材料纪念页',
                mission: '“请把印纹台的纸卷和彩纸、牛皮纸照片放进材料册！”',
                sceneLabel: '印纹台上展开一段的白纸卷',
                sceneDescription: 'A roll of plain white drawing paper with a broad section unrolled across a craft printing table. The exposed sheet bears a few simple blue leaf-shaped impressions, and the curled roll edge clearly shows the thin paper material. No people, text, hot equipment, sharp tools, logos or watermarks.',
                actionLabel: '收齐纸材料照片', actionResult: '白纸卷、彩纸和牛皮纸三张照片都收进了材料册。',
                application: '给印纹台上的白纸卷照片放“纸”字牌。', ending: '老师夹好纸卷纪念页，印纹展示多了一张材料说明。',
                cloze: '印纹台上展开了一段白——。',
                homeTip: '孩子自然看纸上图案时，听他主动谈到的纹样或材料，不要求印出指定形状、不先提示字；真实颜料清理由成人处理。',
                game: {
                    type: 'collect', title: '印纹台纸材料册', instruction: '把三张纸照片放进同一本材料册，顺序不限。', success: '三张纸材料照片收齐了。', safety: '仅收集屏幕照片，不滚动真实印刷设备，不使用热压机或裁切工具。',
                    pieces: [{label: '印纹台上展开一段的白纸卷', variant: 0, photo: true}, {label: '平铺的彩纸', variant: 1, photo: true}, {label: '平铺的牛皮纸', variant: 2, photo: true}],
                    targets: [{label: '印纹纸材料册', x: 50, y: 65}], matches: [0, 0, 0]
                }
            },
            {
                id: 'workshop-kite-01', baseId: 'kite', title: '桌面菱形筝面的贴片图',
                partner: '风筝展示工坊的老师', item: '菱形筝面纪念页',
                mission: '“把上、左、右三块装饰示意片放到风筝图上吧！”',
                sceneLabel: '工坊桌上平放的菱形风筝',
                sceneDescription: 'A complete diamond-shaped kite laid flat on a workshop table, with a taut paper sail, visible cross spars and a short colorful tail arranged flat beside it. The flying line is stored out of view. Show the whole kite from above. No people, sharp tools, text, logos or watermarks.',
                actionLabel: '放好筝面装饰示意片', actionResult: '上方、左侧和右侧三块装饰示意片都放到了约定位置。',
                application: '给桌上的菱形风筝照片放“筝”字牌，表示风筝的筝。', ending: '老师把筝面纪念页放进工坊册，不需要真实放飞。',
                cloze: '桌上这件有菱形筝面的作品是风——。',
                homeTip: '自然看风筝照片时，听孩子自己的形状描述，不要求做风筝或放飞；真实绳线和骨架由成人收好，不用尖锐工具。',
                game: {
                    type: 'build', title: '菱形筝面装饰拼板', instruction: '把上方、左侧和右侧装饰示意片放到同名位置，顺序不限。', success: '三块筝面装饰示意片都到位了。', safety: '仅在屏幕拼示意片，不装真实骨架、不剪线、不放飞，不将绳线缠绕身体。',
                    pieces: [{label: '上方装饰示意片', variant: 0, photo: false}, {label: '左侧装饰示意片', variant: 0, photo: false}, {label: '右侧装饰示意片', variant: 0, photo: false}],
                    targets: [{label: '筝面上方', x: 50, y: 25}, {label: '筝面左侧', x: 28, y: 62}, {label: '筝面右侧', x: 72, y: 62}], matches: [0, 1, 2]
                }
            },
            {
                id: 'workshop-kite-02', baseId: 'kite', title: '风筝样本盒的两类照片',
                partner: '风筝材料展的老师', item: '两类风筝对照页',
                mission: '“把三角形风筝照片放同一栏，燕形风筝照片放另一栏！”',
                sceneLabel: '工坊样本盒里完整的三角形风筝',
                sceneDescription: 'A complete triangular delta kite resting flat in a broad shallow workshop display box, with a taut blue fabric sail and clearly visible supporting spars. Keep the whole recognizable kite inside the frame, with no flying line exposed. No people, sharp tools, labels, text, logos or watermarks.',
                actionLabel: '分好两类风筝照片', actionResult: '两张三角形风筝照片在三角栏，一张燕形风筝照片在燕形栏。',
                application: '给样本盒里的三角形风筝照片放“筝”字牌。', ending: '老师夹好对照页，平放和飞着的风筝都能慢慢比较。',
                cloze: '样本盒里这件三角形的作品是风——。',
                homeTip: '自然翻看风筝图册时，听孩子自发的形状比较，不先给分类名称、不要求配字；不安排真实放飞考查。',
                game: {
                    type: 'sort', title: '燕形与三角形风筝', instruction: '把燕形风筝照片放燕形栏，把三角形风筝照片放三角栏。', success: '两类风筝照片分栏完成。', safety: '只分类屏幕照片，不拿绳线、不实际放飞；现实风筝活动须成人陪伴并远离道路电线和雷雨。',
                    pieces: [{label: '工坊样本盒里完整的三角形风筝', variant: 0, photo: true}, {label: '空中飞着的燕形风筝', variant: 1, photo: true}, {label: '空中飞着的三角形风筝', variant: 2, photo: true}],
                    targets: [{label: '燕形风筝栏', x: 28, y: 65}, {label: '三角形风筝栏', x: 72, y: 65}], matches: [1, 0, 1]
                }
            },
            {
                id: 'workshop-kite-03', baseId: 'kite', title: '燕形风筝的展架准备',
                partner: '工坊作品展的老师', item: '燕形风筝展示页',
                mission: '“用步骤卡安排铺垫、请成人摆筝、放介绍卡的展示流程！”',
                sceneLabel: '工坊低展架上斜放的燕形风筝',
                sceneDescription: 'A swallow-shaped kite displayed at a gentle angle on a low padded tabletop stand in a craft exhibition corner. Show its complete wing outline, split tail and taut sail with supporting spars, with any flying line stored out of sight. No people, readable signs, sharp tools, logos or watermarks.',
                actionLabel: '排好风筝展示卡', actionResult: '铺好软垫、请成人摆风筝、放介绍卡三张步骤卡依次到位。',
                application: '给低展架上的燕形风筝照片放“筝”字牌。', ending: '老师收下展示页，风筝作品留在展架上供人观看。',
                cloze: '低展架上摆着一只燕形风——。',
                homeTip: '自然参观风筝作品图时，听孩子愿意谈的部分，不要求模仿制作或摸骨架；真实展示由成人布置，绳线由成人保管。',
                game: {
                    type: 'sequence', title: '燕形风筝展示三步', instruction: '按铺好软垫、请成人摆风筝、放介绍卡的顺序放步骤卡。', success: '三张风筝展示步骤卡排好了。', safety: '只排屏幕流程，不搬展架、不拉线、不放飞，不强迫真实动手。',
                    pieces: [{label: '铺好软垫卡', variant: 0, photo: false}, {label: '请成人摆风筝卡', variant: 0, photo: false}, {label: '放介绍卡', variant: 0, photo: false}],
                    targets: [{label: '第一步铺垫', x: 22, y: 65}, {label: '第二步成人摆筝', x: 50, y: 65}, {label: '第三步放介绍卡', x: 78, y: 65}], matches: [0, 1, 2]
                }
            },
            {
                id: 'workshop-kite-04', baseId: 'kite', title: '工坊风筝墙的揭图册',
                partner: '风筝作品墙的布置老师', item: '风筝墙观察纪念页',
                mission: '“揭开观察册，看看作品墙和两张飞着的风筝照片！”',
                sceneLabel: '工坊作品墙上展示的菱形风筝',
                sceneDescription: 'A diamond-shaped kite with a four-color sail mounted flat on a neutral craft workshop display wall. Crossed spars and a ribbon tail are visible; the upper apex and the tail end extend beyond the crop boundaries. Clear wall space remains at both sides, and no flying line is exposed. Soft natural indoor light, no people, captions, text, logos or watermarks.',
                actionLabel: '展开风筝观察册', actionResult: '作品墙菱形风筝、飞着的燕形风筝和三角形风筝照片全部展开了。',
                application: '给作品墙上的菱形风筝照片放“筝”字牌。', ending: '老师把观察页夹进作品册，这次展示不需要放飞。',
                cloze: '工坊作品墙上展示着一只菱形风——。',
                homeTip: '自然翻看风筝作品照片时，听孩子主动谈到的形状或位置，不提示目标字、不追问共同名称；无需安排放飞。',
                game: {
                    type: 'reveal', title: '工坊风筝作品相册', instruction: '自由揭开六块遮片，看看三幅完整风筝照片。', success: '三幅风筝照片都展开了。', safety: '只揭开屏幕照片，不攀作品墙、不接触绳线或高处展品。',
                    spots: ['看见工坊作品墙上展示的菱形风筝。', '工坊作品墙上展示的菱形风筝照片展开了。', '看见空中飞着的燕形风筝。', '空中飞着的燕形风筝照片展开了。', '看见空中飞着的三角形风筝。', '空中飞着的三角形风筝照片展开了。']
                }
            },
            {
                id: 'workshop-drum-01', baseId: 'drum', title: '手鼓托盘的三件底板',
                partner: '乐器模型展示区的老师', item: '手鼓托盘纪念页',
                mission: '“把托盘底板和两边挡片放好，给手鼓照片准备展示框！”',
                sceneLabel: '工坊衬布托盘里静放的手鼓',
                sceneDescription: 'A round frame tambourine with metal jingles resting silently in a broad cloth-lined tray on a workshop exhibition table. Show the whole taut drumhead, wooden rim and inset jingles clearly from a slightly elevated angle. No people, striking hands, mallets, readable labels, text, logos or watermarks.',
                actionLabel: '拼好手鼓托盘示意框', actionResult: '托盘底板、左挡片和右挡片三块示意片都放好了。',
                application: '给衬布托盘里的手鼓照片放“鼓”字牌。', ending: '老师保存托盘纪念页，乐器展示保持安静。',
                cloze: '托盘里静放着一面带铃片的手——。',
                homeTip: '自然看到乐器图画时，听孩子自己的描述，不敲响作提示、不要求拍鼓；尊重不想听声音或参与的选择。',
                game: {
                    type: 'build', title: '手鼓托盘示意拼板', instruction: '把底板、左挡片和右挡片放到对应位置，顺序不限。', success: '托盘的三块示意片都到位了。', safety: '只拼屏幕托盘片，不敲真鼓、不装铃片、不突然制造声音。',
                    pieces: [{label: '托盘底板示意片', variant: 0, photo: false}, {label: '左挡示意片', variant: 0, photo: false}, {label: '右挡示意片', variant: 0, photo: false}],
                    targets: [{label: '托盘底部', x: 50, y: 78}, {label: '托盘左侧', x: 25, y: 45}, {label: '托盘右侧', x: 75, y: 45}], matches: [0, 1, 2]
                }
            },
            {
                id: 'workshop-drum-02', baseId: 'drum', title: '康加鼓的静看照片册',
                partner: '乐器写生角的老师', item: '康加鼓观察纪念页',
                mission: '“不用敲鼓，把写生角和另外两面鼓的照片收进相册吧！”',
                sceneLabel: '工坊写生角里静放的康加鼓',
                sceneDescription: 'A single tall wooden conga drum standing securely on the floor beside a blank drawing easel in a workshop sketching corner. Show the entire tapered drum body, upper drumhead and natural wood grain with clear space around it. No people, sticks, readable text, labels, logos or watermarks.',
                actionLabel: '收齐鼓的观察照片', actionResult: '写生角康加鼓、音乐教室康加鼓和支架大鼓三张照片都收齐了。',
                application: '给写生角的康加鼓照片放“鼓”字牌。', ending: '老师收好静看纪念页，观察乐器也可以不发出声音。',
                cloze: '写生角里静放着一面康加——。',
                homeTip: '自然翻到乐器照片时，听孩子主动说到的形状，不播放突然的鼓声、不要求敲击；是否愿意继续看由孩子决定。',
                game: {
                    type: 'collect', title: '安静的鼓照片册', instruction: '把三张鼓照片放进相册，顺序不限，不需要发声。', success: '三张鼓照片全部收齐。', safety: '只收集屏幕照片，不要求触碰或敲响乐器，不搬重鼓。',
                    pieces: [{label: '工坊写生角里静放的康加鼓', variant: 0, photo: true}, {label: '音乐教室里的康加鼓', variant: 1, photo: true}, {label: '支架上的大鼓', variant: 2, photo: true}],
                    targets: [{label: '鼓的静看相册', x: 50, y: 65}], matches: [0, 0, 0]
                }
            },
            {
                id: 'workshop-drum-03', baseId: 'drum', title: '带铃片手鼓的分类页',
                partner: '乐器图册的整理老师', item: '手鼓与其他鼓对照页',
                mission: '“把手鼓照片放一栏，康加鼓和大鼓照片放另一栏！”',
                sceneLabel: '工坊乐器展板前平放的带铃片手鼓',
                sceneDescription: 'A round tambourine with a pale taut drumhead and visible pairs of metal jingles in its wooden rim, lying flat on a padded shelf in front of a plain workshop display board. Frame the entire instrument with margin. No people, striking action, text, labels, logos or watermarks.',
                actionLabel: '分好手鼓和其他鼓照片', actionResult: '手鼓照片放在手鼓栏，康加鼓和大鼓照片放在其他鼓栏。',
                application: '给展板前的带铃片手鼓照片放“鼓”字牌。', ending: '老师夹好对照页，几种鼓的外形都有了位置。',
                cloze: '展板前这面带铃片的乐器是手——。',
                homeTip: '自然看乐器图册时，听孩子自发的比较，不先提示分类、不追问读音；不用声响当答案提示，不强迫听乐器。',
                game: {
                    type: 'sort', title: '手鼓与其他鼓照片栏', instruction: '把手鼓放手鼓栏，把康加鼓和大鼓放其他鼓栏。', success: '两栏鼓照片放好了。', safety: '只分类屏幕照片，不实际演奏，不制造突然或大声的鼓响。',
                    pieces: [{label: '工坊乐器展板前平放的带铃片手鼓', variant: 0, photo: true}, {label: '音乐教室里的康加鼓', variant: 1, photo: true}, {label: '支架上的大鼓', variant: 2, photo: true}],
                    targets: [{label: '带铃片手鼓栏', x: 28, y: 65}, {label: '康加鼓与大鼓栏', x: 72, y: 65}], matches: [0, 1, 1]
                }
            },
            {
                id: 'workshop-drum-04', baseId: 'drum', title: '大鼓展台的静音准备',
                partner: '乐器作品展的老师', item: '大鼓展台准备页',
                mission: '“排好留空位、请成人摆鼓、放观察卡的展台步骤，不用敲鼓！”',
                sceneLabel: '工坊展示区稳固支架上的大鼓',
                sceneDescription: 'A large bass drum resting securely on a sturdy low cradle stand in a quiet workshop exhibition area. Show its complete circular drumhead, wooden shell and support structure with ample uncluttered floor space. No people, beaters, motion, readable signs, text, logos or watermarks.',
                actionLabel: '排好大鼓展台卡', actionResult: '留好空位、请成人摆鼓、放观察卡三张步骤卡依次排好了。',
                application: '给展示区支架上的大鼓照片放“鼓”字牌。', ending: '老师保存展台准备页，这次展示只看外形，不安排演奏。',
                cloze: '展示区的支架上放着一面大——。',
                homeTip: '自然看大鼓照片时，听孩子自己的观察，不要求听声辨物；真实重乐器只由成人移动，不让幼儿推鼓或敲鼓。',
                game: {
                    type: 'sequence', title: '静看大鼓展示三步', instruction: '按留好空位、请成人摆鼓、放观察卡的顺序放步骤卡。', success: '大鼓展示的三张步骤卡排好了。', safety: '只排屏幕卡片，不搬真鼓、不敲击、不突然发声，孩子可选择不参与真实活动。',
                    pieces: [{label: '留好空位卡', variant: 0, photo: false}, {label: '请成人摆鼓卡', variant: 0, photo: false}, {label: '放观察卡', variant: 0, photo: false}],
                    targets: [{label: '第一步留空位', x: 22, y: 65}, {label: '第二步成人摆鼓', x: 50, y: 65}, {label: '第三步放观察卡', x: 78, y: 65}], matches: [0, 1, 2]
                }
            },
            {
                id: 'workshop-bell-01', baseId: 'bell', title: '木柄手铃的软垫盒',
                partner: '乐器展示角的老师', item: '手铃软垫盒纪念页',
                mission: '“用底垫和两侧垫片拼好示意盒，给手铃照片留个安静位置！”',
                sceneLabel: '工坊软垫盒里静放的木柄手铃',
                sceneDescription: 'A large intact handbell with a wooden handle and a metal bell body lying silently inside a shallow foam-lined display box on a craft table. Center the whole recognizable bell and handle, with the clapper enclosed in the bell. No people, shaking action, readable words, logos or watermarks.',
                actionLabel: '拼好手铃盒示意垫片', actionResult: '底垫、左侧垫和右侧垫三块示意片都放好了。',
                application: '给软垫盒里的木柄手铃照片放“铃”字牌。', ending: '老师留下纪念页，手铃继续静静放在展示盒里。',
                cloze: '软垫盒里放着一只木柄手——。',
                homeTip: '自然看手铃图片时，听孩子自己的描述，不突然摇铃或要求听声回答；真实大号完整铃由成人保管，不拆零件。',
                game: {
                    type: 'build', title: '手铃盒三块软垫拼板', instruction: '把底垫、左侧垫和右侧垫示意片放到对应位置，顺序不限。', success: '手铃盒示意垫片全部到位。', safety: '只拼屏幕垫片，不摇真铃、不拆铃舌，不制造突然声响。',
                    pieces: [{label: '盒底软垫示意片', variant: 0, photo: false}, {label: '左侧软垫示意片', variant: 0, photo: false}, {label: '右侧软垫示意片', variant: 0, photo: false}],
                    targets: [{label: '盒底垫位', x: 50, y: 78}, {label: '左侧垫位', x: 25, y: 45}, {label: '右侧垫位', x: 75, y: 45}], matches: [0, 1, 2]
                }
            },
            {
                id: 'workshop-bell-02', baseId: 'bell', title: '悬铃与架铃的照片分栏',
                partner: '乐器造型展的老师', item: '两种铃展示纪念页',
                mission: '“把悬挂金属铃照片放一栏，架上带拉绳的铃照片放另一栏！”',
                sceneLabel: '工坊展示架上静挂的三只金属铃',
                sceneDescription: 'Three intact metal bells hanging silently from rigid hooks on a stable tabletop workshop display rack. Their flared bell bodies are fully visible with space between them and no exposed loose cords. Show the whole rack against a neutral wall. No people, motion, readable text, logos or watermarks.',
                actionLabel: '分好两种铃的照片', actionResult: '两张三只悬铃照片在悬铃栏，架上带拉绳的铃照片在架铃栏。',
                application: '给展示架上的三只金属铃照片放“铃”字牌。', ending: '老师把两栏页夹好，展示没有发出突然的声音。',
                cloze: '展示架上静静挂着三只金属——。',
                homeTip: '自然看到铃的图画时，听孩子主动谈到的外形，不播放声响提示、不要求拉绳；真实铃和绳线由成人保管。',
                game: {
                    type: 'sort', title: '悬铃和架铃照片栏', instruction: '把三只悬铃的照片放悬铃栏，把带拉绳架铃的照片放架铃栏。', success: '两种铃的照片分栏完成。', safety: '仅分类屏幕照片，不摇铃、不拉真绳，不拆铃片，不突然发声。',
                    pieces: [{label: '工坊展示架上静挂的三只金属铃', variant: 0, photo: true}, {label: '三只悬挂的金属铃', variant: 1, photo: true}, {label: '架上带拉绳的铃', variant: 2, photo: true}],
                    targets: [{label: '三只悬铃栏', x: 28, y: 65}, {label: '带拉绳架铃栏', x: 72, y: 65}], matches: [0, 0, 1]
                }
            },
            {
                id: 'workshop-bell-03', baseId: 'bell', title: '金属铃样本的安静相册',
                partner: '工坊材料观察角的老师', item: '金属铃静看纪念页',
                mission: '“不用听铃声，揭开相册看看铃的几种展示方式吧！”',
                sceneLabel: '工坊材料台上平放的完整金属铃',
                sceneDescription: 'A single large intact metal bell resting on its side on a padded material study table, showing its flared body, rim and upper suspension eye clearly. Its clapper remains attached inside. Frame the entire bell in soft daylight. No people, loose parts, shaking action, printed text, logos or watermarks.',
                actionLabel: '展开铃的静看相册', actionResult: '材料台金属铃、三只悬铃和架上带拉绳的铃三幅照片都展开了。',
                application: '给材料台上的完整金属铃照片放“铃”字牌。', ending: '老师收好静看纪念页，不发声也可以观察铃的样子。',
                cloze: '材料台上平放着一只金属——。',
                homeTip: '自然翻到铃的图片时，听孩子自己的描述，不先读字、不用突然声音提示；不要求摸铃或展示听觉反应。',
                game: {
                    type: 'reveal', title: '安静看铃的相册', instruction: '自由揭开六块遮片，看三幅完整铃照片，不需要听声音。', success: '三幅铃照片全部展开了。', safety: '只揭开屏幕照片，不敲铃、不摇铃、不拆小零件，尊重不想听声音的选择。',
                    spots: ['看见工坊材料台上平放的完整金属铃。', '工坊材料台上平放的完整金属铃照片展开了。', '看见三只悬挂的金属铃。', '三只悬挂的金属铃照片展开了。', '看见架上带拉绳的铃。', '架上带拉绳的铃照片展开了。']
                }
            },
            {
                id: 'workshop-bell-04', baseId: 'bell', title: '手铃展柜的布置流程',
                partner: '乐器展柜的布置老师', item: '手铃展柜准备页',
                mission: '“排好铺衬布、请成人摆手铃、放介绍卡的流程，保持安静！”',
                sceneLabel: '工坊低展柜衬布上立放的手铃',
                sceneDescription: 'A large handbell standing upright on a soft cloth-lined shelf inside a low workshop display cabinet, with a wooden handle above its metal bell body. Show the complete instrument and simple cabinet interior in gentle light. No people, ringing action, loose components, readable labels, text, logos or watermarks.',
                actionLabel: '排好手铃展柜卡', actionResult: '铺衬布、请成人摆手铃、放介绍卡三张步骤卡依次排好了。',
                application: '给低展柜里立放的手铃照片放“铃”字牌。', ending: '老师保留准备页，真实手铃留在柜里静静展示。',
                cloze: '低展柜里立放着一只手——。',
                homeTip: '自然参观乐器图片时，听孩子愿意说的内容，不追问字音、不敲玻璃、不要求摇铃；真实展柜由成人布置。',
                game: {
                    type: 'sequence', title: '手铃静态展示三步', instruction: '按铺衬布、请成人摆手铃、放介绍卡的顺序放步骤卡。', success: '三张手铃展柜步骤卡排好了。', safety: '只排屏幕流程，不开真柜、不搬铃、不突然发声，不强迫真实活动。',
                    pieces: [{label: '铺衬布卡', variant: 0, photo: false}, {label: '请成人摆手铃卡', variant: 0, photo: false}, {label: '放介绍卡', variant: 0, photo: false}],
                    targets: [{label: '第一步铺衬布', x: 22, y: 65}, {label: '第二步成人摆铃', x: 50, y: 65}, {label: '第三步放介绍卡', x: 78, y: 65}], matches: [0, 1, 2]
                }
            },
            {
                id: 'workshop-rope-01', baseId: 'rope', title: '棉绳平铺样本的材料册',
                partner: '纤维材料展示角的老师', item: '棉绳材料纪念页',
                mission: '“把棉绳样本、编织绳和跳绳照片收进材料册，不拿真绳！”',
                sceneLabel: '工坊样本盘里直线平铺的棉绳',
                sceneDescription: 'Three short thick cotton rope samples laid in straight parallel lines inside a broad shallow material display tray. Clearly show the twisted fiber texture and blunt securely finished ends from above, with no loops or knots. No people, scissors, loose threads, text, labels, logos or watermarks.',
                actionLabel: '收齐绳材料照片', actionResult: '平铺棉绳样本、盘好编织绳和平放跳绳三张照片都收齐了。',
                application: '给样本盘里平铺的棉绳照片放“绳”字牌。', ending: '老师夹好材料页，真实绳样仍由成人保管。',
                cloze: '样本盘里平铺着几段棉——。',
                homeTip: '自然见到绳的图片时，听孩子自己的纹路和用途描述，不要求找绳或打结；真绳由成人保管，不缠绕身体、不绑人。',
                game: {
                    type: 'collect', title: '纤维绳材料照片册', instruction: '把三张绳照片放进材料册，顺序不限。', success: '三张绳材料照片收齐了。', safety: '只收集屏幕照片，不拿真绳、不剪绳，不将绳绕颈或缠绕任何身体部位。',
                    pieces: [{label: '工坊样本盘里直线平铺的棉绳', variant: 0, photo: true}, {label: '盘好的编织绳', variant: 1, photo: true}, {label: '平放的跳绳', variant: 2, photo: true}],
                    targets: [{label: '纤维绳照片册', x: 50, y: 65}], matches: [0, 0, 0]
                }
            },
            {
                id: 'workshop-rope-02', baseId: 'rope', title: '短绳直线拼画的三槽板',
                partner: '材料拼画展示区的老师', item: '直线绳样纪念页',
                mission: '“把上、中、下三张绳样示意片放到对应槽位，不用真绳！”',
                sceneLabel: '工坊拼画板槽中平放的三段短绳',
                sceneDescription: 'Three short thick rope segments laid straight in three broad parallel recessed channels of a tabletop material collage board. The fibers and securely finished blunt ends are visible, with all segments fully contained in the board. Overhead view, no people, knots, loops, blades, labels, text or watermarks.',
                actionLabel: '放好三槽绳样示意片', actionResult: '上槽、中槽、下槽三张绳样示意片分别到位，直线拼画示意图完成了。',
                application: '给拼画板槽里的短绳照片放“绳”字牌。', ending: '老师留好纪念页，真实绳样只由成人布置和收回。',
                cloze: '拼画板槽里平放着三段短——。',
                homeTip: '自然看纤维材料图片时，听孩子自己的观察，不要求摆绳或模仿拼画；真绳由成人保管，不缠绕、不绑人、不玩环套。',
                game: {
                    type: 'build', title: '直线绳样三槽示意板', instruction: '把上槽、中槽、下槽绳样示意片放到同名位置，顺序不限。', success: '三张绳样示意片都到位了。', safety: '仅拼屏幕示意片，不拿绳、不剪绳、不打结、不缠绕身体，现实材料由成人处理。',
                    pieces: [{label: '上槽绳样示意片', variant: 0, photo: false}, {label: '中槽绳样示意片', variant: 0, photo: false}, {label: '下槽绳样示意片', variant: 0, photo: false}],
                    targets: [{label: '上槽位置', x: 50, y: 25}, {label: '中槽位置', x: 50, y: 50}, {label: '下槽位置', x: 50, y: 75}], matches: [0, 1, 2]
                }
            },
            {
                id: 'workshop-rope-03', baseId: 'rope', title: '绳纹展板的编织绳栏',
                partner: '工坊绳纹展的老师', item: '编织绳与跳绳对照页',
                mission: '“把编织绳材料照片放一栏，把带手柄的跳绳照片放另一栏！”',
                sceneLabel: '工坊绳纹展板上固定的编织绳样本',
                sceneDescription: 'A short thick braided rope sample mounted in a straight horizontal line on a neutral workshop texture display board. The interlaced fibers and securely finished ends are clearly visible, with the entire sample framed and no loose loops. No people, needles, cutting tools, captions, text, logos or watermarks.',
                actionLabel: '分好绳材料和跳绳照片', actionResult: '两张编织绳照片进了编织绳栏，一张平放跳绳照片进了跳绳栏。',
                application: '给展板上的编织绳样本照片放“绳”字牌。', ending: '老师夹好对照页，绳纹样本留在展板上供人观看。',
                cloze: '展板上这段材料是编织——。',
                homeTip: '自然翻看绳材料图时，听孩子自己的纹路或用途描述，不提示分类、不安排跳绳或结绳考查；绳线由成人保管。',
                game: {
                    type: 'sort', title: '编织绳材料与跳绳', instruction: '把编织绳照片放编织绳栏，把平放的跳绳照片放跳绳栏。', success: '两栏绳照片分好了。', safety: '只分类屏幕照片，不拿真绳、不跳绳，不绕颈、不绑人、不缠绕身体。',
                    pieces: [{label: '工坊绳纹展板上固定的编织绳样本', variant: 0, photo: true}, {label: '盘好的编织绳', variant: 1, photo: true}, {label: '平放的跳绳', variant: 2, photo: true}],
                    targets: [{label: '编织绳材料栏', x: 28, y: 65}, {label: '带手柄跳绳栏', x: 72, y: 65}], matches: [0, 0, 1]
                }
            },
            {
                id: 'workshop-rope-04', baseId: 'rope', title: '绳样透明盒的收纳顺序',
                partner: '材料角的管理老师', item: '绳样收纳纪念页',
                mission: '“用步骤卡安排请成人平放绳样、合盒、放入材料柜的顺序！”',
                sceneLabel: '工坊透明材料盒里平放的短绳样本',
                sceneDescription: 'A closed transparent material storage box containing several short thick rope samples laid straight in separate compartments on a workshop table. Show the complete box and visible twisted fibers through the lid, with no loops or exposed loose ends. No people, scissors, text, labels, logos or watermarks.',
                actionLabel: '排好绳样收纳卡', actionResult: '请成人平放绳样、合好盒盖、放入材料柜三张步骤卡依次到位。',
                application: '给透明盒里的短绳样本照片放“绳”字牌。', ending: '老师保存收纳页，真实绳样由成人收入柜中。',
                cloze: '透明材料盒里平放着短——样本。',
                homeTip: '自然看到材料盒图片时，听孩子自发的描述，不打开盒子考认字、不让孩子找绳；真绳由成人收好，不绕颈、不绑人。',
                game: {
                    type: 'sequence', title: '成人收好绳样三步', instruction: '按请成人平放绳样、合好盒盖、放入材料柜的顺序放步骤卡。', success: '三张绳样收纳步骤卡排好了。', safety: '只是屏幕流程，所有真实绳样和盒柜由成人处理，不拿绳、不缠绕、不打结，不强迫动手。',
                    pieces: [{label: '请成人平放绳样卡', variant: 0, photo: false}, {label: '合好盒盖卡', variant: 0, photo: false}, {label: '放入材料柜卡', variant: 0, photo: false}],
                    targets: [{label: '第一步成人平放', x: 22, y: 65}, {label: '第二步合盒', x: 50, y: 65}, {label: '第三步入柜', x: 78, y: 65}], matches: [0, 1, 2]
                }
            },
            {
                id: 'workshop-leaf-01', baseId: 'leaf', title: '银杏叶纹的拓画准备',
                partner: '叶纹创作角的老师', item: '银杏叶纹准备页',
                mission: '“把看叶照片、铺画纸、放纹样参考卡的准备步骤排好！”',
                sceneLabel: '工坊叶纹台上画纸旁的黄色银杏叶',
                sceneDescription: 'A single yellow fan-shaped ginkgo leaf lying flat beside a sheet of drawing paper bearing a simple leaf rubbing on a studio craft table. Center the real leaf and show its fan outline and radiating veins clearly with ample margin. No people, sharp tools, printed words, logos or watermarks.',
                actionLabel: '排好叶纹准备卡', actionResult: '看叶照片、铺画纸、放纹样参考卡三张准备卡按顺序排好了。',
                application: '给叶纹台上的黄色银杏叶照片放“叶”字牌。', ending: '老师夹好准备页，是否继续创作由孩子自己选择。',
                cloze: '画纸旁放着一片黄色银杏——。',
                homeTip: '自然散步遇到落叶或看叶纹图时，听孩子自己的形状描述，不要求拾叶配字、不先提示；不采摘，真实材料由成人准备。',
                game: {
                    type: 'sequence', title: '叶纹参考准备三步', instruction: '按看叶照片、铺画纸、放纹样参考卡的顺序放步骤卡。', success: '三张叶纹准备卡排好了。', safety: '只排屏幕准备卡，不要求捡叶、触摸或拓印；真实材料由成人确认清洁，不入口，不用锐器。',
                    pieces: [{label: '看叶照片卡', variant: 0, photo: false}, {label: '铺画纸卡', variant: 0, photo: false}, {label: '放纹样参考卡', variant: 0, photo: false}],
                    targets: [{label: '第一步看照片', x: 22, y: 65}, {label: '第二步铺纸', x: 50, y: 65}, {label: '第三步放参考卡', x: 78, y: 65}], matches: [0, 1, 2]
                }
            },
            {
                id: 'workshop-leaf-02', baseId: 'leaf', title: '枫叶与银杏叶的拼贴参考栏',
                partner: '落叶拼贴参考角的老师', item: '两种叶形参考页',
                mission: '“把红枫叶照片放一栏，把黄色银杏叶照片放另一栏！”',
                sceneLabel: '工坊拼贴参考板上平放的红色枫叶',
                sceneDescription: 'A real red maple leaf resting flat on a plain cream collage reference board on a craft table. Show the entire lobed leaf, short stem and branching veins clearly from above, with generous empty space around it. No people, scissors, text, captions, logos or watermarks.',
                actionLabel: '分好两种叶形照片', actionResult: '两张红色枫叶照片在枫叶栏，一张黄色银杏叶照片在银杏叶栏。',
                application: '给参考板上的红色枫叶照片放“叶”字牌。', ending: '老师收好参考页，真实拼贴可以慢慢自由构思。',
                cloze: '参考板上放着一片红色枫——。',
                homeTip: '自然遇到落叶图片时，听孩子自己怎样比较，不先强调颜色或要求分类；不安排采摘或捡叶测试，保持自然观察。',
                game: {
                    type: 'sort', title: '枫叶与银杏叶参考栏', instruction: '把红色枫叶照片放枫叶栏，把黄色银杏叶照片放银杏叶栏。', success: '两种叶形照片分栏完成。', safety: '只分类屏幕照片，不要求拾叶、剪叶或接触植物汁液，真实材料由成人准备。',
                    pieces: [{label: '工坊拼贴参考板上平放的红色枫叶', variant: 0, photo: true}, {label: '红色的枫叶', variant: 1, photo: true}, {label: '黄色的银杏叶', variant: 2, photo: true}],
                    targets: [{label: '红色枫叶栏', x: 28, y: 65}, {label: '黄色银杏叶栏', x: 72, y: 65}], matches: [0, 0, 1]
                }
            },
            {
                id: 'workshop-flower-01', baseId: 'flower', title: '花瓶写生台的照片册',
                partner: '花朵写生角的老师', item: '写生花朵纪念页',
                mission: '“请收下写生台、另一只花瓶和花园里花的三张照片！”',
                sceneLabel: '工坊写生台花瓶里插着的花',
                sceneDescription: 'Several fresh flowers in a plain ceramic vase on a studio still-life table beside a blank drawing pad. The blossoms are centered and fully visible with natural petals and stems, while the vase and paper establish the sketching setting. No people, text, scissors, logos or watermarks.',
                actionLabel: '收齐花的参考照片', actionResult: '写生台花朵、花瓶里的花和花园里的花三张照片都收齐了。',
                application: '给写生台花瓶里的花照片放“花”字牌。', ending: '老师夹好花朵参考页，想画哪朵可以自己选择。',
                cloze: '写生台的花瓶里插着几枝——。',
                homeTip: '自然经过花店或看家里的花时，听孩子自己的颜色和形状描述，不要求闻花、摸花或写生；成人处理花瓶水和修剪，不入口。',
                game: {
                    type: 'collect', title: '花朵写生参考册', instruction: '把三张花照片放进参考册，顺序不限。', success: '三张花朵参考照片收齐了。', safety: '只收集屏幕照片，不剪花、不接触花瓶水，不要求闻花或触摸花朵。',
                    pieces: [{label: '工坊写生台花瓶里插着的花', variant: 0, photo: true}, {label: '花瓶里插着的花', variant: 1, photo: true}, {label: '花园里开放的花', variant: 2, photo: true}],
                    targets: [{label: '花朵写生参考册', x: 50, y: 65}], matches: [0, 0, 0]
                }
            },
            {
                id: 'workshop-flower-02', baseId: 'flower', title: '压花卡的三格衬板',
                partner: '压花展示区的老师', item: '压花衬板纪念页',
                mission: '“把左、中、右三块衬板示意片放好，给压花卡准备展示位置！”',
                sceneLabel: '工坊压花卡上平铺的干花',
                sceneDescription: 'Three real flattened dried flowers with intact petals and short stems arranged on an unlettered cream display card on a craft table. Clearly show the delicate dry flower texture and recognizable blossoms from above, with the whole card visible. No people, presses, scissors, needles, text or watermarks.',
                actionLabel: '拼好压花卡衬板', actionResult: '左格、中格和右格三块衬板示意片都放好了。',
                application: '给压花卡上平铺的干花照片放“花”字牌。', ending: '老师留下衬板纪念页，真实干花留在卡片上供人观看。',
                cloze: '这张展示卡上平铺着干——。',
                homeTip: '自然翻看压花图或花朵照片时，听孩子主动说到的材料，不要求摸干花或照图摆；真实压制、保存和粘贴由成人处理。',
                game: {
                    type: 'build', title: '压花卡三格衬板', instruction: '把左格、中格、右格衬板示意片放到同名位置，顺序不限。', success: '压花卡的三块示意衬板到位了。', safety: '只拼屏幕衬板，不压真花、不采摘、不使用胶枪或尖锐工具，干花不入口。',
                    pieces: [{label: '左格衬板示意片', variant: 0, photo: false}, {label: '中格衬板示意片', variant: 0, photo: false}, {label: '右格衬板示意片', variant: 0, photo: false}],
                    targets: [{label: '左格衬板', x: 22, y: 65}, {label: '中格衬板', x: 50, y: 65}, {label: '右格衬板', x: 78, y: 65}], matches: [0, 1, 2]
                }
            },
            {
                id: 'workshop-bamboo-01', baseId: 'bamboo', title: '竹节写生架的观察相册',
                partner: '植物写生展示角的老师', item: '竹节写生观察页',
                mission: '“揭开写生相册，看看带节竹竿、带叶竹枝和竹林！”',
                sceneLabel: '工坊写生架前展示的带节竹竿',
                sceneDescription: 'Several upright green bamboo stalks with clearly visible nodes standing in a secure broad ceramic display holder beside a blank sketching easel in a plant drawing workshop. The lower stalk sections and multiple nodes are visible, while upper growth continues beyond the top of the image. Natural light, no loose splinters, people, saws, cutting tools, text, logos or watermarks.',
                actionLabel: '展开竹的观察相册', actionResult: '写生架竹竿、带叶竹枝和竹林三幅照片全部展开了。',
                application: '给写生架前带节竹竿的照片放“竹”字牌。', ending: '老师把竹节观察页夹好，写生可以从安静观看开始。',
                cloze: '写生架前展示着带节的——竿。',
                homeTip: '自然看竹子绘本或照片时，听孩子自己的发现，不先指出竹节或读字；不折竹、不碰竹刺，真实材料由成人布置。',
                game: {
                    type: 'reveal', title: '竹节写生参考相册', instruction: '自由揭开六块遮片，看看三幅完整竹照片。', success: '三幅竹照片全部展开了。', safety: '只揭开屏幕照片，不锯竹、不削竹、不搬竹竿，不要求触摸竹材。',
                    spots: ['看见工坊写生架前展示的带节竹竿。', '工坊写生架前展示的带节竹竿照片展开了。', '看见细细的带叶竹枝。', '细细的带叶竹枝照片展开了。', '看见一片长着竹子的竹林。', '一片长着竹子的竹林照片展开了。']
                }
            },
            {
                id: 'workshop-bamboo-02', baseId: 'bamboo', title: '竹枝画稿的素材册',
                partner: '植物画稿角的老师', item: '竹枝素材纪念页',
                mission: '“请把画稿旁的竹枝和另外两张竹照片收进素材册！”',
                sceneLabel: '工坊画稿旁花器里的带叶竹枝',
                sceneDescription: 'Leafy bamboo stems with visible segmented nodes displayed in a stable ceramic container beside a simple bamboo sketch on a studio table. The narrow leaves and lower stems are clearly visible, while some upper growth continues beyond the top of the image. No people, text, cutters, logos or watermarks.',
                actionLabel: '收齐竹的素材照片', actionResult: '画稿旁竹枝、另一处带叶竹枝和竹林三张照片都收进了素材册。',
                application: '给画稿旁带叶竹枝的照片放“竹”字牌。', ending: '老师收好素材页，竹枝和竹林都能成为自由创作的参考。',
                cloze: '画稿旁的花器里展示着带叶——枝。',
                homeTip: '自然翻看竹子照片时，听孩子自己的观察，不要求照图画、不先提示名称；真实花器和竹枝由成人拿放，不折枝或碰刺。',
                game: {
                    type: 'collect', title: '竹枝画稿素材册', instruction: '把三张竹照片放进素材册，先放哪张都可以。', success: '三张竹素材照片收齐了。', safety: '只收集屏幕照片，不采竹、不剪枝、不触碰尖端或花器里的水，现实材料由成人处理。',
                    pieces: [{label: '工坊画稿旁花器里的带叶竹枝', variant: 0, photo: true}, {label: '细细的带叶竹枝', variant: 1, photo: true}, {label: '一片长着竹子的竹林', variant: 2, photo: true}],
                    targets: [{label: '竹枝画稿素材册', x: 50, y: 65}], matches: [0, 0, 0]
                }
            },
            {
                id: 'workshop-book-01', baseId: 'book', title: '空白装订书的封面拼板',
                partner: '自制作品书展示角的老师', item: '作品书封面纪念页',
                mission: '“把封面底板、上边条、下边条示意片放好，不用真实装订！”',
                sceneLabel: '工坊展示垫上合着的空白装订书',
                sceneDescription: 'A small finished blank handmade book lying closed on a padded craft display mat. Show its plain thick paper cover, clearly bound spine and layered pages from a three-quarter overhead angle. No loose binding threads, people, needles, staplers, printed text, logos or watermarks.',
                actionLabel: '拼好作品书封面示意板', actionResult: '封面底板、上边条和下边条三块示意片都放到位了。',
                application: '给展示垫上的空白装订书照片放“书”字牌。', ending: '老师保存封面纪念页，作品书可以慢慢加入自己的图画。',
                cloze: '展示垫上放着一本合着的空白——。',
                homeTip: '孩子自然翻看或画自己的图画书时，听他的想法，不指定目标页、不要求读字才创作；真实装订由成人处理。',
                game: {
                    type: 'build', title: '作品书封面示意拼板', instruction: '把封面底板、上边条和下边条放到对应位置，顺序不限。', success: '三块封面示意片全部到位。', safety: '只拼屏幕封面片，不用针线、订书机、裁纸刀或真实装订工具。',
                    pieces: [{label: '封面底板示意片', variant: 0, photo: false}, {label: '封面上边条示意片', variant: 0, photo: false}, {label: '封面下边条示意片', variant: 0, photo: false}],
                    targets: [{label: '封面底板位置', x: 50, y: 50}, {label: '上边条位置', x: 50, y: 22}, {label: '下边条位置', x: 50, y: 78}], matches: [0, 1, 2]
                }
            },
            {
                id: 'workshop-book-02', baseId: 'book', title: '工坊作品书的翻页准备',
                partner: '作品阅读角的老师', item: '作品书翻页纪念页',
                mission: '“把留好桌面、平放作品书、轻翻书页的步骤卡排好吧！”',
                sceneLabel: '工坊阅读垫上打开的图画作品书',
                sceneDescription: 'An open bound handmade picture book resting on a soft reading mat on a workshop table. Its two visible pages contain simple unlettered paper collage shapes, and the bound spine and page edges are clear. Frame the entire book in soft daylight. No people, readable words, tools, logos or watermarks.',
                actionLabel: '排好作品书翻页卡', actionResult: '留好桌面、平放作品书、轻翻书页三张步骤卡按顺序排好了。',
                application: '给阅读垫上打开的作品书照片放“书”字牌。', ending: '老师留下翻页纪念页，孩子想看哪一页可以自己选择。',
                cloze: '阅读垫上打开了一本图画作品——。',
                homeTip: '孩子自然翻书时，听他愿意说的图画和书页，不替他选页、不追问字音；不以识字表现限制阅读或创作。',
                game: {
                    type: 'sequence', title: '作品书翻页准备三步', instruction: '按留好桌面、平放作品书、轻翻书页的顺序放步骤卡。', success: '三张作品书翻页步骤卡排好了。', safety: '只排屏幕流程，不要求反复翻真书或提供姓名，不操作真实装订工具。',
                    pieces: [{label: '留好桌面卡', variant: 0, photo: false}, {label: '平放作品书卡', variant: 0, photo: false}, {label: '轻翻书页卡', variant: 0, photo: false}],
                    targets: [{label: '第一步留桌面', x: 22, y: 65}, {label: '第二步平放书', x: 50, y: 65}, {label: '第三步轻翻页', x: 78, y: 65}], matches: [0, 1, 2]
                }
            },
            {
                id: 'workshop-table-01', baseId: 'table', title: '拼贴长桌的空位分区',
                partner: '拼贴工坊的布置老师', item: '拼贴桌面分区纪念页',
                mission: '“把材料区、创作区和作品区三张示意垫片放到桌面图上！”',
                sceneLabel: '拼贴工坊里留出大片空位的长桌',
                sceneDescription: 'A sturdy long craft table in a bright collage workshop, with a small stack of soft paper at one side and an unlettered finished collage card at the other, leaving a broad clear tabletop in the middle. The tabletop spans the image horizontally with its outer ends beyond the side edges, and supporting legs are visible below. No people, sharp tools, text or watermarks.',
                actionLabel: '放好桌面三块分区片', actionResult: '左边材料区、中间创作区和右边作品区三张示意垫片都到位了。',
                application: '给工坊里的拼贴长桌照片放“桌”字牌。', ending: '老师收好分区纪念页，真实桌面布置由成人确认。',
                cloze: '拼贴工坊里摆着一张长——。',
                homeTip: '日常自然在桌上摆东西时，听孩子自己的位置描述，不先读字、不要求分区；不攀桌、不搬重桌，工具由成人收好。',
                game: {
                    type: 'build', title: '拼贴桌面三分区示意板', instruction: '把材料区、创作区和作品区示意片放到同名位置，顺序不限。', success: '桌面三块分区示意片到位了。', safety: '只放屏幕分区片，不搭真桌、不搬家具、不攀桌，不使用锋利工具。',
                    pieces: [{label: '材料区示意垫片', variant: 0, photo: false}, {label: '创作区示意垫片', variant: 0, photo: false}, {label: '作品区示意垫片', variant: 0, photo: false}],
                    targets: [{label: '左边材料区', x: 22, y: 65}, {label: '中间创作区', x: 50, y: 65}, {label: '右边作品区', x: 78, y: 65}], matches: [0, 1, 2]
                }
            },
            {
                id: 'workshop-stone-01', baseId: 'stone', title: '圆石写生台的照片册',
                partner: '静物写生角的老师', item: '圆石写生参考页',
                mission: '“请把写生台上的石头和花园、池塘里的石头照片收进参考册！”',
                sceneLabel: '工坊写生台软垫上摆放的圆石',
                sceneDescription: 'Three broad smooth rounded stones resting on a padded still-life table beside a blank sketch pad in a workshop drawing corner. Show their natural mineral textures, varied gray tones and complete rounded outlines from a gentle overhead angle. No people, carving tools, loose gravel, text, logos or watermarks.',
                actionLabel: '收齐石头参考照片', actionResult: '写生台圆石、花园铺路石和池塘石头三张照片都收齐了。',
                application: '给写生台上的圆石照片放“石”字牌。', ending: '老师夹好参考页，真实石头留在台上由成人管理。',
                cloze: '写生台的软垫上摆放着圆圆的——头。',
                homeTip: '自然看静物照片或公园步道时，听孩子自己的石头描述，不要求捡石或配字；不搬重石、不把石头放入口中，不使用雕刻工具。',
                game: {
                    type: 'collect', title: '圆石写生参考册', instruction: '把三张石头照片放进参考册，顺序不限。', success: '三张石头参考照片收齐了。', safety: '只收集屏幕照片，不捡小石、不搬石、不雕刻，真实石材由成人布置。',
                    pieces: [{label: '工坊写生台软垫上摆放的圆石', variant: 0, photo: true}, {label: '花园里铺路的石头', variant: 1, photo: true}, {label: '池塘里的石头', variant: 2, photo: true}],
                    targets: [{label: '圆石写生参考册', x: 50, y: 65}], matches: [0, 0, 0]
                }
            },
            {
                id: 'workshop-sand-01', baseId: 'sand', title: '密封沙纹盒的观察册',
                partner: '纹理材料展示角的老师', item: '沙纹材料观察页',
                mission: '“不用打开沙盒，把沙纹、沙堡和桶旁沙的照片收进观察册！”',
                sceneLabel: '工坊密封透明沙纹盒里的细沙',
                sceneDescription: 'A sealed shallow transparent display box containing a broad layer of fine natural sand with gentle parallel grooves on a workshop texture study table. Show the sand grains clearly through the lid and the entire securely closed box. No people, loose airborne sand, tools, printed labels, text, logos or watermarks.',
                actionLabel: '收齐沙纹材料照片', actionResult: '密封盒细沙、沙堡和沙滩桶旁的沙三张照片都收进了观察册。',
                application: '给密封透明盒里的细沙照片放“沙”字牌。', ending: '老师留下沙纹页，真实沙盒保持关闭，不需要摸沙。',
                cloze: '密封透明盒里装着细——。',
                homeTip: '自然看沙滩或材料图片时，听孩子自发的纹理描述，不提示字音、不要求触摸；不打开展示盒、不扬沙，沙不入口或入眼。',
                game: {
                    type: 'collect', title: '沙纹材料照片册', instruction: '把三张沙照片放进观察册，顺序不限，不需要摸沙。', success: '三张沙材料照片收齐了。', safety: '只收集屏幕照片，不打开真沙盒、不扬沙、不玩散粒，不要求触摸，真实材料由成人处理。',
                    pieces: [{label: '工坊密封透明沙纹盒里的细沙', variant: 0, photo: true}, {label: '堆成城堡的沙', variant: 1, photo: true}, {label: '沙滩桶旁铺着的沙', variant: 2, photo: true}],
                    targets: [{label: '沙纹材料观察册', x: 50, y: 65}], matches: [0, 0, 0]
                }
            },
            {
                id: 'workshop-wheel-01', baseId: 'wheel', title: '模型推车轮的对照页',
                partner: '推车模型展示区的老师', item: '车轮用途对照纪念页',
                mission: '“把模型推车和手推车的轮照片放一栏，把汽车轮照片放另一栏！”',
                sceneLabel: '工坊桌面模型推车上装好的车轮',
                sceneDescription: 'A small finished tabletop model handcart with a simple wooden bed and two large round wheels mounted on a visible axle, resting motionless on a craft mat. Frame the complete model and emphasize the circular wheel and central axle connection. No people, tools, loose parts, printed text, logos or watermarks.',
                actionLabel: '分好推车轮和汽车轮照片', actionResult: '模型推车轮和手推车轮照片在推车栏，汽车轮照片在汽车栏。',
                application: '给模型推车上装好的车轮照片放“轮”字牌。', ending: '老师夹好对照页，模型不需要拆轮或实际推动。',
                cloze: '模型推车上装着圆圆的车——。',
                homeTip: '自然看已有推车模型或车轮照片时，听孩子自己的用途描述，不要求转轮辨字；远离道路和转动部件，真实维修由成人处理。',
                game: {
                    type: 'sort', title: '推车轮与汽车轮照片栏', instruction: '把模型推车轮和手推车轮照片放推车栏，把汽车轮照片放汽车栏。', success: '两栏车轮照片分好了。', safety: '只分类屏幕照片，不拆模型轮、不碰车轴或转动部件，不用真实维修工具。',
                    pieces: [{label: '工坊桌面模型推车上装好的车轮', variant: 0, photo: true}, {label: '汽车的轮', variant: 1, photo: true}, {label: '手推车的轮', variant: 2, photo: true}],
                    targets: [{label: '模型推车与手推车轮', x: 28, y: 65}, {label: '汽车轮', x: 72, y: 65}], matches: [0, 1, 0]
                }
            }
        ]
    };
});
