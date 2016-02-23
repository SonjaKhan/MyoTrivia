var React = require('react');
var QuestionComponent = require('./QuestionComponent.jsx');
var HeaderComponent = require('./HeaderComponent.jsx');
var ResultsComponent = require('./ResultsComponent.jsx');

var t;
const STATUS_TIME = 2000;

var GameComponent = React.createClass({
    getInitialState : function() {
        return {
            questionList: this.props.questions,
            currentIndex: 0,
            progressMap: {},
            value: null,
        };
    },

    handleAnswer : function(userIndex) {
        Myo.off('pose');
        correctIndex = this.state.questionList[this.state.currentIndex].correctIndex;
        console.log("correct index", correctIndex);
        console.log("user index", userIndex);
        isSuccess = correctIndex == userIndex;
        this.state.progressMap[this.state.currentIndex] = isSuccess;
        this.setState({
            value: userIndex,
        });
        var self = this;
        t = setTimeout(function() {
            Myo.off('pose');
            self.setState({
                currentIndex: self.state.currentIndex + 1,
                progressMap: self.state.progressMap,
                value: null,
            });
        }, STATUS_TIME);
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
                        answerCallback={this.handleAnswer}
                        value={this.state.value}
                    />
                </div>
            );
        }
    }
});

module.exports = GameComponent;