import React, {createContext, useState} from 'react';

export const Shop = createContext(null);

const ShopProvider = ({children}) => {

	const [cart, setCart] = useState([]);

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
			console.log(cartModified);
		} else {
			const cartModificado = [...cart, item];
			setCart(cartModificado);
			console.log(cartModificado);
		}
	}

	const removeItem = (item) => {
		const match = isInCart(item.id);
		if (match) {
			const itemsRestantes = cart.filter((i) => i.id !== item.id);
			setCart(itemsRestantes);
			console.log(itemsRestantes);
		}

	}

	const clearCart = () => {
		const carritoLimpio = [];
		setCart(carritoLimpio);
		console.log(carritoLimpio);
	}

	return (
		<Shop.Provider value={{cart, addItem, clearCart, removeItem}}>
			{children}
		</Shop.Provider>
	)
}

export default ShopProvider;