/** @format */

import React, { useState } from 'react';
import Participent from './Participent';

export default function MainFile({ selectedPoll,deletePoll }) {
	if (!Object.keys(selectedPoll).length > 0) {
		return (
			<div>
				<h1>Welcome to my Application</h1>
				<h4>
					You can create as many poll as you want. Click the new button to
					create a new poll.To check details of a poll please select from the
					left sidebar. By selecting a poll you can check it's details,
					participate and check others opinion about this poll
				</h4>
			</div>
		);
	} else {
		return (
			<Participent selectedPoll={selectedPoll} deletePoll={deletePoll} />
		);
	}
}
