//import {store} from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'

let renderDom =(props)=>{
ReactDOM.render(
  <React.StrictMode>
    <App state={props.getState()}  dispatch={props.dispatch.bind(store)} />
    
  </React.StrictMode>,
  document.getElementById('root')
);
}


//store.subscribeRender(renderDom); //До внедрения Redux
store.subscribe(()=>renderDom(store));
renderDom(store);


serviceWorker.unregister();
