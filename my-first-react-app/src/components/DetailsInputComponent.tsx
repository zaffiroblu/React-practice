import React, { Component, FormEventHandler, Fragment } from 'react';

class DetailsInputComponent extends Component<{
	onInput: FormEventHandler<HTMLInputElement>;
	details: string;
}> {
	render() {
		return (
			<Fragment>
				<label htmlFor='titleInput' className='m-2'>
					Enter task details:
				</label>
				<input
					onInput={this.props.onInput}
					value={this.props.details}
					type='text'
				/>
			</Fragment>
		);
	}
}

export default DetailsInputComponent;
