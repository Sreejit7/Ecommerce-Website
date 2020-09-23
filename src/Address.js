import React,{useState,useEffect} from 'react';
import './Address.css';
import {db} from './firebase';
import {useStateValue} from './StateProvider';

function Address(deliveryPage) {

    const [{ cart, user }, dispatch] = useStateValue();
    const [line1, setLine1] = useState('');
    const [line2, setLine2] = useState('');
    const [line3, setLine3] = useState('');
    const [city, setCity] = useState('');
    const [pin, setPin] = useState('');
    const [landmark, setLandmark] = useState('');
    const [loadAddress, setLoadAddress] = useState(false);
    const handleAddress=e=>{
        e.preventDefault();
        db.collection('users')
          .doc(user?.uid)
          .collection('addresses')
          .doc(pin)
          .set({
              line1:line1,
              line2:line2,
              line3:line3,
              city:city,
              pin:pin,              
              landmark:landmark
           })
        setLoadAddress(true);   
    }

    return (
        <div className='payment__address'>
            <h4>{loadAddress?"Your order will be delivered to:":"Enter your delivery address here"}</h4>
            { (!loadAddress) &&(deliveryPage) && (
            <form>
                
                <div className="delivery__address__input">
                
                    <p>Address Line 1</p>
                    <input type="text" value={line1} onChange={e=> setLine1(e.target.value)}/>
                    <p>Address Line 2</p>
                    <input type="text" value={line2} onChange={e=> setLine2(e.target.value)}/>
                    <p>Address Line 3</p>
                    <input type="text" value={line3} onChange={e=> setLine3(e.target.value)} />
                </div>
                <div  className="delivery__address__input">
                    <p>City/Town</p>
                    <input type="text" value={city} onChange={e=> setCity(e.target.value)}/>
                    <p>Pin Code</p>
                    <input type="number" value={pin} onChange={e=> setPin(e.target.value)}/>
                    <p>Landmark</p>
                    <input type="text" value={landmark} onChange={e=> setLandmark(e.target.value)}/>
                    
                </div>
                <button onClick={handleAddress}>Save Address</button>
            </form>
        )}
        {(loadAddress) && (deliveryPage) && (
            <div className='delivery__address__input'>
                <p>{line1}</p> <p>{pin}</p>
                <p>{line2}</p>  <p>{city}</p>
                <p>{line3}</p>  <p>{landmark}</p>
                <button className="change__address" onClick={ e=> setLoadAddress(false)}>Change Address</button>
            </div>
        )}
    </div>
    )
}

export default Address
