var React = require('react');

var QuestionSummaryItem = React.createClass({
  getInitialState : function() {
    return {};
  },
  render : function() {
    return (
      <li>
        <div className="question_summary_label">
          { this.props.item_num + 1 }
        </div>
        <div className="question_summary_result" dangerouslySetInnerHTML={{'__html': this.props.item_num % 2 == 0 ? '&#x2713;' : '&#x2717;'}} />
      </li>
    );
  }
});

module.exports = QuestionSummaryItem;
