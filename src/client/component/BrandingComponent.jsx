var React = require('react');

var BrandingComponent = React.createClass({
    getInitialState : function() {
        return {};
    },

    render : function() {
        return (
            <h1 id="game_title">
                Myo Trivia Game!
            </h1>
        );
    }
});

module.exports = BrandingComponent;
