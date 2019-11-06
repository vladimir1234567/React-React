let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            newPostText: 'it-rfvfsutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ],
            newMessageText: 'NewDialod'
        },
        sidebar: {}
    },

    getState() {
        return this._state;
    },

    rerenderEntireTree() {
        console.log('state changed');
    },

    addPost() {
    
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0 
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this.rerenderEntireTree(this._state);
        
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this.rerenderEntireTree(this._state);
    },

    addMessage() {
    
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this.rerenderEntireTree(this._state);
        
    },

    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this.rerenderEntireTree(this._state);
    },

    
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    } 
}




export default store;

window.store = store;