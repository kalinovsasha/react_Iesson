import React from 'react';
import Post from '../Posts/Posts';
import Profile from './profilePresent';
import {addPostAction, profileBufTextAction} from '../../redux/state'
//import { StoreContext } from '../storeContext';
import { connect } from 'react-redux';

let mapStateToProps=(state)=>{
    return{
        profInfo:state.profile.profInfo,
        post : state.profile.posts.map((p)=><Post mes={p.mes} ava={p.ava}/>),
        textareaValue : state.profile.newPost,
        avatar:state.profile.profInfo.ava,


    }
};
let mapDispatchToProps=(dispatch)=>{
    return{
         send : ()=> dispatch(addPostAction()),    // Вывод поста по кнопке
         textareaChange :(textarea)=>dispatch(profileBufTextAction(textarea)),
    }
};
const ProfileContainer = connect(mapStateToProps,mapDispatchToProps)(Profile);
export default ProfileContainer;


// function ProfileContainer (props){
//     return(
//         <StoreContext.Consumer>
//             {
//                 (store)=>{
//                      let state =store.getState();
//                      let avatar=state.profile.profInfo.ava;
//                      let post = state.profile.posts.map((p)=><Post mes={p.mes} ava={p.ava}/>); // Переделывание поста в реакт объект для дальнейшего вывода
//                      let send = ()=> store.dispatch(addPostAction()); // Вывод поста по кнопке
//                     let textareaChange =(textarea)=>store.dispatch(profileBufTextAction(textarea));
//                      let textareaValue = state.profile.newPost;
//                     return <Profile profInfo={state.profile.profInfo} textareaChange={textareaChange} send={send}  post={post} avatar={avatar} textareaValue={textareaValue}/>
//                 }          
//             }
//         </StoreContext.Consumer>     
//     );
// }

// //export default ProfileContainer;