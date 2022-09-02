import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './styles.css';

const CartWidget = () => {
	return (
		<div className="icon">
			<AiOutlineShoppingCart size={28}/>
		</div>
	)
}

export default CartWidget;