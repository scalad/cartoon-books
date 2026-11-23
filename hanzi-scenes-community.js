(function (root, factory) {
    const catalog = factory();
    if (typeof module === 'object' && module.exports) module.exports = catalog;
    if (typeof window !== 'undefined') (window.HanziSceneCatalogs ||= []).push(catalog);
})(typeof window !== 'undefined' ? window : globalThis, function () {
    return {
        category: '社区游玩',
        stories: [
            {
                id: 'community-book-01', baseId: 'book', title: '树荫借阅点的翻页册',
                partner: '社区借阅点的管理员', item: '树荫借阅纪念页',
                mission: '“借阅点刚摆好，请把三张书的照片收进介绍册！”',
                sceneLabel: '社区树荫借阅架上的绘本',
                sceneDescription: 'A small outdoor community book exchange shelf under a leafy tree, holding several closed picture books with visible bound page edges. Center the shelf and books in soft daylight with the courtyard behind them; no people, lettering, logos or watermarks.',
                actionLabel: '把书照片收进册子', actionResult: '三张书的照片都进了介绍册，树荫借阅点有了小小介绍页。',
                application: '给树荫借阅架上的绘本照片放“书”字牌。', ending: '管理员把介绍页留在借阅点，下一位读者可以慢慢翻看。',
                cloze: '借阅架上排着可以翻看的——',
                homeTip: '和家人自然经过共享书架时，听孩子是否自己谈到书页或想借哪一本；不先指字、不追问读音，也不以认字限制借阅。',
                game: {
                    type: 'collect', title: '借阅点介绍册', instruction: '把三张照片任意顺序放进介绍册。', success: '三张书照片已经收齐。', safety: '只在屏幕上收集照片；现实选书由成人陪伴，不攀书架。',
                    pieces: [{label: '社区树荫借阅架上的绘本', variant: 0, photo: true}, {label: '一本打开的书', variant: 1, photo: true}, {label: '书架上排着的书', variant: 2, photo: true}],
                    targets: [{label: '借阅点介绍册', x: 50, y: 65}], matches: [0, 0, 0]
                }
            },
            {
                id: 'community-book-02', baseId: 'book', title: '活动室归书口的小流程',
                partner: '活动室的图书志愿者', item: '归书流程纪念页',
                mission: '“这本书要交给志愿者，请在屏幕上排好归书步骤！”',
                sceneLabel: '社区活动室归书托盘里的绘本',
                sceneDescription: 'A closed bound picture book resting flat in a shallow book return tray on a low counter inside a community reading room. Show the book cover, page block and tray clearly, with shelves softly blurred behind; no people, readable text, logos or watermarks.',
                actionLabel: '排好归书步骤', actionResult: '合书、放进托盘、交给志愿者三张步骤卡依次到位。',
                application: '给归书托盘里的绘本照片放“书”字牌。', ending: '志愿者收下流程页，让每本书都能等到下一位读者。',
                cloze: '归书托盘里放着一本——',
                homeTip: '日常归还绘本时，留意孩子自然说到的物品和动作，不先示范答案、不要求复述流程；真实归还手续由成人协助。',
                game: {
                    type: 'sequence', title: '归书三步卡', instruction: '按合上书、放入托盘、交给志愿者的顺序放卡。', success: '三张归书步骤卡按顺序排好了。', safety: '屏幕模拟不需要借阅账号、姓名或真实登记信息。',
                    pieces: [{label: '合上书的步骤卡', variant: 0, photo: false}, {label: '放入托盘的步骤卡', variant: 0, photo: false}, {label: '交给志愿者的步骤卡', variant: 0, photo: false}],
                    targets: [{label: '第一步', x: 22, y: 65}, {label: '第二步', x: 50, y: 65}, {label: '第三步', x: 78, y: 65}], matches: [0, 1, 2]
                }
            },
            {
                id: 'community-book-03', baseId: 'book', title: '街角阅读亭的两栏展页',
                partner: '阅读亭的值班老师', item: '阅读亭两栏纪念页',
                mission: '“一栏介绍阅读亭，一栏放延伸观察照片，请帮照片找到位置！”',
                sceneLabel: '街角阅读亭桌上打开的图画书',
                sceneDescription: 'An open picture book on a wooden reading table inside a sheltered neighborhood reading pavilion. The bound pages and simple unlettered illustrations are clear in the foreground, with the pavilion roof supports visible behind; no people, readable words, logos or watermarks.',
                actionLabel: '分好两栏书照片', actionResult: '阅读亭照片留在本次记录栏，另外两张书照片放进延伸观察栏。',
                application: '给阅读亭桌上打开的图画书照片放“书”字牌。', ending: '老师把两栏展页摆好，大家可以看看书的不同样子。',
                cloze: '阅读亭的桌上打开了一本——',
                homeTip: '自然在阅读角停留时，听孩子自己的选书理由，不指定页码、不要求按展页分类，也不追问目标字。',
                game: {
                    type: 'sort', title: '阅读亭记录与延伸观察', instruction: '把阅读亭照片放本次记录栏，另外两张照片放延伸观察栏。', success: '两栏照片都放到了约定的位置。', safety: '只整理屏幕照片，不移动公共书架或重家具。',
                    pieces: [{label: '街角阅读亭桌上打开的图画书', variant: 0, photo: true}, {label: '一本打开的书', variant: 1, photo: true}, {label: '书架上排着的书', variant: 2, photo: true}],
                    targets: [{label: '本次阅读亭记录', x: 28, y: 65}, {label: '延伸观察', x: 72, y: 65}], matches: [0, 1, 1]
                }
            },
            {
                id: 'community-book-04', baseId: 'book', title: '邻里旧书交换桌的相册',
                partner: '旧书交换活动的志愿者', item: '旧书交换观察页',
                mission: '“交换桌准备好了，揭开相册看看书的几种样子吧！”',
                sceneLabel: '邻里旧书交换桌上叠放的书',
                sceneDescription: 'A tidy stack of gently worn bound books on a community book swap table in a bright meeting room. Center the complete stack with visible cloth covers and page edges, leaving a clear margin around it; no people, printed text, logos or watermarks.',
                actionLabel: '揭开交换桌相册', actionResult: '三幅书的照片全部展开，交换桌、打开的书和书架都能看见了。',
                application: '给旧书交换桌上叠放的书照片放“书”字牌。', ending: '志愿者留好观察页，旧书也有了继续被阅读的机会。',
                cloze: '邻里交换桌上叠放着几本——',
                homeTip: '自然翻看家里的旧书时，听孩子是否主动提起封面或书页，不先圈出字、不要求说出共同名称；保留孩子自己的说法。',
                game: {
                    type: 'reveal', title: '旧书交换相册', instruction: '自由揭开六块遮片，看看三幅完整照片。', success: '三幅书的照片都展开了。', safety: '只揭开屏幕照片，不要求搬运成摞的真书。',
                    spots: ['看见邻里旧书交换桌上叠放的书。', '邻里旧书交换桌上叠放的书照片展开了。', '看见一本打开的书。', '一本打开的书照片展开了。', '看见书架上排着的书。', '书架上排着的书照片展开了。']
                }
            },
            {
                id: 'community-ball-01', baseId: 'ball', title: '围栏内软球角的器材册',
                partner: '社区运动角的老师', item: '软球角器材纪念页',
                mission: '“软球角的介绍册还缺照片，请把三张球照片放进来！”',
                sceneLabel: '社区围栏内软垫上的软布球',
                sceneDescription: 'A round stitched fabric play ball on a clean foam mat inside a fenced community recreation corner. Show the whole soft ball with fabric seams and the flat enclosed play surface, with no road in the play area; no people, text, logos or watermarks.',
                actionLabel: '收齐球的照片', actionResult: '软球角的软布球、篮球和另一只软布球照片都收进了器材册。',
                application: '给围栏内软垫上的软布球照片放“球”字牌。', ending: '老师收好器材册，运动角的介绍准备好了。',
                cloze: '软垫上放着一只圆圆的软布——',
                homeTip: '在成人陪伴下自然玩软球时，听孩子自己的描述，不考速度或命中；只在远离道路的平坦区域活动。',
                game: {
                    type: 'collect', title: '运动角球照片册', instruction: '把三张球照片放进同一本器材册。', success: '三张球照片全部收齐。', safety: '只操作屏幕照片；真实玩球由成人陪伴，不追球到道路上。',
                    pieces: [{label: '社区围栏内软垫上的软布球', variant: 0, photo: true}, {label: '一只篮球', variant: 1, photo: true}, {label: '一只软布球', variant: 2, photo: true}],
                    targets: [{label: '运动角器材册', x: 50, y: 68}], matches: [0, 0, 0]
                }
            },
            {
                id: 'community-ball-02', baseId: 'ball', title: '小球场篮球的分栏介绍',
                partner: '小球场的器材管理员', item: '球场分栏纪念页',
                mission: '“把篮球照片放在一栏，软布球照片放在另一栏吧！”',
                sceneLabel: '社区小球场边架子上的篮球',
                sceneDescription: 'A single orange basketball resting in a low storage cradle beside an empty fenced neighborhood basketball court. Center the entire ball with clear pebbled texture and black curved seams, with the court softly visible behind; no people, lettering, logos or watermarks.',
                actionLabel: '分开篮球和软布球照片', actionResult: '两张篮球照片在篮球栏，一张软布球照片在软布球栏。',
                application: '给小球场边架子上的篮球照片放“球”字牌。', ending: '管理员把分栏页夹进器材册，两种球都各有位置。',
                cloze: '小球场的架子上放着一只篮——',
                homeTip: '自然看到球场器材时，记录孩子主动说到的纹路和用途，不先提示分类；留在开放安全区域，不碰器材架。',
                game: {
                    type: 'sort', title: '篮球与软布球', instruction: '按照片放入篮球栏或软布球栏。', success: '两种球的照片分栏完成。', safety: '不要求幼儿进入球赛场地或搬动器材。',
                    pieces: [{label: '社区小球场边架子上的篮球', variant: 0, photo: true}, {label: '一只篮球', variant: 1, photo: true}, {label: '一只软布球', variant: 2, photo: true}],
                    targets: [{label: '篮球照片', x: 28, y: 65}, {label: '软布球照片', x: 72, y: 65}], matches: [0, 0, 1]
                }
            },
            {
                id: 'community-ball-03', baseId: 'ball', title: '室内滚球垫的准备顺序',
                partner: '亲子活动室的带班老师', item: '滚球准备纪念页',
                mission: '“先摆好准备卡，再看看滚球垫上的球！”',
                sceneLabel: '社区活动室滚球垫起点的软球',
                sceneDescription: 'A round soft fabric ball at the beginning of a wide foam rolling mat in an uncluttered community activity room. Show the complete ball and low flat mat from a gentle elevated angle, with ample clear floor space; no people, text, logos or watermarks.',
                actionLabel: '排好滚球准备卡', actionResult: '检查空地、摆好软垫、放好软球三张准备卡依次排好了。',
                application: '给滚球垫起点的软球照片放“球”字牌。', ending: '老师收下准备页，这一轮屏幕上的布置完成了。',
                cloze: '滚球垫的起点放着一只软——',
                homeTip: '日常活动自然用到软球时，听孩子是否提到摆放位置，不要求按步骤演示；成人确认地面平坦、周围没有障碍。',
                game: {
                    type: 'sequence', title: '滚球角准备三步', instruction: '按检查空地、摆软垫、放软球的顺序放步骤卡。', success: '三张准备卡顺序完整。', safety: '这是屏幕准备流程，不要求奔跑、投掷或完成真实滚球。',
                    pieces: [{label: '检查空地卡', variant: 0, photo: false}, {label: '摆好软垫卡', variant: 0, photo: false}, {label: '放好软球卡', variant: 0, photo: false}],
                    targets: [{label: '第一步', x: 22, y: 66}, {label: '第二步', x: 50, y: 66}, {label: '第三步', x: 78, y: 66}], matches: [0, 1, 2]
                }
            },
            {
                id: 'community-ball-04', baseId: 'ball', title: '球具展示窗的三格画框',
                partner: '社区器材展的布置员', item: '球具三格展示页',
                mission: '“请用示意框片拼一张球具展示页，不用修理真实器材！”',
                sceneLabel: '社区球具展示窗里的足球',
                sceneDescription: 'A black and white soccer ball resting on a padded shelf inside a neighborhood sports equipment display window. Frame the entire ball and its pentagonal panels clearly, with a simple indoor background and soft reflections; no people, text, logos or watermarks.',
                actionLabel: '拼好球具展示框', actionResult: '上框片、下框片和标题底板都放到位，展示页的示意框拼好了。',
                application: '给球具展示窗里的足球照片放“球”字牌。', ending: '布置员把展示页保存下来，足球的照片有了自己的画框。',
                cloze: '展示窗里摆着一只足——',
                homeTip: '自然经过运动器材橱窗时，听孩子主动谈到哪件物品，不先读标签、不设置找球任务，也不敲打玻璃。',
                game: {
                    type: 'build', title: '球具展示框示意拼板', instruction: '把上框片、下框片和标题底板放到各自位置，顺序不限。', success: '展示框的三块示意拼板都到位了。', safety: '只拼屏幕示意板，不安装真实玻璃或展示架。',
                    pieces: [{label: '上框示意片', variant: 0, photo: false}, {label: '下框示意片', variant: 0, photo: false}, {label: '标题底板示意片', variant: 0, photo: false}],
                    targets: [{label: '上框位置', x: 50, y: 24}, {label: '下框位置', x: 50, y: 72}, {label: '标题底板位置', x: 50, y: 88}], matches: [0, 1, 2]
                }
            },
            {
                id: 'community-school-01', baseId: 'school', title: '校园开放日的集合小地图',
                partner: '校园开放日的接待老师', item: '开放日集合纪念页',
                mission: '“在屏幕地图上从校门走到教学楼前，再到接待集合点！”',
                sceneLabel: '校园开放日接待桌旁的校门',
                sceneDescription: 'A clearly recognizable school entrance with a gate, a visible teaching building beyond it and a small reception table just inside. Frame the full gate and school setting in daytime without identifying the school; no people, readable signs, logos or watermarks.',
                actionLabel: '走完开放日屏幕路线', actionResult: '屏幕地图依次经过校门和教学楼前，最后到达老师接待集合点。',
                application: '给开放日校门照片放“校”字牌，表示学校的校。', ending: '老师把集合页放进参观册，真实参观仍由家人和老师陪同。',
                cloze: '开放日接待桌所在的校园属于这所学——',
                homeTip: '在允许参观的校园里，听孩子自然说到的场所，不把任意大楼叫作学校；成人全程陪同，不要求孩子独自带路。',
                game: {
                    type: 'route', title: '开放日集合地图', instruction: '依次点校门、教学楼前、老师接待集合点三个屏幕地点。', success: '屏幕路线到达老师接待集合点。', safety: '仅为屏幕地图；真实进校园须经允许并由成人和老师陪同。',
                    steps: [{label: '到校门', result: '屏幕标记到达校门。'}, {label: '到教学楼前', result: '屏幕标记到达教学楼前。'}, {label: '到老师接待集合点', result: '屏幕标记到达老师接待集合点。'}],
                    targets: [{label: '校门', x: 20, y: 75}, {label: '教学楼前', x: 50, y: 48}, {label: '老师接待集合点', x: 78, y: 25}]
                }
            },
            {
                id: 'community-school-02', baseId: 'school', title: '教学楼前的校园介绍册',
                partner: '校园介绍活动的老师', item: '校园建筑介绍页',
                mission: '“介绍册要收下学校的楼和教室，请帮忙放好三张照片！”',
                sceneLabel: '学校教学楼前的空旷集合区',
                sceneDescription: 'A school teaching building with rows of classroom windows, seen across an empty paved assembly area within a campus. Center the building and show the connected school courtyard in natural daylight; no people, readable lettering, logos or watermarks.',
                actionLabel: '收齐校园照片', actionResult: '本次教学楼、另一处教学楼和学校教室的照片都收进了校园介绍册。',
                application: '给学校教学楼照片放“校”字牌，说明它是学校的一部分。', ending: '老师夹好介绍页，参观时可以再慢慢看这些校园场所。',
                cloze: '照片里的教学楼属于这所学——',
                homeTip: '自然翻看学校介绍图时，留意孩子自己的描述，不先指出楼的名称、不要求辨认；不要拍摄或填写学生个人信息。',
                game: {
                    type: 'collect', title: '学校场所照片册', instruction: '把三张学校场所照片放进介绍册，先放哪张都可以。', success: '三张校园照片收齐了。', safety: '只收集已有屏幕照片，不拍学生、不填写真实学校或学生资料。',
                    pieces: [{label: '学校教学楼前的空旷集合区', variant: 0, photo: true}, {label: '学校的教学楼', variant: 1, photo: true}, {label: '学校的教室', variant: 2, photo: true}],
                    targets: [{label: '校园介绍册', x: 50, y: 65}], matches: [0, 0, 0]
                }
            },
            {
                id: 'community-school-03', baseId: 'school', title: '校园图书室的开放日相册',
                partner: '图书室的接待老师', item: '校园图书室观察页',
                mission: '“揭开开放日相册，看看图书室和学校其他地方！”',
                sceneLabel: '学校图书室里的低书架和阅读桌',
                sceneDescription: 'An empty school library with low book shelves, reading tables and a view through an interior doorway toward a school corridor. Show the coherent educational room in soft daylight, without identifying details; no people, readable book titles, signs, logos or watermarks.',
                actionLabel: '展开校园场所相册', actionResult: '图书室、教学楼和教室的三幅学校场所照片全部展开了。',
                application: '给学校图书室照片放“校”字牌，表示这间图书室在学校里。', ending: '老师收好观察页，这次相册记录了学校的三个场所。',
                cloze: '这间图书室所在的校园属于这所学——',
                homeTip: '自然谈到学校生活时，听孩子愿意分享的场所，不追问学校地址或同学姓名，不把每间阅读室都当成学校。',
                game: {
                    type: 'reveal', title: '学校里的三处场所', instruction: '自由揭开六块遮片，观察三幅完整校园照片。', success: '三幅学校场所照片都展开了。', safety: '只看屏幕场所照片，不要求独自进入图书室或提供个人信息。',
                    spots: ['看见学校图书室里的低书架和阅读桌。', '学校图书室里的低书架和阅读桌照片展开了。', '看见学校的教学楼。', '学校的教学楼照片展开了。', '看见学校的教室。', '学校的教室照片展开了。']
                }
            },
            {
                id: 'community-shop-01', baseId: 'shop', title: '街角文具店的陪同购物图',
                partner: '陪同购物的家人', item: '文具店到达纪念页',
                mission: '“在屏幕地图上经过街角花坛和人行道，找到文具店门前！”',
                sceneLabel: '街角陈列本子和画笔的文具店',
                sceneDescription: 'A neighborhood stationery shop storefront with notebooks and drawing tools displayed behind a window, beside a clear sidewalk. Center the whole storefront and recognizable merchandise in daytime; no people, readable signs, labels, logos or watermarks.',
                actionLabel: '找到屏幕上的文具店', actionResult: '屏幕路线经过街角花坛和人行道，最后到达文具店门前。',
                application: '给文具店店面照片放“店”字牌。', ending: '家人收好到达页，现实购物时大家仍一起行动。',
                cloze: '街角卖本子和画笔的地方是一家文具——',
                homeTip: '陪家人自然购物时，听孩子是否主动谈到橱窗商品，不先读招牌、不逐店提问；成人陪伴并以看路为先。',
                game: {
                    type: 'route', title: '文具店屏幕地图', instruction: '依次点街角花坛、人行道、文具店门前三个地点。', success: '屏幕标记到达文具店门前。', safety: '全程是屏幕地图，不模拟独自过街；真实购物由成人陪伴。',
                    steps: [{label: '到街角花坛', result: '屏幕标记到了街角花坛。'}, {label: '到人行道', result: '屏幕标记到了人行道。'}, {label: '到文具店门前', result: '屏幕标记到了文具店门前。'}],
                    targets: [{label: '街角花坛', x: 20, y: 75}, {label: '人行道', x: 50, y: 50}, {label: '文具店门前', x: 78, y: 27}]
                }
            },
            {
                id: 'community-shop-02', baseId: 'shop', title: '书店橱窗与其他店面的两栏页',
                partner: '社区街景展的志愿者', item: '街边店面分栏页',
                mission: '“书店橱窗留在本次记录栏，花店和面包店放到其他参考栏！”',
                sceneLabel: '社区书店摆着书的橱窗店面',
                sceneDescription: 'A small neighborhood bookshop storefront with bound books arranged inside its display window and a visible entrance. Center the complete shopfront on a calm pedestrian street in soft daylight; no people, readable words, logos or watermarks.',
                actionLabel: '分好街景照片两栏', actionResult: '书店店面放入本次记录栏，花店和面包店店面放入其他参考栏。',
                application: '给社区书店店面照片放“店”字牌。', ending: '志愿者夹好两栏页，街上不同的小店都留有一张照片。',
                cloze: '橱窗里摆着书，街边卖书的地方是一家书——',
                homeTip: '自然经过书店时，听孩子说到的店面或书，不先提示总名称、不要求分类；不拍摄顾客或记录真实地址。',
                game: {
                    type: 'sort', title: '书店记录与其他参考', instruction: '按约定把书店放本次记录栏，另两张店面放其他参考栏。', success: '本次记录和其他参考两栏整理好了。', safety: '只整理已有屏幕照片，不收集店员或顾客个人资料。',
                    pieces: [{label: '社区书店摆着书的橱窗店面', variant: 0, photo: true}, {label: '花店的店面', variant: 1, photo: true}, {label: '面包店的店面', variant: 2, photo: true}],
                    targets: [{label: '本次书店记录', x: 28, y: 65}, {label: '其他店面参考', x: 72, y: 65}], matches: [0, 1, 1]
                }
            },
            {
                id: 'community-shop-03', baseId: 'shop', title: '社区玩具店的展示小框',
                partner: '街景展的布置老师', item: '玩具店展示纪念页',
                mission: '“给玩具店照片拼好展示框，真实橱窗不用动！”',
                sceneLabel: '社区玩具店陈列木积木的店面',
                sceneDescription: 'A neighborhood toy shop storefront displaying large wooden blocks and simple toy vehicles behind glass. Show the doorway and merchandise together in a balanced front view, with realistic wood and glass texture; no people, readable signs, logos or watermarks.',
                actionLabel: '拼好玩具店展示框', actionResult: '左框片、右框片和底座片都放到位，玩具店照片的示意展示框完成了。',
                application: '给玩具店店面照片放“店”字牌。', ending: '老师收好展示页，街景展又多了一家卖玩具的小店。',
                cloze: '展示窗里摆着木积木，卖玩具的地方是一家玩具——',
                homeTip: '自然经过玩具店时，听孩子自己的观察，不用买玩具交换识字表现，也不让孩子拆动店内陈列。',
                game: {
                    type: 'build', title: '店面照片示意框', instruction: '把左框片、右框片、底座片放到对应位置，顺序不限。', success: '三块示意框片都安放好了。', safety: '只拼屏幕框片，不接触真实橱窗、工具或玻璃。',
                    pieces: [{label: '左框示意片', variant: 0, photo: false}, {label: '右框示意片', variant: 0, photo: false}, {label: '底座示意片', variant: 0, photo: false}],
                    targets: [{label: '左框位置', x: 22, y: 48}, {label: '右框位置', x: 78, y: 48}, {label: '底座位置', x: 50, y: 78}], matches: [0, 1, 2]
                }
            },
            {
                id: 'community-shop-04', baseId: 'shop', title: '小杂货店的邻里店面册',
                partner: '邻里活动的志愿者', item: '小店街景纪念页',
                mission: '“把杂货店、花店和面包店照片收进邻里店面册吧！”',
                sceneLabel: '社区杂货店摆着日用品的店面',
                sceneDescription: 'A modest neighborhood grocery shop entrance with household paper goods, baskets and packaged everyday supplies visible on indoor shelves. Frame the complete storefront from the sidewalk in daylight; no people, readable package text, signage, logos or watermarks.',
                actionLabel: '收齐邻里店面照片', actionResult: '杂货店、花店和面包店三张店面照片都收进了册子。',
                application: '给社区杂货店店面照片放“店”字牌。', ending: '志愿者留下店面册，大家可以看看小店各自卖什么。',
                cloze: '社区街边卖日用品的地方是一家杂货——',
                homeTip: '日常买生活用品时，听孩子自然提到的地方，不先读店名、不要求逐家找字；购物和付款由成人处理。',
                game: {
                    type: 'collect', title: '邻里三家店照片册', instruction: '把三张店面照片放进同一本册子，顺序不限。', success: '三家店的照片收齐了。', safety: '只收屏幕照片，不进行真实付款或填写购物账号。',
                    pieces: [{label: '社区杂货店摆着日用品的店面', variant: 0, photo: true}, {label: '花店的店面', variant: 1, photo: true}, {label: '面包店的店面', variant: 2, photo: true}],
                    targets: [{label: '邻里店面册', x: 50, y: 65}], matches: [0, 0, 0]
                }
            },
            {
                id: 'community-garden-01', baseId: 'garden', title: '邻里共享花园的集合亭',
                partner: '共享花园的志愿者', item: '共享花园路线页',
                mission: '“在屏幕地图上经过花园入口和赏花步道，到达集合亭！”',
                sceneLabel: '邻里共享花园里的花坛和步道',
                sceneDescription: 'A community shared garden with planted flower beds, shrubs and a wide accessible walking path leading toward a small shelter. Show the coherent garden layout in gentle morning light, keeping all paths away from water; no people, readable signs, logos or watermarks.',
                actionLabel: '到达屏幕集合亭', actionResult: '屏幕路线经过花园入口和赏花步道，最后到了集合亭。',
                application: '给共享花园全景照片放“园”字牌。', ending: '志愿者把路线页夹好，真实散步时大家会一起沿开放步道走。',
                cloze: '邻里这片种着花木、带步道的园子叫共享花——',
                homeTip: '陪孩子自然在共享花园散步时，听孩子主动说到的景物，不要求找字或带路；成人陪伴，不采摘、不离开开放步道。',
                game: {
                    type: 'route', title: '共享花园集合图', instruction: '依次点花园入口、赏花步道、集合亭三个屏幕地点。', success: '屏幕标记到达集合亭。', safety: '仅为屏幕地图；现实走园由成人陪伴，遵守开放区域要求。',
                    steps: [{label: '到花园入口', result: '屏幕标记到了花园入口。'}, {label: '到赏花步道', result: '屏幕标记到了赏花步道。'}, {label: '到集合亭', result: '屏幕标记到了集合亭。'}],
                    targets: [{label: '花园入口', x: 20, y: 76}, {label: '赏花步道', x: 50, y: 50}, {label: '集合亭', x: 78, y: 25}]
                }
            },
            {
                id: 'community-garden-02', baseId: 'garden', title: '社区菜园的周末观察册',
                partner: '社区菜园的照料员', item: '菜园观察纪念页',
                mission: '“不摘菜也能观察，揭开照片看看菜园和园中步道！”',
                sceneLabel: '社区菜园里整齐的蔬菜畦和小路',
                sceneDescription: 'A neighborhood community vegetable garden with orderly raised beds of leafy vegetables and wide paths between them. Show the whole planted garden area with realistic soil and wooden bed borders in daylight; no people, tools in use, readable signs, logos or watermarks.',
                actionLabel: '揭开菜园相册', actionResult: '本次社区菜园、另一处菜园和园中步道三幅照片全部展开了。',
                application: '给社区菜园全景照片放“园”字牌。', ending: '照料员收好观察页，菜还留在畦里慢慢生长。',
                cloze: '种着蔬菜的这片地方是社区菜——',
                homeTip: '自然经过开放菜园时，听孩子愿意说的发现，不先提示名称或要求找共同字；不进入种植畦、不碰肥料、不采摘。',
                game: {
                    type: 'reveal', title: '菜园与园中步道', instruction: '自由揭开六块遮片，看看三幅完整照片。', success: '三幅园子照片都展开了。', safety: '只看屏幕照片，不挖土、摘菜或操作园艺工具。',
                    spots: ['看见社区菜园里整齐的蔬菜畦和小路。', '社区菜园里整齐的蔬菜畦和小路照片展开了。', '看见种着蔬菜的菜园。', '种着蔬菜的菜园照片展开了。', '看见园子里的步道。', '园子里的步道照片展开了。']
                }
            },
            {
                id: 'community-garden-03', baseId: 'garden', title: '口袋花园的陪同散步卡',
                partner: '陪伴散步的家人', item: '口袋花园散步页',
                mission: '“把集合、沿步道看花、回休息点三张卡按顺序摆好！”',
                sceneLabel: '社区口袋花园的花木与环形步道',
                sceneDescription: 'A compact neighborhood pocket garden between residential buildings, with planted flowers, shrubs and a level looping pedestrian path. Frame the entire small garden as a planted outdoor space in warm daylight; no people, readable signage, logos or watermarks.',
                actionLabel: '排好陪同散步卡', actionResult: '与家人集合、沿步道看花、回休息点三张散步卡依次排好了。',
                application: '给口袋花园全景照片放“园”字牌。', ending: '家人留好散步页，现实里不用完成任务也可以慢慢欣赏。',
                cloze: '楼间种着花木的这片园子叫小花——',
                homeTip: '日常经过小花园时，留意孩子自己停留和描述的地方，不催着找字或复述路线；成人陪伴走平坦步道。',
                game: {
                    type: 'sequence', title: '口袋花园散步三张卡', instruction: '按与家人集合、沿步道看花、回休息点的顺序放卡。', success: '三张陪同散步卡顺序完整。', safety: '仅排屏幕步骤卡；现实不要求幼儿独自去花园或集合点。',
                    pieces: [{label: '与家人集合卡', variant: 0, photo: false}, {label: '沿步道看花卡', variant: 0, photo: false}, {label: '回休息点卡', variant: 0, photo: false}],
                    targets: [{label: '第一步', x: 22, y: 66}, {label: '第二步', x: 50, y: 66}, {label: '第三步', x: 78, y: 66}], matches: [0, 1, 2]
                }
            },
            {
                id: 'community-chair-01', baseId: 'chair', title: '故事活动室的椅子示意图',
                partner: '社区故事活动的老师', item: '活动室椅子拼图页',
                mission: '“给活动室的椅子拼一张示意图，真椅子不用搬！”',
                sceneLabel: '社区故事活动室里有靠背的木椅',
                sceneDescription: 'A single sturdy wooden chair with a clear backrest, seat and four legs in an empty community storytelling room. Center the entire chair against softly blurred reading shelves in daylight; no people, text, logos or watermarks.',
                actionLabel: '拼好椅子部件示意图', actionResult: '靠背、座面和椅腿组三块示意片都放到了相应位置。',
                application: '给故事活动室的木椅照片放“椅”字牌。', ending: '老师收下拼图页，椅子的样子在图上完整了。',
                cloze: '故事活动室里有一把带靠背的木——',
                homeTip: '自然坐下听故事时，听孩子自己谈到的家具，不先读字、不问缺什么；幼儿不站椅、不搬重椅，维修交给成人。',
                game: {
                    type: 'build', title: '椅子部件示意拼板', instruction: '把靠背、座面和椅腿组示意片放到对应位置，顺序不限。', success: '椅子的三块部件示意片都到位了。', safety: '屏幕拼图不代表真实安装；不使用工具，不搬动或攀站真椅子。',
                    pieces: [{label: '靠背示意片', variant: 0, photo: false}, {label: '座面示意片', variant: 0, photo: false}, {label: '椅腿组示意片', variant: 0, photo: false}],
                    targets: [{label: '靠背位置', x: 50, y: 26}, {label: '座面位置', x: 50, y: 52}, {label: '椅腿组位置', x: 50, y: 78}], matches: [0, 1, 2]
                }
            },
            {
                id: 'community-chair-02', baseId: 'chair', title: '邻里会客角的坐椅册',
                partner: '邻里会客角的志愿者', item: '会客角坐椅纪念页',
                mission: '“把会客角、教室和户外的椅子照片收进一页吧！”',
                sceneLabel: '邻里会客角里有靠背的软垫椅',
                sceneDescription: 'A complete upholstered chair with a firm backrest and padded seat in a welcoming community meeting corner. Show the whole chair, including its legs, beside a low unoccupied table in soft indoor light; no people, text, logos or watermarks.',
                actionLabel: '收齐坐椅照片', actionResult: '会客角软垫椅、教室木椅和户外木折叠椅的照片都收进了坐椅册。',
                application: '给邻里会客角的软垫椅照片放“椅”字牌。', ending: '志愿者把纪念页留好，来会客角的人可以先看一看。',
                cloze: '会客角摆着一把有软垫的——',
                homeTip: '日常在会客区休息时，听孩子自然说到坐具，不要求逐把认字或抢椅；成人陪伴，坐稳后再活动。',
                game: {
                    type: 'collect', title: '三处坐椅照片册', instruction: '把三张椅子照片放进坐椅册，顺序不限。', success: '三张椅子照片收齐了。', safety: '只收屏幕照片，不设置抢椅游戏，不搬真椅子。',
                    pieces: [{label: '邻里会客角里有靠背的软垫椅', variant: 0, photo: true}, {label: '教室里的木椅', variant: 1, photo: true}, {label: '户外的木折叠椅', variant: 2, photo: true}],
                    targets: [{label: '坐椅照片册', x: 50, y: 65}], matches: [0, 0, 0]
                }
            },
            {
                id: 'community-chair-03', baseId: 'chair', title: '社区庭院坐椅的室内外两栏',
                partner: '庭院活动的布置员', item: '坐椅场所分栏页',
                mission: '“把户外椅照片放一栏，教室椅照片放另一栏！”',
                sceneLabel: '社区庭院树荫下有靠背的木椅',
                sceneDescription: 'A single wooden chair with a backrest under a tree in a level community courtyard. Show the complete seat, back and legs on a paved surface with greenery behind, clearly outdoors; no people, lettering, logos or watermarks.',
                actionLabel: '分好室内外椅照片', actionResult: '庭院木椅和户外木折叠椅照片放进户外栏，教室木椅照片放进室内栏。',
                application: '给庭院树荫下的木椅照片放“椅”字牌。', ending: '布置员收好分栏页，照片里不同地方的椅子都有记录。',
                cloze: '庭院树荫下放着一把木——',
                homeTip: '自然在庭院歇脚时，听孩子愿意说的坐具和场所，不先提示室内外分类；不让幼儿操作折叠椅夹合处。',
                game: {
                    type: 'sort', title: '室内外坐椅照片', instruction: '把庭院与户外折叠椅照片放户外栏，把教室椅照片放室内栏。', success: '室内和户外两栏照片放好了。', safety: '只分屏幕照片；真实折叠椅的开合由成人处理。',
                    pieces: [{label: '社区庭院树荫下有靠背的木椅', variant: 0, photo: true}, {label: '教室里的木椅', variant: 1, photo: true}, {label: '户外的木折叠椅', variant: 2, photo: true}],
                    targets: [{label: '户外椅照片', x: 28, y: 65}, {label: '室内椅照片', x: 72, y: 65}], matches: [0, 1, 0]
                }
            },
            {
                id: 'community-table-01', baseId: 'table', title: '邻里分享桌的桌面拼图',
                partner: '邻里分享活动的老师', item: '分享桌部件纪念页',
                mission: '“请在屏幕上给分享桌拼好桌面和支撑示意片！”',
                sceneLabel: '社区分享活动区空着的长桌',
                sceneDescription: 'An empty rectangular wooden table in a community sharing event area, with its tabletop and supporting legs fully visible. Frame the entire table on a level indoor floor with a calm meeting room background; no people, food, text, logos or watermarks.',
                actionLabel: '拼好分享桌示意图', actionResult: '桌面、左支撑和右支撑三块示意片都放到位了。',
                application: '给社区分享活动区的长桌照片放“桌”字牌。', ending: '老师留好部件页，真实布置时仍由成人检查桌子稳不稳。',
                cloze: '分享活动区摆着一张长——',
                homeTip: '日常在活动桌边放物品时，听孩子主动提到的家具，不要求照图搭桌；成人处理搬动和维修，幼儿不攀桌。',
                game: {
                    type: 'build', title: '分享桌示意拼板', instruction: '把桌面片、左支撑片和右支撑片放到对应位置，顺序不限。', success: '分享桌的三块示意片都到位了。', safety: '仅为屏幕拼图，不证明真桌稳固；真实安装和搬动由成人处理。',
                    pieces: [{label: '桌面示意片', variant: 0, photo: false}, {label: '左支撑示意片', variant: 0, photo: false}, {label: '右支撑示意片', variant: 0, photo: false}],
                    targets: [{label: '桌面位置', x: 50, y: 32}, {label: '左支撑位置', x: 28, y: 72}, {label: '右支撑位置', x: 72, y: 72}], matches: [0, 1, 2]
                }
            },
            {
                id: 'community-table-02', baseId: 'table', title: '桌游室收桌后的三张卡',
                partner: '社区桌游室的管理员', item: '桌游收整流程页',
                mission: '“把收游戏盒、检查桌面、留下空桌照片三张卡依次摆好！”',
                sceneLabel: '社区桌游室里收整后的空方桌',
                sceneDescription: 'An empty square game table in a tidy neighborhood board game room, with closed game boxes on shelves in the background. Show the entire clear tabletop and legs in soft indoor light; no people, readable box lettering, logos or watermarks.',
                actionLabel: '排好桌游收整卡', actionResult: '收游戏盒、检查桌面、留下空桌照片三张流程卡按顺序放好了。',
                application: '给桌游室收整后的空方桌照片放“桌”字牌。', ending: '管理员保存流程页，下一次活动可以从整齐的桌边开始。',
                cloze: '桌游室收整后，留下了一张空着的方——',
                homeTip: '家人日常收桌面时，听孩子自然说到的东西，不指定流程考查；重盒和家具由成人搬，孩子不碰小零件。',
                game: {
                    type: 'sequence', title: '桌游室收整三步', instruction: '按收游戏盒、检查桌面、留下空桌照片的顺序放卡。', success: '三张收整流程卡依次到位。', safety: '照片卡是屏幕示意，不启动相机、不拍人，也不让幼儿收散落的小零件。',
                    pieces: [{label: '收游戏盒卡', variant: 0, photo: false}, {label: '检查桌面卡', variant: 0, photo: false}, {label: '留下空桌照片卡', variant: 0, photo: false}],
                    targets: [{label: '第一步', x: 22, y: 66}, {label: '第二步', x: 50, y: 66}, {label: '第三步', x: 78, y: 66}], matches: [0, 1, 2]
                }
            },
            {
                id: 'community-table-03', baseId: 'table', title: '手工作品展台旁的桌子册',
                partner: '社区作品展的志愿者', item: '展览桌子观察页',
                mission: '“展览册留一页给桌子，把三张桌照片收进去！”',
                sceneLabel: '社区手工作品展区空着的展示桌',
                sceneDescription: 'An empty sturdy display table in a community craft exhibition room, with framed handmade objects on a distant wall. Center the whole tabletop and legs, keeping the table clear and prominent; no people, readable captions, logos or watermarks.',
                actionLabel: '收好桌子观察照片', actionResult: '展区展示桌、书桌和矮桌的照片都放进了桌子观察册。',
                application: '给作品展区的展示桌照片放“桌”字牌。', ending: '志愿者夹好观察页，桌子也在展览册里留了位置。',
                cloze: '作品展区摆着一张展示——',
                homeTip: '自然参观社区展览时，听孩子自己注意的家具，不先指桌或要求找字；不攀展台、不搬展品。',
                game: {
                    type: 'collect', title: '桌子观察照片册', instruction: '把三张桌子照片放到同一本观察册，顺序不限。', success: '三张桌子照片都收齐了。', safety: '只收屏幕照片，不搬动真实展台或公共家具。',
                    pieces: [{label: '社区手工作品展区空着的展示桌', variant: 0, photo: true}, {label: '空着的书桌', variant: 1, photo: true}, {label: '空着的矮桌', variant: 2, photo: true}],
                    targets: [{label: '桌子观察册', x: 50, y: 65}], matches: [0, 0, 0]
                }
            },
            {
                id: 'community-door-01', baseId: 'door', title: '社区活动中心入口的小地图',
                partner: '活动中心的接待员', item: '中心入口到达页',
                mission: '“沿屏幕地图经过前庭和入口坡道，到活动中心门前！”',
                sceneLabel: '社区活动中心入口的玻璃双扇门',
                sceneDescription: 'A pair of closed glass entrance doors at a neighborhood activity center, with a wide level landing and a gentle access ramp beside it. Center the full door frames and handles in daylight; no people, readable signage, logos or watermarks.',
                actionLabel: '到达屏幕上的门前', actionResult: '屏幕标记经过前庭和入口坡道，最后到达活动中心门前。',
                application: '给活动中心入口的双扇门照片放“门”字牌。', ending: '接待员留好到达页，真实进门时仍由成人留意门扇和手指。',
                cloze: '活动中心入口有两扇玻璃——',
                homeTip: '日常与家人进活动中心时，听孩子自然说到入口的样子，不反复开关门考查；成人照看，手指远离门缝。',
                game: {
                    type: 'route', title: '活动中心门前地图', instruction: '依次点前庭、入口坡道、活动中心门前三个屏幕地点。', success: '屏幕路线到达活动中心门前。', safety: '仅走屏幕地图，不要求独自进出或操作真门。',
                    steps: [{label: '到前庭', result: '屏幕标记到了前庭。'}, {label: '到入口坡道', result: '屏幕标记到了入口坡道。'}, {label: '到活动中心门前', result: '屏幕标记到了活动中心门前。'}],
                    targets: [{label: '前庭', x: 20, y: 75}, {label: '入口坡道', x: 50, y: 50}, {label: '活动中心门前', x: 78, y: 25}]
                }
            },
            {
                id: 'community-door-02', baseId: 'door', title: '邻里阅读室门的轮廓拼板',
                partner: '邻里阅读室的老师', item: '阅读室门形纪念页',
                mission: '“给阅读室入口拼好门的轮廓，不用碰真实门扇！”',
                sceneLabel: '邻里阅读室入口关着的木门',
                sceneDescription: 'A closed single wooden door with a visible frame and handle at the entrance to a neighborhood reading room. Show the complete door and a glimpse of book shelves through an adjacent fixed glazed panel; no people, readable lettering, logos or watermarks.',
                actionLabel: '拼好门形示意图', actionResult: '门框、门扇和把手三块示意片都放到了对应位置。',
                application: '给阅读室入口的木门照片放“门”字牌。', ending: '老师夹好轮廓页，真实门依旧由成人安全开关。',
                cloze: '阅读室入口关着一扇木——',
                homeTip: '自然经过阅读室入口时，听孩子自己的描述，不提示门框或字音；不让幼儿反复开关门，不把手伸进门缝。',
                game: {
                    type: 'build', title: '门的轮廓示意拼板', instruction: '把门框、门扇和把手示意片放到各自位置，顺序不限。', success: '门形示意图的三块拼片都到位了。', safety: '只拼屏幕示意图，不拆装或开关真实门。',
                    pieces: [{label: '门框示意片', variant: 0, photo: false}, {label: '门扇示意片', variant: 0, photo: false}, {label: '把手示意片', variant: 0, photo: false}],
                    targets: [{label: '门框位置', x: 50, y: 24}, {label: '门扇位置', x: 50, y: 55}, {label: '把手位置', x: 73, y: 58}], matches: [0, 1, 2]
                }
            },
            {
                id: 'community-door-03', baseId: 'door', title: '社区展厅入口的门相册',
                partner: '社区展厅的接待老师', item: '展厅入口观察页',
                mission: '“揭开相册看看展厅门，再看看打开的房间门和双扇门！”',
                sceneLabel: '社区展厅入口打开的双扇木门',
                sceneDescription: 'Two wooden entrance doors standing open at a community exhibition hall, with an empty lobby and distant display boards visible beyond. Show both full door leaves and the doorway clearly from the front; no people, readable exhibition text, logos or watermarks.',
                actionLabel: '展开三幅门照片', actionResult: '展厅入口门、打开的房间门和两扇并排门的照片都展开了。',
                application: '给展厅入口打开的双扇门照片放“门”字牌。', ending: '接待老师收好观察页，大家进出时仍慢慢走。',
                cloze: '展厅入口打开了两扇木——',
                homeTip: '自然参观展厅时，听孩子自己提到的入口，不先读字或要求比较；跟随成人，不倚靠门扇、不堵出入口。',
                game: {
                    type: 'reveal', title: '展厅入口门相册', instruction: '自由揭开六块遮片，观察三幅完整的门照片。', success: '三幅门照片全部展开了。', safety: '只揭屏幕照片，不触碰真实门轴或门缝。',
                    spots: ['看见社区展厅入口打开的双扇木门。', '社区展厅入口打开的双扇木门照片展开了。', '看见打开的房间门。', '打开的房间门照片展开了。', '看见两扇并排的门。', '两扇并排的门照片展开了。']
                }
            },
            {
                id: 'community-road-01', baseId: 'road', title: '社区步行路通往故事亭',
                partner: '陪同散步的家人', item: '故事亭步行路线页',
                mission: '“在屏幕地图上从步行路起点经过树荫转角，到故事亭！”',
                sceneLabel: '社区花坛之间通往故事亭的步行路',
                sceneDescription: 'A level pedestrian path between planted beds in a residential community, leading toward a small storytelling pavilion. Show the continuous paved route with clear edges and no vehicles or crossings, in soft daylight; no people, readable signs, logos or watermarks.',
                actionLabel: '走完故事亭屏幕路线', actionResult: '屏幕标记从步行路起点经过树荫转角，最后到达故事亭。',
                application: '给花坛之间的步行路照片放“路”字牌。', ending: '家人保存路线页，真实散步时大家仍结伴走。',
                cloze: '花坛之间通往故事亭的通道是一条步行——',
                homeTip: '在熟悉步道上自然散步时，听孩子自己的方向和景物描述，不先给路字或要求带路；成人陪伴，不独自过街。',
                game: {
                    type: 'route', title: '故事亭步行地图', instruction: '依次点步行路起点、树荫转角、故事亭三个屏幕地点。', success: '屏幕标记到达故事亭。', safety: '只操作屏幕路线；现实不要求独自走路或过街。',
                    steps: [{label: '到步行路起点', result: '屏幕标记到了步行路起点。'}, {label: '到树荫转角', result: '屏幕标记到了树荫转角。'}, {label: '到故事亭', result: '屏幕标记到了故事亭。'}],
                    targets: [{label: '步行路起点', x: 20, y: 76}, {label: '树荫转角', x: 50, y: 50}, {label: '故事亭', x: 78, y: 25}]
                }
            },
            {
                id: 'community-road-02', baseId: 'road', title: '活动中心外小路的地图拼板',
                partner: '社区路线展的老师', item: '小路地图拼板页',
                mission: '“把三段小路示意片放到地图上，不用铺真实道路！”',
                sceneLabel: '社区活动中心外弯向花坛的小路',
                sceneDescription: 'A gently curving paved pedestrian path outside a neighborhood activity center, bending around a flower bed. Show the full visible curve, planted edges and distant entrance in daylight, with no traffic; no people, text, logos or watermarks.',
                actionLabel: '拼好小路示意地图', actionResult: '起点路段、弯道段和终点路段三块示意片都放到了地图位置。',
                application: '给活动中心外的小路照片放“路”字牌。', ending: '老师收好地图页，图上的小路从起点连到了终点。',
                cloze: '活动中心外有一条弯弯的小——',
                homeTip: '自然沿社区小路散步时，听孩子主动描述弯道或花坛，不先问字音；不进施工区域，不搬铺路材料。',
                game: {
                    type: 'build', title: '小路地图示意拼板', instruction: '把起点段、弯道段和终点段放到相应地图位置，顺序不限。', success: '三段小路示意片在地图上到位了。', safety: '只拼屏幕地图，不搬石块、不施工，也不指引真实独自行走。',
                    pieces: [{label: '起点路段示意片', variant: 0, photo: false}, {label: '弯道段示意片', variant: 0, photo: false}, {label: '终点路段示意片', variant: 0, photo: false}],
                    targets: [{label: '地图起点段', x: 22, y: 72}, {label: '地图弯道段', x: 50, y: 50}, {label: '地图终点段', x: 78, y: 28}], matches: [0, 1, 2]
                }
            },
            {
                id: 'community-road-03', baseId: 'road', title: '雨后社区步道的观察流程',
                partner: '陪伴散步的家人', item: '雨后步道观察页',
                mission: '“先看照片，再找路边界，最后把观察页放进册子！”',
                sceneLabel: '雨后社区庭院里湿润的步行路',
                sceneDescription: 'A wet level pedestrian path after light rain in a residential courtyard, with damp paving stones, low planted borders and no standing deep water. Show the continuous path and its edges in soft overcast light; no people, vehicles, readable text, logos or watermarks.',
                actionLabel: '排好步道观察流程', actionResult: '看步道照片、留意路边界、保存观察页三张步骤卡依次放好了。',
                application: '给雨后庭院步行路照片放“路”字牌。', ending: '家人收好观察页，真正出门时会先确认地面是否防滑。',
                cloze: '雨后庭院里有些湿润的通道是一条步行——',
                homeTip: '在室内自然看雨后庭院时，听孩子自己描述地面，不先指路或要求找字；出门由成人确认防滑，不踩水洼。',
                game: {
                    type: 'sequence', title: '雨后步道观察三步', instruction: '按看照片、留意路边界、保存观察页的顺序放卡。', success: '三张屏幕观察步骤卡顺序完整。', safety: '只观察已有屏幕照片，不要求走湿滑道路或拍摄真实地点。',
                    pieces: [{label: '看步道照片卡', variant: 0, photo: false}, {label: '留意路边界卡', variant: 0, photo: false}, {label: '保存观察页卡', variant: 0, photo: false}],
                    targets: [{label: '第一步', x: 22, y: 66}, {label: '第二步', x: 50, y: 66}, {label: '第三步', x: 78, y: 66}], matches: [0, 1, 2]
                }
            },
            {
                id: 'community-bridge-01', baseId: 'bridge', title: '社区园中小桥的休息亭地图',
                partner: '园中散步的陪同家人', item: '小桥休息亭路线页',
                mission: '“在屏幕地图上经过桥前步道和桥面，到桥后休息亭！”',
                sceneLabel: '社区花园水渠上带栏杆的小桥',
                sceneDescription: 'A small pedestrian bridge with continuous railings spanning a narrow ornamental channel in a community garden. Show the complete bridge deck, both ends and the channel below from a safe wide viewpoint in daylight; no people, readable signs, logos or watermarks.',
                actionLabel: '走到屏幕休息亭', actionResult: '屏幕路线依次经过桥前步道和桥面，最后到达桥后休息亭。',
                application: '给花园水渠上的小桥照片放“桥”字牌。', ending: '家人保存路线页，现实过桥时仍牵伴同行，不靠近水边。',
                cloze: '把水渠两边连起来、带着栏杆的是一座小——',
                homeTip: '与家人自然经过开放小桥时，听孩子自己的发现，不在危险位置停留找字；成人全程陪伴，不攀栏杆、不探身看水。',
                game: {
                    type: 'route', title: '小桥到休息亭屏幕地图', instruction: '依次点桥前步道、桥面、桥后休息亭三个屏幕地点。', success: '屏幕标记到达桥后休息亭。', safety: '仅为屏幕地图；现实过桥由成人陪伴，走开放桥面，远离水边。',
                    steps: [{label: '到桥前步道', result: '屏幕标记到了桥前步道。'}, {label: '到桥面', result: '屏幕标记到了桥面。'}, {label: '到桥后休息亭', result: '屏幕标记到了桥后休息亭。'}],
                    targets: [{label: '桥前步道', x: 20, y: 75}, {label: '桥面', x: 50, y: 50}, {label: '桥后休息亭', x: 78, y: 25}]
                }
            },
            {
                id: 'community-bridge-02', baseId: 'bridge', title: '社区景观桥的三幅相册',
                partner: '社区风景展的志愿者', item: '景观桥观察纪念页',
                mission: '“揭开景观桥相册，看看连接两边的桥有几种样子！”',
                sceneLabel: '社区景观水渠上的低石拱桥',
                sceneDescription: 'A low stone arch pedestrian bridge with parapets across a narrow landscaped channel in a neighborhood garden. Frame the entire stone arch, walkway and both banks from a distant path, with realistic masonry and soft daylight; no people, readable text, logos or watermarks.',
                actionLabel: '展开桥的三幅照片', actionResult: '景观石拱桥、木板桥和带栏杆步行桥的三幅照片都展开了。',
                application: '给社区景观水渠上的石拱桥照片放“桥”字牌。', ending: '志愿者收好观察页，风景展里又多了一页连接两边的桥。',
                cloze: '社区景观水渠上跨着一座石拱——',
                homeTip: '自然翻看出游照片时，听孩子是否主动描述桥的两端，不先给名称或要求补句；不安排靠近水渠或攀桥来验证。',
                game: {
                    type: 'reveal', title: '社区景观桥相册', instruction: '自由揭开六块遮片，看看三幅完整桥照片。', success: '三幅桥照片全部展开了。', safety: '只揭屏幕照片，不到水边取景、不攀爬桥栏。',
                    spots: ['看见社区景观水渠上的低石拱桥。', '社区景观水渠上的低石拱桥照片展开了。', '看见木板铺成的桥。', '木板铺成的桥照片展开了。', '看见带栏杆的步行桥。', '带栏杆的步行桥照片展开了。']
                }
            },
            {
                id: 'community-hat-01', baseId: 'hat', title: '社区失物台的帽子两栏页',
                partner: '社区失物台的管理员', item: '帽子照片分栏页',
                mission: '“棒球帽照片放一栏，毛线帽照片放另一栏，不用填写失主资料！”',
                sceneLabel: '社区失物台上带前帽檐的棒球帽',
                sceneDescription: 'A plain baseball cap with a clear front brim resting on a clean neighborhood lost property counter. Center the whole cap and its crown with natural fabric texture, with anonymous storage cubbies blurred behind; no people, identifying labels, text, logos or watermarks.',
                actionLabel: '分好两类帽子照片', actionResult: '两张棒球帽照片放进棒球帽栏，一张毛线帽照片放进毛线帽栏。',
                application: '给失物台上的棒球帽照片放“帽”字牌。', ending: '管理员收下分栏页，真实认领仍由成人联系工作人员。',
                cloze: '失物台上放着一顶棒球——',
                homeTip: '日常整理出门用品时，听孩子自己谈到帽子的样子，不藏物考查、不提示名称；陌生失物不直接试戴，交成人处理。',
                game: {
                    type: 'sort', title: '棒球帽与毛线帽照片', instruction: '把照片分别放进棒球帽栏或毛线帽栏。', success: '两类帽子照片分好了。', safety: '只整理屏幕照片，不收集失主姓名、电话或真实认领信息。',
                    pieces: [{label: '社区失物台上带前帽檐的棒球帽', variant: 0, photo: true}, {label: '毛线织的帽子', variant: 1, photo: true}, {label: '前面有帽檐的棒球帽', variant: 2, photo: true}],
                    targets: [{label: '棒球帽照片', x: 28, y: 65}, {label: '毛线帽照片', x: 72, y: 65}], matches: [0, 1, 0]
                }
            },
            {
                id: 'community-hat-02', baseId: 'hat', title: '园游准备台的遮阳帽册',
                partner: '社区园游活动的带队老师', item: '园游帽子纪念页',
                mission: '“准备册里留一页给帽子，请收好三张照片！”',
                sceneLabel: '社区园游准备台上的宽檐遮阳帽',
                sceneDescription: 'A wide-brimmed woven sun hat lying on an outdoor community garden event preparation table. Show the complete brim and crown in warm daylight with a sheltered garden gathering area behind; no people, text, logos or watermarks.',
                actionLabel: '收齐园游帽子照片', actionResult: '遮阳帽、毛线帽和棒球帽三张照片都收进了帽子册。',
                application: '给园游准备台上的遮阳帽照片放“帽”字牌。', ending: '老师留好准备页，真正出发时家人会按天气选择穿戴。',
                cloze: '园游准备台上有一顶遮阳——',
                homeTip: '日常出门穿戴时，听孩子自己提到帽子或天气，不指定找帽任务、不先读字；由成人按天气照看防晒和保暖。',
                game: {
                    type: 'collect', title: '园游帽子照片册', instruction: '把三张帽子照片放进同一本册子，顺序不限。', success: '三张帽子照片收齐了。', safety: '只收屏幕照片，不要求试戴公共帽子或直视太阳。',
                    pieces: [{label: '社区园游准备台上的宽檐遮阳帽', variant: 0, photo: true}, {label: '毛线织的帽子', variant: 1, photo: true}, {label: '前面有帽檐的棒球帽', variant: 2, photo: true}],
                    targets: [{label: '园游帽子册', x: 50, y: 65}], matches: [0, 0, 0]
                }
            },
            {
                id: 'community-bag-01', baseId: 'bag', title: '邻里借书包的准备流程',
                partner: '陪同借书的家人', item: '借书包准备纪念页',
                mission: '“把准备包、装入绘本、交给家人三张卡按顺序放好！”',
                sceneLabel: '社区借阅柜台旁装着绘本的手提包',
                sceneDescription: 'A sturdy fabric tote bag with two handles on a community library counter, with bound picture books partly visible inside. Center the complete bag, opening and handles in soft daylight, with anonymous shelves behind; no people, readable book titles, logos or watermarks.',
                actionLabel: '排好借书包准备卡', actionResult: '准备手提包、装入绘本、交给家人三张步骤卡依次放好了。',
                application: '给借阅柜台旁的手提包照片放“包”字牌。', ending: '家人收下流程页，借来的绘本可以由成人帮忙带回家。',
                cloze: '绘本装进了有提手的——',
                homeTip: '日常整理借来的书时，听孩子自然提到容器和用途，不额外布置找包任务；重包由成人提，不让幼儿背超重物品。',
                game: {
                    type: 'sequence', title: '借书包准备三步', instruction: '按准备手提包、装入绘本、交给家人的顺序放卡。', success: '三张借书包准备卡按顺序放好了。', safety: '只排屏幕步骤卡，不填写借阅信息；真实重书包由成人处理。',
                    pieces: [{label: '准备手提包卡', variant: 0, photo: false}, {label: '装入绘本卡', variant: 0, photo: false}, {label: '交给家人卡', variant: 0, photo: false}],
                    targets: [{label: '第一步', x: 22, y: 66}, {label: '第二步', x: 50, y: 66}, {label: '第三步', x: 78, y: 66}], matches: [0, 1, 2]
                }
            },
            {
                id: 'community-bag-02', baseId: 'bag', title: '社区活动物资包的轮廓页',
                partner: '活动物资台的志愿者', item: '物资包轮廓纪念页',
                mission: '“给物资包拼好包身和两个提手的示意图！”',
                sceneLabel: '社区活动物资台上有提手的旅行包',
                sceneDescription: 'A closed soft-sided travel bag with two carrying handles on a community event supply table. Show the entire bag, zipper seam and handles with realistic canvas texture in a tidy indoor room; no people, identifying tags, readable text, logos or watermarks.',
                actionLabel: '拼好物资包轮廓图', actionResult: '包身和两块提手示意片都放到位，物资包轮廓完整了。',
                application: '给活动物资台上的旅行包照片放“包”字牌。', ending: '志愿者夹好轮廓页，真实物资包由成人整理和搬运。',
                cloze: '活动物资装在有提手、方便带走的旅行——',
                homeTip: '家人自然准备活动物品时，听孩子自己描述包的用途，不先提示名称；不翻陌生人的包，重物交成人搬。',
                game: {
                    type: 'build', title: '物资包轮廓示意拼板', instruction: '把包身、左提手和右提手示意片放到各自位置，顺序不限。', success: '包的三块轮廓示意片都到位了。', safety: '只拼屏幕轮廓，不拆包、不操作拉链夹缝，不搬重物。',
                    pieces: [{label: '包身示意片', variant: 0, photo: false}, {label: '左提手示意片', variant: 0, photo: false}, {label: '右提手示意片', variant: 0, photo: false}],
                    targets: [{label: '包身位置', x: 50, y: 64}, {label: '左提手位置', x: 35, y: 30}, {label: '右提手位置', x: 65, y: 30}], matches: [0, 1, 2]
                }
            },
            {
                id: 'community-umbrella-01', baseId: 'umbrella', title: '活动中心雨具角的开合照片',
                partner: '雨具角的管理员', item: '雨伞开合分栏页',
                mission: '“把合拢的伞照片和撑开的伞照片分别放好！”',
                sceneLabel: '社区活动中心伞架里合拢的雨伞',
                sceneDescription: 'A single closed rain umbrella standing in a drip tray umbrella rack in a community activity center entrance. Show the full folded canopy, shaft and handle clearly, with an uncluttered stone floor around the rack; no people, lettering, logos or watermarks.',
                actionLabel: '分好雨伞开合照片', actionResult: '两张合拢的雨伞照片放入合拢栏，撑开的弯柄伞照片放入撑开栏。',
                application: '给活动中心伞架里合拢的雨伞照片放“伞”字牌。', ending: '管理员收好分栏页，真实湿伞的收纳仍由成人处理。',
                cloze: '活动中心的伞架里放着一把雨——',
                homeTip: '雨天回家自然收雨具时，听孩子自己描述开合样子，不要求操作伞来作答；成人处理尖端、夹合处和湿滑地面。',
                game: {
                    type: 'sort', title: '雨伞撑开与合拢', instruction: '把合拢的伞照片放合拢栏，撑开的伞照片放撑开栏。', success: '雨伞开合照片分成两栏了。', safety: '只分屏幕照片，不撑伞、不碰伞尖或夹合机构。',
                    pieces: [{label: '社区活动中心伞架里合拢的雨伞', variant: 0, photo: true}, {label: '合拢的雨伞', variant: 1, photo: true}, {label: '带弯钩手柄的撑开的伞', variant: 2, photo: true}],
                    targets: [{label: '合拢的伞照片', x: 28, y: 65}, {label: '撑开的伞照片', x: 72, y: 65}], matches: [0, 0, 1]
                }
            },
            {
                id: 'community-umbrella-02', baseId: 'umbrella', title: '阅读亭外雨伞的收整卡',
                partner: '阅读亭的值班志愿者', item: '雨伞收整流程页',
                mission: '“在屏幕上排好请成人合伞、放滴水盘、等地面干燥三张卡！”',
                sceneLabel: '社区阅读亭檐下滴水盘里的合拢雨伞',
                sceneDescription: 'A closed rain umbrella resting upright in a shallow drip tray under the eaves of a neighborhood reading pavilion. Show the full folded umbrella and tray on a sheltered paved landing after rain; no people, readable text, logos or watermarks.',
                actionLabel: '排好雨伞收整卡', actionResult: '请成人合伞、放滴水盘、等地面干燥三张收整卡依次放好了。',
                application: '给阅读亭檐下的合拢雨伞照片放“伞”字牌。', ending: '志愿者保存流程页，大家留在干燥的地方慢慢读书。',
                cloze: '阅读亭檐下的滴水盘里放着一把——',
                homeTip: '自然在雨天室内收伞时，听孩子自己提到的物品，不先读字或考步骤；收合由成人操作，孩子不踩湿滑滴水处。',
                game: {
                    type: 'sequence', title: '雨伞收整三张卡', instruction: '按请成人合伞、放滴水盘、等地面干燥的顺序放卡。', success: '三张雨伞收整卡顺序完整。', safety: '只是屏幕步骤卡；真实收合、滴水和防滑处理均由成人负责。',
                    pieces: [{label: '请成人合伞卡', variant: 0, photo: false}, {label: '放滴水盘卡', variant: 0, photo: false}, {label: '等地面干燥卡', variant: 0, photo: false}],
                    targets: [{label: '第一步', x: 22, y: 66}, {label: '第二步', x: 50, y: 66}, {label: '第三步', x: 78, y: 66}], matches: [0, 1, 2]
                }
            },
            {
                id: 'community-flower-01', baseId: 'flower', title: '邻里会客厅迎宾花的介绍册',
                partner: '邻里会客厅的志愿者', item: '迎宾花观察纪念页',
                mission: '“把迎宾花、瓶里的花和花园里的花照片收进介绍册！”',
                sceneLabel: '邻里会客厅迎宾台花盆里开放的花',
                sceneDescription: 'Blooming flowers in a ceramic plant pot on a welcome table in a community meeting lounge. Center the complete flowering plant with clearly visible petals, stems and pot, in soft indoor daylight; no people, readable labels, logos or watermarks.',
                actionLabel: '收齐迎宾花观察照片', actionResult: '迎宾台盆花、花瓶里的花和花园里的花照片都收进了介绍册。',
                application: '给会客厅迎宾台开放的花照片放“花”字牌。', ending: '志愿者夹好观察页，花继续留在迎宾台上。',
                cloze: '迎宾台的花盆里开着——',
                homeTip: '自然经过会客厅盆栽时，听孩子主动说到的颜色和样子，不先指出目标字；不摘花、不碰不熟悉植物，不把花放入口中。',
                game: {
                    type: 'collect', title: '迎宾花观察册', instruction: '把三张花照片放进同一本观察册，顺序不限。', success: '三张花照片都收齐了。', safety: '只收屏幕照片，不采摘、插花或操作真实易碎花瓶。',
                    pieces: [{label: '邻里会客厅迎宾台花盆里开放的花', variant: 0, photo: true}, {label: '花瓶里插着的花', variant: 1, photo: true}, {label: '花园里开放的花', variant: 2, photo: true}],
                    targets: [{label: '迎宾花观察册', x: 50, y: 65}], matches: [0, 0, 0]
                }
            },
            {
                id: 'community-flower-02', baseId: 'flower', title: '社区广场花箱的赏花相册',
                partner: '广场赏花活动的老师', item: '广场花箱纪念页',
                mission: '“不用伸手摘花，揭开相册慢慢看花箱里的花！”',
                sceneLabel: '社区广场花箱里盛开的彩色花',
                sceneDescription: 'Colorful flowers blooming in a raised planter along the edge of a neighborhood pedestrian square. Show the blossoms clearly above the raised planter rim, with a calm paved square behind in daylight; no people, readable signs, logos or watermarks.',
                actionLabel: '展开赏花相册', actionResult: '广场花箱、花瓶里的花和花园里的花三幅照片全部展开了。',
                application: '给广场花箱里盛开的花照片放“花”字牌。', ending: '老师收好赏花页，花箱里的花还在原处开放。',
                cloze: '广场的花箱里开着彩色的——',
                homeTip: '在广场自然散步时，听孩子自己发起的赏花话题，不先提示颜色或字音；成人陪伴，不跨花箱、不采摘。',
                game: {
                    type: 'reveal', title: '广场花箱赏花相册', instruction: '自由揭开六块遮片，看看三幅完整花照片。', success: '三幅花照片全部展开了。', safety: '只看屏幕照片，不要求摘花、攀花箱或接近昆虫。',
                    spots: ['看见社区广场花箱里盛开的彩色花。', '社区广场花箱里盛开的彩色花照片展开了。', '看见花瓶里插着的花。', '花瓶里插着的花照片展开了。', '看见花园里开放的花。', '花园里开放的花照片展开了。']
                }
            },
            {
                id: 'community-drum-01', baseId: 'drum', title: '社区音乐角轻拍后的停顿卡',
                partner: '社区音乐角的老师', item: '轻拍停顿流程页',
                mission: '“在屏幕上排好准备、轻拍、停下三张卡，也可以一直静音！”',
                sceneLabel: '社区音乐角软垫上带铃片的手鼓',
                sceneDescription: 'A frame tambourine with a stretched drumhead and metal jingles resting on a padded mat in a community music corner. Show the entire instrument and its drumhead clearly with simple storage shelves behind; no people, readable text, logos or watermarks.',
                actionLabel: '排好轻拍停顿卡', actionResult: '准备手鼓、轻拍一下、停下休息三张示意卡依次放好了。',
                application: '给社区音乐角的手鼓照片放“鼓”字牌。', ending: '老师留好流程页，想安静看图的人也可以不听声音。',
                cloze: '音乐角的软垫上放着一面手——',
                homeTip: '自然翻看乐器图片时，听孩子自己的描述，不突然敲响作提示；真实乐器由成人选择，音量轻柔，尊重不想听的意愿。',
                game: {
                    type: 'sequence', title: '准备轻拍与停顿', instruction: '按准备手鼓、轻拍一下、停下休息的顺序放示意卡。', success: '三张轻拍停顿卡顺序完整。', safety: '只排屏幕示意卡，不要求敲真鼓，不录音；可以全程静音。',
                    pieces: [{label: '准备手鼓卡', variant: 0, photo: false}, {label: '轻拍一下卡', variant: 0, photo: false}, {label: '停下休息卡', variant: 0, photo: false}],
                    targets: [{label: '第一步', x: 22, y: 66}, {label: '第二步', x: 50, y: 66}, {label: '第三步', x: 78, y: 66}], matches: [0, 1, 2]
                }
            },
            {
                id: 'community-drum-02', baseId: 'drum', title: '邻里小舞台的鼓展示框',
                partner: '邻里演出准备的布置员', item: '舞台鼓展示纪念页',
                mission: '“给小舞台的鼓照片拼好框片，不用搬动真鼓！”',
                sceneLabel: '邻里小舞台支架上静放的大鼓',
                sceneDescription: 'A large round bass drum resting securely on a low stand on an empty community performance stage. Center the whole drum, visible drumhead, wooden shell and supporting stand under soft stage lighting; no people, readable lettering, logos or watermarks.',
                actionLabel: '拼好舞台鼓展示框', actionResult: '上框、左框和右框三块示意片都放到位，舞台鼓照片的展示框拼好了。',
                application: '给邻里小舞台的大鼓照片放“鼓”字牌。', ending: '布置员收好展示页，真实乐器摆放和演奏仍由成人负责。',
                cloze: '小舞台的支架上静放着一面大——',
                homeTip: '自然看到演出照片时，听孩子自己关注的乐器，不用巨响提示字；不攀舞台、不搬鼓，远离支架夹合处。',
                game: {
                    type: 'build', title: '舞台鼓照片示意框', instruction: '把上框片、左框片和右框片放到对应位置，顺序不限。', success: '三块展示框示意片都到位了。', safety: '只拼屏幕框片，不搭舞台、不修乐器、不搬重鼓，也不录音。',
                    pieces: [{label: '上框示意片', variant: 0, photo: false}, {label: '左框示意片', variant: 0, photo: false}, {label: '右框示意片', variant: 0, photo: false}],
                    targets: [{label: '上框位置', x: 50, y: 22}, {label: '左框位置', x: 22, y: 55}, {label: '右框位置', x: 78, y: 55}], matches: [0, 1, 2]
                }
            },
            {
                id: 'community-bell-01', baseId: 'bell', title: '社区乐器桌手铃的两栏照片',
                partner: '社区乐器介绍活动的老师', item: '手铃与架上铃分栏页',
                mission: '“手铃照片放本次记录栏，悬挂和架上的铃放另一栏！”',
                sceneLabel: '社区乐器介绍桌上的木柄手铃',
                sceneDescription: 'A large metal handbell with a wooden handle resting on a padded community instrument introduction table. Show the complete handle and bell body with realistic metal reflections in a quiet indoor setting; no people, readable labels, logos or watermarks.',
                actionLabel: '分好铃的展示照片', actionResult: '木柄手铃照片在本次记录栏，悬挂金属铃和架上拉绳铃照片在延伸观察栏。',
                application: '给乐器介绍桌上的手铃照片放“铃”字牌。', ending: '老师收好分栏页，这次介绍不用突然摇铃也能看清。',
                cloze: '乐器介绍桌上放着一只手——',
                homeTip: '自然遇到铃的图片时，听孩子自己的描述，不先摇响或提示读音；真铃由成人选安全大号款，不拆零件、不贴耳摇响。',
                game: {
                    type: 'sort', title: '手铃记录与其他铃', instruction: '把木柄手铃照片放本次记录栏，另外两张放延伸观察栏。', success: '铃的照片两栏整理好了。', safety: '只整理屏幕照片，不突然播放响声，不录音或拆真铃。',
                    pieces: [{label: '社区乐器介绍桌上的木柄手铃', variant: 0, photo: true}, {label: '三只悬挂的金属铃', variant: 1, photo: true}, {label: '架上带拉绳的铃', variant: 2, photo: true}],
                    targets: [{label: '本次手铃记录', x: 28, y: 65}, {label: '延伸观察', x: 72, y: 65}], matches: [0, 1, 1]
                }
            },
            {
                id: 'community-bell-02', baseId: 'bell', title: '邻里展柜里静静的铃相册',
                partner: '邻里乐器展的志愿者', item: '展柜铃观察纪念页',
                mission: '“展柜里的铃不用摇，揭开相册看看它和另外两种铃！”',
                sceneLabel: '邻里乐器展柜里架上带拉绳的铃',
                sceneDescription: 'A metal bell mounted on a stable wooden display frame with a short pull cord secured within an enclosed community instrument exhibition cabinet. Show the entire bell and frame behind glass in soft light; no people, readable captions, logos or watermarks.',
                actionLabel: '展开静静的铃相册', actionResult: '展柜架上铃、悬挂金属铃和另一只架上拉绳铃的照片全部展开了。',
                application: '给邻里展柜里架上的铃照片放“铃”字牌。', ending: '志愿者留好观察页，展柜里的铃仍静静待在原位。',
                cloze: '展柜的木架上装着一只金属——',
                homeTip: '自然参观乐器展时，听孩子自己注意到的物品，不制造铃声求答案；不触摸展柜、不拉绳，尊重安静观察的选择。',
                game: {
                    type: 'reveal', title: '展柜铃的静音相册', instruction: '自由揭开六块遮片，看看三幅完整铃照片。', success: '三幅铃照片全部展开了。', safety: '只揭屏幕照片，不拉真实铃绳、不拆零件、不录音，可以全程静音。',
                    spots: ['看见邻里乐器展柜里架上带拉绳的铃。', '邻里乐器展柜里架上带拉绳的铃照片展开了。', '看见三只悬挂的金属铃。', '三只悬挂的金属铃照片展开了。', '看见架上带拉绳的铃。', '架上带拉绳的铃照片展开了。']
                }
            },
            {
                id: 'community-kite-01', baseId: 'kite', title: '社区风筝展的菱形轮廓拼板',
                partner: '社区风筝展的老师', item: '菱形风筝轮廓纪念页',
                mission: '“给展台上的风筝拼好筝面、彩尾和线轴示意片！”',
                sceneLabel: '社区风筝展台上的菱形风筝与线轴',
                sceneDescription: 'A real diamond-shaped kite lying flat on a community exhibition table, with its paper sail, lightweight spars, attached fabric tail and separate neatly wound reel visible. Frame the complete kite and reel with ample margins in daylight; no people, text, logos or watermarks.',
                actionLabel: '拼好风筝轮廓示意图', actionResult: '筝面、彩尾和线轴三块示意片都放到位，风筝展示图完整了。',
                application: '给展台上的菱形风筝照片放“筝”字牌，表示风筝的筝。', ending: '老师夹好轮廓页，展台上的风筝不用放飞也能欣赏。',
                cloze: '展台上摆着一只菱形风——',
                homeTip: '自然看到风筝图片时，听孩子自己的描述，不要求放飞来证明认识；真实放飞由成人陪伴，远离道路、电线和雷雨，线轴由成人保管。',
                game: {
                    type: 'build', title: '风筝轮廓示意拼板', instruction: '把筝面、彩尾和线轴示意片放到对应位置，顺序不限。', success: '三块风筝展示示意片都到位了。', safety: '只拼屏幕示意图，不操作真线绳、骨架或工具，不要求真实放飞。',
                    pieces: [{label: '筝面示意片', variant: 0, photo: false}, {label: '彩尾示意片', variant: 0, photo: false}, {label: '线轴示意片', variant: 0, photo: false}],
                    targets: [{label: '筝面位置', x: 50, y: 30}, {label: '彩尾位置', x: 50, y: 74}, {label: '线轴位置', x: 80, y: 65}], matches: [0, 1, 2]
                }
            },
            {
                id: 'community-kite-02', baseId: 'kite', title: '园游风筝展示区的到达图',
                partner: '园游活动的带队老师', item: '风筝展示区路线页',
                mission: '“在屏幕地图上经过集合桌和步道，到达风筝展示区！”',
                sceneLabel: '社区园游展示架上的燕形风筝',
                sceneDescription: 'A real swallow-shaped kite displayed securely on a low stand at a community garden event, with its taut fabric sail, lightweight frame and a neatly wound line reel beside it. Show the entire kite on a calm sheltered display area, not flying near hazards; no people, text, logos or watermarks.',
                actionLabel: '到达屏幕风筝展示区', actionResult: '屏幕标记经过园游集合桌和展示步道，最后到达风筝展示区。',
                application: '给园游展示架上的燕形风筝照片放“筝”字牌，表示风筝的筝。', ending: '老师收好到达页，真实园游时大家会结伴去看展，不必放飞。',
                cloze: '园游展示架上摆着一只燕形风——',
                homeTip: '自然看园游照片时，听孩子自己谈到的展品，不提示字音、不要求操作风筝；成人陪伴，不碰展架和线绳。',
                game: {
                    type: 'route', title: '风筝展示区屏幕地图', instruction: '依次点园游集合桌、展示步道、风筝展示区三个屏幕地点。', success: '屏幕标记到达风筝展示区。', safety: '仅为屏幕地图，不独自去园游、不操作真风筝；真实放飞须成人陪伴并远离道路、电线和雷雨。',
                    steps: [{label: '到园游集合桌', result: '屏幕标记到了园游集合桌。'}, {label: '到展示步道', result: '屏幕标记到了展示步道。'}, {label: '到风筝展示区', result: '屏幕标记到了风筝展示区。'}],
                    targets: [{label: '园游集合桌', x: 20, y: 75}, {label: '展示步道', x: 50, y: 50}, {label: '风筝展示区', x: 78, y: 25}]
                }
            }
        ]
    };
});
