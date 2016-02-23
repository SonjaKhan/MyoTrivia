var React = require('react');
var Myo = require('myo');

var AnswerChoiceComponent = require('./AnswerChoiceComponent.jsx');

const abcd = "ABCD";

var QuestionComponent = React.createClass({

    componentWillMount: function() {
        var self = this;
        Myo.on("pose", function(pose_name) {
            var userIndex = 0;
            for (var i = 0; i < self.props.question.answers.length; i++) {
                if (pose_name == self.props.question.answers[i].gesture) {
                    userIndex = i;
                    break;
                }
            }
            self.props.answerCallback(userIndex);
        });
    },

    componentWillUpdate: function() {
        var self = this;
        Myo.on("pose", function(pose_name) {
            var userIndex = 0;
            for (var i = 0; i < self.props.question.answers.length; i++) {
                if (pose_name == self.props.question.answers[i].gesture) {
                    userIndex = i;
                    break;
                }
            }
            self.props.answerCallback(userIndex);
        });
    },

    getAnswers : function() {
        answers = []
        console.log("value", this.props.value);
        for (var i = 0; i < this.props.question.answers.length; i++) {
            answers.push(
                <li id={"answer_choice_" + abcd[i]} key={i}>
                    <AnswerChoiceComponent 
                        answer={this.props.question.answers[i].text} 
                        gesture={this.props.question.answers[i].gesture} 
                        correct={this.props.value == i && this.props.question.correctIndex == i}
                        incorrect={this.props.value == i && this.props.question.correctIndex != i}
                    />
                </li>
            );
        }
        return answers;
    },

    render : function() {
        // if (this.props.value != null) {
        //     return <div>{this.props.question.correctIndex}</div>
        // } else {
            return (
                <div className="question_page">
                    <div className="question">
                        {this.props.question.questionText}
                    </div>

                    <ul id="answer_choices">
                        {this.getAnswers()}
                    </ul>
                </div>
            );
        }
    // }
});

module.exports = QuestionComponent;