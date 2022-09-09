import React, {useState, useEffect} from 'react';
import ItemList from '../../components/ItemList';
import { productos } from '../../data/productos';
import './styles.css';

const ItemListContainer = ({greeting}) => {

	const [products, setProducts] = useState([])

	useEffect(() => {
		const obtenerProductos = new Promise ((accept, reject) => {
			setTimeout(() => {
				accept(products)
			}, 2000);
		})

		obtenerProductos
			.then((result) => {
				console.log(result)
				setProducts(result)
			})
			.catch((error) => console.log(error))
	}, [])

	console.log(productos);

	return (
		<div className="item-list-container">
			<ItemList products={productos}/>
		</div>
	);
};

export default ItemListContainer;