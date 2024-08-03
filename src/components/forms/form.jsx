/** @format */

import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import {
	Button,
	Form,
	FormFeedback,
	FormGroup,
	Label,
	Input,
} from 'reactstrap';

export default function Forms({
	poll,
	handleChange,
	handleOptionChange,
	createOption,
	detetOption,
	handleSubmit,
	buttonValue,
}) {
	return (
		<Form>
			<FormGroup>
				<Label htmlFor='title'>Title</Label>
				<Input
					type='text'
					name='title'
					id='title'
					placeholder='Title here'
					value={poll.title}
					onChange={handleChange}
					onInvalid={poll.error.title ? true : false}
					className='form-control'
				/>
				<FormFeedback>{poll.error.title}</FormFeedback>
			</FormGroup>
			<FormGroup>
				<Label htmlFor='description'>Description</Label>
				<Input
					type='textarea'
					name='description'
					id='description'
					placeholder='Describe your poll'
					value={poll.description}
					onChange={handleChange}
					onInvalid={poll.error.description ? true : false}
					className='form-control'
				/>
				<FormFeedback>{poll.error.description}</FormFeedback>
			</FormGroup>
			<FormGroup>
				<Label htmlFor='options' className='d-flex'>
					<span className='mt-2'>Options:</span>{' '}
					<span
						className={`${
							poll.options.length >= 5 ? 'd-none' : ''
						} ms-auto btn-primary btn`}
						onClick={createOption}>
						Add Option
					</span>
				</Label>
				{poll.options.map((opt, index) => (
					<div key={opt.id} className='d-flex my-2'>
						<input
							type='text'
							value={opt.value}
							onChange={(e) => handleOptionChange(e, index)}
							onInvalid={poll.error.options ? true : false}
							className='form-control'
							placeholder='Enter poll option here'
						/>
						<Button
							onClick={() => detetOption(index)}
							disabled={poll.options.length <= 2 ? true : false}
							className={`${
								poll.options.length <= 2 ? 'd-none' : 'bg-danger'
							} ms-2 btn btn-outline-denger`}>
							{poll.options.length <= 2 ? '' : 'Delete'}
						</Button>
					</div>
				))}
			</FormGroup>
			<Button className='form-control btn btn-success' onClick={handleSubmit}>
				{buttonValue}
			</Button>
			<ToastContainer />
		</Form>
	);
}
