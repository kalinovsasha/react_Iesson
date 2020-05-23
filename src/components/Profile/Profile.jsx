import React from 'react';
import "./Profile.css";
import head from '../../img/head.jpg';
import ava from '../../img/unnamed.jpg';
import Post from '../Posts/Posts';



function Profile (props){
    console.log(props.bufPost.mes);
    let avatar=props.profInfo.ava===undefined?ava:props.profInfo.ava;
    let post = props.posts.map((p)=><Post mes={p.mes} ava={p.ava}/>); // Переделывание поста в реакт объект для дальнейшего вывода
    let textarea = React.createRef(); //аналог getElementById, только мы создаем ссылку на объект
    
    //Пример функции для выводв текста из textarea   
 /*   let send = ()=> {
            let textareaText=textarea.current.value;
            alert(textareaText);
    }; */
    
   
    let newpost = ()=>props.newPost(textarea.current.value); // Вытаскиваем текст их textarea и записываем в state
    
    return(
        
        <div className="Profile_Main">
            <div className="Profile_cont"><img className="Profile_logo" src={head} alt="head" /></div>
            <div className="Profile_user">
                <div className="Profile_avatar"> <img className="Profile_ava" src={avatar} alt="head" /></div>
                <div className="Profile_info">
                    <ul>
                        <li>Дата рождения: {props.profInfo.birthday}</li>
                        <li>Страна: {props.profInfo.country}</li>
                        <li>Образование: {props.profInfo.educate}</li>
                        <li>Веб сайт: {props.profInfo.website}</li>
                    </ul>
                </div>
            </div>
            <div className="Posts">
            <textarea onChange={newpost}  ref={textarea}  className="Profile_postText" placeholder="Write message" value={props.bufPost.mes}></textarea>
            <div><button className="Profile_SendMessage" onClick={props.addPost} >Send</button> </div>
            </div>
            <br /><br />
            
            {/*Вывод сообщений  из пропсов */ }
            {post}
            
            {/*Вывод тестовых сообщений   */ }
            { /*
            <Post mes="Hello" ava="https://yt3.ggpht.com/a/AATXAJwcRz4MbWjSrTeWdpzfyVsPC97gRqnc_YC-qQ=s900-c-k-c0xffffffff-no-rj-mo"/> 
            <Post mes="Hello, my name is test"/> 
            */}
        </div>

    );
}

export default Profile;