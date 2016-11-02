var React = require('react');
var connect = require('react-redux').connect;

var GuessForm = require('./guess-form');

var GuessSection = function(props) {
    return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm />
        </section>
    );
};

var mapStateToProps = function(state) {
    return {
        feedback: state.feedback
    };
};
var Container = connect(mapStateToProps)(GuessSection);

module.exports = Container;

