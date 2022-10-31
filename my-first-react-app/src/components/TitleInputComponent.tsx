import React, { Component, FormEventHandler, Fragment } from 'react';

class TitleInputComponent extends Component<{
	onInput: FormEventHandler<HTMLInputElement>;
	title: string;
}> {
	render() {
		return (
			<Fragment>
				<label htmlFor='titleInput' className='m-2'>
					Enter task title:
				</label>
				<input
					onInput={this.props.onInput}
					value={this.props.title}
					type='text'
				/>
			</Fragment>
		);
	}
}

export default TitleInputComponent;
