import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state'


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


serviceWorker.unregister();





