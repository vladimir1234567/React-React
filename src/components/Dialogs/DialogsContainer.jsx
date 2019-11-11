import React from 'react';
import { updateNewMessageBodynCreator, sendMessageCreator } from '../../Redux/dialogs-reduser';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  let onNewMessageChenge = (body) => {
    props.store.dispatch(updateNewMessageBodynCreator(body))
  }

  return (
    <Dialogs updateNewMessageBody={onNewMessageChenge} 
             sendMessage={onSendMessageClick}
             dialogsPage={state} />
  )
}

export default DialogsContainer;
