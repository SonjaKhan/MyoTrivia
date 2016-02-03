var React = require('react');

var AppComponent = React.createClass({
    getInitialState : function() {
        return {};
    },

    render : function() {
        return (
            <div id="app">
                Welcome to Myo Trivia
            </div>
        );
	}
});

module.exports = AppComponent;