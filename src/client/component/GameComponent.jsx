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
        progressMap[currentIndex] = isSuccess;
        this.setState({
            currentIndex: currentIndex + 1,
            progressMap: progressMap
        });
    },
    render : function() {
        return (
            <div className="gameplay_page">
                <QuestionComponent 
                    question={this.state.questionList[this.state.currentIndex]}
                    answerClbk={this.handleAnswer} 
                />
            </div>
        );
    }
});

module.exports = GameComponent;