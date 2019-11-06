import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import store from './Redux/State';



let rerenderEntireTree = (state) => {
ReactDOM.render(
    <BrowserRouter>
        <App state={store.getState()} 
             addPost={store.addPost} 
             updateNewPostText={store.updateNewPostText} 
             addMessage={ store.addMessage } 
             updateNewMessageText={store.updateNewMessageText} />
    </BrowserRouter>, document.getElementById('root'));
}


rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
