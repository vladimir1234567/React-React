import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTexstActionCreator} from '../../../Redux/State';



const MyPosts = (props) => {
   

    let posts = props.posts.
        map( p => <Post message={p.message} likesCount={p.likesCount} /> );


    let addPost = () => {
        props.dispatch(addPostActionCreator());
    } 

    let onPostChenge = () => {
        let text = newPostElement.current.value;
        // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text };
        let action = updateNewPostTexstActionCreator(text);
        props.dispatch(action);
    }

    let newPostElement = React.createRef();

    return (
        <div className={s.item}>
            <div>
            <div className={s.textField}>
                <textarea ref={newPostElement} 
                          onChange={ onPostChenge } 
                          value={ props.newPostText } />
                </div>
                <button className={s.btn} onClick={addPost} >Send</button>
                        <h3>My posts:</h3>
                <div>
                    { posts }
                </div>
            </div>
        </div>
    )
}

export default MyPosts;