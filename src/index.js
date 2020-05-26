import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state'



function Render(store) {
  let state=store.getState();
    ReactDOM.render(
        <React.StrictMode>
          <App profInfo={state.profInfo} posts={state.posts} bufPost={state.bufPost}  dialogsFriendList={state.dialogsFriendList} addPost={store.addPost} newPost={store.newPost} /> 
        </React.StrictMode>,
        document.getElementById('root')
      );
}


//Render
Render(store);
//Передаем функцию Render
store.subscribeRender(Render);

serviceWorker.unregister();





