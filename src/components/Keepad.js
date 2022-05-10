import React, { useEffect, useState } from 'react';

function Keepad({ usedKeys }) {
	const [letters, setLetters] = useState(null);

	useEffect(() => {
		fetch('https://wordsbackend.herokuapp.com/letters')
			.then((res) => res.json())
			.then((data) => setLetters(data));
	}, []);

	return (
		<div className='keypad'>
			{letters &&
				letters.map((letter) => {
					const color = usedKeys[letter.key];
					return (
						<div key={letter.id} className={color}>
							{letter.key}
						</div>
					);
				})}
		</div>
	);
}

export default Keepad;
