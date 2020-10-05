import React from 'react';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

export const sidebarItems = [
    {
        title:'Home',
        path:'/',
        icon: <HomeIcon/>,
        cName:'sidebar__text'
    },
    {
        title:'Account',
        path:'/account',
        icon: <AccountBoxIcon/>,
        cName:'sidebar__text'
    },
    {
        title:'Feedback',
        path:'/feedback',
        icon: <FeedbackIcon/>,
        cName:'sidebar__text'
    },
    {
        title:'Contact Support',
        path:'/support',
        icon: <ContactSupportIcon/>,
        cName:'sidebar__text'
    },
    
]