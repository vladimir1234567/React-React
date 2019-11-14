import { updateNewMessageBodynCreator, sendMessageCreator } from '../../Redux/dialogs-reduser';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodynCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    } 
  }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;
