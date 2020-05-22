import React from 'react';
import "./Dialogs.css";
import { Link, NavLink } from 'react-router-dom';

let dialogText = React.createRef();
let dialogSend = ()=>{
    let dialogTxt= dialogText.current.value;
    alert(dialogTxt);
    }

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
                
                <div className="Dialog_SendMessage">
                    <textarea  ref={dialogText} className="Dialog_TextArea"></textarea>
                    <button onClick={dialogSend} className="Dialog_Send">Send Message</button>
                </div>
            </div>
            
        </div>
    );
}


export default Dialogs;