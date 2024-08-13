/** @format */

import React, { useEffect, useState } from 'react';
import Forms from './form';
import nextId from 'react-id-generator';
import { toast, ToastContainer } from 'react-toastify';

export default function MainFrom({
	buttonValue,
	submitData,
	updatePoll,
	isUpdate,
	poll,
}) {
	let optionsArray = [
		{ id: nextId(), value: '', vote: 0 },
		{ id: nextId(), value: '', vote: 0 },
	];

	let [formData, setFromData] = useState({
		id: nextId(),
		title: '',
		description: '',
		options: optionsArray,
		opinions: [],
		error: {},
	});

	useEffect(() => {
		if (poll && Object.keys(poll).length > 0) {
			let oldData = { ...formData };
			oldData.title = poll.title;
			oldData.description = poll.description;
			oldData.options = poll.options;
			setFromData(oldData);
		}
	}, [isUpdate]);

	let handleChange = (e) => {
		let oldata = { ...formData };
		let name = e.target.name;
		let value = e.target.value;
		oldata[name] = value;
		setFromData(oldata);
	};

	let handleOptionChange = (e, index) => {
		let oldData = { ...formData };
		oldData.options[index].value = e.target.value;
		setFromData(oldData);
	};
	let createOption = () => {
		let oldData = { ...formData };
		if (oldData.options.length < 5) {
			oldData.options.push({
				id: nextId(),
				value: '',
				vote: 0,
			});
		} else {
			alert('You can create max 5 options');
		}

		setFromData(oldData);
	};

	let detetOption = (index) => {
		let oldData = { ...formData };
		if (oldData.options.length > 2) {
			oldData.options.splice(index, 1);
		} else {
			alert('You must have two options.');
		}

		setFromData(oldData);
	};

	let handleSubmit = (e) => {
		e.preventDefault();

		let validate = validation();

		if (validate.isValid) {
			let { title, description, options } = formData;
			let addPoll = { title, description, options };
			if (isUpdate) {
				addPoll.id = Number(poll.id);
				console.log(addPoll);
				submitData(addPoll);
			} else {
				submitData(formData);
				setFromData({
					title: '',
					description: '',
					options: optionsArray,
					error: {},
				});
			}
		} else {
			toast.error(
				validate.error.title ||
					validate.error.description ||
					validate.error.options
			);
		}
	};
	let validation = () => {
		let error = {};
		let optionError = [];

		if (!formData.title) {
			error.title = 'Please enter a title';
		} else if (formData.title.length < 10) {
			error.title = 'Your title is too short';
		} else if (formData.title.length > 100) {
			error.title = 'Your title is too long';
		}

		if (!formData.description) {
			error.description = 'Please provide description';
		} else if (formData.description.length < 20) {
			error.description = 'Your description is to short';
		} else if (formData.description.length > 500) {
			error.description = 'Your description is to long';
		}

		formData.options.forEach((opt, index) => {
			if (!opt.value) {
				optionError[index] = 'Please enter values of options';
			} else if (opt.value > 100) {
				optionError[index] = 'Options are to long';
			}
		});

		if (optionError.length > 0) {
			error.options = optionError;
		}

		return {
			error,
			isValid: Object.keys(error).length === 0,
		};
	};

	return (
		<>
			<ToastContainer />
			<Forms
				poll={formData}
				handleChange={handleChange}
				handleOptionChange={handleOptionChange}
				createOption={createOption}
				detetOption={detetOption}
				handleSubmit={handleSubmit}
				buttonValue={buttonValue}
			/>
		</>
	);
}
