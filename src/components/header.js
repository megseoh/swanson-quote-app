import React from 'react';
import logo from '../logo.png';
import './header.css';

export default function Header() {
	return (
		<div className="App-header">
		  <img src={logo} className="App-logo" alt="steak" />
		  <h2>Ron Swanson Quote Generator</h2>
		</div>
	);
}