/** @format */

import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';

export default function Participent({
	getOpinion,
	selectedPoll,
	openModal,
	deletePoll,
}) {
	let [partiData, setPartiData] = useState({
		name: '',
		selectedOption: '',
		error: {},
	});



	// console.log(partiData.name);
	// console.log(partiData.selectedOption);
	// console.log(partiData.error);

	let handleChange = (e) => {
		let oldData = { ...partiData };
		let names = e.target.name;
		oldData[names] = e.target.value;
		setPartiData(oldData);
	};

	let handleOpChange = (e) => {
		let oldData = { ...partiData };
		let names = e.target.name;
		oldData[names] = e.target.id;
		setPartiData(oldData);
	};

	let handleSubmit = (e) => {
		e.preventDefault();
		let validation = validate();

		if (validation.isValid) {
			let opiData = {
				pollId: selectedPoll.id,
				name: partiData.name,
				selectedOption: partiData.selectedOption,
			};
			getOpinion(opiData);
			setPartiData({
				name: '',
				selectedOption: '',
				error: {},
			});
		} else {
			let oldData = partiData;
			oldData.error = validation.errors;
			setPartiData(oldData);
			toast.error(partiData.error.name || partiData.error.selectedOption);
		}
	};

	let validate = () => {
		let errors = {};
		if (!partiData.name) {
			errors.name = 'Please enter Your name.';
		} else if (partiData.name.length > 20) {
			errors.name = 'Your name is to long.';
		}

		if (!partiData.selectedOption) {
			errors.selectedOption = 'Please select a option first..';
		}
		return {
			errors,
			isValid: Object.keys(errors).length === 0,
		};
	};

	return (
		<Form onSubmit={handleSubmit}>
			<h2>{selectedPoll.title}</h2>
			<h5>{selectedPoll.description}</h5>
			<div className='d-flex'>
				<h4>Options</h4>
				<Button
					type='button'
					className='ms-auto bg-success'
					onClick={openModal}>
					Edit
				</Button>
				<Button
					type='button'
					className='ms-1 bg-danger'
					onClick={() => deletePoll(selectedPoll.id)}>
					Delete
				</Button>
			</div>
			{selectedPoll.options.map((opt) => (
				<FormGroup className='my-2' key={opt.id}>
					<Label className='d-flex'>
						<Input
							type='radio'
							value={opt.value}
							name='selectedOption'
							id={opt.id}
							onChange={(e) => handleOpChange(e)}
						/>
						<span className='ms-2'>{opt.value}</span>
						<span
							className='ms-auto bg-info text-white'
							style={{
								borderRadius: '5px',
								textAlign: 'center',
								padding: '5px 15px',
							}}>
							{opt.vote}
						</span>
						<span
							className='ms-2 bg-info text-white'
							style={{
								borderRadius: '5px',
								textAlign: 'center',
								padding: '5px 15px',
							}}>
							{selectedPoll.totalVote > 0
								? ((100 * opt.vote) / selectedPoll.totalVote).toFixed(1)
								: 0}
							%
						</span>
					</Label>
				</FormGroup>
			))}
			<ToastContainer />
			<div>
				<label htmlFor='name'>Your name here:</label>
				<Input
					type='text  '
					placeholder='Your name'
					name='name'
					onChange={handleChange}
					value={partiData.name}
				/>
			</div>
			<Button onClick={handleSubmit} className='form-control mt-3'>
				Submit
			</Button>
		</Form>
	);
}
