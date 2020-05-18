import React from 'react';
import "./Profile.css";
import head from '../../img/head.jpg';
import ava from '../../img/unnamed.jpg';
import Post from '../Posts/Posts';



function Profile (props){
    let avatar=props.prof.ava===undefined?ava:props.prof.ava;
    let post = props.post.map((p)=><Post mes={p.mes} ava={p.ava}/>);
    
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
            <textarea className="Profile_postText" value="" placeholder="Enter your text" ></textarea>
            <div><button className="Profile_SendMessage">Send</button> </div>
            </div>
            <br /><br />
             {/*Вывод сообщений  из пропсов */ }
            {post}
            {/*Вывод тестовых сообщений   */ }
            <Post mes="Hello" ava="https://yt3.ggpht.com/a/AATXAJwcRz4MbWjSrTeWdpzfyVsPC97gRqnc_YC-qQ=s900-c-k-c0xffffffff-no-rj-mo"/> 
            <Post mes="Hello, my name is test"/> 
        </div>

    );
}

export default Profile;