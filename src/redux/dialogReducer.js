const addMessage="addMessage";
const dialogbufMessage="dialogbufMessage";
const avaBich="https://yt3.ggpht.com/a/AATXAJwcRz4MbWjSrTeWdpzfyVsPC97gRqnc_YC-qQ=s900-c-k-c0xffffffff-no-rj-mo";

const init={
    dialogsFriendList:[{id:"Dialogs/1",name:"Вася"},{id:"Dialogs/2",name:"Serje"},{id:"Dialogs/3",name:"Петя"},{id:"Dialogs/4",name:"Коля"},{id:"Dialogs/5",name:"Volodya"}],
    bufMessage:{id:"1", nick:"User", mes:"", ava:"" },
    messages:[{id:"1", nick:"User", mes:"privet", ava:avaBich },{id:"2", nick:"User", mes:"kak_dela", ava:avaBich },{id:"3", nick:"User", mes:"ti gde", ava:avaBich },],
};


const dialogReducer = (state=init,action) =>{
        switch (action.type) { 
            case dialogbufMessage:
                state.bufMessage={id:action.id, nick:action.nick, mes:action.mes, ava:action.ava };
                break;
            case addMessage:
                //state.messages.push(state.bufMessage);
                //let a=()=>state.bufMessage.mes="";
                //Использованы asynk тк psuh выполняется позже зануления
                async function f() {
                    return ()=>state.bufMessage.mes="";
                  }
                  f().then(state.messages.push(state.bufMessage));
                break;
            default:
                
        }
    return state;
}

export default dialogReducer;