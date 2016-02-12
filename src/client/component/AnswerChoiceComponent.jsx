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
                    <img src="assets/gesture_icons/png/solid_grey_RH_spread_fingers@2x.png" alt="open hand" height="100" width="100"/>
                </div>
            </div>
        );
    }
});

module.exports = AnswerChoiceComponent;