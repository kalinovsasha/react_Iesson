import React from 'react';
import Post from '../Posts/Posts';
import Profile from './profilePresent';
import {addPostAction, profileBufTextAction} from '../../redux/state'
import { StoreContext } from '../storeContext';


function ProfileContainer (props){
    // let avatar=props.state.profile.profInfo.ava;
    // let post = props.state.profile.posts.map((p)=><Post mes={p.mes} ava={p.ava}/>); // Переделывание поста в реакт объект для дальнейшего вывода
    // let send = ()=> props.dispatch(addPostAction()); // Вывод поста по кнопке
    // let textareaChange =(textarea)=>props.dispatch(profileBufTextAction(textarea));
    // let textareaValue = props.state.profile.newPost;
    
    return(
        <StoreContext.Consumer>
            {
                (store)=>{
                     let state =store.getState();
                     console.log(store.getState());
                     let avatar=state.profile.profInfo.ava;
                     let post = state.profile.posts.map((p)=><Post mes={p.mes} ava={p.ava}/>); // Переделывание поста в реакт объект для дальнейшего вывода
                     let send = ()=> store.dispatch(addPostAction()); // Вывод поста по кнопке
                    let textareaChange =(textarea)=>store.dispatch(profileBufTextAction(textarea));
                     let textareaValue = state.profile.newPost;
                    return <Profile profInfo={state.profile.profInfo} textareaChange={textareaChange} send={send}  post={post} avatar={avatar} textareaValue={textareaValue}/>
                }          
            }

        </StoreContext.Consumer>
        
        

    );
}

export default ProfileContainer;

//<Profile profInfo={props.state.profile.profInfo} textareaChange={textareaChange} send={send}  post={post} avatar={avatar} textareaValue={textareaValue}/>