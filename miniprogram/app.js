App({
  globalData: {
    userInfo: null,
    studyProgress: {
      gojuon: {
        hiragana: 0,
        katakana: 0
      },
      vocabulary: {
        N5: 0,
        N4: 0,
        N3: 0,
        N2: 0,
        N1: 0
      },
      grammar: {
        basic: 0,
        intermediate: 0,
        advanced: 0
      }
    }
  },

  onLaunch: function() {
    // 初始化云开发环境
    if (wx.cloud) {
      wx.cloud.init({
        env: 'your-env-id',
        traceUser: true
      }).catch(err => {
        console.error('云开发初始化失败：', err);
      });
    }

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo;
              // 触发获取用户信息成功的回调
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res);
              }
            },
            fail: err => {
              console.error('获取用户信息失败：', err);
            }
          });
        }
      },
      fail: err => {
        console.error('获取用户设置失败：', err);
      }
    });

    // 从本地存储加载学习进度
    try {
      const progress = wx.getStorageSync('studyProgress');
      if (progress) {
        this.globalData.studyProgress = progress;
      }
    } catch (err) {
      console.error('加载学习进度失败：', err);
    }
  },

  // 保存学习进度
  saveProgress: function() {
    try {
      wx.setStorageSync('studyProgress', this.globalData.studyProgress);
    } catch (err) {
      console.error('保存学习进度失败：', err);
    }
  },

  // 更新学习进度
  updateProgress: function(type, subtype, value) {
    try {
      if (this.globalData.studyProgress[type] && 
          this.globalData.studyProgress[type][subtype] !== undefined) {
        this.globalData.studyProgress[type][subtype] = value;
        this.saveProgress();
        return true;
      }
      return false;
    } catch (err) {
      console.error('更新学习进度失败：', err);
      return false;
    }
  }
});
