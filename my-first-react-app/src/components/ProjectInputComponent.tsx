import React, { Component, FormEventHandler, Fragment } from 'react';

class ProjectInputComponent extends Component<{
	onInput: FormEventHandler<HTMLInputElement>;
	project: string;
}> {
	render() {
		return (
			<Fragment>
				<label htmlFor='taskInput' className='m-2'>
					Enter project title:
				</label>
				<input
					onInput={this.props.onInput}
					value={this.props.project}
					type='text'
				/>
			</Fragment>
		);
	}
}

export default ProjectInputComponent;
