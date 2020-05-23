import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



export function Render(state,addPost,newPost) {
    ReactDOM.render(
        <React.StrictMode>
          <App profInfo={state.profInfo} posts={state.posts} bufPost={state.bufPost}  dialogsFriendList={state.dialogsFriendList} addPost={addPost} newPost={newPost} />
          
        </React.StrictMode>,
        document.getElementById('root')
      );
}
    