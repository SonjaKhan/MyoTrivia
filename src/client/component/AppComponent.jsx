var React = require('react');
var Myo = require('myo');

var Constants = require('../Constants');
var GameComponent = require('./GameComponent.jsx');
var MenuComponent = require('./MenuComponent.jsx');
var CategoryPicker = require('./CategoryPicker.jsx');
var CheckConnectionComponent = require('./CheckConnectionComponent.jsx');
var GameSummary = require('./GameSummary.jsx');
var HeaderComponent = require('./HeaderComponent.jsx');

var PageManager = require('../PageManager')

var AppComponent = React.createClass({
    getInitialState : function() {
        return {
            myo: null,
            page: Constants.PAGES.HOME
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
            PageManager.changePage(Constants.PAGES.GAME_PLAY);
        } else {
            PageManager.changePage(Constants.PAGES.MYO_CHECK);
        }
    },
    updatePage: function(new_page) {
        this.setState({
            page: new_page
        });
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

        // page manager subscribe callback
        PageManager.subscribe(this.updatePage)

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
            case Constants.PAGES.MYO_CHECK:
                content = <CheckConnectionComponent startGame={this.startGame} />;
                break;
            case Constants.PAGES.GAME_SUMMARY:
                content = <GameSummary />;
                break;
            default:
                content = <div />;
        }

        var nav = [Constants.PAGES.HOME, Constants.PAGES.GAME_SETTINGS];

        return (
            <div id="app">
                <HeaderComponent myo={this.state.myo} navigations={nav} />
                { content }
            </div>

        );
    }
});

module.exports = AppComponent;
