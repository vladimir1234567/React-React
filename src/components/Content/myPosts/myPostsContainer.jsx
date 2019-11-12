import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reduser';
import MyPosts from './myPosts';
import StoreContext from '../../../StoreContext';


const MyPostsConteiner = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState();
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                let onPostChenge = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return <MyPosts updateNewPostText={onPostChenge}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText} />
                }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsConteiner;