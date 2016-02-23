var React = require('react');
var Achievements = require('../Achievements')

var AchievementItem = React.createClass({
  getInitialState : function() {
    return {};
  },
  render : function() {
    return (
      <li>
        <h4>
          { Achievements.getTitle(this.props.achievement_id) }
        </h4>
        <div>
          { Achievements.getDescription(this.props.achievement_id) }
        </div>
      </li>
    );
  }
});

module.exports = AchievementItem;
