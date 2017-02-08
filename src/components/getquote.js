import React from 'react';
import { Link } from 'react-router';
import './getquote.css';
import '../App.css';

export default function GetQuote({
	bgColour,
}) {
	return (
		<div className="home quote-container">
			<Link className="link-quote" to='/quote'>What would Ron say?</Link>
		</div>
	);
}