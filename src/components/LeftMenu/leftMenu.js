import React from 'react';
import "./leftMenu.css"
import { NavLink, Link } from 'react-router-dom';
const LeftMenu = ()=>{
    return(
        <div className="LeftMenu">
        <nav className="Main_Nav">
            <ul>
                <li><Link to="/Profile">Profile</Link></li>
                <li><Link to='/Dialogs'>Dialogs</Link> </li>
                <li>Messages</li>
                <li>News</li>
                <li>Music</li>
                <li>Settings</li>
            </ul>
        </nav>
      </div>
    );
}
export default LeftMenu;