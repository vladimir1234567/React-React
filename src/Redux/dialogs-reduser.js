const UPDATE_NEW_Message_BODY = 'UPDATE_NEW_Message_BODY';
const SEND_MESSaGE = 'SEND_MESSaGE';

const dialogsReduser = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_Message_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSaGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 6, message: body });
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSaGE });
export const updateNewMessageBodynCreator = (body) => ({
    type: UPDATE_NEW_Message_BODY,
    body: body
});

export default dialogsReduser;