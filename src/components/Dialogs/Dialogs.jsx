import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';



const Dialogs = (props) => {

  let dialogs = props.dialogs.dialogs.
      map( d => <DialogItem name={d.name} id={d.id} /> );

  let messages = props.messages.messages.
      map ( m => <Message className={s.message} message={m.message} /> );

  let newMessageElement = React.createRef(); 

  let addMessage = () => {
    props.addMessage();
  };

  let onMessageChenge = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
    };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        { dialogs }
      </div>

      <div className={s.messages}>
        <div>
            <textarea ref={newMessageElement} 
                      onChange={ onMessageChenge } 
                      value={ props.newMessageText } />
            </div>
            <button  onClick={addMessage} >Send</button>
                    
            <div>
                { messages }
            </div>
        </div>
    </div>
  )
}

export default Dialogs;