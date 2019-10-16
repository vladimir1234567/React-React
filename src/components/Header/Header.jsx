import React from 'react';
import './Header.css';
import logo from '../Img/logo.png';



const Header = () => {
  return (
    <div className="header">
      <a href="#"><img src={logo} alt="logotype" /></a>
    </div>
  )
}

export default Header;