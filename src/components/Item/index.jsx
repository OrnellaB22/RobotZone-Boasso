import React from 'react'
import ItemCount from '../../components/ItemCount';
import './styles.css';

const Item = ({product}) => {

	const agregarAlCarrito = (cantidad) => {
		console.log(`Se agregó la cantidad ${cantidad} al carrito!`);
	}

	return (
		<div className="card">
			<div className="card-body">
				<img className="item__img" src={product.image} alt="product"/>
				<h3 className="card-title">{product.title}</h3>
				<h3 className="card-title">$ {product.price}</h3>
				<ItemCount initial={0} stock={5} onAdd={agregarAlCarrito}/>
			</div>
		</div>
	)
};

export default Item;