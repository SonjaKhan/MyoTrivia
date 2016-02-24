var React = require('react');
var PageManager = require('../PageManager');
var Constants = require('../Constants');
var GameManager = require('../GameManager');

var CategoryPicker = React.createClass({
    getInitialState : function() {
        return {};
    },

    navigate: function(e) {
      GameManager.setCategory(e.target.className);
      GameManager.setTriviaDifficulty("easy");
      PageManager.changePage(Constants.PAGES.GAME_PLAY);
    },

    render : function() {
        return (
          <div>
            <h3>
              Select a category
            </h3>
            {/* We'll want to do some sort of hierarchical selection later, but these for now */}
            <ul>
              <li className="Sports" onClick={this.navigate}>
                  Sports
              </li>
              <li className="Sports" onClick={this.navigate}>
                  History: 1930s
              </li>
              <li className="Sports" onClick={this.navigate}>
                  Popstars of the 80s
              </li>
              <li className="Sports" onClick={this.navigate}>
                  European Countries
              </li>
            </ul>
          </div>
        );
    }
});

module.exports = CategoryPicker;
