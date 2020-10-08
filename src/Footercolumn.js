import React from 'react';
import { Link } from 'react-router-dom';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import './Footercolumn.css';

export const Footercolumn = [
    {
        title:"About Us",
        opt1:"Who are we?",
        opt2:"Our ambition",
        opt3:"Privacy policies",
        cName:"footer__column"
    },
    {
        title:"Connect with us",
        opt1:"Facebook",
        icon1:<FacebookIcon/>,
        opt2:"Instagram",
        icon2:<InstagramIcon/>,
        opt3:"Twitter",
        icon3:<TwitterIcon/>,
        cName:"footer__column"
    },
    {
        title:"Sell with us",
        opt1:"Advertise your product",
        opt2:"Become a merchant",
        opt3:"Careers",
        cName:"footer__column"
    }
]
