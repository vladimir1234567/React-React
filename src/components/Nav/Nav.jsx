import React from 'react';
import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';

console.log(s);


const Nav = () => {
  return (
    
    <div className={s.nav}>
      
        <div className={s.item}>
          <NavLink to='/content'>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`}>
          <NavLink to='/dialogs'>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/news'>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/music'>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='settings'>Settings</NavLink>
        </div>
    
    </div>
  )
}

export default Nav;