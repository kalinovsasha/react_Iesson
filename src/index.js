import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*Данные передаваемые через пропсы в компоненты   */
let profInfo = {birthday:"03.01.1994",country:"Belarus",educate:"GRSU grodno", website:"vk.com/kalinovsasha", ava:"https://yt3.ggpht.com/a/AATXAJwcRz4MbWjSrTeWdpzfyVsPC97gRqnc_YC-qQ=s900-c-k-c0xffffffff-no-rj-mo"};
let posts=[{mes:"Hello", ava:"https://yt3.ggpht.com/a/AATXAJwcRz4MbWjSrTeWdpzfyVsPC97gRqnc_YC-qQ=s900-c-k-c0xffffffff-no-rj-mo"},{mes:"My name is sasha"},{mes:"Как дела?"}];
let dialogsFriendList=[{id:"Dialogs/1",name:"Вася"},{id:"Dialogs/2",name:"Serje"},{id:"Dialogs/3",name:"Петя"},{id:"Dialogs/4",name:"Коля"},{id:"Dialogs/5",name:"Volodya"}];

ReactDOM.render(
  <React.StrictMode>
    <App profInfo={profInfo} posts={posts} dialogsFriendList={dialogsFriendList}/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
