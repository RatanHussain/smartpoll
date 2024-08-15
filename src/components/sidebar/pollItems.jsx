/** @format */

import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function PollItems({ newPoll, seletPoll }) {
	if (newPoll.lenght === 0) {
		return <p>There is not poll</p>;
	}
	return (
		<ListGroup>
			{newPoll.map((poll) => (
				<ListGroupItem
					key={poll.id}
					onClick={() => seletPoll(poll.id)}
					style={{ cursor: 'pointer' }}>
					{poll.title.length > 30
						? poll.title.substr(0, 30) + '...'
						: poll.title}
				</ListGroupItem>
			))}
		</ListGroup>
	);
}
