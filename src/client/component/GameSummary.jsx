var React = require('react');
var QuestionSummary = require('./QuestionSummary.jsx');

var GameSummary = React.createClass({
  render : function() {
	    return (
	    	<div>
	    		<div>Game Over</div>
	      		<QuestionSummary questionList={this.props.questionList} />
	      	</div>
	    );
  	}
});

module.exports = GameSummary;
