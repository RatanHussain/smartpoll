/** @format */

import { Col, Container, Row } from 'reactstrap';
import MainFile from './components/main-content/MainFile';
import Sidebar from './components/sidebar/Sidebar';
import { useEffect, useState } from 'react';
import poll from './components/Data/Polldata';
import nextId from 'react-id-generator';
import PollItems from './components/sidebar/pollItems';

function App() {
	let [polls, setPolls] = useState([]);
	let [selectedPoll, setSelectedPoll] = useState({});
	let [searchTurm, setSearchTurm] = useState('');

	useEffect(() => {
		setPolls(poll);
	}, []);

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
    let oldPolls = [...polls]
    let newPoll = oldPolls.filter(p => p.id !== deletedPoll.id)
    setPolls(newPoll)
    setSelectedPoll('')
  }

  let seletPoll = (seletingPoll) => {
    let seletedPoll = polls.find(p => p.id === seletingPoll.id)
    setSelectedPoll(seletedPoll)

  }
  let handleSearch = () => {


  }

	return (
		<Container className='my-5'>
			<Row>
				<Col md={4}>
					<Sidebar handleSearch={handleSearch} />
				</Col>
				<Col md={4}>
          <MainFile />
          {/* <PollItems/> */}
				</Col>
			</Row>
		</Container>
	);
}

export default App;
