var React = require('react');

var QuestionSummaryItem = React.createClass({

    getSummaryItem : function() {
        var summaryItemClass = "summary-item";
        if (this.props.question.correctIndex == this.props.question.userIndex) {
            summaryItemClass += " correct";
        } else {
            summaryItemClass += " incorrect";
        }
        return (
            <div className={summaryItemClass}>
                {parseInt(this.props.index) + 1}
            </div>
        );
    },

    render : function() {
        return (
            <div>
                <div className="question_summary_result">
                    {this.getSummaryItem()}
                </div>
            </div>
        );
    }
});

module.exports = QuestionSummaryItem;
