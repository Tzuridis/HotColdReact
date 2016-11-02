var React = require('react');
var connect = require('react-redux').connect;

var actions = require('../actions');

var TopNav = function(props) {
    var newGame = function(event) {
        event.preventDefault();
        props.dispatch(actions.newGame());
    };

    var toggleInfoModal = function(event) {
        event.preventDefault();
        props.dispatch(actions.toggleInfoModal());
    };

    return (
        <nav>
            <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={toggleInfoModal}>
                            Info
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={newGame}>
                            + New Game
                        </a>
                    </li>
                </ul>
        </nav>
    );
};

var Container = connect()(TopNav);

module.exports = Container;
