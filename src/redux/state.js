import {Render} from '../render'



let state ={
      profInfo : {birthday:"03.01.1994",country:"Belarus",educate:"GRSU grodno", website:"vk.com/kalinovsasha", ava:"https://sun9-56.userapi.com/c836234/v836234894/5aedd/--93nsktQsI.jpg"},
      posts:[{mes:"Hello", ava:"https://yt3.ggpht.com/a/AATXAJwcRz4MbWjSrTeWdpzfyVsPC97gRqnc_YC-qQ=s900-c-k-c0xffffffff-no-rj-mo"},{mes:"My name is sasha"},{mes:"Как дела?"}],
      bufPost:{mes:"",ava:"https://sun9-56.userapi.com/c836234/v836234894/5aedd/--93nsktQsI.jpg"},
      
      dialogsFriendList:[{id:"Dialogs/1",name:"Вася"},{id:"Dialogs/2",name:"Serje"},{id:"Dialogs/3",name:"Петя"},{id:"Dialogs/4",name:"Коля"},{id:"Dialogs/5",name:"Volodya"}],
};

//Сохрарнение набранного текста в newPost
export function newPost(txt){
  state.bufPost.mes=txt;
  console.log(state.bufPost.mes);
  Render(state,addPost,newPost);
}

//Добавление поста на стену, текст поста берется из newPost
export function addPost (){
    state.posts.push(state.bufPost);
    Render(state,addPost,newPost);
}

export default state;