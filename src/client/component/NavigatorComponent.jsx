var React = require('react');
var PageManager = require('../PageManager');
var Constants = require('../Constants');

var Navigator = React.createClass({
    getInitialState : function() {
        return {};
    },

    navigate: function(e) {
        PageManager.changePage(Number(e.target.className))
    },

    render : function() {
        return (
            <div className={this.props.page} onClick={this.navigate}>
                Home
            </div>
        );
    }
});

module.exports = Navigator;
