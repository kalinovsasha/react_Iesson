//import {store} from './redux/state'
import { BrowserRouter} from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'
import { Provider } from 'react-redux';
import { StoreContext } from './components/storeContext';

let renderDom =(props)=>{
ReactDOM.render(
  
  <React.StrictMode>
    <BrowserRouter>
        <StoreContext.Provider value={store}>
          <App state={props.getState()}  dispatch={props.dispatch.bind(store)} />
        </StoreContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
}


//store.subscribeRender(renderDom); //До внедрения Redux
store.subscribe(()=>renderDom(store));
renderDom(store);


serviceWorker.unregister();
