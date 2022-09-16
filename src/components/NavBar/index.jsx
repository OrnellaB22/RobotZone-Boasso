import React from 'react'
import CartWidget from '../CartWidget';
import './styles.css';
import {Link} from 'react-router-dom';

const NavBar = () => {

	return (
		<>
			<nav className="navbar">
				<div className="logo-container">
					<Link to="/" className="logo-link"><img src="/assets/logo.svg" alt="Logo" className="navbar-logo"></img></Link>
					<span>Robot Zone</span>					
				</div>
				<div className="links-container">
					<ul className="navbar-links">
						<li><Link to="/category/electronics" className="navbar-link">Electronics</Link></li>
						<li><Link to="/category/men's clothing" className="navbar-link">Men's Clothing</Link></li>
						<li><Link to="/category/women's clothing" className="navbar-link">Women's Clothing</Link></li>
						<li><Link to="/category/jewelery" className="navbar-link">Jewelery</Link></li>
						<CartWidget/>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default NavBar;