var React = require('react');

var MenuComponent = React.createClass({
    getInitialState : function() {
        return {};
    },

    handleStartGame : function() {
        this.props.handleStartGame();
    },

    render : function() {
        return (
            <ul id="main_menu">
                <li id="menu_start_game" onClick={this.handleStartGame}>
                    Play Game
                </li>
                <li id="menu_achievements">
                    Achievements
                </li>
                <li id="menu_settings">
                    Settings
                </li>
                <li id="menu_help">
                    Help
                </li>
            </ul>
        );
    }
});

module.exports = MenuComponent;
