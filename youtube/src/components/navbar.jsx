/* eslint-disable react/prop-types */
import { Icon } from '@iconify-icon/react';
import { Link } from 'react-router-dom';

import './../styles/navbar.css';

export default function Navbar({setSidebar}) {
    return <>
        <nav className=" flex-dev" >
            <div className="nav-left flex-dev">
            <Icon icon="material-symbols:menu" width="30" height="30"  style={{color: 'gray',cursor : "pointer"}} className="menu-icon" onClick={()=> setSidebar(prev=> prev === false ? true : false)  }/>
          <Link to="/"><Icon icon="logos:youtube" width="90" height="48" style={{cursor : "pointer"}} id="logo"/></Link>  

            </div>
            <div className="nav-middle flex-dev">
            <div className="search-box flex-dev">  
             <input type="text" placeholder=" search "/>
                <Icon icon="material-symbols:search" width="25px" height="25px" style={{cursor : "pointer"}} /> 
                </div>
             
            </div>
            <div className="nav-right flex-dev">
            <Icon icon="ri:video-upload-line" width="25" height="25"  className="right-icons"/>
            <Icon icon="tdesign:app" width="25" height="25"  className="right-icons"/>
            <Icon icon="mingcute:notification-line" width="25" height="25"  className="right-icons"/>
            <img src="https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D" alt="profile-pic" className="profile-img right-icons"/>

            </div>
        </nav>

        


    </>
    
}