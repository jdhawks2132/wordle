import React from 'react';

function Modal({ isCorrect, turn, solution }) {
	return (
		<div className='modal'>
			{isCorrect && (
				<div>
					<h1>You Win!</h1>
					<p className='solution'>{solution}</p>
					<p>
						You found the solution in {turn} {(turn = 1 ? 'guess' : 'guesses')} 🤩
					</p>
					<p>Refresh for a new game.</p>
				</div>
			)}

			{!isCorrect && (
				<div>
					<h1>Out of Turns!</h1>
					<p className='solution'>{solution}</p>
					<p>You didn't find the solution in 5 guesses. 😭</p>
					<p>Refresh for a new game.</p>
				</div>
			)}
		</div>
	);
}

export default Modal;
