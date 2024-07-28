/** @format */

import React, { useState } from 'react';
import Participent from './Participent';

export default function MainFile() {
	let [poll, setdemo] = useState({
		id: '45184',
		title: 'What is Your Favorite Programming Language',
		description:
			'There are lot of popular programming languages available. Among them what is your favorite?',
		options: [
			{ id: 45678, value: 'C Programming', vote: 3 },
			{ id: 51, value: 'Java', vote: 7 },
			{ id: 453278, value: 'Python', vote: 2 },
			{ id: 4533387, value: 'Node.js', vote: 8 },
		],
		created: new Date(),
		totalVote: 20,
		opinions: [],
	});

	return (
		<div>
			<h1>Main file is here</h1>
			<Participent poll={poll} />
		</div>
	);
}
