import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageBodynCreator, sendMessageCreator } from '../../Redux/dialogs-reduser';

const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;
  // let state = props.store.getState();

  let dialogs = state.dialogs.
    map(d => <DialogItem name={d.name} id={d.id} />);

  let messages = state.messages.
    map(m => <Message className={s.message} message={m.message} />);

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  let onNewMessageChenge = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodynCreator(body))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogs}
      </div>
      <div className={s.messages}>
        <div>{messages} </div>
        <div>
          <div> <textarea value={newMessageBody}
            onChange={onNewMessageChenge}
            placeholder="enter your message" ></textarea> </div>
          <div><button onClick={onSendMessageClick}>send</button></div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
