var React = require('react');

var MenuComponent = React.createClass({
    getInitialState : function() {
        return {};
    },

    render : function() {
        return (
          <ul>
            <li id="menu_start_game">
              <a href="#">
                Play Game
              </a>
            </li>
            <li id="menu_achievements">
              <a href="#">
                Achievements
              </a>
            </li>
            <li id="menu_settings">
              <a href="#">
                Settings
              </a>
            </li>
            <li id="menu_help">
              <a href="#">
                Help
              </a>
            </li>
          </ul>
        );
    }
});

module.exports = MenuComponent;
