import React,{useState,useEffect} from 'react'
import AddressComponent from './AddressComponent';
import './AddressList.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { db } from './firebase';
import { useStateValue } from './StateProvider';
import Address from './Address';
import {motion} from 'framer-motion';

function AddressList() {
    const [addressList, setAddressList] = useState([]);
    const [{user}, dispatch] =useStateValue();
    const [addAddress, setAddAddress] = useState(false);

    

    useEffect(() => {
       if(user){ 
           db.collection('users')
           .doc(user?.uid)
           .collection('addresses')
           .orderBy('pin','desc')
           .onSnapshot( snapshot=>(               
                   setAddressList(snapshot.docs.map(doc=>({
                        id:doc.id,
                        data:doc.data()
                   })))                    
           ))
       }
       else{
           setAddressList([]);
       }
    }, [user])
    return (
        <div>
            <div className='address__list'>
                {
                    addressList.map(address=>
                    <AddressComponent address={address}/>
                    )
                }
                <div className='add__newAddress' onClick={e=> setAddAddress(true)} >
                    
                    <AddCircleIcon  className='add_addressIcon' style={{fontSize:55}}/>
                </div>
            </div>
             
           {addAddress && <div className="address__form">
                <h4>Add a new delivery address</h4>
                <Address hideButton={true}/> 
                
           </div> }
        </div>
    )
}

export default AddressList
