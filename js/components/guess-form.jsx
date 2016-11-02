var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions');

var GuessForm = React.createClass({
    submitGuess: function(event) {
        event.preventDefault();
        var value = this.refs.input.value;
        this.props.dispatch(actions.makeGuess(this.refs.input.value));

        if (parseInt(value, 10) === this.props.correctAnswer &&
            (!this.props.fewestGuesses ||
             this.props.guessCount < this.props.fewestGuesses)) {
            var guesses = this.props.guessCount + 1;
            this.props.dispatch(
                actions.saveFewestGuesses(guesses)
            ).then(function() {
                return this.props.dispatch(
                    actions.fetchFewestGuesses()
                );
            }.bind(this));
        }
    },
    render: function() {
        return (
            <form onSubmit={this.submitGuess}>
                <input type="text" name="userGuess" id="userGuess" className="text" maxLength="3" autoComplete="off" placeholder="Enter your Guess" required ref="input" />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
});

var mapStateToProps = function(state) {
    return {
        guessCount: state.guesses.length,
        fewestGuesses: state.fewestGuesses,
        correctAnswer: state.correctAnswer
    };
};

var Container = connect(mapStateToProps)(GuessForm);

module.exports = Container;
