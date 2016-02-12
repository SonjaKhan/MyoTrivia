var React = require('react');
var Myo = require('myo');

var AnswerChoiceComponent = require('./AnswerChoiceComponent.jsx');

var QuestionComponent = React.createClass({

    componentWillMount: function() {
        console.log("component will mount questions")
        var self = this;
        Myo.on("pose", function(pose_name) {
            console.log(pose_name);
            isCorrect = pose_name == self.props.question.answers[self.props.question.correctIndex].gesture;
            self.props.answerCallback(isCorrect);
        });
    },

    componentWillUpdate: function() {
        console.log("component will update questions")
        var self = this;
        Myo.on("pose", function(pose_name) {
            console.log(pose_name);
            isCorrect = pose_name == self.props.question.answers[self.props.question.correctIndex].gesture;
            self.props.answerCallback(isCorrect);
        });
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