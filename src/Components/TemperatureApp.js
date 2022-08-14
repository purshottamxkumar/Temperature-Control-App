import React, { Component } from 'react';
import './TemperatureApp.css';

class TemperatureApp extends Component {
	constructor() {
		super();

		this.state = {
			temperature: 10,
			temperatureColor: 'cold1',
		};

		this.handleDecrement = this.handleDecrement.bind(this);
		this.handleIncrement = this.handleIncrement.bind(this);
		this.handleTemperature = this.handleTemperature.bind(this);
	}

	handleTemperature() {
		if (this.state.temperature <= 5) {
			this.setState({
				temperatureColor: 'cold2',
			});
		} else if (this.state.temperature <= 10) {
			this.setState({
				temperatureColor: 'cold1',
			});
		} else if (this.state.temperature <= 15) {
			this.setState({
				temperatureColor: 'cold',
			});
		} else if (this.state.temperature <= 20) {
			this.setState({
				temperatureColor: 'hot',
			});
		} else if (this.state.temperature <= 25) {
			this.setState({
				temperatureColor: 'hot1',
			});
		} else if (this.state.temperature <= 30) {
			this.setState({
				temperatureColor: 'hot2',
			});
		}
	}

	handleIncrement() {
		if (this.state.temperature === 30) {
			return;
		}

		this.setState({
			temperature: this.state.temperature + 1,
		});

		this.handleTemperature();
	}

	handleDecrement() {
		if (this.state.temperature === 1) {
			return;
		}

		this.setState({
			temperature: this.state.temperature - 1,
		});

		this.handleTemperature();
	}

	render() {
		return (
			<>
				<div className={`temperatureDiv ${this.state.temperatureColor}`}>
					<h1 className="temperatureValueStyle">{this.state.temperature} °C</h1>
				</div>
				<div className="buttonDiv">
					<button
						type="button"
						className="buttonStyleDiv"
						onClick={this.handleIncrement}
					>
						{' '}
						+{' '}
					</button>
					<button
						type="button"
						className="buttonStyleDiv"
						onClick={this.handleDecrement}
					>
						{' '}
						-{' '}
					</button>
				</div>
				<div className="name">
					<h3>By</h3>
					<a
						href="https://www.github.com/purshottamxkumar"
						className="nameLink"
						rel="noopener noreferrer"
						target="_blank"
					>
						Purshottam Kumar
					</a>
				</div>
			</>
		);
	}
}

export default TemperatureApp;
