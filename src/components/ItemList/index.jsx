import React, {useContext} from 'react';
import Item from '../Item';
import {Shop} from '../../context/ShopProvider';
import './styles.css';

const ItemList = ({products}) => {

	const {setMensaje} = useContext(Shop);
	const onChangeMensaje = () => {
		setMensaje("Chau");
	}

	return (
		<div className="item-container">
			{products.length ? products.map(product => {
				return <Item key={product.id} product={product}/>
			})
			:
			<h2>Loading...</h2>
		}
		<button onClick={onChangeMensaje}>Cambiar mensaje NavBar</button>
		</div>
	)
};

export default ItemList;