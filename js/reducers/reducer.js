var actions = require('../actions');

var initialState = {
    guesses: [],
    feedback: 'Make a guess!',
    correctAnswer: Math.round(Math.random() * 100),
    showInfoModal: false,
    fewestGuesses: null
};

var reducer = function(state, action) {
    state = state || initialState;
    if (action.type === actions.NEW_GAME) {
        state = Object.assign({
        }, initialState, {
            fewestGuesses: state.fewestGuesses,
            correctAnswer: action.correctAnswer
        });
        console.log('Secret Number:', state.correctAnswer);
        return state;
    }
    else if (action.type === actions.MAKE_GUESS) {
        var guess = parseInt(action.guess, 10);
        if (isNaN(guess)) {
            state = Object.assign({}, state, {
                feedback: 'Please enter a valid number between 1 and 100'
            });

            return state;
        }

        var difference = Math.abs(guess - state.correctAnswer);

        var feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You Win!';
        }

        state = Object.assign({}, state, {
            feedback: feedback,
            guesses: state.guesses.concat(action.guess)
        });

        return state;
    }
    else if (action.type === actions.TOGGLE_INFO_MODAL) {
         state = Object.assign({}, state, {
             showInfoModal: !state.showInfoModal
        });
        return state;
    }
    else if (action.type === actions.FETCH_FEWEST_GUESSES_SUCCESS) {
         state = Object.assign({}, state, {
             fewestGuesses: action.guesses
        });
        return state;
    }
    else if (action.type === actions.FETCH_FEWEST_GUESSES_ERROR) {
        // TODO: Handle properly
        console.error(action.error);
        return state;
    }


    return state;
};

module.exports = reducer;
