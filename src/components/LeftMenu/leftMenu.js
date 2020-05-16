import React from 'react';
import "./leftMenu.css"
const LeftMenu = ()=>{
    return(
        <div className="LeftMenu">
        <nav className="Main_Nav">
            <ul>
                <li>Profile</li>
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