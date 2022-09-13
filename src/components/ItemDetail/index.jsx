import React from 'react';
import './styles.css';

const ItemDetail = ({product}) => {
	return (
		<div className="main">
			<div className="productDetailContainer">
			<h1 className="w-100">{product.title}</h1>
			<img className="item__img" src={product.image} alt="product-detail"/>
			<p className="item__desc">{product.description}</p>
			</div>
		</div>
	)
}

export default ItemDetail;