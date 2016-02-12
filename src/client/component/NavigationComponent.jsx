var React = require('react');

var NavigationComponent = React.createClass({

	getInitialState : function() {
		return {}
	},

    test: function() {
        console.log("hi");
    },

    render : function() {
        return (
            <div className="navigation">
                <div className="home" onClick={this.props.navigateHome}>
                    Home
                </div>

                <div className="settings">
                    Settings
                </div>
            </div>

        );
    }
});

module.exports = NavigationComponent;