

export let store={
  state :{
    profInfo : {birthday:"03.01.1994",country:"Belarus",educate:"GRSU grodno", website:"vk.com/kalinovsasha", ava:"https://sun9-56.userapi.com/c836234/v836234894/5aedd/--93nsktQsI.jpg"},
    posts:[{mes:"Hello", ava:"https://yt3.ggpht.com/a/AATXAJwcRz4MbWjSrTeWdpzfyVsPC97gRqnc_YC-qQ=s900-c-k-c0xffffffff-no-rj-mo"},{mes:"My name is sasha"},{mes:"Как дела?"}],
    dialogsFriendList:[{id:"Dialogs/1",name:"Вася"},{id:"Dialogs/2",name:"Serje"},{id:"Dialogs/3",name:"Петя"},{id:"Dialogs/4",name:"Коля"},{id:"Dialogs/5",name:"Volodya"}],

    newPost:{mes:"", ava:"https://yt3.ggpht.com/a/AATXAJwcRz4MbWjSrTeWdpzfyVsPC97gRqnc_YC-qQ=s900-c-k-c0xffffffff-no-rj-mo"},
},

  renderDom(store){
    throw(Error);
  },

  subscribeRender(subscriber){
    store.renderDom=subscriber;
  },

  dispatch(action){
    switch (action.type) {
      case "ADD":
        store.state.posts.push({mes:store.state.newPost.mes, ava:"https://sun9-56.userapi.com/c836234/v836234894/5aedd/--93nsktQsI.jpg"});
        store.renderDom(store); 
        break;
      case "profileBufText":
        store.state.newPost={mes:action.txt, ava:"https://sun9-56.userapi.com/c836234/v836234894/5aedd/--93nsktQsI.jpg"};
        store.renderDom(store); 
        break;
      case "getNewpost":
        return this.state.newPost.mes; 
      
    
    default:
      alert( "Нет таких значений" );
    }
  }


}

export default store;