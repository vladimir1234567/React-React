import React from 'react';
import s from './Content.module.css';
import sea from '../Img/sea.jpg';
import ava from '../Img/ava.jpg';
import MyPosts from './myPosts/myPosts';


const Content = () => {
  return (
    <div className={s.content}>
      <div>
      <img src={sea} className={s.content_img} alt="sea" />
      </div>
      <div>
      <img src={ava} className={s.avatar} alt="avatar" />
      <div>
      description
      </div>
      </div>
      
      <MyPosts />>
        
    
    </div>
  )
}

export default Content;