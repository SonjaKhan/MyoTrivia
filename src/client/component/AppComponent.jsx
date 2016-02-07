var React = require('react');
var Myo = require('myo');

var Constants = require('../Constants');
var QuestionComponent = require('./QuestionComponent.jsx');
var BrandingComponent = require('./BrandingComponent.jsx');
var MenuComponent = require('./MenuComponent.jsx');
var CategoryPicker = require('./CategoryPicker.jsx');
var MyoStatusComponent = require('./MyoStatusComponent.jsx');

var AppComponent = React.createClass({
    getInitialState : function() {
        return {
            myo: null,
        };
    },

    componentWillMount : function() {
        var self = this;
        
        Myo.onError = function() {
            console.log("Myo Connect is not running");
        };
        
        Myo.on('connected', function() {
            console.log('connected', this);
            self.setState({
                myo: this,
            });
            self.forceUpdate();
        });

        Myo.on('disconnected', function() {
            self.forceUpdate();
        });

        Myo.connect("com.sonjakhan.myoTrivia");
    },

    render : function() {
        var page = Constants.PAGES.HOME;

        var content;
        switch(page) {
          case Constants.PAGES.HOME:
            content = <MenuComponent />;
            break;
          case Constants.PAGES.GAME_SETTINGS:
            content = <CategoryPicker />;
            break;
          case Constants.PAGES.GAME_PLAY:
            content = <QuestionComponent />;
            break;
          default:
            content = <div />;
        }

        return (
            <div id="app">
                <MyoStatusComponent myo={this.state.myo} />
                <BrandingComponent />
                { content }
            </div>

        );
    }
});

module.exports = AppComponent;
