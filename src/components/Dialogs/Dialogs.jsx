import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {



let dialogs = props.dialogs.
      map( d => <DialogItem name={d.name} id={d.id} /> );



let messages = props.message.
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