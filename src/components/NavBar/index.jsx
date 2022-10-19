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
						<li><Link to="/category/notebooks" className="navbar-link">Notebooks</Link></li>
						<li><Link to="/category/componentesdepc" className="navbar-link">Componentes de PC</Link></li>
						<li><Link to="/category/perifericos" className="navbar-link">Periféricos</Link></li>
						<li><Link to="/category/almacenamiento" className="navbar-link">Almacenamiento</Link></li>
					</ul>
				</div>
				<CartWidget/>
			</nav>
		</>
	)
}

export default NavBar;