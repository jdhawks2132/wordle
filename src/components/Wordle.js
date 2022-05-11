import React, { useEffect, useState } from 'react';
import useWordle from '../hooks/useWordle';
import Grid from './Grid';
import Keepad from './Keepad';
import Modal from './Modal';

function Wordle({ solution }) {
	const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		window.addEventListener('keyup', handleKeyup);

		if (isCorrect) {
			setTimeout(() => setShowModal(true), 1000);
			window.removeEventListener('keyup', handleKeyup);
		}

		if (turn > 5) {
			setTimeout(() => setShowModal(true), 1000);
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
			{showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
		</div>
	);
}

export default Wordle;
