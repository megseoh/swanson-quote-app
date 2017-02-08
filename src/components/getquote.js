import React from 'react';
import { Link } from 'react-router';

export default function GetQuote() {
	return (
		<Link className="link-quote" to='/quote'>What would Ron say?</Link>
	);
}