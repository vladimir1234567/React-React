import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = () => {

let dialogsData = [
  {id: 1, name: "Dimych"},
  {id: 2, name: "Andrey"},
  {id: 3, name: "Sveya"},
  {id: 4, name: "Sasha"},
  {id: 5, name: "Victor"},
  {id: 6, name: "Valera"}
]

let dialogs = dialogsData.
      map( d => <DialogItem name={d.name} id={d.id} /> );

let messageData = [
  {id: 1, message: "Hi"},
  {id: 2, message: "AnHow are uoy?drey"},
  {id: 3, message: "Yol"},
]

let messages = messageData.
      map ( m => <Message className={s.message} message={m.message} /> );

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogs }
      </div>

      <div className={s.messages}>
        { messages }
      </div>
  </div>
  )
}

export default Dialogs;