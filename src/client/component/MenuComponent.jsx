var React = require('react');
var MenuItem = require('./MenuItem.jsx');


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
                <MenuItem text="Play Game" item_id="start_game" onclick={this.handleStartGame} />
                <MenuItem text="Achievements" item_id="achievements" />
                <MenuItem text="Settings" item_id="settings" />
                <MenuItem text="Help" item_id="help" />
            </ul>
        );
    }
});

module.exports = MenuComponent;
