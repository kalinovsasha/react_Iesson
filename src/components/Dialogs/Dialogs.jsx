import React from 'react';
import "./Dialogs.css";
import { Link } from 'react-router-dom';

function Dialogs(props) {
    return(
        <div className="Dialogs_Main">
            <div className="Dialogs_Interlocutor">
            <section className="Dialogs_MesText">Messages</section>
                <ul className="Dialog_FriendList">
                    <li><Link to="/Dialogs/1">Вася</Link></li>
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