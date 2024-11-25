const hiraganaData = require('../../data/hiragana.js');
const katakanaData = require('../../data/katakana.js');

Page({
  data: {
    currentTab: 'hiragana',
    currentData: [],
    showStroke: false,
    audioContext: null
  },

  onLoad: function() {
    this.setData({
      currentData: hiraganaData
    });
    this.audioContext = wx.createInnerAudioContext();
  },

  switchTab: function(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      currentTab: tab,
      currentData: tab === 'hiragana' ? hiraganaData : katakanaData,
      showStroke: false
    });
  },

  playSound: function(e) {
    const sound = e.currentTarget.dataset.sound;
    if (sound) {
      this.audioContext.src = sound;
      this.audioContext.play();
    }
  },

  showStrokeOrder: function(e) {
    const char = e.currentTarget.dataset.char;
    if (char) {
      this.setData({
        showStroke: true
      });
      // TODO: 实现笔顺动画
    }
  },

  onUnload: function() {
    if (this.audioContext) {
      this.audioContext.destroy();
    }
  }
});
