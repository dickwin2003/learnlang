const grammarData = require('../../data/grammar.js');

Page({
  data: {
    currentCategory: '基础句式',
    grammarList: [],
    showDetail: false,
    currentGrammar: null,
    searchText: ''
  },

  onLoad: function() {
    this.loadGrammarList('基础句式');
  },

  switchCategory: function(e) {
    const category = e.currentTarget.dataset.category;
    this.setData({
      currentCategory: category,
      searchText: ''
    });
    this.loadGrammarList(category);
  },

  loadGrammarList: function(category) {
    // 从数据文件加载对应分类的语法点
    const grammarList = grammarData[category] || [];
    this.setData({
      grammarList
    });
  },

  onSearch: function(e) {
    const searchText = e.detail.value.toLowerCase();
    this.setData({
      searchText
    });
    
    if (searchText) {
      // 在所有分类中搜索
      const allGrammar = Object.values(grammarData).flat();
      const filtered = allGrammar.filter(item => 
        item.pattern.toLowerCase().includes(searchText) ||
        item.meaning.toLowerCase().includes(searchText)
      );
      this.setData({
        grammarList: filtered
      });
    } else {
      this.loadGrammarList(this.data.currentCategory);
    }
  },

  showDetail: function(e) {
    const grammar = e.currentTarget.dataset.grammar;
    this.setData({
      showDetail: true,
      currentGrammar: grammar
    });
  },

  closeDetail: function() {
    this.setData({
      showDetail: false,
      currentGrammar: null
    });
  },

  showRelated: function(e) {
    const pattern = e.currentTarget.dataset.pattern;
    // 在所有语法点中查找相关语法
    const allGrammar = Object.values(grammarData).flat();
    const grammar = allGrammar.find(item => item.pattern === pattern);
    if (grammar) {
      this.setData({
        currentGrammar: grammar
      });
    }
  }
});
