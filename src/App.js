import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cart from './Cart';
import Login from './Login';
import CheckoutPage from './CheckoutPage';
import { auth } from './firebase';
import {useStateValue} from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';
import Account from './Account';

const promise= loadStripe(
  "pk_test_51HQXCJGyL70zgiPvqEql3YXbJbJG5LYCbHQxo08MRB7qjztSMk9J3GBh0ev5GIu8AghZ0Faun6QZ8MEe4cS9gvCm00Rw2vVC0O"
);
function App() {
  const [{user},  dispatch] =useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log("THE USER IS:",authUser);
      if(authUser){
        //the user is/was logged in
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }
      else{
        //the user is logged out
          dispatch({
            type:'SET_USER',
            user:null
          })
      }
    })
  }, [])  
  return (
    <Router>
      <div className="App">      
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/cart">
          <Header/>
          <Cart/>
        </Route>
        <Route path="/checkout">
          <Header/>
          <Elements stripe={promise}>
          <CheckoutPage/>
          </Elements>
        </Route>
        <Route path='/ad' component={() => { 
                window.location.href = 'https://www.idbifederal.com/'; 
                    return null;
            }}/>
        
        <Route path="/orders">
          <Header/>
          <Orders/>
        </Route>
        <Route path="/account">
          <Header/>
          <Account/>
        </Route>

        <Route path="/">  
          <Header/>        
          <Home/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
