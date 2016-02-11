var React = require('react');

var AnswerChoiceComponent = require('./AnswerChoiceComponent.jsx');

var QuestionComponent = React.createClass({
    getInitialState : function() {
        return {};
    },
    render : function() {
        return (
            <div className="question_page">
                <div className="question">
                    What is the color of the sky?
                </div>

                <ul id="answer_choices">
                    <li id="answer_choice_A">
                        <AnswerChoiceComponent answer="Green"/>
                    </li>
                    <li id="answer_choice_B">
                         <AnswerChoiceComponent answer="Blue"/>
                    </li>
                    <li id="answer_choice_C">
                        <AnswerChoiceComponent answer="Purple" />
                    </li>
                    <li id="answer_choice_D">
                        <AnswerChoiceComponent answer="Orange" />
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = QuestionComponent;