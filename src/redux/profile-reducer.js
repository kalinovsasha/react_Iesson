const addPost = "ADD-POST";
const profileBufText="profileBufText";




export function profileReducer(state,action){
    switch (action.type){
        case addPost:
            state.posts.push({mes:state.newPost.mes, ava:"https://sun9-56.userapi.com/c836234/v836234894/5aedd/--93nsktQsI.jpg"});
            return state; 
        case profileBufText:
            state.newPost={mes:action.mes, ava:"https://sun9-56.userapi.com/c836234/v836234894/5aedd/--93nsktQsI.jpg"};
            return state;
        default: return state;
    }

}