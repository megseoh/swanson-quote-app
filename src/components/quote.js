import React from 'react';
import './quote.css';

export default function Quote({
	quote,
}) {
	return (
		<div className="container">
			<div className="row">
				<p className="quote">{quote}</p>
			</div>
		</div>
	);
}