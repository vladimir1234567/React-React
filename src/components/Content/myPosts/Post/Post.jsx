import React from 'react';
import s from './Post.module.css';



const Post = (props) => {
    return (
        <div>
        <div className={s.post}>
            <span className={s.brown}></span>
            <div>
            {props.message}
            </div>
        </div>
         
        <span>Like </span>{props.counteLikes}


        </div>
    )
}

export default Post;