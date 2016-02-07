var React = require('react');
var Constants = require('../Constants');
var QuestionComponent = require('./QuestionComponent.jsx');
var BrandingComponent = require('./BrandingComponent.jsx');
var MenuComponent = require('./MenuComponent.jsx');
var CategoryPicker = require('./CategoryPicker.jsx');

var AppComponent = React.createClass({
    getInitialState : function() {
        return {};
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
                <BrandingComponent />
                { content }
            </div>

        );
    }
});

module.exports = AppComponent;
