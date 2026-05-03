// 数据版本号：修改数据结构后递增此值，浏览器 localStorage 旧数据将自动失效
const DATA_VERSION = 1;

// ========== 39所985工程大学数据 ==========
const universities = [
  {
    id: 0,
    name: '北京大学',
    province: '北京市',
    city: '北京',
    batch: '一期',
    intro: '中国最顶尖的综合性研究型大学之一，创办于1898年，人文社科与自然科学并重。',
    schools: [
      {
        name: '数学科学学院',
        disciplines: [
          { name: '数学', assessment4: 'A+', assessment5: 'A+', majors: ['数学与应用数学', '信息与计算科学', '统计学', '数据科学与大数据技术'] }
        ]
      },
      {
        name: '物理学院',
        disciplines: [
          { name: '物理学', assessment4: 'A+', assessment5: 'A+', majors: ['物理学', '应用物理学', '核物理', '天文学'] },
          { name: '天文学', assessment4: 'B+', assessment5: 'A-', majors: ['天文学'] }
        ]
      },
      {
        name: '化学与分子工程学院',
        disciplines: [
          { name: '化学', assessment4: 'A+', assessment5: 'A+', majors: ['化学', '应用化学', '化学生物学', '材料化学'] }
        ]
      },
      {
        name: '生命科学学院',
        disciplines: [
          { name: '生物学', assessment4: 'A+', assessment5: 'A+', majors: ['生物科学', '生物技术', '生物信息学', '生态学'] },
          { name: '生态学', assessment4: 'A', assessment5: 'A', majors: ['生态学'] }
        ]
      },
      {
        name: '城市与环境学院',
        disciplines: [
          { name: '地理学', assessment4: 'A+', assessment5: 'A+', majors: ['自然地理与资源环境', '人文地理与城乡规划', '地理信息科学'] },
          { name: '环境科学与工程', assessment4: 'A', assessment5: 'A', majors: ['环境科学', '环境工程', '环境生态工程'] }
        ]
      },
      {
        name: '地球与空间科学学院',
        disciplines: [
          { name: '地球物理学', assessment4: 'B', assessment5: 'B+', majors: ['地球物理学', '空间科学与技术'] },
          { name: '地质学', assessment4: 'B+', assessment5: 'A-', majors: ['地质学', '地球化学'] }
        ]
      },
      {
        name: '心理与认知科学学院',
        disciplines: [
          { name: '心理学', assessment4: 'A+', assessment5: 'A+', majors: ['心理学', '应用心理学'] }
        ]
      },
      {
        name: '中国语言文学系',
        disciplines: [
          { name: '中国语言文学', assessment4: 'A+', assessment5: 'A+', majors: ['汉语言文学', '汉语言', '古典文献学', '应用语言学'] }
        ]
      },
      {
        name: '历史学系',
        disciplines: [
          { name: '中国史', assessment4: 'A', assessment5: 'A+', majors: ['历史学'] },
          { name: '世界史', assessment4: 'A+', assessment5: 'A+', majors: ['世界史'] },
          { name: '考古学', assessment4: 'A+', assessment5: 'A+', majors: ['考古学', '文物与博物馆学'] }
        ]
      },
      {
        name: '哲学系',
        disciplines: [
          { name: '哲学', assessment4: 'A+', assessment5: 'A+', majors: ['哲学', '逻辑学', '宗教学'] }
        ]
      },
      {
        name: '外国语学院',
        disciplines: [
          { name: '外国语言文学', assessment4: 'A+', assessment5: 'A+', majors: ['英语', '德语', '法语', '西班牙语', '日语', '俄语', '阿拉伯语', '朝鲜语', '葡萄牙语'] }
        ]
      },
      {
        name: '法学院',
        disciplines: [
          { name: '法学', assessment4: 'A', assessment5: 'A+', majors: ['法学'] }
        ]
      },
      {
        name: '政府管理学院',
        disciplines: [
          { name: '政治学', assessment4: 'A+', assessment5: 'A+', majors: ['政治学与行政学', '国际政治', '行政管理'] },
          { name: '公共管理', assessment4: 'A', assessment5: 'A', majors: ['公共事业管理', '城市管理'] }
        ]
      },
      {
        name: '社会学系',
        disciplines: [
          { name: '社会学', assessment4: 'A+', assessment5: 'A+', majors: ['社会学', '社会工作', '人类学'] }
        ]
      },
      {
        name: '经济学院',
        disciplines: [
          { name: '理论经济学', assessment4: 'A', assessment5: 'A+', majors: ['经济学', '资源与环境经济学'] },
          { name: '应用经济学', assessment4: 'A+', assessment5: 'A+', majors: ['金融学', '国际经济与贸易', '保险学', '经济统计学'] }
        ]
      },
      {
        name: '光华管理学院',
        disciplines: [
          { name: '工商管理', assessment4: 'A', assessment5: 'A+', majors: ['工商管理', '会计学', '市场营销', '金融学'] }
        ]
      },
      {
        name: '新闻与传播学院',
        disciplines: [
          { name: '新闻传播学', assessment4: 'B+', assessment5: 'A-', majors: ['新闻学', '广播电视学', '广告学', '编辑出版学'] }
        ]
      },
      {
        name: '信息科学技术学院',
        disciplines: [
          { name: '计算机科学与技术', assessment4: 'A+', assessment5: 'A+', majors: ['计算机科学与技术', '软件工程', '人工智能', '信息安全'] },
          { name: '电子科学与技术', assessment4: 'A', assessment5: 'A', majors: ['电子信息工程', '电子科学与技术', '微电子科学与工程', '通信工程'] }
        ]
      },
      {
        name: '工学院',
        disciplines: [
          { name: '力学', assessment4: 'A+', assessment5: 'A+', majors: ['理论与应用力学', '工程力学'] },
          { name: '材料科学与工程', assessment4: 'B+', assessment5: 'A-', majors: ['材料科学与工程'] }
        ]
      },
      {
        name: '基础医学院',
        disciplines: [
          { name: '基础医学', assessment4: 'A+', assessment5: 'A+', majors: ['基础医学'] },
          { name: '临床医学', assessment4: 'A-', assessment5: 'A', majors: ['临床医学', '麻醉学', '医学影像学'] }
        ]
      },
      {
        name: '药学院',
        disciplines: [
          { name: '药学', assessment4: 'A', assessment5: 'A', majors: ['药学'] }
        ]
      },
      {
        name: '公共卫生学院',
        disciplines: [
          { name: '公共卫生与预防医学', assessment4: 'A-', assessment5: 'A', majors: ['预防医学'] }
        ]
      },
      {
        name: '护理学院',
        disciplines: [
          { name: '护理学', assessment4: 'B+', assessment5: 'A-', majors: ['护理学'] }
        ]
      },
      {
        name: '艺术学院',
        disciplines: [
          { name: '艺术学理论', assessment4: 'B+', assessment5: 'A-', majors: ['艺术史论', '戏剧影视文学'] }
        ]
      },
      {
        name: '马克思主义学院',
        disciplines: [
          { name: '马克思主义理论', assessment4: 'A', assessment5: 'A+', majors: ['马克思主义理论'] }
        ]
      }
    ],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '法学', type: '大类', subject: '历史类', quota: 0, score: 678, rank: 29, includes: '' },
        { name: '公共管理类', type: '大类', subject: '历史类', quota: 0, score: 676, rank: 29, includes: '' },
        { name: '社会学类', type: '大类', subject: '历史类', quota: 0, score: 672, rank: 35, includes: '' },
        { name: '文科试验班类（不限选考科目类专业）（含中国语言文学类专业）', type: '大类', subject: '历史类', quota: 0, score: 671, rank: 43, includes: '不限选考科目类专业；含中国语言文学类专业' },
        { name: '图书馆学', type: '大类', subject: '历史类', quota: 0, score: 668, rank: 71, includes: '' },
        { name: '理科试验班类（理科基础类专业）（含数学类专业）', type: '专业', subject: '物理类', quota: 0, score: 688, rank: 82, includes: '理科基础类专业；含数学类专业' },
        { name: '工科试验班类', type: '专业', subject: '物理类', quota: 0, score: 680, rank: 267, includes: '' },
        { name: '地球物理学类', type: '专业', subject: '物理类', quota: 0, score: 679, rank: 297, includes: '' },
        { name: '法学', type: '大类', subject: '物理类', quota: 0, score: 678, rank: 330, includes: '' },
        { name: '心理学类', type: '大类', subject: '物理类', quota: 0, score: 677, rank: 361, includes: '' },
      ]
    },
  },
  {
    id: 1,
    name: '清华大学',
    province: '北京市',
    city: '北京',
    batch: '一期',
    intro: '中国最顶尖的理工科综合研究型大学，创办于1911年，工程与技术学科世界领先。',
    schools: [
      {
        name: '建筑学院',
        disciplines: [
          { name: '建筑学', assessment4: 'A+', assessment5: 'A+', majors: ['建筑学', '城乡规划', '风景园林'] }
        ]
      },
      {
        name: '土木水利学院',
        disciplines: [
          { name: '土木工程', assessment4: 'A', assessment5: 'A+', majors: ['土木工程', '建筑环境与能源应用工程', '给排水科学与工程'] },
          { name: '水利工程', assessment4: 'A+', assessment5: 'A+', majors: ['水利水电工程'] }
        ]
      },
      {
        name: '环境学院',
        disciplines: [
          { name: '环境科学与工程', assessment4: 'A+', assessment5: 'A+', majors: ['环境工程', '环境科学'] }
        ]
      },
      {
        name: '机械工程学院',
        disciplines: [
          { name: '机械工程', assessment4: 'A+', assessment5: 'A+', majors: ['机械工程', '机械设计制造及其自动化', '车辆工程'] }
        ]
      },
      {
        name: '能源与动力工程系',
        disciplines: [
          { name: '动力工程及工程热物理', assessment4: 'A+', assessment5: 'A+', majors: ['能源与动力工程'] }
        ]
      },
      {
        name: '电机工程与应用电子技术系',
        disciplines: [
          { name: '电气工程', assessment4: 'A+', assessment5: 'A+', majors: ['电气工程及其自动化'] }
        ]
      },
      {
        name: '电子工程系',
        disciplines: [
          { name: '电子科学与技术', assessment4: 'A', assessment5: 'A+', majors: ['电子信息工程', '电子科学与技术', '通信工程'] },
          { name: '信息与通信工程', assessment4: 'A+', assessment5: 'A+', majors: ['通信工程', '信息工程'] }
        ]
      },
      {
        name: '计算机科学与技术系',
        disciplines: [
          { name: '计算机科学与技术', assessment4: 'A+', assessment5: 'A+', majors: ['计算机科学与技术', '软件工程', '人工智能'] }
        ]
      },
      {
        name: '自动化系',
        disciplines: [
          { name: '控制科学与工程', assessment4: 'A+', assessment5: 'A+', majors: ['自动化'] }
        ]
      },
      {
        name: '航天航空学院',
        disciplines: [
          { name: '力学', assessment4: 'A+', assessment5: 'A+', majors: ['工程力学', '航空航天工程'] },
          { name: '航空宇航科学与技术', assessment4: 'B+', assessment5: 'A-', majors: ['飞行器设计与工程'] }
        ]
      },
      {
        name: '工程物理系',
        disciplines: [
          { name: '核科学与技术', assessment4: 'A+', assessment5: 'A+', majors: ['核工程与核技术', '工程物理'] }
        ]
      },
      {
        name: '材料学院',
        disciplines: [
          { name: '材料科学与工程', assessment4: 'A+', assessment5: 'A+', majors: ['材料科学与工程'] }
        ]
      },
      {
        name: '化学工程系',
        disciplines: [
          { name: '化学工程与技术', assessment4: 'A', assessment5: 'A+', majors: ['化学工程与工艺', '高分子材料与工程'] }
        ]
      },
      {
        name: '数学科学系',
        disciplines: [
          { name: '数学', assessment4: 'A', assessment5: 'A+', majors: ['数学与应用数学', '信息与计算科学'] }
        ]
      },
      {
        name: '物理系',
        disciplines: [
          { name: '物理学', assessment4: 'A', assessment5: 'A+', majors: ['物理学', '应用物理学'] }
        ]
      },
      {
        name: '化学系',
        disciplines: [
          { name: '化学', assessment4: 'A+', assessment5: 'A+', majors: ['化学', '化学生物学'] }
        ]
      },
      {
        name: '生命科学学院',
        disciplines: [
          { name: '生物学', assessment4: 'A+', assessment5: 'A+', majors: ['生物科学', '生物技术'] }
        ]
      },
      {
        name: '经济管理学院',
        disciplines: [
          { name: '应用经济学', assessment4: 'A-', assessment5: 'A', majors: ['经济学', '金融学', '会计学'] },
          { name: '工商管理', assessment4: 'A', assessment5: 'A+', majors: ['工商管理', '市场营销', '人力资源管理'] }
        ]
      },
      {
        name: '公共管理学院',
        disciplines: [
          { name: '公共管理', assessment4: 'A+', assessment5: 'A+', majors: ['行政管理', '公共事业管理'] }
        ]
      },
      {
        name: '法学院',
        disciplines: [
          { name: '法学', assessment4: 'A', assessment5: 'A+', majors: ['法学'] }
        ]
      },
      {
        name: '新闻与传播学院',
        disciplines: [
          { name: '新闻传播学', assessment4: 'A-', assessment5: 'A', majors: ['新闻学', '传播学'] }
        ]
      },
      {
        name: '人文学院',
        disciplines: [
          { name: '中国语言文学', assessment4: 'B+', assessment5: 'A-', majors: ['汉语言文学'] },
          { name: '哲学', assessment4: 'B+', assessment5: 'A-', majors: ['哲学'] },
          { name: '中国史', assessment4: 'B+', assessment5: 'A-', majors: ['历史学'] }
        ]
      },
      {
        name: '社会科学学院',
        disciplines: [
          { name: '政治学', assessment4: 'A-', assessment5: 'A', majors: ['政治学与行政学', '国际政治'] },
          { name: '社会学', assessment4: 'A-', assessment5: 'A', majors: ['社会学'] },
          { name: '心理学', assessment4: 'B+', assessment5: 'A-', majors: ['心理学'] }
        ]
      },
      {
        name: '美术学院',
        disciplines: [
          { name: '设计学', assessment4: 'A+', assessment5: 'A+', majors: ['艺术设计学', '视觉传达设计', '环境设计', '产品设计', '服装与服饰设计'] },
          { name: '美术学', assessment4: 'A-', assessment5: 'A', majors: ['绘画', '雕塑', '摄影', '中国画'] }
        ]
      },
      {
        name: '医学院',
        disciplines: [
          { name: '临床医学', assessment4: 'B', assessment5: 'B+', majors: ['临床医学'] },
          { name: '生物医学工程', assessment4: 'A-', assessment5: 'A', majors: ['生物医学工程'] }
        ]
      },
      {
        name: '药学院',
        disciplines: [
          { name: '药学', assessment4: 'A-', assessment5: 'A', majors: ['药学'] }
        ]
      }
    ],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '文科试验班类（文科各专业）（含社会学（等专业）专业）', type: '大类', subject: '历史类', quota: 0, score: 679, rank: 35, includes: '文科各专业；含社会学（等专业）专业' },
        { name: '文科试验班类（国家专项计划）（外文实验班）', type: '大类', subject: '历史类', quota: 0, score: 670, rank: 50, includes: '国家专项计划；外文实验班' },
        { name: '文科试验班类（国家专项计划）（新雅书院）', type: '大类', subject: '历史类', quota: 0, score: 670, rank: 50, includes: '国家专项计划；新雅书院' },
        { name: '临床医学类（含临床医学（协和）、临床医学（卓越医师科学家）专业）', type: '专业', subject: '物理类', quota: 0, score: 689, rank: 68, includes: '含临床医学（协和）、临床医学（卓越医师科学家）专业' },
        { name: '理科试验班（理科各专业）（含交叉工程（等理科各专业）专业）', type: '专业', subject: '物理类', quota: 0, score: 688, rank: 82, includes: '理科各专业；含交叉工程（等理科各专业）专业' },
        { name: '工科试验班（国家专项计划）（无穹书院）', type: '专业', subject: '物理类', quota: 0, score: 686, rank: 121, includes: '国家专项计划；无穹书院' },
        { name: '电子信息类', type: '专业', subject: '物理类', quota: 0, score: 685, rank: 146, includes: '' },
        { name: '工科试验班（国家专项计划）（为先书院）', type: '专业', subject: '物理类', quota: 0, score: 685, rank: 146, includes: '国家专项计划；为先书院' },
        { name: '工科试验班（国家专项计划）（智能制造与装备类）', type: '专业', subject: '物理类', quota: 0, score: 685, rank: 146, includes: '国家专项计划；智能制造与装备类' },
        { name: '工科试验班（国家专项计划）（笃实书院）', type: '专业', subject: '物理类', quota: 0, score: 684, rank: 159, includes: '国家专项计划；笃实书院' },
        { name: '工科试验班（国家专项计划）（自强书院）', type: '专业', subject: '物理类', quota: 0, score: 684, rank: 159, includes: '国家专项计划；自强书院' },
        { name: '临床医学类（国家专项计划）（卓越医师科学家）', type: '专业', subject: '物理类', quota: 0, score: 682, rank: 206, includes: '国家专项计划；卓越医师科学家' },
        { name: '理科试验班（国家专项计划）（数理类）', type: '专业', subject: '物理类', quota: 0, score: 682, rank: 206, includes: '国家专项计划；数理类' },
        { name: '工科试验班（国家专项计划）（水木书院）', type: '专业', subject: '物理类', quota: 0, score: 681, rank: 233, includes: '国家专项计划；水木书院' },
        { name: '工科试验班（国家专项计划）（秀钟书院）', type: '专业', subject: '物理类', quota: 0, score: 680, rank: 267, includes: '国家专项计划；秀钟书院' },
        { name: '工科试验班（国家专项计划）（建筑、规划、景观）', type: '专业', subject: '物理类', quota: 0, score: 678, rank: 330, includes: '国家专项计划；建筑、规划、景观' },
      ]
    },
  },
  {
    id: 2,
    name: '复旦大学',
    province: '上海市',
    city: '上海',
    batch: '一期',
    intro: '中国顶尖的综合性研究型大学，创办于1905年，人文、社科、自然科学、医学并重。',
    schools: [
      {
        name: '中国语言文学系',
        disciplines: [
          { name: '中国语言文学', assessment4: 'A', assessment5: 'A+', majors: ['汉语言文学', '汉语言'] }
        ]
      },
      {
        name: '历史学系',
        disciplines: [
          { name: '中国史', assessment4: 'A+', assessment5: 'A+', majors: ['历史学'] }
        ]
      },
      {
        name: '哲学学院',
        disciplines: [
          { name: '哲学', assessment4: 'A+', assessment5: 'A+', majors: ['哲学', '宗教学'] }
        ]
      },
      {
        name: '外国语言文学学院',
        disciplines: [
          { name: '外国语言文学', assessment4: 'A-', assessment5: 'A', majors: ['英语', '德语', '法语', '日语', '俄语', '朝鲜语'] }
        ]
      },
      {
        name: '新闻学院',
        disciplines: [
          { name: '新闻传播学', assessment4: 'A', assessment5: 'A+', majors: ['新闻学', '广播电视学', '广告学', '传播学'] }
        ]
      },
      {
        name: '法学院',
        disciplines: [
          { name: '法学', assessment4: 'B+', assessment5: 'A-', majors: ['法学'] }
        ]
      },
      {
        name: '经济学院',
        disciplines: [
          { name: '理论经济学', assessment4: 'A+', assessment5: 'A+', majors: ['经济学', '资源与环境经济学'] },
          { name: '应用经济学', assessment4: 'A', assessment5: 'A+', majors: ['金融学', '国际经济与贸易', '保险学'] }
        ]
      },
      {
        name: '管理学院',
        disciplines: [
          { name: '工商管理', assessment4: 'A', assessment5: 'A+', majors: ['工商管理', '会计学', '市场营销', '财务管理'] }
        ]
      },
      {
        name: '数学科学学院',
        disciplines: [
          { name: '数学', assessment4: 'A+', assessment5: 'A+', majors: ['数学与应用数学', '信息与计算科学'] }
        ]
      },
      {
        name: '物理学系',
        disciplines: [
          { name: '物理学', assessment4: 'A', assessment5: 'A+', majors: ['物理学'] }
        ]
      },
      {
        name: '化学系',
        disciplines: [
          { name: '化学', assessment4: 'A-', assessment5: 'A', majors: ['化学', '应用化学'] }
        ]
      },
      {
        name: '生命科学学院',
        disciplines: [
          { name: '生物学', assessment4: 'A-', assessment5: 'A', majors: ['生物科学', '生物技术', '生态学'] }
        ]
      },
      {
        name: '计算机科学技术学院',
        disciplines: [
          { name: '计算机科学与技术', assessment4: 'B+', assessment5: 'A-', majors: ['计算机科学与技术', '软件工程', '信息安全', '人工智能'] }
        ]
      },
      {
        name: '微电子学院',
        disciplines: [
          { name: '电子科学与技术', assessment4: 'A-', assessment5: 'A', majors: ['微电子科学与工程'] }
        ]
      },
      {
        name: '基础医学院',
        disciplines: [
          { name: '基础医学', assessment4: 'A', assessment5: 'A+', majors: ['基础医学'] },
          { name: '临床医学', assessment4: 'A', assessment5: 'A+', majors: ['临床医学', '麻醉学', '医学影像学'] }
        ]
      },
      {
        name: '公共卫生学院',
        disciplines: [
          { name: '公共卫生与预防医学', assessment4: 'A-', assessment5: 'A', majors: ['预防医学', '公共事业管理'] }
        ]
      },
      {
        name: '药学院',
        disciplines: [
          { name: '药学', assessment4: 'A-', assessment5: 'A', majors: ['药学'] }
        ]
      },
      {
        name: '护理学院',
        disciplines: [
          { name: '护理学', assessment4: 'B', assessment5: 'B+', majors: ['护理学'] }
        ]
      },
      {
        name: '环境科学与工程系',
        disciplines: [
          { name: '环境科学与工程', assessment4: 'B+', assessment5: 'A-', majors: ['环境科学', '环境工程'] }
        ]
      }
    ],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '人文科学试验班（上海市）（含中国语言文学类、历史学类、哲学类、文物与博物馆学专业）', type: '大类', subject: '历史类', quota: 0, score: 671, rank: 43, includes: '上海市；含中国语言文学类、历史学类、哲学类、文物与博物馆学专业' },
        { name: '法学（上海市）（含法学-经济学、法学-人工智能双学士学位）', type: '大类', subject: '历史类', quota: 0, score: 669, rank: 59, includes: '上海市；含法学-经济学、法学-人工智能双学士学位' },
        { name: '经济学类（上海市）（含经济学（数理经济方向）、经济学、经济学（国际项目UIPE）、金融学、国际经济与贸易（国际经济学、全球大数据与AI）、财政学（智慧税务与数智财政）、保险学（精算学与智能风险管理）专业；含数理经济拔尖班（融通项目）、经济学国际项目UIPE；含国际经济与贸易-数据科学与大数据技术、经济学（数理经济方向）-人工智能、经济学-人工智能、金融学-人工智能、财政学-人工智能双学士学位）', type: '大类', subject: '历史类', quota: 0, score: 667, rank: 76, includes: '上海市；含经济学（数理经济方向）、经济学、经济学（国际项目UIPE）、金融学、国际经济与贸易（国际经济学、全球大数据与AI）、财政学（智慧税务与数智财政）、保险学（精算学与智能风险管理）专业；含数理经济拔尖班（融通项目）、经济学国际项目UIPE；含国际经济与贸易-数据科学与大数据技术、经济学（数理经济方向）-人工智能、经济学-人工智能、金融学-人工智能、财政学-人工智能双学士学位' },
        { name: '社会科学试验班（国家专项计划）（国务学院）', type: '大类', subject: '历史类', quota: 0, score: 663, rank: 129, includes: '国家专项计划；国务学院' },
        { name: '工科试验班（上海市）（相辉学堂香农计划）（含微电子科学与工程、人工智能、智能科学与技术、生物医学工程、电子信息科学与技术、电子科学与技术专业；融通项目。含集成电路与微纳电子创新学院、计算与智能创新学院、智能机器人与先进制造创新学院、生物医学工程创新学院、未来信息创新学院、智能材料与能源创新学院，领军人才班）', type: '专业', subject: '物理类', quota: 0, score: 686, rank: 121, includes: '上海市；相辉学堂香农计划；含微电子科学与工程、人工智能、智能科学与技术、生物医学工程、电子信息科学与技术、电子科学与技术专业；融通项目。含集成电路与微纳电子创新学院、计算与智能创新学院、智能机器人与先进制造创新学院、生物医学工程创新学院、未来信息创新学院、智能材料与能源创新学院，领军人才班' },
        { name: '理科试验班（上海市）（相辉学堂相辉计划）（含数学与应用数学、物理学、化学、生物科学专业；融通项目。含数学英才班、物理英才班、化学英才班、生物科学英才班、数理经济拔尖班）', type: '专业', subject: '物理类', quota: 0, score: 684, rank: 159, includes: '上海市；相辉学堂相辉计划；含数学与应用数学、物理学、化学、生物科学专业；融通项目。含数学英才班、物理英才班、化学英才班、生物科学英才班、数理经济拔尖班' },
        { name: '工科试验班（上海市）（集成电路与微纳电子创新学院）（含微电子科学与工程专业；含集成电路产教融合班（融通项目）；含微电子科学与工程（集成电路方向）-信息与计算科学专业双学士学位）', type: '专业', subject: '物理类', quota: 0, score: 683, rank: 181, includes: '上海市；集成电路与微纳电子创新学院；含微电子科学与工程专业；含集成电路产教融合班（融通项目）；含微电子科学与工程（集成电路方向）-信息与计算科学专业双学士学位' },
        { name: '工科试验班（上海市）（计算与智能领军人才班）（含人工智能专业；融通项目）', type: '专业', subject: '物理类', quota: 0, score: 682, rank: 206, includes: '上海市；计算与智能领军人才班；含人工智能专业；融通项目' },
        { name: '工科试验班（上海市）（未来信息领军人才班）（含电子信息科学与技术专业；融通项目；含“光子计划”院士班）', type: '专业', subject: '物理类', quota: 0, score: 681, rank: 233, includes: '上海市；未来信息领军人才班；含电子信息科学与技术专业；融通项目；含“光子计划”院士班' },
        { name: '计算机科学与技术（上海市）（拔尖人才试验班）', type: '专业', subject: '物理类', quota: 0, score: 681, rank: 233, includes: '上海市；拔尖人才试验班' },
        { name: '工科试验班（上海市）（未来信息创新学院）（含电子信息科学与技术、通信工程、光电信息科学与工程专业；含未来信息产教融合班（融通项目）；含光电信息科学与工程-信息与计算科学（人工智能方向）、通信工程-信息与计算科学（人工智能方向）、电子信息科学与技术-信息与计算科学（人工智能方向）双学士学位）', type: '专业', subject: '物理类', quota: 0, score: 680, rank: 267, includes: '上海市；未来信息创新学院；含电子信息科学与技术、通信工程、光电信息科学与工程专业；含未来信息产教融合班（融通项目）；含光电信息科学与工程-信息与计算科学（人工智能方向）、通信工程-信息与计算科学（人工智能方向）、电子信息科学与技术-信息与计算科学（人工智能方向）双学士学位' },
        { name: '物理学类', type: '专业', subject: '物理类', quota: 0, score: 675, rank: 443, includes: '' },
        { name: '核工程与核技术（国家专项计划）（含核物理卢鹤绂班、核技术吴征铠班）', type: '专业', subject: '物理类', quota: 0, score: 666, rank: 1013, includes: '国家专项计划；含核物理卢鹤绂班、核技术吴征铠班' },
      ]
    },
  },
  {
    id: 3,
    name: '上海交通大学',
    province: '上海市',
    city: '上海',
    batch: '一期',
    intro: '中国顶尖的综合性研究型大学，创办于1896年，工科、医学、管理学科实力突出。',
    schools: [
      {
        name: '船舶海洋与建筑工程学院',
        disciplines: [
          { name: '船舶与海洋工程', assessment4: 'A+', assessment5: 'A+', majors: ['船舶与海洋工程'] },
          { name: '土木工程', assessment4: 'B+', assessment5: 'A-', majors: ['土木工程'] },
          { name: '力学', assessment4: 'B+', assessment5: 'A-', majors: ['工程力学'] }
        ]
      },
      {
        name: '机械与动力工程学院',
        disciplines: [
          { name: '机械工程', assessment4: 'A+', assessment5: 'A+', majors: ['机械工程', '机械设计制造及其自动化', '车辆工程'] },
          { name: '动力工程及工程热物理', assessment4: 'A', assessment5: 'A+', majors: ['能源与动力工程'] }
        ]
      },
      {
        name: '电子信息与电气工程学院',
        disciplines: [
          { name: '电子科学与技术', assessment4: 'A-', assessment5: 'A', majors: ['电子科学与技术', '微电子科学与工程'] },
          { name: '信息与通信工程', assessment4: 'A', assessment5: 'A', majors: ['通信工程', '信息工程'] },
          { name: '计算机科学与技术', assessment4: 'A', assessment5: 'A+', majors: ['计算机科学与技术', '软件工程', '人工智能'] },
          { name: '控制科学与工程', assessment4: 'A', assessment5: 'A+', majors: ['自动化'] },
          { name: '电气工程', assessment4: 'B+', assessment5: 'A-', majors: ['电气工程及其自动化'] }
        ]
      },
      {
        name: '材料科学与工程学院',
        disciplines: [
          { name: '材料科学与工程', assessment4: 'A', assessment5: 'A+', majors: ['材料科学与工程'] }
        ]
      },
      {
        name: '化学化工学院',
        disciplines: [
          { name: '化学', assessment4: 'A-', assessment5: 'A', majors: ['化学', '应用化学'] },
          { name: '化学工程与技术', assessment4: 'A-', assessment5: 'A', majors: ['化学工程与工艺'] }
        ]
      },
      {
        name: '数学科学学院',
        disciplines: [
          { name: '数学', assessment4: 'A', assessment5: 'A', majors: ['数学与应用数学', '统计学'] }
        ]
      },
      {
        name: '物理与天文学院',
        disciplines: [
          { name: '物理学', assessment4: 'A', assessment5: 'A+', majors: ['物理学', '应用物理学'] }
        ]
      },
      {
        name: '生命科学技术学院',
        disciplines: [
          { name: '生物学', assessment4: 'A+', assessment5: 'A+', majors: ['生物科学', '生物技术', '生物信息学'] }
        ]
      },
      {
        name: '安泰经济与管理学院',
        disciplines: [
          { name: '应用经济学', assessment4: 'A-', assessment5: 'A', majors: ['经济学', '金融学', '国际经济与贸易'] },
          { name: '工商管理', assessment4: 'A+', assessment5: 'A+', majors: ['工商管理', '会计学', '市场营销'] }
        ]
      },
      {
        name: '凯原法学院',
        disciplines: [
          { name: '法学', assessment4: 'A-', assessment5: 'A', majors: ['法学'] }
        ]
      },
      {
        name: '医学院',
        disciplines: [
          { name: '临床医学', assessment4: 'A+', assessment5: 'A+', majors: ['临床医学', '麻醉学', '口腔医学'] },
          { name: '基础医学', assessment4: 'A-', assessment5: 'A', majors: ['基础医学'] },
          { name: '口腔医学', assessment4: 'B+', assessment5: 'A-', majors: ['口腔医学'] },
          { name: '公共卫生与预防医学', assessment4: 'B+', assessment5: 'A-', majors: ['预防医学'] }
        ]
      },
      {
        name: '药学院',
        disciplines: [
          { name: '药学', assessment4: 'A-', assessment5: 'A', majors: ['药学', '临床药学'] }
        ]
      },
      {
        name: '外国语学院',
        disciplines: [
          { name: '外国语言文学', assessment4: 'A', assessment5: 'A', majors: ['英语', '日语', '德语'] }
        ]
      },
      {
        name: '环境科学与工程学院',
        disciplines: [
          { name: '环境科学与工程', assessment4: 'A-', assessment5: 'A', majors: ['环境工程', '环境科学'] }
        ]
      },
      {
        name: '生物医学工程学院',
        disciplines: [
          { name: '生物医学工程', assessment4: 'A', assessment5: 'A+', majors: ['生物医学工程'] }
        ]
      },
      {
        name: '航空航天学院',
        disciplines: [
          { name: '航空宇航科学与技术', assessment4: 'B', assessment5: 'B+', majors: ['航空航天工程'] }
        ]
      }
    ],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '法学试验班（含双学士学位项目）（含法学专业；含法学-经济学双学士学位项目）', type: '大类', subject: '历史类', quota: 0, score: 667, rank: 76, includes: '含双学士学位项目；含法学专业；含法学-经济学双学士学位项目' },
        { name: '人文科学试验班（国务学院，含双学士学位项目）（含行政管理专业；含行政管理-法学双学士学位项目。可选拔至PPE专业方向）', type: '大类', subject: '历史类', quota: 0, score: 663, rank: 129, includes: '国务学院，含双学士学位项目；含行政管理专业；含行政管理-法学双学士学位项目。可选拔至PPE专业方向' },
        { name: '人文科学试验班（人文学院）（含汉语言文学（中外文化交流）专业）', type: '大类', subject: '历史类', quota: 0, score: 660, rank: 167, includes: '人文学院；含汉语言文学（中外文化交流）专业' },
        { name: '人文科学试验班（媒传学院，传播方向）（含传播学专业）', type: '大类', subject: '历史类', quota: 0, score: 660, rank: 167, includes: '媒传学院，传播方向；含传播学专业' },
        { name: '电子信息类（计算机永强试验班）（含计算机科学与技术、软件工程、信息安全专业）', type: '专业', subject: '物理类', quota: 0, score: 688, rank: 82, includes: '计算机永强试验班；含计算机科学与技术、软件工程、信息安全专业' },
        { name: '人工智能（拔尖英才试点班）', type: '专业', subject: '物理类', quota: 0, score: 687, rank: 99, includes: '拔尖英才试点班' },
        { name: '电子信息类（IEEE试点班，含双学士学位项目）（含计算机科学与技术、信息工程、信息安全、自动化专业；含电子信息类（IEEE试点班）-数学与应用数学双学士学位项目）', type: '专业', subject: '物理类', quota: 0, score: 686, rank: 121, includes: 'IEEE试点班，含双学士学位项目；含计算机科学与技术、信息工程、信息安全、自动化专业；含电子信息类（IEEE试点班）-数学与应用数学双学士学位项目' },
        { name: '电子信息类（集成电路英才班）（含微电子科学与工程、电子科学与技术、信息工程专业）', type: '专业', subject: '物理类', quota: 0, score: 686, rank: 121, includes: '集成电路英才班；含微电子科学与工程、电子科学与技术、信息工程专业' },
        { name: '机械类（钱学森工程科学试点班，含双学士学位项目）（含机械工程、能源与动力工程专业；含机械动力类-数学与应用数学双学士学位项目、能源与动力工程-化学双学士学位项目）', type: '专业', subject: '物理类', quota: 0, score: 682, rank: 206, includes: '钱学森工程科学试点班，含双学士学位项目；含机械工程、能源与动力工程专业；含机械动力类-数学与应用数学双学士学位项目、能源与动力工程-化学双学士学位项目' },
        { name: '理科试验班类（数学方向，含双学士学位项目）（含数学与应用数学、统计学专业；含数学与应用数学-人工智能双学士学位项目）', type: '专业', subject: '物理类', quota: 0, score: 680, rank: 267, includes: '数学方向，含双学士学位项目；含数学与应用数学、统计学专业；含数学与应用数学-人工智能双学士学位项目' },
        { name: '工科试验班类（信息类）（含计算机科学与技术（计算机学院）、信息安全（计算机学院）、软件工程（计算机学院）、微电子科学与工程（集成电路学院）、信息工程（集成电路学院）、电子科学与技术（集成电路学院）、自动化（自动化与感知学院）、智能感知工程（自动化与感知学院）、电气工程及其自动化（电气工程学院）专业；8月可自愿申请参加浦江国际学院（原密西根学院）、巴黎卓越工程师学院、健康科学与技术等专业提前分流选拔）', type: '专业', subject: '物理类', quota: 0, score: 680, rank: 267, includes: '信息类；含计算机科学与技术（计算机学院）、信息安全（计算机学院）、软件工程（计算机学院）、微电子科学与工程（集成电路学院）、信息工程（集成电路学院）、电子科学与技术（集成电路学院）、自动化（自动化与感知学院）、智能感知工程（自动化与感知学院）、电气工程及其自动化（电气工程学院）专业；8月可自愿申请参加浦江国际学院（原密西根学院）、巴黎卓越工程师学院、健康科学与技术等专业提前分流选拔' },
        { name: '工科试验班类（国家专项计划）（溥渊未来技术学院，健康方向）', type: '专业', subject: '物理类', quota: 0, score: 678, rank: 330, includes: '国家专项计划；溥渊未来技术学院，健康方向' },
        { name: '经济管理试验班（国家专项计划）（含双学士学位项目）', type: '专业', subject: '物理类', quota: 0, score: 674, rank: 501, includes: '国家专项计划；含双学士学位项目' },
        { name: '电子信息类（中外合作办学）（浦江国际学院，原密西根学院）（含机械工程（中外合作办学）、电子与计算机工程（中外合作办学）专业；含电子与计算机工程-工商管理双学士学位项目）（中外合作办学）', type: '专业', subject: '物理类', quota: 0, score: 669, rank: 788, includes: '中外合作办学；浦江国际学院，原密西根学院；含机械工程（中外合作办学）、电子与计算机工程（中外合作办学）专业；含电子与计算机工程-工商管理双学士学位项目' },
        { name: '工科试验班类', type: '专业', subject: '物理类', quota: 0, score: 668, rank: 868, includes: '' },
      ]
    },
  },
  {
    id: 4,
    name: '浙江大学',
    province: '浙江省',
    city: '杭州',
    batch: '一期',
    intro: '中国最顶尖的综合性研究型大学之一，创办于1897年，学科门类齐全，工科、农学实力雄厚。',
    schools: [
      {
        name: '数学科学学院',
        disciplines: [
          { name: '数学', assessment4: 'A-', assessment5: 'A', majors: ['数学与应用数学', '信息与计算科学', '统计学'] }
        ]
      },
      {
        name: '物理学系',
        disciplines: [
          { name: '物理学', assessment4: 'A-', assessment5: 'A', majors: ['物理学'] }
        ]
      },
      {
        name: '化学系',
        disciplines: [
          { name: '化学', assessment4: 'A-', assessment5: 'A', majors: ['化学', '应用化学'] }
        ]
      },
      {
        name: '生命科学学院',
        disciplines: [
          { name: '生物学', assessment4: 'A-', assessment5: 'A', majors: ['生物科学', '生物技术'] },
          { name: '生态学', assessment4: 'A+', assessment5: 'A+', majors: ['生态学'] }
        ]
      },
      {
        name: '机械工程学院',
        disciplines: [
          { name: '机械工程', assessment4: 'A', assessment5: 'A+', majors: ['机械工程', '机械设计制造及其自动化'] }
        ]
      },
      {
        name: '材料科学与工程学院',
        disciplines: [
          { name: '材料科学与工程', assessment4: 'A', assessment5: 'A', majors: ['材料科学与工程'] }
        ]
      },
      {
        name: '能源工程学院',
        disciplines: [
          { name: '动力工程及工程热物理', assessment4: 'A', assessment5: 'A+', majors: ['能源与动力工程'] }
        ]
      },
      {
        name: '电气工程学院',
        disciplines: [
          { name: '电气工程', assessment4: 'A-', assessment5: 'A', majors: ['电气工程及其自动化'] }
        ]
      },
      {
        name: '信息与电子工程学院',
        disciplines: [
          { name: '电子科学与技术', assessment4: 'A-', assessment5: 'A', majors: ['电子信息工程', '电子科学与技术', '微电子科学与工程'] },
          { name: '信息与通信工程', assessment4: 'B+', assessment5: 'A-', majors: ['通信工程'] }
        ]
      },
      {
        name: '计算机科学与技术学院',
        disciplines: [
          { name: '计算机科学与技术', assessment4: 'A+', assessment5: 'A+', majors: ['计算机科学与技术', '软件工程', '人工智能', '信息安全'] }
        ]
      },
      {
        name: '控制科学与工程学院',
        disciplines: [
          { name: '控制科学与工程', assessment4: 'A+', assessment5: 'A+', majors: ['自动化'] }
        ]
      },
      {
        name: '光电科学与工程学院',
        disciplines: [
          { name: '光学工程', assessment4: 'A+', assessment5: 'A+', majors: ['光电信息科学与工程'] }
        ]
      },
      {
        name: '建筑工程学院',
        disciplines: [
          { name: '土木工程', assessment4: 'A', assessment5: 'A', majors: ['土木工程'] },
          { name: '建筑学', assessment4: 'B+', assessment5: 'A-', majors: ['建筑学', '城乡规划'] }
        ]
      },
      {
        name: '化学工程与生物工程学院',
        disciplines: [
          { name: '化学工程与技术', assessment4: 'A', assessment5: 'A+', majors: ['化学工程与工艺'] }
        ]
      },
      {
        name: '环境与资源学院',
        disciplines: [
          { name: '环境科学与工程', assessment4: 'A', assessment5: 'A+', majors: ['环境工程', '环境科学'] },
          { name: '农业资源与环境', assessment4: 'A+', assessment5: 'A+', majors: ['农业资源与环境'] }
        ]
      },
      {
        name: '农业与生物技术学院',
        disciplines: [
          { name: '园艺学', assessment4: 'A+', assessment5: 'A+', majors: ['园艺'] },
          { name: '植物保护', assessment4: 'A+', assessment5: 'A+', majors: ['植物保护'] },
          { name: '作物学', assessment4: 'A', assessment5: 'A+', majors: ['农学'] }
        ]
      },
      {
        name: '动物科学学院',
        disciplines: [
          { name: '畜牧学', assessment4: 'A-', assessment5: 'A', majors: ['动物科学'] },
          { name: '兽医学', assessment4: 'B+', assessment5: 'A-', majors: ['动物医学'] }
        ]
      },
      {
        name: '医学院',
        disciplines: [
          { name: '临床医学', assessment4: 'A+', assessment5: 'A+', majors: ['临床医学', '麻醉学', '医学影像学'] },
          { name: '基础医学', assessment4: 'A-', assessment5: 'A', majors: ['基础医学'] },
          { name: '药学', assessment4: 'A', assessment5: 'A+', majors: ['药学'] },
          { name: '公共卫生与预防医学', assessment4: 'B', assessment5: 'B+', majors: ['预防医学'] }
        ]
      },
      {
        name: '经济学院',
        disciplines: [
          { name: '理论经济学', assessment4: 'A-', assessment5: 'A', majors: ['经济学'] },
          { name: '应用经济学', assessment4: 'B+', assessment5: 'A-', majors: ['金融学', '国际经济与贸易'] }
        ]
      },
      {
        name: '管理学院',
        disciplines: [
          { name: '工商管理', assessment4: 'A-', assessment5: 'A', majors: ['工商管理', '会计学', '市场营销', '财务管理'] }
        ]
      },
      {
        name: '光华法学院',
        disciplines: [
          { name: '法学', assessment4: 'A-', assessment5: 'A', majors: ['法学'] }
        ]
      },
      {
        name: '教育学院',
        disciplines: [
          { name: '教育学', assessment4: 'A-', assessment5: 'A', majors: ['教育学'] }
        ]
      },
      {
        name: '人文学院',
        disciplines: [
          { name: '中国语言文学', assessment4: 'A', assessment5: 'A+', majors: ['汉语言文学', '古典文献学'] },
          { name: '中国史', assessment4: 'B+', assessment5: 'A-', majors: ['历史学'] },
          { name: '哲学', assessment4: 'B+', assessment5: 'A-', majors: ['哲学'] }
        ]
      },
      {
        name: '外国语学院',
        disciplines: [
          { name: '外国语言文学', assessment4: 'A', assessment5: 'A+', majors: ['英语', '德语', '法语', '日语', '俄语'] }
        ]
      }
    ],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '社会科学试验班（杭州市）（竺可桢学院人文社科实验班）（含经济学、财政学、金融学、国际经济与贸易、教育学、会计学、工商管理、社会学、农林经济管理、行政管理、劳动与社会保障、土地资源管理、法学专业）', type: '大类', subject: '历史类', quota: 0, score: 665, rank: 96, includes: '杭州市；竺可桢学院人文社科实验班；含经济学、财政学、金融学、国际经济与贸易、教育学、会计学、工商管理、社会学、农林经济管理、行政管理、劳动与社会保障、土地资源管理、法学专业' },
        { name: '社会科学试验班（杭州市）（含数字金融双学士学位项目）（含经济学、财政学、金融学、国际经济与贸易、教育学、会计学、工商管理、社会学、农林经济管理、行政管理、劳动与社会保障、土地资源管理、法学专业；含数字金融（金融学-数学与应用数学）双学士学位项目）', type: '大类', subject: '历史类', quota: 0, score: 659, rank: 181, includes: '杭州市；含数字金融双学士学位项目；含经济学、财政学、金融学、国际经济与贸易、教育学、会计学、工商管理、社会学、农林经济管理、行政管理、劳动与社会保障、土地资源管理、法学专业；含数字金融（金融学-数学与应用数学）双学士学位项目' },
        { name: '社会科学试验班（杭州市）（国家专项计划）（含数字金融双学士学位项目）', type: '大类', subject: '历史类', quota: 0, score: 658, rank: 198, includes: '杭州市；国家专项计划；含数字金融双学士学位项目' },
        { name: '人文科学试验班（杭州市）（含古典文献学、汉语言文学、哲学、历史学、文物与博物馆学、考古学专业）', type: '大类', subject: '历史类', quota: 0, score: 658, rank: 198, includes: '杭州市；含古典文献学、汉语言文学、哲学、历史学、文物与博物馆学、考古学专业' },
        { name: '外国语言文学类（杭州市）（含涉外法治双学士学位项目）（含英语、翻译专业；含涉外法治（英语-法学）双学士学位项目）', type: '大类', subject: '历史类', quota: 0, score: 657, rank: 217, includes: '杭州市；含涉外法治双学士学位项目；含英语、翻译专业；含涉外法治（英语-法学）双学士学位项目' },
        { name: '人文科学试验班（杭州市）', type: '大类', subject: '历史类', quota: 0, score: 655, rank: 266, includes: '杭州市；国家专项计划' },
        { name: '新闻传播学类（杭州市）（国家专项计划）（含智能与国际传播创新班）', type: '大类', subject: '历史类', quota: 0, score: 649, rank: 435, includes: '杭州市；国家专项计划；含智能与国际传播创新班' },
        { name: '工科试验班（杭州市）（竺可桢学院图灵班）（含计算机科学与技术专业）', type: '专业', subject: '物理类', quota: 0, score: 684, rank: 159, includes: '杭州市；竺可桢学院图灵班；含计算机科学与技术专业' },
        { name: '人工智能（杭州市）', type: '专业', subject: '物理类', quota: 0, score: 682, rank: 206, includes: '杭州市' },
        { name: '工科试验班（杭州市）（EE类）（含电气工程及其自动化（爱迪生班）、电子信息工程（爱迪生班）、电子科学与技术（香农班）、信息工程（香农班）专业）', type: '专业', subject: '物理类', quota: 0, score: 680, rank: 267, includes: '杭州市；EE类；含电气工程及其自动化（爱迪生班）、电子信息工程（爱迪生班）、电子科学与技术（香农班）、信息工程（香农班）专业' },
        { name: '工科试验班（杭州市）（智能制造与机器人创新班）（含机械工程专业）', type: '专业', subject: '物理类', quota: 0, score: 680, rank: 267, includes: '杭州市；智能制造与机器人创新班；含机械工程专业' },
        { name: '工科试验班（杭州市）（信息）（含计算机科学与技术、信息安全、软件工程、工业设计、光电信息科学与工程、电子科学与技术、微电子科学与工程、信息工程、自动化、生物医学工程专业）', type: '专业', subject: '物理类', quota: 0, score: 679, rank: 297, includes: '杭州市；信息；含计算机科学与技术、信息安全、软件工程、工业设计、光电信息科学与工程、电子科学与技术、微电子科学与工程、信息工程、自动化、生物医学工程专业' },
        { name: '工科试验班（杭州市）（国家专项计划）（信息）', type: '专业', subject: '物理类', quota: 0, score: 677, rank: 361, includes: '杭州市；国家专项计划；信息' },
        { name: '工科试验班（杭州市）', type: '专业', subject: '物理类', quota: 0, score: 672, rank: 622, includes: '杭州市；国家专项计划' },
        { name: '工科试验班（杭州市）（国家专项计划）（材料、化工与高分子）', type: '专业', subject: '物理类', quota: 0, score: 670, rank: 733, includes: '杭州市；国家专项计划；材料、化工与高分子' },
        { name: '工科试验班（杭州市）（国家专项计划）（智慧城市与建筑工程）', type: '专业', subject: '物理类', quota: 0, score: 665, rank: 1135, includes: '杭州市；国家专项计划；智慧城市与建筑工程' },
        { name: '工科试验班（杭州市）（国家专项计划）（海洋，含智慧海洋卓越班）', type: '专业', subject: '物理类', quota: 0, score: 654, rank: 2505, includes: '杭州市；国家专项计划；海洋，含智慧海洋卓越班' },
        { name: '工科试验班（ZJUUIUC联合学院）（中外合作办学）（中外合作办学，ZJUUIUC联合学院）（含机械工程、电子与计算机工程、电气工程及其自动化、土木工程专业；在海宁国际校区就读，同时获浙江大学毕业证书、学士学位证书和美国伊利诺伊大学厄巴纳香槟校区学士学位证书，要求学生在读期间不具有合作方学校所在国的移民身份）（ZJUUIUC联合学院中外合作办学）', type: '专业', subject: '物理类', quota: 0, score: 650, rank: 3294, includes: 'ZJUUIUC联合学院；中外合作办学；中外合作办学，ZJUUIUC联合学院；含机械工程、电子与计算机工程、电气工程及其自动化、土木工程专业；在海宁国际校区就读，同时获浙江大学毕业证书、学士学位证书和美国伊利诺伊大学厄巴纳香槟校区学士学位证书，要求学生在读期间不具有合作方学校所在国的移民身份' },
      ]
    },
  },
  {
    id: 5,
    name: '南京大学',
    province: '江苏省',
    city: '南京',
    batch: '一期',
    intro: '中国最顶尖的综合性研究型大学之一，创办于1902年，文理基础学科实力全国领先。',
    schools: [
      {
        name: '文学院',
        disciplines: [
          { name: '中国语言文学', assessment4: 'A', assessment5: 'A+', majors: ['汉语言文学', '古典文献学'] }
        ]
      },
      {
        name: '历史学院',
        disciplines: [
          { name: '中国史', assessment4: 'A', assessment5: 'A+', majors: ['历史学', '考古学'] },
          { name: '世界史', assessment4: 'B+', assessment5: 'A-', majors: ['世界史'] }
        ]
      },
      {
        name: '哲学系',
        disciplines: [
          { name: '哲学', assessment4: 'A', assessment5: 'A+', majors: ['哲学'] }
        ]
      },
      {
        name: '外国语学院',
        disciplines: [
          { name: '外国语言文学', assessment4: 'A', assessment5: 'A+', majors: ['英语', '法语', '德语', '日语', '俄语', '西班牙语'] }
        ]
      },
      {
        name: '法学院',
        disciplines: [
          { name: '法学', assessment4: 'A-', assessment5: 'A', majors: ['法学'] }
        ]
      },
      {
        name: '商学院',
        disciplines: [
          { name: '理论经济学', assessment4: 'A-', assessment5: 'A', majors: ['经济学'] },
          { name: '应用经济学', assessment4: 'B+', assessment5: 'A-', majors: ['金融学', '国际经济与贸易'] },
          { name: '工商管理', assessment4: 'A', assessment5: 'A', majors: ['工商管理', '会计学', '市场营销'] }
        ]
      },
      {
        name: '数学系',
        disciplines: [
          { name: '数学', assessment4: 'A-', assessment5: 'A', majors: ['数学与应用数学', '信息与计算科学'] }
        ]
      },
      {
        name: '物理学院',
        disciplines: [
          { name: '物理学', assessment4: 'A', assessment5: 'A+', majors: ['物理学', '应用物理学'] }
        ]
      },
      {
        name: '化学化工学院',
        disciplines: [
          { name: '化学', assessment4: 'A-', assessment5: 'A', majors: ['化学', '应用化学'] }
        ]
      },
      {
        name: '生命科学学院',
        disciplines: [
          { name: '生物学', assessment4: 'A', assessment5: 'A+', majors: ['生物科学', '生物技术'] },
          { name: '生态学', assessment4: 'A-', assessment5: 'A', majors: ['生态学'] }
        ]
      },
      {
        name: '地球科学与工程学院',
        disciplines: [
          { name: '地质学', assessment4: 'A+', assessment5: 'A+', majors: ['地质学', '地球化学'] }
        ]
      },
      {
        name: '地理与海洋科学学院',
        disciplines: [
          { name: '地理学', assessment4: 'A-', assessment5: 'A', majors: ['地理科学', '人文地理与城乡规划', '地理信息科学'] }
        ]
      },
      {
        name: '大气科学学院',
        disciplines: [
          { name: '大气科学', assessment4: 'A+', assessment5: 'A+', majors: ['大气科学', '应用气象学'] }
        ]
      },
      {
        name: '计算机科学与技术系',
        disciplines: [
          { name: '计算机科学与技术', assessment4: 'A', assessment5: 'A+', majors: ['计算机科学与技术', '人工智能'] }
        ]
      },
      {
        name: '电子科学与工程学院',
        disciplines: [
          { name: '电子科学与技术', assessment4: 'A-', assessment5: 'A', majors: ['电子信息工程', '电子科学与技术', '通信工程'] }
        ]
      },
      {
        name: '环境学院',
        disciplines: [
          { name: '环境科学与工程', assessment4: 'A', assessment5: 'A+', majors: ['环境科学', '环境工程'] }
        ]
      },
      {
        name: '天文与空间科学学院',
        disciplines: [
          { name: '天文学', assessment4: 'A+', assessment5: 'A+', majors: ['天文学'] }
        ]
      },
      {
        name: '医学院',
        disciplines: [
          { name: '临床医学', assessment4: 'B', assessment5: 'B+', majors: ['临床医学'] }
        ]
      },
      {
        name: '新闻传播学院',
        disciplines: [
          { name: '新闻传播学', assessment4: 'B+', assessment5: 'A-', majors: ['新闻学', '广播电视学', '广告学'] }
        ]
      }
    ],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '人文科学试验班（含汉语言文学、哲学、汉语国际教育、新闻学、广播电视学、广告学、历史学、考古学、考古学（文物鉴定方向）专业）', type: '大类', subject: '历史类', quota: 0, score: 660, rank: 167, includes: '含汉语言文学、哲学、汉语国际教育、新闻学、广播电视学、广告学、历史学、考古学、考古学（文物鉴定方向）专业' },
        { name: '经济管理试验班（数智经济与管理）（含经济学、金融学、保险学、经济学（产业经济学方向）、工商管理类、国际经济与贸易、财政学专业）', type: '大类', subject: '历史类', quota: 0, score: 659, rank: 181, includes: '数智经济与管理；含经济学、金融学、保险学、经济学（产业经济学方向）、工商管理类、国际经济与贸易、财政学专业' },
        { name: '社会科学试验班（含法学、社会学类、公共管理类、图书馆学、档案学、编辑出版学专业；专业分流方向详见我校招生章程）', type: '大类', subject: '历史类', quota: 0, score: 659, rank: 181, includes: '含法学、社会学类、公共管理类、图书馆学、档案学、编辑出版学专业；专业分流方向详见我校招生章程' },
        { name: '社会科学试验班', type: '大类', subject: '历史类', quota: 0, score: 651, rank: 378, includes: '' },
        { name: '经济管理试验班（国家专项计划）（数智经济与管理）', type: '大类', subject: '历史类', quota: 0, score: 649, rank: 435, includes: '国家专项计划；数智经济与管理' },
        { name: '人文科学试验班', type: '大类', subject: '历史类', quota: 0, score: 649, rank: 435, includes: '' },
        { name: '人工智能', type: '专业', subject: '物理类', quota: 0, score: 682, rank: 206, includes: '' },
        { name: '理科试验班（匡亚明学院大理科班）（含数学与应用数学、信息与计算科学、物理学、化学、天文学、生物科学、生物科学（生物化学与分子生物学方向）、计算机科学与技术、计算机科学与技术（脑科学与AI方向）专业）', type: '专业', subject: '物理类', quota: 0, score: 679, rank: 297, includes: '匡亚明学院大理科班；含数学与应用数学、信息与计算科学、物理学、化学、天文学、生物科学、生物科学（生物化学与分子生物学方向）、计算机科学与技术、计算机科学与技术（脑科学与AI方向）专业' },
        { name: '计算机科学与技术', type: '专业', subject: '物理类', quota: 0, score: 678, rank: 330, includes: '' },
        { name: '软件工程', type: '专业', subject: '物理类', quota: 0, score: 677, rank: 361, includes: '' },
        { name: '电子信息类（含电子信息科学与技术、通信工程、微电子科学与工程、集成电路设计与集成系统专业）', type: '专业', subject: '物理类', quota: 0, score: 677, rank: 361, includes: '含电子信息科学与技术、通信工程、微电子科学与工程、集成电路设计与集成系统专业' },
        { name: '计算机科学与技术（计算机金融实验班）（含双学士学位）', type: '专业', subject: '物理类', quota: 0, score: 676, rank: 395, includes: '计算机金融实验班；含双学士学位' },
        { name: '软件工程（软工经济创新班）（含双学士学位）', type: '专业', subject: '物理类', quota: 0, score: 675, rank: 443, includes: '软工经济创新班；含双学士学位' },
        { name: '理科试验班类（数理科学类）（含数学与应用数学、信息与计算科学、统计学、物理学、应用物理学、声学、天文学、大气科学、应用气象学专业）', type: '专业', subject: '物理类', quota: 0, score: 675, rank: 443, includes: '数理科学类；含数学与应用数学、信息与计算科学、统计学、物理学、应用物理学、声学、天文学、大气科学、应用气象学专业' },
        { name: '工科试验班（含光电信息科学与工程、生物医学工程、工业工程类、材料物理、材料化学、新能源科学与工程专业）', type: '专业', subject: '物理类', quota: 0, score: 675, rank: 443, includes: '含光电信息科学与工程、生物医学工程、工业工程类、材料物理、材料化学、新能源科学与工程专业' },
        { name: '技术科学试验班（含智能科学与技术、集成电路设计与集成系统、数字经济、自动化（机器人方向）专业）', type: '专业', subject: '物理类', quota: 0, score: 675, rank: 443, includes: '含智能科学与技术、集成电路设计与集成系统、数字经济、自动化（机器人方向）专业' },
        { name: '理科试验班类（化学与生命科学类）（含生物科学、生物技术、生态学、化学、应用化学专业）', type: '专业', subject: '物理类', quota: 0, score: 674, rank: 501, includes: '化学与生命科学类；含生物科学、生物技术、生态学、化学、应用化学专业' },
        { name: '理科试验班类（国家专项计划）（化学与生命科学类）', type: '专业', subject: '物理类', quota: 0, score: 659, rank: 1816, includes: '国家专项计划；化学与生命科学类' },
      ]
    },
  },
  {
    id: 6,
    name: '武汉大学',
    province: '湖北省',
    city: '武汉',
    batch: '二期',
    intro: '中国中部地区最顶尖的综合性研究型大学，创办于1893年，人文法学与测绘遥感学科享誉全国。',
    schools: [
      {
        name: '数学科学学院',
        disciplines: [
          { name: '数学', assessment4: 'A', assessment5: 'A+', majors: ['数学与应用数学', '信息与计算科学'] }
        ]
      },
      {
        name: '物理学院',
        disciplines: [
          { name: '物理学', assessment4: 'A+', assessment5: 'A+', majors: ['物理学', '应用物理学', '核物理'] },
          { name: '天文学', assessment4: 'B+', assessment5: 'A-', majors: ['天文学'] }
        ]
      },
      {
        name: '化学与材料科学学院',
        disciplines: [
          { name: '化学', assessment4: 'A+', assessment5: 'A+', majors: ['化学', '应用化学', '化学生物学'] },
          { name: '材料科学与工程', assessment4: 'B+', assessment5: 'A-', majors: ['材料科学与工程'] }
        ]
      },
      {
        name: '生命科学与医学部',
        disciplines: [
          { name: '生物学', assessment4: 'A', assessment5: 'A+', majors: ['生物科学', '生物技术'] }
        ]
      },
      {
        name: '地球和空间科学学院',
        disciplines: [
          { name: '地球物理学', assessment4: 'A+', assessment5: 'A+', majors: ['地球物理学', '空间科学与技术'] },
          { name: '地质学', assessment4: 'B', assessment5: 'B+', majors: ['地质学', '地球化学'] }
        ]
      },
      {
        name: '工程科学学院',
        disciplines: [
          { name: '力学', assessment4: 'A', assessment5: 'A+', majors: ['理论与应用力学'] },
          { name: '动力工程及工程热物理', assessment4: 'B+', assessment5: 'A-', majors: ['能源与动力工程'] }
        ]
      },
      {
        name: '信息科学技术学院',
        disciplines: [
          { name: '电子科学与技术', assessment4: 'A-', assessment5: 'A', majors: ['电子信息工程', '电子科学与技术', '通信工程'] },
          { name: '信息与通信工程', assessment4: 'B+', assessment5: 'A-', majors: ['通信工程'] },
          { name: '控制科学与工程', assessment4: 'B+', assessment5: 'A-', majors: ['自动化'] }
        ]
      },
      {
        name: '计算机科学与技术学院',
        disciplines: [
          { name: '计算机科学与技术', assessment4: 'A', assessment5: 'A+', majors: ['计算机科学与技术', '软件工程'] }
        ]
      },
      {
        name: '核科学技术学院',
        disciplines: [
          { name: '核科学与技术', assessment4: 'A', assessment5: 'A+', majors: ['核工程与核技术'] }
        ]
      },
      {
        name: '管理学院',
        disciplines: [
          { name: '管理科学与工程', assessment4: 'A-', assessment5: 'A', majors: ['管理科学', '信息管理与信息系统'] },
          { name: '工商管理', assessment4: 'B+', assessment5: 'A-', majors: ['工商管理'] }
        ]
      },
      {
        name: '人文与社会科学学院',
        disciplines: [
          { name: '科学技术史', assessment4: 'A+', assessment5: 'A+', majors: [] }
        ]
      }
    ],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '法学（含法学）（含德语法学、法语法学试验班）、国际法（含国际法试验班）', type: '大类', subject: '历史类', quota: 0, score: 659, rank: 181, includes: '含法学；含德语法学、法语法学试验班）、国际法（含国际法试验班' },
        { name: '文科试验班类（弘毅学堂）（含汉语言文学、历史学、哲学、心理学、国际经济与贸易、金融学、经济学、国际法专业；含人文科学试验班（可全校任选专业，医学长学制除外）、数智人文试验班、国际组织与全球治理试验班，以及理科试验班（弘毅学堂）对应的各试验班）', type: '大类', subject: '历史类', quota: 0, score: 658, rank: 198, includes: '弘毅学堂；含汉语言文学、历史学、哲学、心理学、国际经济与贸易、金融学、经济学、国际法专业；含人文科学试验班（可全校任选专业，医学长学制除外）、数智人文试验班、国际组织与全球治理试验班，以及理科试验班（弘毅学堂）对应的各试验班' },
        { name: '经济学类（含经济学、国际经济与贸易、金融学、保险学、财政学专业；含经济学（基地班、能源经济管理试验班）、精算试验班、金融工程）', type: '大类', subject: '历史类', quota: 0, score: 657, rank: 217, includes: '含经济学、国际经济与贸易、金融学、保险学、财政学专业；含经济学（基地班、能源经济管理试验班）、精算试验班、金融工程' },
        { name: '中国语言文学类（含汉语言文学、汉语国际教育专业）', type: '大类', subject: '历史类', quota: 0, score: 657, rank: 217, includes: '含汉语言文学、汉语国际教育专业' },
        { name: '新闻传播学类（国际传播、智能传播试验班）（含广播电视学、传播学专业）', type: '大类', subject: '历史类', quota: 0, score: 655, rank: 266, includes: '国际传播、智能传播试验班；含广播电视学、传播学专业' },
        { name: '工商管理类（含工商管理、市场营销、会计学、财务管理、人力资源管理、物流管理专业；含工商管理国际试验班）（战略与投资方向）、市场营销（数智特色创新试验班）、物流管理（供应链运营方向试验班）、工程管理、管理科学（商业大数据分析方向试验班）', type: '大类', subject: '历史类', quota: 0, score: 655, rank: 266, includes: '含工商管理、市场营销、会计学、财务管理、人力资源管理、物流管理专业；含工商管理国际试验班；战略与投资方向）、市场营销（数智特色创新试验班）、物流管理（供应链运营方向试验班）、工程管理、管理科学（商业大数据分析方向试验班' },
        { name: '历史学类', type: '大类', subject: '历史类', quota: 0, score: 652, rank: 345, includes: '' },
        { name: '外国语言文学类（含英语、法语、德语、日语、西班牙语、俄语、翻译专业；含涉外法律人才试验班、国际传播人才试验班、多语种精英人才试验班、网络空间安全人才试验班、遥感空间信息人才试验班）', type: '大类', subject: '历史类', quota: 0, score: 652, rank: 345, includes: '含英语、法语、德语、日语、西班牙语、俄语、翻译专业；含涉外法律人才试验班、国际传播人才试验班、多语种精英人才试验班、网络空间安全人才试验班、遥感空间信息人才试验班' },
        { name: '哲学类（含哲学、宗教学专业；含现代哲学国际班、哲学博睿班）', type: '大类', subject: '历史类', quota: 0, score: 652, rank: 345, includes: '含哲学、宗教学专业；含现代哲学国际班、哲学博睿班' },
        { name: '戏剧影视文学（按高考文化课成绩录取的艺术类专业）（考生高考文化成绩（含优惠）须达到特殊类型招生录取控制分数线，授予艺术学学士学位）（按高考文化课成绩录取的艺术类专业）', type: '大类', subject: '历史类', quota: 0, score: 630, rank: 1523, includes: '按高考文化课成绩录取的艺术类专业；考生高考文化成绩（含优惠）须达到特殊类型招生录取控制分数线，授予艺术学学士学位' },
        { name: '人工智能（自强班）', type: '专业', subject: '物理类', quota: 0, score: 672, rank: 622, includes: '自强班' },
        { name: '人工智能', type: '专业', subject: '物理类', quota: 0, score: 669, rank: 788, includes: '' },
        { name: '理科试验班（弘毅学堂）（含数学与应用数学、物理学、化学、生物科学、智能制造工程、电气工程及其自动化、遥感科学与技术、数字经济专业；含未来科技试验班（可全校任选专业，医学长学制除外）、数智经济试验班、健康科技试验班、智能制造与集成电路试验班、碳中和经济管理创新班，以及文科试验班（弘毅学堂）对应的各试验班）', type: '专业', subject: '物理类', quota: 0, score: 668, rank: 868, includes: '弘毅学堂；含数学与应用数学、物理学、化学、生物科学、智能制造工程、电气工程及其自动化、遥感科学与技术、数字经济专业；含未来科技试验班（可全校任选专业，医学长学制除外）、数智经济试验班、健康科技试验班、智能制造与集成电路试验班、碳中和经济管理创新班，以及文科试验班（弘毅学堂）对应的各试验班' },
        { name: '临床医学（8年）', type: '专业', subject: '物理类', quota: 0, score: 667, rank: 950, includes: '8年' },
        { name: '网络空间安全（创新班）', type: '专业', subject: '物理类', quota: 0, score: 667, rank: 950, includes: '创新班' },
        { name: '计算机类（计算机学院）（含计算机科学与技术、软件工程专业）', type: '专业', subject: '物理类', quota: 0, score: 665, rank: 1135, includes: '计算机学院；含计算机科学与技术、软件工程专业' },
        { name: '理科试验班（弘毅双学位试验班）（含数学与应用数学、遥感科学与技术专业；含低空经济试验班）（遥感科学与技术+经济学）、数理金融试验班（金融学+数学与应用数学）、数理经济试验班（经济学+数学与应用数学）', type: '专业', subject: '物理类', quota: 0, score: 665, rank: 1135, includes: '弘毅双学位试验班；含数学与应用数学、遥感科学与技术专业；含低空经济试验班；遥感科学与技术+经济学）、数理金融试验班（金融学+数学与应用数学）、数理经济试验班（经济学+数学与应用数学' },
        { name: '计算机类（国家网络安全学院）（含信息安全、网络空间安全专业）', type: '专业', subject: '物理类', quota: 0, score: 664, rank: 1236, includes: '国家网络安全学院；含信息安全、网络空间安全专业' },
        { name: '机器人工程（机器人学院）（含机器人工程、自动化）', type: '专业', subject: '物理类', quota: 0, score: 664, rank: 1236, includes: '机器人学院；含机器人工程、自动化' },
        { name: '数学类（含数学与应用数学、信息与计算科学、统计学、数据科学与大数据技术专业）', type: '专业', subject: '物理类', quota: 0, score: 663, rank: 1345, includes: '含数学与应用数学、信息与计算科学、统计学、数据科学与大数据技术专业' },
        { name: '电子信息类（电子信息学院）（含电子信息工程）（含电子信息方向、光电子方向、机器人方向）、通信工程专业；电子信息工程（含卓越工程师计划试验班、逐光创新试验班、人工智能试验班）、通信工程（含卓越工程师计划试验班、人工智能试验班）', type: '专业', subject: '物理类', quota: 0, score: 663, rank: 1345, includes: '电子信息学院；含电子信息工程；含电子信息方向、光电子方向、机器人方向）、通信工程专业；电子信息工程（含卓越工程师计划试验班、逐光创新试验班、人工智能试验班）、通信工程（含卓越工程师计划试验班、人工智能试验班' },
        { name: '微电子科学与工程（集成电路学院）', type: '专业', subject: '物理类', quota: 0, score: 662, rank: 1447, includes: '集成电路学院' },
        { name: '工科试验班（机器人与智能机械试验班）（含智能制造工程、机械设计制造及其自动化专业）', type: '专业', subject: '物理类', quota: 0, score: 662, rank: 1447, includes: '机器人与智能机械试验班；含智能制造工程、机械设计制造及其自动化专业' },
        { name: '工科试验班（电气类）（含电气工程及其自动化、储能科学与工程专业）', type: '专业', subject: '物理类', quota: 0, score: 662, rank: 1447, includes: '电气类；含电气工程及其自动化、储能科学与工程专业' },
        { name: '遥感科学与技术（含遥感科学与技术、空间信息与数字技术）', type: '专业', subject: '物理类', quota: 0, score: 661, rank: 1570, includes: '含遥感科学与技术、空间信息与数字技术' },
        { name: '口腔医学（5+3一体化）', type: '专业', subject: '物理类', quota: 0, score: 660, rank: 1688, includes: '5+3一体化' },
        { name: '生物科学类（含生物科学、生物技术、生态学专业）', type: '专业', subject: '物理类', quota: 0, score: 660, rank: 1688, includes: '含生物科学、生物技术、生态学专业' },
        { name: '时空信息工程', type: '专业', subject: '物理类', quota: 0, score: 659, rank: 1816, includes: '' },
        { name: '工科试验班（智慧能源与智能制造类）（含智能制造工程、机械设计制造及其自动化、能源与动力工程、核工程与核技术、能源化学工程专业）', type: '专业', subject: '物理类', quota: 0, score: 659, rank: 1816, includes: '智慧能源与智能制造类；含智能制造工程、机械设计制造及其自动化、能源与动力工程、核工程与核技术、能源化学工程专业' },
        { name: '地球物理学（数智地空弘毅班）', type: '专业', subject: '物理类', quota: 0, score: 658, rank: 1944, includes: '数智地空弘毅班' },
        { name: '临床医学（5+3一体化）', type: '专业', subject: '物理类', quota: 0, score: 656, rank: 2224, includes: '5+3一体化' },
        { name: '物理学类（含物理学、材料物理专业）', type: '专业', subject: '物理类', quota: 0, score: 656, rank: 2224, includes: '含物理学、材料物理专业' },
        { name: '经济学（数智经济与管理创新班）（含经济学基地班、金融工程、市场营销）（数智特色创新试验班）、管理科学（商业大数据分析方向试验班）', type: '大类', subject: '物理类', quota: 0, score: 655, rank: 2366, includes: '数智经济与管理创新班；含经济学基地班、金融工程、市场营销；数智特色创新试验班）、管理科学（商业大数据分析方向试验班' },
        { name: '化学类（含化学（含化生方向）、应用化学专业）', type: '专业', subject: '物理类', quota: 0, score: 654, rank: 2505, includes: '含化学（含化生方向）、应用化学专业' },
        { name: '大数据管理与应用（含大数据管理与应用、信息管理与信息系统、电子商务、图书馆学、档案学、编辑出版学）', type: '大类', subject: '物理类', quota: 0, score: 654, rank: 2505, includes: '含大数据管理与应用、信息管理与信息系统、电子商务、图书馆学、档案学、编辑出版学' },
        { name: '智慧城市与空间规划（含智慧城市与空间规划、地理信息科学、地理科学）（弘毅班）', type: '专业', subject: '物理类', quota: 0, score: 653, rank: 2699, includes: '含智慧城市与空间规划、地理信息科学、地理科学；弘毅班' },
        { name: '经济学类（含经济学、国际经济与贸易、金融学、保险学、财政学专业；含经济学（基地班、能源经济管理试验班）、精算试验班、金融工程）', type: '大类', subject: '物理类', quota: 0, score: 652, rank: 2914, includes: '含经济学、国际经济与贸易、金融学、保险学、财政学专业；含经济学（基地班、能源经济管理试验班）、精算试验班、金融工程' },
        { name: '工科试验班（国家专项计划）（数智建维与软件类）', type: '专业', subject: '物理类', quota: 0, score: 645, rank: 4467, includes: '国家专项计划；数智建维与软件类' },
        { name: '智慧城市与空间规划', type: '专业', subject: '物理类', quota: 0, score: 643, rank: 4995, includes: '' },
        { name: '公共卫生与预防医学类', type: '专业', subject: '物理类', quota: 0, score: 635, rank: 7522, includes: '' },
      ]
    },
  },
  {
    id: 7,
    name: '华中科技大学',
    province: '湖北省',
    city: '武汉',
    batch: '二期',
    intro: '中国一流的理工医综合性研究型大学，创办于1952年，机械、电气、医学学科实力雄厚。',
    schools: [
      {
        name: '航天学院',
        disciplines: [
          { name: '控制科学与工程', assessment4: 'A+', assessment5: 'A+', majors: ['自动化'] },
          { name: '力学', assessment4: 'A', assessment5: 'A+', majors: ['工程力学'] },
          { name: '航空宇航科学与技术', assessment4: 'B+', assessment5: 'A-', majors: ['飞行器设计与工程', '飞行器动力工程'] }
        ]
      },
      {
        name: '机电工程学院',
        disciplines: [
          { name: '机械工程', assessment4: 'A+', assessment5: 'A+', majors: ['机械工程', '机械设计制造及其自动化'] }
        ]
      },
      {
        name: '材料科学与工程学院',
        disciplines: [
          { name: '材料科学与工程', assessment4: 'A', assessment5: 'A+', majors: ['材料科学与工程', '材料物理'] }
        ]
      },
      {
        name: '能源科学与工程学院',
        disciplines: [
          { name: '动力工程及工程热物理', assessment4: 'A-', assessment5: 'A', majors: ['能源与动力工程'] }
        ]
      },
      {
        name: '电气工程及自动化学院',
        disciplines: [
          { name: '电气工程', assessment4: 'A-', assessment5: 'A', majors: ['电气工程及其自动化'] }
        ]
      },
      {
        name: '仪器科学与工程学院',
        disciplines: [
          { name: '仪器科学与技术', assessment4: 'A-', assessment5: 'A', majors: ['测控技术与仪器'] }
        ]
      },
      {
        name: '电子与信息工程学院',
        disciplines: [
          { name: '电子科学与技术', assessment4: 'B+', assessment5: 'A-', majors: ['电子科学与技术', '通信工程'] },
          { name: '信息与通信工程', assessment4: 'A-', assessment5: 'A', majors: ['通信工程', '信息工程'] }
        ]
      },
      {
        name: '计算机科学与技术学院',
        disciplines: [
          { name: '计算机科学与技术', assessment4: 'A', assessment5: 'A+', majors: ['计算机科学与技术', '软件工程', '人工智能', '信息安全'] }
        ]
      },
      {
        name: '土木工程学院',
        disciplines: [
          { name: '土木工程', assessment4: 'A', assessment5: 'A+', majors: ['土木工程'] }
        ]
      },
      {
        name: '建筑学院',
        disciplines: [
          { name: '建筑学', assessment4: 'B+', assessment5: 'A-', majors: ['建筑学', '城乡规划', '风景园林'] }
        ]
      },
      {
        name: '环境学院',
        disciplines: [
          { name: '环境科学与工程', assessment4: 'A+', assessment5: 'A+', majors: ['环境工程', '环境科学'] }
        ]
      },
      {
        name: '化工与化学学院',
        disciplines: [
          { name: '化学工程与技术', assessment4: 'A-', assessment5: 'A', majors: ['化学工程与工艺'] },
          { name: '化学', assessment4: 'B', assessment5: 'B+', majors: ['化学', '应用化学'] }
        ]
      },
      {
        name: '数学学院',
        disciplines: [
          { name: '数学', assessment4: 'A-', assessment5: 'A', majors: ['数学与应用数学', '信息与计算科学'] }
        ]
      },
      {
        name: '物理学院',
        disciplines: [
          { name: '物理学', assessment4: 'B+', assessment5: 'A-', majors: ['物理学', '应用物理学'] }
        ]
      },
      {
        name: '经济与管理学院',
        disciplines: [
          { name: '管理科学与工程', assessment4: 'A', assessment5: 'A+', majors: ['管理科学', '信息管理与信息系统'] },
          { name: '工商管理', assessment4: 'B', assessment5: 'B+', majors: ['工商管理', '会计学'] }
        ]
      },
      {
        name: '交通科学与工程学院',
        disciplines: [
          { name: '交通运输工程', assessment4: 'B+', assessment5: 'A-', majors: ['交通运输', '交通工程'] }
        ]
      }
    ],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '经济学类（含国际经济与贸易、金融学专业）', type: '大类', subject: '历史类', quota: 0, score: 643, rank: 679, includes: '含国际经济与贸易、金融学专业' },
        { name: '中国语言文学类（含汉语言文学、汉语国际教育专业）', type: '大类', subject: '历史类', quota: 0, score: 641, rank: 779, includes: '含汉语言文学、汉语国际教育专业' },
        { name: '国际商务（英语辅修学位）', type: '大类', subject: '历史类', quota: 0, score: 636, rank: 1075, includes: '英语辅修学位' },
        { name: '新闻传播学类（含新闻学、广播电视学、广告学专业）', type: '大类', subject: '历史类', quota: 0, score: 635, rank: 1125, includes: '含新闻学、广播电视学、广告学专业' },
        { name: '公共事业管理（卫生事业管理）', type: '大类', subject: '历史类', quota: 0, score: 634, rank: 1200, includes: '卫生事业管理' },
        { name: '社会学类（含社会学、社会工作专业；分流时本专业类内专业任选）', type: '大类', subject: '历史类', quota: 0, score: 631, rank: 1447, includes: '含社会学、社会工作专业；分流时本专业类内专业任选' },
        { name: '外国语言文学类（含英语、英语（国商辅修学位）、翻译、日语、德语、法语专业；只招英语、日语、德语、法语语种考生）', type: '大类', subject: '历史类', quota: 0, score: 631, rank: 1447, includes: '含英语、英语（国商辅修学位）、翻译、日语、德语、法语专业；只招英语、日语、德语、法语语种考生' },
        { name: '建筑类（含建筑学（五年制）、城乡规划、风景园林专业）', type: '大类', subject: '历史类', quota: 0, score: 626, rank: 1884, includes: '含建筑学（五年制）、城乡规划、风景园林专业' },
        { name: '电子信息类（未来技术实验班）（含光电信息科学与工程、机器人工程、人工智能、生物医学工程专业；未来技术学院培养；多学科交叉，大一不分专业，大二在四个专业中选择；设置跨学科实验室轮转、科创基金）', type: '专业', subject: '物理类', quota: 0, score: 672, rank: 622, includes: '未来技术实验班；含光电信息科学与工程、机器人工程、人工智能、生物医学工程专业；未来技术学院培养；多学科交叉，大一不分专业，大二在四个专业中选择；设置跨学科实验室轮转、科创基金' },
        { name: '计算机类（计算机学院）（含计算机科学与技术、数据科学与大数据技术、智能科学与技术专业；基础学科拔尖学生培养计划2.0基地）', type: '专业', subject: '物理类', quota: 0, score: 669, rank: 788, includes: '计算机学院；含计算机科学与技术、数据科学与大数据技术、智能科学与技术专业；基础学科拔尖学生培养计划2.0基地' },
        { name: '临床医学（八年制）', type: '专业', subject: '物理类', quota: 0, score: 668, rank: 868, includes: '八年制' },
        { name: '自动化（无人系统启明实验班）', type: '专业', subject: '物理类', quota: 0, score: 666, rank: 1013, includes: '无人系统启明实验班' },
        { name: '电气工程及其自动化', type: '专业', subject: '物理类', quota: 0, score: 665, rank: 1135, includes: '' },
        { name: '光电信息科学与工程', type: '专业', subject: '物理类', quota: 0, score: 665, rank: 1135, includes: '' },
        { name: '电子信息类（集成电路学院）（含集成电路设计与集成系统、微电子科学与工程、电子科学与技术专业）', type: '专业', subject: '物理类', quota: 0, score: 665, rank: 1135, includes: '集成电路学院；含集成电路设计与集成系统、微电子科学与工程、电子科学与技术专业' },
        { name: '人工智能', type: '专业', subject: '物理类', quota: 0, score: 665, rank: 1135, includes: '' },
        { name: '计算机类（网安学院）（含网络空间安全、信息安全、密码科学与技术专业）', type: '专业', subject: '物理类', quota: 0, score: 664, rank: 1236, includes: '网安学院；含网络空间安全、信息安全、密码科学与技术专业' },
        { name: '电子信息类（电信学院）（含电子信息工程、通信工程、电磁场与无线技术专业）', type: '专业', subject: '物理类', quota: 0, score: 664, rank: 1236, includes: '电信学院；含电子信息工程、通信工程、电磁场与无线技术专业' },
        { name: '数学与应用数学（拔尖基地启明实验班）', type: '专业', subject: '物理类', quota: 0, score: 661, rank: 1570, includes: '拔尖基地启明实验班' },
        { name: '机械类（含机械设计制造及其自动化、工业工程、测控技术与仪器专业）', type: '专业', subject: '物理类', quota: 0, score: 661, rank: 1570, includes: '含机械设计制造及其自动化、工业工程、测控技术与仪器专业' },
        { name: '数学类（含数学与应用数学、统计学、信息与计算科学专业；基础学科拔尖学生培养计划2.0基地；分流时本专业类内专业任选）', type: '专业', subject: '物理类', quota: 0, score: 658, rank: 1944, includes: '含数学与应用数学、统计学、信息与计算科学专业；基础学科拔尖学生培养计划2.0基地；分流时本专业类内专业任选' },
        { name: '材料类（含材料成型及控制工程、材料科学与工程、电子封装技术专业）', type: '专业', subject: '物理类', quota: 0, score: 657, rank: 2081, includes: '含材料成型及控制工程、材料科学与工程、电子封装技术专业' },
        { name: '数字经济（AI双学位）（与人工智能学院联合培养数字经济与人工智能复合型人才，授予经济学与工学双学士学位）', type: '专业', subject: '物理类', quota: 0, score: 657, rank: 2081, includes: 'AI双学位；与人工智能学院联合培养数字经济与人工智能复合型人才，授予经济学与工学双学士学位' },
        { name: '物理学类（含物理学、应用物理学专业；基础学科拔尖学生培养计划2.0基地；分流时本专业类内专业任选）', type: '专业', subject: '物理类', quota: 0, score: 656, rank: 2224, includes: '含物理学、应用物理学专业；基础学科拔尖学生培养计划2.0基地；分流时本专业类内专业任选' },
        { name: '能源动力类（含能源与动力工程、新能源科学与工程、储能科学与工程、核工程与核技术专业）', type: '专业', subject: '物理类', quota: 0, score: 656, rank: 2224, includes: '含能源与动力工程、新能源科学与工程、储能科学与工程、核工程与核技术专业' },
        { name: '生物医学工程类（含生物医学工程、生物信息学专业）', type: '专业', subject: '物理类', quota: 0, score: 656, rank: 2224, includes: '含生物医学工程、生物信息学专业' },
        { name: '临床医学', type: '专业', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '' },
        { name: '口腔医学', type: '专业', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '' },
        { name: '材料类', type: '专业', subject: '物理类', quota: 0, score: 645, rank: 4467, includes: '' },
        { name: '化学类', type: '专业', subject: '物理类', quota: 0, score: 644, rank: 4724, includes: '' },
        { name: '船舶与海洋工程', type: '专业', subject: '物理类', quota: 0, score: 640, rank: 5846, includes: '' },
        { name: '土木类', type: '专业', subject: '物理类', quota: 0, score: 635, rank: 7522, includes: '' },
        { name: '生物科学（中外合作办学）（与法国巴黎萨克雷大学合办，“4+0”培养，小班化教学，专业核心课程全英文授课，满足要求获得华科大本科毕业证、学士学位证，巴黎萨克雷大学学士学位证）', type: '专业', subject: '物理类', quota: 0, score: 627, rank: 10703, includes: '中外合作办学；与法国巴黎萨克雷大学合办，“4+0”培养，小班化教学，专业核心课程全英文授课，满足要求获得华科大本科毕业证、学士学位证，巴黎萨克雷大学学士学位证' },
      ]
    },
  },
  {
    id: 8,
    name: '哈尔滨工业大学',
    province: '黑龙江省',
    city: '哈尔滨',
    batch: '一期',
    intro: '中国顶尖的工科研究型大学，创办于1920年，航天、机械、计算机学科享誉全球。',
    schools: [
      {
        name: '文学院',
        disciplines: [
          { name: '中国语言文学', assessment4: 'A-', assessment5: 'A', majors: ['汉语言文学', '汉语国际教育'] }
        ]
      },
      {
        name: '历史学院',
        disciplines: [
          { name: '中国史', assessment4: 'A-', assessment5: 'A', majors: ['历史学', '考古学'] },
          { name: '世界史', assessment4: 'B+', assessment5: 'A-', majors: ['世界史'] }
        ]
      },
      {
        name: '哲学学院',
        disciplines: [
          { name: '哲学', assessment4: 'A-', assessment5: 'A', majors: ['哲学', '心理学'] }
        ]
      },
      {
        name: '外国语言文学学院',
        disciplines: [
          { name: '外国语言文学', assessment4: 'B+', assessment5: 'A-', majors: ['英语', '法语', '德语', '日语', '俄语'] }
        ]
      },
      {
        name: '法学院',
        disciplines: [
          { name: '法学', assessment4: 'A', assessment5: 'A+', majors: ['法学'] }
        ]
      },
      {
        name: '经济与管理学院',
        disciplines: [
          { name: '理论经济学', assessment4: 'A-', assessment5: 'A', majors: ['经济学'] },
          { name: '应用经济学', assessment4: 'B+', assessment5: 'A-', majors: ['金融学', '国际经济与贸易', '财政学'] },
          { name: '工商管理', assessment4: 'A-', assessment5: 'A', majors: ['工商管理', '会计学', '市场营销'] }
        ]
      },
      {
        name: '数学与统计学院',
        disciplines: [
          { name: '数学', assessment4: 'A-', assessment5: 'A', majors: ['数学与应用数学', '信息与计算科学', '统计学'] }
        ]
      },
      {
        name: '物理科学与技术学院',
        disciplines: [
          { name: '物理学', assessment4: 'A-', assessment5: 'A', majors: ['物理学'] }
        ]
      },
      {
        name: '化学与分子科学学院',
        disciplines: [
          { name: '化学', assessment4: 'A-', assessment5: 'A', majors: ['化学', '应用化学'] }
        ]
      },
      {
        name: '生命科学学院',
        disciplines: [
          { name: '生物学', assessment4: 'A', assessment5: 'A', majors: ['生物科学', '生物技术'] }
        ]
      },
      {
        name: '资源与环境科学学院',
        disciplines: [
          { name: '地理学', assessment4: 'A-', assessment5: 'A', majors: ['地理科学', '人文地理与城乡规划', '地理信息科学'] },
          { name: '环境科学与工程', assessment4: 'B+', assessment5: 'A-', majors: ['环境工程', '环境科学'] }
        ]
      },
      {
        name: '水利水电学院',
        disciplines: [
          { name: '水利工程', assessment4: 'A', assessment5: 'A+', majors: ['水利水电工程', '水文与水资源工程'] }
        ]
      },
      {
        name: '电气与自动化学院',
        disciplines: [
          { name: '电气工程', assessment4: 'B+', assessment5: 'A-', majors: ['电气工程及其自动化'] }
        ]
      },
      {
        name: '动力与机械学院',
        disciplines: [
          { name: '机械工程', assessment4: 'B+', assessment5: 'A-', majors: ['机械设计制造及其自动化'] },
          { name: '动力工程及工程热物理', assessment4: 'B', assessment5: 'B+', majors: ['能源与动力工程'] }
        ]
      },
      {
        name: '计算机学院',
        disciplines: [
          { name: '计算机科学与技术', assessment4: 'A-', assessment5: 'A', majors: ['计算机科学与技术', '软件工程', '人工智能'] }
        ]
      },
      {
        name: '电子信息学院',
        disciplines: [
          { name: '电子科学与技术', assessment4: 'B+', assessment5: 'A-', majors: ['电子信息工程', '通信工程'] }
        ]
      },
      {
        name: '测绘学院',
        disciplines: [
          { name: '测绘科学与技术', assessment4: 'A+', assessment5: 'A+', majors: ['测绘工程', '遥感科学与技术', '导航工程'] }
        ]
      },
      {
        name: '遥感信息工程学院',
        disciplines: [
          { name: '测绘科学与技术', assessment4: 'A+', assessment5: 'A+', majors: ['遥感科学与技术', '地理空间信息工程'] }
        ]
      },
      {
        name: '土木建筑工程学院',
        disciplines: [
          { name: '土木工程', assessment4: 'B+', assessment5: 'A-', majors: ['土木工程'] },
          { name: '建筑学', assessment4: 'B', assessment5: 'B+', majors: ['建筑学', '城乡规划'] }
        ]
      },
      {
        name: '基础医学院',
        disciplines: [
          { name: '基础医学', assessment4: 'B+', assessment5: 'A-', majors: ['基础医学'] },
          { name: '临床医学', assessment4: 'B+', assessment5: 'A-', majors: ['临床医学'] }
        ]
      },
      {
        name: '口腔医学院',
        disciplines: [
          { name: '口腔医学', assessment4: 'B+', assessment5: 'A-', majors: ['口腔医学'] }
        ]
      },
      {
        name: '新闻与传播学院',
        disciplines: [
          { name: '新闻传播学', assessment4: 'A-', assessment5: 'A', majors: ['新闻学', '广播电视学', '广告学', '传播学'] }
        ]
      },
      {
        name: '信息管理学院',
        disciplines: [
          { name: '图书情报与档案管理', assessment4: 'A+', assessment5: 'A+', majors: ['图书馆学', '档案学', '信息管理与信息系统'] }
        ]
      }
    ],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '经济管理试验班（含工商管理、会计学、建筑学、城乡规划专业；另包含社会学+信息管理与信息系统专业双学士学位培养、社会学+大数据管理与应用专业双学士学位培养、法学、国际组织与全球治理专业。本专业类内任选专业）', type: '大类', subject: '历史类', quota: 0, score: 637, rank: 1005, includes: '含工商管理、会计学、建筑学、城乡规划专业；另包含社会学+信息管理与信息系统专业双学士学位培养、社会学+大数据管理与应用专业双学士学位培养、法学、国际组织与全球治理专业。本专业类内任选专业' },
        { name: '工科试验班（尖班、港大优学班）（含自动化、人工智能、复合材料与工程、工程力学、材料科学与工程、机械设计制造及其自动化、机器人工程、飞行器制造工程、环境工程、精密仪器、测控技术与仪器、智能材料与结构、智能装备与系统、土木工程专业；尖班为院士相关研究领域专业任选，院士与学生2年双重画像互选。港大优学班含人工智能、自动化等专业，院士领衔，学校与香港大学高层次人才担任联合班主任，融合学校和香港大学人才培养优势。两班型任选其一。培养方式详见学校招生官网）', type: '专业', subject: '物理类', quota: 0, score: 681, rank: 233, includes: '尖班、港大优学班；含自动化、人工智能、复合材料与工程、工程力学、材料科学与工程、机械设计制造及其自动化、机器人工程、飞行器制造工程、环境工程、精密仪器、测控技术与仪器、智能材料与结构、智能装备与系统、土木工程专业；尖班为院士相关研究领域专业任选，院士与学生2年双重画像互选。港大优学班含人工智能、自动化等专业，院士领衔，学校与香港大学高层次人才担任联合班主任，融合学校和香港大学人才培养优势。两班型任选其一。培养方式详见学校招生官网' },
        { name: '工科试验班（AI院士特色班）（含人工智能专业；院士担任班主任，培养地点第1年校本部，后3年深圳校区）', type: '专业', subject: '物理类', quota: 0, score: 678, rank: 330, includes: 'AI院士特色班；含人工智能专业；院士担任班主任，培养地点第1年校本部，后3年深圳校区' },
        { name: '工科试验班（自主智能系统院士特色班）（含自动化、人工智能、探测制导与控制技术、智能装备与系统、机器人工程专业；院士担任班主任，培养地点：哈尔滨+上海）（夏季学期）', type: '专业', subject: '物理类', quota: 0, score: 676, rank: 395, includes: '自主智能系统院士特色班；含自动化、人工智能、探测制导与控制技术、智能装备与系统、机器人工程专业；院士担任班主任，培养地点：哈尔滨+上海；夏季学期' },
        { name: '工科试验班（院士特色班）（含通信工程、电子信息工程、信息对抗技术、智能科学与技术、自动化、智能装备与系统、飞行器设计与工程、复合材料与工程、工程力学、智能材料与结构、材料科学与工程、焊接技术与工程、飞行器制造工程、机器人工程、机械设计制造及其自动化、智能制造工程、仿生科学与工程专业；含永坦班、善义班、小卫星班、智能机器人班，院士担任班主任，相关领域内专业任选）', type: '专业', subject: '物理类', quota: 0, score: 675, rank: 443, includes: '院士特色班；含通信工程、电子信息工程、信息对抗技术、智能科学与技术、自动化、智能装备与系统、飞行器设计与工程、复合材料与工程、工程力学、智能材料与结构、材料科学与工程、焊接技术与工程、飞行器制造工程、机器人工程、机械设计制造及其自动化、智能制造工程、仿生科学与工程专业；含永坦班、善义班、小卫星班、智能机器人班，院士担任班主任，相关领域内专业任选' },
        { name: '工科试验班（AI加先进技术领军班）（含自动化、智能装备与系统、探测制导与控制技术、集成电路设计与集成系统、微电子科学与工程、智能视觉工程、通信工程、电子信息工程、信息对抗技术、智能科学与技术、电气工程及其自动化、能源互联网工程、统计学、计算机科学与技术、人工智能、信息安全、软件工程专业；本专业类内任选专业）', type: '专业', subject: '物理类', quota: 0, score: 674, rank: 501, includes: 'AI加先进技术领军班；含自动化、智能装备与系统、探测制导与控制技术、集成电路设计与集成系统、微电子科学与工程、智能视觉工程、通信工程、电子信息工程、信息对抗技术、智能科学与技术、电气工程及其自动化、能源互联网工程、统计学、计算机科学与技术、人工智能、信息安全、软件工程专业；本专业类内任选专业' },
        { name: '工科试验班（未来技术拔尖班）（含自动化、人工智能、计算机科学与技术、通信工程、电子信息工程、飞行器设计与工程、机器人工程、焊接技术与工程、电气工程及其自动化、复合材料与工程、智能材料与结构、集成电路设计与集成系统、微电子科学与工程、智能视觉工程、探测制导与控制技术、智能装备与系统、信息对抗技术、智能科学与技术、机械设计制造及其自动化、飞行器制造工程、智能制造工程、仿生科学与工程、光电信息材料与器件、飞行器动力工程、精密仪器、智能感知工程、测控技术与仪器、软件工程专业；校本部理工专业任选，未来技术学院培养、书院制管理，采用“一生一策”拔尖培养）', type: '专业', subject: '物理类', quota: 0, score: 674, rank: 501, includes: '未来技术拔尖班；含自动化、人工智能、计算机科学与技术、通信工程、电子信息工程、飞行器设计与工程、机器人工程、焊接技术与工程、电气工程及其自动化、复合材料与工程、智能材料与结构、集成电路设计与集成系统、微电子科学与工程、智能视觉工程、探测制导与控制技术、智能装备与系统、信息对抗技术、智能科学与技术、机械设计制造及其自动化、飞行器制造工程、智能制造工程、仿生科学与工程、光电信息材料与器件、飞行器动力工程、精密仪器、智能感知工程、测控技术与仪器、软件工程专业；校本部理工专业任选，未来技术学院培养、书院制管理，采用“一生一策”拔尖培养' },
        { name: '工科试验班（AI加先进技术领军班深圳拔尖班）（含自动化、集成电路设计与集成系统、通信工程、电气工程及其自动化、计算机科学与技术专业；本专业类内任选专业，培养地点为深圳校区）', type: '专业', subject: '物理类', quota: 0, score: 673, rank: 550, includes: 'AI加先进技术领军班深圳拔尖班；含自动化、集成电路设计与集成系统、通信工程、电气工程及其自动化、计算机科学与技术专业；本专业类内任选专业，培养地点为深圳校区' },
        { name: '工科试验班（国家专项计划）（卓越优才计划）', type: '专业', subject: '物理类', quota: 0, score: 652, rank: 2914, includes: '国家专项计划；卓越优才计划' },
        { name: '数学与应用数学（中外合作办学）（该专业是与俄罗斯圣彼得堡国立大学合作。学生入学后不得转专业，“4+0”培养，中英文授课）', type: '专业', subject: '物理类', quota: 0, score: 637, rank: 6838, includes: '中外合作办学；该专业是与俄罗斯圣彼得堡国立大学合作。学生入学后不得转专业，“4+0”培养，中英文授课' },
        { name: '应用物理学（中外合作办学）（该专业是与俄罗斯圣彼得堡国立大学合作。学生入学后不得转专业，“4+0”培养，中英文授课）', type: '专业', subject: '物理类', quota: 0, score: 637, rank: 6838, includes: '中外合作办学；该专业是与俄罗斯圣彼得堡国立大学合作。学生入学后不得转专业，“4+0”培养，中英文授课' },
        { name: '大数据管理与应用（中外合作办学）（该专业是与法国里昂商学院合作。学生入学后不得转专业，“4+0”培养，中英文授课）', type: '大类', subject: '物理类', quota: 0, score: 636, rank: 7186, includes: '中外合作办学；该专业是与法国里昂商学院合作。学生入学后不得转专业，“4+0”培养，中英文授课' },
        { name: '化学（中外合作办学）（该专业是与俄罗斯圣彼得堡国立大学合作。学生入学后不得转专业，“4+0”培养，中英文授课）', type: '专业', subject: '物理类', quota: 0, score: 625, rank: 11635, includes: '中外合作办学；该专业是与俄罗斯圣彼得堡国立大学合作。学生入学后不得转专业，“4+0”培养，中英文授课' },
        { name: '智慧建筑与建造（中外合作办学）（该专业与意大利都灵理工大学合作。学生入学后不得转专业，“4+0”培养，中英文授课）', type: '大类', subject: '物理类', quota: 0, score: 622, rank: 13077, includes: '中外合作办学；该专业与意大利都灵理工大学合作。学生入学后不得转专业，“4+0”培养，中英文授课' },
      ]
    },
  },
  {
    id: 9,
    name: '中山大学',
    province: '广东省',
    city: '广州',
    batch: '二期',
    intro: '中国南方最具影响力的综合性研究型大学，创办于1924年，医学与管理学科实力突出。',
    schools: [
      {
        name: '中国语言文学系',
        disciplines: [
          { name: '中国语言文学', assessment4: 'A-', assessment5: 'A', majors: ['汉语言文学'] }
        ]
      },
      {
        name: '历史学系',
        disciplines: [
          { name: '中国史', assessment4: 'A-', assessment5: 'A', majors: ['历史学'] }
        ]
      },
      {
        name: '哲学系',
        disciplines: [
          { name: '哲学', assessment4: 'A-', assessment5: 'A', majors: ['哲学', '逻辑学'] }
        ]
      },
      {
        name: '外国语学院',
        disciplines: [
          { name: '外国语言文学', assessment4: 'B+', assessment5: 'A-', majors: ['英语', '法语', '德语', '日语'] }
        ]
      },
      {
        name: '法学院',
        disciplines: [
          { name: '法学', assessment4: 'B+', assessment5: 'A-', majors: ['法学'] }
        ]
      },
      {
        name: '岭南学院',
        disciplines: [
          { name: '理论经济学', assessment4: 'A-', assessment5: 'A', majors: ['经济学'] },
          { name: '应用经济学', assessment4: 'B+', assessment5: 'A-', majors: ['金融学', '国际经济与贸易'] }
        ]
      },
      {
        name: '管理学院',
        disciplines: [
          { name: '工商管理', assessment4: 'A+', assessment5: 'A+', majors: ['工商管理', '会计学', '市场营销', '财务管理'] }
        ]
      },
      {
        name: '数学学院',
        disciplines: [
          { name: '数学', assessment4: 'A-', assessment5: 'A', majors: ['数学与应用数学', '统计学'] }
        ]
      },
      {
        name: '物理学院',
        disciplines: [
          { name: '物理学', assessment4: 'A-', assessment5: 'A', majors: ['物理学'] }
        ]
      },
      {
        name: '化学学院',
        disciplines: [
          { name: '化学', assessment4: 'A-', assessment5: 'A', majors: ['化学', '应用化学'] }
        ]
      },
      {
        name: '生命科学学院',
        disciplines: [
          { name: '生物学', assessment4: 'A-', assessment5: 'A', majors: ['生物科学', '生物技术', '生态学'] }
        ]
      },
      {
        name: '计算机学院',
        disciplines: [
          { name: '计算机科学与技术', assessment4: 'B+', assessment5: 'A-', majors: ['计算机科学与技术', '软件工程', '人工智能'] }
        ]
      },
      {
        name: '电子与信息工程学院',
        disciplines: [
          { name: '电子科学与技术', assessment4: 'B', assessment5: 'B+', majors: ['电子信息工程', '通信工程'] }
        ]
      },
      {
        name: '中山医学院',
        disciplines: [
          { name: '基础医学', assessment4: 'A-', assessment5: 'A', majors: ['基础医学'] },
          { name: '临床医学', assessment4: 'A-', assessment5: 'A', majors: ['临床医学', '麻醉学', '医学影像学', '眼视光医学', '儿科学'] }
        ]
      },
      {
        name: '光华口腔医学院',
        disciplines: [
          { name: '口腔医学', assessment4: 'B+', assessment5: 'A-', majors: ['口腔医学'] }
        ]
      },
      {
        name: '公共卫生学院',
        disciplines: [
          { name: '公共卫生与预防医学', assessment4: 'B+', assessment5: 'A-', majors: ['预防医学'] }
        ]
      },
      {
        name: '药学院',
        disciplines: [
          { name: '药学', assessment4: 'A-', assessment5: 'A', majors: ['药学'] }
        ]
      },
      {
        name: '护理学院',
        disciplines: [
          { name: '护理学', assessment4: 'B', assessment5: 'B+', majors: ['护理学'] }
        ]
      },
      {
        name: '环境科学与工程学院',
        disciplines: [
          { name: '环境科学与工程', assessment4: 'B+', assessment5: 'A-', majors: ['环境科学', '环境工程'] }
        ]
      },
      {
        name: '地理科学与规划学院',
        disciplines: [
          { name: '地理学', assessment4: 'B+', assessment5: 'A-', majors: ['地理科学', '人文地理与城乡规划', '地理信息科学'] }
        ]
      },
      {
        name: '传播与设计学院',
        disciplines: [
          { name: '新闻传播学', assessment4: 'B', assessment5: 'B+', majors: ['新闻学', '传播学'] }
        ]
      }
    ],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '法学', type: '大类', subject: '历史类', quota: 0, score: 652, rank: 345, includes: '' },
        { name: '汉语言文学（广州）', type: '大类', subject: '历史类', quota: 0, score: 647, rank: 512, includes: '广州' },
        { name: '历史学（广州）', type: '大类', subject: '历史类', quota: 0, score: 647, rank: 512, includes: '广州' },
        { name: '经济学类（珠海）（含经济学、金融学专业）', type: '大类', subject: '历史类', quota: 0, score: 646, rank: 555, includes: '珠海；含经济学、金融学专业' },
        { name: '工商管理（深圳）', type: '大类', subject: '历史类', quota: 0, score: 643, rank: 679, includes: '深圳' },
        { name: '哲学类（广州）（含哲学、逻辑学专业）', type: '大类', subject: '历史类', quota: 0, score: 643, rank: 679, includes: '广州；含哲学、逻辑学专业' },
        { name: '经济学类（国家专项计划）（珠海）', type: '大类', subject: '历史类', quota: 0, score: 642, rank: 722, includes: '国家专项计划；珠海' },
        { name: '公共管理类（含行政管理、政治学与行政学专业）', type: '专业', subject: '历史类', quota: 0, score: 642, rank: 722, includes: '含行政管理、政治学与行政学专业' },
        { name: '国际政治', type: '专业', subject: '历史类', quota: 0, score: 639, rank: 876, includes: '' },
        { name: '旅游管理类', type: '大类', subject: '历史类', quota: 0, score: 631, rank: 1447, includes: '' },
        { name: '临床医学（八年制）（不招色盲色弱）', type: '专业', subject: '物理类', quota: 0, score: 672, rank: 622, includes: '八年制；不招色盲色弱' },
        { name: '数学类（珠海）（含数学与应用数学、信息与计算科学专业）', type: '专业', subject: '物理类', quota: 0, score: 653, rank: 2699, includes: '珠海；含数学与应用数学、信息与计算科学专业' },
        { name: '软件工程', type: '专业', subject: '物理类', quota: 0, score: 652, rank: 2914, includes: '' },
        { name: '电子信息类（含电子信息创新基地班）（含通信工程、微电子科学与工程、光电信息科学与工程、电子信息科学与技术专业）', type: '专业', subject: '物理类', quota: 0, score: 652, rank: 2914, includes: '含电子信息创新基地班；含通信工程、微电子科学与工程、光电信息科学与工程、电子信息科学与技术专业' },
        { name: '人工智能', type: '专业', subject: '物理类', quota: 0, score: 652, rank: 2914, includes: '' },
        { name: '航空航天类（含航空航天工程、理论与应用力学专业）', type: '专业', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '含航空航天工程、理论与应用力学专业' },
        { name: '金融学（金融学、AI双学士学位项目，珠海）', type: '大类', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '金融学、AI双学士学位项目，珠海' },
        { name: '物理学类（含基础物理与天文学术新星培养实验班，珠海）（含物理学、天文学专业）', type: '专业', subject: '物理类', quota: 0, score: 648, rank: 3754, includes: '含基础物理与天文学术新星培养实验班，珠海；含物理学、天文学专业' },
        { name: '遥感科学与技术', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '' },
        { name: '生物科学类（含生物科学、生物技术、生态学专业；不招色盲色弱）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '含生物科学、生物技术、生态学专业；不招色盲色弱' },
        { name: '生物医学工程（含振声创新班）（不招色盲色弱）', type: '专业', subject: '物理类', quota: 0, score: 646, rank: 4252, includes: '含振声创新班；不招色盲色弱' },
        { name: '化学类（含化学、高分子材料与工程、应用化学专业；不招色盲色弱）', type: '专业', subject: '物理类', quota: 0, score: 646, rank: 4252, includes: '含化学、高分子材料与工程、应用化学专业；不招色盲色弱' },
        { name: '口腔医学（不招色盲色弱）', type: '专业', subject: '物理类', quota: 0, score: 645, rank: 4467, includes: '不招色盲色弱' },
        { name: '经济学类（珠海）（含经济学、金融学专业）', type: '大类', subject: '物理类', quota: 0, score: 644, rank: 4724, includes: '珠海；含经济学、金融学专业' },
        { name: '临床医学（含眼科创新班，深圳）（不招色盲色弱）', type: '专业', subject: '物理类', quota: 0, score: 641, rank: 5573, includes: '含眼科创新班，深圳；不招色盲色弱' },
        { name: '工商管理类（广州）（含工商管理、会计学专业）', type: '大类', subject: '物理类', quota: 0, score: 641, rank: 5573, includes: '广州；含工商管理、会计学专业' },
        { name: '化学类', type: '专业', subject: '物理类', quota: 0, score: 636, rank: 7186, includes: '' },
        { name: '海洋科学', type: '专业', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '' },
        { name: '药学（国家专项计划）（深圳）', type: '专业', subject: '物理类', quota: 0, score: 633, rank: 8236, includes: '国家专项计划；深圳' },
        { name: '环境科学与工程类（国家专项计划）（含永銮创新班）', type: '专业', subject: '物理类', quota: 0, score: 631, rank: 9012, includes: '国家专项计划；含永銮创新班' },
        { name: '地理科学类', type: '专业', subject: '物理类', quota: 0, score: 628, rank: 10271, includes: '' },
        { name: '预防医学（国家专项计划）（广州）', type: '专业', subject: '物理类', quota: 0, score: 627, rank: 10703, includes: '国家专项计划；广州' },
        { name: '心理学', type: '大类', subject: '物理类', quota: 0, score: 625, rank: 11635, includes: '' },
      ]
    },
  },
  {
    id: 10,
    name: '中国人民大学',
    province: '北京市',
    city: '北京',
    batch: '二期',
    intro: '中国人文社会科学领域的顶尖研究型大学，创办于1937年，被誉为"中国人文社会科学的一面旗帜"。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '法学（涉外法治创新人才班）（法学院与外国语学院共同培养，毕业获法学、文学双主学士学位）', type: '大类', subject: '历史类', quota: 0, score: 671, rank: 43, includes: '涉外法治创新人才班；法学院与外国语学院共同培养，毕业获法学、文学双主学士学位' },
        { name: '法学（含涉外法治战略人才班；国际交流：含哈佛大学、鲁汶大学、新加坡国立大学等院际交换项目，“亚洲校园+”项目（中日韩三国政府奖学金支持）、中欧欧洲法国际组织后备人才培养项目（国家留基委资助）等）', type: '大类', subject: '历史类', quota: 0, score: 670, rank: 50, includes: '含涉外法治战略人才班；国际交流：含哈佛大学、鲁汶大学、新加坡国立大学等院际交换项目，“亚洲校园+”项目（中日韩三国政府奖学金支持）、中欧欧洲法国际组织后备人才培养项目（国家留基委资助）等' },
        { name: '经济学类（新时代经济学拔尖人才班）（含经济学专业）', type: '大类', subject: '历史类', quota: 0, score: 670, rank: 50, includes: '新时代经济学拔尖人才班；含经济学专业' },
        { name: '金融学类（含金融学、保险学专业；国际交流：含剑桥大学本科生访学项目、康奈尔大学暑期学校，伊利诺伊大学香槟分校、明尼苏达双城大学、威斯康辛大学麦迪逊分校、新加坡管理大学双硕士、3+1学位联合培养等）', type: '大类', subject: '历史类', quota: 0, score: 668, rank: 71, includes: '含金融学、保险学专业；国际交流：含剑桥大学本科生访学项目、康奈尔大学暑期学校，伊利诺伊大学香槟分校、明尼苏达双城大学、威斯康辛大学麦迪逊分校、新加坡管理大学双硕士、3+1学位联合培养等' },
        { name: '经济学类（含经济学、国民经济管理、能源经济、国际经济与贸易专业；国际交流：美国伊利诺伊大学香槟分校、威斯康星大学麦迪逊分校、英国曼彻斯特大学、日本九州大学等名校联合培养项目，英国牛津大学、德国波鸿鲁尔大学等夏/冬令营项目）', type: '大类', subject: '历史类', quota: 0, score: 667, rank: 76, includes: '含经济学、国民经济管理、能源经济、国际经济与贸易专业；国际交流：美国伊利诺伊大学香槟分校、威斯康星大学麦迪逊分校、英国曼彻斯特大学、日本九州大学等名校联合培养项目，英国牛津大学、德国波鸿鲁尔大学等夏/冬令营项目' },
        { name: '资源与环境经济学（生态经济拔尖人才班）', type: '大类', subject: '历史类', quota: 0, score: 665, rank: 96, includes: '生态经济拔尖人才班' },
        { name: '财政学类（含财政学、税收学专业；国际交流：含剑桥大学本科生访学项目、康奈尔大学暑期学校，伊利诺伊大学香槟分校、明尼苏达双城大学、威斯康辛大学麦迪逊分校、杜伦大学、玛丽女王大学、歌德大学（法兰克福）、新加坡管理大学双硕士、3+1学位联合培养等）', type: '大类', subject: '历史类', quota: 0, score: 665, rank: 96, includes: '含财政学、税收学专业；国际交流：含剑桥大学本科生访学项目、康奈尔大学暑期学校，伊利诺伊大学香槟分校、明尼苏达双城大学、威斯康辛大学麦迪逊分校、杜伦大学、玛丽女王大学、歌德大学（法兰克福）、新加坡管理大学双硕士、3+1学位联合培养等' },
        { name: '国际政治（内设政治学与行政学、国际政治、外交学3个专业。国际交流：含16国30余所海外名校学生交换项目（专项奖学金资助），全球治理与国际组织高端人才培养项目，伦敦大学国王学院双硕士学位联合培养）', type: '专业', subject: '历史类', quota: 0, score: 664, rank: 115, includes: '内设政治学与行政学、国际政治、外交学3个专业。国际交流：含16国30余所海外名校学生交换项目（专项奖学金资助），全球治理与国际组织高端人才培养项目，伦敦大学国王学院双硕士学位联合培养' },
        { name: '人文科学试验班（含哲学、宗教学、伦理学、汉语言文学、汉语言、历史学、世界史、考古学、中国古典学专业；国际学位项目：根特大学、夏威夷大学本硕联合培养项目，加拿大西安大略大学哲学系“1+1+1”双硕士项目。国际交流项目：约翰霍普金斯大学、牛津大学赫特福德学院、香港科技大学等学生交换项目，日本东京大学互访研学项目，德国波恩大学硕士交流项目等）', type: '大类', subject: '历史类', quota: 0, score: 664, rank: 115, includes: '含哲学、宗教学、伦理学、汉语言文学、汉语言、历史学、世界史、考古学、中国古典学专业；国际学位项目：根特大学、夏威夷大学本硕联合培养项目，加拿大西安大略大学哲学系“1+1+1”双硕士项目。国际交流项目：约翰霍普金斯大学、牛津大学赫特福德学院、香港科技大学等学生交换项目，日本东京大学互访研学项目，德国波恩大学硕士交流项目等' },
        { name: '人力资源管理（经管交叉）（内设人力资源管理、劳动经济、劳动与社会保障、劳动关系4个专业，无时点专业选择，毕业时可获经济学或管理学学位；含“数字化人才管理”荣誉辅修项目）', type: '大类', subject: '历史类', quota: 0, score: 663, rank: 129, includes: '经管交叉；内设人力资源管理、劳动经济、劳动与社会保障、劳动关系4个专业，无时点专业选择，毕业时可获经济学或管理学学位；含“数字化人才管理”荣誉辅修项目' },
        { name: '新闻传播学类（含新闻学、广播电视学、广告学、传播学、国际新闻与传播专业；无时点专业选择；培养方向涵盖智能传播、全媒体新闻生产、国际传播、视听传播等国家前沿战略发展领域；特色培养项目：国际新闻传播战略人才班；国际交流：与多所世界知名大学新闻院系建立联合培养关系，境外交流奖学金资助全员覆盖）', type: '大类', subject: '历史类', quota: 0, score: 662, rank: 140, includes: '含新闻学、广播电视学、广告学、传播学、国际新闻与传播专业；无时点专业选择；培养方向涵盖智能传播、全媒体新闻生产、国际传播、视听传播等国家前沿战略发展领域；特色培养项目：国际新闻传播战略人才班；国际交流：与多所世界知名大学新闻院系建立联合培养关系，境外交流奖学金资助全员覆盖' },
        { name: '工商管理类（数智化方向）（含工商管理、财务管理、会计学、市场营销、贸易经济专业；无时点专业选择。特色培养项目：中意美三学位管理学战略人才班；培养专业含贸易经济（国际商务方向）、会计学（智能会计方向）；国际交流：含新加坡南洋理工大学、西班牙ESADE商学院、荷兰阿姆斯特丹大学、比利时KULeuven等校免学费交流项目）', type: '大类', subject: '历史类', quota: 0, score: 662, rank: 140, includes: '数智化方向；含工商管理、财务管理、会计学、市场营销、贸易经济专业；无时点专业选择。特色培养项目：中意美三学位管理学战略人才班；培养专业含贸易经济（国际商务方向）、会计学（智能会计方向）；国际交流：含新加坡南洋理工大学、西班牙ESADE商学院、荷兰阿姆斯特丹大学、比利时KULeuven等校免学费交流项目' },
        { name: '公共管理类（行政、土地、城市）（含行政管理、城市管理、土地资源管理专业；国际交流：美国华盛顿大学、英国剑桥大学、德国慕尼黑工业大学、荷兰格罗宁根大学、日本一桥大学等学生交换项目）', type: '大类', subject: '历史类', quota: 0, score: 661, rank: 147, includes: '行政、土地、城市；含行政管理、城市管理、土地资源管理专业；国际交流：美国华盛顿大学、英国剑桥大学、德国慕尼黑工业大学、荷兰格罗宁根大学、日本一桥大学等学生交换项目' },
        { name: '国际政治', type: '专业', subject: '历史类', quota: 0, score: 659, rank: 181, includes: '' },
        { name: '工商管理类（国家专项计划）（数智化方向）', type: '大类', subject: '历史类', quota: 0, score: 658, rank: 198, includes: '国家专项计划；数智化方向' },
        { name: '外国语言文学类', type: '大类', subject: '历史类', quota: 0, score: 656, rank: 237, includes: '' },
        { name: '法学（含涉外法治战略人才班；国际交流：含哈佛大学、鲁汶大学、新加坡国立大学等院际交换项目，“亚洲校园+”项目（中日韩三国政府奖学金支持）、中欧欧洲法国际组织后备人才培养项目（国家留基委资助）等）', type: '大类', subject: '物理类', quota: 0, score: 681, rank: 233, includes: '含涉外法治战略人才班；国际交流：含哈佛大学、鲁汶大学、新加坡国立大学等院际交换项目，“亚洲校园+”项目（中日韩三国政府奖学金支持）、中欧欧洲法国际组织后备人才培养项目（国家留基委资助）等' },
        { name: '理科试验班（新时代经济学拔尖人才班）（含数字经济（经济学院新时代经济学拔尖人才班）专业）', type: '专业', subject: '物理类', quota: 0, score: 680, rank: 267, includes: '新时代经济学拔尖人才班；含数字经济（经济学院新时代经济学拔尖人才班）专业' },
        { name: '理科试验班（金融学与数学创新人才班）（含金融工程（财政金融学院金融学与数学双学位项目）专业；财政金融学院与数学学共同培养，毕业获经济学、理学双主学士学位）', type: '专业', subject: '物理类', quota: 0, score: 676, rank: 395, includes: '金融学与数学创新人才班；含金融工程（财政金融学院金融学与数学双学位项目）专业；财政金融学院与数学学共同培养，毕业获经济学、理学双主学士学位' },
        { name: '人工智能（培养人工智能精英人才。学科实力和师资力量雄厚。长周期衔接培养，高质量中英文课程。本科生科研领航计划，全员配备学术导师，多位本科生发表国际论文。实践资源丰富，5个省部级实验室和研究中心，3个校企联合实验室，20+高端实践基地）', type: '专业', subject: '物理类', quota: 0, score: 676, rank: 395, includes: '培养人工智能精英人才。学科实力和师资力量雄厚。长周期衔接培养，高质量中英文课程。本科生科研领航计划，全员配备学术导师，多位本科生发表国际论文。实践资源丰富，5个省部级实验室和研究中心，3个校企联合实验室，20+高端实践基地' },
        { name: '理科试验班（经济学与数学创新人才班）（含数字经济（经济学院经济学与数学双学位项目）专业；经济学院与数学学院共同培养，毕业获理学、经济学双主学士学位）', type: '专业', subject: '物理类', quota: 0, score: 675, rank: 443, includes: '经济学与数学创新人才班；含数字经济（经济学院经济学与数学双学位项目）专业；经济学院与数学学院共同培养，毕业获理学、经济学双主学士学位' },
        { name: '计算机类（图灵计算机拔尖人才班）（含计算机科学与技术专业；依托国家级基础学科拔尖学生培养基地、教育部计算机“101计划”；优秀师资授课，外聘业界知名专家；长周期衔接培养，研究性教学，实施科研早培计划；实行导师制，指导参加ACM、CCSP、信息安全、数据库大赛等顶尖竞赛；国内著名公司实习机会，国际交流与学科营）', type: '专业', subject: '物理类', quota: 0, score: 675, rank: 443, includes: '图灵计算机拔尖人才班；含计算机科学与技术专业；依托国家级基础学科拔尖学生培养基地、教育部计算机“101计划”；优秀师资授课，外聘业界知名专家；长周期衔接培养，研究性教学，实施科研早培计划；实行导师制，指导参加ACM、CCSP、信息安全、数据库大赛等顶尖竞赛；国内著名公司实习机会，国际交流与学科营' },
        { name: '统计学（统计与数科拔尖人才班）', type: '专业', subject: '物理类', quota: 0, score: 674, rank: 501, includes: '统计与数科拔尖人才班' },
        { name: '计算机类（含计算机科学与技术、信息安全、数据科学与大数据技术、信息管理与信息系统专业；依托教育部智能基座基地、拔尖基地2.0、一部六院项目；“大数据+人工智能”特色培养体系；无时点自主专业选择；国际合作：美国纽约州立大学宾汉姆顿分校双学位项目、英国曼彻斯特大学硕士项目等）', type: '专业', subject: '物理类', quota: 0, score: 674, rank: 501, includes: '含计算机科学与技术、信息安全、数据科学与大数据技术、信息管理与信息系统专业；依托教育部智能基座基地、拔尖基地2.0、一部六院项目；“大数据+人工智能”特色培养体系；无时点自主专业选择；国际合作：美国纽约州立大学宾汉姆顿分校双学位项目、英国曼彻斯特大学硕士项目等' },
        { name: '统计学类（含经济统计学、应用统计学、统计学、数据科学专业；国际交流：含威斯康星大学统计学硕士项目、爱荷华州立大学统计学博士推荐项目等）', type: '专业', subject: '物理类', quota: 0, score: 673, rank: 550, includes: '含经济统计学、应用统计学、统计学、数据科学专业；国际交流：含威斯康星大学统计学硕士项目、爱荷华州立大学统计学博士推荐项目等' },
        { name: '理科试验班（金融与大数据技术创新人才班）（含金融工程（财政金融学院金融学与大数据技术双学位项目）专业；财政金融学院与信息学院共同培养，毕业获经济学、工学双主学士学位）', type: '专业', subject: '物理类', quota: 0, score: 673, rank: 550, includes: '金融与大数据技术创新人才班；含金融工程（财政金融学院金融学与大数据技术双学位项目）专业；财政金融学院与信息学院共同培养，毕业获经济学、工学双主学士学位' },
        { name: '数学类', type: '专业', subject: '物理类', quota: 0, score: 668, rank: 868, includes: '' },
        { name: '理科试验班（国家专项计划）（商业数据分析与AI管理）', type: '专业', subject: '物理类', quota: 0, score: 665, rank: 1135, includes: '国家专项计划；商业数据分析与AI管理' },
        { name: '资源与环境经济学', type: '大类', subject: '物理类', quota: 0, score: 664, rank: 1236, includes: '' },
        { name: '理科试验班类（国家专项计划）（物理）', type: '专业', subject: '物理类', quota: 0, score: 661, rank: 1570, includes: '国家专项计划；物理' },
        { name: '理科试验班（国家专项计划）（化学与生命资源）', type: '专业', subject: '物理类', quota: 0, score: 651, rank: 3105, includes: '国家专项计划；化学与生命资源' },
      ]
    }
  },
  {
    id: 11,
    name: '北京师范大学',
    province: '北京市',
    city: '北京',
    batch: '二期',
    intro: '中国师范类高校的排头兵，创办于1902年，教育学、心理学、中国语言文学全国顶尖。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '人文科学试验班（含哲学、汉语言文学、英语、传播学、汉语言文学（励耘实验班）、哲学（励耘实验班）、PPE（政治学、经济学与哲学）、汉语言文学（“汉语言文学<应用语言学方向>+人工智能”双学士学位复合型人才培养项目）、传播学（“传播学+人工智能”双学士学位复合型人才培养项目）、英语（“英语+历史学”双学士学位复合型人才培养项目）专业。体检色觉要求详见学校招生章程及体检实施细则）', type: '大类', subject: '历史类', quota: 0, score: 651, rank: 378, includes: '含哲学、汉语言文学、英语、传播学、汉语言文学（励耘实验班）、哲学（励耘实验班）、PPE（政治学、经济学与哲学）、汉语言文学（“汉语言文学<应用语言学方向>+人工智能”双学士学位复合型人才培养项目）、传播学（“传播学+人工智能”双学士学位复合型人才培养项目）、英语（“英语+历史学”双学士学位复合型人才培养项目）专业。体检色觉要求详见学校招生章程及体检实施细则' },
        { name: '社会科学试验班（含经济学（励耘实验班）、工商管理、金融学、会计学、国际经济与贸易、法学（卓越实验班）、人力资源管理、公共事业管理、社会学、金融科技、公共事业管理（“公共事业管理+人工智能”双学士学位复合型人才培养项目）专业；其中工商管理为工商管理（数字经济与管理实验班），社会学为“社会学+心理学”双学士学位复合型人才培养项目。体检色觉要求详见学校招生章程及体检实施细则）', type: '大类', subject: '历史类', quota: 0, score: 651, rank: 378, includes: '含经济学（励耘实验班）、工商管理、金融学、会计学、国际经济与贸易、法学（卓越实验班）、人力资源管理、公共事业管理、社会学、金融科技、公共事业管理（“公共事业管理+人工智能”双学士学位复合型人才培养项目）专业；其中工商管理为工商管理（数字经济与管理实验班），社会学为“社会学+心理学”双学士学位复合型人才培养项目。体检色觉要求详见学校招生章程及体检实施细则' },
        { name: '历史学类（含历史学、历史学（励耘实验班）、考古学专业；体检色觉要求详见学校招生章程及体检实施细则）', type: '大类', subject: '历史类', quota: 0, score: 651, rank: 378, includes: '含历史学、历史学（励耘实验班）、考古学专业；体检色觉要求详见学校招生章程及体检实施细则' },
        { name: '教育学类（含教育学、学前教育、特殊教育、教育技术学专业；体检色觉要求详见学校招生章程及体检实施细则）', type: '大类', subject: '历史类', quota: 0, score: 650, rank: 409, includes: '含教育学、学前教育、特殊教育、教育技术学专业；体检色觉要求详见学校招生章程及体检实施细则' },
        { name: '社会科学试验班', type: '大类', subject: '历史类', quota: 0, score: 648, rank: 475, includes: '' },
        { name: '教育学类', type: '大类', subject: '历史类', quota: 0, score: 646, rank: 555, includes: '' },
        { name: '戏剧影视文学（按高考文化课成绩录取的艺术类专业）（考生高考文化课成绩（含优惠）须达到特殊类型招生录取控制分数线，入学后不能转为非艺术类专业，详见招生章程）（按高考文化课成绩录取的艺术类专业）', type: '大类', subject: '历史类', quota: 0, score: 626, rank: 1884, includes: '按高考文化课成绩录取的艺术类专业；考生高考文化课成绩（含优惠）须达到特殊类型招生录取控制分数线，入学后不能转为非艺术类专业，详见招生章程' },
        { name: '数学类（含数学与应用数学、统计学、数学与应用数学（励耘实验班）、统计学（“经济学+统计学”双学士学位复合型人才培养项目）专业。体检色觉要求详见学校招生章程及体检实施细则）', type: '专业', subject: '物理类', quota: 0, score: 658, rank: 1944, includes: '含数学与应用数学、统计学、数学与应用数学（励耘实验班）、统计学（“经济学+统计学”双学士学位复合型人才培养项目）专业。体检色觉要求详见学校招生章程及体检实施细则' },
        { name: '物理学类（含物理学、计算机科学与技术、人工智能、信息管理与信息系统、天文学、物理学（励耘实验班）专业；体检色觉要求详见学校招生章程及体检实施细则）', type: '专业', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '含物理学、计算机科学与技术、人工智能、信息管理与信息系统、天文学、物理学（励耘实验班）专业；体检色觉要求详见学校招生章程及体检实施细则' },
        { name: '理科试验班', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '' },
        { name: '理科试验班（含化学、生物科学类、环境科学与工程类、心理学、地理科学类、化学（励耘实验班）、生物科学（励耘实验班）、地理科学（励耘实验班）、心理学（北京师范大学-北京航空航天大学“心理学+人工智能”联合学士学位培养项目）专业。体检色觉要求详见学校招生章程及体检实施细则）', type: '专业', subject: '物理类', quota: 0, score: 645, rank: 4467, includes: '含化学、生物科学类、环境科学与工程类、心理学、地理科学类、化学（励耘实验班）、生物科学（励耘实验班）、地理科学（励耘实验班）、心理学（北京师范大学-北京航空航天大学“心理学+人工智能”联合学士学位培养项目）专业。体检色觉要求详见学校招生章程及体检实施细则' },
        { name: '社会科学试验班（含经济学（励耘实验班）、工商管理、金融学、会计学、国际经济与贸易、法学（卓越实验班）、人力资源管理、公共事业管理、社会学、金融科技、公共事业管理（“公共事业管理+人工智能”双学士学位复合型人才培养项目）专业；其中工商管理为工商管理（数字经济与管理实验班），社会学为“社会学+心理学”双学士学位复合型人才培养项目。体检色觉要求详见学校招生章程及体检实施细则）', type: '大类', subject: '物理类', quota: 0, score: 644, rank: 4724, includes: '含经济学（励耘实验班）、工商管理、金融学、会计学、国际经济与贸易、法学（卓越实验班）、人力资源管理、公共事业管理、社会学、金融科技、公共事业管理（“公共事业管理+人工智能”双学士学位复合型人才培养项目）专业；其中工商管理为工商管理（数字经济与管理实验班），社会学为“社会学+心理学”双学士学位复合型人才培养项目。体检色觉要求详见学校招生章程及体检实施细则' },
        { name: '教育学类（含教育学、学前教育、特殊教育、教育技术学专业；体检色觉要求详见学校招生章程及体检实施细则）', type: '大类', subject: '物理类', quota: 0, score: 641, rank: 5573, includes: '含教育学、学前教育、特殊教育、教育技术学专业；体检色觉要求详见学校招生章程及体检实施细则' },
      ]
    }
  },
  {
    id: 12,
    name: '北京航空航天大学',
    province: '北京市',
    city: '北京',
    batch: '二期',
    intro: '中国航空航天领域的顶尖研究型大学，创办于1952年，航空宇航科学与技术全国第一。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '社会科学试验班（含经济学、行政管理、法学专业；含人工智能-行政管理双学士学位项目、法学-人工智能双学士学位项目；具体包含专业详见学校招生信息报考指南专栏）', type: '大类', subject: '历史类', quota: 0, score: 650, rank: 409, includes: '含经济学、行政管理、法学专业；含人工智能-行政管理双学士学位项目、法学-人工智能双学士学位项目；具体包含专业详见学校招生信息报考指南专栏' },
        { name: '社会科学试验班（外语交叉学科人才培养试验班）（含英语、翻译专业；含英语-金融学双学士学位项目、翻译-人工智能双学士学位项目）', type: '大类', subject: '历史类', quota: 0, score: 650, rank: 409, includes: '外语交叉学科人才培养试验班；含英语、翻译专业；含英语-金融学双学士学位项目、翻译-人工智能双学士学位项目' },
        { name: '工科试验班类（未来空天领军计划）（含智能飞行器技术、智能感知工程、智能制造工程、空天智能电推进技术、飞行器设计与工程、飞行器动力工程、材料科学与工程、交通运输、智慧交通、人工智能、网络空间安全、空间科学与技术专业）', type: '专业', subject: '物理类', quota: 0, score: 680, rank: 267, includes: '未来空天领军计划；含智能飞行器技术、智能感知工程、智能制造工程、空天智能电推进技术、飞行器设计与工程、飞行器动力工程、材料科学与工程、交通运输、智慧交通、人工智能、网络空间安全、空间科学与技术专业' },
        { name: '计算机科学与技术（拔尖学生培养计划）（不能准确在显示器上识别红、黄、绿、蓝、紫各颜色中任何一种颜色的数码、字母者不予录取）', type: '专业', subject: '物理类', quota: 0, score: 679, rank: 297, includes: '拔尖学生培养计划；不能准确在显示器上识别红、黄、绿、蓝、紫各颜色中任何一种颜色的数码、字母者不予录取' },
        { name: '人工智能（卓越人才培养试验班）', type: '专业', subject: '物理类', quota: 0, score: 678, rank: 330, includes: '卓越人才培养试验班' },
        { name: '工科试验班类（量子科技先锋计划）（含计算机科学与技术、软件工程、测控技术与仪器、物理学、微电子科学与工程专业）', type: '专业', subject: '物理类', quota: 0, score: 677, rank: 361, includes: '量子科技先锋计划；含计算机科学与技术、软件工程、测控技术与仪器、物理学、微电子科学与工程专业' },
        { name: '飞行器动力工程（卓越人才培养试验班）', type: '专业', subject: '物理类', quota: 0, score: 676, rank: 395, includes: '卓越人才培养试验班' },
        { name: '工科试验班类（未来工程师项目制育人试验班）（含人工智能、自动化、低空技术与工程、机器人工程、飞行器设计与工程、车辆工程、飞行器控制与信息工程、飞行器动力工程专业）', type: '专业', subject: '物理类', quota: 0, score: 676, rank: 395, includes: '未来工程师项目制育人试验班；含人工智能、自动化、低空技术与工程、机器人工程、飞行器设计与工程、车辆工程、飞行器控制与信息工程、飞行器动力工程专业' },
        { name: '数学与应用数学（拔尖学生培养计划）（含数学与应用数学-计算机科学与技术双学士学位项目）', type: '专业', subject: '物理类', quota: 0, score: 675, rank: 443, includes: '拔尖学生培养计划；含数学与应用数学-计算机科学与技术双学士学位项目' },
        { name: '物理学（拔尖学生培养计划）（含物理学-微电子科学与工程双学士学位项目）', type: '专业', subject: '物理类', quota: 0, score: 675, rank: 443, includes: '拔尖学生培养计划；含物理学-微电子科学与工程双学士学位项目' },
        { name: '工科试验班类（医工交叉试验班）（含生物医学工程、智能医学工程专业；不招色盲、色弱考生）', type: '专业', subject: '物理类', quota: 0, score: 672, rank: 622, includes: '医工交叉试验班；含生物医学工程、智能医学工程专业；不招色盲、色弱考生' },
        { name: '工科试验班类（计算与智能科学类）（含计算机科学与技术、虚拟现实技术、软件工程、信息对抗技术、信息安全、人工智能专业；具体包含专业详见学校招生信息报考指南专栏）', type: '专业', subject: '物理类', quota: 0, score: 672, rank: 622, includes: '计算与智能科学类；含计算机科学与技术、虚拟现实技术、软件工程、信息对抗技术、信息安全、人工智能专业；具体包含专业详见学校招生信息报考指南专栏' },
        { name: '工科试验班类（信息科学与技术类）（含电子信息工程、通信工程、电子科学与技术、电磁场与无线技术、交通运输、自动化、机器人工程、微电子科学与工程、测控技术与仪器、探测制导与控制技术、遥感科学与技术、智能感知工程、光电信息科学与工程专业；具体包含专业详见学校招生信息报考指南专栏）', type: '专业', subject: '物理类', quota: 0, score: 671, rank: 681, includes: '信息科学与技术类；含电子信息工程、通信工程、电子科学与技术、电磁场与无线技术、交通运输、自动化、机器人工程、微电子科学与工程、测控技术与仪器、探测制导与控制技术、遥感科学与技术、智能感知工程、光电信息科学与工程专业；具体包含专业详见学校招生信息报考指南专栏' },
        { name: '理科试验班类（中法工程师学院）（含数学与应用数学、信息与计算科学、工程力学、应用物理学专业）', type: '专业', subject: '物理类', quota: 0, score: 670, rank: 733, includes: '中法工程师学院；含数学与应用数学、信息与计算科学、工程力学、应用物理学专业' },
        { name: '工科试验班类（航空航天类）（含智慧交通、智能飞行器技术、空天智能电推进技术、智能制造工程、纳米材料与技术、低空技术与工程、飞行器控制与信息工程、飞行器设计与工程、飞行器动力工程、飞行器质量与可靠性、飞行器适航技术、飞行器制造工程、安全工程、车辆工程、材料科学与工程、能源与动力工程、工程力学、飞行器环境与生命保障工程、机械工程、微机电系统工程、工业设计、机器人工程、生物医学工程专业；具体包含专业详见学校招生信息报考指南专栏）', type: '专业', subject: '物理类', quota: 0, score: 669, rank: 788, includes: '航空航天类；含智慧交通、智能飞行器技术、空天智能电推进技术、智能制造工程、纳米材料与技术、低空技术与工程、飞行器控制与信息工程、飞行器设计与工程、飞行器动力工程、飞行器质量与可靠性、飞行器适航技术、飞行器制造工程、安全工程、车辆工程、材料科学与工程、能源与动力工程、工程力学、飞行器环境与生命保障工程、机械工程、微机电系统工程、工业设计、机器人工程、生物医学工程专业；具体包含专业详见学校招生信息报考指南专栏' },
        { name: '工科试验班类（国家专项计划）（航空航天类）', type: '专业', subject: '物理类', quota: 0, score: 666, rank: 1013, includes: '国家专项计划；航空航天类' },
        { name: '理科试验班类', type: '专业', subject: '物理类', quota: 0, score: 665, rank: 1135, includes: '' },
        { name: '飞行器动力工程（国际合作专项）（中外合作办学，与俄罗斯莫斯科航空学院“2+2”联合培养，双学籍，双学位，本科阶段原则上不可转专业）（国际合作专项）', type: '专业', subject: '物理类', quota: 0, score: 656, rank: 2224, includes: '国际合作专项；中外合作办学，与俄罗斯莫斯科航空学院“2+2”联合培养，双学籍，双学位，本科阶段原则上不可转专业' },
        { name: '工科试验班类（国际合作专项）（中外合作办学，中法未来科技试验班）（含计算机科学与技术、航空航天工程、微电子科学与工程、材料科学与工程、生物医学工程专业；中外合作办学，与法国国立应用科学学院联合培养，本科阶段不可转入北京市各校区设立的学院学习）（国际合作专项）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '国际合作专项；中外合作办学，中法未来科技试验班；含计算机科学与技术、航空航天工程、微电子科学与工程、材料科学与工程、生物医学工程专业；中外合作办学，与法国国立应用科学学院联合培养，本科阶段不可转入北京市各校区设立的学院学习' },
        { name: '工科试验班类（国际合作专项）（中外合作办学，中法航空试验班）（含交通运输、飞行器适航技术、测控技术与仪器、电子信息工程专业；中外合作办学，与法国国立民航大学联合培养，本科阶段不可转入北京市各校区设立的学院学习）（国际合作专项）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '国际合作专项；中外合作办学，中法航空试验班；含交通运输、飞行器适航技术、测控技术与仪器、电子信息工程专业；中外合作办学，与法国国立民航大学联合培养，本科阶段不可转入北京市各校区设立的学院学习' },
      ]
    }
  },
  {
    id: 13,
    name: '中国农业大学',
    province: '北京市',
    city: '北京',
    batch: '二期',
    intro: '中国农林类高校的最高学府，创办于1905年，农学、生命科学等学科全国领先。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '法学（北京市）', type: '大类', subject: '历史类', quota: 0, score: 641, rank: 779, includes: '北京市' },
        { name: '工商管理类（北京市）（包含工商管理、会计学、大数据管理与应用三个专业方向；专业体检要求详见招生章程）', type: '大类', subject: '历史类', quota: 0, score: 634, rank: 1200, includes: '北京市；包含工商管理、会计学、大数据管理与应用三个专业方向；专业体检要求详见招生章程' },
        { name: '经济学类（北京市）（含国际经济与贸易、金融学、农林经济管理专业；专业体检要求详见招生章程）', type: '大类', subject: '历史类', quota: 0, score: 633, rank: 1262, includes: '北京市；含国际经济与贸易、金融学、农林经济管理专业；专业体检要求详见招生章程' },
        { name: '传播学（北京市）', type: '大类', subject: '历史类', quota: 0, score: 632, rank: 1349, includes: '北京市' },
        { name: '社会学类（北京市）（含社会学、社会政策专业）', type: '大类', subject: '历史类', quota: 0, score: 632, rank: 1349, includes: '北京市；含社会学、社会政策专业' },
        { name: '农村区域发展（北京市）（专业下设国际发展等方向，第三学期分方向培养；专业体检要求详见招生章程）', type: '大类', subject: '历史类', quota: 0, score: 630, rank: 1523, includes: '北京市；专业下设国际发展等方向，第三学期分方向培养；专业体检要求详见招生章程' },
        { name: '英语（北京市）（只招英语语种考生）', type: '大类', subject: '历史类', quota: 0, score: 628, rank: 1697, includes: '北京市；只招英语语种考生' },
        { name: '公共事业管理（北京市）（新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业；专业体检要求详见招生章程）', type: '大类', subject: '历史类', quota: 0, score: 622, rank: 2295, includes: '北京市；新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业；专业体检要求详见招生章程' },
        { name: '市场营销（北京市）（新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业）', type: '大类', subject: '历史类', quota: 0, score: 620, rank: 2528, includes: '北京市；新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业' },
        { name: '电子商务（北京市）（新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业；专业体检要求详见招生章程）', type: '大类', subject: '历史类', quota: 0, score: 620, rank: 2528, includes: '北京市；新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业；专业体检要求详见招生章程' },
        { name: '国际经济与贸易（北京市）（中外合作办学）（学费国内一年级10万元/生/年，二年级起12.98万元/生/年；如出国学习，合作院校将按留学生标准收取学费；详细信息请务必向国际学院咨询）', type: '大类', subject: '历史类', quota: 0, score: 618, rank: 2777, includes: '北京市；中外合作办学；学费国内一年级10万元/生/年，二年级起12.98万元/生/年；如出国学习，合作院校将按留学生标准收取学费；详细信息请务必向国际学院咨询' },
        { name: '传播学（北京市）（中外合作办学）（学费国内一年级10万元/生/年，二年级起12.98万元/生/年；如出国学习，合作院校将按留学生标准收取学费；详细信息请务必向国际学院咨询）', type: '大类', subject: '历史类', quota: 0, score: 615, rank: 3215, includes: '北京市；中外合作办学；学费国内一年级10万元/生/年，二年级起12.98万元/生/年；如出国学习，合作院校将按留学生标准收取学费；详细信息请务必向国际学院咨询' },
        { name: '农林经济管理（北京市）（中外合作办学）（学费国内一年级8.8万元/生/年，二年级起9.5万元/生/年；出国学习阶段，合作院校将按留学生标准收取学费；详细信息请务必向国际学院咨询）', type: '大类', subject: '历史类', quota: 0, score: 615, rank: 3215, includes: '北京市；中外合作办学；学费国内一年级8.8万元/生/年，二年级起9.5万元/生/年；出国学习阶段，合作院校将按留学生标准收取学费；详细信息请务必向国际学院咨询' },
        { name: '理科试验班类（北京市）（生命科学）（含生物科学类、农学、种子科学与工程、园艺、植物保护、动物医学类、动物科学、草业科学、环境科学与工程类、食品科学与工程类、化学类专业；专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 650, rank: 3294, includes: '北京市；生命科学；含生物科学类、农学、种子科学与工程、园艺、植物保护、动物医学类、动物科学、草业科学、环境科学与工程类、食品科学与工程类、化学类专业；专业体检要求详见招生章程' },
        { name: '理科试验班（北京市）（信息科学）（含电子信息类、计算机类、农业工程类、机械类、水利类、数学与应用数学、工程力学、地理科学类专业）', type: '专业', subject: '物理类', quota: 0, score: 650, rank: 3294, includes: '北京市；信息科学；含电子信息类、计算机类、农业工程类、机械类、水利类、数学与应用数学、工程力学、地理科学类专业' },
        { name: '生物技术（北京市）（北理工联培项目）（该专业与北京理工大学生物医学工程专业进行联合学士学位培养；专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '北京市；北理工联培项目；该专业与北京理工大学生物医学工程专业进行联合学士学位培养；专业体检要求详见招生章程' },
        { name: '计算机类（北京市）（含计算机科学与技术、数据科学与大数据技术专业）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '北京市；含计算机科学与技术、数据科学与大数据技术专业' },
        { name: '理科试验班（北京市）（智能装备）（含电子信息类、计算机类、农业工程类、机械类、水利类、环境工程专业）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '北京市；智能装备；含电子信息类、计算机类、农业工程类、机械类、水利类、环境工程专业' },
        { name: '电子信息类（北京市）（含电子信息工程、通信工程、电气工程及其自动化、人工智能专业）', type: '专业', subject: '物理类', quota: 0, score: 642, rank: 5268, includes: '北京市；含电子信息工程、通信工程、电气工程及其自动化、人工智能专业' },
        { name: '农业智能装备工程（北京市）（卓越工程师班）（采用特殊培养模式）（双导师制，小班化、个性化培养方案，详见学校本科招生报考指南）', type: '专业', subject: '物理类', quota: 0, score: 642, rank: 5268, includes: '北京市；卓越工程师班；采用特殊培养模式；双导师制，小班化、个性化培养方案，详见学校本科招生报考指南' },
        { name: '水利类（北京市）（卓越工程师班）（含农业水利工程、水利水电工程、能源与动力工程专业；采用特殊培养模式）（双导师制，小班化、个性化培养方案，详见学校本科招生报考指南）', type: '专业', subject: '物理类', quota: 0, score: 641, rank: 5573, includes: '北京市；卓越工程师班；含农业水利工程、水利水电工程、能源与动力工程专业；采用特殊培养模式；双导师制，小班化、个性化培养方案，详见学校本科招生报考指南' },
        { name: '数学与应用数学（北京市）', type: '专业', subject: '物理类', quota: 0, score: 640, rank: 5846, includes: '北京市' },
        { name: '生物科学类（北京市）（含生物科学、生物技术专业；专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 640, rank: 5846, includes: '北京市；含生物科学、生物技术专业；专业体检要求详见招生章程' },
        { name: '机械类（北京市）（含机械设计制造及其自动化、车辆工程、工业设计、机械电子工程专业）', type: '专业', subject: '物理类', quota: 0, score: 638, rank: 6503, includes: '北京市；含机械设计制造及其自动化、车辆工程、工业设计、机械电子工程专业' },
        { name: '农学（北京市）（包含农学、种子科学与工程两个专业方向；专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 637, rank: 6838, includes: '北京市；包含农学、种子科学与工程两个专业方向；专业体检要求详见招生章程' },
        { name: '农业工程类（北京市）（含农业工程、农业机械化及其自动化、农业智能装备工程专业）', type: '专业', subject: '物理类', quota: 0, score: 637, rank: 6838, includes: '北京市；含农业工程、农业机械化及其自动化、农业智能装备工程专业' },
        { name: '土地科学与技术（北京市）（智慧国土创新班）（采用特殊培养模式（多学科交叉融合，科教协同育人，详见学校本科招生报考指南）；专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 636, rank: 7186, includes: '北京市；智慧国土创新班；采用特殊培养模式（多学科交叉融合，科教协同育人，详见学校本科招生报考指南）；专业体检要求详见招生章程' },
        { name: '水利类（北京市）', type: '专业', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '北京市；国家专项计划' },
        { name: '地理科学类（北京市）（含地理信息科学、土地资源管理专业；专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '北京市；含地理信息科学、土地资源管理专业；专业体检要求详见招生章程' },
        { name: '水利类（北京市）（含农业水利工程、水利水电工程、能源与动力工程、农业建筑环境与能源工程、土木工程专业）', type: '专业', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '北京市；含农业水利工程、水利水电工程、能源与动力工程、农业建筑环境与能源工程、土木工程专业' },
        { name: '食品科学与工程类（北京市）（含食品科学与工程、食品质量与安全、葡萄与葡萄酒工程、食品营养与健康专业；专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '北京市；含食品科学与工程、食品质量与安全、葡萄与葡萄酒工程、食品营养与健康专业；专业体检要求详见招生章程' },
        { name: '动物医学类（北京市）（含动物医学、中兽医学、兽医公共卫生专业；专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '北京市；含动物医学、中兽医学、兽医公共卫生专业；专业体检要求详见招生章程' },
        { name: '动物医学类（北京市）', type: '专业', subject: '物理类', quota: 0, score: 633, rank: 8236, includes: '北京市；国家专项计划' },
        { name: '工商管理类（北京市）', type: '大类', subject: '物理类', quota: 0, score: 632, rank: 8622, includes: '北京市；国家专项计划' },
        { name: '环境科学与工程类（北京市）（含应用气象学、生态学、资源环境科学、环境工程专业；专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 632, rank: 8622, includes: '北京市；含应用气象学、生态学、资源环境科学、环境工程专业；专业体检要求详见招生章程' },
        { name: '化学类（北京市）（含化学、应用化学专业；专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 632, rank: 8622, includes: '北京市；含化学、应用化学专业；专业体检要求详见招生章程' },
        { name: '工程力学（北京市）', type: '专业', subject: '物理类', quota: 0, score: 631, rank: 9012, includes: '北京市；国家专项计划' },
        { name: '化学类（北京市）', type: '专业', subject: '物理类', quota: 0, score: 631, rank: 9012, includes: '北京市；国家专项计划' },
        { name: '草业科学（北京市）（专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 631, rank: 9012, includes: '北京市；专业体检要求详见招生章程' },
        { name: '动物科学（北京市）（专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 631, rank: 9012, includes: '北京市；专业体检要求详见招生章程' },
        { name: '植物保护（北京市）（专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 631, rank: 9012, includes: '北京市；专业体检要求详见招生章程' },
        { name: '园艺（北京市）（专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 630, rank: 9436, includes: '北京市；专业体检要求详见招生章程' },
        { name: '园林（北京市）（专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 630, rank: 9436, includes: '北京市；专业体检要求详见招生章程' },
        { name: '环境科学与工程类（北京市）', type: '专业', subject: '物理类', quota: 0, score: 629, rank: 9827, includes: '北京市；国家专项计划' },
        { name: '地理科学类（北京市）', type: '专业', subject: '物理类', quota: 0, score: 628, rank: 10271, includes: '北京市；国家专项计划' },
        { name: '生物工程（北京市）（营养与健康方向）（新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业；专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 625, rank: 11635, includes: '北京市；营养与健康方向；新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业；专业体检要求详见招生章程' },
        { name: '园艺（北京市）', type: '专业', subject: '物理类', quota: 0, score: 623, rank: 12592, includes: '北京市；国家专项计划' },
        { name: '葡萄与葡萄酒工程（北京市）（新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业；专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 623, rank: 12592, includes: '北京市；新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业；专业体检要求详见招生章程' },
        { name: '园林（北京市）', type: '专业', subject: '物理类', quota: 0, score: 621, rank: 13587, includes: '北京市；国家专项计划' },
        { name: '生物质科学与工程（北京市）（新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业；专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 621, rank: 13587, includes: '北京市；新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业；专业体检要求详见招生章程' },
        { name: '动物科学（北京市）（伴侣动物方向）（新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业；专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 619, rank: 14636, includes: '北京市；伴侣动物方向；新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业；专业体检要求详见招生章程' },
        { name: '设施农业科学与工程（北京市）（新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业）', type: '专业', subject: '物理类', quota: 0, score: 616, rank: 16339, includes: '北京市；新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业' },
        { name: '国际经济与贸易（北京市）（中外合作办学）（学费国内一年级10万元/生/年，二年级起12.98万元/生/年；如出国学习，合作院校将按留学生标准收取学费；详细信息请务必向国际学院咨询）', type: '大类', subject: '物理类', quota: 0, score: 613, rank: 18114, includes: '北京市；中外合作办学；学费国内一年级10万元/生/年，二年级起12.98万元/生/年；如出国学习，合作院校将按留学生标准收取学费；详细信息请务必向国际学院咨询' },
        { name: '酿酒工程（北京市）（新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业；专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 612, rank: 18720, includes: '北京市；新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业；专业体检要求详见招生章程' },
        { name: '草坪科学与工程（北京市）（新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业；专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 611, rank: 19367, includes: '北京市；新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业；专业体检要求详见招生章程' },
        { name: '水产养殖学（北京市）（新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业；专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 610, rank: 20009, includes: '北京市；新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业；专业体检要求详见招生章程' },
        { name: '城乡规划（北京市）（新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业；专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 610, rank: 20009, includes: '北京市；新生到北京报到，集体安排在双清路1号住宿。在北京完成第一年学习后，从第二年起到我校烟台研究院进行教学和实习至毕业。不得转入此类型以外专业；专业体检要求详见招生章程' },
        { name: '农林经济管理（北京市）（中外合作办学）（学费国内一年级8.8万元/生/年，二年级起9.5万元/生/年；出国学习阶段，合作院校将按留学生标准收取学费；详细信息请务必向国际学院咨询）', type: '大类', subject: '物理类', quota: 0, score: 599, rank: 27821, includes: '北京市；中外合作办学；学费国内一年级8.8万元/生/年，二年级起9.5万元/生/年；出国学习阶段，合作院校将按留学生标准收取学费；详细信息请务必向国际学院咨询' },
      ]
    }
  },
  {
    id: 14,
    name: '中央民族大学',
    province: '北京市',
    city: '北京',
    batch: '二期',
    intro: '中国民族类高校的最高学府，创办于1941年，民族学、社会学等学科特色鲜明。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '法学类（北京市）（含法学、法学（涉外法治）专业）', type: '大类', subject: '历史类', quota: 0, score: 636, rank: 1075, includes: '北京市；含法学、法学（涉外法治）专业' },
        { name: '汉语言文学（北京市）', type: '大类', subject: '历史类', quota: 0, score: 634, rank: 1200, includes: '北京市' },
        { name: '历史学（北京市）', type: '大类', subject: '历史类', quota: 0, score: 631, rank: 1447, includes: '北京市' },
        { name: '经济学类（北京市）（含经济学、财政学、金融学、国际经济与贸易专业）', type: '大类', subject: '历史类', quota: 0, score: 631, rank: 1447, includes: '北京市；含经济学、财政学、金融学、国际经济与贸易专业' },
        { name: '工商管理类（北京市）（含工商管理、会计学、财务管理、人力资源管理专业；不能准确识别红、黄、绿、蓝、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形者不予录取）', type: '大类', subject: '历史类', quota: 0, score: 629, rank: 1611, includes: '北京市；含工商管理、会计学、财务管理、人力资源管理专业；不能准确识别红、黄、绿、蓝、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形者不予录取' },
        { name: '社会学类（北京市）（含社会学、社会工作专业）', type: '大类', subject: '历史类', quota: 0, score: 629, rank: 1611, includes: '北京市；含社会学、社会工作专业' },
        { name: '历史学类（北京市）（含考古学、文物与博物馆学专业；不招色弱）', type: '大类', subject: '历史类', quota: 0, score: 629, rank: 1611, includes: '北京市；含考古学、文物与博物馆学专业；不招色弱' },
        { name: '民族学（北京市）（与中国少数民族语言双学位）', type: '大类', subject: '历史类', quota: 0, score: 628, rank: 1697, includes: '北京市；与中国少数民族语言双学位' },
        { name: '汉语国际教育（北京市）', type: '大类', subject: '历史类', quota: 0, score: 627, rank: 1789, includes: '北京市' },
        { name: '教育学（北京市）', type: '大类', subject: '历史类', quota: 0, score: 626, rank: 1884, includes: '北京市' },
        { name: '外国语言文学类（北京市）（含英语、翻译专业；只招英语语种考生；须口试合格）', type: '大类', subject: '历史类', quota: 0, score: 626, rank: 1884, includes: '北京市；含英语、翻译专业；只招英语语种考生；须口试合格' },
        { name: '哲学类（北京市）（含哲学、宗教学专业）', type: '大类', subject: '历史类', quota: 0, score: 626, rank: 1884, includes: '北京市；含哲学、宗教学专业' },
        { name: '新闻传播学类（北京市）（含新闻学、广告学、网络与新媒体专业）', type: '大类', subject: '历史类', quota: 0, score: 624, rank: 2071, includes: '北京市；含新闻学、广告学、网络与新媒体专业' },
        { name: '公共管理类（北京市）（含公共事业管理、行政管理专业；不能准确识别红、黄、绿、蓝、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形者不予录取）', type: '大类', subject: '历史类', quota: 0, score: 624, rank: 2071, includes: '北京市；含公共事业管理、行政管理专业；不能准确识别红、黄、绿、蓝、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形者不予录取' },
        { name: '中国少数民族语言文学（国家专项计划）（创新实验班）', type: '大类', subject: '历史类', quota: 0, score: 604, rank: 5123, includes: '国家专项计划；创新实验班' },
        { name: '计算机类（北京市）（含计算机科学与技术、软件工程、数据科学与大数据技术专业）', type: '专业', subject: '物理类', quota: 0, score: 632, rank: 8622, includes: '北京市；含计算机科学与技术、软件工程、数据科学与大数据技术专业' },
        { name: '电子信息类（北京市）（含电子信息工程、通信工程、人工智能专业）', type: '专业', subject: '物理类', quota: 0, score: 631, rank: 9012, includes: '北京市；含电子信息工程、通信工程、人工智能专业' },
        { name: '光电信息科学与工程（北京市）', type: '专业', subject: '物理类', quota: 0, score: 630, rank: 9436, includes: '北京市' },
        { name: '信息与计算科学', type: '专业', subject: '物理类', quota: 0, score: 629, rank: 9827, includes: '' },
        { name: '法学类（北京市）（含法学、法学（涉外法治）专业）', type: '大类', subject: '物理类', quota: 0, score: 629, rank: 9827, includes: '北京市；含法学、法学（涉外法治）专业' },
        { name: '统计学类（北京市）（含统计学、应用统计学专业）', type: '专业', subject: '物理类', quota: 0, score: 629, rank: 9827, includes: '北京市；含统计学、应用统计学专业' },
        { name: '统计学类', type: '专业', subject: '物理类', quota: 0, score: 628, rank: 10271, includes: '' },
        { name: '信息与计算科学（北京市）', type: '专业', subject: '物理类', quota: 0, score: 627, rank: 10703, includes: '北京市' },
        { name: '数字经济（北京市）（不能准确识别红、黄、绿、蓝、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形者不予录取）', type: '大类', subject: '物理类', quota: 0, score: 626, rank: 11148, includes: '北京市；不能准确识别红、黄、绿、蓝、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形者不予录取' },
        { name: '经济学类（北京市）（含经济学、财政学、金融学、国际经济与贸易专业）', type: '大类', subject: '物理类', quota: 0, score: 624, rank: 12091, includes: '北京市；含经济学、财政学、金融学、国际经济与贸易专业' },
        { name: '工商管理类（北京市）（含工商管理、会计学、财务管理、人力资源管理专业；不能准确识别红、黄、绿、蓝、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形者不予录取）', type: '大类', subject: '物理类', quota: 0, score: 623, rank: 12592, includes: '北京市；含工商管理、会计学、财务管理、人力资源管理专业；不能准确识别红、黄、绿、蓝、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形者不予录取' },
        { name: '纳米材料与技术（北京市）', type: '专业', subject: '物理类', quota: 0, score: 623, rank: 12592, includes: '北京市' },
        { name: '新闻传播学类（北京市）（含新闻学、广告学、网络与新媒体专业）', type: '大类', subject: '物理类', quota: 0, score: 622, rank: 13077, includes: '北京市；含新闻学、广告学、网络与新媒体专业' },
        { name: '生物科学类（北京市）（含生物科学、生态学专业；色弱、色盲和不能准确识别红、黄、绿、蓝、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形者不予录取）', type: '专业', subject: '物理类', quota: 0, score: 618, rank: 15171, includes: '北京市；含生物科学、生态学专业；色弱、色盲和不能准确识别红、黄、绿、蓝、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形者不予录取' },
        { name: '环境科学与工程类（北京市）（含环境工程、环境科学、化学专业）', type: '专业', subject: '物理类', quota: 0, score: 617, rank: 15775, includes: '北京市；含环境工程、环境科学、化学专业' },
        { name: '数据科学与大数据技术（北京市）（中外合作办学）（在海南校区（海南国际学院）就读）', type: '专业', subject: '物理类', quota: 0, score: 607, rank: 22009, includes: '北京市；中外合作办学；在海南校区（海南国际学院）就读' },
      ]
    }
  },
  {
    id: 15,
    name: '北京理工大学',
    province: '北京市',
    city: '北京',
    batch: '二期',
    intro: '中国一流的理工类研究型大学，创办于1940年，兵器科学与技术全国顶尖。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '社会科学试验班（人文社科方向）（含法学（含AI双学位）、法学、法学（中国政法大学联合培养）、社会工作、英语、日语、德语、西班牙语、德语（含车辆工程双学位）、英语（含法学双学位）专业）', type: '大类', subject: '历史类', quota: 0, score: 644, rank: 639, includes: '人文社科方向；含法学（含AI双学位）、法学、法学（中国政法大学联合培养）、社会工作、英语、日语、德语、西班牙语、德语（含车辆工程双学位）、英语（含法学双学位）专业' },
        { name: '社会科学试验班（管理与经济方向）（含工商管理（含数字创新管理方向）、工商管理（含AI双学位）、经济学、国际经济与贸易（含数字金融、数字贸易方向）专业）', type: '大类', subject: '历史类', quota: 0, score: 639, rank: 876, includes: '管理与经济方向；含工商管理（含数字创新管理方向）、工商管理（含AI双学位）、经济学、国际经济与贸易（含数字金融、数字贸易方向）专业' },
        { name: '工科试验班（卓越班）（含人工智能、机器人工程、数据科学与大数据技术、计算机科学与技术、智能制造工程、智能感知工程、网络空间安全专业；全院士团队导师，专业任选、校区任选）（大三后可选珠海），方向任选（可选本校自主培养或港大联培）', type: '专业', subject: '物理类', quota: 0, score: 673, rank: 550, includes: '卓越班；含人工智能、机器人工程、数据科学与大数据技术、计算机科学与技术、智能制造工程、智能感知工程、网络空间安全专业；全院士团队导师，专业任选、校区任选；大三后可选珠海），方向任选（可选本校自主培养或港大联培' },
        { name: '工科试验班（未来精工技术）（含人工智能、机器人工程、数据科学与大数据技术、计算机科学与技术、智能制造工程、智能感知工程、网络空间安全专业；全院士团队导师，专业任选、校区任选（大三后可选珠海），面向“智能无人+”方向）', type: '专业', subject: '物理类', quota: 0, score: 672, rank: 622, includes: '未来精工技术；含人工智能、机器人工程、数据科学与大数据技术、计算机科学与技术、智能制造工程、智能感知工程、网络空间安全专业；全院士团队导师，专业任选、校区任选（大三后可选珠海），面向“智能无人+”方向' },
        { name: '工科试验班（徐特立英才班）（含人工智能、机器人工程、数据科学与大数据技术、计算机科学与技术、智能制造工程、智能感知工程、网络空间安全、自动化、智能无人系统技术专业；专业任选，含智能班、领军班、协和医班，小班化、精英化、国际化培养）', type: '专业', subject: '物理类', quota: 0, score: 671, rank: 681, includes: '徐特立英才班；含人工智能、机器人工程、数据科学与大数据技术、计算机科学与技术、智能制造工程、智能感知工程、网络空间安全、自动化、智能无人系统技术专业；专业任选，含智能班、领军班、协和医班，小班化、精英化、国际化培养' },
        { name: '工科试验班（信息科学技术）（含人工智能、机器人工程、数据科学与大数据技术、自动化、电气工程及其自动化、计算机科学与技术、软件工程、网络空间安全、密码科学与技术、信息对抗技术专业）', type: '专业', subject: '物理类', quota: 0, score: 667, rank: 950, includes: '信息科学技术；含人工智能、机器人工程、数据科学与大数据技术、自动化、电气工程及其自动化、计算机科学与技术、软件工程、网络空间安全、密码科学与技术、信息对抗技术专业' },
        { name: '工科试验班（宇航与机电类）（含低空技术与工程、飞行器设计与工程、飞行器动力工程、航空航天工程、武器发射工程、探测制导与控制技术、工程力学、武器系统与工程、弹药工程与爆炸技术、特种能源技术与工程、安全工程、机械电子工程、智能无人系统技术专业）', type: '专业', subject: '物理类', quota: 0, score: 666, rank: 1013, includes: '宇航与机电类；含低空技术与工程、飞行器设计与工程、飞行器动力工程、航空航天工程、武器发射工程、探测制导与控制技术、工程力学、武器系统与工程、弹药工程与爆炸技术、特种能源技术与工程、安全工程、机械电子工程、智能无人系统技术专业' },
        { name: '工科试验班（电子信息实验班）（含光电信息科学与工程、测控技术与仪器、智能感知工程、电子信息工程、电子科学与技术、通信工程、微电子科学与工程专业）', type: '专业', subject: '物理类', quota: 0, score: 665, rank: 1135, includes: '电子信息实验班；含光电信息科学与工程、测控技术与仪器、智能感知工程、电子信息工程、电子科学与技术、通信工程、微电子科学与工程专业' },
        { name: '工科试验班（国家专项计划）（宇航与机电类）', type: '专业', subject: '物理类', quota: 0, score: 663, rank: 1345, includes: '国家专项计划；宇航与机电类' },
        { name: '工科试验班（国家专项计划）（智能制造与智能车辆菁英班）', type: '专业', subject: '物理类', quota: 0, score: 659, rank: 1816, includes: '国家专项计划；智能制造与智能车辆菁英班' },
        { name: '理科试验班（国家专项计划）（理学与材料菁英班）', type: '专业', subject: '物理类', quota: 0, score: 653, rank: 2699, includes: '国家专项计划；理学与材料菁英班' },
        { name: '能源与动力工程（中外合作办学）（在珠海校区就读）', type: '专业', subject: '物理类', quota: 0, score: 642, rank: 5268, includes: '中外合作办学；在珠海校区就读' },
        { name: '车辆工程（中外合作办学）（在珠海校区就读）', type: '专业', subject: '物理类', quota: 0, score: 639, rank: 6181, includes: '中外合作办学；在珠海校区就读' },
        { name: '会计学（中外合作办学）', type: '大类', subject: '物理类', quota: 0, score: 620, rank: 14098, includes: '中外合作办学' },
      ]
    }
  },
  {
    id: 16,
    name: '南开大学',
    province: '天津市',
    city: '天津',
    batch: '二期',
    intro: '中国著名的综合性研究型大学，创办于1919年，数学、化学、经济学等学科实力雄厚。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '金融学类（天津市）（含金融学、保险学（保险与精算）专业；本专业大类内专业任选）', type: '大类', subject: '历史类', quota: 0, score: 655, rank: 266, includes: '天津市；含金融学、保险学（保险与精算）专业；本专业大类内专业任选' },
        { name: '法学（天津市）', type: '大类', subject: '历史类', quota: 0, score: 651, rank: 378, includes: '天津市' },
        { name: '经济学类（天津市）（含经济学、国际经济与贸易、财政学、商务经济学专业；本专业大类内专业任选。身体条件要求详见学校招生章程）', type: '大类', subject: '历史类', quota: 0, score: 650, rank: 409, includes: '天津市；含经济学、国际经济与贸易、财政学、商务经济学专业；本专业大类内专业任选。身体条件要求详见学校招生章程' },
        { name: '中国语言文学类（天津市）（含汉语言文学、新闻学、网络与新媒体（出版与智能传播方向）、汉语国际教育专业；本专业大类内专业任选）', type: '大类', subject: '历史类', quota: 0, score: 648, rank: 475, includes: '天津市；含汉语言文学、新闻学、网络与新媒体（出版与智能传播方向）、汉语国际教育专业；本专业大类内专业任选' },
        { name: '工商管理类（天津市）（未来商业领导者计划）（含工商管理、人力资源管理、财务管理、会计学、市场营销、物流管理、图书馆学、档案学、旅游管理、会展经济与管理专业；本专业大类内专业任选。身体条件要求详见学校招生章程）', type: '大类', subject: '历史类', quota: 0, score: 648, rank: 475, includes: '天津市；未来商业领导者计划；含工商管理、人力资源管理、财务管理、会计学、市场营销、物流管理、图书馆学、档案学、旅游管理、会展经济与管理专业；本专业大类内专业任选。身体条件要求详见学校招生章程' },
        { name: '历史学类（天津市）（含历史学、世界史、文物与博物馆学专业；本专业大类内专业任选）', type: '大类', subject: '历史类', quota: 0, score: 647, rank: 512, includes: '天津市；含历史学、世界史、文物与博物馆学专业；本专业大类内专业任选' },
        { name: '哲学类', type: '大类', subject: '历史类', quota: 0, score: 643, rank: 679, includes: '' },
        { name: '理科试验班（天津市）（数学与智能省身班）（含信息与计算科学专业）', type: '专业', subject: '物理类', quota: 0, score: 663, rank: 1345, includes: '天津市；数学与智能省身班；含信息与计算科学专业' },
        { name: '工科试验班（天津市）（卓越拔尖计划伯苓班）（含光电信息科学与工程、计算机科学与技术、智能科学与技术专业；本专业大类内专业任选。身体条件要求详见学校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 662, rank: 1447, includes: '天津市；卓越拔尖计划伯苓班；含光电信息科学与工程、计算机科学与技术、智能科学与技术专业；本专业大类内专业任选。身体条件要求详见学校招生章程' },
        { name: '理科试验班（天津市）（卓越拔尖计划伯苓班）（含物理学、化学、生物科学专业；本专业大类内专业任选）', type: '专业', subject: '物理类', quota: 0, score: 659, rank: 1816, includes: '天津市；卓越拔尖计划伯苓班；含物理学、化学、生物科学专业；本专业大类内专业任选' },
        { name: '理科试验班（天津市）（数学与大数据）（含数学与应用数学、信息与计算科学、数据科学、统计学专业；本专业大类内专业任选）', type: '专业', subject: '物理类', quota: 0, score: 659, rank: 1816, includes: '天津市；数学与大数据；含数学与应用数学、信息与计算科学、数据科学、统计学专业；本专业大类内专业任选' },
        { name: '工科试验班（天津市）（信息科学与技术）（含计算机科学与技术、信息安全、物联网工程、自动化、智能科学与技术、软件工程专业；本专业大类内专业任选。身体条件要求详见学校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 656, rank: 2224, includes: '天津市；信息科学与技术；含计算机科学与技术、信息安全、物联网工程、自动化、智能科学与技术、软件工程专业；本专业大类内专业任选。身体条件要求详见学校招生章程' },
        { name: '临床医学（天津市）（5+3一体化）', type: '专业', subject: '物理类', quota: 0, score: 655, rank: 2366, includes: '天津市；5+3一体化' },
        { name: '理科试验班（天津市）（物理与光电信息技术工程）（含物理学、应用物理学、光电信息科学与工程、电子信息科学与技术、微电子科学与工程、电子科学与技术、通信工程专业；本专业大类内专业任选。身体条件要求详见学校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 654, rank: 2505, includes: '天津市；物理与光电信息技术工程；含物理学、应用物理学、光电信息科学与工程、电子信息科学与技术、微电子科学与工程、电子科学与技术、通信工程专业；本专业大类内专业任选。身体条件要求详见学校招生章程' },
        { name: '理科试验班（天津市）（物质科学与可持续发展）（含化学、应用化学、生物科学、生物技术、环境科学、环境工程、资源循环科学与工程、药学、药物化学、材料物理、材料化学专业；本专业大类内专业任选。身体条件要求详见学校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 650, rank: 3294, includes: '天津市；物质科学与可持续发展；含化学、应用化学、生物科学、生物技术、环境科学、环境工程、资源循环科学与工程、药学、药物化学、材料物理、材料化学专业；本专业大类内专业任选。身体条件要求详见学校招生章程' },
        { name: '金融学类（天津市）（含金融学、保险学（保险与精算）专业；本专业大类内专业任选）', type: '大类', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '天津市；含金融学、保险学（保险与精算）专业；本专业大类内专业任选' },
        { name: '口腔医学（天津市）', type: '专业', subject: '物理类', quota: 0, score: 648, rank: 3754, includes: '天津市' },
        { name: '工商管理类（天津市）（未来商业领导者计划）（含工商管理、人力资源管理、财务管理、会计学、市场营销、物流管理、图书馆学、档案学、旅游管理、会展经济与管理专业；本专业大类内专业任选。身体条件要求详见学校招生章程）', type: '大类', subject: '物理类', quota: 0, score: 648, rank: 3754, includes: '天津市；未来商业领导者计划；含工商管理、人力资源管理、财务管理、会计学、市场营销、物流管理、图书馆学、档案学、旅游管理、会展经济与管理专业；本专业大类内专业任选。身体条件要求详见学校招生章程' },
        { name: '经济学类（天津市）（含经济学、国际经济与贸易、财政学、商务经济学专业；本专业大类内专业任选。身体条件要求详见学校招生章程）', type: '大类', subject: '物理类', quota: 0, score: 646, rank: 4252, includes: '天津市；含经济学、国际经济与贸易、财政学、商务经济学专业；本专业大类内专业任选。身体条件要求详见学校招生章程' },
        { name: '理科试验班（国家专项计划）（物质科学与可持续发展）', type: '专业', subject: '物理类', quota: 0, score: 644, rank: 4724, includes: '国家专项计划；物质科学与可持续发展' },
      ]
    }
  },
  {
    id: 17,
    name: '天津大学',
    province: '天津市',
    city: '天津',
    batch: '二期',
    intro: '中国第一所现代大学，创办于1895年，化工、建筑、精密仪器等学科全国领先。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '建筑类（含城乡规划、风景园林、建筑学（5年制）专业；不招色盲色弱）', type: '大类', subject: '历史类', quota: 0, score: 625, rank: 1976, includes: '含城乡规划、风景园林、建筑学（5年制）专业；不招色盲色弱' },
        { name: '建筑学（中外合作办学）（5年制）（学费在本校期间20000元/年，大四在法国期间为7500欧元/年。不招色盲色弱）', type: '大类', subject: '历史类', quota: 0, score: 617, rank: 2906, includes: '中外合作办学；5年制；学费在本校期间20000元/年，大四在法国期间为7500欧元/年。不招色盲色弱' },
        { name: '工科试验班（智能与计算类）（含计算机科学与技术、人工智能、软件工程、网络空间安全专业；大类中软件工程专业后两年收费为14000元/年）', type: '专业', subject: '物理类', quota: 0, score: 654, rank: 2505, includes: '智能与计算类；含计算机科学与技术、人工智能、软件工程、网络空间安全专业；大类中软件工程专业后两年收费为14000元/年' },
        { name: '工科试验班（电子科学技术类）（含电子科学与技术（微电子）、集成电路设计与集成系统专业）', type: '专业', subject: '物理类', quota: 0, score: 654, rank: 2505, includes: '电子科学技术类；含电子科学与技术（微电子）、集成电路设计与集成系统专业' },
        { name: '光电信息科学与工程（与南开大学合办）', type: '专业', subject: '物理类', quota: 0, score: 653, rank: 2699, includes: '与南开大学合办' },
        { name: '工科试验班（电气信息类）（含电气工程及其自动化、电子信息工程、通信工程、物联网工程、智能电网信息工程、自动化、机器人工程专业）', type: '专业', subject: '物理类', quota: 0, score: 653, rank: 2699, includes: '电气信息类；含电气工程及其自动化、电子信息工程、通信工程、物联网工程、智能电网信息工程、自动化、机器人工程专业' },
        { name: '工科试验班（精仪与光电信息类）（含测控技术与仪器、电子科学与技术（光电子技术）、光电信息科学与工程、智能感知工程、海洋科学、海洋技术专业；不招色盲色弱）', type: '专业', subject: '物理类', quota: 0, score: 652, rank: 2914, includes: '精仪与光电信息类；含测控技术与仪器、电子科学与技术（光电子技术）、光电信息科学与工程、智能感知工程、海洋科学、海洋技术专业；不招色盲色弱' },
        { name: '工科试验班（高新舰船与海洋装备智能设计与管理）（含船舶与海洋工程专业）', type: '专业', subject: '物理类', quota: 0, score: 648, rank: 3754, includes: '高新舰船与海洋装备智能设计与管理；含船舶与海洋工程专业' },
        { name: '分子科学与工程（与南开大学合办）（不招色盲色弱）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '与南开大学合办；不招色盲色弱' },
        { name: '工科试验班（合成生物与生物制造）（含合成生物学、制药工程、生物工程、食品科学与工程专业；不招色盲色弱）', type: '专业', subject: '物理类', quota: 0, score: 644, rank: 4724, includes: '合成生物与生物制造；含合成生物学、制药工程、生物工程、食品科学与工程专业；不招色盲色弱' },
        { name: '医学试验班（新医科）（含智能医学工程、临床医学（5年制）、生物科学、药学、预防医学（5年制）、生物医学工程专业；分流前6200元/年，分流后按专业收费。不招色盲色弱）', type: '专业', subject: '物理类', quota: 0, score: 643, rank: 4995, includes: '新医科；含智能医学工程、临床医学（5年制）、生物科学、药学、预防医学（5年制）、生物医学工程专业；分流前6200元/年，分流后按专业收费。不招色盲色弱' },
        { name: '工科试验班（国家专项计划）（智能制造与建造）', type: '专业', subject: '物理类', quota: 0, score: 642, rank: 5268, includes: '国家专项计划；智能制造与建造' },
        { name: '工科试验班（智能制造与建造）（含工程力学、工业设计、机械设计制造及其自动化、能源与动力工程、智能制造工程、港口航道与海岸工程、水利水电工程、土木工程、建筑环境与能源应用工程、材料成型及控制工程、智慧建筑与建造专业）', type: '专业', subject: '物理类', quota: 0, score: 642, rank: 5268, includes: '智能制造与建造；含工程力学、工业设计、机械设计制造及其自动化、能源与动力工程、智能制造工程、港口航道与海岸工程、水利水电工程、土木工程、建筑环境与能源应用工程、材料成型及控制工程、智慧建筑与建造专业' },
        { name: '工科试验班（智慧化工与绿色低碳类）（含化学工程与工艺、精细化工、过程装备与控制工程、环境科学、环境工程专业；不招色盲色弱）', type: '专业', subject: '物理类', quota: 0, score: 641, rank: 5573, includes: '智慧化工与绿色低碳类；含化学工程与工艺、精细化工、过程装备与控制工程、环境科学、环境工程专业；不招色盲色弱' },
        { name: '经济管理试验班（含保密管理、工程管理、工业工程、信息管理与信息系统、供应链管理、财务管理、电子商务、金融学专业）', type: '专业', subject: '物理类', quota: 0, score: 640, rank: 5846, includes: '含保密管理、工程管理、工业工程、信息管理与信息系统、供应链管理、财务管理、电子商务、金融学专业' },
      ]
    }
  },
  {
    id: 18,
    name: '大连理工大学',
    province: '辽宁省',
    city: '大连',
    batch: '二期',
    intro: '中国一流的理工类研究型大学，创办于1949年，化工、机械、土木等工科实力雄厚。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '公共事业管理（含公共事业管理、知识产权。本专业与新闻传播学类、哲学类同学域培养,专业分流在上述专业内任选）', type: '大类', subject: '历史类', quota: 0, score: 626, rank: 1884, includes: '含公共事业管理、知识产权。本专业与新闻传播学类、哲学类同学域培养,专业分流在上述专业内任选' },
        { name: '新闻传播学类（含广播电视学、汉语言文学专业；本专业类与哲学类、公共事业管理、知识产权专业同学域培养,专业分流在上述专业内任选）', type: '大类', subject: '历史类', quota: 0, score: 625, rank: 1976, includes: '含广播电视学、汉语言文学专业；本专业类与哲学类、公共事业管理、知识产权专业同学域培养,专业分流在上述专业内任选' },
        { name: '哲学类（含哲学、马克思主义理论专业；本专业类与新闻传播学类、公共事业管理、知识产权同学域培养,专业分流在上述专业内任选）', type: '大类', subject: '历史类', quota: 0, score: 625, rank: 1976, includes: '含哲学、马克思主义理论专业；本专业类与新闻传播学类、公共事业管理、知识产权同学域培养,专业分流在上述专业内任选' },
        { name: '英语（只招英语语种考生；须口试合格；含英语、翻译，上述专业分流任选）', type: '大类', subject: '历史类', quota: 0, score: 621, rank: 2410, includes: '只招英语语种考生；须口试合格；含英语、翻译，上述专业分流任选' },
        { name: '日语（只招英语语种考生；须口试合格；本专业与英语、翻译专业同学域培养，学域内专业分流任选。2025年与大阪大学有联合培养项目；与早稻田大学、名古屋大学、北海道大学等大学有学分互认项目）', type: '大类', subject: '历史类', quota: 0, score: 619, rank: 2651, includes: '只招英语语种考生；须口试合格；本专业与英语、翻译专业同学域培养，学域内专业分流任选。2025年与大阪大学有联合培养项目；与早稻田大学、名古屋大学、北海道大学等大学有学分互认项目' },
        { name: '建筑类（含工业设计、建筑学、城乡规划；本专业类内分流任选）', type: '大类', subject: '历史类', quota: 0, score: 617, rank: 2906, includes: '含工业设计、建筑学、城乡规划；本专业类内分流任选' },
        { name: '人工智能（新工科大师班）（全校理工类专业任选。专业确认后按专业标准收费）', type: '专业', subject: '物理类', quota: 0, score: 659, rank: 1816, includes: '新工科大师班；全校理工类专业任选。专业确认后按专业标准收费' },
        { name: '电子信息类（创新班）（含电子信息工程、计算机科学与技术、未来机器人、自动化、电气工程及其自动化、光电信息科学与工程、生物医学工程专业；本专业类内分流任选。计算机科学与技术入选教育部“101计划”。电子信息工程、计算机等专业2025年与美国加州大学欧文分校、美国伊利诺伊大学芝加哥分校（UIC）、英国布里斯托大学有联合培养项目）', type: '专业', subject: '物理类', quota: 0, score: 652, rank: 2914, includes: '创新班；含电子信息工程、计算机科学与技术、未来机器人、自动化、电气工程及其自动化、光电信息科学与工程、生物医学工程专业；本专业类内分流任选。计算机科学与技术入选教育部“101计划”。电子信息工程、计算机等专业2025年与美国加州大学欧文分校、美国伊利诺伊大学芝加哥分校（UIC）、英国布里斯托大学有联合培养项目' },
        { name: '人工智能（创新班）', type: '专业', subject: '物理类', quota: 0, score: 652, rank: 2914, includes: '创新班' },
        { name: '人工智能（未来技术班）（智能+工程培养：低年级人工智能通识培养，高年级按学生意愿向人工智能、智能制造工程、智能车辆工程、智能分子工程、生物工程、智能建造专业分流）', type: '专业', subject: '物理类', quota: 0, score: 652, rank: 2914, includes: '未来技术班；智能+工程培养：低年级人工智能通识培养，高年级按学生意愿向人工智能、智能制造工程、智能车辆工程、智能分子工程、生物工程、智能建造专业分流' },
        { name: '工程力学（力学工科基础拔尖计划班）（国家拔尖计划2.0基地）', type: '专业', subject: '物理类', quota: 0, score: 651, rank: 3105, includes: '力学工科基础拔尖计划班；国家拔尖计划2.0基地' },
        { name: '智能制造工程（创新班）（含智能制造工程、机械设计制造及其自动化、智能车辆工程、测控技术与仪器，上述四个专业分流任选。机械工程等专业2025年与美国加州大学欧文分校、新加坡国立大学、日本早稻田大学、大阪大学、英国爱丁堡大学等国际知名大学有联合培养项目）', type: '专业', subject: '物理类', quota: 0, score: 651, rank: 3105, includes: '创新班；含智能制造工程、机械设计制造及其自动化、智能车辆工程、测控技术与仪器，上述四个专业分流任选。机械工程等专业2025年与美国加州大学欧文分校、新加坡国立大学、日本早稻田大学、大阪大学、英国爱丁堡大学等国际知名大学有联合培养项目' },
        { name: '储能科学与工程（新工科拔尖班）（含储能科学与工程、过程装备与控制工程、化学工程与工艺、安全工程，上述专业分流任选。不招色盲、色弱考生。2025年与美国加州大学欧文分校、美国伊利诺伊大学芝加哥分校、德国法兰克福大学、日本东京大学、新加坡南洋理工大学等有联合培养项目）', type: '专业', subject: '物理类', quota: 0, score: 651, rank: 3105, includes: '新工科拔尖班；含储能科学与工程、过程装备与控制工程、化学工程与工艺、安全工程，上述专业分流任选。不招色盲、色弱考生。2025年与美国加州大学欧文分校、美国伊利诺伊大学芝加哥分校、德国法兰克福大学、日本东京大学、新加坡南洋理工大学等有联合培养项目' },
        { name: '软件工程（创新班）（就读大连开发区校区。软件工程专业前两年学费5200元/年。2025年与美国加州大学欧文分校、比利时根特大学、英国布里斯托大学有联合培养项目）', type: '专业', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '创新班；就读大连开发区校区。软件工程专业前两年学费5200元/年。2025年与美国加州大学欧文分校、比利时根特大学、英国布里斯托大学有联合培养项目' },
        { name: '工程力学（创新班）（含工程力学（钱令希力学创新班）、工程力学（智算力学创新班），上述两个专业分流任选。国家拔尖计划2.0基地）', type: '专业', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '创新班；含工程力学（钱令希力学创新班）、工程力学（智算力学创新班），上述两个专业分流任选。国家拔尖计划2.0基地' },
        { name: '数学类（华罗庚数学国家基础学科拔尖计划班）（含信息与计算科学、数学与应用数学专业；本专业类内分流任选。国家拔尖计划2.0基地。入选教育部“101计划”。2025年与美国纽约州立大学奥尔巴尼分校、英国爱丁堡大学、曼彻斯特大学、布里斯托大学、卡迪夫大学有联合培养项目）', type: '专业', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '华罗庚数学国家基础学科拔尖计划班；含信息与计算科学、数学与应用数学专业；本专业类内分流任选。国家拔尖计划2.0基地。入选教育部“101计划”。2025年与美国纽约州立大学奥尔巴尼分校、英国爱丁堡大学、曼彻斯特大学、布里斯托大学、卡迪夫大学有联合培养项目' },
        { name: '电子信息类（含电子信息工程、计算机科学与技术、未来机器人、自动化、电气工程及其自动化、光电信息科学与工程、生物医学工程专业；本专业类内分流任选。计算机科学与技术入选教育部“101计划”。电子信息工程、计算机等专业2025年与美国加州大学欧文分校、美国伊利诺伊大学芝加哥分校（UIC）、英国布里斯托大学有联合培养项目）', type: '专业', subject: '物理类', quota: 0, score: 648, rank: 3754, includes: '含电子信息工程、计算机科学与技术、未来机器人、自动化、电气工程及其自动化、光电信息科学与工程、生物医学工程专业；本专业类内分流任选。计算机科学与技术入选教育部“101计划”。电子信息工程、计算机等专业2025年与美国加州大学欧文分校、美国伊利诺伊大学芝加哥分校（UIC）、英国布里斯托大学有联合培养项目' },
        { name: '电子科学与技术（含电子科学与技术、集成电路设计与集成系统、电子信息材料。本专业与软件工程、智能无人系统技术同学域培养，专业分流在上述专业内任选。所在学院为全国首批国家示范性微电子学院。就读大连开发区校区）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '含电子科学与技术、集成电路设计与集成系统、电子信息材料。本专业与软件工程、智能无人系统技术同学域培养，专业分流在上述专业内任选。所在学院为全国首批国家示范性微电子学院。就读大连开发区校区' },
        { name: '大数据管理与应用（新工科拔尖班）（含大数据管理与应用、信息管理与信息系统，上述两个专业分流任选。2025年与新加坡国立大学、新加坡南洋理工大学、英国布里斯托大学、德国亚琛工业大学有联合培养项目）', type: '大类', subject: '物理类', quota: 0, score: 646, rank: 4252, includes: '新工科拔尖班；含大数据管理与应用、信息管理与信息系统，上述两个专业分流任选。2025年与新加坡国立大学、新加坡南洋理工大学、英国布里斯托大学、德国亚琛工业大学有联合培养项目' },
        { name: '化工与制药类', type: '专业', subject: '物理类', quota: 0, score: 637, rank: 6838, includes: '' },
        { name: '大数据管理与应用', type: '大类', subject: '物理类', quota: 0, score: 636, rank: 7186, includes: '' },
        { name: '生物工程', type: '专业', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '' },
        { name: '智能建造', type: '专业', subject: '物理类', quota: 0, score: 633, rank: 8236, includes: '' },
        { name: '机械设计制造及其自动化（中外合作办学）（与美国加州大学欧文分校合作，部分课程采用英语授课，非英语语种考生慎重报考）', type: '专业', subject: '物理类', quota: 0, score: 632, rank: 8622, includes: '中外合作办学；与美国加州大学欧文分校合作，部分课程采用英语授课，非英语语种考生慎重报考' },
        { name: '数学与应用数学（中外合作办学）（与白俄罗斯国立大学合作，零起点学习俄语，部分课程采用英语授课，非英语语种考生慎重报考）', type: '专业', subject: '物理类', quota: 0, score: 626, rank: 11148, includes: '中外合作办学；与白俄罗斯国立大学合作，零起点学习俄语，部分课程采用英语授课，非英语语种考生慎重报考' },
        { name: '计算机类（中外合作办学）（含软件工程（中外合作办学）、数字媒体技术（中外合作办学）、物联网工程（中外合作办学）专业；就读大连开发区校区。与日本立命馆大学合作，零起点学习日语，部分课程采用英语、日语授课，非英语语种考生慎重报考）', type: '专业', subject: '物理类', quota: 0, score: 625, rank: 11635, includes: '中外合作办学；含软件工程（中外合作办学）、数字媒体技术（中外合作办学）、物联网工程（中外合作办学）专业；就读大连开发区校区。与日本立命馆大学合作，零起点学习日语，部分课程采用英语、日语授课，非英语语种考生慎重报考' },
        { name: '工程力学（中外合作办学）（与白俄罗斯国立大学合作，零起点学习俄语，部分课程采用英语授课，非英语语种考生慎重报考）', type: '专业', subject: '物理类', quota: 0, score: 622, rank: 13077, includes: '中外合作办学；与白俄罗斯国立大学合作，零起点学习俄语，部分课程采用英语授课，非英语语种考生慎重报考' },
        { name: '应用物理学（中外合作办学）（不招色盲考生。与白俄罗斯国立大学合作，零起点学习俄语，部分课程采用英语授课，非英语语种考生慎重报考）', type: '专业', subject: '物理类', quota: 0, score: 621, rank: 13587, includes: '中外合作办学；不招色盲考生。与白俄罗斯国立大学合作，零起点学习俄语，部分课程采用英语授课，非英语语种考生慎重报考' },
        { name: '建筑类', type: '大类', subject: '物理类', quota: 0, score: 615, rank: 16934, includes: '' },
      ]
    }
  },
  {
    id: 19,
    name: '东北大学',
    province: '辽宁省',
    city: '沈阳',
    batch: '二期',
    intro: '中国东北地区重要的研究型大学，创办于1923年，自动化、计算机、材料等学科特色鲜明。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '人文科学试验班（沈阳市）（含思想政治教育、哲学专业；身体条件要求详见院校招生章程）', type: '专业', subject: '历史类', quota: 0, score: 628, rank: 1697, includes: '沈阳市；含思想政治教育、哲学专业；身体条件要求详见院校招生章程' },
        { name: '公共管理类（沈阳市）（含法学、公共事业管理、行政管理、土地资源管理专业；身体条件要求详见院校招生章程）', type: '大类', subject: '历史类', quota: 0, score: 624, rank: 2071, includes: '沈阳市；含法学、公共事业管理、行政管理、土地资源管理专业；身体条件要求详见院校招生章程' },
        { name: '外国语言文学类（沈阳市）（含英语、日语、俄语、德语专业；只招英语语种考生；身体条件要求详见院校招生章程）', type: '大类', subject: '历史类', quota: 0, score: 620, rank: 2528, includes: '沈阳市；含英语、日语、俄语、德语专业；只招英语语种考生；身体条件要求详见院校招生章程' },
        { name: '人工智能（沈阳市）（未来技术学院）（入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '沈阳市；未来技术学院；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程' },
        { name: '机器人工程（沈阳市）（入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 644, rank: 4724, includes: '沈阳市；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程' },
        { name: '自动化类（沈阳市）（含自动化、电气工程及其自动化、测控技术与仪器、电子科学与技术、工业智能专业；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 644, rank: 4724, includes: '沈阳市；含自动化、电气工程及其自动化、测控技术与仪器、电子科学与技术、工业智能专业；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程' },
        { name: '人工智能（沈阳市）（入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 644, rank: 4724, includes: '沈阳市；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程' },
        { name: '计算机科学与技术（沈阳市）（入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 644, rank: 4724, includes: '沈阳市；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程' },
        { name: '电子信息类（沈阳市）（含电子信息工程、通信工程专业；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 643, rank: 4995, includes: '沈阳市；含电子信息工程、通信工程专业；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程' },
        { name: '物联网工程（沈阳市）（入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 643, rank: 4995, includes: '沈阳市；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程' },
        { name: '软件工程（沈阳市）（特色班）（入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；学年学费标准大一大二5200元/年，大三大四16000元/年；身体条件要求详见院校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 642, rank: 5268, includes: '沈阳市；特色班；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；学年学费标准大一大二5200元/年，大三大四16000元/年；身体条件要求详见院校招生章程' },
        { name: '计算机类（沈阳市）（含软件工程、信息安全、数字媒体技术专业；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；学年学费标准大一大二5200元/年，大三大四16000元/年；身体条件要求详见院校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 641, rank: 5573, includes: '沈阳市；含软件工程、信息安全、数字媒体技术专业；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；学年学费标准大一大二5200元/年，大三大四16000元/年；身体条件要求详见院校招生章程' },
        { name: '机械类（沈阳市）', type: '专业', subject: '物理类', quota: 0, score: 638, rank: 6503, includes: '沈阳市；国家专项计划' },
        { name: '数学类（沈阳市）', type: '专业', subject: '物理类', quota: 0, score: 638, rank: 6503, includes: '沈阳市；国家专项计划' },
        { name: '数学类（沈阳市）（含数学与应用数学、信息与计算科学专业；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 638, rank: 6503, includes: '沈阳市；含数学与应用数学、信息与计算科学专业；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程' },
        { name: '智能制造工程（沈阳市）（身体条件要求详见院校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 638, rank: 6503, includes: '沈阳市；身体条件要求详见院校招生章程' },
        { name: '能源与动力工程（沈阳市）（身体条件要求详见院校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 636, rank: 7186, includes: '沈阳市；身体条件要求详见院校招生章程' },
        { name: '机械类（沈阳市）（含机械工程、过程装备与控制工程、车辆工程、工业设计专业；身体条件要求详见院校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 635, rank: 7522, includes: '沈阳市；含机械工程、过程装备与控制工程、车辆工程、工业设计专业；身体条件要求详见院校招生章程' },
        { name: '新能源科学与工程（沈阳市）（身体条件要求详见院校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 635, rank: 7522, includes: '沈阳市；身体条件要求详见院校招生章程' },
        { name: '材料类（沈阳市）', type: '专业', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '沈阳市；国家专项计划' },
        { name: '应用物理学（沈阳市）（入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 633, rank: 8236, includes: '沈阳市；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程' },
        { name: '工程力学（沈阳市）（入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 633, rank: 8236, includes: '沈阳市；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程' },
        { name: '新能源材料与器件（沈阳市）（身体条件要求详见院校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 633, rank: 8236, includes: '沈阳市；身体条件要求详见院校招生章程' },
        { name: '工科试验班（沈阳市）（国家专项计划）（1）', type: '专业', subject: '物理类', quota: 0, score: 632, rank: 8622, includes: '沈阳市；国家专项计划；1' },
        { name: '化学类（沈阳市）（含化学、应用化学专业；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；不招色盲、色弱）', type: '专业', subject: '物理类', quota: 0, score: 632, rank: 8622, includes: '沈阳市；含化学、应用化学专业；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；不招色盲、色弱' },
        { name: '工科试验班（沈阳市）（1）（含冶金工程、环境科学、资源循环科学与工程专业；身体条件要求详见院校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 630, rank: 9436, includes: '沈阳市；1；含冶金工程、环境科学、资源循环科学与工程专业；身体条件要求详见院校招生章程' },
        { name: '材料类（沈阳市）（含材料科学与工程、材料成型及控制工程、材料物理专业；身体条件要求详见院校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 628, rank: 10271, includes: '沈阳市；含材料科学与工程、材料成型及控制工程、材料物理专业；身体条件要求详见院校招生章程' },
        { name: '化学类（沈阳市）', type: '专业', subject: '物理类', quota: 0, score: 627, rank: 10703, includes: '沈阳市；国家专项计划' },
        { name: '生物工程类（沈阳市）（含生物工程、生物制药专业；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；不招色盲、色弱）', type: '专业', subject: '物理类', quota: 0, score: 627, rank: 10703, includes: '沈阳市；含生物工程、生物制药专业；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；不招色盲、色弱' },
        { name: '工科试验班（沈阳市）（2）（含矿物加工工程、测绘工程、资源勘查工程、环境工程、安全工程、土木工程专业；身体条件要求详见院校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 624, rank: 12091, includes: '沈阳市；2；含矿物加工工程、测绘工程、资源勘查工程、环境工程、安全工程、土木工程专业；身体条件要求详见院校招生章程' },
        { name: '工科试验班（沈阳市）（国家专项计划）（2）', type: '专业', subject: '物理类', quota: 0, score: 622, rank: 13077, includes: '沈阳市；国家专项计划；2' },
        { name: '经济管理试验班（沈阳市）（含工商管理、市场营销、会计学、工业工程、信息管理与信息系统、金融学、经济学专业；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程）', type: '大类', subject: '物理类', quota: 0, score: 621, rank: 13587, includes: '沈阳市；含工商管理、市场营销、会计学、工业工程、信息管理与信息系统、金融学、经济学专业；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；身体条件要求详见院校招生章程' },
        { name: '建筑类（沈阳市）（含建筑学、城乡规划专业；身体条件要求详见院校招生章程）', type: '大类', subject: '物理类', quota: 0, score: 617, rank: 15775, includes: '沈阳市；含建筑学、城乡规划专业；身体条件要求详见院校招生章程' },
        { name: '智能采矿工程（沈阳市）', type: '专业', subject: '物理类', quota: 0, score: 615, rank: 16934, includes: '沈阳市；国家专项计划' },
        { name: '材料科学与工程（沈阳市）（中外合作办学）（中外合作办学）（国内学年学费30000元/年，国外学费（含注册费）4148欧元/年；建议外语语种为英语或法语的考生报考；身体条件要求详见院校招生章程）（中外合作办学）', type: '专业', subject: '物理类', quota: 0, score: 607, rank: 22009, includes: '沈阳市；中外合作办学；中外合作办学；国内学年学费30000元/年，国外学费（含注册费）4148欧元/年；建议外语语种为英语或法语的考生报考；身体条件要求详见院校招生章程' },
        { name: '生物医学工程（沈阳市）（中外合作办学）（中外合作办学）（国内学年学费45000元/年，第四年达到赴英国邓迪大学学习要求的学生，学费标准按照英国邓迪大学学费标准（约28941英镑/年）由邓迪大学收取，同时东北大学收取学籍注册费4500元/年；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；不招色盲、色弱）（中外合作办学）', type: '专业', subject: '物理类', quota: 0, score: 602, rank: 25574, includes: '沈阳市；中外合作办学；中外合作办学；国内学年学费45000元/年，第四年达到赴英国邓迪大学学习要求的学生，学费标准按照英国邓迪大学学费标准（约28941英镑/年）由邓迪大学收取，同时东北大学收取学籍注册费4500元/年；入学后部分课程采用英文教材和英语授课，外语语种为非英语的考生请慎重报考；不招色盲、色弱' },
      ]
    }
  },
  {
    id: 20,
    name: '吉林大学',
    province: '吉林省',
    city: '长春',
    batch: '二期',
    intro: '中国规模最大的综合性研究型大学之一，创办于1946年，学科门类齐全，法学、化学、车辆工程等实力突出。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '法学（吕振羽班）', type: '大类', subject: '历史类', quota: 0, score: 653, rank: 309, includes: '吕振羽班' },
        { name: '法学（涉外法治人才试验班）', type: '大类', subject: '历史类', quota: 0, score: 651, rank: 378, includes: '涉外法治人才试验班' },
        { name: '法学', type: '大类', subject: '历史类', quota: 0, score: 650, rank: 409, includes: '' },
        { name: '人文科学试验班（匡亚明班，双学士学位）（含汉语言文学、历史学专业）', type: '大类', subject: '历史类', quota: 0, score: 643, rank: 679, includes: '匡亚明班，双学士学位；含汉语言文学、历史学专业' },
        { name: '经济学（匡亚明班，拔尖学生培养基地）', type: '大类', subject: '历史类', quota: 0, score: 638, rank: 931, includes: '匡亚明班，拔尖学生培养基地' },
        { name: '汉语言文学', type: '大类', subject: '历史类', quota: 0, score: 637, rank: 1005, includes: '' },
        { name: '考古学（匡亚明班，拔尖学生培养基地）', type: '大类', subject: '历史类', quota: 0, score: 637, rank: 1005, includes: '匡亚明班，拔尖学生培养基地' },
        { name: '哲学（匡亚明班，拔尖学生培养基地）', type: '大类', subject: '历史类', quota: 0, score: 637, rank: 1005, includes: '匡亚明班，拔尖学生培养基地' },
        { name: '考古学（按类招。含考古学、文物与博物馆学）', type: '大类', subject: '历史类', quota: 0, score: 633, rank: 1262, includes: '按类招。含考古学、文物与博物馆学' },
        { name: '经济学类（含经济学、财政学、国际经济与贸易、金融学专业）', type: '大类', subject: '历史类', quota: 0, score: 633, rank: 1262, includes: '含经济学、财政学、国际经济与贸易、金融学专业' },
        { name: '历史学', type: '大类', subject: '历史类', quota: 0, score: 632, rank: 1349, includes: '' },
        { name: '英语（只招英语语种考生）', type: '大类', subject: '历史类', quota: 0, score: 632, rank: 1349, includes: '只招英语语种考生' },
        { name: '政治学与行政学', type: '专业', subject: '历史类', quota: 0, score: 631, rank: 1447, includes: '' },
        { name: '经济学（国别与区域经济）', type: '大类', subject: '历史类', quota: 0, score: 629, rank: 1611, includes: '国别与区域经济' },
        { name: '哲学', type: '大类', subject: '历史类', quota: 0, score: 629, rank: 1611, includes: '' },
        { name: '社会学类（含社会学、社会工作专业）', type: '大类', subject: '历史类', quota: 0, score: 628, rank: 1697, includes: '含社会学、社会工作专业' },
        { name: '政治学与行政学（按类招。含政治学与行政学、国际政治、行政管理）', type: '专业', subject: '历史类', quota: 0, score: 627, rank: 1789, includes: '按类招。含政治学与行政学、国际政治、行政管理' },
        { name: '日语（只招英语语种考生；零起点培养）', type: '大类', subject: '历史类', quota: 0, score: 627, rank: 1789, includes: '只招英语语种考生；零起点培养' },
        { name: '外交学（宜英语语种考生就读）', type: '专业', subject: '历史类', quota: 0, score: 627, rank: 1789, includes: '宜英语语种考生就读' },
        { name: '俄语（双学士学位）（只招英语语种考生；零起点培养。俄语-国际经济与贸易双学士学位复合型人才培养项目：外国语言文化学院和经济学院联合建设）', type: '大类', subject: '历史类', quota: 0, score: 625, rank: 1976, includes: '双学士学位；只招英语语种考生；零起点培养。俄语-国际经济与贸易双学士学位复合型人才培养项目：外国语言文化学院和经济学院联合建设' },
        { name: '俄语（只招英语语种考生；零起点培养）', type: '大类', subject: '历史类', quota: 0, score: 624, rank: 2071, includes: '只招英语语种考生；零起点培养' },
        { name: '日语（双学士学位）（只招英语语种考生；零起点培养。日语-国际经济与贸易双学士学位复合型人才培养项目：外国语言文化学院和经济学院联合建设）', type: '大类', subject: '历史类', quota: 0, score: 623, rank: 2181, includes: '双学士学位；只招英语语种考生；零起点培养。日语-国际经济与贸易双学士学位复合型人才培养项目：外国语言文化学院和经济学院联合建设' },
        { name: '新闻传播学类（含新闻学、广告学专业）', type: '大类', subject: '历史类', quota: 0, score: 623, rank: 2181, includes: '含新闻学、广告学专业' },
        { name: '集成电路设计与集成系统（集成电路科技英才特色班）', type: '专业', subject: '物理类', quota: 0, score: 651, rank: 3105, includes: '集成电路科技英才特色班' },
        { name: '临床医学（白求恩班）（宜英语语种考生就读。白求恩第一临床医学院）', type: '专业', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '白求恩班；宜英语语种考生就读。白求恩第一临床医学院' },
        { name: '临床医学（5+3一体化）（宜英语语种考生就读。白求恩第一临床医学院）', type: '专业', subject: '物理类', quota: 0, score: 648, rank: 3754, includes: '5+3一体化；宜英语语种考生就读。白求恩第一临床医学院' },
        { name: '人工智能（王湘浩班）（宜英语语种考生就读）', type: '专业', subject: '物理类', quota: 0, score: 648, rank: 3754, includes: '王湘浩班；宜英语语种考生就读' },
        { name: '车辆工程（饶斌班）（智能电动车辆工程方向）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '饶斌班；智能电动车辆工程方向' },
        { name: '网络空间安全（王湘浩班）（宜英语语种考生就读）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '王湘浩班；宜英语语种考生就读' },
        { name: '计算机科学与技术（宜英语语种考生就读）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '宜英语语种考生就读' },
        { name: '临床医学（白求恩班）（宜英语语种考生就读。白求恩第二临床医学院）', type: '专业', subject: '物理类', quota: 0, score: 646, rank: 4252, includes: '白求恩班；宜英语语种考生就读。白求恩第二临床医学院' },
        { name: '临床医学（5+3一体化）（宜英语语种考生就读。白求恩第三临床医学院）', type: '专业', subject: '物理类', quota: 0, score: 645, rank: 4467, includes: '5+3一体化；宜英语语种考生就读。白求恩第三临床医学院' },
        { name: '人工智能（宜英语语种考生就读）', type: '专业', subject: '物理类', quota: 0, score: 645, rank: 4467, includes: '宜英语语种考生就读' },
        { name: '测控技术与仪器（黄大年班）', type: '专业', subject: '物理类', quota: 0, score: 645, rank: 4467, includes: '黄大年班' },
        { name: '口腔医学（5+3一体化）', type: '专业', subject: '物理类', quota: 0, score: 644, rank: 4724, includes: '5+3一体化' },
        { name: '网络空间安全（宜英语语种考生就读）', type: '专业', subject: '物理类', quota: 0, score: 644, rank: 4724, includes: '宜英语语种考生就读' },
        { name: '物联网工程（宜英语语种考生就读）', type: '专业', subject: '物理类', quota: 0, score: 644, rank: 4724, includes: '宜英语语种考生就读' },
        { name: '自动化', type: '专业', subject: '物理类', quota: 0, score: 643, rank: 4995, includes: '' },
        { name: '理科试验班（唐敖庆班）（含物理学类、化学类、生物科学类专业）', type: '专业', subject: '物理类', quota: 0, score: 643, rank: 4995, includes: '唐敖庆班；含物理学类、化学类、生物科学类专业' },
        { name: '电气工程及其自动化', type: '专业', subject: '物理类', quota: 0, score: 643, rank: 4995, includes: '' },
        { name: '机器人工程', type: '专业', subject: '物理类', quota: 0, score: 643, rank: 4995, includes: '' },
        { name: '集成电路设计与集成系统', type: '专业', subject: '物理类', quota: 0, score: 643, rank: 4995, includes: '' },
        { name: '软件工程（宜英语语种考生就读。第3、4年学费共28000元）', type: '专业', subject: '物理类', quota: 0, score: 641, rank: 5573, includes: '宜英语语种考生就读。第3、4年学费共28000元' },
        { name: '电子信息类（含电子科学与技术、微电子科学与工程、电子信息科学与技术专业）', type: '专业', subject: '物理类', quota: 0, score: 641, rank: 5573, includes: '含电子科学与技术、微电子科学与工程、电子信息科学与技术专业' },
        { name: '网络空间安全', type: '专业', subject: '物理类', quota: 0, score: 640, rank: 5846, includes: '' },
        { name: '法学', type: '大类', subject: '物理类', quota: 0, score: 640, rank: 5846, includes: '' },
        { name: '车辆工程（含新能源汽车和智能汽车方向）', type: '专业', subject: '物理类', quota: 0, score: 640, rank: 5846, includes: '含新能源汽车和智能汽车方向' },
        { name: '通信工程', type: '专业', subject: '物理类', quota: 0, score: 640, rank: 5846, includes: '' },
        { name: '仪器类（含测控技术与仪器、智能感知工程专业）', type: '专业', subject: '物理类', quota: 0, score: 640, rank: 5846, includes: '含测控技术与仪器、智能感知工程专业' },
        { name: '数据科学与大数据技术（宜英语语种考生就读。第3、4年学费共28000元）', type: '专业', subject: '物理类', quota: 0, score: 640, rank: 5846, includes: '宜英语语种考生就读。第3、4年学费共28000元' },
        { name: '信息工程', type: '专业', subject: '物理类', quota: 0, score: 640, rank: 5846, includes: '' },
        { name: '智能制造工程', type: '专业', subject: '物理类', quota: 0, score: 639, rank: 6181, includes: '' },
        { name: '空间信息与数字技术', type: '专业', subject: '物理类', quota: 0, score: 639, rank: 6181, includes: '' },
        { name: '新能源科学与工程', type: '专业', subject: '物理类', quota: 0, score: 639, rank: 6181, includes: '' },
        { name: '机械工程', type: '专业', subject: '物理类', quota: 0, score: 639, rank: 6181, includes: '' },
        { name: '数学类（含数学与应用数学、信息与计算科学、统计学专业）', type: '专业', subject: '物理类', quota: 0, score: 638, rank: 6503, includes: '含数学与应用数学、信息与计算科学、统计学专业' },
        { name: '物理学类（含物理学、应用物理学专业）', type: '专业', subject: '物理类', quota: 0, score: 637, rank: 6838, includes: '含物理学、应用物理学专业' },
        { name: '临床医学（宜英语语种考生就读。白求恩第一临床医学院）', type: '专业', subject: '物理类', quota: 0, score: 637, rank: 6838, includes: '宜英语语种考生就读。白求恩第一临床医学院' },
        { name: '工程力学', type: '专业', subject: '物理类', quota: 0, score: 637, rank: 6838, includes: '' },
        { name: '临床医学（宜英语语种考生就读。白求恩第三临床医学院）', type: '专业', subject: '物理类', quota: 0, score: 636, rank: 7186, includes: '宜英语语种考生就读。白求恩第三临床医学院' },
        { name: '口腔医学', type: '专业', subject: '物理类', quota: 0, score: 636, rank: 7186, includes: '' },
        { name: '能源与动力工程', type: '专业', subject: '物理类', quota: 0, score: 636, rank: 7186, includes: '' },
        { name: '仿生科学与工程', type: '专业', subject: '物理类', quota: 0, score: 636, rank: 7186, includes: '' },
        { name: '临床医学（5+3一体化，儿科学）（宜英语语种考生就读）', type: '专业', subject: '物理类', quota: 0, score: 635, rank: 7522, includes: '5+3一体化，儿科学；宜英语语种考生就读' },
        { name: '临床医学（眼科学特色班）（宜英语语种考生就读。白求恩第二临床医学院）', type: '专业', subject: '物理类', quota: 0, score: 635, rank: 7522, includes: '眼科学特色班；宜英语语种考生就读。白求恩第二临床医学院' },
        { name: '农业机械化及其自动化', type: '专业', subject: '物理类', quota: 0, score: 635, rank: 7522, includes: '' },
        { name: '口腔医学', type: '专业', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '' },
        { name: '材料物理（入校后可自愿选择申请新加坡国立大学、英国曼彻斯特大学联合培养项目）', type: '专业', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '入校后可自愿选择申请新加坡国立大学、英国曼彻斯特大学联合培养项目' },
        { name: '物流管理（双学士学位）（物流管理-计算机科学与技术双学士学位复合型人才培养项目：商学与管理学院和计算机科学与技术学院联合建设。入学后可参与选拔新加坡国立大学联合培养项目）', type: '大类', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '双学士学位；物流管理-计算机科学与技术双学士学位复合型人才培养项目：商学与管理学院和计算机科学与技术学院联合建设。入学后可参与选拔新加坡国立大学联合培养项目' },
        { name: '工业设计（含汽车造型与结构方向）', type: '专业', subject: '物理类', quota: 0, score: 633, rank: 8236, includes: '含汽车造型与结构方向' },
        { name: '化学类（含化学、应用化学、材料化学、高分子材料与工程、化学工程与工艺专业；宜英语语种考生就读）', type: '专业', subject: '物理类', quota: 0, score: 632, rank: 8622, includes: '含化学、应用化学、材料化学、高分子材料与工程、化学工程与工艺专业；宜英语语种考生就读' },
        { name: '生物医学科学（白求恩班）', type: '专业', subject: '物理类', quota: 0, score: 632, rank: 8622, includes: '白求恩班' },
        { name: '英语（只招英语语种考生）', type: '大类', subject: '物理类', quota: 0, score: 631, rank: 9012, includes: '只招英语语种考生' },
        { name: '材料类（含材料科学与工程、无机非金属材料工程、材料成型及控制工程专业；入校后可自愿选择申请新加坡国立大学、英国曼彻斯特大学联合培养项目）', type: '专业', subject: '物理类', quota: 0, score: 630, rank: 9436, includes: '含材料科学与工程、无机非金属材料工程、材料成型及控制工程专业；入校后可自愿选择申请新加坡国立大学、英国曼彻斯特大学联合培养项目' },
        { name: '交通运输类（含交通运输、交通工程、道路桥梁与渡河工程专业）', type: '专业', subject: '物理类', quota: 0, score: 630, rank: 9436, includes: '含交通运输、交通工程、道路桥梁与渡河工程专业' },
        { name: '工业工程', type: '专业', subject: '物理类', quota: 0, score: 630, rank: 9436, includes: '' },
        { name: '经济学类（含经济学、财政学、国际经济与贸易、金融学专业）', type: '大类', subject: '物理类', quota: 0, score: 629, rank: 9827, includes: '含经济学、财政学、国际经济与贸易、金融学专业' },
        { name: '生物科学类（含生物科学、生物技术、生物制药专业）', type: '专业', subject: '物理类', quota: 0, score: 629, rank: 9827, includes: '含生物科学、生物技术、生物制药专业' },
        { name: '生物医学科学', type: '专业', subject: '物理类', quota: 0, score: 629, rank: 9827, includes: '' },
        { name: '工商管理（双学士学位）（工商管理-法学双学士学位复合型人才培养项目：商学与管理学院和法学院联合建设）', type: '大类', subject: '物理类', quota: 0, score: 628, rank: 10271, includes: '双学士学位；工商管理-法学双学士学位复合型人才培养项目：商学与管理学院和法学院联合建设' },
        { name: '会计学（按类招。含会计学、财务管理。财务管理专业的培养方向为：数智化决策）', type: '大类', subject: '物理类', quota: 0, score: 627, rank: 10703, includes: '按类招。含会计学、财务管理。财务管理专业的培养方向为：数智化决策' },
        { name: '水利类（含水文与水资源工程、地下水科学与工程专业）', type: '专业', subject: '物理类', quota: 0, score: 627, rank: 10703, includes: '含水文与水资源工程、地下水科学与工程专业' },
        { name: '管理科学与工程类（含信息管理与信息系统、大数据管理与应用专业；信息管理与信息系统专业培养特色方向为：信息系统与数智化管理）', type: '大类', subject: '物理类', quota: 0, score: 627, rank: 10703, includes: '含信息管理与信息系统、大数据管理与应用专业；信息管理与信息系统专业培养特色方向为：信息系统与数智化管理' },
        { name: '经济学（数量经济）（入校后可参与选拔吉林大学与美国威斯康星大学麦迪逊分校的合作项目）', type: '大类', subject: '物理类', quota: 0, score: 626, rank: 11148, includes: '数量经济；入校后可参与选拔吉林大学与美国威斯康星大学麦迪逊分校的合作项目' },
        { name: '放射医学', type: '专业', subject: '物理类', quota: 0, score: 626, rank: 11148, includes: '' },
        { name: '药学', type: '专业', subject: '物理类', quota: 0, score: 626, rank: 11148, includes: '' },
        { name: '临床药学', type: '专业', subject: '物理类', quota: 0, score: 626, rank: 11148, includes: '' },
        { name: '动物医学（徐华清班）（农林类；宜英语语种考生就读）', type: '专业', subject: '物理类', quota: 0, score: 626, rank: 11148, includes: '徐华清班；农林类；宜英语语种考生就读' },
        { name: '地质工程（黄大年班）', type: '专业', subject: '物理类', quota: 0, score: 626, rank: 11148, includes: '黄大年班' },
        { name: '地质学（李四光班）', type: '专业', subject: '物理类', quota: 0, score: 626, rank: 11148, includes: '李四光班' },
        { name: '金融科技（入校后可参与选拔吉林大学与美国威斯康星大学麦迪逊分校的合作项目）', type: '大类', subject: '物理类', quota: 0, score: 626, rank: 11148, includes: '入校后可参与选拔吉林大学与美国威斯康星大学麦迪逊分校的合作项目' },
        { name: '农业机械化及其自动化', type: '专业', subject: '物理类', quota: 0, score: 625, rank: 11635, includes: '' },
        { name: '经济学（国别与区域经济）', type: '大类', subject: '物理类', quota: 0, score: 625, rank: 11635, includes: '国别与区域经济' },
        { name: '人力资源管理', type: '大类', subject: '物理类', quota: 0, score: 625, rank: 11635, includes: '' },
        { name: '政治学与行政学（按类招。含政治学与行政学、国际政治、行政管理）', type: '专业', subject: '物理类', quota: 0, score: 624, rank: 12091, includes: '按类招。含政治学与行政学、国际政治、行政管理' },
        { name: '管理科学与工程类', type: '大类', subject: '物理类', quota: 0, score: 623, rank: 12592, includes: '' },
        { name: '食品科学与工程类（含食品科学与工程、食品质量与安全专业）', type: '专业', subject: '物理类', quota: 0, score: 623, rank: 12592, includes: '含食品科学与工程、食品质量与安全专业' },
        { name: '环境科学与工程类（含环境科学、环境工程专业）', type: '专业', subject: '物理类', quota: 0, score: 623, rank: 12592, includes: '含环境科学、环境工程专业' },
        { name: '地下水科学与工程（黄大年班）', type: '专业', subject: '物理类', quota: 0, score: 623, rank: 12592, includes: '黄大年班' },
        { name: '勘查技术与工程（按类招。含勘查技术与工程、地球物理学、地理信息科学、测绘工程）', type: '专业', subject: '物理类', quota: 0, score: 621, rank: 13587, includes: '按类招。含勘查技术与工程、地球物理学、地理信息科学、测绘工程' },
        { name: '档案学', type: '大类', subject: '物理类', quota: 0, score: 620, rank: 14098, includes: '' },
        { name: '地质类（含地质学、资源勘查工程、土地资源管理专业）', type: '专业', subject: '物理类', quota: 0, score: 619, rank: 14636, includes: '含地质学、资源勘查工程、土地资源管理专业' },
        { name: '土木类（含土木工程、地质工程专业；土木工程专业可参与选拔法国南特中央理工大学、德国亚琛工业大学联合培养项目）', type: '专业', subject: '物理类', quota: 0, score: 617, rank: 15775, includes: '含土木工程、地质工程专业；土木工程专业可参与选拔法国南特中央理工大学、德国亚琛工业大学联合培养项目' },
        { name: '康复治疗学', type: '专业', subject: '物理类', quota: 0, score: 616, rank: 16339, includes: '' },
        { name: '物理学（中外合作办学）（39,000元/学年·人（1、2、3学年国内学习期间），第4年在俄罗斯托姆斯克理工大学学习，学费外方收取，学费待定）', type: '专业', subject: '物理类', quota: 0, score: 612, rank: 18720, includes: '中外合作办学；39,000元/学年·人（1、2、3学年国内学习期间），第4年在俄罗斯托姆斯克理工大学学习，学费外方收取，学费待定' },
        { name: '动物医学', type: '专业', subject: '物理类', quota: 0, score: 609, rank: 20698, includes: '' },
        { name: '植物生产类', type: '专业', subject: '物理类', quota: 0, score: 609, rank: 20698, includes: '' },
      ]
    }
  },
  {
    id: 21,
    name: '同济大学',
    province: '上海市',
    city: '上海',
    batch: '二期',
    intro: '中国著名的综合性研究型大学，创办于1907年，土木工程、建筑学全国顶尖。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '法学（上海市）（含双学位培养项目：法学-英语，德语-法学，土木工程-法学，城乡规划-法学）', type: '大类', subject: '历史类', quota: 0, score: 652, rank: 345, includes: '上海市；含双学位培养项目：法学-英语，德语-法学，土木工程-法学，城乡规划-法学' },
        { name: '人文科学试验班（上海市）（含传播学、德语、英语（数智人文）、日语、哲学、文化产业管理、汉语言文学专业；含双学位培养项目：德语-政治学与行政学，法学-英语，德语-法学）', type: '大类', subject: '历史类', quota: 0, score: 647, rank: 512, includes: '上海市；含传播学、德语、英语（数智人文）、日语、哲学、文化产业管理、汉语言文学专业；含双学位培养项目：德语-政治学与行政学，法学-英语，德语-法学' },
        { name: '工科试验班（上海市）（国豪精英班）（工科拔尖人才培养计划，含未来技术班；所有工科专业任选。专业确认后按专业标准收费）', type: '专业', subject: '物理类', quota: 0, score: 670, rank: 733, includes: '上海市；国豪精英班；工科拔尖人才培养计划，含未来技术班；所有工科专业任选。专业确认后按专业标准收费' },
        { name: '人工智能（上海市）（拔尖班）（单色不能识别者不予录取）', type: '专业', subject: '物理类', quota: 0, score: 669, rank: 788, includes: '上海市；拔尖班；单色不能识别者不予录取' },
        { name: '工科试验班（上海市）（卓越计划班）（含机器人、工程互联网、智能网联车辆、智慧空间四个领域，领域内专业任选）', type: '专业', subject: '物理类', quota: 0, score: 663, rank: 1345, includes: '上海市；卓越计划班；含机器人、工程互联网、智能网联车辆、智慧空间四个领域，领域内专业任选' },
        { name: '工科试验班（上海市）（信息与智能网联类）（含计算机科学与技术、信息安全、数据科学与大数据技术、电气工程及其自动化、自动化、通信工程、人工智能、微电子科学与工程、软件工程、交通工程、交通运输、车辆工程（汽车）、车辆工程、测绘工程、光电信息科学与工程专业；含双学位培养项目：光电信息科学与工程-应用物理学，微电子科学与工程-应用物理学，测绘工程-应用物理学，视觉传达设计-人工智能，交通工程-数学与应用数学。含计算机科学拔尖学生培养基地。分流专业中软件工程三、四年级收费标准为每年16000元）', type: '专业', subject: '物理类', quota: 0, score: 660, rank: 1688, includes: '上海市；信息与智能网联类；含计算机科学与技术、信息安全、数据科学与大数据技术、电气工程及其自动化、自动化、通信工程、人工智能、微电子科学与工程、软件工程、交通工程、交通运输、车辆工程（汽车）、车辆工程、测绘工程、光电信息科学与工程专业；含双学位培养项目：光电信息科学与工程-应用物理学，微电子科学与工程-应用物理学，测绘工程-应用物理学，视觉传达设计-人工智能，交通工程-数学与应用数学。含计算机科学拔尖学生培养基地。分流专业中软件工程三、四年级收费标准为每年16000元' },
        { name: '临床医学（上海市）（5+3一体化）（本硕衔接培养，合格毕业生获执业医师资格证、住院医师规范化培训合格证书、硕士研究生毕业证和学位证。该专业不招色盲、色弱考生）', type: '专业', subject: '物理类', quota: 0, score: 658, rank: 1944, includes: '上海市；5+3一体化；本硕衔接培养，合格毕业生获执业医师资格证、住院医师规范化培训合格证书、硕士研究生毕业证和学位证。该专业不招色盲、色弱考生' },
        { name: '工科试验班（上海市）（智能化制造与新能源类）（含新能源材料与器件、机械设计制造及其自动化、能源与动力工程、智能制造工程、飞行器制造工程、建筑环境与能源应用工程、工业设计专业；含双学位培养项目：能源与动力工程-应用化学。分流专业中工业设计收费标准为每年7700元）', type: '专业', subject: '物理类', quota: 0, score: 657, rank: 2081, includes: '上海市；智能化制造与新能源类；含新能源材料与器件、机械设计制造及其自动化、能源与动力工程、智能制造工程、飞行器制造工程、建筑环境与能源应用工程、工业设计专业；含双学位培养项目：能源与动力工程-应用化学。分流专业中工业设计收费标准为每年7700元' },
        { name: '金融学（上海市）（数学双学士学位）', type: '专业', subject: '物理类', quota: 0, score: 655, rank: 2366, includes: '上海市；数学双学士学位' },
        { name: '理科试验班（上海市）（含数学与应用数学、统计学、应用物理学、工程力学、材料科学与工程、海洋科学与技术、应用化学专业；该类分流时学院内专业任选；含双学位：金融学-数学，光电信息科学与工程-物理，微电子科学与工程-物理，土木工程-数学，环境工程-数学，交通工程-数学，测绘工程-物理，能源与动力工程-化学，建筑学-物理，地质工程-物理。含物理学、数学、化学、力学拔尖学生培养基地，先进材料拔尖班）', type: '专业', subject: '物理类', quota: 0, score: 654, rank: 2505, includes: '上海市；含数学与应用数学、统计学、应用物理学、工程力学、材料科学与工程、海洋科学与技术、应用化学专业；该类分流时学院内专业任选；含双学位：金融学-数学，光电信息科学与工程-物理，微电子科学与工程-物理，土木工程-数学，环境工程-数学，交通工程-数学，测绘工程-物理，能源与动力工程-化学，建筑学-物理，地质工程-物理。含物理学、数学、化学、力学拔尖学生培养基地，先进材料拔尖班' },
        { name: '医学试验班（上海市）（含临床医学（领军人才培养）、临床医学、口腔医学、生物技术、生物信息学专业；该专业不招色盲、色弱考生。含生命科学拔尖学生培养基地。分流专业中生物技术和生物信息学为四年制）', type: '专业', subject: '物理类', quota: 0, score: 654, rank: 2505, includes: '上海市；含临床医学（领军人才培养）、临床医学、口腔医学、生物技术、生物信息学专业；该专业不招色盲、色弱考生。含生命科学拔尖学生培养基地。分流专业中生物技术和生物信息学为四年制' },
        { name: '机械类（上海市）（中外合作办学）（含机械电子工程（中外合作办学）、建筑电气与智能化（中外合作办学）、车辆工程（中外合作办学）专业；中国教育部与德国联邦科研、技术和宇航部（BMFTR）（原德国联邦教研部BMBF）共同倡议和直接经费支持在同济大学设立的中外合作办学项目。采用3（同济）+1（德国/瑞士）进阶式国际化人才培养模式，成绩合格者获得同济大学毕业证、工学学士学位证以及外方合作院校学士学位证书）', type: '专业', subject: '物理类', quota: 0, score: 650, rank: 3294, includes: '上海市；中外合作办学；含机械电子工程（中外合作办学）、建筑电气与智能化（中外合作办学）、车辆工程（中外合作办学）专业；中国教育部与德国联邦科研、技术和宇航部（BMFTR；原德国联邦教研部BMBF）共同倡议和直接经费支持在同济大学设立的中外合作办学项目。采用3（同济）+1（德国/瑞士）进阶式国际化人才培养模式，成绩合格者获得同济大学毕业证、工学学士学位证以及外方合作院校学士学位证书' },
        { name: '工科试验班（国家专项计划）（交通学院）', type: '专业', subject: '物理类', quota: 0, score: 645, rank: 4467, includes: '国家专项计划；交通学院' },
        { name: '工科试验班（国家专项计划）（土木学院）', type: '专业', subject: '物理类', quota: 0, score: 637, rank: 6838, includes: '国家专项计划；土木学院' },
        { name: '工科试验班（国家专项计划）（环境学院）', type: '专业', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '国家专项计划；环境学院' },
      ]
    }
  },
  {
    id: 22,
    name: '华东师范大学',
    province: '上海市',
    city: '上海',
    batch: '二期',
    intro: '中国师范类顶尖高校之一，创办于1951年，教育学、地理学、软件工程等学科实力雄厚。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '汉语言文学（上海市）', type: '大类', subject: '历史类', quota: 0, score: 651, rank: 378, includes: '上海市' },
        { name: '法学（上海市）（双学位）（与心理学进行双学士学位培养）', type: '大类', subject: '历史类', quota: 0, score: 649, rank: 435, includes: '上海市；双学位；与心理学进行双学士学位培养' },
        { name: '新闻传播学类（上海市）（含新闻学、编辑出版学专业）', type: '大类', subject: '历史类', quota: 0, score: 646, rank: 555, includes: '上海市；含新闻学、编辑出版学专业' },
        { name: '汉语言文学（上海市）（公费师范生）（公费师范生）', type: '大类', subject: '历史类', quota: 0, score: 645, rank: 594, includes: '上海市；公费师范生' },
        { name: '历史学（上海市）', type: '大类', subject: '历史类', quota: 0, score: 645, rank: 594, includes: '上海市' },
        { name: '英语（上海市）（公费师范生）（公费师范生）', type: '大类', subject: '历史类', quota: 0, score: 643, rank: 679, includes: '上海市；公费师范生' },
        { name: '金融学类（上海市）（含金融学、经济学专业；身体条件要求详见学校招生章程）', type: '大类', subject: '历史类', quota: 0, score: 641, rank: 779, includes: '上海市；含金融学、经济学专业；身体条件要求详见学校招生章程' },
        { name: '汉语国际教育（上海市）', type: '大类', subject: '历史类', quota: 0, score: 637, rank: 1005, includes: '上海市' },
        { name: '人力资源管理（上海市）（双学位）（与应用心理学进行双学士学位培养）', type: '大类', subject: '历史类', quota: 0, score: 636, rank: 1075, includes: '上海市；双学位；与应用心理学进行双学士学位培养' },
        { name: '教育学类（上海市）（师范类；含学前教育、特殊教育、教育康复学、公共事业管理专业；身体条件要求详见学校招生章程）', type: '大类', subject: '历史类', quota: 0, score: 635, rank: 1125, includes: '上海市；师范类；含学前教育、特殊教育、教育康复学、公共事业管理专业；身体条件要求详见学校招生章程' },
        { name: '英语（优师专项）（优师专项）', type: '大类', subject: '历史类', quota: 0, score: 621, rank: 2410, includes: '优师专项' },
        { name: '软件工程（上海市）（第三、四年学费16000元/年。大三下学期至大四学年到临港我校滴水湖国际软件学院就读）', type: '专业', subject: '物理类', quota: 0, score: 655, rank: 2366, includes: '上海市；第三、四年学费16000元/年。大三下学期至大四学年到临港我校滴水湖国际软件学院就读' },
        { name: '数据科学与大数据技术（上海市）', type: '专业', subject: '物理类', quota: 0, score: 653, rank: 2699, includes: '上海市' },
        { name: '统计学（上海市）（双学位）（与计算机科学与技术进行双学士学位培养）', type: '专业', subject: '物理类', quota: 0, score: 653, rank: 2699, includes: '上海市；双学位；与计算机科学与技术进行双学士学位培养' },
        { name: '统计学类（上海市）（含统计学、数据科学专业）', type: '专业', subject: '物理类', quota: 0, score: 652, rank: 2914, includes: '上海市；含统计学、数据科学专业' },
        { name: '计算机科学与技术（上海市）（身体条件要求详见学校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 652, rank: 2914, includes: '上海市；身体条件要求详见学校招生章程' },
        { name: '数学与应用数学（上海市）', type: '专业', subject: '物理类', quota: 0, score: 652, rank: 2914, includes: '上海市' },
        { name: '微电子科学与工程（上海市）', type: '专业', subject: '物理类', quota: 0, score: 652, rank: 2914, includes: '上海市' },
        { name: '通信工程（上海市）', type: '专业', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '上海市' },
        { name: '物理学（上海市）（公费师范生）（公费师范生）', type: '专业', subject: '物理类', quota: 0, score: 648, rank: 3754, includes: '上海市；公费师范生' },
        { name: '物理学（上海市）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '上海市' },
        { name: '数学与应用数学（上海市）（公费师范生）（公费师范生）', type: '专业', subject: '物理类', quota: 0, score: 646, rank: 4252, includes: '上海市；公费师范生' },
        { name: '金融学（上海市）（双学位）（与统计学进行双学士学位培养）', type: '大类', subject: '物理类', quota: 0, score: 646, rank: 4252, includes: '上海市；双学位；与统计学进行双学士学位培养' },
        { name: '心理学类（上海市）（含心理学、应用心理学专业；身体条件要求详见学校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 641, rank: 5573, includes: '上海市；含心理学、应用心理学专业；身体条件要求详见学校招生章程' },
        { name: '生物科学（上海市）', type: '专业', subject: '物理类', quota: 0, score: 630, rank: 9436, includes: '上海市；国家专项计划' },
        { name: '化学（上海市）', type: '专业', subject: '物理类', quota: 0, score: 628, rank: 10271, includes: '上海市；国家专项计划' },
        { name: '地理科学（上海市）', type: '专业', subject: '物理类', quota: 0, score: 622, rank: 13077, includes: '上海市；国家专项计划' },
        { name: '物理学（优师专项）（优师专项）', type: '专业', subject: '物理类', quota: 0, score: 621, rank: 13587, includes: '优师专项' },
        { name: '地理科学（优师专项）（优师专项）', type: '专业', subject: '物理类', quota: 0, score: 611, rank: 19367, includes: '优师专项' },
      ]
    }
  },
  {
    id: 23,
    name: '中国科学技术大学',
    province: '安徽省',
    city: '合肥',
    batch: '一期',
    intro: '中国科学院直属的顶尖理工科研究型大学，创办于1958年，物理学、化学等理学学科全国顶尖。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '工科试验班（合肥市）（信息智能方向）（含计算机类、计算机类（华夏计算机科技英才班）、电子信息类、电子信息类（信息科技英才班）、人工智能、集成电路设计与集成系统、网络空间安全专业）', type: '专业', subject: '物理类', quota: 0, score: 677, rank: 361, includes: '合肥市；信息智能方向；含计算机类、计算机类（华夏计算机科技英才班）、电子信息类、电子信息类（信息科技英才班）、人工智能、集成电路设计与集成系统、网络空间安全专业' },
        { name: '工科试验班（合肥市）（航空航天、人形机器人、低碳能源技术及安全）（含机器人工程、理论与应用力学、机械设计制造及其自动化、测控技术与仪器、能源与动力工程、安全工程专业；教育部基础学科拔尖学生培养基地，中国科学院基础和前沿交叉学科贯通培养工程实施基地。含钱学森力学科技英才班、吴仲华工程热物理英才班、新能源英才班、精密光机电与环境科技英才班。学校资助学生前往斯坦福大学、加州大学等高校开展国际交流）', type: '专业', subject: '物理类', quota: 0, score: 676, rank: 395, includes: '合肥市；航空航天、人形机器人、低碳能源技术及安全；含机器人工程、理论与应用力学、机械设计制造及其自动化、测控技术与仪器、能源与动力工程、安全工程专业；教育部基础学科拔尖学生培养基地，中国科学院基础和前沿交叉学科贯通培养工程实施基地。含钱学森力学科技英才班、吴仲华工程热物理英才班、新能源英才班、精密光机电与环境科技英才班。学校资助学生前往斯坦福大学、加州大学等高校开展国际交流' },
        { name: '理科试验班类（合肥市）（含量子信息科学（未来技术学院）、数学类、数学类（华罗庚数学科技英才班）、物理学类、物理学类（严济慈物理科技英才班）、化学类（卢嘉锡化学科技英才班）、生物科学类（贝时璋生命科技英才班）、空间科学与技术（赵九章现代地球和空间科技英才班）、金融学、大数据管理与应用、统计学专业；教育部首批未来技术学院，中国科学院基础和前沿交叉学科贯通培养工程实施基地。含量子信息科技英才班，依托合肥国家实验室、合肥微尺度物质科学国家研究中心、量子信息与量子科技前沿协同创新中心等国家与省部级科研平台，创新培养未来科技创新领军人才）', type: '专业', subject: '物理类', quota: 0, score: 675, rank: 443, includes: '合肥市；含量子信息科学（未来技术学院）、数学类、数学类（华罗庚数学科技英才班）、物理学类、物理学类（严济慈物理科技英才班）、化学类（卢嘉锡化学科技英才班）、生物科学类（贝时璋生命科技英才班）、空间科学与技术（赵九章现代地球和空间科技英才班）、金融学、大数据管理与应用、统计学专业；教育部首批未来技术学院，中国科学院基础和前沿交叉学科贯通培养工程实施基地。含量子信息科技英才班，依托合肥国家实验室、合肥微尺度物质科学国家研究中心、量子信息与量子科技前沿协同创新中心等国家与省部级科研平台，创新培养未来科技创新领军人才' },
        { name: '工科试验班（国家专项计划）（航空航天、人形机器人、低碳能源技术及安全）', type: '专业', subject: '物理类', quota: 0, score: 672, rank: 622, includes: '国家专项计划；航空航天、人形机器人、低碳能源技术及安全' },
        { name: '材料类', type: '专业', subject: '物理类', quota: 0, score: 669, rank: 788, includes: '' },
        { name: '生物科学类', type: '专业', subject: '物理类', quota: 0, score: 668, rank: 868, includes: '' },
        { name: '化学类', type: '专业', subject: '物理类', quota: 0, score: 667, rank: 950, includes: '' },
        { name: '理科试验班类（国家专项计划）（统计与大数据技术试验班）', type: '专业', subject: '物理类', quota: 0, score: 667, rank: 950, includes: '国家专项计划；统计与大数据技术试验班' },
      ]
    }
  },
  {
    id: 24,
    name: '厦门大学',
    province: '福建省',
    city: '厦门',
    batch: '二期',
    intro: '中国东南沿海最著名的高校之一，创办于1921年，海洋科学、化学、经济学等学科特色鲜明。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '会计学（会计、财务、审计，含双学士学位项目）（会计学、财务管理、审计学专业。含会计学+人工智能、财务管理+人工智能双学士学位项目）', type: '大类', subject: '历史类', quota: 0, score: 653, rank: 309, includes: '会计、财务、审计，含双学士学位项目；会计学、财务管理、审计学专业。含会计学+人工智能、财务管理+人工智能双学士学位项目' },
        { name: '法学（含涉外法治人才基地实验班）', type: '大类', subject: '历史类', quota: 0, score: 651, rank: 378, includes: '含涉外法治人才基地实验班' },
        { name: '经济学类（含双学士学位项目）（含金融学、财政学、税收学、国际经济与贸易、经济学专业；含金融学+数据科学与大数据技术、经济学+数据科学与大数据技术双学士学位项目）', type: '大类', subject: '历史类', quota: 0, score: 649, rank: 435, includes: '含双学士学位项目；含金融学、财政学、税收学、国际经济与贸易、经济学专业；含金融学+数据科学与大数据技术、经济学+数据科学与大数据技术双学士学位项目' },
        { name: '人文科学试验班（含汉语言文学、汉语言、历史学、考古学、哲学、戏剧影视文学专业；专业分流后到戏剧影视文学专业学费9360元/学年）', type: '大类', subject: '历史类', quota: 0, score: 644, rank: 639, includes: '含汉语言文学、汉语言、历史学、考古学、哲学、戏剧影视文学专业；专业分流后到戏剧影视文学专业学费9360元/学年' },
        { name: '工商管理类（含人力资源管理、工商管理、市场营销（含数智营销方向）、旅游管理专业）', type: '大类', subject: '历史类', quota: 0, score: 642, rank: 722, includes: '含人力资源管理、工商管理、市场营销（含数智营销方向）、旅游管理专业' },
        { name: '外国语言文学类（含双学士学位项目、外语加财会等实验班）（含英语、日语、法语、俄语、德语专业；只招英语语种考生；含英语+法学、法语+法学、德语+哲学、日语+国际政治、俄语+国际政治、德语+国际政治双学士学位项目，外国语言文学类+会计学/财务管理主辅修项目，英语（国际传播菁英班），英语系辨明实验班）', type: '大类', subject: '历史类', quota: 0, score: 641, rank: 779, includes: '含双学士学位项目、外语加财会等实验班；含英语、日语、法语、俄语、德语专业；只招英语语种考生；含英语+法学、法语+法学、德语+哲学、日语+国际政治、俄语+国际政治、德语+国际政治双学士学位项目，外国语言文学类+会计学/财务管理主辅修项目，英语（国际传播菁英班），英语系辨明实验班' },
        { name: '新闻传播学类（国际传播、智能广告与数字新闻）（含新闻学、广告学、传播学、国际新闻与传播专业）', type: '大类', subject: '历史类', quota: 0, score: 640, rank: 833, includes: '国际传播、智能广告与数字新闻；含新闻学、广告学、传播学、国际新闻与传播专业' },
        { name: '公共管理类（含双学士学位项目）（含政治学与行政学、行政管理、国际政治、马克思主义理论专业；含国际政治+英语双学士学位项目）', type: '专业', subject: '历史类', quota: 0, score: 640, rank: 833, includes: '含双学士学位项目；含政治学与行政学、行政管理、国际政治、马克思主义理论专业；含国际政治+英语双学士学位项目' },
        { name: '社会学类（含社会学、人类学专业）', type: '大类', subject: '历史类', quota: 0, score: 640, rank: 833, includes: '含社会学、人类学专业' },
        { name: '社会学类', type: '大类', subject: '历史类', quota: 0, score: 639, rank: 876, includes: '' },
        { name: '会计学（马来西亚分校）（厦门大学马来西亚分校招生专业）（单科成绩要求：外语>=120；学费2.7万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦）（马来西亚分校）', type: '大类', subject: '历史类', quota: 0, score: 621, rank: 2410, includes: '马来西亚分校；厦门大学马来西亚分校招生专业；单科成绩要求：外语>=120；学费2.7万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦' },
        { name: '金融学（马来西亚分校）（厦门大学马来西亚分校招生专业）（单科成绩要求：外语>=120；学费2.7万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦）（马来西亚分校）', type: '大类', subject: '历史类', quota: 0, score: 619, rank: 2651, includes: '马来西亚分校；厦门大学马来西亚分校招生专业；单科成绩要求：外语>=120；学费2.7万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦' },
        { name: '新闻学（马来西亚分校）（厦门大学马来西亚分校招生专业）（单科成绩要求：外语>=120；学费2.7万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦）（马来西亚分校）', type: '大类', subject: '历史类', quota: 0, score: 616, rank: 3051, includes: '马来西亚分校；厦门大学马来西亚分校招生专业；单科成绩要求：外语>=120；学费2.7万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦' },
        { name: '广告学（马来西亚分校）（厦门大学马来西亚分校招生专业）（单科成绩要求：外语>=120；学费2.8万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦）（马来西亚分校）', type: '大类', subject: '历史类', quota: 0, score: 615, rank: 3215, includes: '马来西亚分校；厦门大学马来西亚分校招生专业；单科成绩要求：外语>=120；学费2.8万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦' },
        { name: '数学类（含数学与应用数学、信息与计算科学、统计学专业）', type: '专业', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '含数学与应用数学、信息与计算科学、统计学专业' },
        { name: '电子信息类（含电子信息工程、集成电路设计与集成系统、微电子科学与工程、电子信息科学与技术、通信工程专业；集成电路设计与集成系统专业三、四年级按学分收费，400元/学分，两年不超过80学分）', type: '专业', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '含电子信息工程、集成电路设计与集成系统、微电子科学与工程、电子信息科学与技术、通信工程专业；集成电路设计与集成系统专业三、四年级按学分收费，400元/学分，两年不超过80学分' },
        { name: '计算机类（含计算机科学与技术、网络空间安全、人工智能、软件工程专业；软件工程专业三、四年级按学分收费，400元/学分，两年不超过80学分）', type: '专业', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '含计算机科学与技术、网络空间安全、人工智能、软件工程专业；软件工程专业三、四年级按学分收费，400元/学分，两年不超过80学分' },
        { name: '统计学类（含经济统计学、统计学、数据科学与大数据技术专业；部分专业课程采用全英文授课）', type: '专业', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '含经济统计学、统计学、数据科学与大数据技术专业；部分专业课程采用全英文授课' },
        { name: '工科试验班（航空航天，含双学士学位项目）（含机械设计制造及其自动化、测控技术与仪器、自动化、飞行器设计与工程、飞行器动力工程专业；含飞行器设计与工程+海洋技术双学士学位项目。专业分流后到飞行器动力工程、飞行器设计与工程专业学费6760元/学年）', type: '专业', subject: '物理类', quota: 0, score: 648, rank: 3754, includes: '航空航天，含双学士学位项目；含机械设计制造及其自动化、测控技术与仪器、自动化、飞行器设计与工程、飞行器动力工程专业；含飞行器设计与工程+海洋技术双学士学位项目。专业分流后到飞行器动力工程、飞行器设计与工程专业学费6760元/学年' },
        { name: '金融工程', type: '大类', subject: '物理类', quota: 0, score: 646, rank: 4252, includes: '' },
        { name: '会计学（会计、财务、审计，含双学士学位项目）（会计学、财务管理、审计学专业。含会计学+人工智能、财务管理+人工智能双学士学位项目）', type: '大类', subject: '物理类', quota: 0, score: 645, rank: 4467, includes: '会计、财务、审计，含双学士学位项目；会计学、财务管理、审计学专业。含会计学+人工智能、财务管理+人工智能双学士学位项目' },
        { name: '能源动力类（含新能源科学与工程、储能科学与工程专业）', type: '专业', subject: '物理类', quota: 0, score: 645, rank: 4467, includes: '含新能源科学与工程、储能科学与工程专业' },
        { name: '物理学类（含物理学、天文学）（含物理学、天文学专业）', type: '专业', subject: '物理类', quota: 0, score: 644, rank: 4724, includes: '含物理学、天文学；含物理学、天文学专业' },
        { name: '工科试验班（化工与材料类）（含化学工程与工艺、材料科学与工程专业）', type: '专业', subject: '物理类', quota: 0, score: 643, rank: 4995, includes: '化工与材料类；含化学工程与工艺、材料科学与工程专业' },
        { name: '经济学类（含双学士学位项目）（含金融学、财政学、税收学、国际经济与贸易、经济学专业；含金融学+数据科学与大数据技术、经济学+数据科学与大数据技术双学士学位项目）', type: '大类', subject: '物理类', quota: 0, score: 642, rank: 5268, includes: '含双学士学位项目；含金融学、财政学、税收学、国际经济与贸易、经济学专业；含金融学+数据科学与大数据技术、经济学+数据科学与大数据技术双学士学位项目' },
        { name: '化学类（含化学、能源化学、化学生物学、化学测量学与技术专业；色盲色弱不予录取）', type: '专业', subject: '物理类', quota: 0, score: 642, rank: 5268, includes: '含化学、能源化学、化学生物学、化学测量学与技术专业；色盲色弱不予录取' },
        { name: '理科试验班（生命科学与医药健康类）（含生物科学、生物技术、药学、预防医学、医学检验技术专业；其中预防医学专业学制5年；色盲色弱不予录取）', type: '专业', subject: '物理类', quota: 0, score: 641, rank: 5573, includes: '生命科学与医药健康类；含生物科学、生物技术、药学、预防医学、医学检验技术专业；其中预防医学专业学制5年；色盲色弱不予录取' },
        { name: '理科试验班（海洋与生态环境类）（含海洋科学、海洋技术、环境科学、生态学专业）', type: '专业', subject: '物理类', quota: 0, score: 640, rank: 5846, includes: '海洋与生态环境类；含海洋科学、海洋技术、环境科学、生态学专业' },
        { name: '理科试验班（国家专项计划）（医学类）', type: '专业', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '国家专项计划；医学类' },
        { name: '理科试验班（国家专项计划）（生命科学与医药健康类）', type: '专业', subject: '物理类', quota: 0, score: 632, rank: 8622, includes: '国家专项计划；生命科学与医药健康类' },
        { name: '社会学类', type: '大类', subject: '物理类', quota: 0, score: 630, rank: 9436, includes: '' },
        { name: '自动化（马来西亚分校）（厦门大学马来西亚分校招生专业）（单科成绩要求：外语>=120；学费3万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦）（马来西亚分校）', type: '专业', subject: '物理类', quota: 0, score: 623, rank: 12592, includes: '马来西亚分校；厦门大学马来西亚分校招生专业；单科成绩要求：外语>=120；学费3万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦' },
        { name: '计算机科学与技术（马来西亚分校）（厦门大学马来西亚分校招生专业）（单科成绩要求：外语>=120；学费2.9万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦）（马来西亚分校）', type: '专业', subject: '物理类', quota: 0, score: 617, rank: 15775, includes: '马来西亚分校；厦门大学马来西亚分校招生专业；单科成绩要求：外语>=120；学费2.9万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦' },
        { name: '金融学（马来西亚分校）（厦门大学马来西亚分校招生专业）（单科成绩要求：外语>=120；学费2.7万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦）（马来西亚分校）', type: '大类', subject: '物理类', quota: 0, score: 610, rank: 20009, includes: '马来西亚分校；厦门大学马来西亚分校招生专业；单科成绩要求：外语>=120；学费2.7万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦' },
        { name: '会计学（马来西亚分校）（厦门大学马来西亚分校招生专业）（单科成绩要求：外语>=120；学费2.7万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦）（马来西亚分校）', type: '大类', subject: '物理类', quota: 0, score: 609, rank: 20698, includes: '马来西亚分校；厦门大学马来西亚分校招生专业；单科成绩要求：外语>=120；学费2.7万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦' },
        { name: '电子信息工程（马来西亚分校）（厦门大学马来西亚分校招生专业）（单科成绩要求：外语>=120；学费2.9万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦。色盲色弱不予录取）（马来西亚分校）', type: '专业', subject: '物理类', quota: 0, score: 609, rank: 20698, includes: '马来西亚分校；厦门大学马来西亚分校招生专业；单科成绩要求：外语>=120；学费2.9万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦。色盲色弱不予录取' },
        { name: '新能源科学与工程（马来西亚分校）（厦门大学马来西亚分校招生专业）（单科成绩要求：外语>=120；学费2.9万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦）（马来西亚分校）', type: '专业', subject: '物理类', quota: 0, score: 608, rank: 21354, includes: '马来西亚分校；厦门大学马来西亚分校招生专业；单科成绩要求：外语>=120；学费2.9万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦' },
        { name: '人工智能（马来西亚分校）（厦门大学马来西亚分校招生专业）（单科成绩要求：外语>=120；学费3万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦）（马来西亚分校）', type: '专业', subject: '物理类', quota: 0, score: 608, rank: 21354, includes: '马来西亚分校；厦门大学马来西亚分校招生专业；单科成绩要求：外语>=120；学费3万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦' },
        { name: '数学与应用数学（马来西亚分校）（厦门大学马来西亚分校招生专业）（单科成绩要求：外语>=120；学费2.6万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦）（马来西亚分校）', type: '专业', subject: '物理类', quota: 0, score: 606, rank: 22695, includes: '马来西亚分校；厦门大学马来西亚分校招生专业；单科成绩要求：外语>=120；学费2.6万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦' },
        { name: '软件工程（马来西亚分校）（厦门大学马来西亚分校招生专业）（单科成绩要求：外语>=120；学费2.9万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦）（马来西亚分校）', type: '专业', subject: '物理类', quota: 0, score: 606, rank: 22695, includes: '马来西亚分校；厦门大学马来西亚分校招生专业；单科成绩要求：外语>=120；学费2.9万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦' },
        { name: '数据科学与大数据技术（马来西亚分校）（厦门大学马来西亚分校招生专业）（单科成绩要求：外语>=120；学费3万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦）（马来西亚分校）', type: '专业', subject: '物理类', quota: 0, score: 605, rank: 23383, includes: '马来西亚分校；厦门大学马来西亚分校招生专业；单科成绩要求：外语>=120；学费3万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦' },
        { name: '网络空间安全（马来西亚分校）（厦门大学马来西亚分校招生专业）（单科成绩要求：外语>=120；学费3万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦）（马来西亚分校）', type: '专业', subject: '物理类', quota: 0, score: 604, rank: 24100, includes: '马来西亚分校；厦门大学马来西亚分校招生专业；单科成绩要求：外语>=120；学费3万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦' },
        { name: '化学工程与工艺（马来西亚分校）（厦门大学马来西亚分校招生专业）（单科成绩要求：外语>=120；学费2.9万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦。色盲色弱不予录取）（马来西亚分校）', type: '专业', subject: '物理类', quota: 0, score: 603, rank: 24833, includes: '马来西亚分校；厦门大学马来西亚分校招生专业；单科成绩要求：外语>=120；学费2.9万林吉特/学年。全英文授课，非英语语种考生慎报。入学第一学年内获得专业要求的达标英语成绩后开始学位课程学习。办学地点在马来西亚雪邦。色盲色弱不予录取' },
      ]
    }
  },
  {
    id: 25,
    name: '中国海洋大学',
    province: '山东省',
    city: '青岛',
    batch: '二期',
    intro: '中国海洋科学领域的最高学府，创办于1924年，海洋科学、水产学等学科全国第一。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '汉语言文学（青岛市）', type: '大类', subject: '历史类', quota: 0, score: 631, rank: 1447, includes: '青岛市' },
        { name: '国际经济与贸易（青岛市）', type: '大类', subject: '历史类', quota: 0, score: 627, rank: 1789, includes: '青岛市' },
        { name: '工商管理（青岛市）（数字化创新管理）', type: '大类', subject: '历史类', quota: 0, score: 627, rank: 1789, includes: '青岛市；数字化创新管理' },
        { name: '英语（青岛市）', type: '大类', subject: '历史类', quota: 0, score: 625, rank: 1976, includes: '青岛市' },
        { name: '政治学与行政学（青岛市）', type: '专业', subject: '历史类', quota: 0, score: 625, rank: 1976, includes: '青岛市' },
        { name: '新闻传播学类（青岛市）（含新闻学、网络与新媒体专业）', type: '大类', subject: '历史类', quota: 0, score: 624, rank: 2071, includes: '青岛市；含新闻学、网络与新媒体专业' },
        { name: '法学（青岛市）（中外合作办学）（与美国亚利桑那大学罗杰斯法学院合办，“4+0”“2+2”“3+1”模式均可，非英语语种考生慎重报考）', type: '大类', subject: '历史类', quota: 0, score: 623, rank: 2181, includes: '青岛市；中外合作办学；与美国亚利桑那大学罗杰斯法学院合办，“4+0”“2+2”“3+1”模式均可，非英语语种考生慎重报考' },
        { name: '行政管理（青岛市）（可选拔至全球环境治理（环境科学+行政管理）双学位项目）', type: '大类', subject: '历史类', quota: 0, score: 623, rank: 2181, includes: '青岛市；可选拔至全球环境治理（环境科学+行政管理）双学位项目' },
        { name: '公共事业管理（青岛市）', type: '大类', subject: '历史类', quota: 0, score: 623, rank: 2181, includes: '青岛市' },
        { name: '旅游管理（青岛市）', type: '大类', subject: '历史类', quota: 0, score: 621, rank: 2410, includes: '青岛市' },
        { name: '电子信息类（青岛市）（含电子信息工程、电子信息科学与技术、通信工程、微电子科学与工程、集成电路设计与集成系统专业；设有中法卓越工程师项目班）', type: '专业', subject: '物理类', quota: 0, score: 638, rank: 6503, includes: '青岛市；含电子信息工程、电子信息科学与技术、通信工程、微电子科学与工程、集成电路设计与集成系统专业；设有中法卓越工程师项目班' },
        { name: '计算机类（青岛市）（含计算机科学与技术、智能科学与技术、数据科学与大数据技术、网络空间安全、软件工程、保密技术专业；设有软件工程五八卓越人才班、计算机科学与技术卓越工程师班、中法卓越工程师班）', type: '专业', subject: '物理类', quota: 0, score: 638, rank: 6503, includes: '青岛市；含计算机科学与技术、智能科学与技术、数据科学与大数据技术、网络空间安全、软件工程、保密技术专业；设有软件工程五八卓越人才班、计算机科学与技术卓越工程师班、中法卓越工程师班' },
        { name: '自动化（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 637, rank: 6838, includes: '青岛市；国家专项计划' },
        { name: '计算机类（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 637, rank: 6838, includes: '青岛市；国家专项计划' },
        { name: '机械设计制造及其自动化（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 636, rank: 7186, includes: '青岛市' },
        { name: '数学类（青岛市）（含数学与应用数学、信息与计算科学专业；可选拔至金融科技（金融学+数学与应用数学）双学位项目）', type: '专业', subject: '物理类', quota: 0, score: 635, rank: 7522, includes: '青岛市；含数学与应用数学、信息与计算科学专业；可选拔至金融科技（金融学+数学与应用数学）双学位项目' },
        { name: '船舶与海洋工程（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 633, rank: 8236, includes: '青岛市' },
        { name: '声学（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 632, rank: 8622, includes: '青岛市' },
        { name: '海洋科学（青岛市）（蓝梦拔尖人才实验班）（含海洋科学、智慧水产、海洋生命、海洋工程与技术、海洋治理（法学）五个方向，一年级大类培养、书院制管理，二年级分方向培养，1：1配备科研导师，实施个性化培养）', type: '专业', subject: '物理类', quota: 0, score: 631, rank: 9012, includes: '青岛市；蓝梦拔尖人才实验班；含海洋科学、智慧水产、海洋生命、海洋工程与技术、海洋治理（法学）五个方向，一年级大类培养、书院制管理，二年级分方向培养，1：1配备科研导师，实施个性化培养' },
        { name: '海洋科学（青岛市）（设有基础学科拔尖计划2.0基地）', type: '专业', subject: '物理类', quota: 0, score: 630, rank: 9436, includes: '青岛市；设有基础学科拔尖计划2.0基地' },
        { name: '生物科学类（青岛市）（含生态学、生物技术、生物科学专业；设有基础学科拔尖计划2.0基地）', type: '专业', subject: '物理类', quota: 0, score: 630, rank: 9436, includes: '青岛市；含生态学、生物技术、生物科学专业；设有基础学科拔尖计划2.0基地' },
        { name: '数学类（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 629, rank: 9827, includes: '青岛市；国家专项计划' },
        { name: '物理学（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 629, rank: 9827, includes: '青岛市' },
        { name: '法学（青岛市）（设有教育部涉外法治人才协同培养创新基地）（培育）', type: '大类', subject: '物理类', quota: 0, score: 629, rank: 9827, includes: '青岛市；设有教育部涉外法治人才协同培养创新基地；培育' },
        { name: '大气科学（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 628, rank: 10271, includes: '青岛市' },
        { name: '财务管理（青岛市）', type: '大类', subject: '物理类', quota: 0, score: 628, rank: 10271, includes: '青岛市' },
        { name: '海洋技术（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 627, rank: 10703, includes: '青岛市' },
        { name: '港口航道与海岸工程（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 627, rank: 10703, includes: '青岛市' },
        { name: '金融学（青岛市）（设有特许金融分析师CFA实验班，可选拔至金融科技（金融学+数学与应用数学）双学位项目）', type: '大类', subject: '物理类', quota: 0, score: 626, rank: 11148, includes: '青岛市；设有特许金融分析师CFA实验班，可选拔至金融科技（金融学+数学与应用数学）双学位项目' },
        { name: '材料类（青岛市）（含材料科学与工程、高分子材料与工程、新能源材料与器件专业）', type: '专业', subject: '物理类', quota: 0, score: 626, rank: 11148, includes: '青岛市；含材料科学与工程、高分子材料与工程、新能源材料与器件专业' },
        { name: '海洋资源与环境（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 625, rank: 11635, includes: '青岛市' },
        { name: '海洋资源开发技术（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 625, rank: 11635, includes: '青岛市' },
        { name: '药学（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 624, rank: 12091, includes: '青岛市' },
        { name: '轮机工程（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 624, rank: 12091, includes: '青岛市' },
        { name: '地球信息科学与技术（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 623, rank: 12592, includes: '青岛市' },
        { name: '化学（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 623, rank: 12592, includes: '青岛市' },
        { name: '环境科学（青岛市）（可选拔至全球环境治理（环境科学+行政管理）双学位项目）', type: '专业', subject: '物理类', quota: 0, score: 622, rank: 13077, includes: '青岛市；可选拔至全球环境治理（环境科学+行政管理）双学位项目' },
        { name: '食品科学与工程类（青岛市）（含食品科学与工程、食品营养与健康专业）', type: '专业', subject: '物理类', quota: 0, score: 622, rank: 13077, includes: '青岛市；含食品科学与工程、食品营养与健康专业' },
        { name: '化学工程与工艺（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 621, rank: 13587, includes: '青岛市' },
        { name: '物流管理（青岛市）', type: '大类', subject: '物理类', quota: 0, score: 621, rank: 13587, includes: '青岛市' },
        { name: '食品营养与健康（青岛市）（拔尖人才实验班）（1：1配备科研导师，实施个性化、小班化培养）', type: '专业', subject: '物理类', quota: 0, score: 621, rank: 13587, includes: '青岛市；拔尖人才实验班；1：1配备科研导师，实施个性化、小班化培养' },
        { name: '水产养殖学（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 619, rank: 14636, includes: '青岛市' },
        { name: '勘查技术与工程（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 619, rank: 14636, includes: '青岛市' },
        { name: '国际经济与贸易（青岛市）', type: '大类', subject: '物理类', quota: 0, score: 619, rank: 14636, includes: '青岛市' },
        { name: '计算机科学与技术（青岛市）（中外合作办学）（与英国赫瑞瓦特大学合办，“3+1”模式，非英语语种考生慎重报考）', type: '专业', subject: '物理类', quota: 0, score: 618, rank: 15171, includes: '青岛市；中外合作办学；与英国赫瑞瓦特大学合办，“3+1”模式，非英语语种考生慎重报考' },
        { name: '环境工程（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 618, rank: 15171, includes: '青岛市' },
        { name: '英语（青岛市）', type: '大类', subject: '物理类', quota: 0, score: 618, rank: 15171, includes: '青岛市' },
        { name: '地质学（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 618, rank: 15171, includes: '青岛市' },
        { name: '水产养殖学（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 617, rank: 15775, includes: '青岛市；国家专项计划' },
        { name: '土木工程（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 617, rank: 15775, includes: '青岛市' },
        { name: '数学与应用数学（青岛市）（中外合作办学）（与澳大利亚阿德莱德大学合办，“4+0”“2+2”“3+2”模式均可，非英语语种考生慎重报考）', type: '专业', subject: '物理类', quota: 0, score: 615, rank: 16934, includes: '青岛市；中外合作办学；与澳大利亚阿德莱德大学合办，“4+0”“2+2”“3+2”模式均可，非英语语种考生慎重报考' },
        { name: '海洋渔业科学与技术（青岛市）', type: '专业', subject: '物理类', quota: 0, score: 613, rank: 18114, includes: '青岛市；国家专项计划' },
        { name: '物理学（青岛市）（中外合作办学）（与英国赫瑞瓦特大学合办，“3+1”模式，非英语语种考生慎重报考）', type: '专业', subject: '物理类', quota: 0, score: 609, rank: 20698, includes: '青岛市；中外合作办学；与英国赫瑞瓦特大学合办，“3+1”模式，非英语语种考生慎重报考' },
        { name: '海洋科学（青岛市）（中外合作办学）（与澳大利亚塔斯马尼亚大学合办，“4+0”“2+2”“3+2”模式均可，非英语语种考生慎重报考）', type: '专业', subject: '物理类', quota: 0, score: 606, rank: 22695, includes: '青岛市；中外合作办学；与澳大利亚塔斯马尼亚大学合办，“4+0”“2+2”“3+2”模式均可，非英语语种考生慎重报考' },
        { name: '生物技术（青岛市）（中外合作办学）（与澳大利亚阿德莱德大学合办，“4+0”“2+2”“3+2”模式均可，非英语语种考生慎重报考）', type: '专业', subject: '物理类', quota: 0, score: 605, rank: 23383, includes: '青岛市；中外合作办学；与澳大利亚阿德莱德大学合办，“4+0”“2+2”“3+2”模式均可，非英语语种考生慎重报考' },
        { name: '食品科学与工程（青岛市）（中外合作办学）（与澳大利亚阿德莱德大学合办，“4+0”“2+2”“3+2”模式均可，非英语语种考生慎重报考）', type: '专业', subject: '物理类', quota: 0, score: 602, rank: 25574, includes: '青岛市；中外合作办学；与澳大利亚阿德莱德大学合办，“4+0”“2+2”“3+2”模式均可，非英语语种考生慎重报考' },
      ]
    }
  },
  {
    id: 26,
    name: '山东大学',
    province: '山东省',
    city: '济南',
    batch: '二期',
    intro: '中国北方历史最悠久的著名大学之一，创办于1901年，文史哲与医学学科并重。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '法学类（含法学专业；含“法学+英语”双学位班）', type: '大类', subject: '历史类', quota: 0, score: 647, rank: 512, includes: '含法学专业；含“法学+英语”双学位班' },
        { name: '中国语言文学类（含汉语言文学专业；含闻一多基地班、中文拔尖2.0班）', type: '大类', subject: '历史类', quota: 0, score: 644, rank: 639, includes: '含汉语言文学专业；含闻一多基地班、中文拔尖2.0班' },
        { name: '经济学类（经世学堂新文科实验班）（含经济学、金融学专业；向经济学拔尖2.0班（薛暮桥班），金融数学与金融工程基地班（彭实戈班，双学士学位），新文科PPE基地班分流）', type: '大类', subject: '历史类', quota: 0, score: 641, rank: 779, includes: '经世学堂新文科实验班；含经济学、金融学专业；向经济学拔尖2.0班（薛暮桥班），金融数学与金融工程基地班（彭实戈班，双学士学位），新文科PPE基地班分流' },
        { name: '经济学类（含经济学、财政学、金融学、国际经济与贸易专业；含经济学拔尖2.0班（薛暮桥班）、彭实戈班（双学士学位）、新文科PPE基地班；包括数字经济，数字贸易、保险精算，金融科技等专业方向）', type: '大类', subject: '历史类', quota: 0, score: 639, rank: 876, includes: '含经济学、财政学、金融学、国际经济与贸易专业；含经济学拔尖2.0班（薛暮桥班）、彭实戈班（双学士学位）、新文科PPE基地班；包括数字经济，数字贸易、保险精算，金融科技等专业方向' },
        { name: '英语（可向国际组织与全球治理分流；含“英语+法学”“英语+国际政治”双学位班）', type: '大类', subject: '历史类', quota: 0, score: 636, rank: 1075, includes: '可向国际组织与全球治理分流；含“英语+法学”“英语+国际政治”双学位班' },
        { name: '历史学类（含历史学、档案学专业）', type: '大类', subject: '历史类', quota: 0, score: 636, rank: 1075, includes: '含历史学、档案学专业' },
        { name: '工商管理类（含工商管理、会计学专业；含工商管理创新实验班）', type: '大类', subject: '历史类', quota: 0, score: 635, rank: 1125, includes: '含工商管理、会计学专业；含工商管理创新实验班' },
        { name: '政治学类（含政治学与行政学、国际政治专业；含“国际政治+英语”双学位班、新文科PPE基地班、华岗特色班（科学社会主义）；含国家留学基金委“国别和区域研究人才支持计划”）', type: '专业', subject: '历史类', quota: 0, score: 634, rank: 1200, includes: '含政治学与行政学、国际政治专业；含“国际政治+英语”双学位班、新文科PPE基地班、华岗特色班（科学社会主义）；含国家留学基金委“国别和区域研究人才支持计划”' },
        { name: '哲学类（含哲学、宗教学专业；含哲学拔尖2.0班、新文科PPE基地班）', type: '大类', subject: '历史类', quota: 0, score: 633, rank: 1262, includes: '含哲学、宗教学专业；含哲学拔尖2.0班、新文科PPE基地班' },
        { name: '英语', type: '大类', subject: '历史类', quota: 0, score: 631, rank: 1447, includes: '' },
        { name: '新闻传播学类（含新闻学、国际新闻与传播专业；含卓越新闻传播人才教育培养计划；含密苏里大学双学位项目）', type: '大类', subject: '历史类', quota: 0, score: 631, rank: 1447, includes: '含新闻学、国际新闻与传播专业；含卓越新闻传播人才教育培养计划；含密苏里大学双学位项目' },
        { name: '社会学类（含社会学、社会工作、人类学专业）', type: '大类', subject: '历史类', quota: 0, score: 631, rank: 1447, includes: '含社会学、社会工作、人类学专业' },
        { name: '临床医学（齐鲁医学堂创新实验班）（不招收色弱、色盲考生）', type: '专业', subject: '物理类', quota: 0, score: 661, rank: 1570, includes: '齐鲁医学堂创新实验班；不招收色弱、色盲考生' },
        { name: '数学类（泰山学堂数理实验班）（含数学与应用数学、物理学、化学、生物科学、计算机科学与技术专业；向泰山学堂数学、物理、化学、生物、计算机各取向分流）', type: '专业', subject: '物理类', quota: 0, score: 657, rank: 2081, includes: '泰山学堂数理实验班；含数学与应用数学、物理学、化学、生物科学、计算机科学与技术专业；向泰山学堂数学、物理、化学、生物、计算机各取向分流' },
        { name: '数学类（含数学与应用数学、信息与计算科学、统计学专业；含潘承洞基地班、数学拔尖2.0班）（泰山学堂）', type: '专业', subject: '物理类', quota: 0, score: 652, rank: 2914, includes: '含数学与应用数学、信息与计算科学、统计学专业；含潘承洞基地班、数学拔尖2.0班；泰山学堂' },
        { name: '计算机科学与技术（含计算机拔尖2.0班（泰山学堂）、计算机菁英班、人工智能与大数据新工科创新实验班）', type: '专业', subject: '物理类', quota: 0, score: 651, rank: 3105, includes: '含计算机拔尖2.0班（泰山学堂）、计算机菁英班、人工智能与大数据新工科创新实验班' },
        { name: '临床医学（5+3一体化）（不招收色弱、色盲考生）', type: '专业', subject: '物理类', quota: 0, score: 651, rank: 3105, includes: '5+3一体化；不招收色弱、色盲考生' },
        { name: '口腔医学（5+3一体化）（不招收色弱、色盲考生）', type: '专业', subject: '物理类', quota: 0, score: 650, rank: 3294, includes: '5+3一体化；不招收色弱、色盲考生' },
        { name: '人工智能', type: '专业', subject: '物理类', quota: 0, score: 650, rank: 3294, includes: '' },
        { name: '自动化类（含自动化、机器人工程专业；含卓越工程师培养计划、自动化科学新工科实验班）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '含自动化、机器人工程专业；含卓越工程师培养计划、自动化科学新工科实验班' },
        { name: '临床医学（5+3一体化，儿科方向）（不招收色弱、色盲考生）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '5+3一体化，儿科方向；不招收色弱、色盲考生' },
        { name: '电子信息类（通信电子与光电方向）（含通信工程、电子科学与技术、光电信息科学与工程专业；含崇新学堂、微纳光电子科学与技术实验班、光电科创未来精英班）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '通信电子与光电方向；含通信工程、电子科学与技术、光电信息科学与工程专业；含崇新学堂、微纳光电子科学与技术实验班、光电科创未来精英班' },
        { name: '网络空间安全（可向密码科学与技术分流）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '可向密码科学与技术分流' },
        { name: '计算机类（智能科技新工科实验班）（含软件工程、数字媒体技术、数据科学与大数据技术、微电子科学与工程、集成电路设计与集成系统专业；含人工智能国际班，网安新工科创新实验班、软件菁英班、集成电路拔尖人才培养“健坤班”、黄昆半导体英才班、微系统英才班）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '智能科技新工科实验班；含软件工程、数字媒体技术、数据科学与大数据技术、微电子科学与工程、集成电路设计与集成系统专业；含人工智能国际班，网安新工科创新实验班、软件菁英班、集成电路拔尖人才培养“健坤班”、黄昆半导体英才班、微系统英才班' },
        { name: '智能感知工程（未来技术新工科实验班）（未来技术新工科实验班）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '未来技术新工科实验班；未来技术新工科实验班' },
        { name: '物理学类（含物理学、应用物理学专业；含王淦昌基地班、物理拔尖2.0班（泰山学堂）、严济慈英才班）', type: '专业', subject: '物理类', quota: 0, score: 642, rank: 5268, includes: '含物理学、应用物理学专业；含王淦昌基地班、物理拔尖2.0班（泰山学堂）、严济慈英才班' },
        { name: '机械类（含机械设计制造及其自动化、智能制造工程专业；含卓越工程师培养计划）', type: '专业', subject: '物理类', quota: 0, score: 641, rank: 5573, includes: '含机械设计制造及其自动化、智能制造工程专业；含卓越工程师培养计划' },
        { name: '能源动力类（电气与智慧能源新工科实验班）（含电气工程及其自动化、能源与动力工程、能源与环境系统工程、新能源科学与工程、储能科学与工程专业；含卓越工程师培养计划、全球能源互联网新工科特色班、能源与环境系统工程实验班、吴有训核科学英才班）', type: '专业', subject: '物理类', quota: 0, score: 641, rank: 5573, includes: '电气与智慧能源新工科实验班；含电气工程及其自动化、能源与动力工程、能源与环境系统工程、新能源科学与工程、储能科学与工程专业；含卓越工程师培养计划、全球能源互联网新工科特色班、能源与环境系统工程实验班、吴有训核科学英才班' },
        { name: '临床医学（五年制）（不招收色弱、色盲考生）', type: '专业', subject: '物理类', quota: 0, score: 640, rank: 5846, includes: '五年制；不招收色弱、色盲考生' },
        { name: '口腔医学（五年制）（不招收色弱、色盲考生）', type: '专业', subject: '物理类', quota: 0, score: 640, rank: 5846, includes: '五年制；不招收色弱、色盲考生' },
        { name: '智能医学工程（可向生物医学工程分流；含医工融合基地班）', type: '专业', subject: '物理类', quota: 0, score: 640, rank: 5846, includes: '可向生物医学工程分流；含医工融合基地班' },
        { name: '工程软件（含“钱七虎学堂”）', type: '专业', subject: '物理类', quota: 0, score: 640, rank: 5846, includes: '含“钱七虎学堂”' },
        { name: '药学类', type: '专业', subject: '物理类', quota: 0, score: 639, rank: 6181, includes: '' },
        { name: '工程力学', type: '专业', subject: '物理类', quota: 0, score: 639, rank: 6181, includes: '' },
        { name: '工程力学（含“钱七虎学堂”）', type: '专业', subject: '物理类', quota: 0, score: 639, rank: 6181, includes: '含“钱七虎学堂”' },
        { name: '材料类（先进材料与智慧成型方向）（含材料科学与工程、材料成型及控制工程专业；含先进材料创新人才基地班、卓越工程师培养计划；可参加牛津大学、新加波国立大学、欧洲等多所高校的海外经历项目）', type: '专业', subject: '物理类', quota: 0, score: 635, rank: 7522, includes: '先进材料与智慧成型方向；含材料科学与工程、材料成型及控制工程专业；含先进材料创新人才基地班、卓越工程师培养计划；可参加牛津大学、新加波国立大学、欧洲等多所高校的海外经历项目' },
        { name: '化学类（含化学专业；含邓从豪基地班、化学拔尖2.0班（泰山学堂）；不招收色弱、色盲考生）', type: '专业', subject: '物理类', quota: 0, score: 635, rank: 7522, includes: '含化学专业；含邓从豪基地班、化学拔尖2.0班（泰山学堂）；不招收色弱、色盲考生' },
        { name: '生物医药数据科学', type: '专业', subject: '物理类', quota: 0, score: 635, rank: 7522, includes: '' },
        { name: '药学类（含药学、临床药学（五年制）专业；含英国牛津大学、巴斯大学、日本东京大学、比利时鲁汶大学、香港大学等高校交流项目；不招收色弱、色盲考生）', type: '专业', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '含药学、临床药学（五年制）专业；含英国牛津大学、巴斯大学、日本东京大学、比利时鲁汶大学、香港大学等高校交流项目；不招收色弱、色盲考生' },
        { name: '生物科学类（含生物科学、生物技术、生态学、生物工程专业；含童第周、曾呈奎基地班、生命拔尖2.0班（泰山学堂）、王应睐、戴芳澜英才班；不招收色弱、色盲考生）', type: '专业', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '含生物科学、生物技术、生态学、生物工程专业；含童第周、曾呈奎基地班、生命拔尖2.0班（泰山学堂）、王应睐、戴芳澜英才班；不招收色弱、色盲考生' },
        { name: '智能建造与智慧交通（可向城市地下空间工程分流）', type: '专业', subject: '物理类', quota: 0, score: 631, rank: 9012, includes: '可向城市地下空间工程分流' },
        { name: '护理学（含“护理学+工商管理”双学位班；入校后不可转专业；不招收色弱、色盲考生）（护理类）', type: '专业', subject: '物理类', quota: 0, score: 601, rank: 26287, includes: '含“护理学+工商管理”双学位班；入校后不可转专业；不招收色弱、色盲考生' },
      ]
    }
  },
  {
    id: 27,
    name: '湖南大学',
    province: '湖南省',
    city: '长沙',
    batch: '二期',
    intro: '中国历史最悠久的高等学府之一，创办于公元976年（岳麓书院），机械、土木、电气等工科实力突出。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '法学（长沙市）（导师制培养）', type: '大类', subject: '历史类', quota: 0, score: 645, rank: 594, includes: '长沙市；导师制培养' },
        { name: '汉语言文学（长沙市）（导师制培养；入校后可选拔进入人文科学试验班）', type: '大类', subject: '历史类', quota: 0, score: 636, rank: 1075, includes: '长沙市；导师制培养；入校后可选拔进入人文科学试验班' },
        { name: '金融学（长沙市）（与美国伊利诺伊大学香槟分校联合培养项目）', type: '大类', subject: '历史类', quota: 0, score: 635, rank: 1125, includes: '长沙市；与美国伊利诺伊大学香槟分校联合培养项目' },
        { name: '经济学类（长沙市）（含经济学、财政学、国际经济与贸易专业；本专业类内分流任选。该专业录取有体检要求，具体参见学校章程）', type: '大类', subject: '历史类', quota: 0, score: 635, rank: 1125, includes: '长沙市；含经济学、财政学、国际经济与贸易专业；本专业类内分流任选。该专业录取有体检要求，具体参见学校章程' },
        { name: '历史学（长沙市）（导师制培养，小班培养；与美国加州大学洛杉矶分校、美国加州大学伯克利分校、英国爱丁堡大学等有联合培养项目；入校后可选拔进入人文科学试验班）', type: '大类', subject: '历史类', quota: 0, score: 632, rank: 1349, includes: '长沙市；导师制培养，小班培养；与美国加州大学洛杉矶分校、美国加州大学伯克利分校、英国爱丁堡大学等有联合培养项目；入校后可选拔进入人文科学试验班' },
        { name: '新闻传播学类（长沙市）（含新闻学、广告学专业；本专业类内分流任选）', type: '大类', subject: '历史类', quota: 0, score: 630, rank: 1523, includes: '长沙市；含新闻学、广告学专业；本专业类内分流任选' },
        { name: '哲学（长沙市）（导师制培养，小班培养；与美国加州大学洛杉矶分校、美国加州大学伯克利分校、英国爱丁堡大学等有联合培养项目；入校后可选拔进入人文科学试验班）', type: '大类', subject: '历史类', quota: 0, score: 630, rank: 1523, includes: '长沙市；导师制培养，小班培养；与美国加州大学洛杉矶分校、美国加州大学伯克利分校、英国爱丁堡大学等有联合培养项目；入校后可选拔进入人文科学试验班' },
        { name: '行政管理（长沙市）（含行政管理、城市管理，专业分流时在上述专业内任选；导师制培养。该专业录取有体检要求，具体参见学校章程）', type: '大类', subject: '历史类', quota: 0, score: 629, rank: 1611, includes: '长沙市；含行政管理、城市管理，专业分流时在上述专业内任选；导师制培养。该专业录取有体检要求，具体参见学校章程' },
        { name: '哲学', type: '大类', subject: '历史类', quota: 0, score: 626, rank: 1884, includes: '' },
        { name: '计算机科学与技术（长沙市）（智能实验班）（含智能科学与技术、物联网工程、数字媒体技术、数据科学与大数据技术，专业分流时在上述专业内任选；入校后可选拔进入工科试验班（人工智能类）。该专业录取有体检要求，具体参见学校章程）', type: '专业', subject: '物理类', quota: 0, score: 650, rank: 3294, includes: '长沙市；智能实验班；含智能科学与技术、物联网工程、数字媒体技术、数据科学与大数据技术，专业分流时在上述专业内任选；入校后可选拔进入工科试验班（人工智能类）。该专业录取有体检要求，具体参见学校章程' },
        { name: '计算机科学与技术（长沙市）（含计算机科学与技术、软件工程，专业分流时在上述专业内任选；入校后可选拔进入工科试验班（人工智能类）。该专业录取有体检要求，具体参见学校章程）', type: '专业', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '长沙市；含计算机科学与技术、软件工程，专业分流时在上述专业内任选；入校后可选拔进入工科试验班（人工智能类）。该专业录取有体检要求，具体参见学校章程' },
        { name: '电子科学与技术（长沙市）（与麻省理工学院、加州大学洛杉矶分校等建立了人才培养和学术交流战略合作关系，与比利时法语鲁汶大学共建合作基地；入校后可选拔进入工科试验班）（人工智能类）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '长沙市；与麻省理工学院、加州大学洛杉矶分校等建立了人才培养和学术交流战略合作关系，与比利时法语鲁汶大学共建合作基地；入校后可选拔进入工科试验班；人工智能类' },
        { name: '电气工程及其自动化（长沙市）（含电气工程及其自动化、自动化、电子信息工程、测控技术与仪器、储能科学与工程，专业分流时在上述专业内任选）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '长沙市；含电气工程及其自动化、自动化、电子信息工程、测控技术与仪器、储能科学与工程，专业分流时在上述专业内任选' },
        { name: '人工智能（长沙市）（含人工智能、机器人工程，专业分流时在上述专业内任选；入校后可选拔进入工科试验班）（人工智能类）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '长沙市；含人工智能、机器人工程，专业分流时在上述专业内任选；入校后可选拔进入工科试验班；人工智能类' },
        { name: '电子信息工程（长沙市）（含电气工程及其自动化、自动化、电子信息工程、测控技术与仪器、储能科学与工程，专业分流时在上述专业内任选；入校后可选拔进入工科试验班）（人工智能类）', type: '专业', subject: '物理类', quota: 0, score: 646, rank: 4252, includes: '长沙市；含电气工程及其自动化、自动化、电子信息工程、测控技术与仪器、储能科学与工程，专业分流时在上述专业内任选；入校后可选拔进入工科试验班；人工智能类' },
        { name: '集成电路设计与集成系统（长沙市）（入校后可选拔进入工科试验班）（人工智能类）', type: '专业', subject: '物理类', quota: 0, score: 646, rank: 4252, includes: '长沙市；入校后可选拔进入工科试验班；人工智能类' },
        { name: '自动化（长沙市）（含电气工程及其自动化、自动化、电子信息工程、测控技术与仪器、储能科学与工程，专业分流时在上述专业内任选）', type: '专业', subject: '物理类', quota: 0, score: 645, rank: 4467, includes: '长沙市；含电气工程及其自动化、自动化、电子信息工程、测控技术与仪器、储能科学与工程，专业分流时在上述专业内任选' },
        { name: '信息安全（长沙市）（含信息安全、保密技术，专业分流时在上述专业内任选）', type: '专业', subject: '物理类', quota: 0, score: 645, rank: 4467, includes: '长沙市；含信息安全、保密技术，专业分流时在上述专业内任选' },
        { name: '微电子科学与工程（长沙市）（入校后可选拔进入工科试验班）（人工智能类）', type: '专业', subject: '物理类', quota: 0, score: 645, rank: 4467, includes: '长沙市；入校后可选拔进入工科试验班；人工智能类' },
        { name: '通信工程（长沙市）（入校后可选拔进入工科试验班）（人工智能类）', type: '专业', subject: '物理类', quota: 0, score: 644, rank: 4724, includes: '长沙市；入校后可选拔进入工科试验班；人工智能类' },
        { name: '智能制造工程（长沙市）（含智能制造工程、机械设计制造及其自动化、工业工程，专业分流时在上述专业内任选；入校后可选拔进入能源与动力工程）（未来能源与动力创新实验班）、工科试验班（人工智能类）', type: '专业', subject: '物理类', quota: 0, score: 643, rank: 4995, includes: '长沙市；含智能制造工程、机械设计制造及其自动化、工业工程，专业分流时在上述专业内任选；入校后可选拔进入能源与动力工程；未来能源与动力创新实验班）、工科试验班（人工智能类' },
        { name: '智能车辆工程（长沙市）（含智能车辆工程、车辆工程、工业工程，专业分流时在上述专业内任选；入校后可选拔进入能源与动力工程）（未来能源与动力创新实验班）、工科试验班（人工智能类）', type: '专业', subject: '物理类', quota: 0, score: 641, rank: 5573, includes: '长沙市；含智能车辆工程、车辆工程、工业工程，专业分流时在上述专业内任选；入校后可选拔进入能源与动力工程；未来能源与动力创新实验班）、工科试验班（人工智能类' },
        { name: '量子信息科学（长沙市）', type: '专业', subject: '物理类', quota: 0, score: 641, rank: 5573, includes: '长沙市' },
        { name: '应用物理学（长沙市）（入校后可选拔进入理科试验班。该专业录取有体检要求，具体参见学校章程）', type: '专业', subject: '物理类', quota: 0, score: 639, rank: 6181, includes: '长沙市；入校后可选拔进入理科试验班。该专业录取有体检要求，具体参见学校章程' },
        { name: '数学类（长沙市）（含数学与应用数学、信息与计算科学专业；本专业类内分流任选；入校后可选拔进入理科试验班）', type: '专业', subject: '物理类', quota: 0, score: 639, rank: 6181, includes: '长沙市；含数学与应用数学、信息与计算科学专业；本专业类内分流任选；入校后可选拔进入理科试验班' },
        { name: '统计学类（长沙市）（含统计学、经济统计学专业；本专业类内分流任选；与美国伊利诺伊大学香槟分校联合培养项目）', type: '专业', subject: '物理类', quota: 0, score: 639, rank: 6181, includes: '长沙市；含统计学、经济统计学专业；本专业类内分流任选；与美国伊利诺伊大学香槟分校联合培养项目' },
        { name: '大数据管理与应用（长沙市）（含大数据管理与应用（商务大数据）、大数据管理与应用（金融大数据），专业分流时在上述专业内任选。该专业录取有体检要求，具体参见学校章程）', type: '大类', subject: '物理类', quota: 0, score: 639, rank: 6181, includes: '长沙市；含大数据管理与应用（商务大数据）、大数据管理与应用（金融大数据），专业分流时在上述专业内任选。该专业录取有体检要求，具体参见学校章程' },
        { name: '工程力学（长沙市）（力学实验班）（项目制和导师制培养；入校后可选拔进入理科试验班）', type: '专业', subject: '物理类', quota: 0, score: 638, rank: 6503, includes: '长沙市；力学实验班；项目制和导师制培养；入校后可选拔进入理科试验班' },
        { name: '生物技术（长沙市）（含生物技术、生物医学工程，专业分流时在上述专业内任选；项目制和导师制培养；入校后可选拔进入理科试验班专业。考生入校后可选拔进入生物技术+计算机科学与技术（双学位）专业。该专业录取有体检要求，具体参见学校章程）', type: '专业', subject: '物理类', quota: 0, score: 636, rank: 7186, includes: '长沙市；含生物技术、生物医学工程，专业分流时在上述专业内任选；项目制和导师制培养；入校后可选拔进入理科试验班专业。考生入校后可选拔进入生物技术+计算机科学与技术（双学位）专业。该专业录取有体检要求，具体参见学校章程' },
        { name: '法学（长沙市）（导师制培养）', type: '大类', subject: '物理类', quota: 0, score: 635, rank: 7522, includes: '长沙市；导师制培养' },
        { name: '会计学（长沙市）（含会计学（智慧会计）、会计学（ACCA）、财务管理（智慧公司金融），专业分流时在上述专业内任选；该专业录取有体检要求，具体参见学校章程）', type: '大类', subject: '物理类', quota: 0, score: 635, rank: 7522, includes: '长沙市；含会计学（智慧会计）、会计学（ACCA）、财务管理（智慧公司金融），专业分流时在上述专业内任选；该专业录取有体检要求，具体参见学校章程' },
        { name: '材料科学与工程（长沙市）（含电子信息材料、材料科学与工程，专业分流时在上述专业内任选；与澳大利亚莫纳什大学联合培养项目）', type: '专业', subject: '物理类', quota: 0, score: 635, rank: 7522, includes: '长沙市；含电子信息材料、材料科学与工程，专业分流时在上述专业内任选；与澳大利亚莫纳什大学联合培养项目' },
        { name: '金融学（长沙市）（与美国伊利诺伊大学香槟分校联合培养项目；入校后可选拔进入金融学+统计学（双学位）专业、金融科技专业）', type: '大类', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '长沙市；与美国伊利诺伊大学香槟分校联合培养项目；入校后可选拔进入金融学+统计学（双学位）专业、金融科技专业' },
        { name: '工业设计（长沙市）', type: '专业', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '长沙市' },
        { name: '精算学（长沙市）（与美国伊利诺伊大学香槟分校联合培养项目）', type: '大类', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '长沙市；与美国伊利诺伊大学香槟分校联合培养项目' },
        { name: '化学类（长沙市）（含化学、应用化学、化学生物学专业；本专业类内分流任选；该专业录取有体检要求，具体参见学校章程）', type: '专业', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '长沙市；含化学、应用化学、化学生物学专业；本专业类内分流任选；该专业录取有体检要求，具体参见学校章程' },
        { name: '法学', type: '大类', subject: '物理类', quota: 0, score: 633, rank: 8236, includes: '' },
        { name: '新闻传播学类（长沙市）（含新闻学、广告学专业；本专业类内分流任选）', type: '大类', subject: '物理类', quota: 0, score: 633, rank: 8236, includes: '长沙市；含新闻学、广告学专业；本专业类内分流任选' },
        { name: '工商管理（长沙市）（含工商管理（组织数智管理）、市场营销（智慧营销），专业分流时在上述专业内任选；该专业录取有体检要求，具体参见学校章程）', type: '大类', subject: '物理类', quota: 0, score: 630, rank: 9436, includes: '长沙市；含工商管理（组织数智管理）、市场营销（智慧营销），专业分流时在上述专业内任选；该专业录取有体检要求，具体参见学校章程' },
        { name: '经济学类（长沙市）（含经济学、财政学、国际经济与贸易专业；本专业类内分流任选；入校后可选拔进入国际经济与贸易+数据科学与大数据技术（双学位）专业、数字经济专业。该专业录取有体检要求，具体参见学校章程）', type: '大类', subject: '物理类', quota: 0, score: 630, rank: 9436, includes: '长沙市；含经济学、财政学、国际经济与贸易专业；本专业类内分流任选；入校后可选拔进入国际经济与贸易+数据科学与大数据技术（双学位）专业、数字经济专业。该专业录取有体检要求，具体参见学校章程' },
        { name: '会计学', type: '大类', subject: '物理类', quota: 0, score: 629, rank: 9827, includes: '' },
        { name: '金融学', type: '大类', subject: '物理类', quota: 0, score: 629, rank: 9827, includes: '' },
        { name: '经济学类', type: '大类', subject: '物理类', quota: 0, score: 624, rank: 12091, includes: '' },
        { name: '工商管理', type: '大类', subject: '物理类', quota: 0, score: 623, rank: 12592, includes: '' },
        { name: '建筑学', type: '大类', subject: '物理类', quota: 0, score: 610, rank: 20009, includes: '' },
      ]
    }
  },
  {
    id: 28,
    name: '中南大学',
    province: '湖南省',
    city: '长沙',
    batch: '二期',
    intro: '中国中部地区重要的综合性研究型大学，创办于2000年（三校合并），材料、冶金、矿业、医学全国顶尖。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '法学（长沙市）', type: '大类', subject: '历史类', quota: 0, score: 642, rank: 722, includes: '长沙市' },
        { name: '中国语言文学类（长沙市）（含汉语言文学、数字出版专业）', type: '大类', subject: '历史类', quota: 0, score: 633, rank: 1262, includes: '长沙市；含汉语言文学、数字出版专业' },
        { name: '金融学类（长沙市）（经济管理类）（含国际经济与贸易、金融学、工商管理、会计学专业；专业体检要求详见招生章程）', type: '大类', subject: '历史类', quota: 0, score: 632, rank: 1349, includes: '长沙市；经济管理类；含国际经济与贸易、金融学、工商管理、会计学专业；专业体检要求详见招生章程' },
        { name: '行政管理', type: '大类', subject: '历史类', quota: 0, score: 631, rank: 1447, includes: '' },
        { name: '外国语言文学类（长沙市）（含英语、法语、日语、西班牙语专业）', type: '大类', subject: '历史类', quota: 0, score: 627, rank: 1789, includes: '长沙市；含英语、法语、日语、西班牙语专业' },
        { name: '临床医学（长沙市）（八年制）（专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 664, rank: 1236, includes: '长沙市；八年制；专业体检要求详见招生章程' },
        { name: '计算机科学与技术（长沙市）（拔尖基地班）（专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 652, rank: 2914, includes: '长沙市；拔尖基地班；专业体检要求详见招生章程' },
        { name: '计算机类（长沙市）（含计算机科学与技术、信息安全、数据科学与大数据技术专业；专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 648, rank: 3754, includes: '长沙市；含计算机科学与技术、信息安全、数据科学与大数据技术专业；专业体检要求详见招生章程' },
        { name: '电子信息类（长沙市）（含电子信息科学与技术、通信工程、电子信息工程专业）', type: '专业', subject: '物理类', quota: 0, score: 646, rank: 4252, includes: '长沙市；含电子信息科学与技术、通信工程、电子信息工程专业' },
        { name: '软件工程（长沙市）', type: '专业', subject: '物理类', quota: 0, score: 645, rank: 4467, includes: '长沙市' },
        { name: '光电信息科学与工程（长沙市）', type: '专业', subject: '物理类', quota: 0, score: 645, rank: 4467, includes: '长沙市' },
        { name: '航空航天工程（长沙市）', type: '专业', subject: '物理类', quota: 0, score: 644, rank: 4724, includes: '长沙市' },
        { name: '自动化类（长沙市）（自动化与电气类）（含人工智能、电气工程及其自动化、自动化、测控技术与仪器专业）', type: '专业', subject: '物理类', quota: 0, score: 644, rank: 4724, includes: '长沙市；自动化与电气类；含人工智能、电气工程及其自动化、自动化、测控技术与仪器专业' },
        { name: '数学类（长沙市）（含数学与应用数学、信息与计算科学、统计学专业）', type: '专业', subject: '物理类', quota: 0, score: 640, rank: 5846, includes: '长沙市；含数学与应用数学、信息与计算科学、统计学专业' },
        { name: '临床医学类（长沙市）（临床及口腔五年制医学类）（含临床医学（五年制）、口腔医学（五年制）、精神医学专业；专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 639, rank: 6181, includes: '长沙市；临床及口腔五年制医学类；含临床医学（五年制）、口腔医学（五年制）、精神医学专业；专业体检要求详见招生章程' },
        { name: '机械类（长沙市）（含车辆工程、机械设计制造及其自动化、微电子科学与工程专业）', type: '专业', subject: '物理类', quota: 0, score: 639, rank: 6181, includes: '长沙市；含车辆工程、机械设计制造及其自动化、微电子科学与工程专业' },
        { name: '能源动力类（长沙市）（能源类）（含能源与动力工程、新能源科学与工程、建筑环境与能源应用工程专业）', type: '专业', subject: '物理类', quota: 0, score: 637, rank: 6838, includes: '长沙市；能源类；含能源与动力工程、新能源科学与工程、建筑环境与能源应用工程专业' },
        { name: '交通运输类（长沙市）（含交通运输、交通设备与控制工程、轨道交通信号与控制专业）', type: '专业', subject: '物理类', quota: 0, score: 635, rank: 7522, includes: '长沙市；含交通运输、交通设备与控制工程、轨道交通信号与控制专业' },
        { name: '材料类（长沙市）（冶金材料类）（含材料科学与工程、粉体材料科学与工程、冶金工程、新能源材料与器件专业）', type: '专业', subject: '物理类', quota: 0, score: 631, rank: 9012, includes: '长沙市；冶金材料类；含材料科学与工程、粉体材料科学与工程、冶金工程、新能源材料与器件专业' },
        { name: '工科试验班（长沙市）（轨道交通基础设施与安全类）（含铁道工程、工程力学、消防工程、工程管理、城市地下空间工程、安全工程专业）', type: '专业', subject: '物理类', quota: 0, score: 631, rank: 9012, includes: '长沙市；轨道交通基础设施与安全类；含铁道工程、工程力学、消防工程、工程管理、城市地下空间工程、安全工程专业' },
        { name: '信息管理与信息系统', type: '大类', subject: '物理类', quota: 0, score: 630, rank: 9436, includes: '' },
        { name: '化工与制药类（长沙市）（化学生物环境类）（含应用化学、化学工程与工艺、制药工程、环境工程、生物工程专业；专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 628, rank: 10271, includes: '长沙市；化学生物环境类；含应用化学、化学工程与工艺、制药工程、环境工程、生物工程专业；专业体检要求详见招生章程' },
        { name: '临床药学', type: '专业', subject: '物理类', quota: 0, score: 626, rank: 11148, includes: '' },
        { name: '材料科学与工程（长沙市）（中外合作办学）（中南大学和蒙纳士大学中外合作办学项目）（专业体检要求详见招生章程）', type: '专业', subject: '物理类', quota: 0, score: 623, rank: 12592, includes: '长沙市；中外合作办学；中南大学和蒙纳士大学中外合作办学项目；专业体检要求详见招生章程' },
        { name: '土木工程（长沙市）（中外合作办学）（中南大学和蒙纳士大学中外合作办学项目）', type: '专业', subject: '物理类', quota: 0, score: 599, rank: 27821, includes: '长沙市；中外合作办学；中南大学和蒙纳士大学中外合作办学项目' },
      ]
    }
  },
  {
    id: 29,
    name: '四川大学',
    province: '四川省',
    city: '成都',
    batch: '二期',
    intro: '中国西南地区最顶尖的综合性研究型大学，创办于1896年，口腔医学全国第一。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '法学（成都市）', type: '大类', subject: '历史类', quota: 0, score: 647, rank: 512, includes: '成都市' },
        { name: '人文科学试验班（成都市）（中文与新闻传播）（含汉语言文学、汉语国际教育、新闻学、广告学、网络与新媒体专业）', type: '大类', subject: '历史类', quota: 0, score: 638, rank: 931, includes: '成都市；中文与新闻传播；含汉语言文学、汉语国际教育、新闻学、广告学、网络与新媒体专业' },
        { name: '历史学类（成都市）（含历史学、考古学、文物与博物馆学专业）', type: '大类', subject: '历史类', quota: 0, score: 637, rank: 1005, includes: '成都市；含历史学、考古学、文物与博物馆学专业' },
        { name: '工商管理类（成都市）（含市场营销、人力资源管理、财务管理、会计学（ACCA）专业）', type: '大类', subject: '历史类', quota: 0, score: 635, rank: 1125, includes: '成都市；含市场营销、人力资源管理、财务管理、会计学（ACCA）专业' },
        { name: '哲学（成都市）', type: '大类', subject: '历史类', quota: 0, score: 633, rank: 1262, includes: '成都市' },
        { name: '国际政治（成都市）', type: '专业', subject: '历史类', quota: 0, score: 630, rank: 1523, includes: '成都市' },
        { name: '国际政治', type: '专业', subject: '历史类', quota: 0, score: 629, rank: 1611, includes: '' },
        { name: '公共管理类（成都市）（含行政管理、劳动与社会保障、土地资源管理、信息资源管理、社会工作专业）', type: '大类', subject: '历史类', quota: 0, score: 629, rank: 1611, includes: '成都市；含行政管理、劳动与社会保障、土地资源管理、信息资源管理、社会工作专业' },
        { name: '美术学（成都市）（按高考文化课成绩录取的艺术类专业）（理论研究）（美术学（理论研究）属于艺术类专业，进校后不能转入非艺术类专业。考生高考文化成绩（含优惠）须达到特殊类型招生录取控制分数线，授予艺术学学士学位）（按高考文化课成绩录取的艺术类专业）', type: '大类', subject: '历史类', quota: 0, score: 611, rank: 3836, includes: '成都市；按高考文化课成绩录取的艺术类专业；理论研究；美术学（理论研究）属于艺术类专业，进校后不能转入非艺术类专业。考生高考文化成绩（含优惠）须达到特殊类型招生录取控制分数线，授予艺术学学士学位' },
        { name: '口腔医学（成都市）（八年制）', type: '专业', subject: '物理类', quota: 0, score: 676, rank: 395, includes: '成都市；八年制' },
        { name: '临床医学（成都市）（八年制）', type: '专业', subject: '物理类', quota: 0, score: 665, rank: 1135, includes: '成都市；八年制' },
        { name: '口腔医学（成都市）（五年制）', type: '专业', subject: '物理类', quota: 0, score: 657, rank: 2081, includes: '成都市；五年制' },
        { name: '计算机类（成都市）（含双学士学位）（含计算机科学与技术、人工智能、计算机科学与技术（计算与金融双学士学位）、软件工程专业）', type: '专业', subject: '物理类', quota: 0, score: 652, rank: 2914, includes: '成都市；含双学士学位；含计算机科学与技术、人工智能、计算机科学与技术（计算与金融双学士学位）、软件工程专业' },
        { name: '临床医学（成都市）（五年制）', type: '专业', subject: '物理类', quota: 0, score: 650, rank: 3294, includes: '成都市；五年制' },
        { name: '数学类（成都市）（含双学士学位）（含数学与应用数学、信息与计算科学、统计学、数学与应用数学（数学经济学双学士学位）、数学与应用数学（数学与智能科技双学士学位）专业）', type: '专业', subject: '物理类', quota: 0, score: 650, rank: 3294, includes: '成都市；含双学士学位；含数学与应用数学、信息与计算科学、统计学、数学与应用数学（数学经济学双学士学位）、数学与应用数学（数学与智能科技双学士学位）专业' },
        { name: '网络空间安全（成都市）（含双学士学位）', type: '专业', subject: '物理类', quota: 0, score: 650, rank: 3294, includes: '成都市；含双学士学位' },
        { name: '电子信息类（成都市）（含电子信息工程、光电信息科学与工程、通信工程专业）', type: '专业', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '成都市；含电子信息工程、光电信息科学与工程、通信工程专业' },
        { name: '电气类（成都市）（含电气工程及其自动化、自动化专业）', type: '专业', subject: '物理类', quota: 0, score: 648, rank: 3754, includes: '成都市；含电气工程及其自动化、自动化专业' },
        { name: '航空航天类（成都市）（含航空航天工程、飞行器控制与信息工程专业）', type: '专业', subject: '物理类', quota: 0, score: 644, rank: 4724, includes: '成都市；含航空航天工程、飞行器控制与信息工程专业' },
        { name: '工科试验班（成都市）（智能制造）（含机械设计制造及其自动化、测控技术与仪器、材料成型及控制工程专业）', type: '专业', subject: '物理类', quota: 0, score: 644, rank: 4724, includes: '成都市；智能制造；含机械设计制造及其自动化、测控技术与仪器、材料成型及控制工程专业' },
        { name: '物理学类（成都市）（含物理学、微电子科学与工程、核工程与核技术专业）', type: '专业', subject: '物理类', quota: 0, score: 642, rank: 5268, includes: '成都市；含物理学、微电子科学与工程、核工程与核技术专业' },
        { name: '生物医学工程类（成都市）（含生物医学工程、医学信息工程专业）', type: '专业', subject: '物理类', quota: 0, score: 641, rank: 5573, includes: '成都市；含生物医学工程、医学信息工程专业' },
        { name: '材料类（成都市）（先进材料与新能源）（含材料科学与工程、新能源材料与器件专业）', type: '专业', subject: '物理类', quota: 0, score: 639, rank: 6181, includes: '成都市；先进材料与新能源；含材料科学与工程、新能源材料与器件专业' },
        { name: '高分子材料与工程（成都市）', type: '专业', subject: '物理类', quota: 0, score: 638, rank: 6503, includes: '成都市' },
        { name: '生物科学类（成都市）（含双学士学位）（含生物科学、生态学、生物科学（计算生物学双学士学位）专业）', type: '专业', subject: '物理类', quota: 0, score: 638, rank: 6503, includes: '成都市；含双学士学位；含生物科学、生态学、生物科学（计算生物学双学士学位）专业' },
        { name: '工科试验班（成都市）（先进化工与高端装备类）（含化学工程与工艺、制药工程、生物工程、化学工程与工艺（互联化工交叉试验班）、过程装备与控制工程专业）', type: '专业', subject: '物理类', quota: 0, score: 638, rank: 6503, includes: '成都市；先进化工与高端装备类；含化学工程与工艺、制药工程、生物工程、化学工程与工艺（互联化工交叉试验班）、过程装备与控制工程专业' },
        { name: '化学类（成都市）（含化学、应用化学专业）', type: '专业', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '成都市；含化学、应用化学专业' },
        { name: '工科试验班（成都市）（清洁能源与智慧建造）（含水利科学与工程、城市地下空间工程、能源与动力工程专业）', type: '专业', subject: '物理类', quota: 0, score: 633, rank: 8236, includes: '成都市；清洁能源与智慧建造；含水利科学与工程、城市地下空间工程、能源与动力工程专业' },
        { name: '金融学类（成都市）（含金融学、金融工程专业）', type: '大类', subject: '物理类', quota: 0, score: 632, rank: 8622, includes: '成都市；含金融学、金融工程专业' },
        { name: '药学类（成都市）（含药学、临床药学专业）', type: '专业', subject: '物理类', quota: 0, score: 632, rank: 8622, includes: '成都市；含药学、临床药学专业' },
        { name: '工科试验班（成都市）（先进低碳材料与食品健康）（含食品科学与工程、生物工程（轻工生物方向）、生物质技术与工程专业）', type: '专业', subject: '物理类', quota: 0, score: 631, rank: 9012, includes: '成都市；先进低碳材料与食品健康；含食品科学与工程、生物工程（轻工生物方向）、生物质技术与工程专业' },
        { name: '工科试验班（成都市）（绿色城市与智慧建造）（含环境工程、土木工程、工程力学专业）', type: '专业', subject: '物理类', quota: 0, score: 628, rank: 10271, includes: '成都市；绿色城市与智慧建造；含环境工程、土木工程、工程力学专业' },
        { name: '金融学类', type: '大类', subject: '物理类', quota: 0, score: 627, rank: 10703, includes: '' },
        { name: '医学技术类（成都市）（含双学士学位）（含医学检验技术（含双学士学位）、康复治疗学（含双学士学位）、医学影像技术（含双学士学位）、眼视光学（含双学士学位）、口腔医学技术（含双学士学位）专业）', type: '专业', subject: '物理类', quota: 0, score: 627, rank: 10703, includes: '成都市；含双学士学位；含医学检验技术（含双学士学位）、康复治疗学（含双学士学位）、医学影像技术（含双学士学位）、眼视光学（含双学士学位）、口腔医学技术（含双学士学位）专业' },
        { name: '医学试验班（成都市）（医学基础与法医学）（含基础医学、法医学专业）', type: '专业', subject: '物理类', quota: 0, score: 627, rank: 10703, includes: '成都市；医学基础与法医学；含基础医学、法医学专业' },
        { name: '管理科学与工程类', type: '大类', subject: '物理类', quota: 0, score: 626, rank: 11148, includes: '' },
        { name: '公共卫生与预防医学类（成都市）（含预防医学、食品卫生与营养学、卫生检验与检疫专业）', type: '专业', subject: '物理类', quota: 0, score: 626, rank: 11148, includes: '成都市；含预防医学、食品卫生与营养学、卫生检验与检疫专业' },
        { name: '建筑学', type: '大类', subject: '物理类', quota: 0, score: 613, rank: 18114, includes: '' },
      ]
    }
  },
  {
    id: 30,
    name: '重庆大学',
    province: '重庆市',
    city: '重庆',
    batch: '二期',
    intro: '中国西南地区重要的研究型大学，创办于1929年，机械、电气、建筑等工科实力雄厚。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '汉语言文学（博雅类，含中文、历史、哲学专业）（第二学期分流，按照学生意愿在大类内任选专业）', type: '大类', subject: '历史类', quota: 0, score: 636, rank: 1075, includes: '博雅类，含中文、历史、哲学专业；第二学期分流，按照学生意愿在大类内任选专业' },
        { name: '人文科学试验班（法学新闻类）（含法学、新闻学专业；第一学期末分流，按照绩点结合学生意愿在试验班内确定专业）', type: '大类', subject: '历史类', quota: 0, score: 636, rank: 1075, includes: '法学新闻类；含法学、新闻学专业；第一学期末分流，按照绩点结合学生意愿在试验班内确定专业' },
        { name: '戏剧与影视学类（按高考文化课成绩录取的艺术类专业）（含广播电视编导、戏剧影视文学、戏剧影视导演专业；授予艺术学学士学位，入学后不得转入非艺术类专业；考生高考文化课成绩（含优惠）须达到特殊类型招生录取控制分数线）（按高考文化课成绩录取的艺术类专业）', type: '大类', subject: '历史类', quota: 0, score: 608, rank: 4350, includes: '按高考文化课成绩录取的艺术类专业；含广播电视编导、戏剧影视文学、戏剧影视导演专业；授予艺术学学士学位，入学后不得转入非艺术类专业；考生高考文化课成绩（含优惠）须达到特殊类型招生录取控制分数线' },
        { name: '计算机科学与技术（拔尖计划）', type: '专业', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '拔尖计划' },
        { name: '电气工程及其自动化', type: '专业', subject: '物理类', quota: 0, score: 648, rank: 3754, includes: '' },
        { name: '工科试验班（卓越计划）（含电气工程及其自动化、计算机科学与技术、人工智能、机械设计制造及其自动化、储能科学与工程（等普通类四年制理工类专业）专业；分流时，按照学生意愿在全校四年制理工科专业中任选）', type: '专业', subject: '物理类', quota: 0, score: 648, rank: 3754, includes: '卓越计划；含电气工程及其自动化、计算机科学与技术、人工智能、机械设计制造及其自动化、储能科学与工程（等普通类四年制理工类专业）专业；分流时，按照学生意愿在全校四年制理工科专业中任选' },
        { name: '工科试验班（计算机与智能软件）（含计算机科学与技术、软件工程、人工智能、数据科学与大数据技术、信息安全专业；第二学期分流，按照学生意愿在试验班内任选专业；其中软件工程、人工智能、数据科学与大数据技术专业第三、四学年每年预交学费标准为1.5万元/年）', type: '专业', subject: '物理类', quota: 0, score: 646, rank: 4252, includes: '计算机与智能软件；含计算机科学与技术、软件工程、人工智能、数据科学与大数据技术、信息安全专业；第二学期分流，按照学生意愿在试验班内任选专业；其中软件工程、人工智能、数据科学与大数据技术专业第三、四学年每年预交学费标准为1.5万元/年' },
        { name: '工科试验班（未来信息）（含通信工程、测控技术与仪器、自动化、电子信息工程、机器人工程、集成电路设计与集成系统、智能感知工程专业；第二学期分流，按照学生意愿在试验班内任选专业）', type: '专业', subject: '物理类', quota: 0, score: 645, rank: 4467, includes: '未来信息；含通信工程、测控技术与仪器、自动化、电子信息工程、机器人工程、集成电路设计与集成系统、智能感知工程专业；第二学期分流，按照学生意愿在试验班内任选专业' },
        { name: '工科试验班（智能网联汽车创新班）（含车辆工程（等智能网联汽车领域相关专业）专业；第三学年分流，结合创新班培养方案及学生意愿确定专业）', type: '专业', subject: '物理类', quota: 0, score: 643, rank: 4995, includes: '智能网联汽车创新班；含车辆工程（等智能网联汽车领域相关专业）专业；第三学年分流，结合创新班培养方案及学生意愿确定专业' },
        { name: '光电信息科学与工程', type: '专业', subject: '物理类', quota: 0, score: 642, rank: 5268, includes: '' },
        { name: '工科试验班（高端装备与智能制造）（含机械设计制造及其自动化、车辆工程、航空航天工程、工程力学、机械电子工程、工业工程专业；第二学期末分流，按照绩点结合学生意愿在试验班内确定专业）', type: '专业', subject: '物理类', quota: 0, score: 642, rank: 5268, includes: '高端装备与智能制造；含机械设计制造及其自动化、车辆工程、航空航天工程、工程力学、机械电子工程、工业工程专业；第二学期末分流，按照绩点结合学生意愿在试验班内确定专业' },
        { name: '理科试验班（数理基础）（含数学与应用数学、物理学、统计学、应用物理学、信息与计算科学专业；第一学期末分流，按照绩点结合学生意愿在试验班内确定专业）', type: '专业', subject: '物理类', quota: 0, score: 641, rank: 5573, includes: '数理基础；含数学与应用数学、物理学、统计学、应用物理学、信息与计算科学专业；第一学期末分流，按照绩点结合学生意愿在试验班内确定专业' },
        { name: '工科试验班（智慧能源与先进材料）（含能源与动力工程、材料科学与工程、碳储科学与工程、新能源科学与工程、储能科学与工程、建筑环境与能源应用工程、材料成型及控制工程、核工程与核技术专业；第二学期末分流，按照绩点结合学生意愿在试验班内确定专业）', type: '专业', subject: '物理类', quota: 0, score: 637, rank: 6838, includes: '智慧能源与先进材料；含能源与动力工程、材料科学与工程、碳储科学与工程、新能源科学与工程、储能科学与工程、建筑环境与能源应用工程、材料成型及控制工程、核工程与核技术专业；第二学期末分流，按照绩点结合学生意愿在试验班内确定专业' },
        { name: '临床医学（五年制）（不招色盲）', type: '专业', subject: '物理类', quota: 0, score: 636, rank: 7186, includes: '五年制；不招色盲' },
        { name: '电气工程及其自动化（中外合作办学）（“4+1”模式）（国内4年+国外1年），前四年学费约7.5万元/年，第五年在美国辛辛那提大学学习期间按美方标准缴纳学费（约3万美元）', type: '专业', subject: '物理类', quota: 0, score: 635, rank: 7522, includes: '中外合作办学；“4+1”模式；国内4年+国外1年），前四年学费约7.5万元/年，第五年在美国辛辛那提大学学习期间按美方标准缴纳学费（约3万美元' },
        { name: '化学', type: '专业', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '' },
        { name: '城乡规划', type: '专业', subject: '物理类', quota: 0, score: 630, rank: 9436, includes: '' },
        { name: '智能建造', type: '专业', subject: '物理类', quota: 0, score: 628, rank: 10271, includes: '' },
        { name: '生物科学', type: '专业', subject: '物理类', quota: 0, score: 627, rank: 10703, includes: '' },
        { name: '工科试验班（医工交叉与环化健康）（含生物医学工程、应用化学、给排水科学与工程、药学、环境工程、化学工程与工艺、环境生态工程专业；第二学期末分流，按照绩点结合学生意愿在试验班内确定专业）', type: '专业', subject: '物理类', quota: 0, score: 627, rank: 10703, includes: '医工交叉与环化健康；含生物医学工程、应用化学、给排水科学与工程、药学、环境工程、化学工程与工艺、环境生态工程专业；第二学期末分流，按照绩点结合学生意愿在试验班内确定专业' },
        { name: '人文科学试验班（法学新闻类）（含法学、新闻学专业；第一学期末分流，按照绩点结合学生意愿在试验班内确定专业）', type: '大类', subject: '物理类', quota: 0, score: 625, rank: 11635, includes: '法学新闻类；含法学、新闻学专业；第一学期末分流，按照绩点结合学生意愿在试验班内确定专业' },
        { name: '机械设计制造及其自动化（中外合作办学）（“4+1”模式）（国内4年+国外1年），前四年学费约7.5万元/年，第五年在美国辛辛那提大学学习期间按美方标准缴纳学费（约3万美元）', type: '专业', subject: '物理类', quota: 0, score: 622, rank: 13077, includes: '中外合作办学；“4+1”模式；国内4年+国外1年），前四年学费约7.5万元/年，第五年在美国辛辛那提大学学习期间按美方标准缴纳学费（约3万美元' },
        { name: '物理学（中外合作办学）（“3+1”模式（国内3年+国外1年），前三年学费约5.3万元/年，第四年在新西伯利亚国立大学学习期间按俄方标准缴纳学费）', type: '专业', subject: '物理类', quota: 0, score: 621, rank: 13587, includes: '中外合作办学；“3+1”模式（国内3年+国外1年），前三年学费约5.3万元/年，第四年在新西伯利亚国立大学学习期间按俄方标准缴纳学费' },
        { name: '城市地下空间工程', type: '专业', subject: '物理类', quota: 0, score: 619, rank: 14636, includes: '' },
        { name: '本科预科班（边防军人子女预科班）（录取分数不低于特殊类型招生录取控制分数线；只招通过边防子女资格审查的考生，培养合格后，依据考生学业成绩及升本专业志愿，升入电气工程及其自动化、工科试验班（计算机与智能软件）、工科试验班（未来信息）、工科试验班（高端装备与智能制造）、工科试验班（智慧能源与先进材料）内的相关专业进行培养，其它事宜向院校咨询）（边防军人子女预科班）', type: '专业', subject: '物理类', quota: 0, score: 607, rank: 22009, includes: '边防军人子女预科班；录取分数不低于特殊类型招生录取控制分数线；只招通过边防子女资格审查的考生，培养合格后，依据考生学业成绩及升本专业志愿，升入电气工程及其自动化、工科试验班（计算机与智能软件）、工科试验班（未来信息）、工科试验班（高端装备与智能制造）、工科试验班（智慧能源与先进材料）内的相关专业进行培养，其它事宜向院校咨询' },
        { name: '建筑学（国家专项计划）（五年制）', type: '专业', subject: '物理类', quota: 0, score: 604, rank: 24100, includes: '国家专项计划；五年制' },
        { name: '土木工程', type: '专业', subject: '物理类', quota: 0, score: 602, rank: 25574, includes: '' },
      ]
    }
  },
  {
    id: 31,
    name: '电子科技大学',
    province: '四川省',
    city: '成都',
    batch: '二期',
    intro: '中国电子信息领域的顶尖研究型大学，创办于1956年，电子信息、通信工程等学科全国领先。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '社会科学试验班（成都市）（公共管理与法律复合人才培养）（含行政管理、城市管理、法学专业）', type: '大类', subject: '历史类', quota: 0, score: 634, rank: 1200, includes: '成都市；公共管理与法律复合人才培养；含行政管理、城市管理、法学专业' },
        { name: '英语（成都市）（AI交叉复合型创新人才双学位培养计划）', type: '大类', subject: '历史类', quota: 0, score: 627, rank: 1789, includes: '成都市；AI交叉复合型创新人才双学位培养计划' },
        { name: '外国语言文学类（成都市）（含英语、日语、法语专业）', type: '大类', subject: '历史类', quota: 0, score: 623, rank: 2181, includes: '成都市；含英语、日语、法语专业' },
        { name: '电子信息类（成都市）（成电英才电子与计算机科技创新领军人才计划）（含电子信息工程、通信工程、网络工程、电磁场与无线技术、电子科学与技术、微电子科学与工程、集成电路设计与集成系统、计算机科学与技术、人工智能、网络空间安全、机械设计制造及其自动化、机器人工程、光电信息科学与工程、信息工程、测控技术与仪器、自动化、材料科学与工程、生物医学工程专业）', type: '专业', subject: '物理类', quota: 0, score: 668, rank: 868, includes: '成都市；成电英才电子与计算机科技创新领军人才计划；含电子信息工程、通信工程、网络工程、电磁场与无线技术、电子科学与技术、微电子科学与工程、集成电路设计与集成系统、计算机科学与技术、人工智能、网络空间安全、机械设计制造及其自动化、机器人工程、光电信息科学与工程、信息工程、测控技术与仪器、自动化、材料科学与工程、生物医学工程专业' },
        { name: '计算机科学与技术（成都市）（智能金融与区块链金融双A联合学位实验班）', type: '专业', subject: '物理类', quota: 0, score: 664, rank: 1236, includes: '成都市；智能金融与区块链金融双A联合学位实验班' },
        { name: '集成电路设计与集成系统（成都市）（国家示范性微电子学院）', type: '专业', subject: '物理类', quota: 0, score: 662, rank: 1447, includes: '成都市；国家示范性微电子学院' },
        { name: '计算机类（成都市）（含计算机科学与技术、网络空间安全、数据科学与大数据技术、人工智能专业）', type: '专业', subject: '物理类', quota: 0, score: 660, rank: 1688, includes: '成都市；含计算机科学与技术、网络空间安全、数据科学与大数据技术、人工智能专业' },
        { name: '电子信息类（成都市）（信息与通信）（含电子信息工程、通信工程、信息对抗技术、网络工程、物联网工程专业）', type: '专业', subject: '物理类', quota: 0, score: 660, rank: 1688, includes: '成都市；信息与通信；含电子信息工程、通信工程、信息对抗技术、网络工程、物联网工程专业' },
        { name: '工科试验班（成都市）（电子工程类）（含电子科学与技术、电磁场与无线技术专业）', type: '专业', subject: '物理类', quota: 0, score: 659, rank: 1816, includes: '成都市；电子工程类；含电子科学与技术、电磁场与无线技术专业' },
        { name: '电子信息类（国家专项计划）（信息与通信）', type: '专业', subject: '物理类', quota: 0, score: 657, rank: 2081, includes: '国家专项计划；信息与通信' },
        { name: '电子信息类（成都市）（光电集成与光网络）（含光电信息科学与工程、信息工程专业）', type: '专业', subject: '物理类', quota: 0, score: 657, rank: 2081, includes: '成都市；光电集成与光网络；含光电信息科学与工程、信息工程专业' },
        { name: '航空航天工程（成都市）（智能无人机拔尖人才实验班）', type: '专业', subject: '物理类', quota: 0, score: 656, rank: 2224, includes: '成都市；智能无人机拔尖人才实验班' },
        { name: '工科试验班（国家专项计划）（电子工程类）', type: '专业', subject: '物理类', quota: 0, score: 655, rank: 2366, includes: '国家专项计划；电子工程类' },
        { name: '数学类（成都市）（大数据与智能计算、数学及应用、计算科学）（含数学与应用数学、信息与计算科学、数据科学与大数据技术专业）', type: '专业', subject: '物理类', quota: 0, score: 655, rank: 2366, includes: '成都市；大数据与智能计算、数学及应用、计算科学；含数学与应用数学、信息与计算科学、数据科学与大数据技术专业' },
        { name: '电子信息类（成都市）（电子信息与物理科学复合培养）（含电子信息科学与技术、应用物理学专业）', type: '专业', subject: '物理类', quota: 0, score: 654, rank: 2505, includes: '成都市；电子信息与物理科学复合培养；含电子信息科学与技术、应用物理学专业' },
        { name: '航空航天类（国家专项计划）（飞行器控制信息、无人机应用）', type: '专业', subject: '物理类', quota: 0, score: 653, rank: 2699, includes: '国家专项计划；飞行器控制信息、无人机应用' },
        { name: '电子信息类（成都市）（智能仪器、智能控制）（含自动化、测控技术与仪器专业）', type: '专业', subject: '物理类', quota: 0, score: 653, rank: 2699, includes: '成都市；智能仪器、智能控制；含自动化、测控技术与仪器专业' },
        { name: '软件工程（沙河校区）（成都市）（AI交叉复合型创新人才培养实验班）（沙河校区）', type: '专业', subject: '物理类', quota: 0, score: 653, rank: 2699, includes: '沙河校区；成都市；AI交叉复合型创新人才培养实验班' },
        { name: '电子信息类（国家专项计划）（电子信息与物理科学复合培养）', type: '专业', subject: '物理类', quota: 0, score: 652, rank: 2914, includes: '国家专项计划；电子信息与物理科学复合培养' },
        { name: '工科试验班（成都市）（机器人、电气信息、智能制造）（含机械设计制造及其自动化、电气工程及其自动化、智能电网信息工程、工业工程、机器人工程专业）', type: '专业', subject: '物理类', quota: 0, score: 652, rank: 2914, includes: '成都市；机器人、电气信息、智能制造；含机械设计制造及其自动化、电气工程及其自动化、智能电网信息工程、工业工程、机器人工程专业' },
        { name: '软件工程（沙河校区）（成都市）（国家卓越工程师教育培养计划特色班）（沙河校区）', type: '专业', subject: '物理类', quota: 0, score: 652, rank: 2914, includes: '沙河校区；成都市；国家卓越工程师教育培养计划特色班' },
        { name: '电子信息类（国家专项计划）（智能仪器、智能控制）', type: '专业', subject: '物理类', quota: 0, score: 651, rank: 3105, includes: '国家专项计划；智能仪器、智能控制' },
        { name: '数学类（国家专项计划）（大数据与智能计算、数学及应用、计算科学）', type: '专业', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '国家专项计划；大数据与智能计算、数学及应用、计算科学' },
        { name: '电子信息类（沙河校区）（成都市）（中外合作办学）（电子信息）（含电子信息工程专业）（沙河校区）', type: '专业', subject: '物理类', quota: 0, score: 639, rank: 6181, includes: '沙河校区；成都市；中外合作办学；电子信息；含电子信息工程专业' },
        { name: '电子信息类（沙河校区）（成都市）（中外合作办学）（通信、微电子）（含通信工程、微电子科学与工程专业）（沙河校区）', type: '专业', subject: '物理类', quota: 0, score: 637, rank: 6838, includes: '沙河校区；成都市；中外合作办学；通信、微电子；含通信工程、微电子科学与工程专业' },
        { name: '电子信息类（沙河校区）（成都市）（中外合作办学）（海南陵水国际教育创新区）（含通信工程、电子信息工程专业）（沙河校区）', type: '专业', subject: '物理类', quota: 0, score: 627, rank: 10703, includes: '沙河校区；成都市；中外合作办学；海南陵水国际教育创新区；含通信工程、电子信息工程专业' },
        { name: '临床医学（沙河校区）（成都市）（色盲、色弱或不能准确识别红、黄、绿、蓝、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形者不予录取）（沙河校区）', type: '专业', subject: '物理类', quota: 0, score: 625, rank: 11635, includes: '沙河校区；成都市；色盲、色弱或不能准确识别红、黄、绿、蓝、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形者不予录取' },
        { name: '护理学（沙河校区）（成都市）（色盲、色弱或不能准确识别红、黄、绿、蓝、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形者不予录取）（沙河校区）', type: '专业', subject: '物理类', quota: 0, score: 605, rank: 23383, includes: '沙河校区；成都市；色盲、色弱或不能准确识别红、黄、绿、蓝、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形者不予录取' },
      ]
    }
  },
  {
    id: 32,
    name: '西安交通大学',
    province: '陕西省',
    city: '西安',
    batch: '一期',
    intro: '中国最顶尖的工科研究型大学之一，创办于1896年，能源动力、机械、电气等学科实力雄厚。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '法学试验班（含法学（卓越复合班）、法学（法学、英语双学位项目）专业）', type: '大类', subject: '历史类', quota: 0, score: 648, rank: 475, includes: '含法学（卓越复合班）、法学（法学、英语双学位项目）专业' },
        { name: '公共管理类', type: '大类', subject: '历史类', quota: 0, score: 642, rank: 722, includes: '' },
        { name: '文科试验班类（含哲学、社会学、汉语言文学专业）', type: '大类', subject: '历史类', quota: 0, score: 642, rank: 722, includes: '含哲学、社会学、汉语言文学专业' },
        { name: '公共管理类（含行政管理、劳动与社会保障专业；身体条件要求详见学校招生章程）', type: '大类', subject: '历史类', quota: 0, score: 637, rank: 1005, includes: '含行政管理、劳动与社会保障专业；身体条件要求详见学校招生章程' },
        { name: '电气工程及其自动化（钱学森班）', type: '专业', subject: '物理类', quota: 0, score: 680, rank: 267, includes: '钱学森班' },
        { name: '人工智能（新工科卓越计划）', type: '专业', subject: '物理类', quota: 0, score: 673, rank: 550, includes: '新工科卓越计划' },
        { name: '能源与动力工程（钱学森班）', type: '专业', subject: '物理类', quota: 0, score: 673, rank: 550, includes: '钱学森班' },
        { name: '工科试验班（空天科技国卓班）（含飞行器设计与工程、飞行器动力工程、工程力学专业）', type: '专业', subject: '物理类', quota: 0, score: 671, rank: 681, includes: '空天科技国卓班；含飞行器设计与工程、飞行器动力工程、工程力学专业' },
        { name: '数学与应用数学（国家拔尖计划）', type: '专业', subject: '物理类', quota: 0, score: 670, rank: 733, includes: '国家拔尖计划' },
        { name: '储能科学与工程（新工科卓越计划）', type: '专业', subject: '物理类', quota: 0, score: 670, rank: 733, includes: '新工科卓越计划' },
        { name: '自动化', type: '专业', subject: '物理类', quota: 0, score: 667, rank: 950, includes: '' },
        { name: '工科试验班（电气类）（含电气工程及其自动化、能源互联网工程专业）', type: '专业', subject: '物理类', quota: 0, score: 666, rank: 1013, includes: '电气类；含电气工程及其自动化、能源互联网工程专业' },
        { name: '工科试验班（计算机科学技术类）（含计算机科学与技术、网络空间安全、物联网工程专业；身体条件要求详见学校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 665, rank: 1135, includes: '计算机科学技术类；含计算机科学与技术、网络空间安全、物联网工程专业；身体条件要求详见学校招生章程' },
        { name: '物理学（国家拔尖计划）（身体条件要求详见学校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 665, rank: 1135, includes: '国家拔尖计划；身体条件要求详见学校招生章程' },
        { name: '信息工程', type: '专业', subject: '物理类', quota: 0, score: 664, rank: 1236, includes: '' },
        { name: '电子科学与技术', type: '专业', subject: '物理类', quota: 0, score: 664, rank: 1236, includes: '' },
        { name: '微电子科学与工程', type: '专业', subject: '物理类', quota: 0, score: 664, rank: 1236, includes: '' },
        { name: '工科试验班（航天航空类）（含飞行器设计与工程、飞行器动力工程、工程力学专业）', type: '专业', subject: '物理类', quota: 0, score: 664, rank: 1236, includes: '航天航空类；含飞行器设计与工程、飞行器动力工程、工程力学专业' },
        { name: '工科试验班（国家专项计划）（智能制造类）', type: '专业', subject: '物理类', quota: 0, score: 663, rank: 1345, includes: '国家专项计划；智能制造类' },
        { name: '临床医学（侯宗濂班）（身体条件要求详见学校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 663, rank: 1345, includes: '侯宗濂班；身体条件要求详见学校招生章程' },
        { name: '理科试验班（数学类）（含数学与应用数学、信息与计算科学、统计学专业）', type: '专业', subject: '物理类', quota: 0, score: 663, rank: 1345, includes: '数学类；含数学与应用数学、信息与计算科学、统计学专业' },
        { name: '工科试验班（医学电子信息优本班）（含生物医学工程专业）', type: '专业', subject: '物理类', quota: 0, score: 663, rank: 1345, includes: '医学电子信息优本班；含生物医学工程专业' },
        { name: '工科试验班（国家专项计划）（航天航空类）', type: '专业', subject: '物理类', quota: 0, score: 662, rank: 1447, includes: '国家专项计划；航天航空类' },
        { name: '工科试验班（智能制造类）（含机械工程、智能制造工程、车辆工程专业）', type: '专业', subject: '物理类', quota: 0, score: 662, rank: 1447, includes: '智能制造类；含机械工程、智能制造工程、车辆工程专业' },
        { name: '理科试验班（物理类）（含材料物理、光电信息科学与工程、应用物理学专业；身体条件要求详见学校招生章程）', type: '专业', subject: '物理类', quota: 0, score: 661, rank: 1570, includes: '物理类；含材料物理、光电信息科学与工程、应用物理学专业；身体条件要求详见学校招生章程' },
        { name: '工科试验班（智慧能源类）（含能源与动力工程、能源与动力工程（热流国际班）、新能源科学与工程、核工程与核技术、环境工程专业）', type: '专业', subject: '物理类', quota: 0, score: 661, rank: 1570, includes: '智慧能源类；含能源与动力工程、能源与动力工程（热流国际班）、新能源科学与工程、核工程与核技术、环境工程专业' },
        { name: '电子科学与技术', type: '专业', subject: '物理类', quota: 0, score: 660, rank: 1688, includes: '' },
        { name: '工科试验班（国家专项计划）（智能感知与仪器）', type: '专业', subject: '物理类', quota: 0, score: 659, rank: 1816, includes: '国家专项计划；智能感知与仪器' },
        { name: '理科试验班（国家专项计划）（生命科学类）', type: '专业', subject: '物理类', quota: 0, score: 656, rank: 2224, includes: '国家专项计划；生命科学类' },
        { name: '工科试验班（国家专项计划）（材料创新设计与智能制备）', type: '专业', subject: '物理类', quota: 0, score: 655, rank: 2366, includes: '国家专项计划；材料创新设计与智能制备' },
        { name: '工科试验班（国家专项计划）（智能过程与装备）', type: '专业', subject: '物理类', quota: 0, score: 653, rank: 2699, includes: '国家专项计划；智能过程与装备' },
        { name: '工科试验班（国家专项计划）（管理类）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '国家专项计划；管理类' },
        { name: '理科试验班（国家专项计划）（化学类）', type: '专业', subject: '物理类', quota: 0, score: 646, rank: 4252, includes: '国家专项计划；化学类' },
        { name: '医学试验班（国家专项计划）（医学类）', type: '专业', subject: '物理类', quota: 0, score: 646, rank: 4252, includes: '国家专项计划；医学类' },
        { name: '经济学类', type: '大类', subject: '物理类', quota: 0, score: 642, rank: 5268, includes: '' },
        { name: '电气工程及其自动化（中外合作办学）（中外合作办学）', type: '专业', subject: '物理类', quota: 0, score: 641, rank: 5573, includes: '中外合作办学' },
        { name: '工业设计（中外合作办学）（中外合作办学）', type: '专业', subject: '物理类', quota: 0, score: 628, rank: 10271, includes: '中外合作办学' },
        { name: '护理学', type: '专业', subject: '物理类', quota: 0, score: 621, rank: 13587, includes: '' },
        { name: '建筑学（中外合作办学）（中外合作办学）', type: '专业', subject: '物理类', quota: 0, score: 610, rank: 20009, includes: '中外合作办学' },
      ]
    }
  },
  {
    id: 33,
    name: '西北工业大学',
    province: '陕西省',
    city: '西安',
    batch: '二期',
    intro: '中国航空、航天、航海领域的顶尖研究型大学，创办于1938年，三航特色全国独一无二。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '工商管理类（西安市）（管理试验班）（含工商管理、会计学专业；专业分流时，100%类内专业任选）', type: '大类', subject: '历史类', quota: 0, score: 630, rank: 1523, includes: '西安市；管理试验班；含工商管理、会计学专业；专业分流时，100%类内专业任选' },
        { name: '经济与贸易类（西安市）（国贸、法学、行管）（含国际经济与贸易、法学、行政管理专业；专业分流时，100%类内专业任选）', type: '大类', subject: '历史类', quota: 0, score: 628, rank: 1697, includes: '西安市；国贸、法学、行管；含国际经济与贸易、法学、行政管理专业；专业分流时，100%类内专业任选' },
        { name: '马克思主义理论（西安市）', type: '专业', subject: '历史类', quota: 0, score: 626, rank: 1884, includes: '西安市' },
        { name: '外国语言文学类（西安市）（含英语、德语专业；专业分流时，100%类内专业任选）', type: '大类', subject: '历史类', quota: 0, score: 622, rank: 2295, includes: '西安市；含英语、德语专业；专业分流时，100%类内专业任选' },
        { name: '航空航天类（西安市）（黄玉珊航空班）（含飞行器设计与工程专业）', type: '专业', subject: '物理类', quota: 0, score: 668, rank: 868, includes: '西安市；黄玉珊航空班；含飞行器设计与工程专业' },
        { name: '航空航天类（西安市）（陈士橹飞天班）（含航空航天工程专业）', type: '专业', subject: '物理类', quota: 0, score: 666, rank: 1013, includes: '西安市；陈士橹飞天班；含航空航天工程专业' },
        { name: '计算机类（西安市）（计算机科学拔尖基地班）（含计算机科学与技术专业）', type: '专业', subject: '物理类', quota: 0, score: 665, rank: 1135, includes: '西安市；计算机科学拔尖基地班；含计算机科学与技术专业' },
        { name: '航空航天类（西安市）（智慧三航拔尖班）（含飞行器设计与工程、计算机科学与技术专业）', type: '专业', subject: '物理类', quota: 0, score: 663, rank: 1345, includes: '西安市；智慧三航拔尖班；含飞行器设计与工程、计算机科学与技术专业' },
        { name: '航空航天类（西安市）（航天）（含飞行器设计与工程、飞行器动力工程、飞行器控制与信息工程、航空航天工程专业；专业分流时，100%类内专业任选）', type: '专业', subject: '物理类', quota: 0, score: 661, rank: 1570, includes: '西安市；航天；含飞行器设计与工程、飞行器动力工程、飞行器控制与信息工程、航空航天工程专业；专业分流时，100%类内专业任选' },
        { name: '电子信息类（西安市）（柔性电子拔尖班）（含柔性电子学专业）', type: '专业', subject: '物理类', quota: 0, score: 659, rank: 1816, includes: '西安市；柔性电子拔尖班；含柔性电子学专业' },
        { name: '航空航天类（西安市）（航宇力学拔尖基地班）（含工程力学专业）', type: '专业', subject: '物理类', quota: 0, score: 659, rank: 1816, includes: '西安市；航宇力学拔尖基地班；含工程力学专业' },
        { name: '航空航天类（西安市）（航空）（含飞行器设计与工程、飞行器控制与信息工程、航空航天工程专业；专业分流时，100%类内专业任选）', type: '专业', subject: '物理类', quota: 0, score: 659, rank: 1816, includes: '西安市；航空；含飞行器设计与工程、飞行器控制与信息工程、航空航天工程专业；专业分流时，100%类内专业任选' },
        { name: '计算机类（西安市）（计算机）（含计算机科学与技术、物联网工程、数据科学与大数据技术、人工智能、智能交互设计专业；专业分流时，100%类内专业任选）', type: '专业', subject: '物理类', quota: 0, score: 659, rank: 1816, includes: '西安市；计算机；含计算机科学与技术、物联网工程、数据科学与大数据技术、人工智能、智能交互设计专业；专业分流时，100%类内专业任选' },
        { name: '电子信息类（西安市）（电子信息）（含电子科学与技术、电子信息工程、探测制导与控制技术、通信工程专业；专业分流时，100%类内专业任选）', type: '专业', subject: '物理类', quota: 0, score: 657, rank: 2081, includes: '西安市；电子信息；含电子科学与技术、电子信息工程、探测制导与控制技术、通信工程专业；专业分流时，100%类内专业任选' },
        { name: '海洋工程类（西安市）（黄震中海洋班）（含船舶与海洋工程、水声工程、信息工程专业）', type: '专业', subject: '物理类', quota: 0, score: 657, rank: 2081, includes: '西安市；黄震中海洋班；含船舶与海洋工程、水声工程、信息工程专业' },
        { name: '电子信息类（西安市）（集成电路）（含微电子科学与工程、集成电路设计与集成系统专业；专业分流时，100%类内专业任选）', type: '专业', subject: '物理类', quota: 0, score: 656, rank: 2224, includes: '西安市；集成电路；含微电子科学与工程、集成电路设计与集成系统专业；专业分流时，100%类内专业任选' },
        { name: '航空航天类（西安市）（航宇智能制造）（含飞行器制造工程、微机电系统工程、机械电子工程、机械设计制造及其自动化、工业工程专业；专业分流时，100%类内专业任选）', type: '专业', subject: '物理类', quota: 0, score: 656, rank: 2224, includes: '西安市；航宇智能制造；含飞行器制造工程、微机电系统工程、机械电子工程、机械设计制造及其自动化、工业工程专业；专业分流时，100%类内专业任选' },
        { name: '航空航天类（西安市）（航空发动机）（含飞行器动力工程、能源与动力工程专业；专业分流时，100%类内专业任选）', type: '专业', subject: '物理类', quota: 0, score: 656, rank: 2224, includes: '西安市；航空发动机；含飞行器动力工程、能源与动力工程专业；专业分流时，100%类内专业任选' },
        { name: '计算机类（西安市）（网络安全）（含网络空间安全、信息安全、保密技术专业；专业分流时，100%类内专业任选）', type: '专业', subject: '物理类', quota: 0, score: 655, rank: 2366, includes: '西安市；网络安全；含网络空间安全、信息安全、保密技术专业；专业分流时，100%类内专业任选' },
        { name: '计算机类（西安市）（软件）（含软件工程专业；一、二年级6600元/年，三、四年级按学分计，每学分400元，三、四年级总学分不高于80学分）', type: '专业', subject: '物理类', quota: 0, score: 654, rank: 2505, includes: '西安市；软件；含软件工程专业；一、二年级6600元/年，三、四年级按学分计，每学分400元，三、四年级总学分不高于80学分' },
        { name: '航空航天类（西安市）（民用航空）（含飞行器设计与工程、飞行器控制与信息工程、低空技术与工程专业；专业分流时，100%类内专业任选）', type: '专业', subject: '物理类', quota: 0, score: 653, rank: 2699, includes: '西安市；民用航空；含飞行器设计与工程、飞行器控制与信息工程、低空技术与工程专业；专业分流时，100%类内专业任选' },
        { name: '自动化类（西安市）（含自动化、电气工程及其自动化、机器人工程专业；专业分流时，100%类内专业任选）', type: '专业', subject: '物理类', quota: 0, score: 653, rank: 2699, includes: '西安市；含自动化、电气工程及其自动化、机器人工程专业；专业分流时，100%类内专业任选' },
        { name: '物理学类（国家专项计划）（空天应用物理试验班）', type: '专业', subject: '物理类', quota: 0, score: 648, rank: 3754, includes: '国家专项计划；空天应用物理试验班' },
        { name: '工业设计', type: '专业', subject: '物理类', quota: 0, score: 641, rank: 5573, includes: '' },
        { name: '化学类（国家专项计划）（先进高分子试验班）', type: '专业', subject: '物理类', quota: 0, score: 641, rank: 5573, includes: '国家专项计划；先进高分子试验班' },
        { name: '材料科学与工程（西安市）（中外合作办学）', type: '专业', subject: '物理类', quota: 0, score: 630, rank: 9436, includes: '西安市；中外合作办学' },
        { name: '高分子材料与工程（西安市）（中外合作办学）', type: '专业', subject: '物理类', quota: 0, score: 626, rank: 11148, includes: '西安市；中外合作办学' },
      ]
    }
  },
  {
    id: 34,
    name: '兰州大学',
    province: '甘肃省',
    city: '兰州',
    batch: '二期',
    intro: '中国西北地区最重要的综合性研究型大学，创办于1909年，化学、大气科学、草学等学科特色鲜明。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '法学', type: '大类', subject: '历史类', quota: 0, score: 635, rank: 1125, includes: '' },
        { name: '法学（涉外法治创新班）', type: '大类', subject: '历史类', quota: 0, score: 633, rank: 1262, includes: '涉外法治创新班' },
        { name: '汉语言文学', type: '大类', subject: '历史类', quota: 0, score: 631, rank: 1447, includes: '' },
        { name: '历史学类（含历史学（基地班）、历史学、文物与博物馆学专业）', type: '大类', subject: '历史类', quota: 0, score: 628, rank: 1697, includes: '含历史学（基地班）、历史学、文物与博物馆学专业' },
        { name: '政治学类（含政治学与行政学、国际政治专业）', type: '专业', subject: '历史类', quota: 0, score: 626, rank: 1884, includes: '含政治学与行政学、国际政治专业' },
        { name: '马克思主义理论类（含思想政治教育、马克思主义理论专业）', type: '专业', subject: '历史类', quota: 0, score: 626, rank: 1884, includes: '含思想政治教育、马克思主义理论专业' },
        { name: '工商管理类（含基地班）（含行政管理、会计学、人力资源管理、信息管理与信息系统专业，身体条件详见院校章程）', type: '大类', subject: '历史类', quota: 0, score: 626, rank: 1884, includes: '含基地班；含行政管理、会计学、人力资源管理、信息管理与信息系统专业，身体条件详见院校章程' },
        { name: '英语', type: '大类', subject: '历史类', quota: 0, score: 625, rank: 1976, includes: '' },
        { name: '微电子科学与工程（集成电路设计与应用创新班）', type: '专业', subject: '物理类', quota: 0, score: 639, rank: 6181, includes: '集成电路设计与应用创新班' },
        { name: '计算机类（含基地班）（含计算机科学与技术、数据科学与大数据技术专业；身体条件详见院校章程）', type: '专业', subject: '物理类', quota: 0, score: 638, rank: 6503, includes: '含基地班；含计算机科学与技术、数据科学与大数据技术专业；身体条件详见院校章程' },
        { name: '数学与应用数学（基地班）', type: '专业', subject: '物理类', quota: 0, score: 637, rank: 6838, includes: '基地班' },
        { name: '信息与计算科学（先进计算创新班）', type: '专业', subject: '物理类', quota: 0, score: 637, rank: 6838, includes: '先进计算创新班' },
        { name: '电子信息类（含基地班）（含电子信息科学与技术、通信工程、人工智能专业）', type: '专业', subject: '物理类', quota: 0, score: 637, rank: 6838, includes: '含基地班；含电子信息科学与技术、通信工程、人工智能专业' },
        { name: '物理学类（含基地班）（含物理学、微电子科学与工程专业）', type: '专业', subject: '物理类', quota: 0, score: 633, rank: 8236, includes: '含基地班；含物理学、微电子科学与工程专业' },
        { name: '核工程与核技术', type: '专业', subject: '物理类', quota: 0, score: 632, rank: 8622, includes: '' },
        { name: '应用物理学（原子核物理方向基地班）（身体条件详见院校章程）', type: '专业', subject: '物理类', quota: 0, score: 631, rank: 9012, includes: '原子核物理方向基地班；身体条件详见院校章程' },
        { name: '核化工与核燃料工程（身体条件详见院校章程）', type: '专业', subject: '物理类', quota: 0, score: 630, rank: 9436, includes: '身体条件详见院校章程' },
        { name: '新能源材料与器件（新型电力系统创新班）（身体条件详见院校章程）', type: '专业', subject: '物理类', quota: 0, score: 630, rank: 9436, includes: '新型电力系统创新班；身体条件详见院校章程' },
        { name: '理论与应用力学（基地班）', type: '专业', subject: '物理类', quota: 0, score: 628, rank: 10271, includes: '基地班' },
        { name: '大气科学（含基地班）', type: '专业', subject: '物理类', quota: 0, score: 626, rank: 11148, includes: '含基地班' },
        { name: '材料类（含材料物理、材料化学、新能源材料与器件专业；身体条件详见院校章程）', type: '专业', subject: '物理类', quota: 0, score: 626, rank: 11148, includes: '含材料物理、材料化学、新能源材料与器件专业；身体条件详见院校章程' },
        { name: '经济学（基地班）（身体条件详见院校章程）', type: '大类', subject: '物理类', quota: 0, score: 625, rank: 11635, includes: '基地班；身体条件详见院校章程' },
        { name: '工商管理类（AI与智慧管理创新班）（含行政管理、会计学、人力资源管理、信息管理与信息系统专业，身体条件详见院校章程）', type: '大类', subject: '物理类', quota: 0, score: 625, rank: 11635, includes: 'AI与智慧管理创新班；含行政管理、会计学、人力资源管理、信息管理与信息系统专业，身体条件详见院校章程' },
        { name: '应用气象学（智慧气象创新班）（身体条件详见院校章程）', type: '专业', subject: '物理类', quota: 0, score: 624, rank: 12091, includes: '智慧气象创新班；身体条件详见院校章程' },
        { name: '化学类（含基地班）（含化学、应用化学专业；身体条件详见院校章程）', type: '专业', subject: '物理类', quota: 0, score: 624, rank: 12091, includes: '含基地班；含化学、应用化学专业；身体条件详见院校章程' },
        { name: '生物科学（含基地班）（身体条件详见院校章程）', type: '专业', subject: '物理类', quota: 0, score: 624, rank: 12091, includes: '含基地班；身体条件详见院校章程' },
        { name: '金融学（数智金融创新班）（身体条件详见院校章程）', type: '大类', subject: '物理类', quota: 0, score: 623, rank: 12592, includes: '数智金融创新班；身体条件详见院校章程' },
        { name: '生物技术（含基地班）（身体条件详见院校章程）', type: '专业', subject: '物理类', quota: 0, score: 623, rank: 12592, includes: '含基地班；身体条件详见院校章程' },
        { name: '应用化学（放射化学方向基地班）（身体条件详见院校章程）', type: '专业', subject: '物理类', quota: 0, score: 622, rank: 13077, includes: '放射化学方向基地班；身体条件详见院校章程' },
        { name: '临床医学', type: '专业', subject: '物理类', quota: 0, score: 621, rank: 13587, includes: '' },
        { name: '工商管理类（国家专项计划）（含基地班）', type: '大类', subject: '物理类', quota: 0, score: 621, rank: 13587, includes: '国家专项计划；含基地班' },
        { name: '经济学类（含经济学、国际经济与贸易、金融学专业；身体条件详见院校章程）', type: '大类', subject: '物理类', quota: 0, score: 621, rank: 13587, includes: '含经济学、国际经济与贸易、金融学专业；身体条件详见院校章程' },
        { name: '口腔医学（身体条件详见院校章程）', type: '专业', subject: '物理类', quota: 0, score: 619, rank: 14636, includes: '身体条件详见院校章程' },
        { name: '药学', type: '专业', subject: '物理类', quota: 0, score: 618, rank: 15171, includes: '' },
        { name: '临床医学（身体条件详见院校章程）', type: '专业', subject: '物理类', quota: 0, score: 618, rank: 15171, includes: '身体条件详见院校章程' },
        { name: '工商管理类（含基地班）（含行政管理、会计学、人力资源管理、信息管理与信息系统专业，身体条件详见院校章程）', type: '大类', subject: '物理类', quota: 0, score: 617, rank: 15775, includes: '含基地班；含行政管理、会计学、人力资源管理、信息管理与信息系统专业，身体条件详见院校章程' },
        { name: '新闻传播学类', type: '大类', subject: '物理类', quota: 0, score: 604, rank: 24100, includes: '' },
      ]
    }
  },
  {
    id: 35,
    name: '华南理工大学',
    province: '广东省',
    city: '广州',
    batch: '二期',
    intro: '中国南方工科实力最强的高校之一，创办于1952年，轻工技术与工程全国第一。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '法学（广州市）（卓越法律班）', type: '大类', subject: '历史类', quota: 0, score: 643, rank: 679, includes: '广州市；卓越法律班' },
        { name: '法学类（广州市）（含法学、知识产权专业）', type: '大类', subject: '历史类', quota: 0, score: 637, rank: 1005, includes: '广州市；含法学、知识产权专业' },
        { name: '经济学类（广州市）（含经济学、金融学专业）', type: '大类', subject: '历史类', quota: 0, score: 631, rank: 1447, includes: '广州市；含经济学、金融学专业' },
        { name: '工商管理类（广州市）（含工商管理、财务管理专业）', type: '大类', subject: '历史类', quota: 0, score: 629, rank: 1611, includes: '广州市；含工商管理、财务管理专业' },
        { name: '行政管理（广州市）', type: '大类', subject: '历史类', quota: 0, score: 626, rank: 1884, includes: '广州市' },
        { name: '新闻传播学类（广州市）（含新闻学、传播学、广告学专业）', type: '大类', subject: '历史类', quota: 0, score: 622, rank: 2295, includes: '广州市；含新闻学、传播学、广告学专业' },
        { name: '工科试验班（广州市）（AI先进技术拔尖班）（含计算机科学与技术（拔尖基地班）、信息工程（拔尖班）、自动化（拔尖班）专业）', type: '专业', subject: '物理类', quota: 0, score: 657, rank: 2081, includes: '广州市；AI先进技术拔尖班；含计算机科学与技术（拔尖基地班）、信息工程（拔尖班）、自动化（拔尖班）专业' },
        { name: '工科试验班（广州市）（AI与低空技术）（含智能科学与技术、低空技术与工程专业）', type: '专业', subject: '物理类', quota: 0, score: 656, rank: 2224, includes: '广州市；AI与低空技术；含智能科学与技术、低空技术与工程专业' },
        { name: '计算机类（广州市）（含计算机科学与技术、网络工程、信息安全专业）', type: '专业', subject: '物理类', quota: 0, score: 654, rank: 2505, includes: '广州市；含计算机科学与技术、网络工程、信息安全专业' },
        { name: '工科试验班（广州市）（卓越人才班）（含电气工程及其自动化（卓越班）、能源与动力工程（低碳与智慧能源卓越班）、软件工程（卓越班）、软件工程（工业软件卓越班）、电子科学与技术（卓越班）、食品科学与工程（未来食品卓越班）专业；软件工程专业第一、二学年6850元/年，第三、四学年16000元/年）', type: '专业', subject: '物理类', quota: 0, score: 654, rank: 2505, includes: '广州市；卓越人才班；含电气工程及其自动化（卓越班）、能源与动力工程（低碳与智慧能源卓越班）、软件工程（卓越班）、软件工程（工业软件卓越班）、电子科学与技术（卓越班）、食品科学与工程（未来食品卓越班）专业；软件工程专业第一、二学年6850元/年，第三、四学年16000元/年' },
        { name: '电子科学与技术（广州市）', type: '专业', subject: '物理类', quota: 0, score: 652, rank: 2914, includes: '广州市' },
        { name: '软件工程（广州市）（第一、二学年6850元/年，第三、四学年16000元/年）', type: '专业', subject: '物理类', quota: 0, score: 650, rank: 3294, includes: '广州市；第一、二学年6850元/年，第三、四学年16000元/年' },
        { name: '信息工程（广州市）', type: '专业', subject: '物理类', quota: 0, score: 650, rank: 3294, includes: '广州市' },
        { name: '自动化（广州市）', type: '专业', subject: '物理类', quota: 0, score: 650, rank: 3294, includes: '广州市' },
        { name: '电气类（广州市）（含电气工程及其自动化、能源与动力工程专业；不招不能准确识别红、黄、绿、兰、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形考生）', type: '专业', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '广州市；含电气工程及其自动化、能源与动力工程专业；不招不能准确识别红、黄、绿、兰、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形考生' },
        { name: '工科试验班（广州市）（院士特色班）（含机械类（院士特色班）、材料类（院士特色班）、建筑类（院士特色班）、智能建造（院士特色班）专业）', type: '专业', subject: '物理类', quota: 0, score: 649, rank: 3513, includes: '广州市；院士特色班；含机械类（院士特色班）、材料类（院士特色班）、建筑类（院士特色班）、智能建造（院士特色班）专业' },
        { name: '工科试验班（广州市）（理工交叉创新班）（含应用化学（拔尖基地班）、应用物理学（严济慈英才班）、工程力学（创新班）专业）', type: '专业', subject: '物理类', quota: 0, score: 648, rank: 3754, includes: '广州市；理工交叉创新班；含应用化学（拔尖基地班）、应用物理学（严济慈英才班）、工程力学（创新班）专业' },
        { name: '数学类（广州市）（含数学与应用数学、信息与计算科学、统计学专业）', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '广州市；含数学与应用数学、信息与计算科学、统计学专业' },
        { name: '物理学类（广州市）（含应用物理学、光电信息科学与工程专业）', type: '专业', subject: '物理类', quota: 0, score: 646, rank: 4252, includes: '广州市；含应用物理学、光电信息科学与工程专业' },
        { name: '大数据管理与应用（广州市）', type: '大类', subject: '物理类', quota: 0, score: 644, rank: 4724, includes: '广州市' },
        { name: '工科试验班（广州市）（智能装备与先进制造）（含机械工程、机械电子工程、智能车辆工程、过程装备与控制工程、材料成型及控制工程专业）', type: '专业', subject: '物理类', quota: 0, score: 643, rank: 4995, includes: '广州市；智能装备与先进制造；含机械工程、机械电子工程、智能车辆工程、过程装备与控制工程、材料成型及控制工程专业' },
        { name: '工科试验班（广州市）（先进材料）（含高分子材料与工程、材料科学与工程、功能材料、生物材料专业；不招色盲、不能准确识别红、黄、绿、兰、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形考生）', type: '专业', subject: '物理类', quota: 0, score: 640, rank: 5846, includes: '广州市；先进材料；含高分子材料与工程、材料科学与工程、功能材料、生物材料专业；不招色盲、不能准确识别红、黄、绿、兰、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形考生' },
        { name: '工科试验班（国家专项计划）（先进材料）', type: '专业', subject: '物理类', quota: 0, score: 639, rank: 6181, includes: '国家专项计划；先进材料' },
        { name: '工业设计（广州市）（不招色盲、不能准确识别红、黄、绿、兰、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形考生）', type: '专业', subject: '物理类', quota: 0, score: 639, rank: 6181, includes: '广州市；不招色盲、不能准确识别红、黄、绿、兰、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形考生' },
        { name: '工科试验班（广州市）（智慧化工与低碳工程）（含应用化学、化学工程与工艺、能源化学工程、制药工程、轻化工程、资源环境科学、环境工程、环境科学与工程专业；不招色盲、不能准确识别红、黄、绿、兰、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形考生）', type: '专业', subject: '物理类', quota: 0, score: 639, rank: 6181, includes: '广州市；智慧化工与低碳工程；含应用化学、化学工程与工艺、能源化学工程、制药工程、轻化工程、资源环境科学、环境工程、环境科学与工程专业；不招色盲、不能准确识别红、黄、绿、兰、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形考生' },
        { name: '会计学（广州市）', type: '大类', subject: '物理类', quota: 0, score: 638, rank: 6503, includes: '广州市' },
        { name: '工科试验班（广州市）（智能交通与数字建造）（含智慧交通、智能建造、土木工程、水务工程、工程管理、工程力学专业）', type: '专业', subject: '物理类', quota: 0, score: 638, rank: 6503, includes: '广州市；智能交通与数字建造；含智慧交通、智能建造、土木工程、水务工程、工程管理、工程力学专业' },
        { name: '工科试验班（国家专项计划）（智能交通与数字建造）', type: '专业', subject: '物理类', quota: 0, score: 637, rank: 6838, includes: '国家专项计划；智能交通与数字建造' },
        { name: '金融科技（广州市）', type: '专业', subject: '物理类', quota: 0, score: 637, rank: 6838, includes: '广州市' },
        { name: '工科试验班（广州市）（生命科学与健康工程）（含食品科学与工程、食品质量与安全、生物工程、生物制药、生物技术专业；不招色盲、不能准确识别红、黄、绿、兰、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形考生）', type: '专业', subject: '物理类', quota: 0, score: 637, rank: 6838, includes: '广州市；生命科学与健康工程；含食品科学与工程、食品质量与安全、生物工程、生物制药、生物技术专业；不招色盲、不能准确识别红、黄、绿、兰、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形考生' },
        { name: '工科试验班（国家专项计划）（智慧化工与低碳工程）', type: '专业', subject: '物理类', quota: 0, score: 634, rank: 7879, includes: '国家专项计划；智慧化工与低碳工程' },
        { name: '临床医学类（广州市）（含临床医学、医学影像学专业；不招色盲、色弱、不能准确识别红、黄、绿、兰、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形者）', type: '专业', subject: '物理类', quota: 0, score: 628, rank: 10271, includes: '广州市；含临床医学、医学影像学专业；不招色盲、色弱、不能准确识别红、黄、绿、兰、紫各种颜色中任何一种颜色的导线、按键、信号灯、几何图形者' },
        { name: '工科试验班（国家专项计划）（生命科学与健康工程）', type: '专业', subject: '物理类', quota: 0, score: 626, rank: 11148, includes: '国家专项计划；生命科学与健康工程' },
        { name: '建筑类', type: '专业', subject: '物理类', quota: 0, score: 623, rank: 12592, includes: '' },
      ]
    }
  },
  {
    id: 36,
    name: '国防科技大学',
    province: '湖南省',
    city: '长沙',
    batch: '二期',
    intro: '中国最高军事学府，创办于1953年，计算机科学与技术、软件工程等学科全国顶尖。',
    hasDetail: false,
  },
  {
    id: 37,
    name: '西北农林科技大学',
    province: '陕西省',
    city: '杨凌',
    batch: '二期',
    intro: '中国西北地区农林领域的最高学府，创办于1934年，农学、林学、葡萄酒等学科特色鲜明。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '经济学类（咸阳市）（含经济学、金融学、国际经济与贸易专业）', type: '大类', subject: '历史类', quota: 0, score: 627, rank: 1789, includes: '咸阳市；含经济学、金融学、国际经济与贸易专业' },
        { name: '法学（咸阳市）', type: '大类', subject: '历史类', quota: 0, score: 625, rank: 1976, includes: '咸阳市' },
        { name: '工商管理类（咸阳市）（含会计学、工商管理、农林经济管理、土地资源管理、市场营销专业）', type: '大类', subject: '历史类', quota: 0, score: 623, rank: 2181, includes: '咸阳市；含会计学、工商管理、农林经济管理、土地资源管理、市场营销专业' },
        { name: '汉语国际教育（咸阳市）', type: '大类', subject: '历史类', quota: 0, score: 622, rank: 2295, includes: '咸阳市' },
        { name: '英语（咸阳市）（只招英语语种考生）', type: '大类', subject: '历史类', quota: 0, score: 621, rank: 2410, includes: '咸阳市；只招英语语种考生' },
        { name: '公共管理类（咸阳市）（含公共事业管理、劳动与社会保障专业）', type: '大类', subject: '历史类', quota: 0, score: 621, rank: 2410, includes: '咸阳市；含公共事业管理、劳动与社会保障专业' },
        { name: '社会学类（咸阳市）（含社会学、社会工作专业）', type: '大类', subject: '历史类', quota: 0, score: 619, rank: 2651, includes: '咸阳市；含社会学、社会工作专业' },
        { name: '俄语（咸阳市）', type: '大类', subject: '历史类', quota: 0, score: 613, rank: 3521, includes: '咸阳市' },
        { name: '电气工程及其自动化（咸阳市）', type: '专业', subject: '物理类', quota: 0, score: 631, rank: 9012, includes: '咸阳市' },
        { name: '电子信息工程（咸阳市）', type: '专业', subject: '物理类', quota: 0, score: 630, rank: 9436, includes: '咸阳市' },
        { name: '光电信息科学与工程（咸阳市）', type: '专业', subject: '物理类', quota: 0, score: 625, rank: 11635, includes: '咸阳市' },
        { name: '计算机类（咸阳市）（含计算机科学与技术、软件工程、数据科学与大数据技术专业）', type: '专业', subject: '物理类', quota: 0, score: 624, rank: 12091, includes: '咸阳市；含计算机科学与技术、软件工程、数据科学与大数据技术专业' },
        { name: '法学（咸阳市）', type: '大类', subject: '物理类', quota: 0, score: 622, rank: 13077, includes: '咸阳市' },
        { name: '动物医学（咸阳市）（卓越班）（色弱色盲不能录取；多元化创新人才培养模式）', type: '专业', subject: '物理类', quota: 0, score: 621, rank: 13587, includes: '咸阳市；卓越班；色弱色盲不能录取；多元化创新人才培养模式' },
        { name: '机械类（咸阳市）（含机械设计制造及其自动化、机械电子工程、车辆工程专业）', type: '专业', subject: '物理类', quota: 0, score: 621, rank: 13587, includes: '咸阳市；含机械设计制造及其自动化、机械电子工程、车辆工程专业' },
        { name: '信息与计算科学（咸阳市）', type: '专业', subject: '物理类', quota: 0, score: 620, rank: 14098, includes: '咸阳市' },
        { name: '数学与应用数学（咸阳市）', type: '专业', subject: '物理类', quota: 0, score: 620, rank: 14098, includes: '咸阳市' },
        { name: '经济学（咸阳市）（基础拔尖培养班）（多元化创新人才培养模式）', type: '大类', subject: '物理类', quota: 0, score: 619, rank: 14636, includes: '咸阳市；基础拔尖培养班；多元化创新人才培养模式' },
        { name: '农业机械化及其自动化（咸阳市）', type: '专业', subject: '物理类', quota: 0, score: 619, rank: 14636, includes: '咸阳市' },
        { name: '农业智能装备工程（咸阳市）', type: '专业', subject: '物理类', quota: 0, score: 619, rank: 14636, includes: '咸阳市' },
        { name: '农学（咸阳市）（农学类）（含农学、植物科学与技术、种子科学与工程专业；色弱色盲不能录取）', type: '专业', subject: '物理类', quota: 0, score: 617, rank: 15775, includes: '咸阳市；农学类；含农学、植物科学与技术、种子科学与工程专业；色弱色盲不能录取' },
        { name: '水利类（咸阳市）（卓越班）（含水文与水资源工程、农业水利工程专业；多元化创新人才培养模式）', type: '专业', subject: '物理类', quota: 0, score: 617, rank: 15775, includes: '咸阳市；卓越班；含水文与水资源工程、农业水利工程专业；多元化创新人才培养模式' },
        { name: '制药工程（咸阳市）（色弱色盲不能录取）', type: '专业', subject: '物理类', quota: 0, score: 615, rank: 16934, includes: '咸阳市；色弱色盲不能录取' },
        { name: '智慧农业（咸阳市）（色弱色盲不能录取）', type: '专业', subject: '物理类', quota: 0, score: 615, rank: 16934, includes: '咸阳市；色弱色盲不能录取' },
        { name: '经济学类（咸阳市）（含经济学、金融学、国际经济与贸易专业）', type: '大类', subject: '物理类', quota: 0, score: 614, rank: 17521, includes: '咸阳市；含经济学、金融学、国际经济与贸易专业' },
        { name: '生物科学类（咸阳市）（含生物科学、生物技术、生物工程专业；色弱色盲不能录取）', type: '专业', subject: '物理类', quota: 0, score: 614, rank: 17521, includes: '咸阳市；含生物科学、生物技术、生物工程专业；色弱色盲不能录取' },
        { name: '数字经济（咸阳市）', type: '大类', subject: '物理类', quota: 0, score: 614, rank: 17521, includes: '咸阳市' },
        { name: '生物信息学（咸阳市）（色弱色盲不能录取）', type: '专业', subject: '物理类', quota: 0, score: 614, rank: 17521, includes: '咸阳市；色弱色盲不能录取' },
        { name: '化学类（咸阳市）（含应用化学、化学生物学专业；色弱色盲不能录取）', type: '专业', subject: '物理类', quota: 0, score: 613, rank: 18114, includes: '咸阳市；含应用化学、化学生物学专业；色弱色盲不能录取' },
        { name: '食品营养与健康（咸阳市）（卓越班）（色弱色盲不能录取；多元化创新人才培养模式）', type: '专业', subject: '物理类', quota: 0, score: 613, rank: 18114, includes: '咸阳市；卓越班；色弱色盲不能录取；多元化创新人才培养模式' },
        { name: '动物科学', type: '专业', subject: '物理类', quota: 0, score: 612, rank: 18720, includes: '' },
        { name: '地理信息科学（咸阳市）（色盲不能录取）', type: '专业', subject: '物理类', quota: 0, score: 612, rank: 18720, includes: '咸阳市；色盲不能录取' },
        { name: '智慧水利（咸阳市）', type: '专业', subject: '物理类', quota: 0, score: 612, rank: 18720, includes: '咸阳市' },
        { name: '植物保护（咸阳市）（色弱色盲不能录取）', type: '专业', subject: '物理类', quota: 0, score: 611, rank: 19367, includes: '咸阳市；色弱色盲不能录取' },
        { name: '水利类（咸阳市）（含水利水电工程、水文与水资源工程、农业水利工程、能源与动力工程专业）', type: '专业', subject: '物理类', quota: 0, score: 611, rank: 19367, includes: '咸阳市；含水利水电工程、水文与水资源工程、农业水利工程、能源与动力工程专业' },
        { name: '葡萄与葡萄酒工程（咸阳市）（卓越工程师班）（色弱色盲不能录取）', type: '专业', subject: '物理类', quota: 0, score: 610, rank: 20009, includes: '咸阳市；卓越工程师班；色弱色盲不能录取' },
        { name: '土木工程（咸阳市）', type: '专业', subject: '物理类', quota: 0, score: 610, rank: 20009, includes: '咸阳市' },
        { name: '社会学类（咸阳市）（含社会学、社会工作专业）', type: '大类', subject: '物理类', quota: 0, score: 610, rank: 20009, includes: '咸阳市；含社会学、社会工作专业' },
        { name: '环境科学与工程类（咸阳市）（含环境工程、环境科学专业）', type: '专业', subject: '物理类', quota: 0, score: 610, rank: 20009, includes: '咸阳市；含环境工程、环境科学专业' },
        { name: '工商管理类（咸阳市）（含会计学、工商管理、农林经济管理、土地资源管理、市场营销专业）', type: '大类', subject: '物理类', quota: 0, score: 610, rank: 20009, includes: '咸阳市；含会计学、工商管理、农林经济管理、土地资源管理、市场营销专业' },
        { name: '资源环境科学', type: '专业', subject: '物理类', quota: 0, score: 609, rank: 20698, includes: '' },
        { name: '农林经济管理（咸阳市）（卓越班）（多元化创新人才培养模式）', type: '大类', subject: '物理类', quota: 0, score: 609, rank: 20698, includes: '咸阳市；卓越班；多元化创新人才培养模式' },
        { name: '资源环境科学（咸阳市）（卓越班）（色弱色盲不能录取；多元化创新人才培养模式）', type: '专业', subject: '物理类', quota: 0, score: 609, rank: 20698, includes: '咸阳市；卓越班；色弱色盲不能录取；多元化创新人才培养模式' },
        { name: '食品科学与工程类（咸阳市）（含食品科学与工程、食品质量与安全专业；色弱色盲不能录取）', type: '专业', subject: '物理类', quota: 0, score: 609, rank: 20698, includes: '咸阳市；含食品科学与工程、食品质量与安全专业；色弱色盲不能录取' },
        { name: '智能建造（咸阳市）', type: '专业', subject: '物理类', quota: 0, score: 609, rank: 20698, includes: '咸阳市' },
        { name: '葡萄与葡萄酒工程（咸阳市）（色弱色盲不能录取）', type: '专业', subject: '物理类', quota: 0, score: 608, rank: 21354, includes: '咸阳市；色弱色盲不能录取' },
        { name: '植物生产类（咸阳市）（卓越班）（含农学、植物保护、园艺专业；色弱色盲不能录取；多元化创新人才培养模式）', type: '专业', subject: '物理类', quota: 0, score: 608, rank: 21354, includes: '咸阳市；卓越班；含农学、植物保护、园艺专业；色弱色盲不能录取；多元化创新人才培养模式' },
        { name: '园林（咸阳市）（色弱色盲不能录取）', type: '专业', subject: '物理类', quota: 0, score: 607, rank: 22009, includes: '咸阳市；色弱色盲不能录取' },
        { name: '设施农业科学与工程（咸阳市）', type: '专业', subject: '物理类', quota: 0, score: 607, rank: 22009, includes: '咸阳市' },
        { name: '林学类（咸阳市）（含林学、森林保护专业；色弱色盲不能录取）', type: '专业', subject: '物理类', quota: 0, score: 607, rank: 22009, includes: '咸阳市；含林学、森林保护专业；色弱色盲不能录取' },
        { name: '智慧林业（咸阳市）（色弱色盲不能录取）', type: '专业', subject: '物理类', quota: 0, score: 607, rank: 22009, includes: '咸阳市；色弱色盲不能录取' },
        { name: '水土保持与荒漠化防治（咸阳市）', type: '专业', subject: '物理类', quota: 0, score: 606, rank: 22695, includes: '咸阳市' },
        { name: '林业工程类（咸阳市）（含林产化工、木材科学与工程专业）', type: '专业', subject: '物理类', quota: 0, score: 606, rank: 22695, includes: '咸阳市；含林产化工、木材科学与工程专业' },
        { name: '公共管理类（咸阳市）（含公共事业管理、劳动与社会保障专业）', type: '大类', subject: '物理类', quota: 0, score: 606, rank: 22695, includes: '咸阳市；含公共事业管理、劳动与社会保障专业' },
        { name: '土地科学与技术（咸阳市）（色弱色盲不能录取）', type: '专业', subject: '物理类', quota: 0, score: 606, rank: 22695, includes: '咸阳市；色弱色盲不能录取' },
        { name: '城乡规划（咸阳市）', type: '大类', subject: '物理类', quota: 0, score: 605, rank: 23383, includes: '咸阳市' },
        { name: '园艺（咸阳市）（园艺类）（含园艺、茶学专业；色弱色盲不能录取）', type: '专业', subject: '物理类', quota: 0, score: 605, rank: 23383, includes: '咸阳市；园艺类；含园艺、茶学专业；色弱色盲不能录取' },
        { name: '水土保持与荒漠化防治', type: '专业', subject: '物理类', quota: 0, score: 604, rank: 24100, includes: '' },
        { name: '风景园林（咸阳市）', type: '大类', subject: '物理类', quota: 0, score: 604, rank: 24100, includes: '咸阳市' },
        { name: '动物医学（咸阳市）（色弱色盲不能录取）', type: '专业', subject: '物理类', quota: 0, score: 604, rank: 24100, includes: '咸阳市；色弱色盲不能录取' },
        { name: '生态修复学（咸阳市）', type: '专业', subject: '物理类', quota: 0, score: 604, rank: 24100, includes: '咸阳市' },
        { name: '智慧牧业科学与工程（咸阳市）（色弱色盲不能录取）', type: '专业', subject: '物理类', quota: 0, score: 603, rank: 24833, includes: '咸阳市；色弱色盲不能录取' },
        { name: '园艺（国家专项计划）（园艺类）', type: '专业', subject: '物理类', quota: 0, score: 602, rank: 25574, includes: '国家专项计划；园艺类' },
        { name: '动物药学', type: '专业', subject: '物理类', quota: 0, score: 602, rank: 25574, includes: '' },
        { name: '动物科学（咸阳市）（色弱色盲不能录取）', type: '专业', subject: '物理类', quota: 0, score: 601, rank: 26287, includes: '咸阳市；色弱色盲不能录取' },
        { name: '草业科学（咸阳市）', type: '专业', subject: '物理类', quota: 0, score: 601, rank: 26287, includes: '咸阳市' },
        { name: '食品科学与工程（咸阳市）（中外合作办学）（色弱色盲不能录取）', type: '专业', subject: '物理类', quota: 0, score: 593, rank: 32692, includes: '咸阳市；中外合作办学；色弱色盲不能录取' },
        { name: '环境科学（咸阳市）（中外合作办学）', type: '专业', subject: '物理类', quota: 0, score: 589, rank: 36180, includes: '咸阳市；中外合作办学' },
        { name: '植物保护（咸阳市）（中外合作办学）（色弱色盲不能录取）', type: '专业', subject: '物理类', quota: 0, score: 587, rank: 38007, includes: '咸阳市；中外合作办学；色弱色盲不能录取' },
      ]
    }
  },
  {
    id: 38,
    name: '东南大学',
    province: '江苏省',
    city: '南京',
    batch: '二期',
    intro: '中国著名的理工科研究型大学，创办于1902年，建筑学、土木工程、电子信息等学科全国领先。',
    hasDetail: true,
    schools: [],
    admission: {
      year: '2025',
      province: '河北',
      categories: [
        { name: '文科试验班类（南京市）（郭秉文班）（含法学、艺术史论、哲学、汉语言文学、社会学专业）', type: '大类', subject: '历史类', quota: 0, score: 640, rank: 833, includes: '南京市；郭秉文班；含法学、艺术史论、哲学、汉语言文学、社会学专业' },
        { name: '文科试验班类（南京市）（数智经济与智能管理）（含会计学、金融学、经济学、工商管理、国际经济与贸易、物流管理专业）', type: '大类', subject: '历史类', quota: 0, score: 637, rank: 1005, includes: '南京市；数智经济与智能管理；含会计学、金融学、经济学、工商管理、国际经济与贸易、物流管理专业' },
        { name: '英语（南京市）', type: '大类', subject: '历史类', quota: 0, score: 634, rank: 1200, includes: '南京市' },
        { name: '劳动与社会保障（南京市）', type: '大类', subject: '历史类', quota: 0, score: 631, rank: 1447, includes: '南京市' },
        { name: '工科试验班（南京市）（吴健雄班）（含信息工程（等四年制理工科专业）专业）', type: '专业', subject: '物理类', quota: 0, score: 668, rank: 868, includes: '南京市；吴健雄班；含信息工程（等四年制理工科专业）专业' },
        { name: '未来机器人（南京市）（未来技术班）', type: '专业', subject: '物理类', quota: 0, score: 665, rank: 1135, includes: '南京市；未来技术班' },
        { name: '集成电路设计与集成系统（南京市）', type: '专业', subject: '物理类', quota: 0, score: 663, rank: 1345, includes: '南京市' },
        { name: '电子信息类（南京市）（含信息工程、电子科学与技术、海洋信息工程专业）', type: '专业', subject: '物理类', quota: 0, score: 662, rank: 1447, includes: '南京市；含信息工程、电子科学与技术、海洋信息工程专业' },
        { name: '计算机类（南京市）（含计算机科学与技术、人工智能、软件工程、网络空间安全专业）', type: '专业', subject: '物理类', quota: 0, score: 661, rank: 1570, includes: '南京市；含计算机科学与技术、人工智能、软件工程、网络空间安全专业' },
        { name: '电气工程及其自动化（南京市）', type: '专业', subject: '物理类', quota: 0, score: 660, rank: 1688, includes: '南京市' },
        { name: '生物医学工程（南京市）（学制七年本硕连读）', type: '专业', subject: '物理类', quota: 0, score: 660, rank: 1688, includes: '南京市；学制七年本硕连读' },
        { name: '工科试验班（南京市）（智能制造与智能系统）（含机器人工程、自动化、智能感知工程、智能车辆工程、测控技术与仪器、机械工程专业）', type: '专业', subject: '物理类', quota: 0, score: 658, rank: 1944, includes: '南京市；智能制造与智能系统；含机器人工程、自动化、智能感知工程、智能车辆工程、测控技术与仪器、机械工程专业' },
        { name: '理科试验班', type: '专业', subject: '物理类', quota: 0, score: 647, rank: 4006, includes: '' },
        { name: '工科试验班（国家专项计划）（物质科学与生态）', type: '专业', subject: '物理类', quota: 0, score: 644, rank: 4724, includes: '国家专项计划；物质科学与生态' },
        { name: '工科试验班（国家专项计划）（智慧建造与智能交通）', type: '专业', subject: '物理类', quota: 0, score: 641, rank: 5573, includes: '国家专项计划；智慧建造与智能交通' },
        { name: '理科试验班（国家专项计划）（数智科学与智慧金融）', type: '专业', subject: '物理类', quota: 0, score: 641, rank: 5573, includes: '国家专项计划；数智科学与智慧金融' },
      ]
    }
  },
];
