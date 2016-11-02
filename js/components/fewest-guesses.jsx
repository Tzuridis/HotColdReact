var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions');

var FewestGuesses = React.createClass({
    componentDidMount: function() {
        this.props.dispatch(
            actions.fetchFewestGuesses()
        );
    },
    render: function() {
        return (
            <p>
                Fewest Guesses: <span id="count">{this.props.fewestGuesses || 'N/A'}</span>
            </p>
        );
    }
});

var mapStateToProps = function(state) {
    return {
        fewestGuesses: state.fewestGuesses
    };
};
var Container = connect(mapStateToProps)(FewestGuesses);

module.exports = Container;

