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
                    {this.props.question.questionText}
                </div>

                <ul id="answer_choices">
                    <li id="answer_choice_A">
                        <AnswerChoiceComponent answer={this.props.question.answers[0].text}/>
                    </li>
                    <li id="answer_choice_B">
                         <AnswerChoiceComponent answer={this.props.question.answers[1].text}/>
                    </li>
                    <li id="answer_choice_C">
                        <AnswerChoiceComponent answer={this.props.question.answers[2].text} />
                    </li>
                    <li id="answer_choice_D">
                        <AnswerChoiceComponent answer={this.props.question.answers[3].text} />
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = QuestionComponent;