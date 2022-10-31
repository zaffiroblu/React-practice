import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import Sol1Task from './Sol1Task';

class MainPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			displayMessages: [],
			currentText: '',
		};

		this.clickHandler = this.clickHandler.bind(this);

		this.changeText = this.changeText.bind(this);
	}

	changeText(newlyTypedText) {
		// Roman, I also deleted "previous state" as an arg below:
		this.setState(() => ({
			// Is it really OK to just delete this part of the code?
			// displayMessages: previousState.displayMessages,
			currentText: newlyTypedText,
		}));
	}

	clickHandler() {
		this.setState((previousState) => ({
			displayMessages: [
				...previousState.displayMessages,
				{ text: previousState.currentText, id: nanoid() },
			],
			// Roman, is it really OK to just delete this part of the code?
			// currentText: previousState.currentText,
		}));
	}

	render() {
		return (
			<div>
				<div>
					{this.state.displayMessages.map((item) => (
						<div key={item.id}>
							<span>{item.text}</span>
						</div>
					))}
				</div>
				<Sol1Task changeParentState={this.changeText} />
				<button onClick={this.clickHandler}>Submit</button>
			</div>
		);
	}
}

export default MainPage;
