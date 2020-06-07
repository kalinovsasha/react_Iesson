import { profileReducer } from "./profile-reducer";
import dialogReducer from "./dialogReducer";

const addMessage="addMessage";
const addPost = "ADD-POST";
const profileBufText="profileBufText";
const dialogbufMessage="dialogbufMessage";
const avaBich="https://yt3.ggpht.com/a/AATXAJwcRz4MbWjSrTeWdpzfyVsPC97gRqnc_YC-qQ=s900-c-k-c0xffffffff-no-rj-mo";

export let store={
  state :{
    profile:{
      profInfo : {name:"Alexander",birthday:"03.01.1994",country:"Belarus",educate:"GRSU grodno", website:"vk.com/kalinovsasha", ava:"https://sun9-56.userapi.com/c836234/v836234894/5aedd/--93nsktQsI.jpg"},
      posts:[{mes:"Hello", ava:"https://yt3.ggpht.com/a/AATXAJwcRz4MbWjSrTeWdpzfyVsPC97gRqnc_YC-qQ=s900-c-k-c0xffffffff-no-rj-mo"},{mes:"My name is sasha"},{mes:"Как дела?"}],
      newPost:{mes:"", ava:"https://yt3.ggpht.com/a/AATXAJwcRz4MbWjSrTeWdpzfyVsPC97gRqnc_YC-qQ=s900-c-k-c0xffffffff-no-rj-mo"},
    },
  dialogs:{  
    dialogsFriendList:[{id:"Dialogs/1",name:"Вася"},{id:"Dialogs/2",name:"Serje"},{id:"Dialogs/3",name:"Петя"},{id:"Dialogs/4",name:"Коля"},{id:"Dialogs/5",name:"Volodya"}],
    bufMessage:{id:"1", nick:"User", mes:"", ava:"" },
    messages:[{id:"1", nick:"User", mes:"privet", ava:avaBich },{id:"2", nick:"User", mes:"kak_dela", ava:avaBich },{id:"3", nick:"User", mes:"ti gde", ava:avaBich },],
  }, 
},

  renderDom(store){
    throw(Error);
  },

  subscribeRender(subscriber){
    store.renderDom=subscriber;
  },

  dispatch(action){
    this.state.profile=profileReducer(store.state.profile,action);
    this.state.dialogs=dialogReducer(store.state.dialogs,action);
    this.renderDom(store); 
  }

}

export function addPostAction(){
  return {type:addPost}
};
export function profileBufTextAction(txt){
  return {type:profileBufText,mes:txt,ava:"https://sun9-56.userapi.com/c836234/v836234894/5aedd/--93nsktQsI.jpg"}
}
export function dialogbufMessagetAction(txt){
  return {type:dialogbufMessage,id:store.state.dialogs.messages.length,nick:store.state.profile.profInfo.name, mes:txt,ava:"https://sun9-56.userapi.com/c836234/v836234894/5aedd/--93nsktQsI.jpg"}
} 


export default store;