import React,{useState} from 'react';
import './Sidebar.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-router-dom';
import {sidebarItems} from './SidebarItems';
function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = ()=>{
        setSidebar(!sidebar);
    }
    return (
        <div className='sidebar'>        
        <div >
            <Link to="#" className='sidebar__icon'>
                <ReorderIcon onClick={showSidebar} style={{color:'#fff'}}/>
            </Link>
        </div>
        <nav className={sidebar?'sidebar__menu active':'sidebar__menu'}>
            <ul className='sidebar__items' onClick={showSidebar}>                
                <li className='sidebar__toggle'>
                    <Link to='#' className='sidebar__icon'>
                        <CloseIcon fontSize='large' style={{color:'#fff'}}/>
                    </Link>
                    <Link to="/">
                        <img className="header_logo" 
                        src="https://lh3.googleusercontent.com/lj9wFhkPaidgG_UePD64pcb6oHNVtbs004c77HICzuekjCnniAi1wkQGcafvdgtQoT71thX9v0UJb-dHacyF7IwKWdxGDUKMxcc7wA0VecmRsjQP4l46c37EawIVNAfp4S8RXdqiLSu6_QtZp-rztSOqG64V6QGpXq924X-JiYr5B4vSjn8g8QLftfZG3riCIqNRwSyhT6o9RIKOos06HITGu1eiehejOwCikiGqarPFIW2DG7Xe5ZfvNtIOcbI6fyRQ12fzqkE25TWOlKCO2NBsXNNtglfPgiG92sEGUnToH1rcUtz8ZwndrSG6LSNZ7GpMeITwZClSX2onQMysc6-maYKje2JVeZB35PEaJCB-jHztDh_IL_UG5CczxDasN6n2TtTJOyN9vuQQXC1-nPiapKY6M5A7AkiIqn0QausWC2LVgOhwqogcc1V_GlXfReLhN76SHQuRyq6S0Y_6GU2dRlITsWUNQ9jWgydu9S22z1ATSfFj6sAeKsGRRp436kr_vG3lwvzph-6--rZUL4GXbxQ8Un4AOR5XYukcWcYT4nH8p76T5qPb0GbFFm1qaeICg2zhujM6aN3S0C7y6quJPrGy266_442QeNiIjSS7p0c5qzWhNqRqVeYv_74Y3rHpW15wwqTrYlF5XYxDi6JcIuaE3c7cYTKQE38jm5tmpW2pl-ZZFS8GIFBx=w930-h268-no?authuser=0" 
                        alt=""
                        />
                    </Link>
                </li>
                {sidebarItems.map((item,index) =>{
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
        </div>
    )
}

export default Sidebar
