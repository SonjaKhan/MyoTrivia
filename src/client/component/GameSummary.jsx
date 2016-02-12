var React = require('react');
var QuestionSummary = require('./QuestionSummary.jsx');


var GameSummary = React.createClass({
  getInitialState : function() {
    return {};
  },
  render : function() {
    return (
      <QuestionSummary />
    );
  }
});

module.exports = GameSummary;
