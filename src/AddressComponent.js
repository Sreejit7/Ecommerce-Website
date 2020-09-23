import React from 'react';
import './AddressComponent.css';
import {db} from './firebase';
import { useStateValue } from './StateProvider';

function AddressComponent({address}) {
    const [{user}] = useStateValue();
    const deleteAddress=e=>{
        e.preventDefault();
        db.collection('users')
        .doc(user?.uid)
        .collection('addresses')
        .doc(address.data.pin)
        .delete(); 
        
    }

    return (
        <div className='address__item'>
        <p> {address.data.line1} </p> <p> {address.data.city} </p>
        <p> {address.data.line2} </p> <p> {address.data.pin} </p>
        <p> {address.data.line3} </p> <p> {address.data.landmark} </p>
        <button className='delete__address' onClick={deleteAddress}>Delete Address</button>
        </div>
    )
}

export default AddressComponent
