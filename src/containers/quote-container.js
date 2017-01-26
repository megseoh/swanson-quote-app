import React, { Component } from 'react';
import $ from 'jquery';
import Header from '../components/header.js';
import ron from '../../assets/ronswanson-square.jpg';
import Quote from '../components/quote.js';
import '../App.css';

export default class QuoteContainer extends Component {
	constructor() {
		super();

		this.state = {
			quote: '',
		}

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		$.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then(response => {
			// console.log(response);
			this.setState({
				quote: response,
			});
		});
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
				<div className="container">
					<div className="row">
						<div className="quote-container" style={{ background: '#5f9ea0' }}>
							<img src={ ron } className="ron-image" alt="Ron Swanson" />
							<Quote quote={ this.state.quote }/>
						</div>
					</div>
				</div>
				<form onSubmit={ this.handleSubmit }
				>
					<input type="submit" value="Click for a new quote" />
				</form>
			</div>
		);
	}
}