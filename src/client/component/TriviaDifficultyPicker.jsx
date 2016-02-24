var React = require('react');
var PageManager = require('../PageManager');
var Constants = require('../Constants');
var GameManager = require('../GameManager');

var TriviaDifficultyPicker = React.createClass({
    getInitialState : function() {
        return {};
    },

    navigate: function(e) {
      GameManager.setTriviaDifficulty(e.target.className);
      PageManager.changePage(Constants.PAGES.GAME_PLAY);
    },

    render : function() {
        return (
          <div>
            <h3>
              Select a difficulty for trivia questions
            </h3>
            {/* We'll want to do some sort of hierarchical selection later, but these for now */}
            <ul>
              <li className="easy" onClick={this.navigate}>
                  Easy
              </li>
              <li className="medium" onClick={this.navigate}>
                  Medium
              </li>
              <li className="difficult" onClick={this.navigate}>
                  Difficult
              </li>
            </ul>
          </div>
        );
    }
});

module.exports = TriviaDifficultyPicker;
