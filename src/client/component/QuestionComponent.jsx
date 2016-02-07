var React = require('react');

var AnswerChoiceComponent = require('./AnswerChoiceComponent.jsx');

var QuestionComponent = React.createClass({
    getInitialState : function() {
        return {};
    },

    render : function() {
        return (
            <div className="questionPage">
                <h3>What is the color of the sky?</h3>
                <AnswerChoiceComponent />
                <AnswerChoiceComponent />
                <AnswerChoiceComponent />
                <AnswerChoiceComponent />
            </div>
        );
    }
});

module.exports = QuestionComponent;