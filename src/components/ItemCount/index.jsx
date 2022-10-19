import React, {useState, useEffect} from 'react'
import './styles.css';

const ItemCount = ({stock, initial, onAdd}) => {

	const [count, setCount] = useState(initial);

	const handleAdd = () => {
		if(count < stock) {
			setCount(count+1);
		}
		else {
			alert("No hay suficiente stock");
		}
	}

	const handleDec = () => {
		if (count > initial) {
			setCount(count-1);
		} else {
			alert("Selección vacía");
		}
	}

	const addCart = () => {
		onAdd(count);
		setCount(initial);
	}

	useEffect(() => {

	}, [count]);

	return (
	<div>
		<h3>Cantidad:</h3>
		<div className="btn-group mtb05">		
			<button className="btn mlr05" onClick={handleDec}>-</button>
			<h2>{count}</h2>
			<button className="btn mlr05" onClick={handleAdd}>+</button>
		</div>
		<button className="btn mtb05" onClick={addCart}>Agregar al carrito</button>
	</div>
	);
};

export default ItemCount;