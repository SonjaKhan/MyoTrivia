var React = require('react');

var QuestionComponent = React.createClass({
    getInitialState : function() {
        return {};
    },

    render : function() {
        return (
            <div className="question">
                What is the color of the sky?
            </div>
        );
    }
});

module.exports = QuestionComponent;