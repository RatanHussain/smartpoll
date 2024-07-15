/** @format */

import { Col, Container, Row } from 'reactstrap';
import MainFile from './components/main-content/MainFile';
import Sidebar from './components/sidebar/Sidebar';
import { useEffect, useState } from 'react';
import poll from './components/Data/Polldata';
import nextId from 'react-id-generator';

function App() {
	let [polls, setPolls] = useState([
		{
			id: '45184',
			title: 'What is Your Favorite Programming Language',
			description:
				'There are lot of popular programming languages available. Among them what is your favorite?',
			options: [
				{ id: 45678, value: 'C Programming', vote: 0 },
				{ id: 45378, value: 'C Programming', vote: 0 },
				{ id: 45378, value: 'C Programming', vote: 0 },
				{ id: 45387, value: 'C Programming', vote: 0 },
			],
			created: new Date(),
			totalVote: 0,
			opinions: [],
		},
		{
			id: '4545184',
			title: 'Do You know HTML?',
			description: 'There are lot of  them what is your favorite?',
			options: [
				{ id: 45423, value: 'C Programming', vote: 0 },
				{ id: 45645, value: 'C Programming', vote: 0 },
				{ id: 37834, value: 'C Programming', vote: 0 },
				{ id: 48648, value: 'C Programming', vote: 0 },
			],
			created: new Date(),
			totalVote: 0,
			opinions: [],
		},
		{
			id: '4456184',
			title: 'There are lot of popular programminge',
			description:
				'There are lot of popular programming languages available. Among them what is your favorite?',
			options: [
				{ id: 45456, value: 'C Programming', vote: 0 },
				{ id: 45654, value: 'C Programming', vote: 0 },
				{ id: 45685, value: 'C Programming', vote: 0 },
				{ id: 45648, value: 'C Programming', vote: 0 },
			],
			created: new Date(),
			totalVote: 0,
			opinions: [],
		},
	]);
	let [selectedPoll, setSelectedPoll] = useState({});
	let [searchTurm, setSearchTurm] = useState('');

	// useEffect(() => {
	// 	setPolls(poll);
	// }, []);
	// console.log(polls)

	let addpoll = (poll) => {
		poll.id = nextId();
		poll.created = new Date();
		poll.totalVote = 0;
		poll.opinions = [];

		setPolls([poll, ...polls]);
	};

	let updatePoll = (updatedPoll) => {
		let oldPolls = [...polls];
		let poll = oldPolls.find((po) => po.id === updatedPoll.id);
		poll.title = updatedPoll.title;
		poll.description = updatedPoll.description;
		poll.options = updatedPoll.options;

		setPolls(oldPolls);
	};

	let deletePoll = (deletedPoll) => {
		let oldPolls = [...polls];
		let newPoll = oldPolls.filter((p) => p.id !== deletedPoll.id);
		setPolls(newPoll);
		setSelectedPoll('');
	};

	let seletPoll = (seletingPoll) => {
		let seletedPoll = polls.find((p) => p.id === seletingPoll.id);
		setSelectedPoll(seletedPoll);
	};
	let handleSearch = () => {};

	return (
		<Container className='my-5'>
			<Row>
				<Col md={4}>
					<Sidebar
						handleSearch={handleSearch}
						polls={polls}
						seletPoll={seletPoll}
					/>
				</Col>
				<Col md={4}>
					<MainFile />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
