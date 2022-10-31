import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function AddTaskModal() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant='primary' onClick={handleShow}>
				Add New Task
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group
							className='mb-3'
							controlId='Form.ControlInput1'
						>
							<Form.Label>Task title:</Form.Label>
							<Form.Control type='text' autoFocus />
						</Form.Group>
						<Form.Group
							className='mb-3'
							controlId='Form.ControlTextarea1'
						>
							<Form.Label>Task details:</Form.Label>
							<Form.Control as='textarea' rows={3} />
						</Form.Group>
						<Form.Select>
							<option>Around the house</option>
							<option>Pets</option>
							<option>Add new project</option>
						</Form.Select>
						<Form.Group
							className='mb-3'
							controlId='Form.ControlInput4'
						>
							<Form.Label>Due Date</Form.Label>
							<Form.Control type='date' />
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Cancel
					</Button>
					<Button variant='primary' onClick={handleClose}>
						Add New Task
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default AddTaskModal;
