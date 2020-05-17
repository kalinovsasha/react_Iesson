import React from 'react';

import './App.css';
import Header from './components/Header/header';
import LeftMenu from './components/LeftMenu/leftMenu';
import Profile from './components/Profile/Profile';
import { Router, BrowserRouter, Route, Switch } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>

      <div className="Main">
          <LeftMenu/>
          <Switch>
          <Route path="/ " component={Profile}/>
          <Route  path="/profile" component={Profile}/>
          <Route exact path="/Dialogs" component={Dialogs}/>
          </Switch>
    </div>
    </div>
    </BrowserRouter>
  );
}


export default App;

