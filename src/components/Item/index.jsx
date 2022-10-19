import React from 'react'
import './styles.css';
import {useNavigate} from 'react-router-dom'

const Item = ({product}) => {

	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate(`/item/${product.id}`)
	}


	return (
		<div className="card">
			<div className="card-body">
				<img className="item__img" src={product.imagedetail} alt="product" onClick={handleNavigate}/>
				<h3 className="card-title">{product.title}</h3>
				<h3 className="card-title">$ {product.price}</h3>
			</div>
		</div>
	)
};

export default Item;