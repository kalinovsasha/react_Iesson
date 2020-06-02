import React from 'react';
import "./Profile.css";
import head from '../../img/head.jpg';
import Post from '../Posts/Posts';
import {addPostAction, profileBufTextAction} from '../../redux/state'


function Profile (props){
    let avatar=props.state.profInfo.ava;
    let post = props.state.posts.map((p)=><Post mes={p.mes} ava={p.ava}/>); // Переделывание поста в реакт объект для дальнейшего вывода
    let textarea = React.createRef(); //аналог getElementById, только мы создаем ссылку на объект
    
    let send = ()=> props.dispatch(addPostAction()); // Вывод поста по кнопке
    let textareaChange =()=>props.dispatch(profileBufTextAction(textarea.current.value));

    return(
        
        <div className="Profile_Main">
            <div className="Profile_cont"><img className="Profile_logo" src={head} alt="head" /></div>
            <div className="Profile_user">
                <div className="Profile_avatar"> <img className="Profile_ava" src={avatar} alt="head" /></div>
                <div className="Profile_info">
                    <ul>
                        <li>Имя : {props.state.profInfo.name}</li>
                        <li>Дата рождения: {props.state.profInfo.birthday}</li>
                        <li>Страна: {props.state.profInfo.country}</li>
                        <li>Образование: {props.state.profInfo.educate}</li>
                        <li>Веб сайт: {props.state.profInfo.website}</li>
                    </ul>
                </div>
            </div>
            <div className="Posts">
            <textarea  onChange={textareaChange} value={props.mes} ref={textarea} className="Profile_postText" placeholder="Enter your text" ></textarea>
            <div><button className="Profile_SendMessage" onClick={send} >Send</button> </div>
            </div>
            <br /><br />
             {/*Вывод сообщений  из пропсов */ }
            {post}
             
        </div>

    );
}

export default Profile;