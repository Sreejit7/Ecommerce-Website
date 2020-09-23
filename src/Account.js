import React from 'react';
import './Account.css';
import { useStateValue } from './StateProvider';
import Orders from './Orders';
import AddressList from './AddressList';
import {motion} from 'framer-motion';

function Account() {
    const [{user}] = useStateValue();
    return (
        <div className='account__page'>
            <h1>Hello {user?user?.email:"Guest"}, welcome</h1>
            <h2>Your Saved Addresses</h2>
            <AddressList/>
            <h2>Here are your order details</h2>
            <Orders/>
        </div>  
    )
}

export default Account
