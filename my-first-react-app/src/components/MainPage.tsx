import React, { Component, FormEvent, FormEventHandler } from 'react';
import { nanoid } from 'nanoid';
import TaskList from './TaskList';
import TitleInputComponent from './TitleInputComponent';
import ProjectInputComponent from './ProjectInputComponent';
import DueDateInputComponent from './DueDateInputComponent';
import DetailsInputComponent from './DetailsInputComponent';
import { Task } from '../types/Task';
import AddTaskModal from '../Modals/AddTaskModal';

class MainPage extends Component<
	{},
	{
		newTask: Task;
		tasksArray: Task[];
	}
> {
	constructor(props: {}) {
		super(props);

		this.state = {
			newTask: {
				id: nanoid(),
				title: '',
				details: '',
				project: '',
			},
			tasksArray: [],
		};
	}

	handleInput =
		(propertyName: string) => (e: FormEvent<HTMLInputElement>) => {
			this.setState({
				newTask: {
					...this.state.newTask,
					[propertyName]: e.currentTarget.value,
				},
			});
		};

	onSubmitTask = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		this.setState({
			newTask: {
				id: nanoid(),
				title: '',
				details: '',
				project: '',
			},
			tasksArray: [...this.state.tasksArray, this.state.newTask],
		});
	};

	render() {
		const { newTask, tasksArray } = this.state;

		return (
			<div>
				<form onSubmit={this.onSubmitTask}>
					<TitleInputComponent
						onInput={this.handleInput('title')}
						title={newTask.title}
					/>
					<DetailsInputComponent
						onInput={this.handleInput('details')}
						details={newTask.details}
					/>
					<ProjectInputComponent
						onInput={this.handleInput('project')}
						project={newTask.project}
					/>
					<DueDateInputComponent
						onInput={this.handleInput('due')}
						due={newTask.due}
					/>
					<button type='submit'>Add Task</button>
				</form>
				<TaskList tasks={tasksArray} />
				<AddTaskModal />
			</div>
		);
	}
}

export default MainPage;
