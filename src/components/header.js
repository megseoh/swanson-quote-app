import React from 'react';
import { Link } from 'react-router';
import logo from '../logo.png';
import './header.css';

export default function Header() {
	return (
		<div className="app-header">
		  <Link to='/'><img src={ logo } className="app-logo" alt="steak" /></Link>
		  <h2>Ron Swanson Quote Generator</h2>
		</div>
	);
}