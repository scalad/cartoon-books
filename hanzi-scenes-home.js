(function (root, factory) {
    'use strict';
    const catalog = factory();
    if (typeof module === 'object' && module.exports) module.exports = catalog;
    else (root.HanziSceneCatalogs ||= []).push(catalog);
})(typeof window !== 'undefined' ? window : globalThis, function () {
    'use strict';
    return {
        category: '温暖的家',
        stories: [
            {
                id: 'home-door-01', baseId: 'door', title: '客用拖鞋篮旁的蓝门', partner: '来做客的姨妈', item: '蓝门迎客路线页',
                mission: '“请在屏幕地图上标出拖鞋篮旁的房间入口！”',
                sceneLabel: '拖鞋篮旁关着的蓝色房间门',
                sceneDescription: 'A complete closed pale blue interior room door with its frame and handle in a bright home hallway, a plain woven wicker guest slipper basket on the floor beside it. Straight-on photorealistic framing, the entire door centered with crop-safe margins, no people, door numbers or text.',
                actionLabel: '点亮迎客路线', actionResult: '屏幕路线依次经过拖鞋篮、走廊，停在蓝门入口标记。',
                application: '给拖鞋篮旁的蓝门照片放“门”字牌', ending: '姨妈把路线页放进迎客小册，真实开门由大人照看。',
                cloze: '拖鞋篮旁，进房间要经过这扇——',
                homeTip: '家人正常迎客时，留意孩子是否自然谈到入口或门的颜色，不先指门、不问字音；开关门由成人照看，手不放门缝。',
                game: { type: 'route', title: '迎客地图三站', instruction: '只在屏幕上依次点拖鞋篮、走廊和蓝门入口，不需要真的走路线。', success: '地图路线到达蓝门入口。', safety: '这是屏幕地图；真实开关门交给成人，远离门缝。', steps: [{ label: '拖鞋篮标记', result: '屏幕起点停在拖鞋篮标记。' }, { label: '走廊标记', result: '路线来到走廊标记。' }, { label: '蓝门入口标记', result: '路线到达蓝门入口标记。' }], targets: [{ label: '拖鞋篮标记', x: 20, y: 75 }, { label: '走廊标记', x: 50, y: 55 }, { label: '蓝门入口标记', x: 80, y: 35 }] }
            },
            {
                id: 'home-window-01', baseId: 'window', title: '晨光照进矮凳角', partner: '布置读书角的爸爸', item: '晨光窗边计划页',
                mission: '“请在屏幕计划页上留好窗边的观察位置！”',
                sceneLabel: '矮凳上方关着的两格长方窗',
                sceneDescription: 'A complete wide rectangular closed two-pane window with a white frame above an empty low reading bench, beige curtains drawn aside and soft morning light through the glass. The whole window fits inside a photorealistic landscape frame, no people, open windows, climbing equipment or text.',
                actionLabel: '布置窗边计划页', actionResult: '晨光、矮凳和留空提醒图卡分别放进了计划页的三个位置。',
                application: '给矮凳上方的两格窗照片放“窗”字牌', ending: '爸爸收好计划页，窗边仍留着整洁的观察空间。',
                cloze: '晨光透过玻璃照进来，这里有一扇——',
                homeTip: '在日常座位上看屋里的光影时，听孩子自然提到什么，不先指窗、不要求找字；不靠窗攀爬，不操作窗户。',
                game: { type: 'build', title: '窗边计划拼贴', instruction: '把三张示意图卡放到各自标明的位置，拼成屏幕计划页。', success: '三张计划图卡各就各位。', safety: '只摆屏幕示意图卡，不移动真家具、不爬窗台。', pieces: [{ label: '晨光图卡', variant: 0, photo: false }, { label: '矮凳图卡', variant: 0, photo: false }, { label: '留空提醒图卡', variant: 0, photo: false }], targets: [{ label: '光线记录处', x: 25, y: 30 }, { label: '座位计划处', x: 50, y: 65 }, { label: '窗边留空处', x: 78, y: 40 }], matches: [0, 1, 2] }
            },
            {
                id: 'home-lamp-01', baseId: 'lamp', title: '床头灯下的晚安书', partner: '准备晚安故事的妈妈', item: '晚安灯光准备页',
                mission: '“请把屏幕上的晚安准备卡按顺序排好！”',
                sceneLabel: '床头柜上亮着的琥珀色台灯',
                sceneDescription: 'A complete small amber-shaded bedside table lamp softly illuminated on a wooden nightstand next to a closed plain book. Realistic shade, stem and stable base all fully visible within crop-safe margins, quiet bedroom photography, no people, visible plugs, exposed wiring or text.',
                actionLabel: '排好晚安准备卡', actionResult: '故事书、舒适座位和请大人安排灯光的三张卡按顺序放好。',
                application: '给床头柜上的琥珀色台灯照片放“灯”字牌', ending: '妈妈按平常的方式安排照明，晚安故事准备开始。',
                cloze: '晚安书旁发着柔光的是一盏——',
                homeTip: '家人正常讲睡前故事时，听孩子是否自然谈到照明，不先读字或让孩子找开关；电器和插头只由成人处理。',
                game: { type: 'sequence', title: '晚安准备三步卡', instruction: '依次把故事书卡、座位卡、请大人安排灯光卡放进晚安准备栏。', success: '晚安准备卡按顺序排好了。', safety: '只有屏幕图卡；不操作真实开关、插头或电池。', pieces: [{ label: '准备故事书卡', variant: 0, photo: false }, { label: '安排舒适座位卡', variant: 0, photo: false }, { label: '请大人安排灯光卡', variant: 0, photo: false }], targets: [{ label: '晚安准备栏', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'home-bed-01', baseId: 'bed', title: '绿被子铺好的清晨', partner: '整理卧室的奶奶', item: '绿被清晨观察页',
                mission: '“请揭开照片看看清晨整理好的休息地方！”',
                sceneLabel: '铺着浅绿被子的低单人床',
                sceneDescription: 'A complete low single bed made with a pale green quilt and one cream pillow in a quiet bedroom. The bed frame and mattress are fully visible, spare folded bedding on a low shelf, soft daylight and real fabric texture. No bunk bed in this new cover, people or text.',
                actionLabel: '揭开休息照片', actionResult: '三张床的照片都揭开了：浅绿被子的低单人床、上下两层的床和小小的童床。',
                application: '给铺着浅绿被子的低单人床照片放“床”字牌', ending: '奶奶把清晨观察页收好，房间留给日常休息。',
                cloze: '铺好浅绿被子、可以躺下休息的是——',
                homeTip: '日常整理卧室时，留意孩子自然谈到的物品，不先指认、不要求重复铺被；不跳床，也不攀上下铺。',
                game: { type: 'reveal', title: '三处休息地方', instruction: '自由点开六个图块，看看三张完整照片；不需要寻找固定小角落。', success: '三张床的照片都展开了。', safety: '只观察屏幕照片，不跳床、不攀上下铺。', spots: ['铺着浅绿被子的低单人床', '铺着浅绿被子的低单人床', '上下两层的床', '上下两层的床', '小小的童床', '小小的童床'] }
            },
            {
                id: 'home-shirt-01', baseId: 'shirt', title: '降温前的毛衣篮', partner: '整理换季衣物的妈妈', item: '降温衣物分栏页',
                mission: '“请把衣服照片分到保暖和挡雨两栏！”',
                sceneLabel: '软篮里折好的米色毛衣',
                sceneDescription: 'A cream knitted sweater neatly folded with its neckline and sleeves visible in a shallow fabric storage basket on a low bedroom shelf. Centered full garment presentation with tactile knit texture, calm daylight, no people, labels or text.',
                actionLabel: '分好换季衣物照片', actionResult: '毛衣和夹克照片放到保暖栏，雨衣照片放到挡雨栏。',
                application: '给软篮里折好的毛衣照片放“衣”字牌', ending: '妈妈参考屏幕分栏页，按天气整理家里的衣物。',
                cloze: '软篮里的毛衣是一件保暖的——服',
                homeTip: '成人正常整理换季衣物时，听孩子自己的描述，不先给分类名称、不要求配字；不用攀高取衣物。',
                game: { type: 'sort', title: '保暖与挡雨照片栏', instruction: '毛衣、夹克照片放保暖栏，雨衣照片放挡雨栏；这里按这次准备的用途分。', success: '保暖和挡雨两栏都放好了。', safety: '只整理照片，不从高处取衣物、不拉扯挂衣架。', pieces: [{ label: '软篮里折好的米色毛衣', variant: 0, photo: true }, { label: '一件夹克', variant: 1, photo: true }, { label: '一件雨衣', variant: 2, photo: true }], targets: [{ label: '保暖栏', x: 30, y: 60 }, { label: '挡雨栏', x: 75, y: 60 }], matches: [0, 0, 1] }
            },
            {
                id: 'home-hat-01', baseId: 'hat', title: '玄关托盘里的布帽', partner: '整理玄关的爸爸', item: '布帽收纳照片页',
                mission: '“请把这三种帽子的照片收进帽子页！”',
                sceneLabel: '玄关木托盘里的蓝色宽檐布帽',
                sceneDescription: 'A complete soft blue wide-brim fabric sunhat lying in a plain shallow wooden tray on a low entryway console. The crown and entire brim are visible with generous margins, natural home light and authentic cotton stitching, no people, logos or text.',
                actionLabel: '收集帽子照片', actionResult: '布帽、毛线帽和棒球帽三张照片一起放进帽子页。',
                application: '给玄关托盘里的蓝色布帽照片放“帽”字牌', ending: '爸爸把照片页留在屏幕小册里，玄关用品按日常需要收好。',
                cloze: '玄关托盘里放着一顶蓝色的——',
                homeTip: '平常出门准备时，留意孩子是否自己注意穿戴用品，不故意藏帽、不先读字；取高处物品由成人处理。',
                game: { type: 'collect', title: '帽子照片小册', instruction: '把三张帽子照片放进同一页，先后顺序不限。', success: '三种帽子的照片收齐了。', safety: '只移动屏幕照片，不攀柜子拿帽子。', pieces: [{ label: '玄关木托盘里的蓝色宽檐布帽', variant: 0, photo: true }, { label: '毛线织的帽子', variant: 1, photo: true }, { label: '前面有帽檐的棒球帽', variant: 2, photo: true }], targets: [{ label: '帽子照片页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'home-bag-01', baseId: 'bag', title: '去外婆家前的软包', partner: '准备探亲的妈妈', item: '探亲软包准备页',
                mission: '“请在屏幕上把探亲用品卡装进软包清单！”',
                sceneLabel: '卧室长凳上打开的绿色旅行包',
                sceneDescription: 'A complete olive green soft travel duffel bag open on a low wooden bedroom bench, with a folded plain sweater visible inside and a soft fabric pouch beside it. The handles, zipper opening and full bag body are visible, no luggage tag, people or text.',
                actionLabel: '顺序装好用品卡', actionResult: '换洗衣物、自己的洗漱用品和故事书三张示意卡按顺序装进屏幕清单。',
                application: '给长凳上打开的绿色旅行包照片放“包”字牌', ending: '妈妈用清单检查日常行李，探亲准备少了一点忙乱。',
                cloze: '把探亲用品装好，带上这只旅行——',
                homeTip: '家人自然准备行李时，听孩子提到什么，不布置找包答题，不录入姓名地址；真行李重量由成人安排。',
                game: { type: 'sequence', title: '探亲用品卡入包', instruction: '依次把换洗衣物卡、自己的洗漱用品卡、故事书卡放进用品清单。', success: '三张用品卡按顺序进入清单。', safety: '这是屏幕示意清单，不搬重行李，不填写个人资料。', pieces: [{ label: '换洗衣物卡', variant: 0, photo: false }, { label: '自己的洗漱用品卡', variant: 0, photo: false }, { label: '故事书卡', variant: 0, photo: false }], targets: [{ label: '旅行包用品清单', x: 50, y: 65 }], matches: [0, 0, 0] }
            },
            {
                id: 'home-umbrella-01', baseId: 'umbrella', title: '雨后滴水垫旁的伞', partner: '刚回家的爸爸', item: '雨后伞位准备页',
                mission: '“请用屏幕图卡给雨后的伞安排位置！”',
                sceneLabel: '玄关滴水垫旁合拢的深蓝雨伞',
                sceneDescription: 'A complete closed dark blue straight-handled umbrella leaning securely in a wide sturdy entryway umbrella stand beside a textured drip mat. Canopy folds and handle clearly visible, a few water droplets on fabric, photorealistic indoor light, no people or text.',
                actionLabel: '排好雨后收纳卡', actionResult: '滴水垫、请大人收伞和伞架位置三张卡依次放进收纳准备栏。',
                application: '给玄关滴水垫旁合拢的雨伞照片放“伞”字牌', ending: '爸爸处理真雨具和地面水迹，玄关重新清爽起来。',
                cloze: '下雨用来挡雨，回家收起来的是——',
                homeTip: '雨天回家时听孩子自然说到的雨具，不先出示字牌、不要求开合伞；真伞开合和擦干地面由成人处理。',
                game: { type: 'sequence', title: '雨后收纳准备卡', instruction: '依次放好滴水垫图卡、请大人收伞卡和伞架位置图卡。', success: '雨后收纳准备卡排好了。', safety: '只放屏幕图卡，不开合真伞；成人处理湿滑地面。', pieces: [{ label: '滴水垫图卡', variant: 0, photo: false }, { label: '请大人收伞卡', variant: 0, photo: false }, { label: '伞架位置图卡', variant: 0, photo: false }], targets: [{ label: '收纳准备栏', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'home-table-01', baseId: 'table', title: '拼图留出一张圆桌', partner: '准备家庭拼图的爷爷', item: '圆桌拼图照片页',
                mission: '“请把有桌面的家具照片收进准备页！”',
                sceneLabel: '客厅里摆着拼图盒的圆木桌',
                sceneDescription: 'A complete round wooden table in a tidy living room with a single closed unmarked cardboard jigsaw box at the center. Its circular tabletop and stable legs are fully visible, natural wood grain and soft daylight, no people, loose tiny pieces or text.',
                actionLabel: '收集桌子照片', actionResult: '圆木桌、空书桌和空矮桌的三张照片放进桌子页。',
                application: '给摆着拼图盒的圆木桌照片放“桌”字牌', ending: '爷爷收好照片页，家庭拼图仍按平常方式准备。',
                cloze: '拼图盒放在圆圆的——上',
                homeTip: '家人日常准备桌面活动时，听孩子自己提到的家具，不要求指出目标字；不攀桌，适龄拼图由成人安排。',
                game: { type: 'collect', title: '三张桌子照片', instruction: '把圆木桌、书桌和矮桌照片收进桌子页，顺序不限。', success: '桌子照片页收好了。', safety: '只整理照片，不搬真桌、不站桌。', pieces: [{ label: '客厅里摆着拼图盒的圆木桌', variant: 0, photo: true }, { label: '空着的书桌', variant: 1, photo: true }, { label: '空着的矮桌', variant: 2, photo: true }], targets: [{ label: '桌子照片页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'home-chair-01', baseId: 'chair', title: '故事座位添上软垫', partner: '准备讲故事的奶奶', item: '软垫座位设计页',
                mission: '“请把座位示意卡放进屏幕设计页！”',
                sceneLabel: '书柜旁放着黄软垫的木椅',
                sceneDescription: 'A complete sturdy wooden chair with a mustard yellow seat cushion beside a low bookcase in a home storytelling corner. Clearly visible backrest, seat and four legs, realistic wood and fabric, no people, wheels or text.',
                actionLabel: '拼好座位设计页', actionResult: '座位、软垫和周围留空三张示意卡放进相应设计栏。',
                application: '给书柜旁的软垫木椅照片放“椅”字牌', ending: '奶奶看完设计页，真实座位由大人稳妥安排。',
                cloze: '黄软垫下面是一把可以坐的木——子',
                homeTip: '平常坐下听故事时，记录孩子自然说到的物品，不先读字，不安排抢椅；不站椅、不搬重椅。',
                game: { type: 'build', title: '故事座位设计', instruction: '把座位卡放座位栏，软垫卡放舒适栏，留空提醒卡放周围空间栏。', success: '故事座位的三栏设计完成了。', safety: '只拼屏幕示意卡，真椅移动由成人处理，不站椅。', pieces: [{ label: '座位示意卡', variant: 0, photo: false }, { label: '软垫示意卡', variant: 0, photo: false }, { label: '留空提醒卡', variant: 0, photo: false }], targets: [{ label: '座位栏', x: 25, y: 65 }, { label: '舒适栏', x: 50, y: 45 }, { label: '周围空间栏', x: 78, y: 65 }], matches: [0, 1, 2] }
            },
            {
                id: 'home-clock-01', baseId: 'clock', title: '早餐角的圆钟', partner: '准备早餐的爸爸', item: '早餐圆钟观察页',
                mission: '“请揭开三张显示时间的钟照片！”',
                sceneLabel: '早餐角墙上带刻线的圆时钟',
                sceneDescription: 'A complete round wall clock with a light wooden rim and two distinct hands, using simple tick marks instead of numerals, hanging above a low breakfast sideboard. Soft morning light, credible clock construction, no people, digits, words or text.',
                actionLabel: '揭开时钟照片', actionResult: '早餐角墙钟、桌上时钟和落地立式钟三张照片都展开了。',
                application: '给早餐角墙上的圆时钟照片放“钟”字牌', ending: '爸爸把观察页留好，早餐照常开始，不需要报时间。',
                cloze: '墙上有指针、可以看时间的是——',
                homeTip: '日常早餐时听孩子自然注意到什么，不先指钟、不要求认数字或报时；不拆钟、不碰电池。',
                game: { type: 'reveal', title: '早餐角时钟展开', instruction: '自由揭开六个图块，看三张完整时钟照片，不用读出时间。', success: '三张时钟照片都展开了。', safety: '只看照片，不拆真钟、不触碰电池、不攀高。', spots: ['早餐角墙上带刻线的圆时钟', '早餐角墙上带刻线的圆时钟', '桌上的时钟', '桌上的时钟', '落地的立式钟', '落地的立式钟'] }
            },
            {
                id: 'home-house-01', baseId: 'house', title: '回家相册里的白墙房', partner: '翻看居住环境照片的妈妈', item: '白墙房屋相册页',
                mission: '“请展开不同房屋的照片，给相册添一页！”',
                sceneLabel: '矮篱笆后的一层白墙房屋',
                sceneDescription: 'A complete real single-storey white plaster house behind a low picket fence, with a terracotta pitched roof, a clearly built front door and windows. The entire building and roof fit inside a wide landscape frame, natural daylight, no people, house numbers, signs or text.',
                actionLabel: '展开房屋相册', actionResult: '白墙房屋、两层砖房和木墙小房三张照片都展开了。',
                application: '给矮篱笆后的一层白墙房屋照片放“房”字牌', ending: '妈妈把新页放进屏幕相册，屋顶和墙的样子各不相同。',
                cloze: '有墙、有屋顶、供人住的这座建筑是——屋',
                homeTip: '自然翻看普通街景图时，听孩子的描述，不先指出房屋、不要求配字；不用真实住址，不进入工地。',
                game: { type: 'reveal', title: '三种房屋相册', instruction: '自由揭开六块图块，看看三张完整房屋照片，不把模型当真房屋。', success: '三张房屋照片全部展开。', safety: '只看屏幕图片，不透露真实住址、不进工地。', spots: ['矮篱笆后的一层白墙房屋', '矮篱笆后的一层白墙房屋', '一座两层砖房', '一座两层砖房', '一座木墙小房', '一座木墙小房'] }
            },
            {
                id: 'home-towel-01', baseId: 'towel', title: '洗手角的条纹手巾', partner: '整理洗手用品的妈妈', item: '条纹手巾收纳设计页',
                mission: '“请把屏幕用品卡分到自己的用品格和环境准备格！”',
                sceneLabel: '洗手角低横杆上搭着的蓝白条纹手巾',
                sceneDescription: 'A complete blue-and-white striped cotton hand towel draped neatly over a low simple towel rail beside a home washbasin. Soft dry terry texture and the entire towel visible, bright indoor photography, no people, personal labels or text.',
                actionLabel: '分好洗手角准备卡', actionResult: '自己的手巾卡放用品格，防滑提醒和台面留空卡放环境准备格。',
                application: '给低横杆上的条纹手巾照片放“巾”字牌', ending: '妈妈收好设计页，真实用品各自使用、不交换。',
                cloze: '洗完手擦干用的这块手——',
                homeTip: '日常擦手时听孩子自己说到什么，不先指字、不让孩子试答；使用自己的干净用品，不交换毛巾。',
                game: { type: 'sort', title: '用品与环境分栏', instruction: '自己的手巾卡放用品格；防滑提醒卡和台面留空卡放环境准备格。', success: '用品和环境准备卡分好了。', safety: '只分示意卡，不交换真实毛巾、不制造湿滑地面。', pieces: [{ label: '自己的手巾卡', variant: 0, photo: false }, { label: '防滑提醒卡', variant: 0, photo: false }, { label: '台面留空卡', variant: 0, photo: false }], targets: [{ label: '自己的用品格', x: 30, y: 60 }, { label: '环境准备格', x: 75, y: 60 }], matches: [0, 1, 1] }
            },
            {
                id: 'home-soap-01', baseId: 'soap', title: '沥水盒里的小方皂', partner: '检查洗手角的爸爸', item: '方皂清洁用品照片页',
                mission: '“请收好三张香皂照片，做一页清洁用品记录！”',
                sceneLabel: '沥水皂盒里的一块浅黄方形香皂',
                sceneDescription: 'A single pale yellow square bar of soap centered in a simple white slotted draining soap dish on a clean home washbasin ledge. The entire bar and dish are visible, real slightly matte soap texture, no food, people, embossed marks or text.',
                actionLabel: '收集香皂照片', actionResult: '沥水盒里的方皂、圆形香皂和椭圆形香皂三张照片收进清洁用品页。',
                application: '给沥水盒里的方形香皂照片放“皂”字牌', ending: '爸爸收好照片页，真香皂留在正常洗手的位置。',
                cloze: '沥水盒里用于清洁的这块香——',
                homeTip: '平常洗手时记录孩子主动的话，不先说字音、不为认字重复洗手；成人陪伴，香皂不入口、不碰眼睛。',
                game: { type: 'collect', title: '香皂照片记录', instruction: '把三张香皂照片收进清洁用品页，顺序不限。', success: '三张香皂照片收齐了。', safety: '只整理照片；真香皂不能吃，不能碰眼睛。', pieces: [{ label: '沥水皂盒里的一块浅黄方形香皂', variant: 0, photo: true }, { label: '一块圆形香皂', variant: 1, photo: true }, { label: '一块椭圆形香皂', variant: 2, photo: true }], targets: [{ label: '清洁用品页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'home-door-02', baseId: 'door', title: '午睡房门外的轻声提醒', partner: '照顾午睡的爷爷', item: '午睡门外提醒设计页',
                mission: '“请在屏幕设计页上安排门外的轻声提醒！”',
                sceneLabel: '卧室门旁挂着空白布牌的木门',
                sceneDescription: 'A complete closed warm oak bedroom door with its frame and handle, a small blank rectangular cloth hanging on a separate wall peg beside the door. Calm hallway photography, no writing on the cloth, no people, fingers or door operation, entire door inside margins.',
                actionLabel: '拼好门外提醒页', actionResult: '轻声、等待和请大人照看开门三张示意卡分别放到提醒页。',
                application: '给空白布牌旁的卧室木门照片放“门”字牌', ending: '爷爷保存屏幕提醒页，午睡房间继续安安静静。',
                cloze: '布牌挂在旁边，卧室入口关着一扇——',
                homeTip: '家人自然经过休息房间时，听孩子自己的话，不让孩子反复开关门找字；不把手放在门缝里。',
                game: { type: 'build', title: '轻声提醒设计', instruction: '把轻声卡、等待卡、请大人开门卡放入对应的提醒位置。', success: '门外提醒页的三处安排好了。', safety: '仅屏幕设计；真门不由孩子反复开合，手远离门缝。', pieces: [{ label: '轻声图卡', variant: 0, photo: false }, { label: '等待图卡', variant: 0, photo: false }, { label: '请大人照看开门卡', variant: 0, photo: false }], targets: [{ label: '轻声提醒处', x: 25, y: 35 }, { label: '等候提醒处', x: 50, y: 70 }, { label: '成人照看提醒处', x: 78, y: 35 }], matches: [0, 1, 2] }
            },
            {
                id: 'home-window-02', baseId: 'window', title: '隔着玻璃看雨滴', partner: '陪伴雨天阅读的奶奶', item: '雨滴窗面观察页',
                mission: '“请展开窗的照片，看看雨天的玻璃窗！”',
                sceneLabel: '玻璃上带雨滴的关着的长方窗',
                sceneDescription: 'A complete closed rectangular white-framed home window seen safely from indoors with rain droplets on the glass and softly blurred outdoor greenery. Pale curtains at the sides, whole window centered, realistic wet glass, no people, open sash or text.',
                actionLabel: '揭开窗的观察照片', actionResult: '带雨滴的长方窗、圆窗和挂着窗帘的打开的窗三张照片展开了。',
                application: '给带雨滴的关着的长方窗照片放“窗”字牌', ending: '奶奶把雨天观察页保存好，大家继续待在室内读书。',
                cloze: '隔着带雨滴的玻璃看外面，这是一扇——',
                homeTip: '下雨时在室内日常位置听孩子自然描述，不先指窗、不要求贴近玻璃；不让孩子开窗或攀窗台。',
                game: { type: 'reveal', title: '窗的照片慢慢展开', instruction: '自由点开六个图块，看三张完整照片；打开的窗也只在照片里观察。', success: '三张窗的照片都展开了。', safety: '只看屏幕，现实中不操作窗户、不攀窗台。', spots: ['玻璃上带雨滴的关着的长方窗', '玻璃上带雨滴的关着的长方窗', '圆圆的窗', '圆圆的窗', '挂着窗帘的打开的窗', '挂着窗帘的打开的窗'] }
            },
            {
                id: 'home-lamp-02', baseId: 'lamp', title: '沙发旁的布罩灯', partner: '收拾客厅的爸爸', item: '沙发布罩灯照片页',
                mission: '“请把不同位置的灯照片收进客厅小册！”',
                sceneLabel: '沙发旁带米白布罩的落地灯',
                sceneDescription: 'A complete slim floor lamp with a cream linen shade and broad stable circular base standing beside a home sofa. Shade, stem and base fully contained in the landscape frame, soft warm illumination, real fabric and metal texture, no people, visible plugs, exposed wires or text.',
                actionLabel: '收好灯的照片', actionResult: '沙发旁布罩落地灯、立在地上的落地灯和悬挂吊灯三张照片进入灯的照片页。',
                application: '给沙发旁的布罩落地灯照片放“灯”字牌', ending: '爸爸收好照片小册，真实照明保持原来的稳妥安排。',
                cloze: '沙发旁这盏有布罩、站在地上的——',
                homeTip: '家人正常在客厅活动时，听孩子自然谈到的光线或物品，不提示字音；不拉灯杆、不碰插头。',
                game: { type: 'collect', title: '灯的不同位置', instruction: '把三张灯照片收进同一页，不需要操作真实灯具。', success: '灯的三张照片放好了。', safety: '只收照片；真实灯具、插头和开关由成人处理。', pieces: [{ label: '沙发旁带米白布罩的落地灯', variant: 0, photo: true }, { label: '立在地上的落地灯', variant: 1, photo: true }, { label: '悬挂着的吊灯', variant: 2, photo: true }], targets: [{ label: '灯的照片页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'home-bed-02', baseId: 'bed', title: '客房床尾的备用被', partner: '准备客房的姨妈', item: '客房被褥准备页',
                mission: '“请在屏幕上按顺序放好客房准备卡！”',
                sceneLabel: '床尾放着折叠蓝被子的客房床',
                sceneDescription: 'A complete guest-room single bed with a plain cream bedspread, one pillow at the head and a neatly folded blue quilt at the foot. The full low bed frame and mattress are visible, soft afternoon light, credible fabric folds, no people or text.',
                actionLabel: '排好客房准备卡', actionResult: '干净床单、枕头和备用被子三张卡按顺序放到客房准备栏。',
                application: '给床尾放着折叠蓝被子的客房床照片放“床”字牌', ending: '姨妈参考准备页收拾客房，让来客能安心休息。',
                cloze: '床尾放着备用被子，客人晚上睡在这张——',
                homeTip: '家人正常收拾客房时，留意孩子自然谈到什么，不要求摆放来证明认字；不搬床、不攀高取被褥。',
                game: { type: 'sequence', title: '客房准备卡排队', instruction: '依次把干净床单卡、枕头卡、备用被子卡放入客房准备栏。', success: '客房准备卡依次排好了。', safety: '仅移动屏幕示意卡，不搬真床、不攀高。', pieces: [{ label: '干净床单卡', variant: 0, photo: false }, { label: '枕头卡', variant: 0, photo: false }, { label: '备用被子卡', variant: 0, photo: false }], targets: [{ label: '客房准备栏', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'home-shirt-02', baseId: 'shirt', title: '衣架上的干净睡衣', partner: '收好洗净衣物的奶奶', item: '睡衣换洗观察页',
                mission: '“请展开三张衣服照片，添进换洗观察页！”',
                sceneLabel: '低衣杆上挂着的浅蓝长袖睡衣上衣',
                sceneDescription: 'A complete light blue long-sleeved pajama top on a simple wooden hanger on a low freestanding clothes rail in a bedroom. Collar, body and both sleeves fully visible, clean soft cotton fabric, no people, printed patterns, logos or text.',
                actionLabel: '揭开换洗衣物照片', actionResult: '浅蓝睡衣上衣、夹克和雨衣三张衣服照片都展开了。',
                application: '给低衣杆上的浅蓝睡衣上衣照片放“衣”字牌', ending: '奶奶收好观察页，干净睡衣留待平常换洗。',
                cloze: '睡前换上的浅蓝上衣是一件睡——',
                homeTip: '正常收洗净衣物时听孩子自己的描述，不要求按指定类别回答，不先读字；高处衣物由成人取放。',
                game: { type: 'reveal', title: '换洗衣物展开页', instruction: '自由揭开六个图块，看完整的睡衣上衣、夹克和雨衣照片。', success: '三张衣服照片都展开了。', safety: '只看屏幕，不攀衣架或柜子，不拉扯衣杆。', spots: ['低衣杆上挂着的浅蓝长袖睡衣上衣', '低衣杆上挂着的浅蓝长袖睡衣上衣', '一件夹克', '一件夹克', '一件雨衣', '一件雨衣'] }
            },
            {
                id: 'home-hat-02', baseId: 'hat', title: '冷天抽屉里的针织帽', partner: '整理冬季用品的爷爷', item: '针织帽形状分栏页',
                mission: '“请把帽子照片按毛线织和前面有帽檐分栏！”',
                sceneLabel: '浅抽屉里平放的红色毛线帽',
                sceneDescription: 'A complete rust red rib-knitted beanie laid flat in a shallow open wooden drawer with a cream fabric liner. Cuffed edge and rounded crown clearly visible, authentic wool knit texture, no pompom, people, labels or text.',
                actionLabel: '分好帽子照片', actionResult: '红毛线帽和毛线帽放到毛线织栏，棒球帽放到前面有帽檐栏。',
                application: '给浅抽屉里平放的红色毛线帽照片放“帽”字牌', ending: '爷爷把分栏页收好，冷天用品仍按日常需要准备。',
                cloze: '浅抽屉里这顶毛线织的东西是——',
                homeTip: '平常整理冬季用品时听孩子的自然描述，不先指出材料、不要求找字；抽屉由成人照看，不反复开合游戏。',
                game: { type: 'sort', title: '毛线织与有帽檐', instruction: '两张毛线帽照片放毛线织栏，棒球帽照片放前面有帽檐栏。', success: '三张帽子照片分到相应栏。', safety: '只分照片，不操作真抽屉、不攀柜子。', pieces: [{ label: '浅抽屉里平放的红色毛线帽', variant: 0, photo: true }, { label: '毛线织的帽子', variant: 1, photo: true }, { label: '前面有帽檐的棒球帽', variant: 2, photo: true }], targets: [{ label: '毛线织栏', x: 30, y: 60 }, { label: '前面有帽檐栏', x: 75, y: 60 }], matches: [0, 0, 1] }
            },
            {
                id: 'home-bag-02', baseId: 'bag', title: '家中游戏篮里的布包', partner: '整理桌面游戏的爸爸', item: '布包用品示意页',
                mission: '“请给屏幕里的游戏布包安排三张用品卡！”',
                sceneLabel: '低收纳架上装着大块拼图板的布手提包',
                sceneDescription: 'A complete plain beige fabric tote bag with two handles sitting on a low home storage shelf, its open top showing the broad edges of large cardboard puzzle boards. The full bag is centered and all handles fit in frame, no tiny loose objects, people or text.',
                actionLabel: '布置布包用品页', actionResult: '拼图板、收纳袋和玩法图卡分别放进布包用品页的三个栏目。',
                application: '给低收纳架上的布手提包照片放“包”字牌', ending: '爸爸按平常习惯收好桌面游戏，示意页也留在小册里。',
                cloze: '大块拼图板装在有提手的布——',
                homeTip: '家人正常整理游戏用品时听孩子提到的用途，不额外布置找包，不先读字；只用适龄大块用品，不攀架子。',
                game: { type: 'build', title: '游戏布包用品页', instruction: '把拼图板卡、收纳袋卡和玩法图卡放到各自栏目，顺序不限。', success: '布包用品页的三个栏目放好了。', safety: '只有示意卡，不拿小零件、不搬高处收纳物。', pieces: [{ label: '大块拼图板卡', variant: 0, photo: false }, { label: '软收纳袋卡', variant: 0, photo: false }, { label: '玩法图卡', variant: 0, photo: false }], targets: [{ label: '拼图板栏目', x: 25, y: 60 }, { label: '收纳袋栏目', x: 50, y: 40 }, { label: '玩法栏目', x: 78, y: 60 }], matches: [0, 1, 2] }
            },
            {
                id: 'home-umbrella-02', baseId: 'umbrella', title: '干伞穿回布伞套', partner: '收好雨具的妈妈', item: '伞的开合照片页',
                mission: '“请把伞照片分到合拢和撑开两栏！”',
                sceneLabel: '玄关托盘上半套着布伞套的合拢绿伞',
                sceneDescription: 'A complete dry closed green compact umbrella lying horizontally on a wide wooden entryway tray, its fabric sleeve pulled halfway over the lower canopy so the folded green canopy and handle remain clearly visible. Full object within margins, realistic fabric, no people, logos or text.',
                actionLabel: '分好伞的状态照片', actionResult: '半套布伞套的绿伞和合拢雨伞照片放合拢栏，弯钩手柄的撑开伞照片放撑开栏。',
                application: '给托盘上半套着布伞套的合拢绿伞照片放“伞”字牌', ending: '妈妈保存状态页，真伞仍由大人收纳。',
                cloze: '已经合拢、半套着布套的雨具是——',
                homeTip: '自然收好干雨具时听孩子的描述，不让孩子开合演示、不先提示字音；真实伞具由成人照看。',
                game: { type: 'sort', title: '合拢与撑开照片栏', instruction: '两张合拢伞照片放合拢栏，带弯钩手柄的撑开伞照片放撑开栏。', success: '伞的两种状态照片分好了。', safety: '只整理照片，不开合真伞，不拿伞指向人。', pieces: [{ label: '玄关托盘上半套着布伞套的合拢绿伞', variant: 0, photo: true }, { label: '合拢的雨伞', variant: 1, photo: true }, { label: '带弯钩手柄的撑开的伞', variant: 2, photo: true }], targets: [{ label: '合拢栏', x: 30, y: 60 }, { label: '撑开栏', x: 75, y: 60 }], matches: [0, 0, 1] }
            },
            {
                id: 'home-table-02', baseId: 'table', title: '折纸前留出空桌面', partner: '准备自由折纸的妈妈', item: '折纸桌面准备页',
                mission: '“请把屏幕上的桌面准备卡放到各自位置！”',
                sceneLabel: '铺着软桌垫和大张彩纸的矮桌',
                sceneDescription: 'A complete low rectangular wooden table in a home activity corner, with a soft plain table mat and three large sheets of colored paper laid flat. Tabletop and stable legs fully visible, natural daylight, no scissors, tools, people, markings or text.',
                actionLabel: '拼好桌面准备页', actionResult: '软垫、彩纸和桌边留空三张示意卡分别放进准备页。',
                application: '给铺着桌垫和彩纸的矮桌照片放“桌”字牌', ending: '妈妈保存准备页，真实折纸仍让孩子自由选择。',
                cloze: '彩纸平铺在有桌面的这张矮——',
                homeTip: '日常自由折纸时听孩子自然说到什么，不先指桌、不要求描字；不攀桌，不接触裁纸工具。',
                game: { type: 'build', title: '折纸桌面计划', instruction: '软垫卡放垫子位，彩纸卡放材料位，留空提醒卡放桌边空间位。', success: '折纸桌面的三个计划位置放好了。', safety: '只拼屏幕计划，不搬桌、不站桌、不用裁纸工具。', pieces: [{ label: '软桌垫卡', variant: 0, photo: false }, { label: '大张彩纸卡', variant: 0, photo: false }, { label: '桌边留空提醒卡', variant: 0, photo: false }], targets: [{ label: '垫子计划位', x: 25, y: 55 }, { label: '材料计划位', x: 50, y: 35 }, { label: '桌边空间位', x: 78, y: 65 }], matches: [0, 1, 2] }
            },
            {
                id: 'home-chair-02', baseId: 'chair', title: '玄关坐着换鞋的椅子', partner: '整理出门用品的爷爷', item: '玄关座椅照片页',
                mission: '“请收好三张有靠背、可以坐的椅子照片！”',
                sceneLabel: '玄关鞋垫旁的一把蓝色靠背椅',
                sceneDescription: 'A complete sturdy muted blue wooden chair with a clearly visible backrest, seat and four legs standing beside a plain shoe mat in a bright home entryway. Centered full furniture framing, realistic painted wood, no people, shoes with logos or text.',
                actionLabel: '收集座椅照片', actionResult: '玄关蓝色靠背椅、教室木椅和户外木折叠椅照片放进座椅页。',
                application: '给玄关鞋垫旁的蓝色靠背椅照片放“椅”字牌', ending: '爷爷收好座椅页，出门准备照常慢慢进行。',
                cloze: '玄关这把让人坐下换鞋的家具是——子',
                homeTip: '日常坐着换鞋时留意孩子自己的表达，不先指椅或读字；座位由成人确认稳固，不站椅、不搬重椅。',
                game: { type: 'collect', title: '座椅照片收纳页', instruction: '把三张椅子照片放进座椅页，照片中的折叠椅也不用真实操作。', success: '三张座椅照片收好了。', safety: '只收照片，不开合真折叠椅，不站椅。', pieces: [{ label: '玄关鞋垫旁的一把蓝色靠背椅', variant: 0, photo: true }, { label: '教室里的木椅', variant: 1, photo: true }, { label: '户外的木折叠椅', variant: 2, photo: true }], targets: [{ label: '座椅照片页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'home-clock-02', baseId: 'clock', title: '起床角的双铃钟', partner: '整理床头的妈妈', item: '起床角时钟准备页',
                mission: '“请把观察时钟的准备卡按顺序放好！”',
                sceneLabel: '床头柜上带刻线的双铃时钟',
                sceneDescription: 'A complete pastel green twin-bell tabletop alarm clock standing on a wooden bedside cabinet, with two readable distinct hands and simple tick marks without numerals. Bells, clock face and two feet wholly visible, realistic metal and glass, no people, digits, brand names or text.',
                actionLabel: '排好时钟观察卡', actionResult: '选择照片、看钟面和保存观察页三张卡按顺序放好，没有设置真闹钟。',
                application: '给床头柜上的双铃时钟照片放“钟”字牌', ending: '妈妈保存起床角准备页，真实作息按家里的日常安排。',
                cloze: '床头柜上有钟面和指针的是一只——',
                homeTip: '平常起床时听孩子自己的发现，不先读字、不要求报时，不突然响铃提示；不拆钟、不碰电池。',
                game: { type: 'sequence', title: '时钟观察准备卡', instruction: '依次放选择照片卡、看钟面卡、保存观察页卡，不需要读数字或设闹钟。', success: '观察时钟的准备卡按顺序放好了。', safety: '仅屏幕准备卡，不设真闹钟、不拆钟、不碰电池。', pieces: [{ label: '选择时钟照片卡', variant: 0, photo: false }, { label: '看钟面卡', variant: 0, photo: false }, { label: '保存观察页卡', variant: 0, photo: false }], targets: [{ label: '时钟观察准备栏', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'home-house-02', baseId: 'house', title: '院子边的红砖小房', partner: '整理普通街景图的爸爸', item: '红砖房屋照片页',
                mission: '“请把这些真实房屋的照片收进房屋页！”',
                sceneLabel: '小院边的一层红砖房屋',
                sceneDescription: 'A complete single-storey red brick home beside a small dry paved courtyard, with a grey pitched roof, front door and two windows. Full roof, walls and building footprint inside landscape margins, authentic masonry and daylight, no people, house numbers, signs or text.',
                actionLabel: '收好房屋照片', actionResult: '一层红砖房、两层砖房和木墙小房三张照片收进房屋页。',
                application: '给小院边的一层红砖房屋照片放“房”字牌', ending: '爸爸把屏幕照片页留好，不需要填写任何住址。',
                cloze: '小院边有屋顶和门窗的红砖建筑是一座——屋',
                homeTip: '自然翻看无个人信息的街景图时，听孩子自己的描述，不先给共同名称、不要求找字；不提供真实住址，不进工地。',
                game: { type: 'collect', title: '真实房屋照片页', instruction: '把三张真实房屋照片放进同一页，先后顺序不限。', success: '房屋照片页收齐了。', safety: '只收屏幕照片，不录入个人地址，不进入工地。', pieces: [{ label: '小院边的一层红砖房屋', variant: 0, photo: true }, { label: '一座两层砖房', variant: 1, photo: true }, { label: '一座木墙小房', variant: 2, photo: true }], targets: [{ label: '房屋照片页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'home-towel-02', baseId: 'towel', title: '洗净浴巾回到低格', partner: '整理干净布品的奶奶', item: '浴巾低格准备页',
                mission: '“请把屏幕上的干净浴巾收纳卡按顺序排好！”',
                sceneLabel: '低收纳格里折叠整齐的紫色浴巾',
                sceneDescription: 'Lilac terry bath towels folded neatly in a low open wooden linen cubby, with broad thick folds and the full two-towel stack visible. Clean dry fabric texture, calm home daylight, no people, personal labels or text.',
                actionLabel: '排好浴巾收纳卡', actionResult: '确认干净干燥、折好和放低格三张示意卡依次进入准备栏。',
                application: '给低收纳格里折好的紫色浴巾照片放“巾”字牌', ending: '奶奶保存收纳页，干净布品由家人按日常习惯收好。',
                cloze: '洗澡后擦干用的这种大布品叫浴——',
                homeTip: '日常整理洗净布品时听孩子自发的话，不要求重复折叠来验证认字；不攀高，使用自己的干净毛巾。',
                game: { type: 'sequence', title: '干净浴巾准备三卡', instruction: '依次放干净干燥确认卡、折叠卡和低格位置卡；都只是屏幕示意。', success: '浴巾收纳准备卡排好了。', safety: '只移动示意卡，不攀柜、不交换真实毛巾。', pieces: [{ label: '干净干燥确认卡', variant: 0, photo: false }, { label: '折叠示意卡', variant: 0, photo: false }, { label: '低格位置卡', variant: 0, photo: false }], targets: [{ label: '浴巾准备栏', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'home-soap-02', baseId: 'soap', title: '清洁托盘上的白方皂', partner: '补充洗手用品的妈妈', item: '方皂圆皂形状页',
                mission: '“请把香皂照片按方形和圆形椭圆形分栏！”',
                sceneLabel: '浅蓝清洁托盘上的白色方形香皂',
                sceneDescription: 'A single complete white square bar of soap with gently rounded corners sitting on a pale blue plastic cleaning tray near a home washbasin. Square outline clearly visible, realistic matte soap surface, no food, embossed markings, people or text.',
                actionLabel: '分好香皂形状照片', actionResult: '白方皂照片放到方形栏，圆形和椭圆形香皂照片放到圆形椭圆形栏。',
                application: '给浅蓝托盘上的白色方形香皂照片放“皂”字牌', ending: '妈妈保存形状页，真清洁用品仍只用来正常清洁。',
                cloze: '清洁托盘上这块不能吃的用品是香——',
                homeTip: '正常补充洗手用品时听孩子自然描述，不先说形状求答案、不把香皂当食物；成人陪伴，避免入口或碰眼睛。',
                game: { type: 'sort', title: '香皂形状两栏', instruction: '方形香皂照片放方形栏，圆形和椭圆形香皂照片放另一栏。', success: '香皂照片按形状分好了。', safety: '只分照片；真实香皂不能吃，不触碰眼睛。', pieces: [{ label: '浅蓝清洁托盘上的白色方形香皂', variant: 0, photo: true }, { label: '一块圆形香皂', variant: 1, photo: true }, { label: '一块椭圆形香皂', variant: 2, photo: true }], targets: [{ label: '方形栏', x: 30, y: 60 }, { label: '圆形椭圆形栏', x: 75, y: 60 }], matches: [0, 1, 1] }
            },
            {
                id: 'home-door-03', baseId: 'door', title: '书房门外的等候垫', partner: '整理书房的爸爸', item: '书房等候准备页',
                mission: '“请在屏幕上排好书房门外的等候提醒卡！”',
                sceneLabel: '软地垫后关着的浅灰书房门',
                sceneDescription: 'A closed light grey home study door with its handle and lower frame, a plain soft rectangular floor mat lying outside the doorway in a tidy hallway. Front-on realistic home photograph with the upper door trim just outside the frame, clear door panels, wood and fabric texture, no people, door signs or text.',
                actionLabel: '排好门外等候卡', actionResult: '留意门外空间、等候和请大人照看开门三张卡按顺序放进提醒栏。',
                application: '给软地垫后关着的书房门照片放“门”字牌', ending: '爸爸收好等候页，真实进出仍由家人照看。',
                cloze: '软地垫后，书房入口关着一扇——',
                homeTip: '正常经过书房时听孩子的自然表达，不要求反复开门，不先提示字音；不靠门缝，不把地垫当跳跃任务。',
                game: { type: 'sequence', title: '书房门外提醒卡', instruction: '依次放门外空间卡、等候卡、请大人照看开门卡，不需要真的开门。', success: '三张等候提醒卡排好了。', safety: '只用屏幕卡，不开合真门，不把手放门缝。', pieces: [{ label: '门外空间提醒卡', variant: 0, photo: false }, { label: '等候提醒卡', variant: 0, photo: false }, { label: '请大人照看开门卡', variant: 0, photo: false }], targets: [{ label: '门外提醒栏', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'home-window-03', baseId: 'window', title: '厨房小窗照亮早餐角', partner: '准备早餐的奶奶', item: '早餐小窗照片页',
                mission: '“请收好这三张窗的照片，留住屋里的光！”',
                sceneLabel: '早餐角上方关着的白框小方窗',
                sceneDescription: 'A complete closed small square white-framed window above an empty dry breakfast sideboard in a home kitchen corner. Daylight through glass and a pale wall, whole window clearly centered, no cooker, hot items, people, open sash or text.',
                actionLabel: '收集窗的照片', actionResult: '早餐角小方窗、圆窗和挂窗帘的打开的窗三张照片放进窗的照片页。',
                application: '给早餐角上方关着的小方窗照片放“窗”字牌', ending: '奶奶收好照片页，早餐角保留自然的明亮。',
                cloze: '早餐角上方，让光照进来的是这扇——',
                homeTip: '在安全的日常位置听孩子说屋里的光或物品，不先指窗、不要求接近；不攀窗台，厨房热物由成人处理。',
                game: { type: 'collect', title: '窗与屋里的光', instruction: '把三张窗照片放到照片页，打开的窗也只看照片，不真实操作。', success: '窗的三张照片收好了。', safety: '仅移动照片，不开窗、不攀高，不靠近厨房热源。', pieces: [{ label: '早餐角上方关着的白框小方窗', variant: 0, photo: true }, { label: '圆圆的窗', variant: 1, photo: true }, { label: '挂着窗帘的打开的窗', variant: 2, photo: true }], targets: [{ label: '窗的照片页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'home-lamp-03', baseId: 'lamp', title: '餐桌上方的编织灯罩', partner: '安排家庭晚餐的妈妈', item: '餐灯环境准备页',
                mission: '“请把晚餐准备卡分到灯光安排和桌面准备两栏！”',
                sceneLabel: '餐桌上方带编织灯罩的吊灯',
                sceneDescription: 'A complete woven rattan-shaded pendant lamp suspended above a simple home dining table. Full shade, bulb enclosure and short suspension visible within the panel, gentle warm light and authentic woven texture, no people, exposed wiring, plugs or text.',
                actionLabel: '分好晚餐准备卡', actionResult: '请大人安排灯光卡放灯光栏，桌面留空和餐垫卡放桌面准备栏。',
                application: '给餐桌上方带编织灯罩的吊灯照片放“灯”字牌', ending: '妈妈参考环境页安排晚餐，真实灯具不需要孩子操作。',
                cloze: '餐桌上方有灯罩、照亮桌面的是吊——',
                homeTip: '家人正常吃晚餐时听孩子自然注意到什么，不先读字、不要求找开关；不攀高碰灯具，电器由成人处理。',
                game: { type: 'sort', title: '灯光与桌面准备', instruction: '请大人安排灯光卡放灯光栏；桌面留空卡和餐垫卡放桌面准备栏。', success: '两类晚餐准备卡放好了。', safety: '只分屏幕示意卡，不碰真电器、不攀高、不拿易碎餐具。', pieces: [{ label: '请大人安排灯光卡', variant: 0, photo: false }, { label: '桌面留空卡', variant: 0, photo: false }, { label: '餐垫卡', variant: 0, photo: false }], targets: [{ label: '灯光安排栏', x: 30, y: 60 }, { label: '桌面准备栏', x: 75, y: 60 }], matches: [0, 1, 1] }
            },
            {
                id: 'home-bed-03', baseId: 'bed', title: '条纹床单的安静午后', partner: '整理午休空间的爷爷', item: '条纹午休床照片页',
                mission: '“请收好三张床的照片，留一页安静午后的记录！”',
                sceneLabel: '铺着蓝白条纹床单的低木床',
                sceneDescription: 'A complete low wooden single bed with a blue-and-white striped sheet, one matching striped pillow and a cream throw draped across the foot. Calm afternoon bedroom light and realistic fabric, full frame and mattress visible, no people, bunk structure or text.',
                actionLabel: '收集午休床照片', actionResult: '条纹床单低木床、上下两层的床和小小的童床照片放进休息页。',
                application: '给铺着条纹床单的低木床照片放“床”字牌', ending: '爷爷把照片页收好，午休空间继续保持安静。',
                cloze: '铺着条纹床单，可以躺下休息的是——',
                homeTip: '正常午休准备时留意孩子自然提到的物品，不要求补句或摆放被褥；不跳床，不攀上下铺。',
                game: { type: 'collect', title: '休息地方照片页', instruction: '把三张床照片收进休息页，照片中的上下铺也只在屏幕看。', success: '三张休息照片放好了。', safety: '只收照片，不跳床、不爬上下铺、不搬床。', pieces: [{ label: '铺着蓝白条纹床单的低木床', variant: 0, photo: true }, { label: '上下两层的床', variant: 1, photo: true }, { label: '小小的童床', variant: 2, photo: true }], targets: [{ label: '休息照片页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'home-shirt-03', baseId: 'shirt', title: '换季箱里的棉背心', partner: '整理衣柜的姨妈', item: '棉背心换季照片页',
                mission: '“请把不同样子的衣服照片收进换季页！”',
                sceneLabel: '打开的软收纳箱里折好的黄色棉背心',
                sceneDescription: 'A complete mustard yellow padded cotton vest neatly folded in an open soft fabric storage box on a low bedroom shelf, with neckline and sleeveless arm openings clearly visible. Authentic quilted fabric texture, no people, logos, labels or text.',
                actionLabel: '收好换季衣服照片', actionResult: '棉背心、夹克和雨衣的三张衣服照片都放进换季页。',
                application: '给软收纳箱里折好的棉背心照片放“衣”字牌', ending: '姨妈收好照片页，衣柜整理只按家里的日常需要进行。',
                cloze: '换季箱里的棉背心，也是一件——服',
                homeTip: '成人正常整理衣柜时，听孩子自己谈到的衣物，不先给共同名称、不要求分类测试；不用攀高取物。',
                game: { type: 'collect', title: '不同衣服同一页', instruction: '把棉背心、夹克和雨衣照片收进同一页，顺序不限。', success: '三张衣服照片收好了。', safety: '只收屏幕照片，不爬柜子、不操作夹手的箱盖。', pieces: [{ label: '打开的软收纳箱里折好的黄色棉背心', variant: 0, photo: true }, { label: '一件夹克', variant: 1, photo: true }, { label: '一件雨衣', variant: 2, photo: true }], targets: [{ label: '换季衣服页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'home-hat-03', baseId: 'hat', title: '帆布帽晾在低托盘', partner: '整理洗净穿戴用品的妈妈', item: '帆布帽清晨观察页',
                mission: '“请展开帽子的照片，留住干净用品的样子！”',
                sceneLabel: '低木托盘上放着的米白棒球帽',
                sceneDescription: 'A complete clean cream canvas baseball cap resting upright on a low wooden tray, its curved front brim, crown and seam stitching clearly visible. Soft home morning light, realistic cotton texture, no people, brand logos, embroidered marks or text.',
                actionLabel: '揭开帽子观察照片', actionResult: '米白帆布棒球帽、毛线帽和另一顶棒球帽照片都展开了。',
                application: '给低木托盘上的米白棒球帽照片放“帽”字牌', ending: '妈妈收好清晨观察页，洗净用品按平常方式放好。',
                cloze: '低托盘上有前帽檐的这顶东西是——',
                homeTip: '日常收好洗净用品时听孩子自然说到什么，不先指帽檐、不要求读字；高处晾晒和取放由成人处理。',
                game: { type: 'reveal', title: '干净帽子观察页', instruction: '自由揭开六块图块，看看完整帽子照片，不需要找到固定细节。', success: '三张帽子照片都展开了。', safety: '只看照片，不攀晾晒架或柜子，不操作夹子。', spots: ['低木托盘上放着的米白棒球帽', '低木托盘上放着的米白棒球帽', '毛线织的帽子', '毛线织的帽子', '前面有帽檐的棒球帽', '前面有帽檐的棒球帽'] }
            },
            {
                id: 'home-bag-03', baseId: 'bag', title: '布手提包准备回低格', partner: '整理玄关布品的奶奶', item: '布包低格准备页',
                mission: '“请把屏幕卡分到包内用品和收纳位置两栏！”',
                sceneLabel: '低玄关格里竖放的浅蓝布手提包',
                sceneDescription: 'A complete pale blue cloth tote bag standing upright in a low open entryway cubby, both fabric handles and the entire rectangular bag body visible. Plain soft cotton with natural seams, dry tidy shelf, no people, labels, addresses or text.',
                actionLabel: '分好布包准备卡', actionResult: '故事书卡和换洗布品卡放包内用品栏，低格位置卡放收纳位置栏。',
                application: '给低玄关格里的浅蓝布手提包照片放“包”字牌', ending: '奶奶保存准备页，真实布包按日常习惯收在低格。',
                cloze: '玄关低格里有提手、可以装东西的布——',
                homeTip: '家人正常收纳布包时，听孩子的自发描述，不布置找包任务、不先读字；不录入个人信息，不攀柜子。',
                game: { type: 'sort', title: '包内用品与收纳位置', instruction: '故事书卡、换洗布品卡放包内用品栏；低格位置卡放收纳位置栏。', success: '用品卡和位置卡分好了。', safety: '只分示意卡，不搬重包、不填写个人资料、不攀高。', pieces: [{ label: '故事书卡', variant: 0, photo: false }, { label: '换洗布品卡', variant: 0, photo: false }, { label: '低格位置卡', variant: 0, photo: false }], targets: [{ label: '包内用品栏', x: 30, y: 60 }, { label: '收纳位置栏', x: 75, y: 60 }], matches: [0, 0, 1] }
            },
            {
                id: 'home-umbrella-03', baseId: 'umbrella', title: '雨具地图停在伞架', partner: '整理玄关的爸爸', item: '弯柄伞位路线页',
                mission: '“请让屏幕雨具路线停在弯柄伞的收纳位置！”',
                sceneLabel: '玄关宽伞架里合拢的红色弯柄雨伞',
                sceneDescription: 'A complete closed red umbrella with a clearly visible curved hook handle standing securely in a wide sturdy umbrella holder in a home entryway. Full handle and folded canopy inside the landscape frame, dry floor and realistic fabric, no people, logos or text.',
                actionLabel: '点亮雨具收纳路线', actionResult: '屏幕路线依次经过玄关地垫、雨具准备标记，停在伞架位置标记。',
                application: '给玄关伞架里的合拢红色弯柄伞照片放“伞”字牌', ending: '爸爸收好路线页，真雨具收纳和开合都由大人照看。',
                cloze: '宽伞架里，弯柄的红色雨具是一把——',
                homeTip: '雨天正常整理玄关时，听孩子自然提到的用品，不先读字、不要求走路线；真伞开合由成人处理，地面保持干燥。',
                game: { type: 'route', title: '屏幕雨具收纳三站', instruction: '依次点玄关地垫、雨具准备和伞架位置三个地图标记，只在屏幕走路线。', success: '屏幕路线停在伞架位置。', safety: '纯屏幕地图，不实际搬伞、不打开真伞，不走湿滑地面。', steps: [{ label: '玄关地垫标记', result: '路线从玄关地垫标记开始。' }, { label: '雨具准备标记', result: '路线来到雨具准备标记。' }, { label: '伞架位置标记', result: '路线停在伞架位置标记。' }], targets: [{ label: '玄关地垫标记', x: 20, y: 75 }, { label: '雨具准备标记', x: 50, y: 55 }, { label: '伞架位置标记', x: 80, y: 35 }] }
            }
        ]
    };
});
