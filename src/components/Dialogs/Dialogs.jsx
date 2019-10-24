import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {
  let path = "/dialogs/" + "1";
  let name = props.name;
  return (
    <div className={s.dialog}>
    <NavLink to={path}>{name}</NavLink>
  </div>
  );
}

const Message = (props) => {
  let message = props.message
  return (
    <div className={s.message}>{message}</div>
  )
}

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Dimych" id="1"/>
        <DialogItem name="Andrey" id="2"/>
        <DialogItem name="Sveta" id="3"/>
        <DialogItem name="Sasha" id="4"/>
        <DialogItem name="Victor" id="5"/>
        <DialogItem name="Valera" id="6"/>
      </div>

      <div className={s.messages}>
        <Message className={s.message} message="Hi" />
        <Message className={s.message} message="How are uoy?" />
        <Message className={s.message} message="Yol!" />

      </div>
  </div>
    
  )
}

export default Dialogs;