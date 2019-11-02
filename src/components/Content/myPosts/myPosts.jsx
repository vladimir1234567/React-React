import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {
    let post = [
        {id: 1, message: "Hi", counteLikes: 6},
        {id: 2, message: "AnHow are uoy?drey", counteLikes:8},
        {id: 3, message: "Yol", counteLikes: 12}
    ];

    let newPostElement = React.createRef();

    let posts = post.
        map( p => <Post message={p.message} counteLikes={p.counteLikes} /> );
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    } 

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