import React from 'react';
import "./Profile.css";
import head from '../../img/head.jpg';
import ava from '../../img/unnamed.jpg';
import Post from '../Posts/Posts';

let birthday="03.01.1994";
let country="Belarus";
let educate="GRSU grodno";
let website="vk.com/kalinovsasha";

function Profile (props){
    return(
        <div className="Profile_Main">
            <div className="Profile_cont"><img className="Profile_logo" src={head} alt="head" /></div>
            <div className="Profile_user">
                <div className="Profile_avatar"> <img className="Profile_ava" src={ava} alt="head" /></div>
                <div className="Profile_info">
                    <ul>
                        <li>Дата рождения: {birthday}</li>
                        <li>Страна: {country}</li>
                        <li>Образование: {educate}</li>
                        <li>Веб сайт: {website}</li>
                    </ul>
                </div>
            </div>
            <div className="Posts">
            <textarea className="Profile_postText" value="" placeholder="Enter your text" ></textarea>
            <div><button className="Profile_SendMessage">Send</button> </div>
            </div>
            <br /><br />
            <Post mes="Hello"/> 
            <Post mes="Hello"/> 
            <Post mes="Hello, my name is test"/> 
        </div>

    );
}

export default Profile;