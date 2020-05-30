import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store,} from './redux/state'


let renderDom =(props)=>{
ReactDOM.render(
  <React.StrictMode>
    <App state={props.state}  dispatch={props.dispatch.bind(store)} />
    
  </React.StrictMode>,
  document.getElementById('root')
);
}
store.subscribeRender(renderDom);
renderDom(store);


serviceWorker.unregister();
