import React, { Component } from 'react';

class Task extends Component {
	render() {
		return (
			<div>
				<label>Add a new task here: </label>
				<textarea
					type='text'
					onInput={(event) => {
						this.props.changeParentState(event.target.value);
					}}
				></textarea>
			</div>
		);
	}
}

export default Task;
