import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store,addPost} from './redux/state'


/*Данные передаем из state через пропсы в компоненты   */

ReactDOM.render(
  <React.StrictMode>
    <App profInfo={store.state.profInfo} posts={store.state.posts} dialogsFriendList={store.state.dialogsFriendList} addPost={addPost} dispatch={store.dispatch} />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
