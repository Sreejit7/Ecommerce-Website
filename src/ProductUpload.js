import React,{useState} from 'react'
import './ProductUpload.css';
import {db,storage} from './firebase';
function ProductUpload() {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState(null);
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    
    const productID = Math.random().toString(36).substring(2,9);
    const handleImageInput = e =>{
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }        
    };

    const handleProduct = () => {
        
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          snapshot => {
           
          },
          error => {
            console.log(error);
          },
          () => {
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then(url => {
                setImageUrl(url);
              });
          }
        );
        
      };      
    const handleDetails = () => {        
        db.collection('products')
        .doc(productID)
        .set({
            productID:productID,
            name:name,
            desc:desc,
            price:price,
            imageUrl:imageUrl

        })  
      };
    
    
    return (
        <div className='product__upload'>
            <div className='product__form'>
                <form>                
                    <h2>Upload your product details</h2>
                    <div className='productUpload__row'>
                        <p>Product Name</p>
                        <input type='text' className='product__name' onChange={e=> setName(e.target.value)}></input>
                    </div>
                    <div className='productUpload__row'>
                        <p>Product Description</p>
                        <input className='product__desc' type='text' onChange={e=> setDesc(e.target.value)}></input>
                    </div>
                    <div className='productUpload__row'>
                        <p>Product Price (INR)</p>
                        <input type='number' onChange={e=> setPrice(e.target.value)}></input>
                    </div>
                    <div className='productUpload__row'>
                        <p>Upload a suitable image for the product</p>
                        <input type='file' onChange={handleImageInput}></input>
                    </div>
                    <div className='productUpload__row'>
                    </div>                    
                </form>
                <button type='submit' onClick={()=>{handleProduct();handleDetails();}}>Add Product</button>
            </div>
        </div>
    )
}

export default ProductUpload
