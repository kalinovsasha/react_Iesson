import React from 'react';
import s from "./Post.module.css";
import ava from '../../img/unnamed.jpg';

const Post= (props)=>{
    let avatar=props.ava==undefined?ava:props.ava;
    
    return(
        <div className={s.post_main}>
            <img className={s.post_ava} src={avatar} alt="head" />
            <div className={s.post_text}> {props.mes}</div>
        </div>
        
    );
}

export default Post;