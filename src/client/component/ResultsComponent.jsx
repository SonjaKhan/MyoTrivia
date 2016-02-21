var React = require('react');
var Myo = require('myo');

var ResultsComponent = React.createClass({

    render : function() {
        var self = this;
        var results = [];
        for (var key in this.props.progressMap) {
            results.push(
                <div key={key}>
                    {this.props.progressMap[key] ? "Correct" : "Wrong"}
                </div>
            );
        }
        return (
            <div className="results_page">
                <h1>RESULTS</h1>
                {results}
            </div>
        );
    }
});

module.exports = ResultsComponent;