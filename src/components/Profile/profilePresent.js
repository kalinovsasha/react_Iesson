import React from 'react';
import "./Profile.css";
import head from '../../img/head.jpg';



function Profile (props){
    let avatar=props.avatar;
    let post = props.post; 
    let textarea = React.createRef(); //аналог getElementById, только мы создаем ссылку на объект
    let send = ()=> props.send();
    let textareaChange =()=>props.textareaChange(textarea.current.value);
    return(
        
        <div className="Profile_Main">
            <div className="Profile_cont"><img className="Profile_logo" src={head} alt="head" /></div>
            <div className="Profile_user">
                <div className="Profile_avatar"> <img className="Profile_ava" src={avatar} alt="head" /></div>
                <div className="Profile_info">
                    <ul>
                        <li>Имя : {props.profInfo.name}</li>
                        <li>Дата рождения: {props.profInfo.birthday}</li>
                        <li>Страна: {props.profInfo.country}</li>
                        <li>Образование: {props.profInfo.educate}</li>
                        <li>Веб сайт: {props.profInfo.website}</li>
                    </ul>
                </div>
            </div>
            <div className="Posts">
            <textarea  onChange={textareaChange} value={props.textareaValue.mes} ref={textarea} className="Profile_postText" placeholder="Enter your text" ></textarea>
            <div><button className="Profile_SendMessage" onClick={send} >Send</button> </div>
            </div>
            <br /><br />
             {/*Вывод сообщений  из пропсов */ }
            {post}
             
        </div>

    );
}

export default Profile;