var React = require('react');
var Constants = require('../Constants');
var PageManager = require('../PageManager');
var NavigatorComponent = require('./NavigatorComponent.jsx');

var NavigationComponent = React.createClass({

	getInitialState : function() {
		return {}
	},

    navigate: function(e) {
        PageManager.changePage(Number(e.target.className))
    },

    render : function() {
        var navigators = [];
        for(var i = 0; i < this.props.navigations.length; i++) {
            navigators.push(<NavigatorComponent key={i} page={this.props.navigations[i]} />);
        }
        return (
            <div className="navigation">
                {navigators}
            </div>

        );
    }
});

module.exports = NavigationComponent;