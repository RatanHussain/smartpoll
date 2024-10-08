/** @format */

// import { Button } from 'bootstrap/dist/js/bootstrap.bundle'
import React, { useState } from 'react';
import { Button, Input, Modal, ModalBody, ModalHeader } from 'reactstrap';
import PollItems from './pollItems.jsx';
import MainFrom from '../forms/MainFrom.jsx';

export default function Sidebar({
	newPoll,
	seletPoll,
	handleSearch,
	searchTurm,
	submitData,
	buttonValue,
}) {
	let [modalIs, setModalIs] = useState(false);
	let toggleModel = () => {
		setModalIs(!modalIs);
	};
	return (
		<div className='p-5'>
			<div className='d-flex mb-5'>
				<Input
					type='search'
					placeholder='Search'
					value={searchTurm}
					onChange={(e) => handleSearch(e.target.value)}
				/>
				<Button color='success' onClick={toggleModel} className='ms-5'>
					new
				</Button>
			</div>
			<h3>List of Polls</h3>
			<hr />
			<PollItems newPoll={newPoll} seletPoll={seletPoll} />
			<Modal isOpen={modalIs} toggle={toggleModel}>
				<ModalHeader toggle={toggleModel}>
					<h4>Create A Poll</h4>
				</ModalHeader>
				<ModalBody>
					<MainFrom submitData={submitData} buttonValue={buttonValue} />
				</ModalBody>
			</Modal>
		</div>
	);
}
