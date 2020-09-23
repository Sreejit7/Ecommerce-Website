import React,{forwardRef} from 'react'
import './Cart.css';
import Subtotal from './Subtotal';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import FlipMove  from 'react-flip-move';
import posed from 'react-pose';
import {Link, Route} from 'react-router-dom';
function Cart() {
    const [{cart,user}, dispatch] =useStateValue();
      
    return (
        <div className="cart">
            <div className="cart__left">
            <Link to='/ad'>
            <img className="cart__ad"
                     src="https://www.idbifederal.com/sites/all/themes/idbifed/images/WebBanner.jpg"
                     alt=""
            />
            </Link>
                
                <div>
                    <h2 className="cart__title">
                    Hey {user?user.email:"Guest"}, Your Shopping Cart
                    </h2>
                    
                    {cart.map(item=>(
                        <CheckoutProduct
                          id={item.id}
                          title={item.title}
                          price={item.price}
                          rating={item.rating}
                          image={item.image}
                        />
                        
                    ))}
                    
                </div>
            </div>
            <div className="cart__right">
                <Subtotal/>
            </div>
            
        </div>
    )
}

export default Cart
