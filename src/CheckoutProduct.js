import React from 'react';
import './CheckoutProduct.css';
import {motion} from 'framer-motion';
import {useStateValue} from './StateProvider';

function CheckoutProduct( {id,title,price,rating,image,hideButton}) {
    const [,  dispatch] =useStateValue();
    const removeFromCart=()=> {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id:id,
        })
    
    }
    return (
        <motion.div className="checkout__product">
            <img
                className="checkout__image"
                src={image}
                alt=""
            />
            <div className="checkout__info">
                <p className="checkout__product__title">{title}</p>
                <small>₹ </small>
                <strong>{price}</strong>                
            
                <div className="checkout__rating">
                    {Array(rating).fill().map((_,i)=> (<p> ⭐ </p>))}
                </div>
                {!hideButton && (
                     <motion.button className='remove__cart' whileHover={{backgroundColor:'orange'}} whileTap={{scale:0.9,opacity:0.3}} onClick={removeFromCart}>
                     Remove from Cart
                     </motion.button>
                )}               
            </div>

        </motion.div>
    )
}

export default CheckoutProduct
