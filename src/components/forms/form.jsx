/** @format */

import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Button, Form, FormFeedback, FormGroup, Label , Input} from 'reactstrap';

export default function Forms({
	title,
	description,
	options,
	handleChange,
	error,
	handleOptionChange,
	createOption,
	detetOption,
	handleSubmit,
	buttonValue,
}) {
	return (
		<Form >
			<FormGroup>
				<Label htmlFor='title'>Title</Label>
				<Input
					type='text'
					name='title'
					id='title'
					placeholder='Title here'
					value={title}
					onChange={handleChange}
					onInvalid={error.title ? true : false}
					className='form-control'
				/>
				<FormFeedback>{error.title}</FormFeedback>
			</FormGroup>
			<FormGroup>
				<Label htmlFor='description'>Description</Label>
				<Input
					type='textarea'
					name='description'
					id='description'
					placeholder='Describe your poll'
					value={description}
					onChange={handleChange}
					onInvalid={error.description ? true : false}
					className='form-control'
				/>
				<FormFeedback>{error.description}</FormFeedback>
			</FormGroup>
			<FormGroup>
				<Label htmlFor='options' className='d-flex'>
					<span className='mt-2'>Options:</span> <span className={`${options.length >= 5 ? 'd-none' : ''} ms-auto btn-primary btn`} onClick={createOption}>Add Option</span>
				</Label>
				{options.map((opt, index) => (
					<div key={opt.id} className='d-flex my-2'>
						<input
							type='text'
							value={opt.value}
							onChange={(e) => handleOptionChange(e , index)}
							onInvalid={error.options ? true : false}
							className='form-control'
							placeholder='Enter poll option here'
						/>
						<Button
							onClick={() => detetOption(index)}
                            disabled={options.length <= 2 ? true : false}
                            className={`${options.length <= 2 ? 'd-none' : 'bg-danger'} ms-2 btn btn-outline-denger`}
                        >
							{options.length <= 2 ? '' : 'Delete'}
						</Button>
					</div>
				))}
            </FormGroup>
			<Button
				className='form-control btn btn-success'
            onClick={handleSubmit}
			>{buttonValue}</Button>
			<ToastContainer/>
		</Form>
	);
}
