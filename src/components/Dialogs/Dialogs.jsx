import React from 'react';
import "./Dialogs.css";
import { Link, NavLink } from 'react-router-dom';
import Message from '../Message/Message';
import { dialogbufMessagetAction } from '../../redux/state';

let dialogText = React.createRef();


function Dialogs(props) {
    let friend =props.state.dialogsFriendList.map((item)=><li><NavLink to={item.id}> {item.name}</NavLink></li>);
    let messages=props.state.messages.map((mes)=> <Message mes={mes.mes} id={mes.id} nick={mes.nick} ava={mes.ava}/>  );
    let getMessage=props.state.bufMessage.mes;
    let sendMessage=()=>props.dispatch({type:"addMessage"});
    function bufMessage(){return props.dispatch(dialogbufMessagetAction(dialogText.current.value)) }

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
                    <textarea onChange={bufMessage} value={getMessage}  ref={dialogText} className="Dialog_TextArea"></textarea>
                    <button onClick={sendMessage} className="Dialog_Send">Send Message</button>
                </div>
            </div>
            
        </div>
    );
}


export default Dialogs;