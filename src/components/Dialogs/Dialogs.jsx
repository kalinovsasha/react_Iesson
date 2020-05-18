import React from 'react';
import "./Dialogs.css";
import { Link, NavLink } from 'react-router-dom';



function Dialogs(props) {
    let friend =props.friends.map((item)=><li><NavLink to={item.id}> {item.name}</NavLink></li>);
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