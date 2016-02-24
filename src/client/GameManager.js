var Constants = require('./Constants');
var GameManager = {
  entireData : {},
  currentData: {},

  setOverallData : function(data) {
    this.entireData = data;
  },

  setCategory: function(category) {
    this.currentData = this.entireData[category];
  },

  setTriviaDifficulty: function(triviaDifficulty) {
    this.currentData = this.currentData[triviaDifficulty];
  },

  getQuestionData: function() {
    return this.currentData;
  }
};

module.exports = GameManager;