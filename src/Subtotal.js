import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { motion } from 'framer-motion';
import {useStateValue} from './StateProvider';
import {getCartTotal} from './reducer';
import {useHistory} from 'react-router-dom';

function Subtotal() {
    const [{cart}] =useStateValue();
    const history = useHistory();
    return (
        <div className="subtotal">
           <CurrencyFormat
                renderText={ (value)=> (
                 <>
                    <p>
                        Subtotal ({cart.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" className="gift_check"/>
                        This order contains a gift
                    </small>
                 </>
                )}
                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"₹"} 
            /> 
            <motion.button className="proceed__checkout" whileHover={{backgroundColor:'orange'}} whileTap={{opacity:0.2,scale:0.9}} onClick={e=> history.push('/checkout')}>
                Proceed to Checkout
            </motion.button>
        </div>
    )
}

export default Subtotal
