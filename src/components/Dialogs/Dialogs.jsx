import React from 'react';
import "./Dialogs.css";
import { Link } from 'react-router-dom';

function Dialogs(props) {
    return(
        <div className="Dialogs_Main">
            <section className="Dialogs_MesText">Messages</section>
            <div className="Dialogs_Interlocutor">
                <ul className="Dialog_FriendList">
                    <li><Link to="">Вася</Link></li>
                    <li><Link to="">Петя</Link></li>
                    <li><Link to="">Коля</Link></li>
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