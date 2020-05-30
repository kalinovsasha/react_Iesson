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
          <Route exact path="/" render={()=><Profile prof={props.state.profInfo} post={props.state.posts}  dispatch={props.dispatch}   /> }/> {/*Передача компонента через  render     */ }
          <Route  path="/profile"> {/*Передача компонента внутри тега Route    */ }
          <Profile prof={props.state.profInfo} post={props.state.posts}  dispatch={props.dispatch}/>
          </Route>
          <Route exact path="/Dialogs" render={()=><Dialogs friends={props.state.dialogsFriendList} messages={props.state.messages} dispatch={props.dispatch}/> }/>
          </Switch>
    </div>
    </div>
    </BrowserRouter>
  );
}


export default App;

