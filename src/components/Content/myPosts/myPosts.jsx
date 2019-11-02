import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = (props) => {

    let posts = props.posts.
        map( p => <Post message={p.message} likesCount={p.likesCount} /> );
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    } 

    let newPostElement = React.createRef();

    return (
        <div className={s.item}>
            <div>
            <div className={s.textField}>
                <textarea name="mytext" id="into" ref={newPostElement} ></textarea>
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