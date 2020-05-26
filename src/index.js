//import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import {Render} from './render'
import store from './redux/state'




//Render(store.getState(),store.addPost,store.newPost);
Render(store);



serviceWorker.unregister();


/*
function Render(state,addPost,newPost) {
    ReactDOM.render(
        <React.StrictMode>
          <App profInfo={state.profInfo} posts={state.posts} bufPost={state.bufPost}  dialogsFriendList={state.dialogsFriendList} addPost={addPost} newPost={newPost} /> 
        </React.StrictMode>,
        document.getElementById('root')
      );
}
*/


