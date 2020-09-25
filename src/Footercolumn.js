import React from 'react';
import { Link } from 'react-router-dom';
import './Footercolumn.css';

function Footercolumn({title,opt1,opt2,opt3}) {
    return (
        <div className='footer__column'>
            <h2>{title}</h2> 
            <p>{opt1}</p>
            <p>{opt2}</p>
            <p>{opt3}</p>
        </div>
    )
}

export default Footercolumn
