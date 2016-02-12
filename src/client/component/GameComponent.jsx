var React = require('react');
var QuestionComponent = require('./QuestionComponent.jsx');

var GameComponent = React.createClass({
    getInitialState : function() {
        return {
            questionList: this.props.questions,
            currentIndex: 0,
            progressMap: {}
        };
    },

    handleAnswer : function(isSuccess) {
        Myo.off('pose');
        this.state.progressMap[this.state.currentIndex] = isSuccess;
        this.setState({
            currentIndex: this.state.currentIndex + 1,
            progressMap: this.state.progressMap
        });
    },

    render : function() {
        if (this.state.currentIndex == this.state.questionList.length) {
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