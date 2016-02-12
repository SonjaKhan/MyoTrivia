var React = require('react');
var Myo = require('myo');

var Constants = require('../Constants');
var GameComponent = require('./GameComponent.jsx');
var BrandingComponent = require('./BrandingComponent.jsx');
var MenuComponent = require('./MenuComponent.jsx');
var CategoryPicker = require('./CategoryPicker.jsx');
var CheckConnectionComponent = require('./CheckConnectionComponent.jsx');
var MyoStatusComponent = require('./MyoStatusComponent.jsx');
var GameSummary = require('./GameSummary.jsx');

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
            Myo.setLockingPolicy('none');
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

    update : function() {
        this.forceUpdate();
    },

    startGame : function() {
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
                            { text: "Green", gesture: "fist" }, 
                            { text: "Blue", gesture: "fingers_spread" }, 
                            { text: "Purple", gesture: "wave_in" }, 
                            { text: "Orange", gesture: "wave_out" },
                        ],
                correctIndex: 1
            },
            {
                questionText: "What color is the ocean?",
                answers: [
                            { text: "Green", gesture: "fist" }, 
                            { text: "Blue", gesture: "fingers_spread" }, 
                            { text: "Purple", gesture: "wave_in" }, 
                            { text: "Orange", gesture: "wave_out" },
                        ],
                correctIndex: 1
            },
        ];

        var content;
        switch(this.state.page) {
            case Constants.PAGES.HOME:
                content = <MenuComponent handleStartGame={this.startGame} />;
                break;
            case Constants.PAGES.GAME_SETTINGS:
                content = <CategoryPicker />;
                break;
            case Constants.PAGES.GAME_PLAY:
                content = <GameComponent questions={questionData}/>;
                break;
            case Constants.PAGES.CHECK_CONNECTION:
                content = <CheckConnectionComponent startGame={this.startGame} />;
                break;
            case Constants.PAGES.GAME_SUMMARY:
                content = <GameSummary />;
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
