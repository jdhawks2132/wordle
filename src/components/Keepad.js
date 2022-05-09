import React, { useEffect, useState } from 'react';

function Keepad() {
	const [letters, setLetters] = useState(null);

	useEffect(() => {
		fetch('http://localhost:3001/letters')
			.then((res) => res.json())
			.then((data) => setLetters(data));
	}, []);

	return (
		<div className='keypad'>
			{letters &&
				letters.map((letter) => {
					return <div key={letter.id}>{letter.key}</div>;
				})}
		</div>
	);
}

export default Keepad;
