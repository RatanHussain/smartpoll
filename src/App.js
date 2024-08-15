/** @format */

import { Col, Container, Row } from 'reactstrap';
import MainFile from './components/main-content/MainFile';
import Sidebar from './components/sidebar/Sidebar';
import { useEffect, useState } from 'react';
import poll from './components/Data/Polldata';

function App() {
	let [polls, setPolls] = useState([
		{
			id: '4514534584',
			title: 'What is Yourfghjgfjgjh Favorite Programming Language',
			description:
				'There are lot of popular programming languages available. Among them what is your favorite?',
			options: [
				{ id: 45644531578, value: 'sdfgaogramming', vote: 0 },
				{ id: 453354578, value: 'HFdgamming', vote: 0 },
				{ id: 454371238, value: 'sdfnaSDFmming', vote: 0 },
				{ id: 453544528787, value: 'DSGramming', vote: 0 },
			],
			created: new Date(),
			totalVote: 0,
			opinions: [],
		},
		{
			id: '4545545184',
			title: 'Do You knoghjfghfgyhjjjjjjjjgjw HTML?',
			description: 'There are lot of  them what is your favorite?',
			options: [
				{ id: 4545478755423, value: 'sxdfgdfgming', vote: 0 },
				{ id: 454545456645, value: 'sdfsdfgogramming', vote: 0 },
				{ id: 37344554526648, value: 'dfgsdPrsdgsdogramming', vote: 0 },
			],
			created: new Date(),
			totalVote: 0,
			opinions: [],
		},
		{
			id: '445456184',
			title: 'There are lot ofgjhghjghjgf popular programminge',
			description:
				'There are lot of popular programming languages available. Among them what is your favorite?',
			options: [
				{ id: 454344455556, value: 'dfgamming', vote: 0 },
				{ id: 4564544553654, value: 'dsfgamming', vote: 0 },
				{ id: 45454564585, value: 'sdfgogramming', vote: 0 },
				{ id: 453445234567648, value: 'sdhadramming', vote: 0 },
			],
			created: new Date(),
			totalVote: 0,
			opinions: [],
		},
	]);
	let [selectedPoll, setSelectedPoll] = useState({});
	let [buttonValue, setButtonValue] = useState('Create Poll');

	// console.log(selectedPoll)
	// useEffect(() => {
	// 	setPolls(poll);
	// }, []);
	// console.log(polls)


	let  GanateId = () =>{
		let id = Math.floor(new Date());
		return id;
	}

	let addpoll = (poll) => {
		poll.id = GanateId();
		poll.created = new Date();
		poll.totalVote = 0;
		poll.opinions = [];

		setPolls([poll, ...polls]);
	};




	let updatePoll = (updatedPoll) => {
		let oldPolls = [...polls];
		let poll = oldPolls.find((po) => po.id == updatedPoll.id);

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
	let [searchTurm, setSearchTurm] = useState('');
	let handleSearch = (values) => {

		setSearchTurm(values)

	};

	let performSearch = () => {
		let newpoll =  polls.filter(poll => poll.title.toLowerCase().includes(searchTurm.toLowerCase()))
		return newpoll
	}

	let submitData = (addPoll) => {
		setPolls([...polls, addPoll]);
	};

	let getOpinion = (response) => {
		let oldData = polls;
		let poll = oldData.find((p) => p.id === response.pollId);
		let option = poll.options.find((op) => op.id == response.selectedOption);

		poll.totalVote++;
		option.vote = option.vote + 1;

		let opinion = {
			name: response.name,
			option: response.selectedOption,
			id: GanateId(),
		};

		poll.opinions.push(opinion);
		setPolls(oldData);
	};

	let newPoll = performSearch()




	return (
		<Container className='my-5'>
			<Row>
				<Col sm={6} md={6}>
					<Sidebar
						searchTurm={searchTurm}
						handleSearch={handleSearch}
						newPoll={newPoll}
						seletPoll={seletPoll}
						submitData={submitData}
						buttonValue={buttonValue}
					/>
				</Col>
				<Col sm={6} md={6}>
					<MainFile
						selectedPoll={selectedPoll}
						deletePoll={deletePoll}
						getOpinion={getOpinion}
						updatePoll={updatePoll}
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
