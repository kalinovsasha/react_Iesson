import React from 'react';
import "./Header.css"
import logo from './logo.png';
const Header = ()=>{
    return(
       
      <header className="App-header">
        <img className="header_logo" src={logo} alt="logo" />
        
      </header>
    );
}

export default Header;