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
				{ id: 4564578, value: 'sdfgaogramming', vote: 0 },
				{ id: 453578, value: 'HFdgamming', vote: 0 },
				{ id: 454378, value: 'sdfnaSDFmming', vote: 0 },
				{ id: 45354787, value: 'DSGramming', vote: 0 },
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
				{ id: 4545423, value: 'sxdfgdfgming', vote: 0 },
				{ id: 45456645, value: 'sdfsdfgogramming', vote: 0 },
				{ id: 37345834, value: 'sdndogramming', vote: 0 },
				{ id: 483456648, value: 'dfgsdPrsdgsdogramming', vote: 0 },
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
				{ id: 45434556, value: 'dfgamming', vote: 0 },
				{ id: 45645654, value: 'dsfgamming', vote: 0 },
				{ id: 4545685, value: 'sdfgogramming', vote: 0 },
				{ id: 453467648, value: 'sdhadramming', vote: 0 },
			],
			created: new Date(),
			totalVote: 0,
			opinions: [],
		},
	]);
	let [selectedPoll, setSelectedPoll] = useState({});
	let [searchTurm, setSearchTurm] = useState('');
	let [buttonValue,setButtonValue] = useState('Create Poll')


	console.log(selectedPoll)
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
		let newPoll = oldPolls.filter((p) => p.id !== deletedPoll);
		setPolls(newPoll);
		setSelectedPoll('');
	};

	let seletPoll = (seletingPoll) => {
		let seletedPoll = polls.find((p) => p.id === seletingPoll);
		setSelectedPoll(seletedPoll);
	};
	let handleSearch = () => { };



	let  submitData = (formData)=> {
		setPolls([...polls,formData])

	}




	return (
		<Container className='my-5'>
			<Row>
				<Col md={4}>
					<Sidebar
						handleSearch={handleSearch}
						polls={polls}
						seletPoll={seletPoll}
						submitData={submitData}
						buttonValue={buttonValue}
					/>
				</Col>
				<Col md={4}>
					<MainFile selectedPoll={selectedPoll} deletePoll={deletePoll} />
				</Col>
			</Row>
		</Container>
	);
}

export default App;
