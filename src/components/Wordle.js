import React, { useEffect } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';

function Wordle({ solution }) {
	const { currentGuess, handleKeyup, guesses, isCorrect, turn } = useWordle(solution);

	useEffect(() => {
		window.addEventListener('keyup', handleKeyup);
		return () => window.removeEventListener('keyup', handleKeyup);
	}, [handleKeyup]);

	useEffect(() => {
		console.log(guesses, turn, isCorrect);
	}, [guesses, turn, isCorrect]);

	return (
		<div>
			<p>current solution - {solution}</p>
			<p>current guess - {currentGuess}</p>
			<Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
		</div>
	);
}

export default Wordle;
