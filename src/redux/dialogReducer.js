const addMessage="addMessage";
const dialogbufMessage="dialogbufMessage";

const dialogReducer = (state,action) =>{
        switch (action.type) { 
            case dialogbufMessage:
                state.bufMessage={id:action.id, nick:action.nick, mes:action.mes, ava:action.ava };
                break;
            case addMessage:
                state.messages.push(state.bufMessage);
                break;
            default:
                console.log("Error");
        }
    return state;
}

export default dialogReducer;