import React, { Component } from 'react';
import $ from 'jquery';
import Header from '../components/header.js';
import Quote from '../components/quote.js';
import '../App.css';

export default class QuoteContainer extends Component {
	constructor() {
		super();

		this.state = {
			quote: '',
		}
	}

	handleSubmit(event) {
		// event.preventDefault();
	}

	componentDidMount() {
		$.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then(response => {
			// console.log(response);
			this.setState({
				quote: response,
			});
		});
	}

	render() {
		return (
			<div className="App">
				<Header />
				<Quote quote={ this.state.quote }/>
				<form onSubmit={ this.handleSubmit }
				>
					<input type="submit" value="Click for a new quote" />
				</form>
			</div>
		);
	}
}