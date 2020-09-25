import React from 'react'
import './ProductUpload.css';
import {storage} from 'firebase';
function ProductUpload() {
    return (
        <div className='product__upload'>
            <div className='product__form'>
                <form>                
                    <h2>Upload your product details</h2>
                    <div className='productUpload__row'>
                        <p>Product Name</p>
                        <input type='text' className='product__name'></input>
                    </div>
                    <div className='productUpload__row'>
                        <p>Product Description</p>
                        <input className='product__desc' type='text'></input>
                    </div>
                    <div className='productUpload__row'>
                        <p>Product Price (INR)</p>
                        <input type='number'></input>
                    </div>
                    <div className='productUpload__row'>
                        <p>Upload a suitable image for the product</p>
                        <input type='file'></input>
                    </div>
                    <div className='productUpload__row'>
                        <button type='submit'>Add Product</button>
                    </div>
                    
                </form>
               
            </div>
        </div>
    )
}

export default ProductUpload
