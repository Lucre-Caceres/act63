import React from 'react'
import styles from "./CartItem.module.css"
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'


const CartItem = ({product}) => {
    const {removeItem}=useContext(CartContext);

  return (
    <div>
      <p className={styles.prodTitle} >{product.item.title}</p>
      <img className={styles.prodImage} src={product.item.pictureURL} />
      <p className={styles.prodCount} >qty: {product.count}</p>
      <p className={styles.prodPrice} > USD:{product.item.price}</p>

       <button onClick={()=>removeItem(product.id)}>-</button>
       <button onClick={()=>addItem(product.id)}>+</button>
       <button onClick={()=>clear(product.id)}>CLEAR</button>
    </div>
    )
}
    

export default CartItem