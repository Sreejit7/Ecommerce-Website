import React,{useState} from 'react'
import './ProductUpload.css';
import {motion} from 'framer-motion';
import {db,storage} from './firebase';
import {Link} from 'react-router-dom';
import Product from './Product';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

function ProductUpload() {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [price, setPrice] = useState(null);
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [productload, setProductload] = useState(false);
    
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
        setProductload(true);
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
            
            <div className='product__headline'>
           
                <h1>Sell Your </h1>
                <h1>Amazing</h1>
                <h1>Homemade </h1>
                <h1>Products</h1>
                <h1> With Us.</h1>
                <Link to ='/'>
                    <img className='product__uploadLogo' 
                        src='https://lh3.googleusercontent.com/hgPEA4dzC3OedtHHjBqK55U8XitFLOhkfE0UKG8tJ9oS-Np5Z-R3vi8p1Y1_0mffNMR-mQieRJy8pRYvSvgpMvQGEOBVTKMa7j2Tsz-ZVmyoe4JSY0MEnQ6hCijg505QiU--U2-4B4EL-hXtreAAcNjy1LSLBNLt1_LP4_o8r8z4hGojBggRaPOl-_CE9y1efHT3GPLrb-IRr9D29_6328HGl1kQeHslDY--nTllzrXorVjqMjoyiqR0OaXwrDtw2JPzYR5QBm4oj4vWILlkuFkY0DqX6RPHVlmtPBHYkUD5lepU9HxDCwUuQNmaAuC_Tmx5t0PhQ42RmKjkafHj_HO5Ib3-b2exwFjWWWIJ3LduabvnlP7KlU166xyXS7R9_7T9EjJLoBRpzT_gE1mxy27WKRAam6H6QZgXGVZ3IgIsS5YBwqLOgJP0zG0aBEf00iU3uQuMT-0y13LZQrCKMESCjc4sAQzpsjZZ-MoUp1FMNk5Crn1OYtXdsYl_ECz6U9-cNKjVP0ybwvSFH2VWTqS7ApyHClauPFH3TrtZCAvkHtxrsZtHchtNe5LvtP7DP1fAjMV5BFtzLcJwddsvSWSGLp_FOAw_n2czngUzmtgxLXn6Lm-GG88M5AD9aXHhA3JAeKbbBkT31rEd_0k069IrsikMiRrUA5LDKWgz6nrBiL234KO3fqaM8DuY=w827-h302-no?authuser=0'
                        alt=''
                    />
                </Link>
            </div>
            
           {!productload && ( <div className='product__form'>
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
                <motion.button 
                    type='submit' 
                    onClick={()=>{handleProduct();handleDetails();}}
                    whileHover={{backgroundColor:"orange"}}
                    whileTap={{opacity:0.2,scale:0.9}}>
                    Add Product
                </motion.button>
            </div>
           )}

           {productload && (<div className='product__component'>
               <div className='product__uploadIndicator'>
                <DoneOutlineIcon fontSize="large"/>
                <h1>Product has been added!</h1>
                </div>
                <Product
                id={productID}
                title={name}
                price={price}
                rating={0}
                image={imageUrl}
                addingPage={true}
                />
            </div> )}
        </div>
    )
}

export default ProductUpload
