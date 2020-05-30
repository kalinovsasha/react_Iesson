import React from 'react';
import "./Dialogs.css";
import { Link, NavLink } from 'react-router-dom';
import Message from '../Message/Message';

let dialogText = React.createRef();
let dialogSend = ()=>{
    let dialogTxt= dialogText.current.value;
    alert(dialogTxt);
    }

function Dialogs(props) {
    console.log(props.messages);
    let friend =props.friends.map((item)=><li><NavLink to={item.id}> {item.name}</NavLink></li>);
    let messages=props.messages.map((mes)=> <Message mes={mes.mes} id={mes.id} nick={mes.nick} ava={mes.ava}/>  )
   
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
                {/* Вывод сообщений */}
                {messages}
               
                <div className="Dialog_SendMessage">
                    <textarea  ref={dialogText} className="Dialog_TextArea"></textarea>
                    <button onClick={dialogSend} className="Dialog_Send">Send Message</button>
                </div>
            </div>
            
        </div>
    );
}


export default Dialogs;