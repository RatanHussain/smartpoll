/** @format */

import React, { useState } from 'react';
import Participent from './Participent';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import MainFrom from '../forms/MainFrom';

export default function MainFile({ selectedPoll, deletePoll, getOpinion,updatePoll }) {
	let [modal, setModal] = useState(false);
	let openModal = () => {
		setModal(!modal);
	};
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
			<>
				<hr className='my-5' />
				<Participent
					selectedPoll={selectedPoll}
					deletePoll={deletePoll}
					openModal={openModal}
					getOpinion={getOpinion}
				/>
				<Modal isOpen={modal} toggle={openModal}>
					<ModalHeader toggle={openModal}>Update Poll</ModalHeader>
					<ModalBody>
						<MainFrom
							buttonValue={'Update Poll'}
							poll={selectedPoll}
							updatePoll={updatePoll}
							isUpdate={true}
						/>
					</ModalBody>
				</Modal>
			</>
		);
	}
}
