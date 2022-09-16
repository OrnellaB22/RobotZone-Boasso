import React, {useState, useEffect} from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import './styles.css';

const ItemListContainer = ({greeting}) => {

	const [products, setProducts] = useState([]);

	const {categoryId} = useParams();

	useEffect(()=> {
		(async ()=> {
			try {
				if(categoryId){
					const response = await fetch("https://fakestoreapi.com/products/category/" + categoryId);
					const products = await response.json();
					setProducts(products);
				}
				else {
					const response = await fetch("https://fakestoreapi.com/products/");
					const products = await response.json();
					setProducts(products);
				}
			} catch (error) {
				console.log(error);
			}
		})()
	}, [categoryId]);

	return (
		<div className="main">
			<div className="item-list-container">
				<ItemList products={products}/>
			</div>
		</div>
	);
};

export default ItemListContainer;