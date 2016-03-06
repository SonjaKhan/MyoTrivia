var React = require('react');
var Constants = require('./Constants');

var GameComponent = require('./component/GameComponent.jsx');
var GameMultiComponent = require('./component/GameMultiComponent.jsx');

var InteractionManager = {
  interactionMethod: Constants.INTERACTION_METHOD.MULTI,

  getDataUrl: function() {
    switch(this.interactionMethod) {
      case Constants.INTERACTION_METHOD.MULTI:
        return 'data/multi_gesture_data.json';
      default:
        return 'data/data.json';
    }
  },

  getInteractionMethod: function() {
    return this.interactionMethod;
  },

  setInteractionMethod: function(interaction) {
    this.interactionMethod = interaction;
  },

  getGameComponent: function() {
    switch(this.interactionMethod) {
      case Constants.INTERACTION_METHOD.MULTI:
        return <GameMultiComponent />;
      default:
        return <GameComponent />;
    }
  }
};

module.exports = InteractionManager;