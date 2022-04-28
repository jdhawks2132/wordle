import React, { useEffect } from 'react';
import useWordle from '../hooks/useWordle';

function Wordle({ solution }) {
	const { currentGuess, handleKeyup } = useWordle(solution);

	useEffect(() => {
		window.addEventListener('keyup', handleKeyup);
		return () => window.removeEventListener('keyup', handleKeyup);
	}, [handleKeyup]);

	return (
		<div>
			<p>current solution - {solution}</p>
			<p>current guess - {currentGuess}</p>{' '}
		</div>
	);
}

export default Wordle;
