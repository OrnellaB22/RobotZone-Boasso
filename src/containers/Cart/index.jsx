import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import './styles.css'
import {Shop} from '../../context/ShopProvider';
import ordenGenerada from '../../services/generarOrden';
import { db } from "../../firebase/config";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

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

   const handleBuy = async () => {
      const name = document.getElementById("orderName").value;
      const phone = document.getElementById("orderPhone").value;
      const mail = document.getElementById("orderMail").value;
      const importeTotal = total;
      const orden = ordenGenerada(name, phone, mail, cart, importeTotal);

      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "orders"), orden);

      cart.forEach(async (productoEnCarrito) => {
         const productRef = doc(db, "products", productoEnCarrito.id);
         const productSnap = await getDoc(productRef);
         await updateDoc(productRef, {
            stock: productSnap.data().stock - productoEnCarrito.quantity,
         });
      })
      
      const MySwal = withReactContent(Swal)
      MySwal.fire({
      allowOutsideClick: false,
        title: <p>¡Compra exitosa!</p>,
        imageUrl: '../assets/happyRobot.jpg',
        confirmButtonText: 'Volver a la página de inicio'
      }).then((result) => {
         window.location.reload(false);
      });

      console.log(`Document written with ID: ${docRef.id}`);
   }

 return (
   <>
      {cart <= 1 ? <div className="main"><div className="emptyCartContainer"><p>El carrito está vacío :(</p><img className="sadRobot" src="/assets/sadRobot.png" alt="sad robot"/><Link to="/"><button className="btn mlr05">Volver al inicio</button></Link></div></div>
      :
      <>
         <div className="main">
            <div className="cartDetailContainer">
               <h1 className="sectionTitle">Carrito</h1>
               <div className="sectionContainer">
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
                     <span>Cantidad total de items: {cantidades}</span>
                  </div>
                  <div className="clientData">
                     <div className="clientData--form">
                        <h2 className="clientData--form--title">Ingrese sus datos</h2>
                        <h3>Nombre</h3>
                        <input id="orderName" placeholder="Nombre" type="text"></input>
                        <h3>Teléfono</h3>
                        <input id="orderPhone" placeholder="Teléfono" maxLength="15" type="number"></input>
                        <h3>Mail</h3>
                        <input id="orderMail" placeholder="E-mail" type="email"></input>
                        <p>Total: $ {total}</p>
                        <button className="btn mlr05" onClick={() => {clearCart()}}>Vaciar carrito</button>
                        <button className="btn mlr05" onClick={() => {handleBuy()}}>Pagar</button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>}
   </>
  );
}

export default Cart;