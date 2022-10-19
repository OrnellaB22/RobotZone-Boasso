import React, {useContext, useState} from 'react';
import ItemCount from '../ItemCount';
import {useNavigate} from 'react-router-dom';
import {Shop} from '../../context/ShopProvider';
import './styles.css';

const ItemDetail = ({product}) => {
	const [qty, setQty] = useState(0);
	const navigate = useNavigate();
	
	const {addItem, clearCart, removeItem} = useContext(Shop);

	const addCart = (quantity) => {
		setQty(quantity);
	}

	const handleFinish = () => {
		const productToSave = {...product, quantity: qty};
		addItem(productToSave);
		navigate('/cart');
	}

	const clearCarrito = () => {
		clearCart();
	}

	const borrarItem = () => {
		removeItem(product);
	}

	return (
		<div className="main">
			<div className="productDetailContainer">
				<h1 className="w-100">{product.title}</h1>
				<div className="productCardContainer">
					<div className="productCard">
						<img className="item__img" src={product.imagedetail} alt="product-detail"/>
						<p className="item__desc">{product.description}</p>
					</div>
					<div className="actions">
						<h3>Stock disponible: {product.stock}</h3>
						{!qty ? (<ItemCount stock={product.stock} initial={0} onAdd={addCart}/>) : (<button className="btn mlr05" onClick={handleFinish}>Finalizar compra</button>)}
						<button className="btn mlr05" onClick={clearCarrito}>Limpiar carrito!</button>
						<button className="btn mlr05" onClick={borrarItem}>Borrar item!</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ItemDetail;