/** @format */

import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react';
import { Button, Form, FormFeedback, FormGroup, Label } from 'reactstrap';

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
		<Form onSubmit={handleSubmit}>
			<FormGroup>
				<Label htmlFor='title'>Title</Label>
				<input
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
				<input
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
				<Label htmlFor='options'>
					Options <span className='ms-5 btn-primary btn' onClick={createOption}>Add Option</span>
				</Label>
				{options.map((opt, index) => (
					<div key={opt.id} className='d-flex my-2'>
						<input
							type='text'
							value={options.value}
							onChange={() => handleOptionChange(index)}
							onInvalid={error.options ? true : false}
						/>
						<Button
							onClick={() => detetOption(index)}
                            disabled={options.length <= 2 ? true : false}
                            className='denger'
                        >
							Delete poll
						</Button>
					</div>
				))}
            </FormGroup>
            <Button
            onClick={handleSubmit}
            >submit</Button>
		</Form>
	);
}
