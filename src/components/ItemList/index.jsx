import React from 'react';
import Item from '../Item';
import './styles.css';

const ItemList = ({products}) => {

	return (
		<div className="item-container">
			{products.length ? products.map(product => {
				return <Item key={product.id} product={product}/>
			})
			:
			<img className="loader" src="../assets/loader.gif" alt="loading"/>
		}
		</div>
	)
};

export default ItemList;