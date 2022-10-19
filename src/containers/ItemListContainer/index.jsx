import React, {useState, useEffect} from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import { db } from "../../firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";
import './styles.css';

const ItemListContainer = ({greeting}) => {

	const [products, setProducts] = useState([]);

	const {categoryId} = useParams();

	useEffect(()=> {
		(async ()=> {
			try {
				const q = categoryId ?
				query(collection(db, "products"), where("category", "==", categoryId))
				: query(collection(db, "products"));
				const querySnapshot = await getDocs(q);
				const productsFirebase = [];
				querySnapshot.forEach((doc) => {
	  			productsFirebase.push({id: doc.id, ...doc.data()})
				});
				setProducts(productsFirebase);
			} catch (error) {
				console.log(error);
			}
		})()
	}, [categoryId]);

	return (
		<div className="main">
			<div className="item-list-container">
				{categoryId ? (<h1>{categoryId}</h1>) : (<h1>Todos los productos</h1>)}
				<ItemList products={products}/>
			</div>
		</div>
	);
};

export default ItemListContainer;