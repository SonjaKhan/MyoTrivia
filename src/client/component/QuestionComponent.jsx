var React = require('react');

var AnswerChoiceComponent = require('./AnswerChoiceComponent.jsx');

var QuestionComponent = React.createClass({
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
            <div className="question_page">
                <div className="question">
                    What is the color of the sky?
                </div>

                <ul id="answer_choices">
                    <li id="answer_choice_A">
                        <div className="answer_text">
                            Green
                        </div>
                        <div className="gesture_answer" onClick={this.toggleGif}>
                            <img src="gesture_gifs/open_hand.gif" alt="open hand" height="125" width="280"/>
                        </div>
                    </li>
                    <li id="answer_choice_B">
                        <div className="answer_text">
                            Blue
                        </div>
                        <div className="gesture_answer" onClick={this.toggleGif}>
                            <img src="gesture_gifs/open_hand.gif" alt="open hand" height="125" width="280"/>
                        </div>
                    </li>
                    <li id="answer_choice_C">
                        <div className="answer_text" onClick={this.toggleGif}>
                            Orange
                        </div>
                        <div className="gesture_answer" onClick={this.toggleGif}>
                            <img src="gesture_gifs/open_hand.gif" alt="open hand" height="125" width="280"/>
                        </div>
                    </li>
                    <li id="answer_choice_D">
                        <div className="answer_text">
                            Purple
                        </div>
                        <div className="gesture_answer" onClick={this.toggleGif}>
                            <img src="gesture_gifs/open_hand.gif" alt="open hand" height="125" width="280"/>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = QuestionComponent;