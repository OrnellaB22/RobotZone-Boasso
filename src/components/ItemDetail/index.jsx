import React, {useState} from 'react';
import ItemCount from '../ItemCount';
import {useNavigate} from 'react-router-dom';
import './styles.css';

const ItemDetail = ({product}) => {
	const [qty, setQty] = useState(0);
	const navigate = useNavigate();

	const addCart = (quantity) => {
		setQty(quantity);
	}

	const handleFinish = () => {
		navigate('/cart');
	}

	return (
		<div className="main">
			<div className="productDetailContainer">
			<h1 className="w-100">{product.title}</h1>
			<img className="item__img" src={product.image} alt="product-detail"/>
			<p className="item__desc">{product.description}</p>
			{!qty ? (<ItemCount stock={20} initial={0} onAdd={addCart}/>) : (<button className="btn mlr05" onClick={handleFinish}>Finalizar compra</button>)}
			</div>
		</div>
	)
}

export default ItemDetail;