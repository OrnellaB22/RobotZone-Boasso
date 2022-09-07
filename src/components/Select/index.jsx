import React from 'react'
import './styles.css';

const Select = ({handleColor}) => {
	return (
		<select name="navColor" id="navColor" onChange={handleColor}>
			<option value="blue">Blue</option>
			<option value="blue">Blue</option>
			<option value="blue">Blue</option>
			<option value="#f3f3f3">Default</option>
		</select>
	);
};

export default Select;