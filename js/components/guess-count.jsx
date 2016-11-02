var React = require('react');
var connect = require('react-redux').connect;

var GuessCount = function(props) {
    return (
        <p>
            Guess #<span id="count">{props.count}</span>!
        </p>
    );
}

var mapStateToProps = function(state) {
    return {
        count: state.guesses.length
    };
};
var Container = connect(mapStateToProps)(GuessCount);

module.exports = Container;
