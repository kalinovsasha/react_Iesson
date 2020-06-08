import React from 'react';
import './App.css';
import Header from './components/Header/header';
import LeftMenu from './components/LeftMenu/leftMenu';
import Profile from './components/Profile/Profile';
import {Route, Switch } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import Profile2 from './components/Profile/profileContainer';



function App(props) {
  return (
    <div className="App">
      <Header/>
      <div className="Main">
          <LeftMenu/>
          <Switch>
          <Route exact path="/" render={()=><Profile state={props.state.profile}  dispatch={props.dispatch}   /> }/> {/*Передача компонента через  render     */ }
          <Route  path="/profile"> {/*Передача компонента внутри тега Route    */ }
          <Profile state={props.state.profile}  dispatch={props.dispatch}/>
          </Route>
          <Route  path="/prof"> {/*Передача компонента внутри тега Route    */ }
          <Profile2 state={props.state}  dispatch={props.dispatch}/>
          </Route>
          <Route path="/Dialogs" render={()=><Dialogs state={props.state.dialogs} dispatch={props.dispatch}/> }/>
          </Switch>
    </div>
    </div>
   
  );
}


export default App;

