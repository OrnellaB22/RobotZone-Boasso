import React, {createContext, useState} from 'react';

export const Shop = createContext(null);

const ShopProvider = ({children}) => {

	const [cart, setCart] = useState([]);
	const [total, setTotal] = useState(0);
	const [cantidades, setCantidades] = useState(0);

	const isInCart = (id) => {
		return cart.some(product => product.id === id)
	}

	const addItem = (item) => {
		const productoRepetido = isInCart(item.id);

		if (productoRepetido) {
			const cartModified = cart.map(product => {
				if (product.id === item.id) {
					product.quantity += item.quantity;
					return product;
				}
				return product;
			})
			setCart(cartModified);
			setTotal(total + (item.price * item.quantity));
			setCantidades(cantidades + item.quantity);
		} else {
			const cartModificado = [...cart, item];
			setCart(cartModificado);
			setTotal(total + (item.price * item.quantity));
			setCantidades(cantidades + item.quantity);
		}
	}

	const removeItem = (item) => {
		const match = isInCart(item.id);
		if (match) {
			const itemsRestantes = cart.filter((i) => i.id !== item.id);
			setCart(itemsRestantes);
			setTotal(total - (item.price * item.quantity));
			setCantidades(cantidades - item.quantity);
		}

	}

	const clearCart = () => {
		const carritoLimpio = [];
		setCart(carritoLimpio);
		setTotal(0);
		setCantidades(0);
	}

	return (
		<Shop.Provider value={{cart, addItem, clearCart, removeItem, total, cantidades}}>
			{children}
		</Shop.Provider>
	)
}

export default ShopProvider;