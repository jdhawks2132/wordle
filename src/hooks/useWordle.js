import { useState } from 'react';

const useWordle = (solution) => {
	const [turn, setTurn] = useState(0);
	const [currentGuess, setCurrentGuess] = useState('');
	const [guesses, setGuesses] = useState([]);
	const [history, setHistory] = useState([]);
	const [isCorrect, setIsCorrect] = useState(false);

	//format a guess into an array of letter objects
	// e.g. [{key: 'a', color: 'green'}, {}, {} ...]
	const formatGuess = () => {
		console.log('formatting the guess...', currentGuess);
	};

	//add a new guess to the guesses state
	// update the isCorrect state if the guess is correct
	// add one to the turn state
	const addNewGuess = () => {};

	// handle keyup event and track current guess
	// if user presses enter, add the new guess

	const handleKeyup = ({ key }) => {
		if (key === 'Backspace') {
			setCurrentGuess(currentGuess.slice(0, -1));
		}
		if (key === 'Enter') {
			// only add guess if turn is less than 5
			// do not allow duplicate guesses
			// guess is five characters long
			if (turn > 5) {
				console.log('You have used up all your turns');
				return;
			}

			if (history.includes(currentGuess)) {
				console.log('You have already guessed that word');
				return;
			}

			if (currentGuess.length !== 5) {
				console.log('Guess must be 5 characters long');
				return;
			}

			formatGuess();
		}
		if (/^[a-zA-Z]$/.test(key)) {
			if (currentGuess.length < 5) {
				setCurrentGuess((prev) => prev + key);
			}
		}
	};

	return { turn, currentGuess, guesses, isCorrect, handleKeyup };
};
export default useWordle;
