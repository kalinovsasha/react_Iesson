import React from 'react';
import './App.css';
import Header from './components/Header/header';
import LeftMenu from './components/LeftMenu/leftMenu';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Header/>
      
    <div className="Main">
    <LeftMenu /> 
    <Profile />


    </div>

    </div>
  );
}


export default App;

