import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { BsPencil } from 'react-icons/bs';
import { Task } from '../types/Task';

const TaskList = (props: { tasks: Task[] }) => {
	return (
		<div>
			{props.tasks.map((task: any) => {
				return (
					<Card key={task.id} className='m-2'>
						<Card.Body className='d-flex'>
							<Form.Check className='mx-4' />
							<div className='d-flex flex-column'>
								<h1>{task.title}</h1>
								{task.project}
								<br />
								{task.due}
							</div>
							<BsPencil className='mx-4' />
						</Card.Body>
					</Card>
				);
			})}
		</div>
	);
};

export default TaskList;
