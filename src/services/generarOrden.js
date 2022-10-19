const ordenGenerada = (nombre, email, phone, cart, total) => {
	return {
		buyer: {
			nombre: nombre,
			email: email,
			phone: phone
		},
		items: cart,
		total: total,
		createdAt: new Date().toLocaleString()
	}
}

export default ordenGenerada;