import React, { useEffect } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keepad from './Keepad';

function Wordle({ solution }) {
	const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution);

	useEffect(() => {
		window.addEventListener('keyup', handleKeyup);

		if (isCorrect) {
			console.log('Congratulations! You guessed the word!');
			window.removeEventListener('keyup', handleKeyup);
		}

		if (turn > 5) {
			console.log('You lost!');
			window.removeEventListener('keyup', handleKeyup);
		}
		return () => window.removeEventListener('keyup', handleKeyup);
	}, [handleKeyup, isCorrect, turn]);

	return (
		<div>
			{/* <p>current solution - {solution}</p> */}
			{/* <p>current guess - {currentGuess}</p> */}
			<Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
			<Keepad usedKeys={usedKeys} />
		</div>
	);
}

export default Wordle;
