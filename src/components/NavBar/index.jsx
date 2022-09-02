import React from 'react'
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import './styles.css';

const NavBar = () => {
=======
=======
>>>>>>> Stashed changes
import CartWidget from '../CartWidget';
import './styles.css';

const NavBar = ({categories}) => {
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
	return (
		<>
			<nav className="navbar">
				<div className="logo-container">
					<img src="/assets/logo.svg" alt="Logo" className="navbar-logo"></img>
					<span>Robot Zone</span>
				</div>
				<div className="links-container">
					<ul className="navbar-links">
						<li><a className="navbar-link" href='#'>Componentes de PC</a></li>
						<li><a className="navbar-link" href='#'>Periféricos</a></li>
						<li><a className="navbar-link" href='#'>Almacenamiento</a></li>
						<li><a className="navbar-link" href='#'>Notebooks</a></li>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
						<CartWidget/>
>>>>>>> Stashed changes
=======
						<CartWidget/>
>>>>>>> Stashed changes
					</ul>
				</div>
			</nav>
		</>
		)
}

export default NavBar;