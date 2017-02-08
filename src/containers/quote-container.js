import React, { Component } from 'react';
import $ from 'jquery';
import Quote from '../components/quote.js';
import ColourList from '../components/colour-list.js';
import ron from '../../assets/ronswanson-square.jpg';
import '../App.css';

export default class QuoteContainer extends Component {
	constructor() {
		super();

		this.state = {
			quote: '',
			bgColour: '#5f9ea0',
		}

		this.handleSubmit = this.handleSubmit.bind(this);
		this.selectBgColour = this.selectBgColour.bind(this);
	}

	// tried to refactor to not repeat quote quote URL but not working
	// SWANSON_QUOTE_URL = 'http://ron-swanson-quotes.herokuapp.com/v2/quotes';

	// componentDidMount() {
	// 	this.getQuote();
	// }

	// getQuote(overWriteURL) {
	// 	event.preventDefault();
	// 	$.get(overWriteURL ? overWriteURL : this.SWANSON_QUOTE_URL)
	// 		.then(response => this.setState({
	// 			quote: response,
	// 		}));
	// }

	componentDidMount() {
		$.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes').then(response => {
			// console.log(response);
			this.setState({
				quote: response,
			});
		});
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

	selectBgColour(bgColour) {
		this.setState({
			bgColour: bgColour
		})
	}

	render() {
		return (
			<div>
				<div className="quote-container" style={{ backgroundColor: this.state.bgColour }}>
					<img src={ ron } className="ron-image" alt="Ron Swanson" />
					<Quote quote={ this.state.quote }/>
				</div>
				<form onSubmit={ this.handleSubmit }
				>
					<input type="submit" value="Click for a new quote" />
				</form>
				<ColourList selectBgColour={this.selectBgColour} bgColour={this.state.bgColour} />
			</div>
		);
	}
}