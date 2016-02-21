var React = require('react');
var QuestionComponent = require('./QuestionComponent.jsx');
var HeaderComponent = require('./HeaderComponent.jsx');

var t;
const STATUS_TIME = 2000;

var GameComponent = React.createClass({
    getInitialState : function() {
        return {
            questionList: this.props.questions,
            currentIndex: 0,
            progressMap: {},
            showStatus: false,
        };
    },

    handleAnswer : function(isSuccess) {
        Myo.off('pose');
        this.state.progressMap[this.state.currentIndex] = isSuccess;
        this.setState({
            showStatus: true,
        });
        var self = this;
        t = setTimeout(function() {
            Myo.off('pose');
            self.setState({
                currentIndex: self.state.currentIndex + 1,
                progressMap: self.state.progressMap,
                showStatus: false,
            }); 
        }, STATUS_TIME);
    },

    render : function() {
        if (this.state.showStatus) {
            if (this.state.progressMap[this.state.currentIndex]) {
                return <div>CORRECT!</div>;
            } else {
                return <div>WRONG!</div>;
            }
        } else if (this.state.currentIndex == this.state.questionList.length) {
            return <div>GAME OVER</div>;
        } else {
            return (
                <div className="gameplay_page">
                    <QuestionComponent 
                        question={this.state.questionList[this.state.currentIndex]}
                        answerCallback={this.handleAnswer} 
                    />
                </div>
            );
        }
    }
});

module.exports = GameComponent;