var React = require('react');
var connect = require('react-redux').connect;

var TopNav = require('./top-nav');
var InfoModal= require('./info-modal');

var Header = function(props) {
    var infoModal;
    if (props.showInfoModal) {
        infoModal = <InfoModal />;
    }

    return (
        <header>
            <TopNav />
            {infoModal}
            <h1>HOT OR COLD GAME</h1>
        </header>
    );
};

var mapStateToProps = function(state) {
    return {
        showInfoModal: state.showInfoModal
    };
};
var Container = connect(mapStateToProps)(Header);

module.exports = Container;
