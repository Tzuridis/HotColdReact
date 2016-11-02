var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions');

var InfoModal = function(props) {
    var hide = function(event) {
        event.preventDefault();
        props.dispatch(actions.toggleInfoModal());
    };

    return (
        <div className="overlay" id="modal">
            <div className="content">
                <h3>What do I do?</h3>
                <div>
                    <p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
                    <ul>
                        <li>1. The game picks a <strong>random number</strong> between 1 to 100 that is hidden.</li>
                        <li>2. A player needs to <strong>guess</strong> until they can find the hidden number.</li>
                        <li>3. The player will <strong>get feedback</strong> on how close ("hot") or far ("cold") their guess is.</li>
                    </ul>
                    <p>So, Are you ready?</p>
                    <a className="close" href="#" onClick={hide}>Got It!</a>
                </div>
            </div>
        </div>
    );
};

var Container = connect()(InfoModal);

module.exports = Container;
