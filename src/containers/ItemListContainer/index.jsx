import React from 'react'
import ItemCount from '../../components/ItemCount';
import './styles.css';

const ItemListContainer = ({greeting}) => {

	const agregarAlCarrito = (cantidad) => {
		console.log(`Se agregó la cantidad ${cantidad} al carrito!`);
	}

	return (
		<div className="item-list-container">
			<h1>{greeting}</h1>
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">Ejemplo de producto</h5>
					<ItemCount initial={0} stock={5} onAdd={agregarAlCarrito}/>
				</div>
			</div>
		</div>
	)
}


export default ItemListContainer;