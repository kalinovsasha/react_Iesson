//import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state'
import {addPost, newPost} from './redux/state'
import {Render} from './render'


Render(state,addPost,newPost);




/*
ReactDOM.render(
  <React.StrictMode>
    <App profInfo={state.profInfo} posts={state.posts} bufPost={state.bufPost}  dialogsFriendList={state.dialogsFriendList} addPost={addPost} newPost={newPost} />
    
  </React.StrictMode>,
  document.getElementById('root')
);
*/

serviceWorker.unregister();
