(function (root, factory) {
    'use strict';
    const catalog = factory();
    if (typeof module === 'object' && module.exports) module.exports = catalog;
    else (root.HanziSceneCatalogs ||= []).push(catalog);
})(typeof window !== 'undefined' ? window : globalThis, function () {
    'use strict';
    return {
        category: '身体感官',
        stories: [
            {
                id: 'senses-mouth-01', baseId: 'mouth', title: '书架旁的轻声故事', partner: '准备讲故事的图书管理员', item: '轻声故事准备页',
                mission: '“请在屏幕上排好轻声讲故事的准备卡！”',
                sceneLabel: '书架旁轻声说话的成人嘴部',
                sceneDescription: 'AI-generated photorealistic close-up of the mouth of a fictional anonymous adult quietly speaking beside a library shelf. Relaxed lips are slightly parted, with a plain closed book softly blurred behind them. Frame only the mouth and chin, centered with generous crop-safe margins, natural skin texture and soft indoor light. No complete face, identifiable likeness, children, tongue display, text, logos or watermark.',
                actionLabel: '排好故事准备卡', actionResult: '舒适座位、故事书和请成人轻声讲述三张示意卡按顺序进入准备栏。',
                application: '给书架旁轻声说话的成人嘴部照片放“口”字牌', ending: '管理员收好准备页，故事可以轻声开始，听的人也可以随时休息。',
                cloze: '讲故事时，轻轻开——说话',
                homeTip: '家人平常讲故事时，听孩子自然说到什么，不先做口形、不提示字音、不追问；不要求孩子开口或模仿，安静听也可以。',
                game: { type: 'sequence', title: '轻声故事准备三步', instruction: '依次把舒适座位卡、故事书卡、请成人轻声讲述卡放进屏幕准备栏，不需要真的说话。', success: '轻声故事的三张准备卡按顺序放好了。', safety: '只排列屏幕示意卡，不录音、不要求开口或模仿口形。', pieces: [{ label: '舒适座位卡', variant: 0, photo: false }, { label: '故事书卡', variant: 0, photo: false }, { label: '请成人轻声讲述卡', variant: 0, photo: false }], targets: [{ label: '轻声故事准备栏', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'senses-mouth-02', baseId: 'mouth', title: '小杯旁的喝水间歇', partner: '安排饮水的爸爸', item: '饮水间歇安排页',
                mission: '“请用屏幕图卡安排一个从容的喝水位置！”',
                sceneLabel: '小杯旁自然合拢的成人嘴唇',
                sceneDescription: 'AI-generated photorealistic close-up of the naturally closed relaxed lips of a fictional anonymous adult taking a drinking pause. A small plain ceramic cup stands on the table below and to one side, separate from the mouth. Only the lower face and the cup appear, with the mouth centered and unobscured, ample margins and gentle daylight. No identifiable person, children, hot steam, swallowing demonstration, text or logos.',
                actionLabel: '拼好饮水安排页', actionResult: '座位、小杯和慢慢喝的提醒三张示意卡分别放入对应安排栏。',
                application: '给小杯旁自然合拢的成人嘴唇照片放“口”字牌', ending: '爸爸按日常需要安排温度合适的饮水，不用等认字或完成游戏才喝。',
                cloze: '喝水时，小杯轻轻送到——边',
                homeTip: '日常喝水间歇，留意孩子自发的描述，不先指嘴或读字；不要求演示吞咽，不以识字表现限制饮水，水温由成人确认。',
                game: { type: 'build', title: '从容喝水安排', instruction: '把座位卡放舒适栏，小杯卡放用品栏，慢慢喝提醒卡放节奏栏。', success: '饮水安排页的三栏拼好了。', safety: '只摆屏幕示意卡，不练习吞咽、不强迫喝水；真实水温由成人确认。', pieces: [{ label: '舒适座位卡', variant: 0, photo: false }, { label: '小杯示意卡', variant: 0, photo: false }, { label: '慢慢喝提醒卡', variant: 0, photo: false }], targets: [{ label: '舒适栏', x: 25, y: 60 }, { label: '用品栏', x: 50, y: 40 }, { label: '节奏栏', x: 78, y: 60 }], matches: [0, 1, 2] }
            },
            {
                id: 'senses-mouth-03', baseId: 'mouth', title: '餐巾托盘的饭后准备', partner: '整理餐桌的妈妈', item: '饭后用品分栏页',
                mission: '“请把屏幕卡片分到自己的用品栏和餐桌准备栏！”',
                sceneLabel: '干净餐巾旁放松的成人嘴部',
                sceneDescription: 'AI-generated photorealistic cropped lower-face photograph of a fictional anonymous adult with relaxed closed lips at a dining table. A clean folded cream cloth napkin rests on a plain tray below the mouth, not touching the skin. Mouth and napkin are both clearly visible within wide safe margins, soft daylight, ordinary skin and cotton textures. No full face, children, food in the mouth, forced expression, identity, text or branding.',
                actionLabel: '分好饭后准备卡', actionResult: '自己的餐巾卡和饮水杯卡放用品栏，台面留空卡放餐桌准备栏。',
                application: '给干净餐巾旁放松的成人嘴部照片放“口”字牌', ending: '妈妈收好分栏页，餐后照护按平常需要进行，用品各自使用。',
                cloze: '饭后用自己的餐巾轻轻擦一擦——角',
                homeTip: '正常收餐桌时，听孩子自己提到的用品或身体部位，不先示范擦嘴、不问目标字；尊重孩子的选择，不共用餐巾。',
                game: { type: 'sort', title: '饭后用品与台面', instruction: '自己的餐巾卡、饮水杯卡放自己的用品栏，台面留空卡放餐桌准备栏；都是示意卡。', success: '用品和餐桌准备两栏分好了。', safety: '只分屏幕示意卡，不要求擦嘴展示，不共用真实餐巾，饮水温度由成人确认。', pieces: [{ label: '自己的餐巾卡', variant: 0, photo: false }, { label: '饮水杯卡', variant: 0, photo: false }, { label: '台面留空卡', variant: 0, photo: false }], targets: [{ label: '自己的用品栏', x: 30, y: 60 }, { label: '餐桌准备栏', x: 75, y: 60 }], matches: [0, 0, 1] }
            },
            {
                id: 'senses-mouth-04', baseId: 'mouth', title: '音乐角的一句轻歌', partner: '布置音乐角的成人老师', item: '轻歌嘴部观察页',
                mission: '“请自由揭开照片，看看嘴部的不同样子！”',
                sceneLabel: '音乐角轻声唱歌时微张的成人嘴部',
                sceneDescription: 'AI-generated photorealistic close-up of the mouth of a fictional anonymous adult softly singing in a calm music corner. Lips are gently open in a natural singing posture; a plain acoustic guitar is softly blurred in the background. Only the lower face is shown, no throat or tongue close-up, mouth centered with generous margins and natural skin texture. No named likeness, children, microphone recording, text or logos.',
                actionLabel: '揭开嘴部观察照片', actionResult: '轻歌嘴部、唱歌时张开的嘴和正在吹气的嘴唇三张完整照片都展开了。',
                application: '给音乐角轻声唱歌时微张的成人嘴部照片放“口”字牌', ending: '老师把观察页留在音乐角的小册中，看照片并不需要跟着唱或吹气。',
                cloze: '轻轻唱一句歌，要开——',
                homeTip: '孩子自然听歌或唱歌时，留意自己的表达，不先做指定口形、不要求跟唱或吹气；正常音量即可，不录音。',
                game: { type: 'reveal', title: '轻歌观察页展开', instruction: '自由点开六块遮挡，查看三张完整照片，不用寻找固定的小部位，也不用模仿。', success: '三张嘴部照片都展开了。', safety: '只看屏幕照片，不要求唱歌、吹气或张嘴，不播放突然的大声音。', spots: ['音乐角轻声唱歌时微张的成人嘴部', '音乐角轻声唱歌时微张的成人嘴部', '唱歌时张开的嘴', '唱歌时张开的嘴', '正在吹气的嘴唇', '正在吹气的嘴唇'] }
            },
            {
                id: 'senses-mouth-05', baseId: 'mouth', title: '聊天后的安静一页', partner: '整理观察册的阿姨', item: '聊天间歇嘴部照片页',
                mission: '“请把三张嘴部照片收进安静的观察页！”',
                sceneLabel: '聊天间歇自然闭合的成人嘴唇',
                sceneDescription: 'AI-generated photorealistic close-up of the naturally closed lips of a fictional anonymous adult resting after a conversation, against a softly blurred pale green lounge wall. The lips and chin fill the central area without touching the frame edges, realistic skin detail and diffuse indoor light. No complete face, recognizable likeness, children, deliberate mouth pose, text, identifying marks or watermark.',
                actionLabel: '收好嘴部照片', actionResult: '聊天间歇的嘴唇、唱歌时张开的嘴和正在吹气的嘴唇三张照片收进同一页。',
                application: '给聊天间歇自然闭合的成人嘴唇照片放“口”字牌', ending: '阿姨收好照片页，聊天后的安静也有自己的位置。',
                cloze: '歇一会儿，不必再开——说话',
                homeTip: '家人聊天后自然安静下来时，听孩子是否自发说到休息，不先指嘴、不追问；不把是否愿意开口当作学习结果。',
                game: { type: 'collect', title: '聊天间歇照片册', instruction: '把三张嘴部照片放进同一观察页，先后顺序不限，不需要做照片里的动作。', success: '嘴部照片页收齐了。', safety: '只整理AI照片，不拍摄本人、不录音、不要求口形模仿。', pieces: [{ label: '聊天间歇自然闭合的成人嘴唇', variant: 0, photo: true }, { label: '唱歌时张开的嘴', variant: 1, photo: true }, { label: '正在吹气的嘴唇', variant: 2, photo: true }], targets: [{ label: '嘴部照片观察页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'senses-eye-01', baseId: 'eye', title: '图画书前的双眼', partner: '准备共读的爷爷', item: '图画书眼睛照片页',
                mission: '“请把三张眼睛照片收进共读观察页！”',
                sceneLabel: '看图画书时清楚可见的成人双眼',
                sceneDescription: 'AI-generated photorealistic close-up of both eyes of a fictional anonymous adult looking down naturally at an open picture book. Show only the forehead, eyes and upper nose, with an unlettered illustrated page blurred along the lower edge. Both open eyes remain unobscured and well within crop-safe margins, gentle reflected room light and realistic skin. No full identifiable face, children, bright glare, text, logos or recording equipment.',
                actionLabel: '收集共读眼睛照片', actionResult: '看图画书时的双眼、向左看的眼睛和脸上清楚可见的两只眼睛收进共读观察页。',
                application: '给看图画书时清楚可见的成人双眼照片放“目”字牌', ending: '爷爷收好照片页，共读可以按舒服的节奏继续，也可以停下来。',
                cloze: '照片里这双眼睛，也可以叫双——',
                homeTip: '自然共读时，留意孩子主动关注的画面，不先指眼睛、不提示字音、不追问；不用看屏幕或读书的时长证明理解。',
                game: { type: 'collect', title: '共读眼睛照片页', instruction: '把三张眼睛照片放进观察页，顺序不限；只看AI照片，不辨认人物身份。', success: '共读观察页的三张照片收好了。', safety: '不拍摄本人、不采集面部资料，不要求固定凝视或延长阅读。', pieces: [{ label: '看图画书时清楚可见的成人双眼', variant: 0, photo: true }, { label: '向左看的眼睛', variant: 1, photo: true }, { label: '脸上清楚可见的两只眼睛', variant: 2, photo: true }], targets: [{ label: '共读观察页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'senses-eye-02', baseId: 'eye', title: '柔光书桌的阅读准备', partner: '安排阅读位置的妈妈', item: '柔光阅读安排页',
                mission: '“请在屏幕安排页上留好光线、座位和休息位置！”',
                sceneLabel: '柔和桌灯旁自然看书的成人双眼',
                sceneDescription: 'AI-generated photorealistic upper-face close-up of the open eyes of a fictional anonymous adult naturally reading at a desk. A softly glowing shaded desk lamp and a plain book are blurred at the sides; neither obscures the eyes. Diffuse comfortable room light, ordinary skin texture, ample margins around both eyes. No full identifiable portrait, children, direct light beam at the eyes, exposed wiring, letters, logos or watermark.',
                actionLabel: '拼好阅读安排页', actionResult: '柔和光线、舒适座位和随时休息三张示意卡进入对应安排栏。',
                application: '给柔和桌灯旁自然看书的成人双眼照片放“目”字牌', ending: '妈妈收好安排页，真实照明由成人处理，阅读不必一直进行。',
                cloze: '看书时，双——不必凑得太近',
                homeTip: '家人日常读书时，听孩子自然提到的感受，不先指眼睛、不要求读字或盯看；成人安排舒适光线，孩子想休息就休息。',
                game: { type: 'build', title: '柔光阅读三栏', instruction: '把柔和光线卡放照明栏，舒适座位卡放座位栏，随时休息卡放休息栏。', success: '阅读安排页的三栏拼好了。', safety: '只摆屏幕示意卡，电灯由成人处理；不要求盯光源、不进行视力测试。', pieces: [{ label: '柔和光线卡', variant: 0, photo: false }, { label: '舒适座位卡', variant: 0, photo: false }, { label: '随时休息卡', variant: 0, photo: false }], targets: [{ label: '照明栏', x: 25, y: 40 }, { label: '座位栏', x: 50, y: 65 }, { label: '休息栏', x: 78, y: 40 }], matches: [0, 1, 2] }
            },
            {
                id: 'senses-eye-03', baseId: 'eye', title: '漫射光里的眼睛近照', partner: '整理身体图册的成人老师', item: '柔光眼睛观察页',
                mission: '“请自由揭开三张眼睛照片，看看完整画面！”',
                sceneLabel: '漫射光下一只自然睁开的成人眼睛',
                sceneDescription: 'AI-generated photorealistic macro-style photograph of one naturally open eye of a fictional anonymous adult in diffuse daylight. Show the complete eyelids, iris and a small surrounding area of ordinary skin, with a soft broad room-light reflection rather than a bright point source. The entire eye is centered with generous margins. No identifiable face, children, medical instruments, flash beam, injury, text or exaggerated eye pose.',
                actionLabel: '揭开柔光眼睛照片', actionResult: '漫射光下的眼睛、向左看的眼睛和脸上清楚可见的两只眼睛三张照片都展开了。',
                application: '给漫射光下一只自然睁开的成人眼睛照片放“目”字牌', ending: '老师收好观察页，近照只是看图，不用寻找某个细小反光点。',
                cloze: '这课把眼睛用一个字表示，就是“——”',
                homeTip: '孩子自然翻看身体图册时，接住自己的描述，不先指出眼睛或细小特征、不问答案；不照强光、不凑近检查孩子的眼睛。',
                game: { type: 'reveal', title: '柔光眼睛照片展开', instruction: '自由点开六块遮挡，查看三张完整照片，不寻找指定的小反光点。', success: '三张眼睛照片全部展开了。', safety: '只观察AI照片，不检查本人眼睛、不用闪光灯或强光照眼、不测试视力。', spots: ['漫射光下一只自然睁开的成人眼睛', '漫射光下一只自然睁开的成人眼睛', '向左看的眼睛', '向左看的眼睛', '脸上清楚可见的两只眼睛', '脸上清楚可见的两只眼睛'] }
            },
            {
                id: 'senses-eye-04', baseId: 'eye', title: '窗外绿意的休息计划', partner: '整理阅读角的爸爸', item: '阅读间歇计划页',
                mission: '“请把屏幕上的阅读间歇卡按顺序排好！”',
                sceneLabel: '隔着关闭的窗自然望向绿植的成人双眼',
                sceneDescription: 'AI-generated photorealistic close-up of both eyes of a fictional anonymous adult naturally looking toward greenery through a closed window from an ordinary indoor seat. Crop to the upper face; a closed window frame and diffuse green foliage are softly blurred to one side. Both eyes are clearly visible with soft light and wide crop-safe margins. No direct sun, open window, identifiable likeness, children, text or posed eye exercise.',
                actionLabel: '排好阅读间歇卡', actionResult: '放下阅读材料、保持舒服座位和按需要休息三张示意卡按顺序放好了。',
                application: '给隔着关闭的窗自然望向绿植的成人双眼照片放“目”字牌', ending: '爸爸把计划页放好，休息可以看向舒服的地方，也可以闭眼或离开屏幕。',
                cloze: '望向窗外的绿意，双——可以歇一歇',
                homeTip: '自然阅读间歇，听孩子自己的感受，不先要求看远处或闭眼、不追问字音；不操作窗户、不直视太阳，休息方式由孩子选择。',
                game: { type: 'sequence', title: '阅读间歇三张卡', instruction: '依次放好放下阅读材料卡、舒服座位卡、按需要休息卡，只是在屏幕上安排计划。', success: '阅读间歇计划卡按顺序排好了。', safety: '不要求眼睛做动作，不计时、不测试；不靠近或操作窗户，不直视太阳。', pieces: [{ label: '放下阅读材料卡', variant: 0, photo: false }, { label: '舒服座位卡', variant: 0, photo: false }, { label: '按需要休息卡', variant: 0, photo: false }], targets: [{ label: '阅读间歇计划栏', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'senses-eye-05', baseId: 'eye', title: '画架旁的一眼与双眼', partner: '整理写实图卡的美术老师', item: '眼睛取景分栏页',
                mission: '“请按照片卡约定的名称，把眼睛照片整理到两栏！”',
                sceneLabel: '画架旁近照中清楚可见的一只成人眼睛',
                sceneDescription: 'AI-generated photorealistic tight crop showing exactly one complete naturally open eye of a fictional anonymous adult, with a plain wooden easel softly blurred behind the surrounding temple area. The other eye is entirely outside this photographic crop, not covered or closed. Full eyelids visible with generous margins, gentle studio light and ordinary skin texture. No complete identity-bearing portrait, children, letters, logos or medical examination.',
                actionLabel: '分好眼睛取景照片', actionResult: '画架旁的一只眼睛和向左看的眼睛放其他眼睛照片页，两只眼睛的照片放双眼取景页。',
                application: '给画架旁近照中清楚可见的一只成人眼睛照片放“目”字牌', ending: '老师收好眼睛照片页，照片记录不同取景，不用判断视力。',
                cloze: '画人物时，两只眼睛也可以叫双——',
                homeTip: '孩子自由画人物时，听自己的描述，不指出画中缺少什么、不要求画两只眼睛或读字；不拿孩子的画或眼睛作测试。',
                game: { type: 'sort', title: '双眼与其他眼睛照片页', instruction: '画架旁一只眼睛、向左看的眼睛放其他眼睛照片页；脸上两只眼睛放双眼取景页，只按照片卡约定的名称分。', success: '两种取景照片分好了。', safety: '只分AI照片，不遮住本人眼睛、不检查视力、不采集面部资料。', pieces: [{ label: '画架旁近照中清楚可见的一只成人眼睛', variant: 0, photo: true }, { label: '向左看的眼睛', variant: 1, photo: true }, { label: '脸上清楚可见的两只眼睛', variant: 2, photo: true }], targets: [{ label: '其他眼睛照片页', x: 30, y: 60 }, { label: '双眼取景页', x: 75, y: 60 }], matches: [0, 0, 1] }
            },
            {
                id: 'senses-ear-01', baseId: 'ear', title: '弦乐角的听赏路线', partner: '安排听赏位置的成人老师', item: '弦乐听赏屏幕地图',
                mission: '“请在屏幕地图上找到安静的听赏座位！”',
                sceneLabel: '弦乐角旁清楚可见的成人耳朵',
                sceneDescription: 'AI-generated photorealistic side close-up of the complete external ear of a fictional anonymous adult seated in a quiet indoor string-music corner. A wooden violin resting on a distant stand is softly blurred in the background, not near the ear. Crop excludes the complete face, shows ordinary skin and a small area of hair, with generous margins around the ear. No children, identifiable likeness, loudspeaker at the ear, ear instruments, text or branding.',
                actionLabel: '点亮听赏座位路线', actionResult: '屏幕路线依次经过入口、乐器展示旁的通道，停在听赏座位标记。',
                application: '给弦乐角旁清楚可见的成人耳朵照片放“耳”字牌', ending: '老师收好地图，真实听赏由成人安排，孩子也可以选择不听或离开。',
                cloze: '听弦乐时，用到的是——朵',
                homeTip: '家中自然听音乐时，留意孩子自己的反应，不问用什么听、不提示字音；保持舒适音量，不突然制造声音或要求靠近乐器。',
                game: { type: 'route', title: '弦乐角三站地图', instruction: '只在屏幕上依次点入口、乐器展示旁通道和听赏座位，终点是座位，不用真的走或听声音。', success: '屏幕路线到达听赏座位。', safety: '只走屏幕地图，不靠近演奏中的乐器、不播放测试声音；真实活动由成人陪伴。', steps: [{ label: '入口标记', result: '屏幕路线从入口开始。' }, { label: '展示旁通道标记', result: '屏幕路线经过乐器展示旁的通道。' }, { label: '听赏座位标记', result: '屏幕路线停在听赏座位。' }], targets: [{ label: '入口标记', x: 20, y: 75 }, { label: '展示旁通道标记', x: 50, y: 55 }, { label: '听赏座位标记', x: 80, y: 30 }] }
            },
            {
                id: 'senses-ear-02', baseId: 'ear', title: '共读座位旁的耳朵', partner: '准备家庭共读的奶奶', item: '共读耳朵照片页',
                mission: '“请把三张耳朵照片收进共读图册！”',
                sceneLabel: '共读座位旁清楚可见的成人耳朵',
                sceneDescription: 'AI-generated photorealistic close-up of a fictional anonymous adult external ear beside a comfortable indoor reading seat. An open unlettered picture book rests on a small table in the soft background. The complete ear is unobstructed, centered with wide crop-safe margins, natural hair and skin detail in warm diffuse room light. Exclude the full face and any other person. No children, identifiable likeness, ear devices, text or logos.',
                actionLabel: '收集共读耳朵照片', actionResult: '共读座位旁的耳朵、人的右耳和正在听人说话的耳朵三张照片收进同一页。',
                application: '给共读座位旁清楚可见的成人耳朵照片放“耳”字牌', ending: '奶奶把照片页放进图册，故事照常讲，不需要回答听觉问题。',
                cloze: '共读时，声音可以传到——边',
                homeTip: '日常共读时，听孩子自然提到什么，不问用哪个部位听、不先指耳朵；不遮耳、不测听力，也不要求孩子作回应。',
                game: { type: 'collect', title: '共读耳朵照片册', instruction: '把三张耳朵照片放进同一页，先后不限；不需要区分本人左右耳。', success: '共读耳朵照片页收齐了。', safety: '只整理AI照片，不拍摄本人、不摸或遮耳、不进行听力测试。', pieces: [{ label: '共读座位旁清楚可见的成人耳朵', variant: 0, photo: true }, { label: '人的右耳', variant: 1, photo: true }, { label: '正在听人说话的耳朵', variant: 2, photo: true }], targets: [{ label: '共读耳朵照片页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'senses-ear-03', baseId: 'ear', title: '软帘旁的安静角', partner: '布置休息角的爸爸', item: '安静角准备分栏页',
                mission: '“请把屏幕准备卡分到环境栏和成人安排栏！”',
                sceneLabel: '软帘旁安静休息的成人耳朵近照',
                sceneDescription: 'AI-generated photorealistic close-up of the complete external ear of a fictional anonymous adult resting beside a soft beige curtain in a quiet room. A padded chair edge is visible far behind the ear, with gentle diffuse indoor light and natural skin texture. Crop excludes the full face, ear unobstructed with ample margins. No children, identifying features, earplugs, headphones, inserted objects, text, logos or watermark.',
                actionLabel: '分好安静角准备卡', actionResult: '软座位卡和软帘卡放环境栏，请成人安排音量卡放成人安排栏。',
                application: '给软帘旁安静休息的成人耳朵近照放“耳”字牌', ending: '爸爸收好分栏页，休息角保留安静，不用发声检查谁听见了。',
                cloze: '安静休息，不必把声音凑到——边',
                homeTip: '家里自然安静下来时，听孩子自己的感受，不先指耳、不问听见什么；不用突然声音验证反应，不把物品放进耳朵。',
                game: { type: 'sort', title: '安静角环境与安排', instruction: '软座位卡、软帘卡放环境栏；请成人安排音量卡放成人安排栏，不操作真实物品。', success: '安静角准备卡分好了。', safety: '只分示意卡，不插耳塞、不碰耳道、不制造或测试声音；音量由成人安排。', pieces: [{ label: '软座位卡', variant: 0, photo: false }, { label: '软帘卡', variant: 0, photo: false }, { label: '请成人安排音量卡', variant: 0, photo: false }], targets: [{ label: '环境栏', x: 30, y: 60 }, { label: '成人安排栏', x: 75, y: 60 }], matches: [0, 0, 1] }
            },
            {
                id: 'senses-ear-04', baseId: 'ear', title: '绿墙旁的耳朵观察页', partner: '整理身体照片的阿姨', item: '绿墙耳朵观察页',
                mission: '“请自由揭开耳朵照片，看看三张完整画面！”',
                sceneLabel: '浅绿墙旁清楚可见的成人外耳',
                sceneDescription: 'AI-generated photorealistic profile-detail photograph of a complete fictional anonymous adult external ear against a softly blurred pale green wall. Show the ordinary outer ear and adjacent hair only, natural skin texture and soft lateral room light, all ear edges within generous crop-safe margins. Do not show an identifiable full face, children, inner-ear examination, devices, jewelry, injuries, text or logos.',
                actionLabel: '揭开耳朵观察页', actionResult: '浅绿墙旁的外耳、人的右耳和正在听人说话的耳朵三张照片都展开了。',
                application: '给浅绿墙旁清楚可见的成人外耳照片放“耳”字牌', ending: '阿姨收好观察页，整张照片都可以看，不用找耳道里的小地方。',
                cloze: '这张近照展示的是身体的——朵',
                homeTip: '自然翻到身体图册时，听孩子自发说到的地方，不先圈耳朵或追问字音；不用棉签、灯光或工具检查耳道。',
                game: { type: 'reveal', title: '绿墙耳朵照片展开', instruction: '自由揭开六块遮挡，看看三张完整照片，不寻找耳道或固定细节。', success: '三张耳朵照片全部展开了。', safety: '只看AI照片，不摸本人耳朵、不插入任何物品、不测试听觉。', spots: ['浅绿墙旁清楚可见的成人外耳', '浅绿墙旁清楚可见的成人外耳', '人的右耳', '人的右耳', '正在听人说话的耳朵', '正在听人说话的耳朵'] }
            },
            {
                id: 'senses-ear-05', baseId: 'ear', title: '客厅音乐的从容准备', partner: '安排客厅音乐的妈妈', item: '客厅听赏准备页',
                mission: '“请在屏幕上排好客厅听赏的准备卡！”',
                sceneLabel: '客厅远离音箱座位上的成人耳朵',
                sceneDescription: 'AI-generated photorealistic close-up of a complete fictional anonymous adult external ear from the side at a living-room seat. A small plain speaker on a distant shelf is softly blurred far behind, clearly not beside the ear. Ordinary skin and hair textures, calm diffuse light and generous framing margins; exclude the full face. No children, recognizable likeness, earphones, inserted objects, volume display, text or branding.',
                actionLabel: '排好客厅听赏卡', actionResult: '选择舒适座位、请成人安排音量和随时暂停三张示意卡按顺序进入准备栏。',
                application: '给客厅远离音箱座位上的成人耳朵照片放“耳”字牌', ending: '妈妈参考准备页安排正常音量，孩子不想听时可以暂停。',
                cloze: '音箱不必靠近——朵，舒服地听就好',
                homeTip: '家中正常播放音乐时，留意孩子自发的感受，不先问是否听见、不提示字音；不增大音量测试，孩子可以拒绝或暂停。',
                game: { type: 'sequence', title: '客厅听赏三张卡', instruction: '依次放舒适座位卡、请成人安排音量卡、随时暂停卡，只排屏幕准备卡，不需要播放音乐。', success: '客厅听赏准备卡按顺序排好了。', safety: '不播放测试音、不使用耳机、不录音；真实音量由成人安排，随时可以停止。', pieces: [{ label: '舒适座位卡', variant: 0, photo: false }, { label: '请成人安排音量卡', variant: 0, photo: false }, { label: '随时暂停卡', variant: 0, photo: false }], targets: [{ label: '客厅听赏准备栏', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'senses-hand-01', baseId: 'hand', title: '软布折叠的小桌面', partner: '整理干净衣物的奶奶', item: '折布桌面准备页',
                mission: '“请用屏幕示意卡拼好折布的准备页！”',
                sceneLabel: '木桌上轻轻折叠干净软布的成人双手',
                sceneDescription: 'AI-generated photorealistic close-up of the hands of a fictional anonymous adult gently folding a large clean cotton cloth on a low wooden table. Both complete hands and the cloth are visible, natural fingers in a credible relaxed pose, cotton weave and wood grain in soft daylight, generous crop-safe margins. No identifiable face, children, personal jewelry, tattoos, sharp tools, text or branding.',
                actionLabel: '拼好折布准备页', actionResult: '平整桌面、干净软布和收纳篮三张示意卡分别放进桌面、材料和收纳栏。',
                application: '给木桌上轻轻折叠干净软布的成人双手照片放“手”字牌', ending: '奶奶收好准备页，真实衣物照常整理，不用孩子展示折叠动作。',
                cloze: '整理软布时，可以用双——轻轻折叠',
                homeTip: '家人正常叠衣物时，听孩子自己的描述，不先要求伸手、模仿或读字；参与与否由孩子选择，不用动作完成情况评价识字。',
                game: { type: 'build', title: '折布桌面三栏', instruction: '平整桌面卡放桌面栏，干净软布卡放材料栏，收纳篮卡放收纳栏。', success: '折布准备页的三栏拼好了。', safety: '只摆屏幕示意卡，不要求本人展示手部动作，不搬桌子或重衣物。', pieces: [{ label: '平整桌面卡', variant: 0, photo: false }, { label: '干净软布卡', variant: 0, photo: false }, { label: '收纳篮卡', variant: 0, photo: false }], targets: [{ label: '桌面栏', x: 25, y: 60 }, { label: '材料栏', x: 50, y: 40 }, { label: '收纳栏', x: 78, y: 60 }], matches: [0, 1, 2] }
            },
            {
                id: 'senses-hand-02', baseId: 'hand', title: '图画书的轻轻翻页', partner: '整理阅读图册的爷爷', item: '翻页手部照片页',
                mission: '“请把三张手部照片收进阅读图册！”',
                sceneLabel: '轻轻翻动图画书书页的成人手',
                sceneDescription: 'AI-generated photorealistic close-up of one complete fictional anonymous adult hand gently turning a thick page of an open picture book on a wooden table. Fingers and wrist are naturally positioned and fully within safe margins, unlettered illustrations on the page, tactile paper texture and soft daylight. No face, children, identity-bearing jewelry, tattoos, sharp objects, written words or branding.',
                actionLabel: '收好翻页手部照片', actionResult: '翻书页的手、握着铅笔的手和正在挥动的手三张照片收进同一页。',
                application: '给轻轻翻动图画书书页的成人手照片放“手”字牌', ending: '爷爷收好照片页，翻页和挥手都是手可以做的不同动作。',
                cloze: '轻轻翻过一页书，用的是——',
                homeTip: '孩子自由看书时，听自发的描述，不先指手、不指定翻页动作、不追问；不要以翻页快慢或是否挥手判断识字。',
                game: { type: 'collect', title: '阅读手部动作照片', instruction: '把三张手部照片放到同一页，顺序不限，不用做照片里的动作。', success: '手部动作照片页收齐了。', safety: '只整理AI照片，不拍摄本人、不要求握笔、挥手或翻页展示。', pieces: [{ label: '轻轻翻动图画书书页的成人手', variant: 0, photo: true }, { label: '握着铅笔的手', variant: 1, photo: true }, { label: '正在挥动的手', variant: 2, photo: true }], targets: [{ label: '阅读手部照片页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'senses-hand-03', baseId: 'hand', title: '大块软泥的创作页', partner: '整理创作图卡的美术老师', item: '手部用途分栏页',
                mission: '“请把手部照片分到使用材料栏和打招呼栏！”',
                sceneLabel: '桌面上轻压大块软泥的成人手',
                sceneDescription: 'AI-generated photorealistic close-up of one complete fictional anonymous adult hand gently pressing a large single lump of soft modeling clay on a clean work mat. Natural fingers and palm, substantial clay piece, authentic matte material and soft studio light, hand and clay fully inside crop-safe margins. No face, children, small loose beads, cutting tools, identifiable jewelry, tattoos, text or logos.',
                actionLabel: '分好手部用途照片', actionResult: '轻压软泥的手和握着铅笔的手放使用材料栏，正在挥动的手放打招呼栏。',
                application: '给桌面上轻压大块软泥的成人手照片放“手”字牌', ending: '老师收好分栏页，创作与打招呼都能用到手，不需要跟着示范。',
                cloze: '大块软泥可以用——轻轻压一压',
                homeTip: '孩子自然用适龄材料创作时，听自己的描述，不指定手势、不要求配字或模仿；成人陪伴，材料不入口，不接触切割工具。',
                game: { type: 'sort', title: '材料与招呼照片栏', instruction: '轻压软泥的手、握铅笔的手放使用材料栏；挥动的手放打招呼栏，只分照片。', success: '两种手部用途的照片分好了。', safety: '只分AI照片，不要求实际按压或握笔，真实创作由成人陪伴，材料不入口。', pieces: [{ label: '桌面上轻压大块软泥的成人手', variant: 0, photo: true }, { label: '握着铅笔的手', variant: 1, photo: true }, { label: '正在挥动的手', variant: 2, photo: true }], targets: [{ label: '使用材料栏', x: 30, y: 60 }, { label: '打招呼栏', x: 75, y: 60 }], matches: [0, 0, 1] }
            },
            {
                id: 'senses-hand-04', baseId: 'hand', title: '洗手角的干净手巾', partner: '照看洗手用品的爸爸', item: '洗手角照护准备页',
                mission: '“请在屏幕上排好洗手角的三张照护卡！”',
                sceneLabel: '用干净手巾轻轻擦干的成人双手',
                sceneDescription: 'AI-generated photorealistic close-up of fictional anonymous adult hands gently drying with a clean blue cotton hand towel beside a washbasin. Both hands remain clearly visible around the soft towel, fingers naturally placed, basin tap turned off, dry surrounding floor outside the frame. Soft indoor light and realistic terry texture, generous margins. No face, children, identity markers, chemical bottles, hot water, text or branding.',
                actionLabel: '排好洗手照护卡', actionResult: '请成人安排水温与用品、正常清洁和用自己的手巾擦干三张示意卡按顺序放好了。',
                application: '给用干净手巾轻轻擦干的成人双手照片放“手”字牌', ending: '爸爸收好照护页，日常洗手按需要进行，孩子不必另做一次展示。',
                cloze: '清洁以后，用自己的手巾擦干双——',
                homeTip: '日常洗手时，听孩子自己提到的动作或用品，不先读字、不要求再洗一次作答；成人确认水温和防滑，使用自己的干净手巾。',
                game: { type: 'sequence', title: '洗手角照护三卡', instruction: '依次放请成人安排水温与用品卡、正常清洁卡、自己的手巾擦干卡；只是屏幕照护计划。', success: '洗手照护卡按顺序排好了。', safety: '不操作真实水龙头、不安排重复洗手测试；水温和防滑由成人照看，不共用手巾。', pieces: [{ label: '请成人安排水温与用品卡', variant: 0, photo: false }, { label: '正常清洁卡', variant: 0, photo: false }, { label: '自己的手巾擦干卡', variant: 0, photo: false }], targets: [{ label: '洗手照护准备栏', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'senses-hand-05', baseId: 'hand', title: '大块拼图的桌边近照', partner: '整理游戏照片的阿姨', item: '拼图手部观察页',
                mission: '“请自由揭开三张手部照片！”',
                sceneLabel: '平桌上摆放大块拼图的成人手',
                sceneDescription: 'AI-generated photorealistic close-up of a complete fictional anonymous adult hand placing one large cardboard jigsaw piece on a flat table next to a few other oversized pieces. Fingers naturally hold the edge, all hand and main piece inside generous margins, real cardboard texture and soft daylight. No face, children, miniature parts, sharp tools, identifiable jewelry, tattoos, letters, branding or watermark.',
                actionLabel: '揭开拼图手部照片', actionResult: '摆放大块拼图的手、握着铅笔的手和正在挥动的手三张照片都展开了。',
                application: '给平桌上摆放大块拼图的成人手照片放“手”字牌', ending: '阿姨收好观察页，游戏照片不需要孩子重做动作来证明认识。',
                cloze: '桌上的大块拼图，可以用——摆放',
                homeTip: '孩子自然玩适龄拼图时，听自发的描述，不先指手、不要求快拼或读字；成人陪伴，拼图不入口，不把完成速度当学习结果。',
                game: { type: 'reveal', title: '拼图手部照片展开', instruction: '自由点开六块遮挡，查看三张完整照片，不寻找某个手指或拼图小角。', success: '三张手部照片全部展开了。', safety: '只看AI照片，不要求本人动作展示、不接触小零件或尖锐工具。', spots: ['平桌上摆放大块拼图的成人手', '平桌上摆放大块拼图的成人手', '握着铅笔的手', '握着铅笔的手', '正在挥动的手', '正在挥动的手'] }
            },
            {
                id: 'senses-foot-01', baseId: 'foot', title: '干燥软垫的落脚位置', partner: '整理休息区的妈妈', item: '软垫落脚安排页',
                mission: '“请用屏幕图卡给休息区安排干燥的落脚位置！”',
                sceneLabel: '干燥软垫上自然放着的成人脚背',
                sceneDescription: 'AI-generated photorealistic ordinary care photograph of one fictional anonymous adult foot resting naturally flat on a clean dry fabric mat while the adult is seated. Show the complete top of the foot and toes with a small area of trouser cuff, a pair of plain slippers set to the side. Neutral educational framing, soft daylight and wide crop-safe margins. No face, children, intimate areas, suggestive framing, identity markers, injury, text or logos.',
                actionLabel: '拼好落脚安排页', actionResult: '干燥软垫、周围留空和自己的袜子三张示意卡分别放进落脚、空间和用品栏。',
                application: '给干燥软垫上自然放着的成人脚背照片放“足”字牌', ending: '妈妈收好安排页，真实活动区保持干燥，不用脱鞋或走一遍展示。',
                cloze: '这课里，脚也可以叫——',
                homeTip: '日常穿鞋袜或坐下休息时，听孩子自己的描述，不先指脚、不要求脱鞋展示或答字；地面保持干燥防滑，尊重身体边界。',
                game: { type: 'build', title: '软垫落脚三栏', instruction: '干燥软垫卡放落脚栏，周围留空卡放空间栏，自己的袜子卡放用品栏。', success: '软垫落脚安排页拼好了。', safety: '只摆屏幕示意卡，不要求脱鞋、露脚或走动；真实地面由成人检查防滑。', pieces: [{ label: '干燥软垫卡', variant: 0, photo: false }, { label: '周围留空卡', variant: 0, photo: false }, { label: '自己的袜子卡', variant: 0, photo: false }], targets: [{ label: '落脚栏', x: 25, y: 60 }, { label: '空间栏', x: 50, y: 40 }, { label: '用品栏', x: 78, y: 60 }], matches: [0, 1, 2] }
            },
            {
                id: 'senses-foot-02', baseId: 'foot', title: '坐稳后的袜子准备', partner: '准备干净袜子的爸爸', item: '袜子照护准备页',
                mission: '“请把屏幕上的袜子准备卡按顺序排好！”',
                sceneLabel: '穿袜间歇仍清楚可见脚背和脚趾的成人脚',
                sceneDescription: 'AI-generated photorealistic neutral everyday care close-up of one fictional anonymous adult foot during a seated sock-dressing pause. A plain soft sock is only partly on near the heel, leaving the entire forefoot, toes and most of the top of the foot clearly visible. Foot rests on a dry low mat, trouser cuff visible, ample framing margins and soft room light. No children, face, intimate parts, suggestive pose, identifying marks, injury, text or branding.',
                actionLabel: '排好袜子准备卡', actionResult: '自己的干净袜子、坐稳的位置和需要时请成人帮忙三张示意卡按顺序进入准备栏。',
                application: '给穿袜间歇仍清楚可见脚背和脚趾的成人脚照片放“足”字牌', ending: '爸爸收好准备页，真实穿袜按日常需要进行，不以动作完成情况作评价。',
                cloze: '坐稳后，袜子慢慢套在——上',
                homeTip: '日常穿袜时，听孩子自然说到什么，不先读字、不要求再穿一次或露脚展示；需要时由成人协助，不测试平衡或速度。',
                game: { type: 'sequence', title: '坐稳穿袜准备卡', instruction: '依次放自己的干净袜子卡、坐稳位置卡、需要时请成人帮忙卡，不需要真的穿袜。', success: '袜子照护准备卡按顺序排好了。', safety: '只排示意卡，不要求脱鞋袜、展示身体或单脚站立；真实照护由成人按需要协助。', pieces: [{ label: '自己的干净袜子卡', variant: 0, photo: false }, { label: '坐稳位置卡', variant: 0, photo: false }, { label: '需要时请成人帮忙卡', variant: 0, photo: false }], targets: [{ label: '袜子照护准备栏', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'senses-foot-03', baseId: 'foot', title: '靠椅旁的脚部休息页', partner: '整理身体图册的奶奶', item: '脚部休息照片页',
                mission: '“请把三张脚部照片收进休息观察页！”',
                sceneLabel: '靠椅旁低软垫上放松的成人脚侧面',
                sceneDescription: 'AI-generated photorealistic neutral side-view photograph of one complete fictional anonymous adult foot resting on a low padded footrest beside a lounge chair. Heel, arch, forefoot and toes are fully visible in side profile, with a small trouser cuff area and no other body parts. Ordinary non-suggestive educational framing, soft daylight, realistic skin and cloth, generous crop-safe margins. No children, identity, intimate areas, injuries, text or logos.',
                actionLabel: '收好脚部休息照片', actionResult: '靠椅旁放松的脚侧面、人的脚底和人的脚侧面三张照片收进休息观察页。',
                application: '给靠椅旁低软垫上放松的成人脚侧面照片放“足”字牌', ending: '奶奶收好照片页，脚部角度不同，展示的仍是身体里的脚。',
                cloze: '坐下休息时，双——也可以放松',
                homeTip: '孩子自然坐下休息时，听自己的感受，不先要求看脚或脱鞋、不问字音；不拍摄身体部位，不把愿不愿展示当作学习结果。',
                game: { type: 'collect', title: '脚部休息照片册', instruction: '把三张脚部照片放进同一观察页，顺序不限，只看AI照片。', success: '脚部休息照片页收齐了。', safety: '不要求露脚或摆姿势，不拍摄本人，不按摩或检查本人脚部。', pieces: [{ label: '靠椅旁低软垫上放松的成人脚侧面', variant: 0, photo: true }, { label: '人的脚底', variant: 1, photo: true }, { label: '人的脚侧面', variant: 2, photo: true }], targets: [{ label: '脚部休息观察页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'senses-foot-04', baseId: 'foot', title: '袜篮到休息垫的屏幕路线', partner: '布置休息区的爷爷', item: '脚部休息屏幕地图',
                mission: '“请在屏幕地图上点亮通往休息垫的三站！”',
                sceneLabel: '平整地毯上自然落放的成人脚和旁边的拖鞋',
                sceneDescription: 'AI-generated photorealistic neutral everyday photograph of one complete fictional anonymous adult bare foot resting naturally on a flat dry rug near a plain pair of slippers. Show the foot from a gentle oblique top angle, all toes and heel in frame, seated posture indicated only by a trouser cuff. The foot stays central with wide margins and soft room light. No child, face, intimate areas, suggestive framing, walking stunt, injury, identifying marks or text.',
                actionLabel: '点亮休息垫路线', actionResult: '屏幕路线依次经过袜篮、舒适座位，最后停在干燥休息垫标记。',
                application: '给平整地毯上自然落放的成人脚照片放“足”字牌', ending: '爷爷收好屏幕地图，真实休息按日常需要，不需要赤脚走路线。',
                cloze: '平整的地面上，双——可以稳稳落放',
                homeTip: '日常整理休息区时，听孩子自己的描述，不先指脚、不要求脱鞋走路线或答字；成人照看防滑，不做平衡、速度或跳跃测试。',
                game: { type: 'route', title: '休息垫三站地图', instruction: '只在屏幕上依次点袜篮、舒适座位和干燥休息垫，最后一站是休息垫。', success: '屏幕路线到达干燥休息垫。', safety: '不要求真实行走、赤脚或单脚站立；只是屏幕地图，真实活动区由成人检查防滑。', steps: [{ label: '袜篮标记', result: '屏幕路线来到袜篮标记。' }, { label: '舒适座位标记', result: '屏幕路线来到舒适座位。' }, { label: '干燥休息垫标记', result: '屏幕路线停在干燥休息垫。' }], targets: [{ label: '袜篮标记', x: 20, y: 70 }, { label: '舒适座位标记', x: 50, y: 50 }, { label: '干燥休息垫标记', x: 80, y: 30 }] }
            },
            {
                id: 'senses-foot-05', baseId: 'foot', title: '凉鞋旁的脚部取景页', partner: '整理观察图卡的成人老师', item: '脚部角度分栏页',
                mission: '“请把脚底照片和其他角度照片分到两页！”',
                sceneLabel: '凉鞋旁完整可见脚背的成人脚',
                sceneDescription: 'AI-generated photorealistic neutral educational top-view photograph of one complete fictional anonymous adult foot resting flat on a clean dry mat, with unworn plain sandals placed separately beside it. The entire top of the foot, heel and toes are clearly visible; the sole is not shown. Only a small trouser cuff appears, no other body parts. Soft daylight and ample crop-safe margins, no children, identity markers, suggestive framing, injury, text or branding.',
                actionLabel: '分好脚部角度照片', actionResult: '凉鞋旁的脚背和人的脚侧面放其他角度页，人的脚底放脚底页。',
                application: '给凉鞋旁完整可见脚背的成人脚照片放“足”字牌', ending: '老师收好分栏页，照片从不同方向展示脚，不需要转动自己的脚。',
                cloze: '凉鞋准备好了，可以穿在——上',
                homeTip: '日常准备鞋子时，听孩子自发的描述，不要求露脚、转脚或认字；不拿本人脚部作比较或拍照，穿戴由孩子按需要参与。',
                game: { type: 'sort', title: '脚底与其他角度', instruction: '人的脚底照片放脚底页；凉鞋旁的脚背、人的脚侧面放其他角度页，只分照片方向。', success: '脚底页和其他角度页分好了。', safety: '只分AI照片，不要求脱鞋、翻脚、展示身体或检查本人脚部。', pieces: [{ label: '凉鞋旁完整可见脚背的成人脚', variant: 0, photo: true }, { label: '人的脚底', variant: 1, photo: true }, { label: '人的脚侧面', variant: 2, photo: true }], targets: [{ label: '脚底页', x: 30, y: 60 }, { label: '其他角度页', x: 75, y: 60 }], matches: [1, 0, 1] }
            },
            {
                id: 'senses-head-01', baseId: 'head', title: '梳子托盘旁的头发整理', partner: '准备梳理用品的妈妈', item: '头部梳理准备页',
                mission: '“请在屏幕上排好从容梳理的准备卡！”',
                sceneLabel: '梳子托盘旁清楚可见后脑和头顶的成人头部',
                sceneDescription: 'AI-generated photorealistic rear view of the head of a fictional anonymous adult seated beside a grooming table. Natural short hair shows the back and most of the crown, with a slight trim of the uppermost hair tips at the top crop boundary; a plain rounded comb lies unused in a tray to the side. Include only the head and a high clothed collar, with wide side margins and a tight upper margin in soft daylight. No child, identifiable face, intimate areas, forced pose, blades, text or branding.',
                actionLabel: '排好头部梳理卡', actionResult: '干净梳子、舒服座位和需要时请成人帮忙三张示意卡按顺序放好了。',
                application: '给梳子托盘旁清楚可见后脑和头顶的成人头部照片放“头”字牌', ending: '妈妈收好准备页，真实梳理按日常需要，孩子不必转头展示。',
                cloze: '干净梳子可以轻轻整理——发',
                homeTip: '日常梳头时，听孩子自然说到的感受，不先读字、不要求转头或再梳一次；尊重不想被碰的意愿，需要时由成人轻柔协助。',
                game: { type: 'sequence', title: '从容梳理三张卡', instruction: '依次放干净梳子卡、舒服座位卡、需要时请成人帮忙卡，只排准备卡。', success: '头部梳理准备卡按顺序排好了。', safety: '不要求转头、梳头或展示身体，不使用剪刀和理发工具；真实照护由成人按需要协助。', pieces: [{ label: '干净梳子卡', variant: 0, photo: false }, { label: '舒服座位卡', variant: 0, photo: false }, { label: '需要时请成人帮忙卡', variant: 0, photo: false }], targets: [{ label: '头部梳理准备栏', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'senses-head-02', baseId: 'head', title: '布帽旁的出门准备', partner: '安排出门用品的爸爸', item: '头部遮阳准备页',
                mission: '“请用屏幕图卡安排出门前的遮阳准备！”',
                sceneLabel: '布帽旁露出头顶的成人头部正面',
                sceneDescription: 'AI-generated photorealistic educational front view of the head of a fictional anonymous adult in a plain high-neck shirt, relaxed natural expression. An unworn wide-brim fabric hat rests on a nearby shelf, separate from the head; the face, ears and most of the crown remain visible, with a slight trim of the uppermost hair tips at the top crop boundary. Soft indoor daylight, ordinary invented features, wide side margins and a tight upper margin. No children, personal identity, intimate areas, direct sun, text or logos.',
                actionLabel: '拼好遮阳准备页', actionResult: '布帽用品、成人安排合适穿戴和遮阴休息三张示意卡分别进入对应准备栏。',
                application: '给布帽旁露出头顶的成人头部正面照片放“头”字牌', ending: '爸爸收好准备页，按天气和舒适度安排真实出门用品，不要求戴帽作答。',
                cloze: '布帽戴好，可以遮住——顶',
                homeTip: '日常出门准备时，听孩子自己的描述，不先指头、不要求戴帽或转头辨认；成人安排合适穿戴与遮阴，不直视太阳。',
                game: { type: 'build', title: '头部遮阳三栏', instruction: '布帽用品卡放用品栏，成人安排穿戴卡放照护栏，遮阴休息卡放休息栏。', success: '头部遮阳准备页拼好了。', safety: '只摆示意卡，不要求本人戴帽或展示头部；真实出门由成人陪伴，不直视太阳。', pieces: [{ label: '布帽用品卡', variant: 0, photo: false }, { label: '成人安排穿戴卡', variant: 0, photo: false }, { label: '遮阴休息卡', variant: 0, photo: false }], targets: [{ label: '用品栏', x: 25, y: 60 }, { label: '照护栏', x: 50, y: 40 }, { label: '休息栏', x: 78, y: 60 }], matches: [0, 1, 2] }
            },
            {
                id: 'senses-head-03', baseId: 'head', title: '靠椅旁的头部侧影', partner: '整理休息照片的阿姨', item: '靠椅头部观察页',
                mission: '“请自由揭开头部照片，看看不同方向的画面！”',
                sceneLabel: '靠椅旁自然坐稳的成人头部侧面',
                sceneDescription: 'AI-generated photorealistic educational side view of the whole head of a fictional anonymous adult naturally seated upright beside a padded chair back. Entire crown, ear, profile and chin are visible within generous margins, plain high clothed collar, relaxed expression and soft diffuse room light. Ordinary invented features with no real-person resemblance. No child, identity information, forced head tilt, intimate areas, medical devices, letters or logos.',
                actionLabel: '揭开头部侧影照片', actionResult: '靠椅旁的头部侧面、人的头部侧面和人的头部后面三张完整照片都展开了。',
                application: '给靠椅旁自然坐稳的成人头部侧面照片放“头”字牌', ending: '阿姨收好观察页，从侧面或后面看，展示的都是头部。',
                cloze: '从侧面看，耳朵长在——上',
                homeTip: '孩子自然坐下休息或画人物时，听自己的描述，不先示范转头、不问字音；不要求调整姿势或展示身体，休息保持舒服即可。',
                game: { type: 'reveal', title: '靠椅头部照片展开', instruction: '自由点开六块遮挡，看看三张完整头部照片，不用找到某个耳朵小点。', success: '三张头部照片都展开了。', safety: '只观察虚构成人AI照片，不要求本人转头、摆姿势或拍照，不辨认真实身份。', spots: ['靠椅旁自然坐稳的成人头部侧面', '靠椅旁自然坐稳的成人头部侧面', '人的头部侧面', '人的头部侧面', '人的头部后面', '人的头部后面'] }
            },
            {
                id: 'senses-head-04', baseId: 'head', title: '干净毛巾的头发照护页', partner: '整理照护图册的奶奶', item: '毛巾旁头部照片页',
                mission: '“请把三张头部照片收进照护图册！”',
                sceneLabel: '干净毛巾旁轻轻擦头发的成人头部后面',
                sceneDescription: 'AI-generated photorealistic neutral care rear view of a fictional anonymous adult head while an adult hand gently pats one lower side of the hair with a clean cream towel. The back and most of the crown remain plainly visible, with a slight trim of the uppermost hair tips at the top crop boundary; the towel overlaps the lower side without wrapping the head. Show a high clothed collar only, ordinary hair texture, soft indoor light, wide side margins and a tight upper margin. No child, identifiable face, intimate parts, bath setting, electrical dryer, text or logos.',
                actionLabel: '收好头部照护照片', actionResult: '毛巾旁的头部后面、人的头部侧面和人的头部后面三张照片收进同一页。',
                application: '给干净毛巾旁轻轻擦头发的成人头部后面照片放“头”字牌', ending: '奶奶收好照护页，真实整理头发由成人按需要协助，不用展示给游戏看。',
                cloze: '干净毛巾可以轻轻擦一擦——发',
                homeTip: '日常整理头发时，听孩子自发的感受，不要求露头、转头或配字；不拍摄照护过程，电吹风只由成人处理，尊重不想被碰的意愿。',
                game: { type: 'collect', title: '毛巾旁头部照片册', instruction: '把三张头部照片放进同一照护页，先后顺序不限，不做照片中的动作。', success: '头部照护照片页收好了。', safety: '只整理虚构成人AI照片，不要求本人展示或擦头发，不操作真实电吹风、不采集影像。', pieces: [{ label: '干净毛巾旁轻轻擦头发的成人头部后面', variant: 0, photo: true }, { label: '人的头部侧面', variant: 1, photo: true }, { label: '人的头部后面', variant: 2, photo: true }], targets: [{ label: '头部照护照片页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'senses-tooth-01', baseId: 'tooth', title: '白底座上的前牙模型', partner: '整理教学模型照片的成人老师', item: '前牙模型照片页',
                mission: '“请把三张牙齿模型照片收进观察页！”',
                sceneLabel: '白底座上完整的放大前牙教学模型',
                sceneDescription: 'Photorealistic AI-generated still-life of one enlarged anatomical incisor teaching model standing on a plain white stable base. The model is clean molded off-white resin, with a credible broad incisor crown and simplified intact root, wholly visible with generous margins on a beige classroom table. Clearly an educational manufactured object, not a real extracted tooth or tissue. Soft daylight, no people, blood, disease, surgical tools, letters, labels, logos or watermark.',
                actionLabel: '收好牙齿模型照片', actionResult: '白底座上的前牙模型、牙齿模型上的后牙和牙齿模型上的整排牙三张照片收进同一页。',
                application: '给白底座上完整的放大前牙教学模型照片放“牙”字牌', ending: '老师收好照片页，一颗模型和整排模型都用来观察牙齿，不检查谁的嘴。',
                cloze: '白底座上的模型展示了一颗——',
                homeTip: '自然翻看健康图册时，听孩子自己的描述，不先指牙、不要求张嘴或配字；不用真牙或小模型作玩具，不进行口腔检查。',
                game: { type: 'collect', title: '前牙与整排模型照片', instruction: '把三张牙齿教学模型照片放进同一观察页，顺序不限，只看模型照片。', success: '牙齿教学模型照片页收齐了。', safety: '没有真实牙齿、血腥画面或口腔检查，不要求张嘴展示，不触碰或入口真实模型。', pieces: [{ label: '白底座上完整的放大前牙教学模型', variant: 0, photo: true }, { label: '牙齿模型上的后牙', variant: 1, photo: true }, { label: '牙齿模型上的整排牙', variant: 2, photo: true }], targets: [{ label: '牙齿模型观察页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'senses-tooth-02', baseId: 'tooth', title: '软毛牙刷旁的模型准备', partner: '准备日常刷牙用品的妈妈', item: '牙齿照护安排页',
                mission: '“请用屏幕示意卡拼好牙齿照护安排页！”',
                sceneLabel: '软毛牙刷旁清楚可见整排牙的牙齿教学模型',
                sceneDescription: 'Photorealistic AI-generated still-life of a clean anatomical dental jaw teaching model on a stable plain tray, with the white molded teeth clearly visible in orderly upper and lower rows. An unused soft-bristle toothbrush lies separately beside the model without touching it. Credible manufactured matte resin and pale pink synthetic gum material, full model within wide margins, gentle indoor light. No people, real tissue, extracted teeth, blood, surgical instruments, text, logos or watermark.',
                actionLabel: '拼好牙齿照护页', actionResult: '自己的软毛牙刷、成人协助和干净存放三张示意卡分别放进用品、照护和收纳栏。',
                application: '给软毛牙刷旁清楚可见整排牙的牙齿教学模型照片放“牙”字牌', ending: '妈妈收好安排页，幼儿日常刷牙由成人协助，不另安排张嘴展示。',
                cloze: '自己的软毛牙刷，用来清洁——齿',
                homeTip: '日常刷牙时，听孩子主动说到的用品或感受，不先读字、不要求重复刷或张嘴作答；成人协助适龄刷牙，牙刷各自使用。',
                game: { type: 'build', title: '牙齿照护三栏', instruction: '自己的软毛牙刷卡放用品栏，成人协助卡放照护栏，干净存放卡放收纳栏；只有示意卡。', success: '牙齿照护安排页的三栏拼好了。', safety: '不刷真实模型、不要求张嘴展示或检查牙齿，不交换牙刷；幼儿真实刷牙由成人协助。', pieces: [{ label: '自己的软毛牙刷卡', variant: 0, photo: false }, { label: '成人协助卡', variant: 0, photo: false }, { label: '干净存放卡', variant: 0, photo: false }], targets: [{ label: '用品栏', x: 25, y: 60 }, { label: '照护栏', x: 50, y: 40 }, { label: '收纳栏', x: 78, y: 60 }], matches: [0, 1, 2] }
            },
            {
                id: 'senses-tooth-03', baseId: 'tooth', title: '浅蓝垫上的单颗牙模型', partner: '整理牙齿取景卡的成人老师', item: '牙齿模型取景分栏页',
                mission: '“请把前牙与后牙照片和整排牙照片分到两栏！”',
                sceneLabel: '浅蓝垫上完整的单颗前牙教学模型',
                sceneDescription: 'Photorealistic AI-generated still-life of a single enlarged anatomical incisor teaching model lying on a plain pale blue display pad. Its complete broad crown and simplified intact root are visible from an oblique overhead view, clean off-white molded resin with a slight manufacturing seam. The model fills the central area with generous margins in soft classroom daylight. No people, real extracted tooth, tissue, injury, blood, dental tools, text, labels or branding.',
                actionLabel: '分好牙齿模型取景', actionResult: '浅蓝垫上的前牙模型和模型上的后牙放前牙与后牙照片栏，模型上的整排牙放整排牙照片栏。',
                application: '给浅蓝垫上完整的单颗前牙教学模型照片放“牙”字牌', ending: '老师收好分栏页，取景范围不同，不代表需要检查自己的牙齿。',
                cloze: '浅蓝垫上，模型展示的是一颗前——',
                homeTip: '孩子自然看健康图册时，听自己的描述，不先给分类答案、不要求张嘴数牙；不触摸孩子的口腔，不把掉牙或牙齿外观当测试。',
                game: { type: 'sort', title: '前后牙与整排牙照片', instruction: '浅蓝垫上的前牙模型、模型上的后牙放前牙与后牙照片栏；模型上的整排牙放整排牙照片栏，只分模型照片。', success: '两种牙齿模型取景分好了。', safety: '只有非血腥教学模型照片，不用真牙、不检查本人、不要求张嘴或数牙。', pieces: [{ label: '浅蓝垫上完整的单颗前牙教学模型', variant: 0, photo: true }, { label: '牙齿模型上的后牙', variant: 1, photo: true }, { label: '牙齿模型上的整排牙', variant: 2, photo: true }], targets: [{ label: '前牙与后牙照片栏', x: 30, y: 60 }, { label: '整排牙照片栏', x: 75, y: 60 }], matches: [0, 0, 1] }
            },
            {
                id: 'senses-tooth-04', baseId: 'tooth', title: '透明罩里的牙齿模型', partner: '整理健康展柜的成人讲解员', item: '展柜牙齿模型观察页',
                mission: '“请自由展开三张牙齿教学模型照片！”',
                sceneLabel: '透明展示罩里清楚可见整排牙的牙齿教学模型',
                sceneDescription: 'Photorealistic AI-generated still-life of a complete anatomical dental jaw teaching model under a clear acrylic display cover on a stable museum-style shelf. Orderly white resin upper and lower teeth and pale pink manufactured gum shapes are clearly visible through the clean cover, soft reflections do not obscure the model. Full model and cover within generous crop-safe margins, diffuse light. No people, real tissue, extracted teeth, blood, decay, surgical tools, text, labels or logos.',
                actionLabel: '揭开展柜模型照片', actionResult: '透明罩里的整排牙模型、牙齿模型上的后牙和牙齿模型上的整排牙三张照片全部展开了。',
                application: '给透明展示罩里清楚可见整排牙的牙齿教学模型照片放“牙”字牌', ending: '讲解员收好观察页，展柜模型留在罩内，看图不需要做口腔检查。',
                cloze: '透明罩里，模型有一排整齐的——',
                homeTip: '自然遇到健康展柜图片时，听孩子自己的发现，不先圈牙或要求读字；不打开真展柜、不强迫张嘴，感到不舒服就停止观看。',
                game: { type: 'reveal', title: '展柜牙齿模型展开', instruction: '自由揭开六块遮挡，看三张完整模型照片，不寻找某颗牙的细小位置。', success: '三张牙齿模型照片都展开了。', safety: '只看非血腥教学模型照片，不打开真展柜、不检查口腔、不要求张嘴展示。', spots: ['透明展示罩里清楚可见整排牙的牙齿教学模型', '透明展示罩里清楚可见整排牙的牙齿教学模型', '牙齿模型上的后牙', '牙齿模型上的后牙', '牙齿模型上的整排牙', '牙齿模型上的整排牙'] }
            },
            {
                id: 'senses-heart-01', baseId: 'heart', title: '米色桌面的心脏模型页', partner: '整理健康图册的成人老师', item: '心脏模型照片页',
                mission: '“请把三张人体心脏教学模型照片收进图册！”',
                sceneLabel: '米色桌面上带底座的人体心脏教学模型正面',
                sceneDescription: 'Photorealistic AI-generated still-life of the front view of a complete anatomical human heart teaching model on a plain stable base on a beige classroom table. Credible rounded asymmetric anatomical shape, molded muted red resin with simplified blue vessel details and visible manufactured texture, not a symbolic love-heart icon. Entire model and base within wide crop-safe margins, diffuse daylight. No people, real organ, tissue, blood, surgery, open body, text, labels or logos.',
                actionLabel: '收好心脏模型照片', actionResult: '米色桌面上的模型正面、人体心脏教学模型的斜侧面和背面三张照片收进同一页。',
                application: '给米色桌面上带底座的人体心脏教学模型正面照片放“心”字牌', ending: '老师收好图册，照片展示教学模型，不是爱心图标或身体检查。',
                cloze: '教学模型展示身体里的——脏',
                homeTip: '自然翻看健康图册时，听孩子自己的描述，不先提示“心”、不用爱心图标替代；不要求摸胸口、听心跳或运动证明理解。',
                game: { type: 'collect', title: '心脏模型三张照片', instruction: '把模型正面、斜侧面和背面照片收进同一页，先后不限，只看教学模型。', success: '心脏教学模型照片页收齐了。', safety: '非血腥人体心脏教学模型，不用真实器官或爱心图标；不检查身体、不听心跳、不采集健康数据。', pieces: [{ label: '米色桌面上带底座的人体心脏教学模型正面', variant: 0, photo: true }, { label: '人体心脏教学模型的斜侧面', variant: 1, photo: true }, { label: '人体心脏教学模型的背面', variant: 2, photo: true }], targets: [{ label: '心脏模型照片页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'senses-heart-02', baseId: 'heart', title: '低架上的模型观察准备', partner: '安排模型展示的成人讲解员', item: '心脏模型展示安排页',
                mission: '“请用屏幕示意卡拼好教学模型的展示安排！”',
                sceneLabel: '低展示架上完整的人体心脏教学模型',
                sceneDescription: 'Photorealistic AI-generated still-life of a complete anatomical human heart teaching model standing on a broad stable base on a low clean wooden display shelf. Show a credible asymmetric heart shape with molded muted red and blue educational vessel details, manufactured matte resin rather than living tissue. Clear empty space surrounds the whole model, soft indoor light and generous framing margins. No people, love-heart icon, real organ, blood, surgery, open body, written labels, text or branding.',
                actionLabel: '拼好模型展示页', actionResult: '稳定展示台、留空观察位置和请成人安排模型三张示意卡分别进入对应安排栏。',
                application: '给低展示架上完整的人体心脏教学模型照片放“心”字牌', ending: '讲解员收好安排页，真实模型由成人摆稳，只看模型就可以。',
                cloze: '低架上的模型展示人体的——脏',
                homeTip: '日常自然看到教学模型图片时，听孩子自己的发现，不先指模型、不追问字音；不让孩子搬模型，不摸胸口、不测脉搏。',
                game: { type: 'build', title: '心脏模型展示三栏', instruction: '稳定展示台卡放展示栏，留空观察位置卡放空间栏，请成人安排模型卡放成人安排栏；不拼身体器官。', success: '模型展示安排页的三栏拼好了。', safety: '只摆屏幕示意卡，不拆真实模型或触摸本人身体；心脏为非血腥解剖教学模型，不是爱心图标。', pieces: [{ label: '稳定展示台卡', variant: 0, photo: false }, { label: '留空观察位置卡', variant: 0, photo: false }, { label: '请成人安排模型卡', variant: 0, photo: false }], targets: [{ label: '展示栏', x: 25, y: 60 }, { label: '空间栏', x: 50, y: 40 }, { label: '成人安排栏', x: 78, y: 60 }], matches: [0, 1, 2] }
            },
            {
                id: 'senses-heart-03', baseId: 'heart', title: '灰底托盘的心脏模型侧照', partner: '整理模型角度照片的阿姨', item: '灰底心脏模型观察页',
                mission: '“请自由揭开三张人体心脏模型照片！”',
                sceneLabel: '灰底托盘上人体心脏教学模型的斜侧面',
                sceneDescription: 'Photorealistic AI-generated oblique side-view still-life of a complete anatomical human heart teaching model mounted upright on a stable base in a plain gray tray, with an unmarked blank card lying separately nearby. Credible asymmetric anatomy in clean molded muted red and blue resin, all major model edges visible and generous crop-safe margins. Soft studio daylight, manufactured object clearly distinguishable from tissue. No people, symbolic love-heart, real organ, blood, surgery, text, labels or logos.',
                actionLabel: '揭开灰底模型照片', actionResult: '灰底托盘上的模型斜侧面、人体心脏教学模型的斜侧面和背面三张照片全部展开了。',
                application: '给灰底托盘上人体心脏教学模型的斜侧面照片放“心”字牌', ending: '阿姨收好观察页，模型可以从不同方向看，不需要触摸身体找位置。',
                cloze: '从斜侧面看，仍是人体——脏的教学模型',
                homeTip: '孩子自然翻健康图册时，听自己的描述，不先指出器官位置、不要求摸胸口或听心跳；不采集身体数据，想停止观看就停止。',
                game: { type: 'reveal', title: '灰底心脏模型展开', instruction: '自由点开六块遮挡，看看三张完整模型照片，不寻找固定血管或细小部位。', success: '三张心脏教学模型照片都展开了。', safety: '只看非血腥解剖教学模型，不用真实器官或爱心图标，不检查身体、不安排运动或心跳测试。', spots: ['灰底托盘上人体心脏教学模型的斜侧面', '灰底托盘上人体心脏教学模型的斜侧面', '人体心脏教学模型的斜侧面', '人体心脏教学模型的斜侧面', '人体心脏教学模型的背面', '人体心脏教学模型的背面'] }
            },
            {
                id: 'senses-heart-04', baseId: 'heart', title: '透明罩旁的健康图册路线', partner: '布置健康阅读角的成人老师', item: '心脏模型阅读屏幕地图',
                mission: '“请在屏幕地图上依次找到图册、模型展位和阅读座位！”',
                sceneLabel: '透明展示罩里完整的人体心脏教学模型',
                sceneDescription: 'Photorealistic AI-generated still-life of a complete anatomical human heart teaching model inside a clear acrylic display cover on a stable classroom reading-corner table. The asymmetric molded red-and-blue resin heart and its plain base remain clearly visible through soft unobtrusive reflections; a closed unmarked book rests separately beside the cover. Entire model and cover within generous margins. No people, love-heart icon, real tissue, organ specimen, blood, surgery, open body, written words or branding.',
                actionLabel: '点亮健康阅读路线', actionResult: '屏幕路线依次经过图册架和模型展位，停在阅读座位标记。',
                application: '给透明展示罩里完整的人体心脏教学模型照片放“心”字牌', ending: '老师收好地图，模型留在展罩里，图册可以按舒服的节奏阅读。',
                cloze: '透明罩里的教学模型，展示的是——脏',
                homeTip: '自然看健康图册时，听孩子自己的表达，不先提示字、不用爱心图标替代心脏；不要求摸胸口、跑步或报告心跳，不打开真展罩。',
                game: { type: 'route', title: '健康阅读角三站', instruction: '只在屏幕上依次点图册架、模型展位和阅读座位，终点是阅读座位，不是身体部位。', success: '屏幕路线到达健康图册阅读座位。', safety: '只走屏幕地图，不触摸本人身体、不听心跳、不打开展罩；照片是非血腥人体心脏教学模型，不是爱心图标。', steps: [{ label: '图册架标记', result: '屏幕路线来到图册架。' }, { label: '模型展位标记', result: '屏幕路线经过心脏教学模型展位。' }, { label: '阅读座位标记', result: '屏幕路线停在阅读座位。' }], targets: [{ label: '图册架标记', x: 20, y: 75 }, { label: '模型展位标记', x: 50, y: 50 }, { label: '阅读座位标记', x: 80, y: 30 }] }
            },
            {
                id: 'senses-face-01', baseId: 'face', title: '柔光窗边的脸部观察', partner: '安排观察座位的成人老师', item: '柔光脸部观察准备页',
                mission: '“请用屏幕示意卡拼好舒服的观察安排！”',
                sceneLabel: '室内柔光下表情自然的虚构成人脸部正面',
                sceneDescription: 'AI-generated photorealistic educational front portrait of a fictional anonymous adult with a relaxed neutral face in diffuse indoor window light. Full facial oval, eyes, nose and mouth clearly visible with generous margins, plain high-neck clothing and softly blurred closed window behind. Invented ordinary features, no resemblance to a real individual, no identity information. No children, intimate areas, forced expression, beauty filters, direct sunlight, letters, logos or watermark.',
                actionLabel: '拼好脸部观察准备页', actionResult: '舒服座位、柔和光线和尊重不想观看的选择三张示意卡进入对应安排栏。',
                application: '给室内柔光下表情自然的虚构成人脸部正面照片放“脸”字牌', ending: '老师收好准备页，观察只用虚构成人图卡，孩子不用展示自己的脸。',
                cloze: '眼睛、鼻子和嘴，都在——上',
                homeTip: '孩子日常照镜子时，听自己关注的地方，不先指脸、不提示答案、不要求表情；不拍照或采集影像，尊重不想照镜子的选择。',
                game: { type: 'build', title: '柔光脸部观察三栏', instruction: '舒服座位卡放座位栏，柔和光线卡放光线栏，尊重选择卡放选择栏；只安排看图环境。', success: '脸部观察准备页的三栏拼好了。', safety: '只摆示意卡、看虚构成人AI图卡，不调用相机、不识别人脸、不要求本人展示或模仿表情。', pieces: [{ label: '舒服座位卡', variant: 0, photo: false }, { label: '柔和光线卡', variant: 0, photo: false }, { label: '尊重选择卡', variant: 0, photo: false }], targets: [{ label: '座位栏', x: 25, y: 60 }, { label: '光线栏', x: 50, y: 40 }, { label: '选择栏', x: 78, y: 60 }], matches: [0, 1, 2] }
            },
            {
                id: 'senses-face-02', baseId: 'face', title: '灰墙前的自然微笑图卡', partner: '整理写实图卡的美术老师', item: '自然脸部照片页',
                mission: '“请把三张脸部图卡收进观察页！”',
                sceneLabel: '灰墙前略微侧向自然微笑的虚构成人脸',
                sceneDescription: 'AI-generated photorealistic educational portrait of a fictional anonymous adult with a slight natural smile, face turned gently three-quarter toward the camera against a soft gray studio wall. Entire facial outline, both eyes, nose and mouth are visible, plain high-neck shirt, natural skin texture and diffuse light, wide crop-safe margins. Ordinary invented features with no real-person likeness or identity. No children, forced expression, intimate parts, personal accessories, letters, logos or watermark.',
                actionLabel: '收好自然脸部图卡', actionResult: '灰墙前自然微笑的脸、人的脸部侧面和自然微笑的脸三张图卡收进同一页。',
                application: '给灰墙前略微侧向自然微笑的虚构成人脸照片放“脸”字牌', ending: '老师收好照片页，方向和表情不同，展示的都是脸，不猜谁的心情。',
                cloze: '自然微笑时，看见的仍是——',
                homeTip: '孩子自然看人像图画时，听自己的描述，不先要求微笑或指出答案；不用表情猜测心情或性格，不要求孩子拍照、模仿或露脸。',
                game: { type: 'collect', title: '自然脸部图卡册', instruction: '把三张虚构成人脸部图卡放同一页，先后不限，不需要模仿表情或辨认身份。', success: '自然脸部图卡页收齐了。', safety: '只整理虚构成人AI图卡，不采集真实人脸，不推断情绪、性格或健康，不要求表情展示。', pieces: [{ label: '灰墙前略微侧向自然微笑的虚构成人脸', variant: 0, photo: true }, { label: '人的脸部侧面', variant: 1, photo: true }, { label: '自然微笑的脸', variant: 2, photo: true }], targets: [{ label: '自然脸部照片页', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'senses-face-03', baseId: 'face', title: '干净手巾旁的洗脸准备', partner: '准备日常洗漱用品的妈妈', item: '脸部照护准备页',
                mission: '“请在屏幕上排好温和洗漱的准备卡！”',
                sceneLabel: '干净手巾旁表情自然的虚构成人脸部',
                sceneDescription: 'AI-generated photorealistic neutral care portrait of a fictional anonymous adult with the entire relaxed face clearly visible beside a clean folded cotton face towel on a washbasin shelf. The towel remains separate and does not hide the face; tap turned off, plain high-neck clothing, ordinary skin and soft indoor light with ample crop-safe margins. No real-person likeness, children, intimate parts, bath exposure, forced expression, cosmetic claims, written words or branding.',
                actionLabel: '排好脸部照护卡', actionResult: '自己的干净手巾、请成人确认水温和按需要轻柔清洁三张示意卡按顺序放好了。',
                application: '给干净手巾旁表情自然的虚构成人脸部照片放“脸”字牌', ending: '妈妈收好照护页，日常洗漱按需要进行，孩子不用为游戏再洗一次。',
                cloze: '自己的干净手巾，可以轻轻擦——',
                homeTip: '日常洗脸时，听孩子自发的感受，不先说目标字、不要求重复洗或展示脸；成人确认水温，用品各自使用，尊重不想被碰的意愿。',
                game: { type: 'sequence', title: '温和洗漱准备三卡', instruction: '依次放自己的干净手巾卡、请成人确认水温卡、按需要轻柔清洁卡，只排屏幕照护计划。', success: '脸部照护准备卡按顺序放好了。', safety: '不操作真实水龙头、不要求洗脸或露脸展示，不共用手巾；真实照护由成人按需要协助。', pieces: [{ label: '自己的干净手巾卡', variant: 0, photo: false }, { label: '请成人确认水温卡', variant: 0, photo: false }, { label: '按需要轻柔清洁卡', variant: 0, photo: false }], targets: [{ label: '脸部照护准备栏', x: 50, y: 60 }], matches: [0, 0, 0] }
            },
            {
                id: 'senses-face-04', baseId: 'face', title: '靠垫旁的安静脸部图卡', partner: '整理休息图册的爸爸', item: '休息脸部观察页',
                mission: '“请自由揭开三张脸部图卡，看看完整画面！”',
                sceneLabel: '靠垫旁自然放松的虚构成人脸部正面',
                sceneDescription: 'AI-generated photorealistic educational front portrait of a fictional anonymous adult naturally resting beside a plain soft lounge cushion. Full face, eyes, nose, mouth and facial outline are visible, relaxed neutral expression, plain high-neck shirt, realistic skin detail, diffuse indoor light and generous crop-safe margins. Invented ordinary features with no real identifiable likeness. No children, intimate parts, sleep deprivation, forced expression, medical inference, text or logos.',
                actionLabel: '揭开休息脸部图卡', actionResult: '靠垫旁放松的脸、人的脸部侧面和自然微笑的脸三张完整图卡全部展开了。',
                application: '给靠垫旁自然放松的虚构成人脸部正面照片放“脸”字牌', ending: '爸爸收好观察页，图卡只展示脸部，不从表情判断心情或身体状况。',
                cloze: '坐下休息，眼睛和嘴仍在——上',
                homeTip: '孩子自然休息或照镜子时，听自己的描述，不先要求做表情、不问答案；不拍照，不根据表情测试情绪，随时可以不看。',
                game: { type: 'reveal', title: '休息脸部图卡展开', instruction: '自由点开六块遮挡，看三张完整图卡，不寻找固定五官，也不用猜情绪。', success: '三张脸部图卡都展开了。', safety: '只看虚构成人AI图卡，不拍摄本人、不识别人脸，不要求模仿表情或展示身体，不推断健康或情绪。', spots: ['靠垫旁自然放松的虚构成人脸部正面', '靠垫旁自然放松的虚构成人脸部正面', '人的脸部侧面', '人的脸部侧面', '自然微笑的脸', '自然微笑的脸'] }
            }
        ]
    };
});
