var React = require('react');
var Myo = require('myo');

var MyoStatusComponent = React.createClass({

	getInitialState : function() {
		return {
			connected: Myo.connected,
			synced: Myo.synced,
		}
	},

	componentWillMount : function() {
		var self = this;
		Myo.on('arm_synced', function() {
			self.setState({
				synced: true,
			});
		});

		Myo.on('arm_unsynced', function() {
			self.setState({
				synced: false,
			});
		});

		Myo.on('connected', function() {
			self.setState({
				connected: true,
			});
		});

		Myo.on('disconnected', function() {
			self.setState({
				connected: false,
			});
		});
	},

    render : function() {
        return (
            <div>
                <div>{this.state.connected ? "connected" : "not connected"}</div>
                <div>{this.state.synced ? "synced" : "not synced"}</div>
            </div>

        );
    }
});

module.exports = MyoStatusComponent;