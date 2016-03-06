var Constants = require('./Constants');
var GameManager = {
  entireData : {},
  currentData: {},
  answerProgress: [[],[],[],[]],

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
  },

  clearAnswerProgress: function(index) {
    this.answerProgress[index] = []
  },

  resetAnswerProgress: function() {
    this.answerProgress = [[],[],[],[]]
  },
};

module.exports = GameManager;