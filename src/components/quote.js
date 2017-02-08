import React from 'react';
import './quote.css';

export default function Quote({
	quote,
}) {
	return (
		<p className="quote" style={{ color: '#ffffff' }}>{ quote }</p>
	);
}