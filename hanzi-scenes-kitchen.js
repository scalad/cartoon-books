(function (root, factory) {
    'use strict';
    const catalog = factory();
    if (typeof module === 'object' && module.exports) module.exports = catalog;
    else (root.HanziSceneCatalogs ||= []).push(catalog);
})(typeof window !== 'undefined' ? window : globalThis, function () {
    'use strict';
    return {
        category: '美味厨房',
        stories: [
            {
                id: 'kitchen-rice-01', baseId: 'rice', title: '密封罐里的新米', partner: '整理储物柜的爸爸', item: '新米储存步骤页',
                mission: '“请把屏幕上的干米储存准备卡按顺序排好！”',
                sceneLabel: '密封玻璃罐里的干大米',
                sceneDescription: 'A clear glass storage jar filled with uncooked dry white rice on a clean kitchen pantry counter, its fitted lid closed and the separate individual grains visible through the glass. Wide photographic framing shows the rice-filled jar body and closed lid, with the topmost lid knob slightly clipped by the upper image edge, natural daylight and authentic glass reflections, no cooked rice, people, labels or text.',
                actionLabel: '排好干米储存卡', actionResult: '干燥容器、请大人装米和盖好保存三张示意卡依次进入储存栏。',
                application: '给密封玻璃罐里的干米照片放“米”字牌', ending: '爸爸收好步骤页，真实干米仍由大人管理。',
                cloze: '玻璃罐里一粒粒、还没煮熟的是大——',
                homeTip: '成人日常整理粮食时，听孩子是否自然谈到干米，不先读字、不让孩子接答案；罐子和散粒由成人保管，不尝干米，备餐前洗手。',
                game: { type: 'sequence', title: '新米储存三步卡', instruction: '只在屏幕上依次放入干燥容器卡、请大人装米卡、盖好保存卡。', success: '三张储存准备卡按顺序放好了。', safety: '这是示意卡，不操作真玻璃罐，不玩或尝干米；成人负责卫生和储存。', pieces: [{ label: '干燥容器卡', variant: 0, photo: false }, { label: '请大人装米卡', variant: 0, photo: false }, { label: '盖好保存卡', variant: 0, photo: false }], targets: [{ label: '储存准备栏', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'kitchen-melon-01', baseId: 'melon', title: '凉爽台面的南瓜', partner: '准备蔬菜的奶奶', item: '南瓜厨房观察页',
                mission: '“请展开照片，看看南瓜和西瓜片的模样！”',
                sceneLabel: '厨房竹垫上完整的橙色南瓜',
                sceneDescription: 'A whole small orange pumpkin with a natural short stem resting on a clean flat bamboo mat on a cool kitchen worktop. Its ribbed skin and complete outline are centered in a landscape photograph with soft window light and realistic vegetable texture, no cut pumpkin, knives, people or text.',
                actionLabel: '展开瓜的照片', actionResult: '竹垫上的橙色南瓜、切好的一片西瓜和一个南瓜三张照片都展开了。',
                application: '给厨房竹垫上的南瓜照片放“瓜”字牌', ending: '奶奶把观察页留下，切配仍在大人的备餐区进行。',
                cloze: '竹垫上的橙色蔬菜叫南——',
                homeTip: '成人自然准备南瓜时，听孩子自己的描述，不先指出共同名称、不要求吃来证明认识；切配和加热由成人处理，洗手并留意食物过敏。',
                game: { type: 'reveal', title: '南瓜与西瓜照片窗', instruction: '自由点开六个图块，观察三张完整照片，不用寻找固定的小细节。', success: '三张瓜的照片都展开了。', safety: '只看屏幕照片；刀具、热食和食物卫生由成人处理，不要求品尝。', spots: ['厨房竹垫上完整的橙色南瓜', '厨房竹垫上完整的橙色南瓜', '切好的一片西瓜', '切好的一片西瓜', '一个南瓜', '一个南瓜'] }
            },
            {
                id: 'kitchen-fruit-01', baseId: 'fruit', title: '沥水篮里的红苹果', partner: '洗水果的妈妈', item: '沥水篮水果照片页',
                mission: '“请把这三张水果照片收进厨房相册！”',
                sceneLabel: '洁净沥水篮里的红苹果',
                sceneDescription: 'Three whole red apples with a few water droplets resting in a clean white perforated colander on a dry kitchen counter, with the sink softly out of focus behind. All apples and the complete colander are clearly visible in a natural daylight landscape photograph, no running water, people, tools or text.',
                actionLabel: '收集水果照片', actionResult: '沥水篮里的红苹果、一个梨和一个橙子的照片一起进入水果相册。',
                application: '给沥水篮里的苹果照片放“果”字牌', ending: '妈妈收好照片页，水果按家里平常的方式准备。',
                cloze: '苹果、梨和橙子都是水——',
                homeTip: '家人正常清洗水果时，听孩子自然提到什么，不先读字、不要求分类或吃水果；成人负责洗净、分切和过敏检查，孩子先洗手。',
                game: { type: 'collect', title: '沥水篮水果相册', instruction: '把苹果、梨、橙子的三张照片放进水果相册，先后顺序不限。', success: '三张水果照片收齐了。', safety: '只移动照片；成人处理水槽、刀具和食物卫生，是否吃水果与游戏无关。', pieces: [{ label: '洁净沥水篮里的红苹果', variant: 0, photo: true }, { label: '一个梨', variant: 1, photo: true }, { label: '一个橙子', variant: 2, photo: true }], targets: [{ label: '水果相册', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'kitchen-bean-01', baseId: 'bean', title: '豌豆荚的备餐小窗', partner: '备餐的外公', item: '带荚与散豆照片页',
                mission: '“请把豆子的照片分到带豆荚和散豆两栏！”',
                sceneLabel: '白碟上打开豆荚里的豌豆',
                sceneDescription: 'Two fresh green pea pods gently opened by an adult beforehand and resting on a clean white saucer, with peas still sitting inside the pods. The entire saucer and pods fit within a wide photorealistic kitchen tabletop frame, crisp natural textures and soft daylight, no hands, loose play pieces, sharp tools or text.',
                actionLabel: '分好豆子照片', actionResult: '豆荚里的豌豆照片放到带豆荚栏，干黄豆和红豆照片放到散豆栏。',
                application: '给白碟上豆荚里的豌豆照片放“豆”字牌', ending: '外公收下照片页，真正的豆子继续留在成人备餐区。',
                cloze: '打开的豆荚里排着几颗豌——',
                homeTip: '成人自然备餐时，记录孩子自己的描述，不先提示颜色或豆的名称；不拿散豆做游戏、不尝生豆，成人处理清洗、熟制和过敏。',
                game: { type: 'sort', title: '豆荚与散豆分栏', instruction: '把豆荚里的豌豆照片放带豆荚栏，把干黄豆和红豆照片放散豆栏。', success: '带豆荚与散豆两栏放好了。', safety: '只分类照片，不接触散豆或生豆；成人负责卫生、熟制和豆类过敏检查。', pieces: [{ label: '白碟上打开豆荚里的豌豆', variant: 0, photo: true }, { label: '干黄豆', variant: 1, photo: true }, { label: '红豆', variant: 2, photo: true }], targets: [{ label: '带豆荚栏', x: 28, y: 60 }, { label: '散豆栏', x: 74, y: 60 }], matches: [0, 1, 1] }
            },
            {
                id: 'kitchen-noodles-01', baseId: 'noodles', title: '蓝碗里的长面条', partner: '安排午餐的爸爸', item: '蓝碗面条介绍页',
                mission: '“请给面条介绍页放好照片、观察卡和安全提醒卡！”',
                sceneLabel: '蓝色瓷碗里已放凉的熟面条',
                sceneDescription: 'A blue ceramic bowl holding plain cooked wheat noodles that have cooled completely on a clean linen-covered kitchen table. Distinct long noodle strands and the entire bowl rim and base are visible in a close landscape photograph with natural window light, no steam, broth splashes, people, cooking equipment or text.',
                actionLabel: '拼好面条介绍页', actionResult: '蓝碗面条照片、长条观察卡和请大人确认温度卡各自放进介绍页的对应栏。',
                application: '给蓝色瓷碗里的面条照片放“面”字牌', ending: '爸爸把介绍页存好，午餐不需要等游戏完成才开始。',
                cloze: '蓝碗里长长的一条条食物是——条',
                homeTip: '正常吃面条时听孩子自然描述，不用面粉或脸的意思提示，不要求读字才开饭；成人确认温度、卫生和小麦过敏，孩子先洗手。',
                game: { type: 'build', title: '蓝碗面条介绍拼贴', instruction: '面条照片放照片栏，长条观察卡放外形栏，请大人确认温度卡放安全栏。', success: '面条介绍页的三栏都放好了。', safety: '只拼屏幕卡片，不煮面、不碰热锅；成人处理温度、卫生和食物过敏。', pieces: [{ label: '蓝色瓷碗里已放凉的熟面条', variant: 0, photo: true }, { label: '长条观察示意卡', variant: 0, photo: false }, { label: '请大人确认温度卡', variant: 0, photo: false }], targets: [{ label: '照片栏', x: 24, y: 45 }, { label: '外形栏', x: 50, y: 65 }, { label: '安全栏', x: 78, y: 45 }], matches: [0, 1, 2] }
            },
            {
                id: 'kitchen-cup-01', baseId: 'cup', title: '餐垫上的不锈钢杯', partner: '准备餐具的妈妈', item: '早餐杯子材料页',
                mission: '“请把不同材料的杯子照片收到同一页！”',
                sceneLabel: '格子餐垫上的空不锈钢杯',
                sceneDescription: 'A complete empty brushed stainless steel drinking cup without a handle standing upright on a clean blue checked placemat at a kitchen breakfast table. Its open rim, interior and stable base are visible with ample crop-safe margins, realistic metal reflections, no people, liquid, logos or text.',
                actionLabel: '收好杯子照片', actionResult: '空不锈钢杯、带柄的陶瓷杯和带柄的搪瓷杯三张照片收进杯子材料页。',
                application: '给格子餐垫上的不锈钢杯照片放“杯”字牌', ending: '妈妈收好材料页，正常饮水不受游戏进度影响。',
                cloze: '餐垫上可以装饮用水的是一只——',
                homeTip: '家人日常摆杯子时，听孩子自然提到的餐具，不先读字、不以认字换饮水；成人确认水温、清洁和容器安全。',
                game: { type: 'collect', title: '早餐杯子材料相册', instruction: '把三张杯子照片收进材料页，顺序不限，不需要端起真杯。', success: '三种杯子的照片收好了。', safety: '只移动屏幕照片；饮水照常提供，水温和餐具清洁由成人确认。', pieces: [{ label: '格子餐垫上的空不锈钢杯', variant: 0, photo: true }, { label: '一只带柄的陶瓷杯', variant: 1, photo: true }, { label: '一只带柄的搪瓷杯', variant: 2, photo: true }], targets: [{ label: '杯子材料页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'kitchen-bowl-01', baseId: 'bowl', title: '洗净小碗的留空位', partner: '整理餐桌的奶奶', item: '小碗摆位设计页',
                mission: '“请用屏幕卡片给洗净的小碗安排一个稳妥的位置！”',
                sceneLabel: '干净餐垫上的空蓝边瓷碗',
                sceneDescription: 'A single empty white porcelain bowl with a narrow blue rim sitting flat on a clean plain cotton placemat on a kitchen table. The wide opening, curved deep interior and complete foot are visible in a three-quarter landscape photograph, realistic glazed ceramic and soft daylight, no people, food, stacked dishes or text.',
                actionLabel: '拼好小碗摆位页', actionResult: '蓝边瓷碗照片、平稳摆放卡和周围留空卡分别进入三个设计栏。',
                application: '给餐垫上的蓝边瓷碗照片放“碗”字牌', ending: '奶奶留好设计页，真正的瓷碗由大人稳妥摆放。',
                cloze: '蓝边餐具里面凹下去，它是一只——',
                homeTip: '正常准备餐具时听孩子自然说到什么，不先指碗、不问字音；餐具洗净，易碎容器和高处收纳由成人处理。',
                game: { type: 'build', title: '小碗摆位设计', instruction: '碗照片放餐具栏，平稳摆放卡放桌面栏，周围留空卡放空间栏。', success: '小碗摆位的三栏设计放好了。', safety: '只拼屏幕卡片，不搬真瓷碗、不攀高；成人负责餐具清洁。', pieces: [{ label: '干净餐垫上的空蓝边瓷碗', variant: 0, photo: true }, { label: '平稳摆放示意卡', variant: 0, photo: false }, { label: '周围留空示意卡', variant: 0, photo: false }], targets: [{ label: '餐具栏', x: 25, y: 45 }, { label: '桌面栏', x: 50, y: 65 }, { label: '空间栏', x: 78, y: 45 }], matches: [0, 1, 2] }
            },
            {
                id: 'kitchen-plate-01', baseId: 'plate', title: '椭圆盘的餐桌位置', partner: '布置餐桌的外婆', item: '圆长盘形状页',
                mission: '“请把盘子照片放到长形栏和材料观察栏！”',
                sceneLabel: '米色餐布上的空椭圆瓷盘',
                sceneDescription: 'A complete empty oval white porcelain serving plate lying on a beige tablecloth at a tidy kitchen dining table. Its visibly elongated oval rim and shallow interior are clearly shown from a high three-quarter angle, wide photographic framing with natural light, no food, people, utensils or text.',
                actionLabel: '分好盘子形状照片', actionResult: '椭圆瓷盘和长方盘照片放到长形栏，金属盘照片放到材料观察栏。',
                application: '给米色餐布上的椭圆瓷盘照片放“盘”字牌', ending: '外婆收下形状页，真实餐具仍按日常需要摆放。',
                cloze: '米色餐布上浅浅的椭圆餐具是一只——',
                homeTip: '日常摆餐具时听孩子自己的描述，不特意摆一排考分类、不先读字；餐具洗净，较重和易碎盘子由成人搬放。',
                game: { type: 'sort', title: '长形与金属盘照片栏', instruction: '椭圆瓷盘和长方盘照片放长形栏，金属盘照片放材料观察栏；不猜金属盘的形状。', success: '长形栏和材料观察栏都放好了。', safety: '只整理照片，不搬真盘；成人负责餐具清洁和易碎物品。', pieces: [{ label: '米色餐布上的空椭圆瓷盘', variant: 0, photo: true }, { label: '一只空长方盘', variant: 1, photo: true }, { label: '一只空金属盘', variant: 2, photo: true }], targets: [{ label: '长形栏', x: 28, y: 60 }, { label: '材料观察栏', x: 74, y: 60 }], matches: [0, 0, 1] }
            },
            {
                id: 'kitchen-spoon-01', baseId: 'spoon', title: '小勺的独立餐垫', partner: '准备餐具的爸爸', item: '小勺餐垫准备页',
                mission: '“请把小勺餐垫的准备卡按顺序放好！”',
                sceneLabel: '绿色餐垫上平放的圆头金属勺',
                sceneDescription: 'A complete round-headed stainless steel eating spoon lying flat on a clean green cotton placemat on a kitchen table. The concave spoon bowl and full smooth handle are clearly visible, natural metal texture and soft side light in landscape framing, no food, people, sharp utensils or text.',
                actionLabel: '排好小勺准备卡', actionResult: '洗手提醒、干净餐垫和请大人摆勺三张卡按顺序放入准备栏。',
                application: '给绿色餐垫上的金属勺照片放“勺”字牌', ending: '爸爸保存准备页，吃饭照常使用合适的餐具。',
                cloze: '绿色餐垫上，带柄、头部凹下去的是——',
                homeTip: '孩子正常用勺吃饭时听自然描述，不先读字、不要求答题才给餐具；先洗手，热食温度由成人确认。',
                game: { type: 'sequence', title: '小勺餐垫三步准备', instruction: '依次把洗手提醒卡、干净餐垫卡、请大人摆勺卡放进准备栏。', success: '小勺餐垫准备卡按顺序放好了。', safety: '仅操作屏幕卡片，不接触热食；成人负责餐具卫生，不以游戏换餐具。', pieces: [{ label: '洗手提醒卡', variant: 0, photo: false }, { label: '干净餐垫卡', variant: 0, photo: false }, { label: '请大人摆勺卡', variant: 0, photo: false }], targets: [{ label: '餐垫准备栏', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'kitchen-pot-01', baseId: 'pot', title: '收纳台上的双耳锅', partner: '收好厨具的妈妈', item: '双耳锅观察页',
                mission: '“请揭开三张锅的照片，看看不同的厨具！”',
                sceneLabel: '收纳台上已冷却的双耳汤锅',
                sceneDescription: 'A complete empty stainless steel stockpot with two short side handles resting on a dry kitchen storage worktop, fully cooled and away from any stove. Its open rim, interior, handles and base are clearly visible in a wide photorealistic frame, no lid in motion, steam, fire, people or text.',
                actionLabel: '揭开凉锅照片', actionResult: '双耳汤锅、台面上冷却的平底锅和台面上冷却的蒸锅三张照片展开了。',
                application: '给收纳台上的双耳汤锅照片放“锅”字牌', ending: '妈妈收好观察页，真正的锅继续由成人收纳。',
                cloze: '收纳台上带着两个短把手的是汤——',
                homeTip: '自然看到厨具图册时听孩子的描述，不先指锅、不带孩子靠近灶台；加热、开盖、清洗和搬锅全由成人处理。',
                game: { type: 'reveal', title: '三种凉锅照片窗', instruction: '自由揭开六块图块，看三张完整的锅照片，不需要操作真锅。', success: '三张凉锅照片都展开了。', safety: '照片中的锅已冷却；真锅、灶台、锅盖和清洗全由成人处理，不靠近热源。', spots: ['收纳台上已冷却的双耳汤锅', '收纳台上已冷却的双耳汤锅', '台面上冷却的平底锅', '台面上冷却的平底锅', '台面上冷却的蒸锅', '台面上冷却的蒸锅'] }
            },
            {
                id: 'kitchen-milk-01', baseId: 'milk', title: '早餐托盘里的牛奶', partner: '准备早餐的外婆', item: '牛奶早餐检查页',
                mission: '“请把屏幕上的牛奶准备提醒排好！”',
                sceneLabel: '早餐托盘上透明小杯里的牛奶',
                sceneDescription: 'A small clear glass cup containing milk, identified here as cow milk, on a clean wooden breakfast tray in a bright kitchen. The entire cup and white liquid surface are visible with soft daylight and realistic reflections, no steam, other white liquids, people, packaging or text.',
                actionLabel: '排好牛奶提醒卡', actionResult: '请大人检查保存、请大人确认过敏和自愿选择三张卡按顺序进入早餐提醒栏。',
                application: '给早餐托盘上杯里的牛奶照片放“奶”字牌', ending: '外婆留下提醒页，早餐按个人需要安排，不必喝牛奶。',
                cloze: '这只透明小杯里装的是牛——',
                homeTip: '成人自然备餐时听孩子的说法，不把所有白色液体都叫奶、不要求品尝；成人检查保存条件、乳品过敏和清洁，不强迫饮用。',
                game: { type: 'sequence', title: '牛奶早餐提醒顺序', instruction: '依次放好请大人检查保存卡、请大人确认过敏卡、自愿选择卡，不填写健康资料。', success: '牛奶早餐提醒卡按顺序放好了。', safety: '只排通用示意卡；成人确认保存、卫生和乳品过敏，不要求喝奶，不收集健康资料。', pieces: [{ label: '请大人检查保存卡', variant: 0, photo: false }, { label: '请大人确认过敏卡', variant: 0, photo: false }, { label: '自愿选择提醒卡', variant: 0, photo: false }], targets: [{ label: '早餐提醒栏', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'kitchen-egg-01', baseId: 'egg', title: '熟鸡蛋的蓝边小碟', partner: '准备餐点的爸爸', item: '带壳剥壳鸡蛋页',
                mission: '“请把鸡蛋照片分到带壳和已剥壳两栏！”',
                sceneLabel: '蓝边小碟上剥壳的凉熟鸡蛋',
                sceneDescription: 'One whole peeled hard-boiled chicken egg, fully cooled, resting on a clean blue-rimmed saucer on a kitchen dining table. The smooth white egg and complete saucer are shown with ample margins in a daylight landscape photograph, no broken shell, raw egg, steam, knives, people or text.',
                actionLabel: '分好鸡蛋照片', actionResult: '凉熟鸡蛋和剥壳的熟鸡蛋照片进入已剥壳栏，褐壳鸡蛋照片进入带壳栏。',
                application: '给蓝边小碟上的熟鸡蛋照片放“蛋”字牌', ending: '爸爸收好照片页，真实鸡蛋的处理留给大人。',
                cloze: '蓝边小碟上的食物是剥好壳的熟鸡——',
                homeTip: '成人自然准备鸡蛋时听孩子的描述，不先给答案、不要求吃蛋；生熟分开、洗手、温度和鸡蛋过敏由成人负责，不让孩子拿生蛋。',
                game: { type: 'sort', title: '鸡蛋有壳与剥壳', instruction: '凉熟鸡蛋和剥壳的熟鸡蛋照片放已剥壳栏，褐壳鸡蛋照片放带壳栏；不根据壳色判断生熟。', success: '带壳与已剥壳两栏都放好了。', safety: '只分照片，不碰生蛋、不剥真蛋；成人处理生熟卫生、温度和蛋类过敏。', pieces: [{ label: '蓝边小碟上剥壳的凉熟鸡蛋', variant: 0, photo: true }, { label: '褐壳鸡蛋', variant: 1, photo: true }, { label: '剥壳的熟鸡蛋', variant: 2, photo: true }], targets: [{ label: '已剥壳栏', x: 28, y: 60 }, { label: '带壳栏', x: 74, y: 60 }], matches: [0, 1, 0] }
            },
            {
                id: 'kitchen-bread-01', baseId: 'bread', title: '餐巾旁的薄烙饼', partner: '准备餐点的奶奶', item: '薄饼点心观察页',
                mission: '“请展开照片，看看烙饼、煎饼和饼干！”',
                sceneLabel: '餐巾旁瓷盘里的凉薄烙饼',
                sceneDescription: 'A single thin round Chinese griddle flatcake, fully cooked and cooled, lying on a plain white plate beside a folded clean napkin on a kitchen table. Its flat profile and natural toasted spots are visible with the entire plate inside a landscape photographic frame, no loaf, buns, steam, cooking tools, people or text.',
                actionLabel: '展开饼的照片', actionResult: '凉薄烙饼、一张煎饼和几块方形饼干三张照片都展开了。',
                application: '给餐巾旁盘里的薄烙饼照片放“饼”字牌', ending: '奶奶保存观察页，点心不作为游戏奖励。',
                cloze: '盘里薄薄圆圆的食物是一张烙——',
                homeTip: '自然看餐点或点心图片时听孩子的话，不先读字、不把西式面包都叫饼；成人处理加热、分切、洗手和小麦等过敏，不以吃完作考查。',
                game: { type: 'reveal', title: '薄饼与饼干照片窗', instruction: '自由点开六块图块，看三张完整照片，不要求吃或制作点心。', success: '三张饼的照片都展开了。', safety: '只观察照片；热食、刀具、卫生和食物过敏由成人处理，食物不是游戏奖励。', spots: ['餐巾旁瓷盘里的凉薄烙饼', '餐巾旁瓷盘里的凉薄烙饼', '一张煎饼', '一张煎饼', '几块方形饼干', '几块方形饼干'] }
            },
            {
                id: 'kitchen-tea-01', baseId: 'tea', title: '大人茶柜里的干茶叶', partner: '整理茶柜的外公', item: '茶叶与茶汤观察页',
                mission: '“请把茶叶和茶汤的照片收到观察页，不需要喝茶！”',
                sceneLabel: '大人茶柜前浅盘里的干茶叶',
                sceneDescription: 'A small shallow porcelain dish of loose dry green tea leaves on a clean adult tea storage counter, with a closed unmarked tea canister behind it. The actual curled dry leaves and complete dish are clear in a close landscape photograph, soft daylight, no hot water, people, cup being offered, labels or text.',
                actionLabel: '收集茶的观察照片', actionResult: '干茶叶、透明壶里泡开的茶叶和透明杯里的茶汤三张照片进入观察页。',
                application: '给茶柜前浅盘里的干茶叶照片放“茶”字牌', ending: '外公收好观察页，真实茶叶和茶具仍放在成人管理的区域。',
                cloze: '浅盘里卷卷的叶子是干——叶',
                homeTip: '自然遇到茶叶图片时听孩子的原话，不提示字音、不要求尝茶；成人保管茶叶、热液和茶具，保持清洁，不鼓励幼儿喝含咖啡因的茶。',
                game: { type: 'collect', title: '茶的照片观察册', instruction: '把三张茶叶或茶汤照片收进观察页，顺序不限，只有图片没有饮用任务。', success: '茶的三张观察照片收好了。', safety: '只收集照片，不触碰或品尝茶叶、茶汤；成人处理热液和茶具，不鼓励幼儿饮茶。', pieces: [{ label: '大人茶柜前浅盘里的干茶叶', variant: 0, photo: true }, { label: '透明壶里泡开的茶叶', variant: 1, photo: true }, { label: '透明杯里的茶汤', variant: 2, photo: true }], targets: [{ label: '茶的观察页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'kitchen-rice-02', baseId: 'rice', title: '浅木托盘的干米近照', partner: '整理粮食照片的妈妈', item: '干米容器介绍页',
                mission: '“请把干米照片和保存提醒放到介绍页的相应位置！”',
                sceneLabel: '浅木托盘里铺着的干大米',
                sceneDescription: 'A thin layer of uncooked dry white rice in a shallow clean wooden kitchen tray photographed from a high three-quarter angle. Individual firm grains and the full raised tray rim are visible with natural wood texture and daylight, centered crop-safe landscape framing, no cooked rice, hands, scooping tools or text.',
                actionLabel: '拼好干米介绍页', actionResult: '干米照片、干燥保存卡和成人保管卡分别放进照片、保存和管理三栏。',
                application: '给浅木托盘里的干米照片放“米”字牌', ending: '妈妈把介绍页收好，真实散粒不留作儿童玩具。',
                cloze: '浅木托盘里还没有煮成饭的是——',
                homeTip: '自然翻看备餐照片时听孩子自己的描述，不先说米、不布置抓米找字；散粒由成人保管，干米不入口，成人负责备餐卫生。',
                game: { type: 'build', title: '干米介绍三栏', instruction: '干米照片放照片栏，干燥保存卡放保存栏，成人保管卡放管理栏。', success: '干米介绍页的三栏都放好了。', safety: '只拼屏幕卡片，不抓取散米、不尝干米；成人处理真实食材和卫生。', pieces: [{ label: '浅木托盘里铺着的干大米', variant: 0, photo: true }, { label: '干燥保存示意卡', variant: 0, photo: false }, { label: '成人保管提醒卡', variant: 0, photo: false }], targets: [{ label: '照片栏', x: 24, y: 45 }, { label: '保存栏', x: 50, y: 65 }, { label: '管理栏', x: 78, y: 45 }], matches: [0, 1, 2] }
            },
            {
                id: 'kitchen-melon-02', baseId: 'melon', title: '西瓜回到厨房篮', partner: '收好食材的爸爸', item: '整瓜瓜片分栏页',
                mission: '“请把完整的瓜和切好的瓜片照片分开！”',
                sceneLabel: '厨房矮篮里的完整西瓜',
                sceneDescription: 'A whole round striped watermelon resting securely in a low wide woven basket on a dry kitchen floor storage mat. The complete green rind and basket fit comfortably within a landscape photograph, natural kitchen daylight and authentic fruit texture, no cut fruit, knives, people or text.',
                actionLabel: '分好整瓜和瓜片照片', actionResult: '篮里的完整西瓜和一个南瓜照片放整瓜栏，切好的一片西瓜照片放瓜片栏。',
                application: '给厨房矮篮里的完整西瓜照片放“瓜”字牌', ending: '爸爸收好分栏页，西瓜的搬放和分切仍由大人完成。',
                cloze: '矮篮里绿皮带条纹的是西——',
                homeTip: '家人正常收好水果时听孩子的描述，不先读字、不要求比较整瓜瓜片；成人搬瓜、洗净和分切，留意过敏，不让孩子操作刀具。',
                game: { type: 'sort', title: '整瓜与瓜片照片栏', instruction: '完整西瓜和南瓜照片放整瓜栏，切好的一片西瓜照片放瓜片栏。', success: '整瓜和瓜片两栏都放好了。', safety: '只分照片，不搬真瓜、不用刀；清洗、分切和过敏检查交给成人。', pieces: [{ label: '厨房矮篮里的完整西瓜', variant: 0, photo: true }, { label: '切好的一片西瓜', variant: 1, photo: true }, { label: '一个南瓜', variant: 2, photo: true }], targets: [{ label: '整瓜栏', x: 28, y: 60 }, { label: '瓜片栏', x: 74, y: 60 }], matches: [0, 1, 0] }
            },
            {
                id: 'kitchen-fruit-02', baseId: 'fruit', title: '厨房篮里的梨', partner: '整理水果的奶奶', item: '梨篮备餐提醒页',
                mission: '“请把水果准备提醒卡依次放进屏幕清单！”',
                sceneLabel: '厨房布篮里的两只完整梨',
                sceneDescription: 'Two whole yellow-green pears with their natural stems resting in a shallow clean fabric-lined basket on a kitchen side counter. Complete pear outlines and the basket are visible with realistic speckled skin and gentle window light, landscape framing with ample margins, no cut fruit, people, knives or text.',
                actionLabel: '排好梨篮提醒卡', actionResult: '洗手提醒、请大人洗净水果和请大人安排分切三张卡依次进入准备栏。',
                application: '给厨房布篮里的梨照片放“果”字牌', ending: '奶奶保存提醒页，水果照常按需要准备，不要求品尝。',
                cloze: '布篮里的梨也是一种水——',
                homeTip: '正常整理水果时听孩子自己说什么，不先给总名称、不要求接句；成人处理洗净、分切和过敏，孩子洗手，是否吃梨与识字无关。',
                game: { type: 'sequence', title: '梨篮备餐提醒三步', instruction: '依次放洗手提醒卡、请大人洗净水果卡、请大人安排分切卡，不实际操作食材。', success: '水果准备提醒卡按顺序放好了。', safety: '只排屏幕卡片，不使用刀具或水槽；成人处理清洁、分切和食物过敏，不要求吃水果。', pieces: [{ label: '洗手提醒卡', variant: 0, photo: false }, { label: '请大人洗净水果卡', variant: 0, photo: false }, { label: '请大人安排分切卡', variant: 0, photo: false }], targets: [{ label: '水果准备栏', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'kitchen-bean-02', baseId: 'bean', title: '透明盒里的红豆', partner: '整理食材的外婆', item: '红豆储物观察页',
                mission: '“请展开豆子的照片，看看容器里装着什么！”',
                sceneLabel: '有盖透明储物盒里的干红豆',
                sceneDescription: 'A closed clear food-storage box containing dry red adzuki beans on a clean kitchen pantry shelf. Individual dark red beans and the complete fitted lid are clearly visible through the transparent sides, centered landscape photograph with realistic textures and daylight, no open scattered beans, people or text.',
                actionLabel: '展开豆子照片', actionResult: '透明盒里的干红豆、干黄豆和红豆三张照片都展开了。',
                application: '给透明储物盒里的红豆照片放“豆”字牌', ending: '外婆留好观察页，散豆继续由成人妥善保管。',
                cloze: '透明盒里一颗颗深红色的食材是红——',
                homeTip: '成人自然整理储物时听孩子自发的话，不用颜色提示答案、不取散豆测试；不尝生豆，成人负责卫生、熟制和豆类过敏。',
                game: { type: 'reveal', title: '红豆储物照片窗', instruction: '自由揭开六块图块，看三张豆子完整照片，不需数豆或拿豆。', success: '三张豆子照片都展开了。', safety: '只看照片，不玩散豆或尝生豆；成人管理真实食材、清洁、熟制和过敏。', spots: ['有盖透明储物盒里的干红豆', '有盖透明储物盒里的干红豆', '干黄豆', '干黄豆', '红豆', '红豆'] }
            },
            {
                id: 'kitchen-noodles-02', baseId: 'noodles', title: '竹垫上的冷面盘', partner: '整理餐点照片的妈妈', item: '面条容器照片页',
                mission: '“请把盘里和锅里的面条照片收进同一页！”',
                sceneLabel: '竹垫上白盘里的凉熟面条',
                sceneDescription: 'A neat loose nest of plain cooked noodles, fully cooled, on a white ceramic plate resting on a flat bamboo placemat at a kitchen table. The long individual strands and complete plate are visible from a high three-quarter angle in natural daylight, no steam, hot equipment, chopsticks in motion, people or text.',
                actionLabel: '收集面条容器照片', actionResult: '竹垫上的凉面条、盘里的面条和锅里的面条照片一起进入面条容器页。',
                application: '给竹垫上白盘里的面条照片放“面”字牌', ending: '妈妈收好容器页，真实锅里的食物由大人处理。',
                cloze: '白盘里长长的食物叫——条',
                homeTip: '正常翻看餐点照片时听孩子的说法，不把面粉或脸的含义加入观察、不要求读字才吃饭；成人处理温度、卫生和小麦过敏。',
                game: { type: 'collect', title: '面条容器相册', instruction: '把三张面条照片收进同一页，顺序不限；锅里的面条也只看照片。', success: '三张面条容器照片收齐了。', safety: '只移动照片，不接触真锅或热食；成人负责食物温度、清洁和过敏，餐食不作奖励。', pieces: [{ label: '竹垫上白盘里的凉熟面条', variant: 0, photo: true }, { label: '盘里的面条', variant: 1, photo: true }, { label: '锅里的面条', variant: 2, photo: true }], targets: [{ label: '面条容器页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'kitchen-cup-02', baseId: 'cup', title: '杯架旁的黄瓷杯', partner: '整理杯架的爸爸', item: '黄瓷杯介绍页',
                mission: '“请把黄瓷杯照片和使用提醒拼成介绍页！”',
                sceneLabel: '杯架旁台面上的空黄瓷杯',
                sceneDescription: 'A complete empty yellow ceramic mug with one curved handle standing on a dry kitchen counter beside a plain wooden cup rack. Its open rim, handle and stable base are fully visible, warm daylight and realistic glazed surface in a wide photograph, no liquid, people, high-shelf access or text.',
                actionLabel: '拼好黄瓷杯介绍页', actionResult: '黄瓷杯照片、请大人确认水温卡和清洁提醒卡分别进入对应栏。',
                application: '给杯架旁的黄瓷杯照片放“杯”字牌', ending: '爸爸存好介绍页，真杯子的清洗和摆放按日常需要进行。',
                cloze: '杯架旁带着一个把手的是瓷——',
                homeTip: '自然整理饮水用品时听孩子的话，不先读字、不把认字作为饮水条件；成人处理瓷器、水温和清洁，不让孩子攀杯架。',
                game: { type: 'build', title: '黄瓷杯介绍拼贴', instruction: '杯照片放照片栏，确认水温卡放温度栏，清洁提醒卡放卫生栏。', success: '黄瓷杯介绍页的三栏放好了。', safety: '仅拼示意卡和照片，不倒热水、不操作杯架；成人处理易碎杯和卫生，饮水照常提供。', pieces: [{ label: '杯架旁台面上的空黄瓷杯', variant: 0, photo: true }, { label: '请大人确认水温卡', variant: 0, photo: false }, { label: '清洁提醒卡', variant: 0, photo: false }], targets: [{ label: '照片栏', x: 24, y: 45 }, { label: '温度栏', x: 50, y: 65 }, { label: '卫生栏', x: 78, y: 45 }], matches: [0, 1, 2] }
            },
            {
                id: 'kitchen-bowl-02', baseId: 'bowl', title: '洁净台面的玻璃碗', partner: '翻看餐具图册的外公', item: '玻璃碗材料观察页',
                mission: '“请展开不同材料的碗照片！”',
                sceneLabel: '洁净台面上的空透明玻璃碗',
                sceneDescription: 'A complete empty transparent glass bowl resting upright on a clean pale kitchen countertop. Its wide round opening, deep curved sides and flat supporting foot are clearly visible through natural glass reflections, crop-safe landscape photography with soft daylight, no food, people, chips or text.',
                actionLabel: '展开碗的材料照片', actionResult: '台面上的透明玻璃碗、空木碗和空玻璃碗三张照片展开了。',
                application: '给洁净台面上的透明玻璃碗照片放“碗”字牌', ending: '外公保存观察页，玻璃餐具不交给孩子搬放。',
                cloze: '台面上透明、里面凹下去的是玻璃——',
                homeTip: '自然看餐具图册时听孩子自己的描述，不先指出材料或读字；玻璃碗和高处取物由成人处理，保持餐具清洁。',
                game: { type: 'reveal', title: '碗的材料照片窗', instruction: '自由点开六块图块，看看三张完整的碗照片，不需敲击或触摸真碗。', success: '三张碗的照片全部展开。', safety: '只看屏幕照片，不搬玻璃碗、不敲餐具；成人负责易碎物和清洁。', spots: ['洁净台面上的空透明玻璃碗', '洁净台面上的空透明玻璃碗', '一只空木碗', '一只空木碗', '一只空玻璃碗', '一只空玻璃碗'] }
            },
            {
                id: 'kitchen-plate-02', baseId: 'plate', title: '长盘的清洁收纳页', partner: '整理餐具的妈妈', item: '长盘收纳准备页',
                mission: '“请给长盘排好清洁和收纳提醒卡！”',
                sceneLabel: '干净台面上的空白色长方盘',
                sceneDescription: 'A complete empty rectangular white ceramic platter with softly rounded corners on a dry clean kitchen worktop. The long shallow interior and raised rim are fully visible in a high-angle landscape photograph, realistic glaze and gentle daylight, no food, people, washing action or text.',
                actionLabel: '排好长盘收纳提醒', actionResult: '请大人洗净、请大人擦干和请大人稳妥收纳三张卡依次进入提醒栏。',
                application: '给台面上的白色长方盘照片放“盘”字牌', ending: '妈妈保存提醒页，真长盘的收纳由大人完成。',
                cloze: '台面上浅浅的长方餐具是一只——',
                homeTip: '成人正常整理餐具时听孩子的自然描述，不先读字、不要求重复洗盘作答；清洗、易碎物和高处收纳全由成人处理。',
                game: { type: 'sequence', title: '长盘收纳三步提醒', instruction: '依次放请大人洗净卡、请大人擦干卡、请大人稳妥收纳卡，只在屏幕上操作。', success: '长盘收纳提醒卡按顺序放好了。', safety: '不洗真盘、不碰清洁剂、不攀柜子；成人处理卫生、重量和易碎餐具。', pieces: [{ label: '请大人洗净卡', variant: 0, photo: false }, { label: '请大人擦干卡', variant: 0, photo: false }, { label: '请大人稳妥收纳卡', variant: 0, photo: false }], targets: [{ label: '长盘收纳提醒栏', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'kitchen-spoon-02', baseId: 'spoon', title: '木勺与瓷勺的抽屉页', partner: '整理餐具照片的奶奶', item: '木瓷勺材料分栏页',
                mission: '“请把木勺和瓷勺的照片分到各自材料栏！”',
                sceneLabel: '洁净餐具托盘里的短柄木勺',
                sceneDescription: 'A complete short-handled wooden eating spoon lying alone in a clean shallow utensil tray on a kitchen counter. The concave rounded head and natural wood-grain handle are visible with ample margins in a landscape photograph, soft daylight, no food, knives, hands or text.',
                actionLabel: '分好勺的材料照片', actionResult: '托盘里的木勺和一把木勺照片进入木质栏，一把瓷勺照片进入瓷质栏。',
                application: '给餐具托盘里的短柄木勺照片放“勺”字牌', ending: '奶奶留好材料页，真实餐具洗净后按日常方式收好。',
                cloze: '托盘里有凹头和短木柄的是木——',
                homeTip: '自然整理餐具照片时听孩子自己的话，不先给材料名称、不要求认字才给勺；成人负责清洁和热食温度，不翻找有刀具的抽屉。',
                game: { type: 'sort', title: '木勺与瓷勺材料栏', instruction: '两张木勺照片放木质栏，瓷勺照片放瓷质栏，不需要打开真实抽屉。', success: '木质和瓷质两栏都放好了。', safety: '只分类照片，不翻真餐具抽屉、不接触热食；成人负责餐具卫生和易碎物。', pieces: [{ label: '洁净餐具托盘里的短柄木勺', variant: 0, photo: true }, { label: '一把木勺', variant: 1, photo: true }, { label: '一把瓷勺', variant: 2, photo: true }], targets: [{ label: '木质栏', x: 28, y: 60 }, { label: '瓷质栏', x: 74, y: 60 }], matches: [0, 0, 1] }
            },
            {
                id: 'kitchen-pot-02', baseId: 'pot', title: '收纳垫上的凉平底锅', partner: '整理厨具照片的爸爸', item: '凉锅收纳设计页',
                mission: '“请给凉锅照片拼好成人收纳提醒！”',
                sceneLabel: '收纳垫上已冷却的空平底锅',
                sceneDescription: 'A complete empty frying pan, fully cooled, resting on a clean thick storage mat on a kitchen utility counter far from any stove. Its shallow round cooking surface and full long handle are visible in a high three-quarter landscape photograph, realistic metal texture, no steam, oil, fire, people or text.',
                actionLabel: '拼好凉锅收纳页', actionResult: '凉平底锅照片、成人清洗卡和成人搬放卡分别进入厨具、卫生和收纳三栏。',
                application: '给收纳垫上的凉平底锅照片放“锅”字牌', ending: '爸爸存好设计页，锅的清洗和搬放仍由成人完成。',
                cloze: '收纳垫上这件浅浅的厨具是平底——',
                homeTip: '自然翻看厨具照片时听孩子自己的说法，不先指出锅、不安排摸锅判断温度；加热、清洗、开盖和搬锅只由成人处理。',
                game: { type: 'build', title: '凉锅成人收纳拼贴', instruction: '平底锅照片放厨具栏，成人清洗卡放卫生栏，成人搬放卡放收纳栏。', success: '凉锅收纳设计的三栏放好了。', safety: '照片中的锅已冷却；仅拼屏幕卡片，不摸真锅、不靠灶台，清洗和搬锅交给成人。', pieces: [{ label: '收纳垫上已冷却的空平底锅', variant: 0, photo: true }, { label: '成人清洗提醒卡', variant: 0, photo: false }, { label: '成人搬放提醒卡', variant: 0, photo: false }], targets: [{ label: '厨具栏', x: 24, y: 45 }, { label: '卫生栏', x: 50, y: 65 }, { label: '收纳栏', x: 78, y: 45 }], matches: [0, 1, 2] }
            },
            {
                id: 'kitchen-milk-02', baseId: 'milk', title: '小瓷壶里的牛奶近照', partner: '翻看饮品照片的妈妈', item: '牛奶容器观察页',
                mission: '“请把装牛奶的三张容器照片收到观察页！”',
                sceneLabel: '白色敞口小瓷壶里的牛奶',
                sceneDescription: 'A small open white ceramic pouring jug containing cow milk on a clean kitchen breakfast counter. The visible milk surface, short spout, curved handle and complete jug body are shown from a high three-quarter angle with natural daylight, no steam, pouring action, people, labels or text.',
                actionLabel: '收好牛奶容器照片', actionResult: '小瓷壶里的牛奶、透明玻璃瓶里的牛奶和敞口小壶里的牛奶照片收进容器页。',
                application: '给敞口小瓷壶里的牛奶照片放“奶”字牌', ending: '妈妈保存容器页，不把看照片变成喝奶任务。',
                cloze: '这只敞口小瓷壶里装的是牛——',
                homeTip: '日常遇到牛奶照片时听孩子自己的话，不先提示颜色、不要求尝出答案；成人检查乳品保存、卫生和过敏，不强迫喝奶。',
                game: { type: 'collect', title: '牛奶容器相册', instruction: '把三张牛奶容器照片放进同一页，顺序不限，不需要倒奶或喝奶。', success: '三张牛奶容器照片收齐了。', safety: '只移动照片，不倒真奶、不碰易碎壶；成人检查保存、清洁和乳品过敏，不要求饮用。', pieces: [{ label: '白色敞口小瓷壶里的牛奶', variant: 0, photo: true }, { label: '透明玻璃瓶里的牛奶', variant: 1, photo: true }, { label: '敞口小壶里的牛奶', variant: 2, photo: true }], targets: [{ label: '牛奶容器页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'kitchen-egg-02', baseId: 'egg', title: '纸托里的褐壳鸡蛋', partner: '整理食材照片的外公', item: '鸡蛋纸托观察页',
                mission: '“请展开鸡蛋照片，看看带壳和剥壳的模样！”',
                sceneLabel: '洁净纸托里的三只褐壳鸡蛋',
                sceneDescription: 'Three intact brown-shelled chicken eggs seated securely in a clean molded paper egg tray on a kitchen prep counter. The eggs and complete tray compartments are visible with realistic shell texture and soft window light in landscape framing, no cracked eggs, raw liquid, hands, cooking tools or text.',
                actionLabel: '展开纸托鸡蛋照片', actionResult: '纸托里的褐壳鸡蛋、褐壳鸡蛋和剥壳的熟鸡蛋三张照片展开了。',
                application: '给纸托里的褐壳鸡蛋照片放“蛋”字牌', ending: '外公留下观察页，真实生蛋和熟蛋仍分开管理。',
                cloze: '纸托里带褐色壳的食材是鸡——',
                homeTip: '自然看备餐图册时听孩子的描述，不先提示壳色或答案、不要求拿蛋；成人负责生熟分开、洗手、温度和鸡蛋过敏，不尝生蛋。',
                game: { type: 'reveal', title: '纸托鸡蛋照片窗', instruction: '自由揭开六块图块，看三张完整照片；不根据蛋壳颜色猜生熟。', success: '三张鸡蛋照片都展开了。', safety: '仅看照片，不拿生蛋、不打蛋；成人处理生熟卫生、温度和蛋类过敏。', spots: ['洁净纸托里的三只褐壳鸡蛋', '洁净纸托里的三只褐壳鸡蛋', '褐壳鸡蛋', '褐壳鸡蛋', '剥壳的熟鸡蛋', '剥壳的熟鸡蛋'] }
            },
            {
                id: 'kitchen-bread-02', baseId: 'bread', title: '方饼干的点心照片盒', partner: '整理点心图片的外婆', item: '薄饼饼干分栏页',
                mission: '“请把整张薄饼和方形饼干照片分开！”',
                sceneLabel: '洁净小碟上的四块方形饼干',
                sceneDescription: 'Four flat square crackers with small regular baking holes resting on a clean shallow ceramic saucer at a kitchen table. The four partly overlapping square biscuits and the entire saucer are visible with realistic baked texture, natural daylight and crop-safe landscape framing, no loaf, buns, packaging, people or text.',
                actionLabel: '分好薄饼和饼干照片', actionResult: '两张方形饼干照片放饼干栏，一张煎饼照片放整张薄饼栏。',
                application: '给小碟上的方形饼干照片放“饼”字牌', ending: '外婆保存分栏页，点心按日常需要安排，不作为完成奖励。',
                cloze: '小碟上方方的小点心是——干',
                homeTip: '自然看点心图片时听孩子自己的话，不先读字、不把面包都称作饼；成人确认食物卫生和小麦等过敏，不要求吃完来答题。',
                game: { type: 'sort', title: '整张薄饼与饼干', instruction: '两张方形饼干照片放饼干栏，煎饼照片放整张薄饼栏，不搬动真食物。', success: '薄饼和饼干两栏都放好了。', safety: '只分类照片；成人处理卫生、分切和食物过敏，不要求品尝，不以点心奖励游戏。', pieces: [{ label: '洁净小碟上的四块方形饼干', variant: 0, photo: true }, { label: '一张煎饼', variant: 1, photo: true }, { label: '几块方形饼干', variant: 2, photo: true }], targets: [{ label: '饼干栏', x: 28, y: 60 }, { label: '整张薄饼栏', x: 74, y: 60 }], matches: [0, 1, 0] }
            },
            {
                id: 'kitchen-tea-02', baseId: 'tea', title: '大人茶角的凉茶汤', partner: '整理茶角照片的奶奶', item: '成人茶具管理提醒页',
                mission: '“请把成人管理茶具的提醒卡按顺序排好，只看不喝！”',
                sceneLabel: '成人茶角透明杯里已放凉的茶汤',
                sceneDescription: 'A clear glass cup containing fully cooled amber tea brewed from tea leaves on a clean adult tea counter, with a closed plain tea canister softly visible behind it. The complete cup and tea surface are centered with realistic reflections and gentle daylight, no steam, people, offered drink, labels or text.',
                actionLabel: '排好成人茶具提醒', actionResult: '只看图片、热液由成人处理和茶具由成人收纳三张卡依次进入提醒栏。',
                application: '给成人茶角透明杯里的茶汤照片放“茶”字牌', ending: '奶奶留好提醒页，真实茶汤不作为幼儿饮品或奖励。',
                cloze: '这只杯里用茶叶泡出的液体叫——汤',
                homeTip: '自然遇到茶汤图片时听孩子的原话，不先读字、不要求闻或尝；成人负责茶具卫生、热液和收纳，不鼓励幼儿喝含咖啡因的茶。',
                game: { type: 'sequence', title: '成人茶具管理三提醒', instruction: '依次放只看图片卡、热液由成人处理卡、茶具由成人收纳卡，没有泡茶或饮茶步骤。', success: '三张成人茶具管理提醒按顺序放好了。', safety: '只有屏幕示意卡；不泡茶、不尝茶，成人处理热液、清洁和易碎茶具，不鼓励幼儿饮茶。', pieces: [{ label: '只看图片提醒卡', variant: 0, photo: false }, { label: '热液由成人处理卡', variant: 0, photo: false }, { label: '茶具由成人收纳卡', variant: 0, photo: false }], targets: [{ label: '成人茶具提醒栏', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'kitchen-rice-03', baseId: 'rice', title: '透明量勺里的干米', partner: '翻看粮食图册的外婆', item: '干米量具照片页',
                mission: '“请把装着干米的三张照片收进图册！”',
                sceneLabel: '洁净台面上透明量勺里的干大米',
                sceneDescription: 'A clear plastic measuring scoop filled with uncooked dry white rice resting flat on a clean kitchen counter, its handle fully visible and no loose grains outside. Individual dry grains, the scoop bowl and full handle fit within crop-safe landscape framing, realistic daylight, no cooked rice, hands, measurement numbers or text.',
                actionLabel: '收好干米容器照片', actionResult: '量勺里的干米、米袋里的干米和量杯里的干米照片一起收进图册。',
                application: '给透明量勺里的干米照片放“米”字牌', ending: '外婆保存图册页，量勺和散米仍由成人收好。',
                cloze: '量勺里一粒粒、尚未煮熟的是大——',
                homeTip: '正常翻看粮食照片时听孩子自然描述，不先读字、不要求量米；散米和量具由成人保管，不玩或尝干米，成人负责备餐卫生。',
                game: { type: 'collect', title: '干米容器照片册', instruction: '把量勺、米袋、量杯里的干米照片收进同一页，顺序不限。', success: '三张干米容器照片收齐了。', safety: '只收集照片，不量真米、不玩散粒、不尝干米；成人负责真实食材和卫生。', pieces: [{ label: '洁净台面上透明量勺里的干大米', variant: 0, photo: true }, { label: '米袋里的干米', variant: 1, photo: true }, { label: '量杯里的干米', variant: 2, photo: true }], targets: [{ label: '干米量具图册页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'kitchen-melon-03', baseId: 'melon', title: '小碟里的西瓜片', partner: '整理水果照片的妈妈', item: '西瓜片观察拼贴页',
                mission: '“请把西瓜片照片和成人备餐提醒放到相应位置！”',
                sceneLabel: '白色小碟里切好的一片西瓜',
                sceneDescription: 'A single triangular watermelon slice prepared by an adult beforehand on a clean white saucer at a kitchen table. Red flesh, pale inner rind and striped green outer rind are all visible with the entire slice and saucer inside a wide natural daylight photograph, no knife, cutting action, people or text.',
                actionLabel: '拼好西瓜片观察页', actionResult: '西瓜片照片、成人分切卡和清洁提醒卡分别放到照片、备餐和卫生三栏。',
                application: '给白色小碟里的西瓜片照片放“瓜”字牌', ending: '妈妈收好拼贴页，真实水果按日常需要处理，不要求品尝。',
                cloze: '小碟里红瓤绿皮的一片水果叫西——',
                homeTip: '家人自然准备西瓜时听孩子自己的话，不先指字、不要求吃来证明认识；刀具只由成人使用，洗手、洗净和过敏检查由成人照看。',
                game: { type: 'build', title: '西瓜片观察三栏', instruction: '西瓜片照片放照片栏，成人分切卡放备餐栏，清洁提醒卡放卫生栏。', success: '西瓜片观察页的三栏都放好了。', safety: '只拼屏幕卡片，不切真瓜；成人处理刀具、清洁、去籽和过敏，不要求品尝。', pieces: [{ label: '白色小碟里切好的一片西瓜', variant: 0, photo: true }, { label: '成人分切提醒卡', variant: 0, photo: false }, { label: '清洁提醒卡', variant: 0, photo: false }], targets: [{ label: '照片栏', x: 24, y: 45 }, { label: '备餐栏', x: 50, y: 65 }, { label: '卫生栏', x: 78, y: 45 }], matches: [0, 1, 2] }
            },
            {
                id: 'kitchen-fruit-03', baseId: 'fruit', title: '橙子的厨房照片夹', partner: '整理食材图片的爸爸', item: '梨橙水果分栏页',
                mission: '“请把梨和橙子的照片放进各自的小栏！”',
                sceneLabel: '厨房木托盘里的两只完整橙子',
                sceneDescription: 'Two whole ripe oranges resting on a clean shallow wooden tray on a kitchen breakfast counter. Their complete round outlines and natural dimpled orange peel are clearly visible with the entire tray in crop-safe landscape framing, soft natural light, no cut citrus, knives, people, stickers or text.',
                actionLabel: '分好梨与橙子照片', actionResult: '木托盘里的橙子和一个橙子照片放橙子栏，一个梨照片放梨栏。',
                application: '给木托盘里的橙子照片放“果”字牌', ending: '爸爸留好分栏页，不用水果的味道来判断是否认字。',
                cloze: '木托盘里的橙子是一种水——',
                homeTip: '自然看食材图片时听孩子的描述，不先给总名称、不要求尝味道；成人洗净、分切并留意食物过敏，是否愿吃与识字无关。',
                game: { type: 'sort', title: '梨与橙子照片夹', instruction: '两张橙子照片放橙子栏，梨照片放梨栏；这里只分照片里的水果名称。', success: '梨和橙子的照片各就各位。', safety: '只分照片，不切水果、不要求品尝；成人负责清洗、刀具和食物过敏检查。', pieces: [{ label: '厨房木托盘里的两只完整橙子', variant: 0, photo: true }, { label: '一个梨', variant: 1, photo: true }, { label: '一个橙子', variant: 2, photo: true }], targets: [{ label: '橙子栏', x: 28, y: 60 }, { label: '梨栏', x: 74, y: 60 }], matches: [0, 1, 0] }
            },
            {
                id: 'kitchen-bean-03', baseId: 'bean', title: '黄豆罐的备餐提醒', partner: '整理豆类食材的奶奶', item: '黄豆成人备餐提醒页',
                mission: '“请把黄豆备餐的成人提醒卡排成一列！”',
                sceneLabel: '厨房储物台上密封罐里的干黄豆',
                sceneDescription: 'A complete closed clear storage jar containing dry yellow soybeans on a clean kitchen pantry counter. The round individual beans, fitted lid and full glass base are visible in natural window light with realistic texture and reflections, no scattered beans, soaking water, hands, cooking equipment or text.',
                actionLabel: '排好黄豆备餐提醒', actionResult: '成人检查食材、成人确认过敏和成人清洗熟制三张卡依次进入提醒栏。',
                application: '给密封罐里的干黄豆照片放“豆”字牌', ending: '奶奶保存提醒页，真实豆子不拿来游戏或生吃。',
                cloze: '密封罐里一颗颗黄色食材是黄——',
                homeTip: '成人正常整理食材时听孩子自己的说法，不先读字、不要求拿散豆作答；成人负责豆类过敏、洗手和充分熟制，不尝生豆。',
                game: { type: 'sequence', title: '黄豆成人备餐三提醒', instruction: '依次放成人检查食材卡、成人确认过敏卡、成人清洗熟制卡，不实际处理豆子，也不填写健康资料。', success: '三张黄豆备餐提醒按顺序放好了。', safety: '仅排通用屏幕卡片，不玩散豆、不尝生豆、不用炉具；成人负责卫生、熟制和豆类过敏。', pieces: [{ label: '成人检查食材卡', variant: 0, photo: false }, { label: '成人确认过敏卡', variant: 0, photo: false }, { label: '成人清洗熟制卡', variant: 0, photo: false }], targets: [{ label: '黄豆备餐提醒栏', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'kitchen-noodles-03', baseId: 'noodles', title: '透明餐盒里的面条', partner: '整理餐盒照片的外婆', item: '面条餐盒观察页',
                mission: '“请展开餐盒、盘子和锅里的面条照片！”',
                sceneLabel: '透明餐盒里已放凉的熟面条',
                sceneDescription: 'An open clear rectangular food container holding plain cooked noodles that have cooled completely on a clean kitchen lunch-preparation table. Distinct long strands and the entire container are visible, the matching lid lies flat beside it within a wide daylight photograph, no steam, hot pot, people, labels or text.',
                actionLabel: '展开餐盒面条照片', actionResult: '透明餐盒里的熟面条、盘里的面条和锅里的面条三张照片都展开了。',
                application: '给透明餐盒里的面条照片放“面”字牌', ending: '外婆收好观察页，真实餐盒的保存和餐食安排由大人负责。',
                cloze: '透明餐盒里长长的一条条食物是——条',
                homeTip: '自然看餐盒照片时听孩子的描述，不先读字、不用面粉或脸来提示；成人确认卫生、保存条件、食物温度和小麦过敏，不要求吃面答题。',
                game: { type: 'reveal', title: '面条餐盒照片窗', instruction: '自由揭开六块图块，观察三张完整面条照片，锅里的面条也只看图片。', success: '三张面条照片都展开了。', safety: '仅看照片，不碰锅或热食；成人负责餐盒卫生、保存、温度和食物过敏，不以游戏换饭。', spots: ['透明餐盒里已放凉的熟面条', '透明餐盒里已放凉的熟面条', '盘里的面条', '盘里的面条', '锅里的面条', '锅里的面条'] }
            },
            {
                id: 'kitchen-cup-03', baseId: 'cup', title: '蓝边搪瓷杯的材料夹', partner: '整理餐具图片的外公', item: '搪瓷陶瓷杯分栏页',
                mission: '“请把搪瓷杯和陶瓷杯照片放到材料栏！”',
                sceneLabel: '早餐台上空蓝边带柄搪瓷杯',
                sceneDescription: 'A complete empty white enamel-coated metal mug with a blue rim and one handle standing on a clean kitchen breakfast counter. The intact enamel surface, open rim, full handle and stable base are visible in natural daylight landscape photography, no chips, liquid, people, logos or text.',
                actionLabel: '分好杯子材料照片', actionResult: '两张带柄搪瓷杯照片放搪瓷栏，带柄陶瓷杯照片放陶瓷栏。',
                application: '给早餐台上的蓝边搪瓷杯照片放“杯”字牌', ending: '外公保存材料夹，饮水和餐具使用照常安排。',
                cloze: '早餐台上蓝边带柄的餐具是一只——',
                homeTip: '正常看餐具图片时听孩子自己的话，不先给材料答案、不以认字换饮水；成人确认杯子完好、清洁和水温，不碰破损餐具。',
                game: { type: 'sort', title: '搪瓷与陶瓷杯材料栏', instruction: '蓝边搪瓷杯和带柄搪瓷杯照片放搪瓷栏，带柄陶瓷杯照片放陶瓷栏，照片名称已标明材料。', success: '搪瓷和陶瓷两栏都放好了。', safety: '只分类照片，不敲击真杯、不倒热液；成人负责完好检查和清洁，饮水照常提供。', pieces: [{ label: '早餐台上空蓝边带柄搪瓷杯', variant: 0, photo: true }, { label: '一只带柄的陶瓷杯', variant: 1, photo: true }, { label: '一只带柄的搪瓷杯', variant: 2, photo: true }], targets: [{ label: '搪瓷栏', x: 28, y: 60 }, { label: '陶瓷栏', x: 74, y: 60 }], matches: [0, 1, 0] }
            },
            {
                id: 'kitchen-bowl-03', baseId: 'bowl', title: '餐布上的小木碗', partner: '准备餐具照片的爸爸', item: '小木碗容器相册页',
                mission: '“请把三张碗的照片收进餐具相册！”',
                sceneLabel: '条纹餐布上的空浅色木碗',
                sceneDescription: 'A complete empty pale wooden food bowl on a clean striped cotton tablecloth at a kitchen dining table. Its wide opening, deep rounded interior, natural wood grain and full base are visible with generous margins in a soft daylight landscape photograph, no food, people, carving tools or text.',
                actionLabel: '收集小碗照片', actionResult: '餐布上的浅色木碗、空木碗和空玻璃碗三张照片收进餐具相册。',
                application: '给条纹餐布上的浅色木碗照片放“碗”字牌', ending: '爸爸把新相册页存好，真餐具继续按日常需要使用。',
                cloze: '条纹餐布上里面凹下去的木餐具是木——',
                homeTip: '自然准备餐具时听孩子自己的描述，不先读字、不要求摸材料作答；餐具洗净，玻璃器皿和高处收纳由成人处理。',
                game: { type: 'collect', title: '小碗容器相册', instruction: '把三张碗的照片放进餐具相册，顺序不限，不需要拿起真碗。', success: '三张碗的照片收齐了。', safety: '只移动照片，不搬玻璃碗、不攀高；成人负责餐具卫生和易碎容器。', pieces: [{ label: '条纹餐布上的空浅色木碗', variant: 0, photo: true }, { label: '一只空木碗', variant: 1, photo: true }, { label: '一只空玻璃碗', variant: 2, photo: true }], targets: [{ label: '小碗餐具相册', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'kitchen-plate-03', baseId: 'plate', title: '金属盘的餐桌计划页', partner: '整理餐桌照片的奶奶', item: '金属盘摆放设计页',
                mission: '“请把金属盘照片和摆放提醒拼进计划页！”',
                sceneLabel: '厨房餐桌上空圆形不锈钢盘',
                sceneDescription: 'A complete empty round stainless steel serving plate resting flat on a clean kitchen dining table. Its shallow interior, slightly raised circular rim and brushed metal surface are visible in high three-quarter landscape framing with realistic daylight reflections, no food, people, heavy stacked dishes or text.',
                actionLabel: '拼好金属盘计划页', actionResult: '金属盘照片、平稳摆放卡和成人搬放卡分别进入餐具、位置和管理三栏。',
                application: '给餐桌上的圆形不锈钢盘照片放“盘”字牌', ending: '奶奶留好设计页，真餐具由成人稳妥安排。',
                cloze: '餐桌上圆圆浅浅的金属餐具是一只——',
                homeTip: '日常整理餐桌时听孩子自然提到什么，不先指盘、不要求搬盘作答；成人处理较重餐具和清洁，不把餐具当敲击玩具。',
                game: { type: 'build', title: '金属盘摆放计划拼贴', instruction: '金属盘照片放餐具栏，平稳摆放卡放位置栏，成人搬放卡放管理栏。', success: '金属盘摆放计划的三栏都放好了。', safety: '仅拼屏幕卡片，不搬真盘、不敲餐具；成人负责重量、稳妥摆放和餐具卫生。', pieces: [{ label: '厨房餐桌上空圆形不锈钢盘', variant: 0, photo: true }, { label: '平稳摆放示意卡', variant: 0, photo: false }, { label: '成人搬放提醒卡', variant: 0, photo: false }], targets: [{ label: '餐具栏', x: 24, y: 45 }, { label: '位置栏', x: 50, y: 65 }, { label: '管理栏', x: 78, y: 45 }], matches: [0, 1, 2] }
            }
        ]
    };
});
