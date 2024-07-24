/** @format */

import React, { useState } from 'react';
import Forms from './form';

export default function MainFrom(submitData, buttonValue) {
	let optionsArray = [
		{ id: 45456, value: 'C Programming', vote: 0 },
		{ id: 45654, value: 'python Programming', vote: 0 },
	];

	let [formData, setFromData] = useState({
		title: '',
		description: '',
		options: optionsArray,
		error: {},
	});

	let handleChange = (e) => {
		let oldata = { ...formData };
		let name = e.target.name;
		let value = e.target.value;
		oldata[name] = value;
		setFromData(oldata);
	};

	let handleOptionChange = (e, index) => {
		let { options } = formData;
		options[index] = e.target.value;
		setFromData.options = options;
	};
	let createOption = () => {
		let { options } = formData;
		if (options.length < 5) {
			options.push({
				id: Math.floor(Math.random() * 50000),
				value: '',
				vote: 0,
			});
		} else {
			alert('You can create max 5 options');
		}

		setFromData.options = options;
	};
	let detetOption = (index) => {
		let { options } = formData;
		if (options.length > 2) {
			options.splice(index, 1);
		} else {
			alert('You must have two options.');
		}

		setFromData.options = options;
	};

	let handleSubmit = (e) => {
		e.preventDefault();
		let { error, isValid } = validation();

		if (isValid) {
			let { title, description, options } = formData;
			submitData({
				title,
				description,
				options,
			});
			e.target.reset();
			setFromData({
				title: '',
				description: '',
				options: optionsArray,
				error: {},
			});
		} else {
			setFromData({ error });
		}
	};

	let validation = () => {
		let error = {};
		let optionError = [];
		let { title, description, options } = formData;

		if (!title) {
			error.title = 'Please enter a title';
		} else if (title.length < 20) {
			error.title = 'Your title is too short';
		} else if (title.length > 100) {
			error.title = 'Your title is too long';
		}

		if (!description) {
			error.description = 'Please provide description';
		} else if (description.length < 100) {
			error.description = 'Your description is to short';
		} else if (description.length > 500) {
			error.description = 'Your description is to long';
		}

		options.forEach((opt, index) => {
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
		<div>
			<Forms
				title={formData.title}
				description={formData.description}
				options={formData.options}
				handleChange={handleChange}
				error={formData.error}
				handleOptionChange={handleOptionChange}
				createOption={createOption}
				detetOption={detetOption}
				handleSubmit={handleSubmit}
				buttonValue={buttonValue || 'Create btn'}
			/>
		</div>
	);
}
