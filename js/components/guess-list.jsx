var React = require('react');
var connect = require('react-redux').connect;

var GuessList = function(props) {
    var guesses = props.guesses.map(function(guess, index) {
        return (
            <li key={index}>
                {guess}
            </li>
        );
    });

    return (
        <ul id="guessList" className="guessBox clearfix">
            {guesses}
        </ul>
    );
};

var mapStateToProps = function(state) {
    return {
        guesses: state.guesses
    };
};
var Container = connect(mapStateToProps)(GuessList);

module.exports = Container;
