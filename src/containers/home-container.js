import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from '../components/header.js';
import '../App.css';

export default class HomeContainer extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Link className="link-quote" to='/quote'>What would Ron say?</Link>
			</div>
		);
	}
}