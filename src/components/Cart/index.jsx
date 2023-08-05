import styles from "./Cart.module.css";
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import CartItem from "../CartItem";

const Cart = () => {
const {cart, addItem,clear,isIncart,getTotalItemQuantity,sumTotalCart}=useContext(CartContext);
const navigate=useNavigate();

const goToItemDetail=()=>{
  navigate('/');
}

  return (
    <>
      <h2>Cart</h2>  
        
      {cart.length===0 && 
         <div>
         <h4>Cart is empty</h4>
         <button onClick={goToItemDetail}>Volver</button>
         </div>
      }
      
      {cart?.length>0 && cart.map((product)=> 
      <CartItem
      key={product.item.id} 
      product={product} 
  
      />   
             
      )}
    
    </>
  )
}

export default Cart;