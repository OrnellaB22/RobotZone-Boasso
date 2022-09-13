import React, {useState, useEffect} from 'react';
import ItemList from '../../components/ItemList';
//import { productos } from '../../data/productos';
import './styles.css';

const ItemListContainer = ({greeting}) => {

	const [products, setProducts] = useState([])

	useEffect(()=> {
		(async ()=> {
			try {
				const response = await fetch("https://fakestoreapi.com/products/category/electronics");
				const products = await response.json();
				setProducts(products);
			} catch (error) {
				console.log(error);
			}
		})()
	}, [])

	/*useEffect(() => {
		const obtenerProductos = new Promise ((accept, reject) => {
			setTimeout(() => {
				accept(products)
			}, 2000);
		})

		obtenerProductos
			.then((result) => {
				setProducts(result)
			})
			.catch((error) => console.log(error))
	}, [])*/

	return (
		<div className="item-list-container">
			<ItemList products={products}/>
		</div>
	);
};

export default ItemListContainer;