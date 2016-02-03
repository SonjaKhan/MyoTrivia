var React = require('react');
var QuestionComponent = require('./QuestionComponent.jsx');

var AppComponent = React.createClass({
    getInitialState : function() {
        return {};
    },

    render : function() {
        return (
            <div id="app">
                Welcome to Myo Trivia
                <QuestionComponent />
            </div>

        );
    }
});

module.exports = AppComponent;