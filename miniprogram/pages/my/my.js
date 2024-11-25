const app = getApp();

Page({
  data: {
    userInfo: null,
    studyDays: 0,
    wordsLearned: 0,
    grammarLearned: 0,
    progress: {
      gojuon: 0,
      n5: 0,
      grammar: 0
    }
  },

  onLoad: function() {
    this.setData({
      userInfo: app.globalData.userInfo
    });
    this.loadStudyStats();
    this.loadProgress();
  },

  onShow: function() {
    // 每次显示页面时更新进度
    this.loadProgress();
  },

  onGetUserInfo: function(e) {
    if (e.detail.userInfo) {
      app.globalData.userInfo = e.detail.userInfo;
      this.setData({
        userInfo: e.detail.userInfo
      });
    }
  },

  loadStudyStats: function() {
    // TODO: 从本地存储或服务器加载学习统计数据
    this.setData({
      studyDays: 7,
      wordsLearned: 50,
      grammarLearned: 10
    });
  },

  loadProgress: function() {
    const progress = app.globalData.studyProgress;
    this.setData({
      progress: {
        gojuon: Math.floor((progress.gojuon.hiragana + progress.gojuon.katakana) / 2),
        n5: progress.vocabulary.N5,
        grammar: progress.grammar.basic
      }
    });
  },

  navigateToFavorites: function() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },

  navigateToHistory: function() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },

  navigateToSettings: function() {
    wx.showToast({
      title: '功能开发中',
      icon: 'none'
    });
  },

  onTapAvatar: function() {
    if (!this.data.userInfo) {
      wx.showToast({
        title: '请先登录',
        icon: 'none'
      });
    }
  }
});
