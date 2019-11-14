const UPDATE_NEW_Message_BODY = 'UPDATE_NEW_Message_BODY';
const SEND_MESSaGE = 'SEND_MESSaGE';

let initialState = {
        
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra?' },
        { id: 3, message: 'Yo' },
        { id: 4, message: 'Yo' },
        { id: 5, message: 'Yo' }
    ],
    newMessageBody: ''
}

const dialogsReduser = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_Message_BODY:{
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case SEND_MESSaGE: {
            let stateCopy = {...state};
            let body = state.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push({ id: 6, message: body });
            return stateCopy;
        }
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