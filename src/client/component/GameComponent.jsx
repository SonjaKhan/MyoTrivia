var React = require('react');
var QuestionComponent = require('./QuestionComponent.jsx');
var HeaderComponent = require('./HeaderComponent.jsx');
var ResultsComponent = require('./ResultsComponent.jsx');
var GameManager = require('../GameManager');


var t;
const STATUS_TIME = 3000;

var GameComponent = React.createClass({
    getInitialState : function() {
        return {
            questionList: GameManager.getQuestionData(),
            currentIndex: 0,
            progressMap: {},
            value: null,  // user's answer index to current question
        };
    },

    componentWillMount: function() {
        this.listenForPose(this.state.value);
    },

    componentWillUpdate: function(nextprops, nextstate) {
        this.listenForPose(nextstate.value);
    },

    listenForPose : function(val) {
        // we don't want to listen for a new pose if we are showing the user 
        // feedback about their answer, or it's the last question
        if (
            val != null || 
            this.state.currentIndex == this.state.questionList.length - 1) {
            return;
        }
        var self = this;
        Myo.on("pose", function(pose_name) {
            console.log("pose", pose_name);
            Myo.off('pose');
            var userIndex = 0;
            var question = self.state.questionList[self.state.currentIndex];
            for (var i = 0; i < question.answers.length; i++) {
                if (pose_name == question.answers[i].gesture) {
                    userIndex = i;
                    break;
                }
            }
            self.handleAnswer(userIndex);
        });
    },

    handleAnswer : function(userIndex) {
        correctIndex = this.state.questionList[this.state.currentIndex].correctIndex;
        isSuccess = correctIndex == userIndex;
        console.log("correct index", correctIndex);
        console.log("user index", userIndex);
        var self = this;
        t = setTimeout(function() {
            self.state.progressMap[self.state.currentIndex] = isSuccess;
            self.setState({
                currentIndex: self.state.currentIndex + 1,
                progressMap: self.state.progressMap,
                value: null,
            });
        }, STATUS_TIME);
        this.setState({
            value: userIndex,
        });
    },

    render : function() {
        if (this.state.currentIndex == this.state.questionList.length) {
            return (
                <div>
                    <div>GAME OVER</div>
                    <ResultsComponent progressMap={this.state.progressMap} />
                </div>
            );
        } else {
            return (
                <div className="gameplay_page">
                    <QuestionComponent 
                        question={this.state.questionList[this.state.currentIndex]}
                        value={this.state.value}
                    />
                </div>
            );
        }
    }
});

module.exports = GameComponent;
