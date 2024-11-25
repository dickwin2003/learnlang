module.exports = {
  '基础句式': [
    {
      id: 1,
      pattern: 'は～です',
      level: 'N5',
      meaning: '表示"是"的判断句',
      usage: '用于表达某物/人是什么，属于最基本的句式。\n主语 + は + 名词 + です',
      examples: [
        {
          japanese: '私は学生です。',
          chinese: '我是学生。'
        },
        {
          japanese: 'これは本です。',
          chinese: '这是书。'
        }
      ],
      related: ['が～です', 'では～ありません']
    },
    {
      id: 2,
      pattern: '～ます',
      level: 'N5',
      meaning: '动词的礼貌形式',
      usage: '表示动作的礼貌形式，用于正式场合。\n动词词干 + ます',
      examples: [
        {
          japanese: '毎日学校に行きます。',
          chinese: '每天去学校。'
        },
        {
          japanese: '日本語を勉強します。',
          chinese: '学习日语。'
        }
      ],
      related: ['～ません', '～ました']
    }
  ],
  '助词用法': [
    {
      id: 101,
      pattern: '～は',
      level: 'N5',
      meaning: '表示主题',
      usage: '用于标记句子的主题，表示"关于～"。',
      examples: [
        {
          japanese: '私は日本人です。',
          chinese: '我是日本人。'
        },
        {
          japanese: '富士山は高いです。',
          chinese: '富士山很高。'
        }
      ],
      related: ['～が', '～も']
    }
  ],
  '时态变化': [
    {
      id: 201,
      pattern: '～ました',
      level: 'N5',
      meaning: '动词过去时礼貌形式',
      usage: '表示已经完成的动作，是动词的过去时礼貌形式。',
      examples: [
        {
          japanese: '昨日映画を見ました。',
          chinese: '昨天看了电影。'
        },
        {
          japanese: '先週日本に行きました。',
          chinese: '上周去了日本。'
        }
      ],
      related: ['～ます', '～ませんでした']
    }
  ],
  '敬语': [
    {
      id: 301,
      pattern: '～です/ます',
      level: 'N5',
      meaning: '基本礼貌语',
      usage: '最基本的礼貌语形式，用于正式场合。',
      examples: [
        {
          japanese: 'お名前は田中です。',
          chinese: '名字是田中。'
        },
        {
          japanese: '明日来ます。',
          chinese: '明天来。'
        }
      ],
      related: ['～でございます', '～させていただきます']
    }
  ]
};
