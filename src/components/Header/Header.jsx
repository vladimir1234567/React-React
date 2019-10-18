import React from 'react';
import s from './Header.module.css';
import logo from '../Img/logo.png';



const Header = () => {
  return (
    <div className={s.header}>
      <a href="#"><img src={logo} alt="logotype" /></a>
    </div>
  )
}

export default Header;