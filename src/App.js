import React from 'react';

import './App.css';
import Header from './components/Header/header';
import LeftMenu from './components/LeftMenu/leftMenu';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';




function App(props) {
  return (
    
    <BrowserRouter>
    <div className="App">
      <Header/>
      <div className="Main">
          <LeftMenu/>
          <Switch>
          <Route exact path="/" render={()=><Profile prof={props.profInfo} post={props.posts}  dispatch={props.dispatch} /> }/> {/*Передача компонента через  component     */ }
          <Route  path="/profile"> {/*Передача компонента внутри тега Route    */ }
          <Profile prof={props.profInfo} post={props.posts}  dispatch={props.dispatch}/>
          </Route>
          <Route exact path="/Dialogs" component={()=><Dialogs friends={props.dialogsFriendList}/> }/> {/*Передача компонента через  component     */ }
          </Switch>
    </div>
    </div>
    </BrowserRouter>
  );
}


export default App;

