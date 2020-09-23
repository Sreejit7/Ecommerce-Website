/*import React,{useState , useEffect} from 'react';
import './CheckoutPage.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';
import {getCartTotal} from './reducer';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function CheckoutPage() {
    const [{user,cart}, dispatch]=useStateValue();

     const stripe = useStripe();
     const Elements = useElements();
     const history=useHistory();
     
     const [error, setError] = useState(null);
     const [disabled, setDisabled] = useState(true);
     const [clientSecret, setClientSecret] = useState(true);
     const [processing, setProcessing] = useState("");
     const [succeeded, setSucceeded] = useState(false);
    useEffect(() => {
       const getClientSecret=async()=>{
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getCartTotal(cart)*100}`
            });
            setClientSecret(response.data.clientSecret);
       } 
       getClientSecret();
    }, [cart])

    console.log('The Secret is>>>>',clientSecret);
    

     const handlePayment=async(event) =>{
         //stripe
         event.preventDefault();
         setProcessing(true);

         const payload = await stripe.confirmCardPayment(clientSecret,{
              payment_method:{
                  card: Elements.getElement(CardElement)
              }            
         }).then(({paymentIntent})=>{
                //paymentIntent=payment confirmation
                setSucceeded(true);
                setError(null);
                setProcessing(false);

                history.replace('/orders');
         })
     }

     const handleChange=event=>{
          //if any error occurs during changing the card details, displays the error
            setDisabled(event.empty);
            setError(event.error?event.error.message:""); 
     }
    return (
        <div className="checkout__page">
            <div className='checkout__container'>
                <h1>
                     Confirm Checkout (
                         <Link to='/cart'>{cart?.length} items</Link>
                     )
                </h1>
                <div className="checkout__section">
                    <div className='checkout__section__left'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='checkout__section__right'>
                        <p>{user?.email}</p>
                        <p>UttarChara, Sankarara</p>
                        <p> Tamluk, West Bengal, India</p>
                        <p>721636</p>
                    </div> 
                </div>
                <div className="checkout__section">
                    <div className='checkout__section__left'>
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className='checkout__items'>
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
                <div className="checkout__section">
                    <div className='checkout__section__left'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                      <form onSubmit={handlePayment}>
                          <CardElement onChange={handleChange}/>
                          <div className="checkout__price">
                          <CurrencyFormat
                                renderText={ (value)=> (
                                <>
                                   <h3>Order Total: {value}</h3>
                                </>
                                )}
                                decimalScale={2}
                                value={getCartTotal(cart)}
                                displayType={"text"}
                                thousandSeperator={true}
                                prefix={"$"} 
                            />
                            <button disabled={processing ||disabled || succeeded}>
                            <span>{processing ? <p>Payment Processing...</p>:"Buy Now "}
                            </span>
                            </button> 
                            {error && <div> {error} </div>}
                         </div> 
                      </form>
                    </div> 
                </div>
            </div>
            
        </div>
    )
}

export default CheckoutPage
*/