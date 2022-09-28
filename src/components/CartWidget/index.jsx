import React, {useContext} from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsFillCartXFill} from 'react-icons/bs'
import {Shop} from '../../context/ShopProvider';
import './styles.css';

const CartWidget = () => {

	const {cantidades, total} = useContext(Shop);

	return (
		<>
			{cantidades > 0 ? <div className="cartWidget">
				<div className="icon">
					<AiOutlineShoppingCart size={28}/>
				</div>
				<p>{cantidades} productos - $ {total}</p>
			</div> : <div className="icon">
					<BsFillCartXFill size={28}/>
				</div>}
		</>
	)
}

export default CartWidget;