var React = require('react');

var GeneralSettings = React.createClass({

  getInitialState : function() {
    return {};
  },
  render : function() {
    return (
      <div>
        <h2>
          Settings
        </h2>
        <div>
          This page will later serve to allow you to customize your gesture difficulty, and similar settings not specific to a given game.
        </div>
      </div>
    );
  }
});

module.exports = GeneralSettings;
