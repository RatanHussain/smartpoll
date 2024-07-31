/** @format */

import React, { useState } from 'react';
import Participent from './Participent';

export default function MainFile({ selectedPoll }) {
	if (selectedPoll) {
		return (
			<div>
				<h1>Main file is here</h1>
				<Participent selectedPoll={selectedPoll} />
			</div>
		);
	} else {
		return (
			<h4>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
				iste reiciendis distinctio ullam vel a id vitae recusandae nisi ab.
				Ratione natus libero et excepturi enim! Natus modi nihil similique?
			</h4>
		);
	}
}
