const UPDATE_NEW_Message_BODY = 'UPDATE_NEW_Message_BODY';
const SEND_MESSaGE = 'SEND_MESSaGE';

const dialogsReduser = (state, action) => {
    // switch(action.type) {
    //     case UPDATE_NEW_Message_BODY: 
    //       state.newMessageBody = action.body;
    //       return state;

    //     case SEND_MESSaGE: 
    //       let body = state.newMessageBody;
    //       state.newMessageBody = '';
    //       state.messages.push({id: 6, message: body});
    //       return state;

        
    // }

   if ( action.type === UPDATE_NEW_Message_BODY ) {
        state.newMessageBody = action.body;
    }
    else if ( action.type === SEND_MESSaGE ) {
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messages.push({id: 6, message: body});
    }

    return state;
}

export default dialogsReduser;