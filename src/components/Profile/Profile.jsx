import React from 'react';
import "./Profile.css";
import head from '../../img/head.jpg';
import ava from '../../img/unnamed.jpg';
import Post from '../Posts/Posts';



function Profile (props){
    let avatar=props.prof.ava===undefined?ava:props.prof.ava;
    let post = props.post.map((p)=><Post mes={p.mes} ava={p.ava}/>); // Переделывание поста в реакт объект для дальнейшего вывода
    let textarea = React.createRef(); //аналог getElementById, только мы создаем ссылку на объект
    
   
    

    let send = ()=> props.dispatch({type:"ADD",txt:textarea.current.value}); // Вывод поста по кнопке
    let textareaChange =()=>props.dispatch({type:"profileBufText",txt:textarea.current.value });

    return(
        
        <div className="Profile_Main">
            <div className="Profile_cont"><img className="Profile_logo" src={head} alt="head" /></div>
            <div className="Profile_user">
                <div className="Profile_avatar"> <img className="Profile_ava" src={avatar} alt="head" /></div>
                <div className="Profile_info">
                    <ul>
                        <li>Дата рождения: {props.prof.birthday}</li>
                        <li>Страна: {props.prof.country}</li>
                        <li>Образование: {props.prof.educate}</li>
                        <li>Веб сайт: {props.prof.website}</li>
                    </ul>
                </div>
            </div>
            <div className="Posts">
            <textarea  onChange={textareaChange} value={props.dispatch({type:"getNewpost"})} ref={textarea} className="Profile_postText" placeholder="Enter your text" ></textarea>
            <div><button className="Profile_SendMessage" onClick={send} >Send</button> </div>
            </div>
            <br /><br />
             {/*Вывод сообщений  из пропсов */ }
            {post}
             
        </div>

    );
}

export default Profile;