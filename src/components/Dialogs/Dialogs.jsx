import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  let name = props.name;
  return (
    <div className={s.dialog}>
    <NavLink to={path}>{name}</NavLink>
  </div>
  );
}

const Message = (props) => {
  let message = props.message;
  return (
    <div className={s.message}>{message}</div>
  )
}

const Dialogs = () => {

let dialogsData = [
  {id: 1, name: "Dimych"},
  {id: 2, name: "Andrey"},
  {id: 3, name: "Sveya"},
  {id: 4, name: "Sasha"},
  {id: 5, name: "Victor"},
  {id: 6, name: "Valera"}
]

let messageData = [
  {id: 1, message: "Hi"},
  {id: 2, message: "AnHow are uoy?drey"},
  {id: 3, message: "Yol"},
]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
        <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
      </div>

      <div className={s.messages}>
        <Message className={s.message} message={messageData[0].message} />
        <Message className={s.message} message={messageData[1].message} />
        <Message className={s.message} message={messageData[2].message} />

      </div>
  </div>
    
  )
}

export default Dialogs;