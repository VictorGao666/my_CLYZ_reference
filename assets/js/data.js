// ========== 39所985工程大学数据 ==========
const universities = [
  // === 10所详细高校（id 0-9）===
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
        // === 历史类 本科批 ===
        { name: '文科试验班类', type: '大类', subject: '历史类', quota: 22, score: 671, includes: '中国语言文学类等' },
        { name: '英语（医学英语）', type: '专业', subject: '历史类', quota: 3, score: 666, includes: '医学部，只招英语语种考生' },
        // === 历史类 提前批A ===
        { name: '马克思主义理论类', type: '大类', subject: '历史类', quota: 2, score: 668, includes: '提前批A' },
        { name: '俄语', type: '专业', subject: '历史类', quota: 1, score: 664, includes: '提前批A，限英语语种' },
        { name: '德语', type: '专业', subject: '历史类', quota: 1, score: 666, includes: '提前批A，限英语语种' },
        { name: '西班牙语', type: '专业', subject: '历史类', quota: 1, score: 665, includes: '提前批A，限英语语种' },
        { name: '朝鲜语', type: '专业', subject: '历史类', quota: 1, score: 662, includes: '提前批A，限英语语种' },
        { name: '意大利语', type: '专业', subject: '历史类', quota: 1, score: 663, includes: '提前批A，限英语语种' },
        // === 历史类 提前批B段（国家专项）===
        { name: '法学（国家专项）', type: '专业', subject: '历史类', quota: 2, score: 678, includes: '提前批B段' },
        { name: '公共管理类（国家专项）', type: '大类', subject: '历史类', quota: 1, score: 676, includes: '提前批B段' },
        { name: '社会学类（国家专项）', type: '大类', subject: '历史类', quota: 1, score: 672, includes: '提前批B段' },
        { name: '图书馆学（国家专项）', type: '专业', subject: '历史类', quota: 1, score: 668, includes: '提前批B段' },
        // === 物理类 本科批 ===
        { name: '理科试验班类', type: '大类', subject: '物理类', quota: 25, score: 688, includes: '数学类等' },
        { name: '临床医学（八年制本博连读）', type: '专业', subject: '物理类', quota: 8, score: 686, includes: '医学部，色盲不予录取，6000元/年·8年' },
        { name: '临床医学', type: '专业', subject: '物理类', quota: 3, score: 685, includes: '医学部，色盲不予录取，6000元/年·5年' },
        { name: '口腔医学（八年制本博连读）', type: '专业', subject: '物理类', quota: 2, score: 685, includes: '医学部，色盲不予录取，6000元/年·8年' },
        { name: '口腔医学', type: '专业', subject: '物理类', quota: 2, score: 683, includes: '医学部，色盲不予录取，6000元/年·5年' },
        { name: '基础医学（八年制本博连读）', type: '专业', subject: '物理类', quota: 1, score: 683, includes: '医学部，6000元/年·8年' },
        { name: '预防医学（七年制本硕连读）', type: '专业', subject: '物理类', quota: 2, score: 678, includes: '医学部，6000元/年·7年' },
        { name: '药学（六年制本硕连读）', type: '专业', subject: '物理类', quota: 4, score: 678, includes: '医学部，6000元/年·6年' },
        { name: '英语（医学英语）', type: '专业', subject: '物理类', quota: 3, score: 677, includes: '医学部，只招英语语种考生' },
        { name: '护理学', type: '专业', subject: '物理类', quota: 4, score: 673, includes: '医学部，色盲不予录取，6000元/年·4年' },
        // === 物理类 提前批B段（国家专项）===
        { name: '工科试验班类（国家专项）', type: '大类', subject: '物理类', quota: 1, score: 680, includes: '提前批B段' },
        { name: '地球物理学类（国家专项）', type: '大类', subject: '物理类', quota: 1, score: 679, includes: '提前批B段' },
        { name: '法学（国家专项）', type: '专业', subject: '物理类', quota: 1, score: 678, includes: '提前批B段' },
        { name: '心理学类（国家专项）', type: '大类', subject: '物理类', quota: 1, score: 677, includes: '提前批B段' },
        { name: '医学技术类（国家专项）', type: '大类', subject: '物理类', quota: 4, score: 675, includes: '医学部，提前批B段' }
      ]
    }
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
        // === 历史类 本科批 ===
        { name: '文科试验班类', type: '大类', subject: '历史类', quota: 3, score: 679, includes: '文科各专业，5000元/年' },
        // === 物理类 本科批 ===
        { name: '临床医学类（协和/卓越医师科学家）', type: '大类', subject: '物理类', quota: 4, score: 689, includes: '8年制，5000元/年' },
        { name: '理科试验班', type: '大类', subject: '物理类', quota: 39, score: 688, includes: '理科各专业，5000元/年' },
        // === 历史类 提前批A ===
        { name: '马克思主义理论', type: '专业', subject: '历史类', quota: 1, score: 669, includes: '提前批A段' },
        { name: '艺术史论', type: '专业', subject: '历史类', quota: 1, score: 667, includes: '提前批A段' },
        // === 提前批B段（国家专项）===
        { name: '工科试验班（无穹书院·人工智能/国家专项）', type: '大类', subject: '物理类', quota: 2, score: 686, includes: '提前批B段' },
        { name: '电子信息类（国家专项）', type: '大类', subject: '物理类', quota: 2, score: 685, includes: '提前批B段' },
        { name: '工科试验班（为先书院/国家专项）', type: '大类', subject: '物理类', quota: 2, score: 685, includes: '提前批B段' },
        { name: '工科试验班（智能制造与装备类/国家专项）', type: '大类', subject: '物理类', quota: 3, score: 685, includes: '提前批B段' },
        { name: '工科试验班（笃实书院/国家专项）', type: '大类', subject: '物理类', quota: 3, score: 684, includes: '提前批B段' },
        { name: '工科试验班（自强书院/国家专项）', type: '大类', subject: '物理类', quota: 4, score: 684, includes: '提前批B段' },
        { name: '临床医学类（国家专项）', type: '大类', subject: '物理类', quota: 2, score: 682, includes: '提前批B段，卓越医师科学家' },
        { name: '理科试验班（数理类/国家专项）', type: '大类', subject: '物理类', quota: 2, score: 682, includes: '提前批B段' },
        { name: '工科试验班（水木书院/国家专项）', type: '大类', subject: '物理类', quota: 3, score: 681, includes: '提前批B段' },
        { name: '工科试验班（秀钟书院/国家专项）', type: '大类', subject: '物理类', quota: 2, score: 680, includes: '提前批B段' },
        { name: '工科试验班（建筑规划景观/国家专项）', type: '大类', subject: '物理类', quota: 2, score: 678, includes: '提前批B段' },
        { name: '文科试验班类（外文实验班/国家专项）', type: '大类', subject: '历史类', quota: 1, score: 670, includes: '提前批B段' },
        { name: '文科试验班类（新雅书院/国家专项）', type: '大类', subject: '历史类', quota: 1, score: 670, includes: '提前批B段' },
        // === 提前批C段 ===
        { name: '核工程与核技术（定向中核）', type: '专业', subject: '物理类', quota: 3, score: 678, includes: '提前批C段，定向就业' }
      ]
    }
  },

  {
    id: 2,
    name: '复旦大学',
    province: '上海市',
    city: '上海',
    batch: '一期',
    intro: '中国顶尖的综合性研究型大学，创办于1905年，人文、社科、自然科学与医学协调发展。',
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
        // === 历史类 本科批 ===
        { name: '人文科学试验班', type: '大类', subject: '历史类', quota: 1, score: 671, includes: '中国语言文学类、历史学类、哲学类、文物与博物馆学' },
        { name: '法学', type: '专业', subject: '历史类', quota: 3, score: 669, includes: '含法学-经济学、法学-人工智能双学士学位' },
        { name: '经济学类', type: '大类', subject: '历史类', quota: 1, score: 667, includes: '经济学、金融学、国际经济与贸易、财政学、保险学；含双学士学位项目' },
        // === 物理类 本科批 ===
        { name: '工科试验班（相辉学堂香农计划）', type: '大类', subject: '物理类', quota: 2, score: 686, includes: '领军人才班，含微电子、AI、智能科学、电子信息等' },
        { name: '理科试验班（相辉学堂相辉计划）', type: '大类', subject: '物理类', quota: 3, score: 684, includes: '数学、物理、化学、生物科学英才班' },
        { name: '工科试验班（集成电路与微纳电子创新学院）', type: '大类', subject: '物理类', quota: 3, score: 683, includes: '含集成电路产教融合班' },
        { name: '工科试验班（计算与智能领军人才班）', type: '大类', subject: '物理类', quota: 2, score: 682, includes: '人工智能方向' },
        { name: '工科试验班（未来信息领军人才班）', type: '大类', subject: '物理类', quota: 2, score: 681, includes: '电子信息方向，含"光子计划"院士班' },
        { name: '计算机科学与技术（拔尖人才试验班）', type: '专业', subject: '物理类', quota: 3, score: 681, includes: '拔尖人才试验班' },
        { name: '工科试验班（未来信息创新学院）', type: '大类', subject: '物理类', quota: 5, score: 680, includes: '电子信息、通信工程、光电信息等' },
        // === 医学院 物理类 本科批 ===
        { name: '临床医学（八年制正谊明道班）', type: '专业', subject: '物理类', quota: 3, score: 681, includes: '上海医学院，八年制本博连读' },
        { name: '临床医学（卓越临床医师班）', type: '专业', subject: '物理类', quota: 3, score: 672, includes: '上海医学院，融通项目' },
        { name: '药学（拔尖班）', type: '专业', subject: '物理类', quota: 2, score: 670, includes: '上海医学院，融通项目' },
        { name: '口腔医学', type: '专业', subject: '物理类', quota: 2, score: 668, includes: '上海医学院，含卓越口腔医师班，含双学士学位' },
        { name: '药学', type: '专业', subject: '物理类', quota: 2, score: 664, includes: '上海医学院，含产教融合班、双学士学位' },
        { name: '基础医学', type: '专业', subject: '物理类', quota: 2, score: 662, includes: '上海医学院' },
        { name: '预防医学（拔尖班）', type: '专业', subject: '物理类', quota: 2, score: 660, includes: '上海医学院，融通项目' },
        // === 提前批B段（国家专项）===
        { name: '社会科学试验班（国家专项）', type: '大类', subject: '历史类', quota: 1, score: 663, includes: '提前批B段，国务学院' },
        { name: '物理学类（国家专项）', type: '大类', subject: '物理类', quota: 1, score: 675, includes: '提前批B段' },
        { name: '核工程与核技术（国家专项）', type: '专业', subject: '物理类', quota: 1, score: 666, includes: '提前批B段' },
        { name: '药学（国家专项）', type: '专业', subject: '物理类', quota: 1, score: 647, includes: '上海医学院，提前批B段' },
        { name: '预防医学（国家专项）', type: '专业', subject: '物理类', quota: 1, score: 647, includes: '上海医学院，提前批B段' }
      ]
    }
  },

  {
    id: 3,
    name: '上海交通大学',
    province: '上海市',
    city: '上海',
    batch: '一期',
    intro: '中国顶尖的综合性研究型大学，创办于1896年，以工科、医科和商科见长。',
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
        // === 物理类 本科批 ===
        { name: '电子信息类（计算机永强试验班）', type: '大类', subject: '物理类', quota: 2, score: 688, includes: '含计算机科学与技术、软件工程、信息安全' },
        { name: '人工智能（拔尖英才试点班）', type: '专业', subject: '物理类', quota: 3, score: 687, includes: '7000元/年' },
        { name: '电子信息类（IEEE试点班）', type: '大类', subject: '物理类', quota: 3, score: 686, includes: '计算机科学与技术、信息工程、信息安全、自动化；含双学士学位' },
        { name: '电子信息类（集成电路英才班）', type: '大类', subject: '物理类', quota: 2, score: 686, includes: '微电子科学与工程、电子科学与技术、信息工程' },
        { name: '机械类（钱学森工程科学试点班）', type: '大类', subject: '物理类', quota: 1, score: 682, includes: '机械工程、能源与动力工程；含双学士学位项目' },
        { name: '理科试验班类（数学方向）', type: '大类', subject: '物理类', quota: 2, score: 680, includes: '数学与应用数学、统计学；含数学-人工智能双学士学位' },
        { name: '工科试验班类（信息类）', type: '大类', subject: '物理类', quota: 16, score: 680, includes: '计算机科学与技术、信息安全、软件工程、微电子、信息工程、电子科学与技术、自动化、电气工程等' },
        { name: '电子信息类（浦江国际学院）', type: '大类', subject: '物理类', quota: 4, score: 669, includes: '中外合作办学，机械工程、电子与计算机工程；75000元/年' },
        // === 物理类 提前批B段（国家专项）===
        { name: '工科试验班类（国家专项）', type: '大类', subject: '物理类', quota: 1, score: 678, includes: '提前批B段，溥渊未来技术学院，健康方向' },
        { name: '经济管理试验班（国家专项）', type: '大类', subject: '物理类', quota: 1, score: 674, includes: '提前批B段，含双学士学位项目' },
        { name: '工科试验班类（国家专项）', type: '大类', subject: '物理类', quota: 10, score: 668, includes: '提前批B段，物理类' },
        // === 历史类 本科批 ===
        { name: '法学试验班', type: '大类', subject: '历史类', quota: 2, score: 667, includes: '含法学-经济学双学士学位' },
        { name: '人文科学试验班（国务学院）', type: '大类', subject: '历史类', quota: 2, score: 663, includes: '行政管理；含行政管理-法学双学士学位' },
        { name: '人文科学试验班（人文学院）', type: '大类', subject: '历史类', quota: 2, score: 660, includes: '汉语言文学（中外文化交流）' },
        { name: '人文科学试验班（媒传学院）', type: '大类', subject: '历史类', quota: 2, score: 660, includes: '传播学' },
        // === 医学院 物理类 本科批 ===
        { name: '临床医学（八年制本博连读）', type: '专业', subject: '物理类', quota: 3, score: 681, includes: '医学院，含国际交流项目，7400元/年·8年' },
        { name: '口腔医学（5+3一体化）', type: '专业', subject: '物理类', quota: 4, score: 674, includes: '医学院，含国际交流项目，7400元/年·5年' },
        { name: '医学试验班（临床方向）', type: '大类', subject: '物理类', quota: 19, score: 662, includes: '医学院，临床医学五年制，含国际交流项目，7400元/年·5年' },
        // === 医学院 提前批B段（国家专项）===
        { name: '医学试验班（国家专项）', type: '大类', subject: '物理类', quota: 4, score: 662, includes: '医学院，提前批B段，临床方向' },
        { name: '医学试验班（国家专项）', type: '大类', subject: '物理类', quota: 7, score: 638, includes: '医学院，提前批B段，预防方向' }
      ]
    }
  },

  {
    id: 4,
    name: '浙江大学',
    province: '浙江省',
    city: '杭州',
    batch: '一期',
    intro: '中国顶尖的综合性研究型大学，创办于1897年，学科门类齐全，工科、农学、医学实力突出。',
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
        // === 历史类 本科批 ===
        { name: '社会科学试验班（竺可桢学院人文社科实验班）', type: '大类', subject: '历史类', quota: 3, score: 665, includes: '杭州市，含经济学、财政学、金融学、法学等专业' },
        { name: '社会科学试验班（含数字金融双学士学位项目）', type: '大类', subject: '历史类', quota: 15, score: 659, includes: '杭州市，含数字金融（金融学-数学与应用数学）双学士学位项目' },
        { name: '人文科学试验班', type: '大类', subject: '历史类', quota: 4, score: 658, includes: '杭州市，含古典文献学、汉语言文学、哲学、历史学等专业' },
        { name: '外国语言文学类（含涉外法治双学士学位项目）', type: '大类', subject: '历史类', quota: 4, score: 657, includes: '杭州市，含英语、翻译专业' },
        // === 历史类 提前批B段（国家专项）===
        { name: '社会科学试验班（国家专项计划）', type: '大类', subject: '历史类', quota: 2, score: 658, includes: '杭州市，提前批B段，含数字金融双学士学位项目' },
        { name: '人文科学试验班（国家专项计划）', type: '大类', subject: '历史类', quota: 2, score: 655, includes: '杭州市，提前批B段' },
        { name: '新闻传播学类（国家专项计划）', type: '大类', subject: '历史类', quota: 2, score: 649, includes: '杭州市，提前批B段，含智能与国际传播创新班' },
        // === 物理类 本科批 ===
        { name: '工科试验班（竺可桢学院图灵班）', type: '大类', subject: '物理类', quota: 4, score: 684, includes: '杭州市，含计算机科学与技术专业' },
        { name: '人工智能', type: '专业', subject: '物理类', quota: 6, score: 682, includes: '杭州市' },
        { name: '工科试验班（EE类）', type: '大类', subject: '物理类', quota: 5, score: 680, includes: '杭州市，含电气工程及其自动化、电子信息工程等专业' },
        { name: '工科试验班（智能制造与机器人创新班）', type: '大类', subject: '物理类', quota: 3, score: 680, includes: '杭州市，含机械工程专业' },
        { name: '工科试验班（信息）', type: '大类', subject: '物理类', quota: 16, score: 679, includes: '杭州市，含计算机科学与技术、信息安全、软件工程等专业' },
        // === 物理类 提前批B段（国家专项）===
        { name: '工科试验班（国家专项计划，信息）', type: '大类', subject: '物理类', quota: 2, score: 677, includes: '杭州市，提前批B段' },
        { name: '工科试验班（国家专项计划）', type: '大类', subject: '物理类', quota: 2, score: 672, includes: '杭州市，提前批B段' },
        { name: '工科试验班（国家专项计划，材料、化工与高分子）', type: '大类', subject: '物理类', quota: 2, score: 670, includes: '杭州市，提前批B段' },
        { name: '工科试验班（国家专项计划，智慧城市与建筑工程）', type: '大类', subject: '物理类', quota: 2, score: 665, includes: '杭州市，提前批B段' },
        { name: '工科试验班（国家专项计划，海洋）', type: '大类', subject: '物理类', quota: 2, score: 654, includes: '杭州市，提前批B段，含智慧海洋卓越班' },
        // === 物理类 中外合作办学 ===
        { name: '工科试验班（ZJUUIUC联合学院）', type: '大类', subject: '物理类', quota: 15, score: 650, includes: '中外合作办学，海宁国际校区，含机械工程、电子与计算机工程等专业' }
      ]
    }
  },

  {
    id: 5,
    name: '南京大学',
    province: '江苏省',
    city: '南京',
    batch: '一期',
    intro: '中国顶尖的综合性研究型大学，创办于1902年，文理学科实力雄厚。',
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
        // === 历史类 本科批 ===
        { name: '人文科学试验班', type: '大类', subject: '历史类', quota: 4, score: 660, includes: '含汉语言文学、哲学、新闻学、历史学、考古学等专业' },
        { name: '经济管理试验班（数智经济与管理）', type: '大类', subject: '历史类', quota: 6, score: 659, includes: '含经济学、金融学、保险学、工商管理类、国际经济与贸易、财政学专业' },
        { name: '社会科学试验班', type: '大类', subject: '历史类', quota: 3, score: 659, includes: '含法学、社会学类、公共管理类、图书馆学、档案学等专业' },
        // === 历史类 提前批B段（国家专项）===
        { name: '社会科学试验班（国家专项计划）', type: '大类', subject: '历史类', quota: 2, score: 651, includes: '提前批B段' },
        { name: '经济管理试验班（国家专项计划，数智经济与管理）', type: '大类', subject: '历史类', quota: 2, score: 649, includes: '提前批B段' },
        { name: '人文科学试验班（国家专项计划）', type: '大类', subject: '历史类', quota: 2, score: 649, includes: '提前批B段' },
        // === 物理类 本科批 ===
        { name: '人工智能', type: '专业', subject: '物理类', quota: 3, score: 682, includes: '' },
        { name: '理科试验班（匡亚明学院大理科班）', type: '大类', subject: '物理类', quota: 3, score: 679, includes: '含数学与应用数学、信息与计算科学、物理学、化学、计算机科学与技术等专业' },
        { name: '计算机科学与技术', type: '专业', subject: '物理类', quota: 5, score: 678, includes: '' },
        { name: '软件工程', type: '专业', subject: '物理类', quota: 4, score: 677, includes: '' },
        { name: '电子信息类', type: '大类', subject: '物理类', quota: 6, score: 677, includes: '含电子信息科学与技术、通信工程、微电子科学与工程、集成电路设计与集成系统专业' },
        { name: '计算机科学与技术（计算机金融实验班）', type: '专业', subject: '物理类', quota: 3, score: 676, includes: '含双学士学位' },
        { name: '软件工程（软工经济创新班）', type: '专业', subject: '物理类', quota: 3, score: 675, includes: '含双学士学位' },
        { name: '理科试验班类（数理科学类）', type: '大类', subject: '物理类', quota: 5, score: 675, includes: '含数学与应用数学、信息与计算科学、统计学、物理学、天文学、大气科学等专业' },
        { name: '工科试验班', type: '大类', subject: '物理类', quota: 3, score: 675, includes: '含光电信息科学与工程、生物医学工程、材料物理、材料化学、新能源科学与工程专业' },
        { name: '技术科学试验班', type: '大类', subject: '物理类', quota: 9, score: 675, includes: '含智能科学与技术、集成电路设计与集成系统、数字经济、自动化（机器人方向）专业' },
        { name: '理科试验班类（化学与生命科学类）', type: '大类', subject: '物理类', quota: 4, score: 674, includes: '含生物科学、生物技术、生态学、化学、应用化学专业' },
        // === 物理类 提前批B段（国家专项）===
        { name: '理科试验班类（国家专项计划，化学与生命科学类）', type: '大类', subject: '物理类', quota: 2, score: 659, includes: '提前批B段' }
      ]
    }
  },

  {
    id: 6,
    name: '中国科学技术大学',
    province: '安徽省',
    city: '合肥',
    batch: '一期',
    intro: '中国科学院直属的顶尖研究型大学，创办于1958年，以前沿科学和高新技术著称。',
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
        // === 物理类 本科批 ===
        { name: '工科试验班（信息智能方向）', type: '大类', subject: '物理类', quota: 11, score: 677, includes: '合肥市，含计算机类、电子信息类、人工智能、集成电路设计与集成系统、网络空间安全专业' },
        { name: '工科试验班（航空航天、人形机器人、低碳能源技术及安全）', type: '大类', subject: '物理类', quota: 3, score: 676, includes: '合肥市，含机器人工程、理论与应用力学、机械设计制造及其自动化、能源与动力工程、安全工程专业' },
        { name: '理科试验班类', type: '大类', subject: '物理类', quota: 17, score: 675, includes: '合肥市，含量子信息科学、数学类、物理学类、化学类、生物科学类、空间科学与技术、统计学等专业' },
        // === 物理类 提前批B段（国家专项）===
        { name: '工科试验班（国家专项计划）', type: '大类', subject: '物理类', quota: 1, score: 672, includes: '提前批B段，航空航天、人形机器人、低碳能源技术及安全' },
        { name: '材料类（国家专项计划）', type: '大类', subject: '物理类', quota: 1, score: 669, includes: '提前批B段' },
        { name: '生物科学类（国家专项计划）', type: '大类', subject: '物理类', quota: 1, score: 668, includes: '提前批B段' },
        { name: '化学类（国家专项计划）', type: '大类', subject: '物理类', quota: 1, score: 667, includes: '提前批B段' },
        { name: '理科试验班类（国家专项计划，统计与大数据技术试验班）', type: '大类', subject: '物理类', quota: 1, score: 667, includes: '提前批B段' }
      ]
    }
  },

  {
    id: 7,
    name: '哈尔滨工业大学',
    province: '黑龙江省',
    city: '哈尔滨',
    batch: '一期',
    intro: '中国顶尖的工科研究型大学，创办于1920年，被誉为"工程师的摇篮"，航天领域实力突出。',
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
        // === 历史类 本科批 ===
        { name: '经济管理试验班', type: '大类', subject: '历史类', quota: 20, score: 637, includes: '含工商管理、会计学、建筑学、城乡规划等专业，本专业类内任选专业' },
        // === 物理类 本科批 ===
        { name: '工科试验班（尖班、港大优学班）', type: '大类', subject: '物理类', quota: 6, score: 681, includes: '含自动化、人工智能、机器人工程、飞行器制造工程等专业，院士领衔' },
        { name: '工科试验班（AI院士特色班）', type: '大类', subject: '物理类', quota: 4, score: 678, includes: '含人工智能专业，院士担任班主任，第1年校本部，后3年深圳校区' },
        { name: '工科试验班（自主智能系统院士特色班）', type: '大类', subject: '物理类', quota: 4, score: 676, includes: '含自动化、人工智能、机器人工程等专业，培养地点哈尔滨+上海' },
        { name: '工科试验班（院士特色班）', type: '大类', subject: '物理类', quota: 4, score: 675, includes: '含永坦班、善义班、小卫星班、智能机器人班，院士担任班主任，领域内专业任选' },
        { name: '工科试验班（AI加先进技术领军班）', type: '大类', subject: '物理类', quota: 5, score: 674, includes: '含计算机科学与技术、人工智能、信息安全、软件工程等专业，本专业类内任选' },
        { name: '工科试验班（未来技术拔尖班）', type: '大类', subject: '物理类', quota: 10, score: 674, includes: '校本部理工专业任选，未来技术学院培养，书院制管理' },
        { name: '工科试验班（AI加先进技术领军班深圳拔尖班）', type: '大类', subject: '物理类', quota: 6, score: 673, includes: '含自动化、集成电路设计与集成系统、通信工程等专业，深圳校区' },
        // === 物理类 提前批B段（国家专项）===
        { name: '工科试验班（国家专项计划）', type: '大类', subject: '物理类', quota: 8, score: 652, includes: '提前批B段，卓越优才计划' },
        // === 物理类 中外合作办学 ===
        { name: '数学与应用数学（中外合作办学）', type: '专业', subject: '物理类', quota: 7, score: 637, includes: '与俄罗斯圣彼得堡国立大学合作，"4+0"培养' },
        { name: '应用物理学（中外合作办学）', type: '专业', subject: '物理类', quota: 8, score: 637, includes: '与俄罗斯圣彼得堡国立大学合作，"4+0"培养' },
        { name: '大数据管理与应用（中外合作办学）', type: '专业', subject: '物理类', quota: 5, score: 636, includes: '与法国里昂商学院合作，"4+0"培养' },
        { name: '化学（中外合作办学）', type: '专业', subject: '物理类', quota: 8, score: 625, includes: '与俄罗斯圣彼得堡国立大学合作，"4+0"培养' },
        { name: '智慧建筑与建造（中外合作办学）', type: '专业', subject: '物理类', quota: 5, score: 622, includes: '与意大利都灵理工大学合作，"4+0"培养' }
      ]
    }
  },

  {
    id: 8,
    name: '武汉大学',
    province: '湖北省',
    city: '武汉',
    batch: '二期',
    intro: '中国著名的综合性研究型大学，创办于1893年，文理医工协调发展，校园风景优美。',
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
        // === 历史类 本科批 ===
        { name: '法学', type: '专业', subject: '历史类', quota: 2, score: 659, includes: '含德语法学、法语法学试验班、国际法' },
        { name: '文科试验班类（弘毅学堂）', type: '大类', subject: '历史类', quota: 4, score: 658, includes: '含汉语言文学、历史学、哲学、经济学、国际法等专业，可全校任选专业' },
        { name: '经济学类', type: '大类', subject: '历史类', quota: 2, score: 657, includes: '含经济学、国际经济与贸易、金融学、保险学、财政学专业' },
        { name: '中国语言文学类', type: '大类', subject: '历史类', quota: 2, score: 657, includes: '含汉语言文学、汉语国际教育专业' },
        { name: '新闻传播学类', type: '大类', subject: '历史类', quota: 2, score: 655, includes: '国际传播、智能传播试验班，含广播电视学、传播学专业' },
        { name: '工商管理类', type: '大类', subject: '历史类', quota: 2, score: 655, includes: '含工商管理、市场营销、会计学、财务管理等专业' },
        { name: '外国语言文学类', type: '大类', subject: '历史类', quota: 2, score: 652, includes: '含英语、法语、德语、日语、西班牙语、俄语、翻译专业' },
        { name: '哲学类', type: '大类', subject: '历史类', quota: 3, score: 652, includes: '含哲学、宗教学专业' },
        // === 历史类 提前批B段（国家专项）===
        { name: '历史学类（国家专项计划）', type: '大类', subject: '历史类', quota: 2, score: 652, includes: '提前批B段' },
        // === 历史类 艺术类 ===
        { name: '戏剧影视文学', type: '专业', subject: '历史类', quota: 2, score: 630, includes: '按高考文化课成绩录取，授予艺术学学士学位' },
        // === 物理类 本科批 ===
        { name: '人工智能（自强班）', type: '专业', subject: '物理类', quota: 2, score: 672, includes: '自强班' },
        { name: '人工智能', type: '专业', subject: '物理类', quota: 4, score: 669, includes: '' },
        { name: '理科试验班（弘毅学堂）', type: '大类', subject: '物理类', quota: 4, score: 668, includes: '含数学与应用数学、物理学、化学、生物科学、智能制造工程等专业' },
        { name: '临床医学（8年）', type: '专业', subject: '物理类', quota: 2, score: 667, includes: '8年制' },
        { name: '网络空间安全（创新班）', type: '专业', subject: '物理类', quota: 2, score: 667, includes: '创新班' },
        { name: '计算机类（计算机学院）', type: '大类', subject: '物理类', quota: 4, score: 665, includes: '含计算机科学与技术、软件工程专业' },
        { name: '理科试验班（弘毅双学位试验班）', type: '大类', subject: '物理类', quota: 2, score: 665, includes: '含数学与应用数学、遥感科学与技术专业，低空经济试验班等' },
        { name: '计算机类（国家网络安全学院）', type: '大类', subject: '物理类', quota: 4, score: 664, includes: '含信息安全、网络空间安全专业' },
        { name: '机器人工程（机器人学院）', type: '专业', subject: '物理类', quota: 2, score: 664, includes: '含机器人工程、自动化' },
        { name: '数学类', type: '大类', subject: '物理类', quota: 4, score: 663, includes: '含数学与应用数学、信息与计算科学、统计学、数据科学与大数据技术专业' },
        { name: '电子信息类（电子信息学院）', type: '大类', subject: '物理类', quota: 10, score: 663, includes: '含电子信息工程、通信工程专业' },
        { name: '微电子科学与工程（集成电路学院）', type: '专业', subject: '物理类', quota: 3, score: 662, includes: '' },
        { name: '工科试验班（机器人与智能机械试验班）', type: '大类', subject: '物理类', quota: 3, score: 662, includes: '含智能制造工程、机械设计制造及其自动化专业' },
        { name: '工科试验班（电气类）', type: '大类', subject: '物理类', quota: 11, score: 662, includes: '含电气工程及其自动化、储能科学与工程专业' },
        { name: '遥感科学与技术', type: '专业', subject: '物理类', quota: 9, score: 661, includes: '含遥感科学与技术、空间信息与数字技术' },
        { name: '口腔医学（5+3一体化）', type: '专业', subject: '物理类', quota: 2, score: 660, includes: '5+3一体化' },
        { name: '生物科学类', type: '大类', subject: '物理类', quota: 3, score: 660, includes: '含生物科学、生物技术、生态学专业' },
        { name: '工科试验班（智慧能源与智能制造类）', type: '大类', subject: '物理类', quota: 8, score: 659, includes: '含智能制造工程、机械设计制造及其自动化、能源与动力工程等专业' },
        { name: '地球物理学（数智地空弘毅班）', type: '专业', subject: '物理类', quota: 2, score: 658, includes: '数智地空弘毅班' },
        { name: '临床医学（5+3一体化）', type: '专业', subject: '物理类', quota: 7, score: 656, includes: '5+3一体化' },
        { name: '物理学类', type: '大类', subject: '物理类', quota: 6, score: 656, includes: '含物理学、材料物理专业' },
        { name: '经济学（数智经济与管理创新班）', type: '专业', subject: '物理类', quota: 2, score: 655, includes: '含经济学基地班、金融工程、市场营销' },
        { name: '化学类', type: '大类', subject: '物理类', quota: 5, score: 654, includes: '含化学（含化生方向）、应用化学专业' },
        { name: '大数据管理与应用', type: '专业', subject: '物理类', quota: 4, score: 654, includes: '含大数据管理与应用、信息管理与信息系统、电子商务等' },
        { name: '智慧城市与空间规划', type: '专业', subject: '物理类', quota: 8, score: 653, includes: '含智慧城市与空间规划、地理信息科学、地理科学（弘毅班）' },
        { name: '经济学类', type: '大类', subject: '物理类', quota: 3, score: 652, includes: '含经济学、国际经济与贸易、金融学、保险学、财政学专业' },
        // === 物理类 提前批B段（国家专项）===
        { name: '时空信息工程（国家专项计划）', type: '专业', subject: '物理类', quota: 2, score: 659, includes: '提前批B段' },
        { name: '工科试验班（国家专项计划，数智建维与软件类）', type: '大类', subject: '物理类', quota: 2, score: 645, includes: '提前批B段' },
        { name: '智慧城市与空间规划（国家专项计划）', type: '专业', subject: '物理类', quota: 2, score: 643, includes: '提前批B段' },
        { name: '公共卫生与预防医学类（国家专项计划）', type: '大类', subject: '物理类', quota: 2, score: 635, includes: '提前批B段' }
      ]
    }
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
        // === 历史类 本科批 ===
        { name: '法学', type: '专业', subject: '历史类', quota: 3, score: 652, includes: '' },
        { name: '汉语言文学（广州）', type: '专业', subject: '历史类', quota: 3, score: 647, includes: '广州校区' },
        { name: '历史学（广州）', type: '专业', subject: '历史类', quota: 2, score: 647, includes: '广州校区' },
        { name: '经济学类（珠海）', type: '大类', subject: '历史类', quota: 5, score: 646, includes: '珠海校区，含经济学、金融学专业' },
        { name: '工商管理（深圳）', type: '专业', subject: '历史类', quota: 4, score: 643, includes: '深圳校区' },
        { name: '哲学类（广州）', type: '大类', subject: '历史类', quota: 2, score: 643, includes: '广州校区，含哲学、逻辑学专业' },
        { name: '公共管理类', type: '大类', subject: '历史类', quota: 2, score: 642, includes: '含行政管理、政治学与行政学专业' },
        // === 历史类 提前批B段（国家专项）===
        { name: '经济学类（国家专项计划，珠海）', type: '大类', subject: '历史类', quota: 2, score: 642, includes: '提前批B段，珠海校区' },
        { name: '国际政治（国家专项计划）', type: '专业', subject: '历史类', quota: 2, score: 639, includes: '提前批B段' },
        { name: '旅游管理类（国家专项计划）', type: '大类', subject: '历史类', quota: 2, score: 631, includes: '提前批B段' },
        // === 物理类 本科批 ===
        { name: '临床医学（八年制）', type: '专业', subject: '物理类', quota: 2, score: 672, includes: '八年制，不招色盲色弱' },
        { name: '数学类（珠海）', type: '大类', subject: '物理类', quota: 3, score: 653, includes: '珠海校区，含数学与应用数学、信息与计算科学专业' },
        { name: '软件工程', type: '专业', subject: '物理类', quota: 3, score: 652, includes: '' },
        { name: '电子信息类', type: '大类', subject: '物理类', quota: 17, score: 652, includes: '含电子信息创新基地班，含通信工程、微电子科学与工程等专业' },
        { name: '人工智能', type: '专业', subject: '物理类', quota: 10, score: 652, includes: '' },
        { name: '航空航天类', type: '大类', subject: '物理类', quota: 6, score: 649, includes: '含航空航天工程、理论与应用力学专业' },
        { name: '金融学（金融学、AI双学士学位项目，珠海）', type: '专业', subject: '物理类', quota: 3, score: 649, includes: '珠海校区，金融学+AI双学士学位' },
        { name: '物理学类（珠海）', type: '大类', subject: '物理类', quota: 4, score: 648, includes: '珠海校区，含基础物理与天文学术新星培养实验班' },
        { name: '生物科学类', type: '大类', subject: '物理类', quota: 5, score: 647, includes: '含生物科学、生物技术、生态学专业，不招色盲色弱' },
        { name: '生物医学工程', type: '专业', subject: '物理类', quota: 2, score: 646, includes: '含振声创新班，不招色盲色弱' },
        { name: '化学类', type: '大类', subject: '物理类', quota: 3, score: 646, includes: '含化学、高分子材料与工程、应用化学专业，不招色盲色弱' },
        { name: '口腔医学', type: '专业', subject: '物理类', quota: 5, score: 645, includes: '不招色盲色弱' },
        { name: '经济学类（珠海）', type: '大类', subject: '物理类', quota: 3, score: 644, includes: '珠海校区，含经济学、金融学专业' },
        { name: '临床医学（深圳）', type: '专业', subject: '物理类', quota: 19, score: 641, includes: '深圳校区，含眼科创新班，不招色盲色弱' },
        { name: '工商管理类（广州）', type: '大类', subject: '物理类', quota: 3, score: 641, includes: '广州校区，含工商管理、会计学专业' },
        // === 物理类 提前批B段（国家专项）===
        { name: '遥感科学与技术（国家专项计划）', type: '专业', subject: '物理类', quota: 2, score: 647, includes: '提前批B段' },
        { name: '化学类（国家专项计划）', type: '大类', subject: '物理类', quota: 2, score: 636, includes: '提前批B段' },
        { name: '海洋科学（国家专项计划）', type: '专业', subject: '物理类', quota: 2, score: 634, includes: '提前批B段' },
        { name: '药学（国家专项计划，深圳）', type: '专业', subject: '物理类', quota: 2, score: 633, includes: '提前批B段，深圳校区' },
        { name: '环境科学与工程类（国家专项计划）', type: '大类', subject: '物理类', quota: 2, score: 631, includes: '提前批B段，含永銮创新班' },
        { name: '地理科学类（国家专项计划）', type: '大类', subject: '物理类', quota: 2, score: 628, includes: '提前批B段' },
        { name: '预防医学（国家专项计划，广州）', type: '专业', subject: '物理类', quota: 2, score: 627, includes: '提前批B段，广州校区' },
        { name: '心理学（国家专项计划）', type: '专业', subject: '物理类', quota: 2, score: 625, includes: '提前批B段' }
      ]
    }
  },

  // === 其余29所高校（id 10-38）占位数据 ===
  { id: 10, name: '中国人民大学', province: '北京市', city: '北京', batch: '二期', hasDetail: false },
  { id: 11, name: '北京师范大学', province: '北京市', city: '北京', batch: '二期', hasDetail: false },
  { id: 12, name: '北京航空航天大学', province: '北京市', city: '北京', batch: '二期', hasDetail: false },
  { id: 13, name: '北京理工大学', province: '北京市', city: '北京', batch: '二期', hasDetail: false },
  { id: 14, name: '中国农业大学', province: '北京市', city: '北京', batch: '二期', hasDetail: false },
  { id: 15, name: '中央民族大学', province: '北京市', city: '北京', batch: '二期', hasDetail: false },
  { id: 16, name: '南开大学', province: '天津市', city: '天津', batch: '二期', hasDetail: false },
  { id: 17, name: '天津大学', province: '天津市', city: '天津', batch: '二期', hasDetail: false },
  { id: 18, name: '大连理工大学', province: '辽宁省', city: '大连', batch: '二期', hasDetail: false },
  { id: 19, name: '东北大学', province: '辽宁省', city: '沈阳', batch: '二期', hasDetail: false },
  { id: 20, name: '吉林大学', province: '吉林省', city: '长春', batch: '二期', hasDetail: false },
  { id: 21, name: '同济大学', province: '上海市', city: '上海', batch: '二期', hasDetail: false },
  { id: 22, name: '华东师范大学', province: '上海市', city: '上海', batch: '二期', hasDetail: false },
  { id: 23, name: '东南大学', province: '江苏省', city: '南京', batch: '二期', hasDetail: false },
  { id: 24, name: '厦门大学', province: '福建省', city: '厦门', batch: '二期', hasDetail: false },
  { id: 25, name: '山东大学', province: '山东省', city: '济南', batch: '二期', hasDetail: false },
  { id: 26, name: '中国海洋大学', province: '山东省', city: '青岛', batch: '二期', hasDetail: false },
  { id: 27, name: '华中科技大学', province: '湖北省', city: '武汉', batch: '二期', hasDetail: false },
  { id: 28, name: '湖南大学', province: '湖南省', city: '长沙', batch: '二期', hasDetail: false },
  { id: 29, name: '中南大学', province: '湖南省', city: '长沙', batch: '二期', hasDetail: false },
  { id: 30, name: '华南理工大学', province: '广东省', city: '广州', batch: '二期', hasDetail: false },
  { id: 31, name: '四川大学', province: '四川省', city: '成都', batch: '二期', hasDetail: false },
  { id: 32, name: '重庆大学', province: '重庆市', city: '重庆', batch: '二期', hasDetail: false },
  { id: 33, name: '电子科技大学', province: '四川省', city: '成都', batch: '二期', hasDetail: false },
  { id: 34, name: '西北工业大学', province: '陕西省', city: '西安', batch: '二期', hasDetail: false },
  { id: 35, name: '兰州大学', province: '甘肃省', city: '兰州', batch: '二期', hasDetail: false },
  { id: 36, name: '国防科技大学', province: '湖南省', city: '长沙', batch: '二期', hasDetail: false },
  { id: 37, name: '西北农林科技大学', province: '陕西省', city: '杨凌', batch: '二期', hasDetail: false },
  { id: 38, name: '华东理工大学', province: '上海市', city: '上海', batch: '二期', hasDetail: false }
];

// ========== 中国大学专业数据（按学科门类分组）==========
const majors = [
  {
    category: '哲学',
    majors: ['哲学', '逻辑学', '宗教学', '伦理学']
  },
  {
    category: '经济学',
    majors: [
      '经济学', '经济统计学', '国民经济管理', '资源与环境经济学',
      '商务经济学', '能源经济', '劳动经济学', '经济工程', '数字经济',
      '金融学', '金融工程', '保险学', '投资学', '金融数学',
      '信用管理', '经济与金融', '精算学', '互联网金融', '金融科技',
      '国际经济与贸易', '贸易经济', '国际经济发展合作'
    ]
  },
  {
    category: '法学',
    majors: [
      '法学', '知识产权', '监狱学', '信用风险管理与法律防控',
      '国际经贸规则', '司法警察学', '社区矫正', '纪检监察',
      '政治学与行政学', '国际政治', '外交学', '国际事务与国际关系',
      '政治学、经济学与哲学', '国际组织与全球治理',
      '社会学', '社会工作', '人类学', '女性学', '家政学', '老年学',
      '民族学',
      '马克思主义理论', '科学社会主义', '中国共产党历史', '思想政治教育',
      '治安学', '侦查学', '边防管理', '禁毒学', '警犬技术',
      '经济犯罪侦查', '边防指挥', '消防指挥', '警卫学',
      '公安情报学', '犯罪学', '公安管理学', '涉外警务',
      '国内安全保卫', '警务指挥与战术', '技术侦查学',
      '海警执法', '公安政治工作', '移民管理', '出入境管理',
      '反恐警务', '消防政治工作', '铁路警务'
    ]
  },
  {
    category: '教育学',
    majors: [
      '教育学', '科学教育', '人文教育', '教育技术学',
      '艺术教育', '学前教育', '小学教育', '特殊教育',
      '华文教育', '教育康复学', '卫生教育', '融合教育',
      '体育教育', '运动训练', '社会体育指导与管理',
      '武术与民族传统体育', '运动人体科学', '运动康复',
      '休闲体育', '体能训练', '冰雪运动',
      '电子竞技运动与管理', '智能体育工程', '体育旅游',
      '运动能力开发'
    ]
  },
  {
    category: '文学',
    majors: [
      '汉语言文学', '汉语言', '汉语国际教育', '中国少数民族语言文学',
      '古典文献学', '应用语言学', '秘书学', '中国语言与文化', '手语翻译',
      '英语', '俄语', '德语', '法语', '西班牙语', '阿拉伯语',
      '日语', '波斯语', '朝鲜语', '菲律宾语', '梵语巴利语',
      '印度尼西亚语', '印地语', '柬埔寨语', '老挝语', '缅甸语',
      '马来语', '蒙古语', '僧伽罗语', '泰语', '乌尔都语',
      '希伯来语', '越南语', '豪萨语', '斯瓦希里语', '阿尔巴尼亚语',
      '保加利亚语', '波兰语', '捷克语', '斯洛伐克语', '罗马尼亚语',
      '葡萄牙语', '瑞典语', '塞尔维亚语', '土耳其语', '希腊语',
      '匈牙利语', '意大利语', '泰米尔语', '普什图语', '世界语',
      '孟加拉语', '尼泊尔语', '克罗地亚语', '荷兰语', '芬兰语',
      '乌克兰语', '挪威语', '丹麦语', '冰岛语', '爱尔兰语',
      '拉脱维亚语', '立陶宛语', '斯洛文尼亚语', '爱沙尼亚语',
      '马耳他语', '哈萨克语', '乌兹别克语', '祖鲁语', '拉丁语',
      '翻译', '商务英语', '语言学', '外国语言与外国历史'
    ]
  },
  {
    category: '历史学',
    majors: [
      '历史学', '世界史', '考古学', '文物与博物馆学',
      '文物保护技术', '外国语言与外国历史', '文化遗产', '古文字学'
    ]
  },
  {
    category: '理学',
    majors: [
      '数学与应用数学', '信息与计算科学', '数理基础科学', '数据计算及应用',
      '物理学', '应用物理学', '核物理', '声学', '系统科学与工程',
      '化学', '应用化学', '化学生物学', '分子科学与工程', '能源化学',
      '天文学',
      '地理科学', '自然地理与资源环境', '人文地理与城乡规划', '地理信息科学',
      '大气科学', '应用气象学', '气象技术与工程',
      '海洋科学', '海洋技术', '海洋资源与环境', '军事海洋学',
      '地球物理学', '空间科学与技术', '防灾减灾科学与工程',
      '地质学', '地球化学', '地球信息科学与技术', '古生物学',
      '生物科学', '生物技术', '生物信息学', '生态学',
      '整合科学', '神经科学',
      '心理学', '应用心理学',
      '统计学', '应用统计学',
      '行星科学'
    ]
  },
  {
    category: '工学',
    majors: [
      '理论与应用力学', '工程力学',
      '机械工程', '机械设计制造及其自动化', '材料成型及控制工程',
      '机械电子工程', '工业设计', '过程装备与控制工程',
      '车辆工程', '汽车服务工程', '机械工艺技术',
      '微机电系统工程', '机电技术教育', '汽车维修工程教育',
      '智能制造工程', '智能车辆工程', '仿生科学与工程', '新能源汽车工程',
      '测控技术与仪器', '精密仪器', '智能感知工程',
      '材料科学与工程', '材料物理', '材料化学', '冶金工程',
      '金属材料工程', '无机非金属材料工程', '高分子材料与工程',
      '复合材料与工程', '粉体材料科学与工程', '宝石及材料工艺学',
      '焊接技术与工程', '功能材料', '纳米材料与技术', '新能源材料与器件',
      '材料设计科学与工程', '复合材料成型工程', '智能材料与结构',
      '能源与动力工程', '能源与环境系统工程', '新能源科学与工程',
      '储能科学与工程',
      '电气工程及其自动化', '智能电网信息工程', '光源与照明',
      '电气工程与智能控制', '电机电器智能化', '电缆工程',
      '电子信息工程', '电子科学与技术', '通信工程',
      '微电子科学与工程', '光电信息科学与工程', '信息工程',
      '广播电视工程', '水声工程', '电子封装技术',
      '集成电路设计与集成系统', '医学信息工程',
      '电磁场与无线技术', '电波传播与天线', '电子信息科学与技术',
      '电信工程及管理', '应用电子技术教育', '人工智能',
      '海洋信息工程', '柔性电子学',
      '自动化', '轨道交通信号与控制', '机器人工程',
      '邮政工程', '核电技术与控制工程', '智能装备与系统',
      '工业智能', '智能工程与创意设计',
      '计算机科学与技术', '软件工程', '网络工程', '信息安全',
      '物联网工程', '数字媒体技术', '智能科学与技术',
      '空间信息与数字技术', '电子与计算机工程', '数据科学与大数据技术',
      '网络空间安全', '新媒体技术', '电影制作',
      '保密技术', '服务科学与工程', '虚拟现实技术', '区块链工程',
      '土木工程', '建筑环境与能源应用工程', '给排水科学与工程',
      '建筑电气与智能化', '城市地下空间工程', '道路桥梁与渡河工程',
      '铁道工程', '智能建造', '土木、水利与海洋工程',
      '土木、水利与交通工程',
      '水利水电工程', '水文与水资源工程', '港口航道与海岸工程',
      '水务工程', '水利科学与工程',
      '测绘工程', '遥感科学与技术', '导航工程', '地理国情监测',
      '地理空间信息工程',
      '化学工程与工艺', '制药工程', '资源循环科学与工程',
      '能源化学工程', '化学工程与工业生物工程', '化工安全工程',
      '涂料工程', '精细化工',
      '地质工程', '勘查技术与工程', '资源勘查工程',
      '地下水科学与工程', '旅游地学与规划工程',
      '采矿工程', '石油工程', '矿物加工工程', '油气储运工程',
      '矿物资源工程', '海洋油气工程', '智能采矿工程',
      '纺织工程', '服装设计与工程', '非织造材料与工程',
      '服装设计与工艺教育', '丝绸设计与工程',
      '轻化工程', '包装工程', '印刷工程', '香料香精技术与工程',
      '化妆品技术与工程', '生物质能源与材料',
      '交通运输', '交通工程', '航海技术', '轮机工程', '飞行技术',
      '交通设备与控制工程', '救助与打捞工程', '船舶电子电气工程',
      '轨道交通电气与控制', '邮轮工程与管理', '智慧交通',
      '船舶与海洋工程', '海洋工程与技术', '海洋资源开发技术',
      '海洋机器人',
      '航空航天工程', '飞行器设计与工程', '飞行器制造工程',
      '飞行器动力工程', '飞行器环境与生命保障工程',
      '飞行器质量与可靠性', '飞行器适航技术', '飞行器控制与信息工程',
      '无人驾驶航空器系统工程',
      '武器系统与工程', '武器发射工程', '探测制导与控制技术',
      '弹药工程与爆炸技术', '特种能源技术与工程', '装甲车辆工程',
      '信息对抗技术', '智能无人系统技术',
      '核工程与核技术', '辐射防护与核安全', '工程物理', '核化工与核燃料工程',
      '农业工程', '农业机械化及其自动化', '农业电气化',
      '农业建筑环境与能源工程', '农业水利工程',
      '土地整治工程', '农业智能装备工程',
      '森林工程', '木材科学与工程', '林产化工', '家具设计与工程',
      '环境科学与工程', '环境工程', '环境科学', '环境生态工程',
      '环保设备工程', '资源环境科学', '水质科学与技术',
      '生物医学工程', '假肢矫形工程', '临床工程技术', '康复工程',
      '食品科学与工程', '食品质量与安全', '粮食工程', '乳品工程',
      '酿酒工程', '葡萄与葡萄酒工程', '食品营养与检验教育',
      '烹饪与营养教育', '食品安全与检测',
      '建筑学', '城乡规划', '风景园林', '历史建筑保护工程',
      '人居环境科学与技术', '城市设计', '智慧建筑与建造',
      '安全工程', '应急技术与管理', '职业卫生工程',
      '生物工程', '生物制药', '合成生物学',
      '消防工程', '交通管理工程', '安全防范工程',
      '公安视听技术', '抢险救援指挥与技术', '火灾勘查',
      '网络安全与执法', '核生化消防', '数据警务技术',
      '刑事科学技术', '食品药品环境犯罪侦查技术'
    ]
  },
  {
    category: '农学',
    majors: [
      '农学', '园艺', '植物保护', '植物科学与技术',
      '种子科学与工程', '设施农业科学与工程', '茶学', '烟草',
      '应用生物科学', '农艺教育', '园艺教育', '智慧农业',
      '菌物科学与工程', '农药化肥',
      '农业资源与环境', '野生动物与自然保护区管理',
      '水土保持与荒漠化防治', '生物质科学与工程',
      '动物科学', '蚕学', '蜂学', '经济动物学', '马业科学',
      '动物医学', '动物药学', '动植物检疫', '实验动物学',
      '中兽医学', '兽医公共卫生',
      '林学', '园林', '森林保护', '经济林',
      '水产养殖学', '海洋渔业科学与技术', '水族科学与技术', '水生动物医学',
      '草业科学', '草坪科学与工程'
    ]
  },
  {
    category: '医学',
    majors: [
      '基础医学', '生物医学', '生物医学科学',
      '临床医学', '麻醉学', '医学影像学', '眼视光医学',
      '精神医学', '放射医学', '儿科学',
      '口腔医学', '口腔医学技术',
      '预防医学', '食品卫生与营养学', '妇幼保健医学',
      '卫生监督', '全球健康学', '运动与公共健康',
      '中医学', '针灸推拿学', '藏医学', '蒙医学', '维医学',
      '壮医学', '哈医学', '傣医学', '回医学',
      '中医康复学', '中医养生学', '中医儿科学', '中医骨伤科学',
      '中西医临床医学',
      '药学', '药物制剂', '临床药学', '药事管理',
      '药物分析', '药物化学', '海洋药学', '化妆品科学与技术',
      '中药学', '中药资源与开发', '藏药学', '蒙药学',
      '中药制药', '中草药栽培与鉴定',
      '法医学',
      '医学检验技术', '医学实验技术', '医学影像技术',
      '眼视光学', '康复治疗学', '口腔医学技术',
      '卫生检验与检疫', '听力与言语康复学',
      '康复物理治疗', '康复作业治疗',
      '智能医学工程', '生物医药数据科学', '智能影像工程',
      '护理学', '助产学'
    ]
  },
  {
    category: '管理学',
    majors: [
      '管理科学', '信息管理与信息系统', '工程管理',
      '房地产开发与管理', '工程造价', '保密管理',
      '邮政管理', '大数据管理与应用', '工程审计', '计算金融',
      '工商管理', '市场营销', '会计学', '财务管理',
      '国际商务', '人力资源管理', '审计学', '资产评估',
      '物业管理', '文化产业管理', '劳动关系',
      '体育经济与管理', '财务会计教育', '市场营销教育',
      '零售业管理', '创业管理',
      '农林经济管理', '农村区域发展',
      '公共事业管理', '行政管理', '劳动与社会保障',
      '土地资源管理', '城市管理', '海关管理', '交通管理',
      '海事管理', '公共关系学', '健康服务与管理',
      '海警后勤管理', '医疗产品管理', '养老服务管理',
      '海关检验检疫安全', '海外安全管理', '自然资源登记与管理',
      '图书馆学', '档案学', '信息资源管理',
      '物流管理', '物流工程', '采购管理', '供应链管理',
      '工业工程', '标准化工程', '质量管理工程',
      '电子商务', '电子商务及法律', '跨境电子商务',
      '旅游管理', '酒店管理', '会展经济与管理', '旅游管理与服务教育'
    ]
  },
  {
    category: '艺术学',
    majors: [
      '艺术史论', '艺术管理', '非物质文化遗产保护',
      '音乐表演', '音乐学', '作曲与作曲技术理论',
      '舞蹈表演', '舞蹈学', '舞蹈编导', '舞蹈教育',
      '航空服务艺术与管理', '流行音乐', '音乐治疗',
      '表演', '戏剧学', '电影学', '戏剧影视文学',
      '广播电视编导', '戏剧影视导演', '戏剧影视美术设计',
      '录音艺术', '播音与主持艺术', '动画',
      '影视摄影与制作', '影视技术', '戏剧教育',
      '美术学', '绘画', '雕塑', '摄影', '书法学',
      '中国画', '实验艺术', '跨媒体艺术',
      '文物保护与修复', '漫画', '纤维艺术',
      '艺术设计学', '视觉传达设计', '环境设计', '产品设计',
      '服装与服饰设计', '公共艺术', '工艺美术',
      '数字媒体艺术', '艺术与科技', '陶瓷艺术设计',
      '新媒体艺术', '包装设计', '珠宝首饰设计与工艺'
    ]
  }
];
