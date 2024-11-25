const app = getApp();

Page({
  data: {
    todayDate: '',
    todayStats: {
      newWords: 0,
      reviewWords: 0,
      grammar: 0
    },
    hasStudyPlan: true,
    todayPlans: [
      {
        id: 1,
        name: '五十音复习',
        description: '复习平假名和片假名',
        completed: false
      },
      {
        id: 2,
        name: 'N5单词',
        description: '学习10个新单词',
        completed: false
      },
      {
        id: 3,
        name: 'N5语法',
        description: '学习基础语法',
        completed: false
      }
    ]
  },

  onLoad: function() {
    this.setTodayDate();
    this.loadTodayStats();
  },

  setTodayDate: function() {
    const date = new Date();
    const dateStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    this.setData({
      todayDate: dateStr
    });
  },

  loadTodayStats: function() {
    // 从全局数据或本地存储加载今日学习统计
    const stats = {
      newWords: 10,
      reviewWords: 20,
      grammar: 5
    };
    this.setData({
      todayStats: stats
    });
  },

  startLearning: function() {
    const uncompletedPlan = this.data.todayPlans.find(plan => !plan.completed);
    if (uncompletedPlan) {
      this.navigateToStudyPage(uncompletedPlan);
    } else {
      wx.showToast({
        title: '今日学习计划已完成',
        icon: 'success'
      });
    }
  },

  navigateToStudyPage: function(plan) {
    let url = '';
    switch (plan.id) {
      case 1:
        url = '/pages/gojuon/gojuon';
        break;
      case 2:
        url = '/pages/vocabulary/vocabulary';
        break;
      case 3:
        url = '/pages/grammar/grammar';
        break;
    }
    if (url) {
      wx.navigateTo({
        url: url
      });
    }
  },

  viewAllPlans: function() {
    wx.showToast({
      title: '查看所有计划功能开发中',
      icon: 'none'
    });
  }
});
