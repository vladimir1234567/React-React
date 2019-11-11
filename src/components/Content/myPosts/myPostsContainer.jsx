import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/profile-reduser';
import MyPosts from './myPosts';


const MyPostsConteiner = (props) => {

    let state = props.store.getState();
    
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    } 

    let onPostChenge = (text) => {
        // let text = newPostElement.current.value;
        // props.updateNewPostText(text)
        // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (<MyPosts updateNewPostText = {onPostChenge} 
                     addPost = {addPost} 
                     posts = {state.profilePage.posts} 
                     newPostText = {state.profilePage.newPostText} /> );
}

export default MyPostsConteiner;