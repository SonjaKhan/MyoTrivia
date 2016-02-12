var React = require('react');
var QuestionSummaryItem = require('./QuestionSummaryItem.jsx');

var QuestionSummary = React.createClass({

  getInitialState : function() {
    return {};
  },
  render : function() {
    return (
      <div id="question_summary">
        <div id="question_summary_results">
          You got 5/10 correct!
        </div>
        <ol id="question_summary_list">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(function(idx) {
              return <QuestionSummaryItem item_num={idx} key={idx} />;
            })
          }
        </ol>
        <div id="question_summary_review">
          <a href="#">
            Review questions
          </a>
        </div>
      </div>
    );
  }
});

module.exports = QuestionSummary;
