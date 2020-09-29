import React from 'react'
import './Product.css';
import {useStateValue} from './StateProvider';
import {motion} from 'framer-motion';
function Product({id,title,price,rating,image, addingPage}) {
    const [{cart},  dispatch] =useStateValue();
    console.log(cart);
    const addToCart=()=>{
        
        dispatch({
            
            type: 'ADD_TO_CART',
            item:{id: id,
            title: title,
            price: price,
            rating: rating,
            image: image
            },
        })
    }

    return (
        <motion.div className='product' whileHover={{scale:1.020}}>
            <div className='product__info'>
                
                <p>{title}</p>
                <p className='product__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating).fill().map((_,i)=> (<p> ⭐ </p>))}
                </div>
            </div>
            <motion.img 
                whileHover={{scale:1.2}}
                className="product__image"
                src={image}
                alt=""
            />
          {!addingPage && ( <motion.button whileHover={{backgroundColor:'black'}} whileTap={{opacity:0.2,scale:0.9}} className="product__button" onClick={addToCart}
            >
                Add to Cart
            </motion.button> 
          )}

        </motion.div>
    )
}

export default Product
