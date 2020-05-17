import React from 'react';
import "./Dialogs.css";
import { Link } from 'react-router-dom';



function Dialogs(props) {
    let friends =[{id:"Dialogs/1",name:"Вася"},{id:"Dialogs/2",name:"Serje"},{id:"Dialogs/3",name:"Петя"},{id:"Dialogs/4",name:"Коля"}];
    let friend = friends.map((item)=><li><Link to={item.id}> {item.name}</Link></li>);
   
    return(
        <div className="Dialogs_Main">
            <div className="Dialogs_Interlocutor">
            <section className="Dialogs_MesText">Messages</section>
                <ul className="Dialog_FriendList">
                    {friend}
                    <li><Link to="/Dialogs">Админ</Link></li>
                </ul>
            </div>
            <div className="Dialog_MessagesList">
                <div className="Dialog_Message">
                    Hi
                </div>
                <div className="Dialog_Message">
                    How are you?
                </div>
            </div>
        </div>
    );
}


export default Dialogs;