const wordData = require('../../data/words.js');

Page({
  data: {
    currentLevel: 'N5',
    wordList: [],
    isLearningMode: false,
    currentWord: null,
    isFlipped: false,
    learningIndex: 0
  },

  onLoad: function() {
    this.loadWordList('N5');
  },

  switchLevel: function(e) {
    const level = e.currentTarget.dataset.level;
    this.setData({
      currentLevel: level,
      isLearningMode: false
    });
    this.loadWordList(level);
  },

  loadWordList: function(level) {
    // 从数据文件加载对应级别的单词
    const words = wordData[level] || [];
    this.setData({
      wordList: words,
      learningIndex: 0
    });
  },

  showWordDetail: function(e) {
    const word = e.currentTarget.dataset.word;
    wx.showModal({
      title: word.kanji,
      content: `读音：${word.kana}\n含义：${word.meaning}\n例句：${word.example}`,
      showCancel: false
    });
  },

  toggleMode: function() {
    const isLearningMode = !this.data.isLearningMode;
    this.setData({
      isLearningMode,
      isFlipped: false
    });
    if (isLearningMode) {
      this.setCurrentWord();
    }
  },

  setCurrentWord: function() {
    const { wordList, learningIndex } = this.data;
    if (wordList.length > 0) {
      this.setData({
        currentWord: wordList[learningIndex],
        isFlipped: false
      });
    }
  },

  flipCard: function() {
    this.setData({
      isFlipped: !this.data.isFlipped
    });
  },

  nextWord: function() {
    let { learningIndex, wordList } = this.data;
    learningIndex = (learningIndex + 1) % wordList.length;
    this.setData({
      learningIndex,
      isFlipped: false
    });
    this.setCurrentWord();
  },

  addToFavorite: function() {
    const { currentWord } = this.data;
    // TODO: 实现收藏功能
    wx.showToast({
      title: '已收藏',
      icon: 'success'
    });
  }
});
