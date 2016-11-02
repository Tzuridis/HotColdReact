require('isomorphic-fetch');

var NEW_GAME = 'NEW_GAME';
var newGame = function() {
    return {
        type: NEW_GAME,
        correctAnswer: Math.round(Math.random() * 100),
    };
};

var MAKE_GUESS = 'MAKE_GUESS';
var makeGuess = function(guess) {
    return {
        type: MAKE_GUESS,
        guess: guess
    };
};

var TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
var toggleInfoModal = function() {
    return {
        type: TOGGLE_INFO_MODAL,
    };
};

var fetchFewestGuesses = function() {
    return function(dispatch) {
        var url = '/fewest-guesses';
        return fetch(url).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var guesses = data.guesses;
            return dispatch(
                fetchFewestGuessesSuccess(guesses)
            );
        })
        .catch(function(error) {
            return dispatch(
                fetchFewestGuessesError(error)
            );
        });
    }
};

var FETCH_FEWEST_GUESSES_SUCCESS = 'FETCH_FEWEST_GUESSES_SUCCESS';
var fetchFewestGuessesSuccess = function(guesses) {
    return {
        type: FETCH_FEWEST_GUESSES_SUCCESS,
        guesses: guesses
    };
};

var FETCH_FEWEST_GUESSES_ERROR = 'FETCH_FEWEST_GUESSES_ERROR';
var fetchFewestGuessesError = function(error) {
    return {
        type: FETCH_FEWEST_GUESSES_ERROR,
        error: error
    };
};

var saveFewestGuesses = function(guesses) {
    return function(dispatch) {
        var url = '/fewest-guesses';
        return fetch(url, {
            method: 'post',
            body: JSON.stringify({
                guesses: guesses
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
            return response;
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            return dispatch(
                saveFewestGuessesSuccess()
            );
        })
        .catch(function(error) {
            return dispatch(
                saveFewestGuessesError(error)
            );
        });
    }
};

var SAVE_FEWEST_GUESSES_SUCCESS = 'SAVE_FEWEST_GUESSES_SUCCESS';
var saveFewestGuessesSuccess = function() {
    return {
        type: SAVE_FEWEST_GUESSES_SUCCESS
    };
};

var SAVE_FEWEST_GUESSES_ERROR = 'SAVE_FEWEST_GUESSES_ERROR';
var saveFewestGuessesError = function(error) {
    return {
        type: SAVE_FEWEST_GUESSES_ERROR,
        error: error
    };
};

exports.NEW_GAME = NEW_GAME;
exports.newGame = newGame;
exports.MAKE_GUESS = MAKE_GUESS;
exports.makeGuess = makeGuess;
exports.TOGGLE_INFO_MODAL = TOGGLE_INFO_MODAL;
exports.toggleInfoModal = toggleInfoModal;
exports.fetchFewestGuesses = fetchFewestGuesses;
exports.FETCH_FEWEST_GUESSES_SUCCESS = FETCH_FEWEST_GUESSES_SUCCESS;
exports.fetchFewestGuessesSuccess = fetchFewestGuessesError;
exports.FETCH_FEWEST_GUESSES_ERROR = FETCH_FEWEST_GUESSES_ERROR;
exports.fetchFewestGuessesError = fetchFewestGuessesSuccess;
exports.saveFewestGuesses = saveFewestGuesses;
exports.SAVE_FEWEST_GUESSES_SUCCESS = SAVE_FEWEST_GUESSES_SUCCESS;
exports.saveFewestGuessesSuccess = saveFewestGuessesSuccess;
exports.SAVE_FEWEST_GUESSES_ERROR = SAVE_FEWEST_GUESSES_ERROR;
exports.saveFewestGuessesError = saveFewestGuessesError;

