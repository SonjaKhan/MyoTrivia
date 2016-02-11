var React = require('react');

var AnswerChoiceComponent = React.createClass({
    getInitialState : function() {
        return {};
    },
    toggleGif: function(e) {
        if (e.target.className == "gesture_answer") {
            e.target.firstChild.style.visibility = "visible";
        } else {
            e.target.style.visibility = "hidden";
        }
    },
    render : function() {
        return (
            <div className="answerChoice">
                <div className="answer_text">
                    {this.props.answer}
                </div>
                <div className="gesture_answer" onClick={this.toggleGif}>
                    <img src="gesture_gifs/open_hand.gif" alt="open hand" height="125" width="280"/>
                </div>
            </div>
        );
    }
});

module.exports = AnswerChoiceComponent;