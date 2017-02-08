import React, { Component } from 'react';
import Header from '../components/header.js';
import '../App.css';

export default class HomeContainer extends Component {
	render() {
		return (
			<div className="App container">
				<div className="row">
				<Header />
				{ this.props.children }
				</div>
			</div>
		);
	}
}