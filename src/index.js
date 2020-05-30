import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
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
=======
import {store,} from './redux/state'


let renderDom =(store)=>{
ReactDOM.render(
  <React.StrictMode>
    <App profInfo={store.state.profInfo} posts={store.state.posts} dialogsFriendList={store.state.dialogsFriendList}  dispatch={store.dispatch.bind(store)} />
    
  </React.StrictMode>,
  document.getElementById('root')
);
}
store.subscribeRender(renderDom);
renderDom(store);

>>>>>>> test

serviceWorker.unregister();





