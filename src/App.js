import React from 'react';

import './App.css';
import Header from './components/Header/header';
import LeftMenu from './components/LeftMenu/leftMenu';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Dialogs from './components/Dialogs/Dialogs';
import store from './redux/state';



function App(props) {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <div className="Main">
          <LeftMenu/>
          <Switch>
          <Route exact path="/" component={()=><Profile profInfo={props.profInfo} posts={props.posts} bufPost={props.bufPost} addPost={props.addPost.bind(store)} newPost={props.newPost.bind(store)}/> }/> {/*Передача компонента через  component     */ }
          <Route  path="/profile"> {/*Передача компонента внутри тега Route    */ }
          <Profile profInfo={props.profInfo} posts={props.posts} bufPost={props.bufPost} addPost={props.addPost.bind(store)} newPost={props.newPost.bind(store)}/>
          </Route>
          <Route exact path="/Dialogs" component={()=><Dialogs friends={props.dialogsFriendList}/> }/> {/*Передача компонента через  component     */ }
          </Switch>
    </div>
    </div>
    </BrowserRouter>
  );
}


export default App;

