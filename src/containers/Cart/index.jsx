import './styles.css'
import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {Shop} from '../../context/ShopProvider';
 
const Cart = () => {  
   const {removeItem, cart, clearCart, total, cantidades} = useContext(Shop);
   const rows = [];
   cart.forEach(item => {
      rows.push({
         id: item.id,
         image: item.image,
         title: item.title,
         price: item.price,
         quantity: item.quantity,

      })
   })

 return (
   <>
      {cart <= 1 ? <div className="main"><div className="emptyCartContainer"><p>El carrito está vacío :(</p><img className="sadRobot" src="/assets/sadRobot.png" alt="sad robot"/><Link to="/"><button className="btn mlr05">Volver al inicio</button></Link></div></div>
      :
      <>
         <div className="main">
            <div className="cartDetailContainer">
               <div className="productsInCart">
               {rows.map(item => (<div className="productInCart" key={`uniqueID${item.id}`}>
                  <img className="productInCartImage" src={item.image} alt={item.title}></img>
                     <div className="productInCartDetails">
                       <h3><span>Título: </span>{item.title}</h3>
                       <h3><span>Precio: </span>$ {item.price}</h3>
                       <h3><span>Cantidad: </span>{item.quantity}</h3>
                     </div>
                     <Link to={`/item/${item.id}`}><button className="btn mlr05">Comprar más</button></Link>
                     <button className="btn mlr05" onClick={() => {removeItem(item)}}>Borrar</button>
                  </div>))}
               </div>
               <span>Total: {total}</span>
               <span>Cantidad de items: {cantidades}</span>
               <button className="btn mlr05" onClick={() => {clearCart()}}>Vaciar carrito</button>
            </div>
         </div>
      </>}
   </>
  );
}

export default Cart;