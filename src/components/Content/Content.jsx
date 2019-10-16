import React from 'react';
import './Content.css';
import sea from '../Img/sea.jpg';


const Content = () => {
  return (
    <div className="content">
      <img src={sea} alt="sea" />
        <a href='#'>Home</a>
        <a href='#'>Message</a>
    
    </div>
  )
}

export default Content;