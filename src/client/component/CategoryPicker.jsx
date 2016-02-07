var React = require('react');

var CategoryPicker = React.createClass({
    getInitialState : function() {
        return {};
    },

    render : function() {
        return (
          <div>
            <h3>
              Select a category
            </h3>
            {/* We'll want to do some sort of hierarchical selection later, but these for now */}
            <ul>
              <li>
                <a href="#">
                  Basic Biology
                </a>
              </li>
              <li>
                <a href="#">
                  History: 1930s
                </a>
              </li>
              <li>
                <a href="#">
                  Popstars of the 80s
                </a>
              </li>
              <li>
                <a href="#">
                  European Countries
                </a>
              </li>
            </ul>
          </div>
        );
    }
});

module.exports = CategoryPicker;
