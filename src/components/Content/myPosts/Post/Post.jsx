import React from 'react';
import s from './Post.module.css';
import ava from '../../../Img/ava.jpg';



const Post = (props) => {
    return (
        <div className={s.wrapperPost}>
        <div className={s.post}>
        <img src={ava} className={s.avaPost} alt="avatar" />
            {/* <span className={s.brown}></span> */}
            <div>
            {props.message}
            </div>
        </div>
         
        <span>Like </span>{props.counteLikes}


        </div>
    )
}

export default Post;