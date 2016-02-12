var React = require('react');
var Myo = require('myo');

var Constants = require('../Constants');
var GameComponent = require('./GameComponent.jsx');
var BrandingComponent = require('./BrandingComponent.jsx');
var MenuComponent = require('./MenuComponent.jsx');
var CategoryPicker = require('./CategoryPicker.jsx');
var CheckConnectionComponent = require('./CheckConnectionComponent.jsx');
var MyoStatusComponent = require('./MyoStatusComponent.jsx');

var AppComponent = React.createClass({
    getInitialState : function() {
        return {
            myo: null,
            page: Constants.PAGES.HOME,
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

    handleStartGame : function() {
        if (this.state.myo && this.state.myo.connected && this.state.myo.synced) {
            this.setState({
                page: Constants.PAGES.GAME_PLAY,
            });
        } else {
            this.setState({
                page: Constants.PAGES.CHECK_CONNECTION,
            });
        }
    },

    render : function() {
        var questionData = [
            {
                questionText: "What color is the sky?",
                answers: [
                            {text: "Green"}, 
                            {text: "Blue"}, 
                            {text: "Purple"}, 
                            {text: "Orange"}
                        ]
            }
        ];
        var content;
        switch(this.state.page) {
            case Constants.PAGES.HOME:
                content = <MenuComponent handleStartGame={this.handleStartGame} />;
                break;
            case Constants.PAGES.GAME_SETTINGS:
                content = <CategoryPicker />;
                break;
            case Constants.PAGES.GAME_PLAY:
                content = <GameComponent questions={questionData}/>;
                break;
            case Constants.PAGES.CHECK_CONNECTION:
                content = <CheckConnectionComponent />;
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
