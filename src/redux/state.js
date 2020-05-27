import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';


export let store={

  state :{
    profInfo : {birthday:"03.01.1994",country:"Belarus",educate:"GRSU grodno", website:"vk.com/kalinovsasha", ava:"https://sun9-56.userapi.com/c836234/v836234894/5aedd/--93nsktQsI.jpg"},
    posts:[{mes:"Hello", ava:"https://yt3.ggpht.com/a/AATXAJwcRz4MbWjSrTeWdpzfyVsPC97gRqnc_YC-qQ=s900-c-k-c0xffffffff-no-rj-mo"},{mes:"My name is sasha"},{mes:"Как дела?"}],
    dialogsFriendList:[{id:"Dialogs/1",name:"Вася"},{id:"Dialogs/2",name:"Serje"},{id:"Dialogs/3",name:"Петя"},{id:"Dialogs/4",name:"Коля"},{id:"Dialogs/5",name:"Volodya"}],
},

dispatch(action){
    if (action.type==="ADD") {
      store.state.posts.push({mes:action.txt});
    
      ReactDOM.render(
          <React.StrictMode>
            <App profInfo={store.state.profInfo} posts={store.state.posts} dialogsFriendList={store.state.dialogsFriendList} addPost={addPost} dispatch={store.dispatch}/>
            
          </React.StrictMode>,
          document.getElementById('root')
        );     
    }
 


}




}

export function addPost (txt){
    
    store.state.posts.push({mes:txt});
    
    ReactDOM.render(
        <React.StrictMode>
          <App profInfo={store.state.profInfo} posts={store.state.posts} dialogsFriendList={store.state.dialogsFriendList} addPost={addPost}/>
          
        </React.StrictMode>,
        document.getElementById('root')
      );
}

export default store;