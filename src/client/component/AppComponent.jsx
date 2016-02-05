var React = require('react');
var QuestionComponent = require('./QuestionComponent.jsx');
var BrandingComponent = require('./BrandingComponent.jsx');
var MenuComponent = require('./MenuComponent.jsx');

var AppComponent = React.createClass({
    getInitialState : function() {
        return {};
    },

    render : function() {
        return (
            <div id="app">
                <BrandingComponent />
                <MenuComponent />
            </div>

        );
    }
});

module.exports = AppComponent;
