import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './Redux/State';
import {BrowserRouter} from 'react-router-dom';
import {addPost} from './Redux/State';
import { updateNewPostText } from './Redux/State';
import { addMessage } from './Redux/State';
import { updateNewMessageText } from './Redux/State';


let rerenderEntireTree = (state) => {
ReactDOM.render(
    <BrowserRouter>
        <App state={state} 
             addPost={addPost} 
             updateNewPostText={updateNewPostText} 
             addMessage={ addMessage } 
             updateNewMessageText={updateNewMessageText} />
    </BrowserRouter>, document.getElementById('root'));
}


rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
