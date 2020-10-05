import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Sidebar from './Sidebar';
import { Link } from "react-router-dom";
import {useStateValue} from './StateProvider';
import { auth } from "./firebase";
function Header() {
  const [{cart,user}, dispatch] =useStateValue();
  const handleAuthentication=()=>{
    auth.signOut();
  }
  return (
    <div className="header">
      <Sidebar/>
      <Link to="/">
        <img className="header_logo" 
        src="https://lh3.googleusercontent.com/lj9wFhkPaidgG_UePD64pcb6oHNVtbs004c77HICzuekjCnniAi1wkQGcafvdgtQoT71thX9v0UJb-dHacyF7IwKWdxGDUKMxcc7wA0VecmRsjQP4l46c37EawIVNAfp4S8RXdqiLSu6_QtZp-rztSOqG64V6QGpXq924X-JiYr5B4vSjn8g8QLftfZG3riCIqNRwSyhT6o9RIKOos06HITGu1eiehejOwCikiGqarPFIW2DG7Xe5ZfvNtIOcbI6fyRQ12fzqkE25TWOlKCO2NBsXNNtglfPgiG92sEGUnToH1rcUtz8ZwndrSG6LSNZ7GpMeITwZClSX2onQMysc6-maYKje2JVeZB35PEaJCB-jHztDh_IL_UG5CczxDasN6n2TtTJOyN9vuQQXC1-nPiapKY6M5A7AkiIqn0QausWC2LVgOhwqogcc1V_GlXfReLhN76SHQuRyq6S0Y_6GU2dRlITsWUNQ9jWgydu9S22z1ATSfFj6sAeKsGRRp436kr_vG3lwvzph-6--rZUL4GXbxQ8Un4AOR5XYukcWcYT4nH8p76T5qPb0GbFFm1qaeICg2zhujM6aN3S0C7y6quJPrGy266_442QeNiIjSS7p0c5qzWhNqRqVeYv_74Y3rHpW15wwqTrYlF5XYxDi6JcIuaE3c7cYTKQE38jm5tmpW2pl-ZZFS8GIFBx=w930-h268-no?authuser=0" 
        alt=""
        />
      </Link>
      
      <div className="header_search">
        <input className="header_input" type="text" />
        {/*Logo*/}
        <SearchIcon className="header_search_icon"/>
      </div>
      <div className="header_nav">
      <Link to={!user && "/login"}>
        <div onClick={handleAuthentication} className="header_option">
            <span className='option_line_one'>
                Hello, {user?user.email:"Guest"}
            </span>
            <span className='option_line_two'>                
                  {user?"Sign Out":"Sign In"}             
            </span>
        </div>
        </Link>
        <Link to='/orders'>
          <div className="header_option">
              <span className='option_line_one'>
                  Your 
              </span>
              <span className='option_line_two'>
                  Orders
              </span>
          </div>
        </Link>
        <Link to ='/account'>
          <div className="header_option">
              <span className='option_line_one'>
                  Your
              </span>
              <span className='option_line_two'>
                  Account
              </span>
          </div>
        </Link>
        <Link to="/cart">
          <div className="add_cart">          
            <AddShoppingCartIcon/>          
          <span className= "option_line_two cart_items">{cart?.length}</span>          
          </div>
          </Link>

      </div>
    </div>
  );
}

export default Header;
