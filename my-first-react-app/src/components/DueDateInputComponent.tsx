import React, { Component, FormEventHandler, Fragment } from 'react';

class DueDateInputComponent extends Component<{
	onInput: FormEventHandler<HTMLInputElement>;
	due?: Date;
}> {
	render() {
		return (
			<Fragment>
				<label htmlFor='taskInput' className='m-2'>
					Enter due date:
				</label>
				<input
					onInput={this.props.onInput}
					type='date'
					value={this.props.due?.toString() ?? ''}
				/>
			</Fragment>
		);
	}
}

export default DueDateInputComponent;
