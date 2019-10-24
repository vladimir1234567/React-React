import React from 'react';
import s from './Content.module.css';
import sea from '../Img/sea.jpg';
import MyPosts from './myPosts/myPosts';
import ProfInfo from './ProfInfo/ProfInfo';


const Content = () => {
  return (
    <div className={s.content}>
      <img src={sea} className={s.content_img} alt="sea" />
      <ProfInfo />
      <MyPosts />
    </div>
  )
}

export default Content;