import React from 'react'
import CartWidget from '../CartWidget';
import Select from '../Select';
import './styles.css';
import { useState } from 'react';

const NavBar = () => {

	const [navColor, setNavColor] = useState("#f3f3f3");

	const onChangeColor = (event) => {
		const color = event.target.value;
		setNavColor(color);
	}

	return (
		<>
			<nav className="navbar">
				<div className="logo-container">
					<img src="/assets/logo.svg" alt="Logo" className="navbar-logo"></img>
					<span>Robot Zone</span>
				</div>
				<div style= {{
					backgroundColor: navColor
				}}>
					<ul className="navbar-links">
						<li><a className="navbar-link" href='#'>Componentes de PC</a></li>
						<li><a className="navbar-link" href='#'>Periféricos</a></li>
						<li><a className="navbar-link" href='#'>Almacenamiento</a></li>
						<li><a className="navbar-link" href='#'>Notebooks</a></li>
						<CartWidget/>
						<Select handleColor={onChangeColor}/>
					</ul>
				</div>
			</nav>
		</>
		)
}

export default NavBar;