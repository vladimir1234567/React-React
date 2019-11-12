import React from 'react';
import { updateNewMessageBodynCreator, sendMessageCreator } from '../../Redux/dialogs-reduser';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>{
      (store) => {
        let state = store.getState().dialogsPage;

        let onSendMessageClick = () => {
          store.dispatch(sendMessageCreator())
        }

        let onNewMessageChenge = (body) => {
          store.dispatch(updateNewMessageBodynCreator(body))
        }
        return <Dialogs updateNewMessageBody={onNewMessageChenge}
          sendMessage={onSendMessageClick}
          dialogsPage={state} />
      }
    }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;
