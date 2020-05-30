import React from 'react';
import "../Dialogs/Dialogs.css";
import "./Message.css";




let Messages = (props)=>{
       
    return (

        <div >
                <div className="Dialog_Nick">{props.nick}</div>
                <div className="Dialog_Message">
                    <img className="Message_Ava" alt="ava" src={props.ava}></img> 
                    <div className="Message_Txt">{props.mes}</div> 
                </div>
        </div>    
                
            

    )
}


export default Messages;