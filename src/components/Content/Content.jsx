import React from 'react';
import s from './Content.module.css';
import sea from '../Img/sea.jpg';
import MyPostsContainer from './myPosts/myPostsContainer';
import ProfInfo from './ProfInfo/ProfInfo';

const Content = (props) => {
  return (
    <div className={s.content}>
      <img src={sea} className={s.content_img} alt="sea" />
      <ProfInfo />
      {/* <MyPostsContainer store={props.store}  /> */}
      <MyPostsContainer />

    </div>
  )
}

export default Content;