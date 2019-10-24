import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {
    let postData = [
        {id: 1, message: "Hi", counteLikes: 6},
        {id: 2, message: "AnHow are uoy?drey", counteLikes:8},
        {id: 3, message: "Yol", counteLikes: 12}
    ]

    let posts = postData.
        map( p => <Post message={p.message} counteLikes={p.counteLikes} /> );

    return (
        <div className={s.item}>
            <div>
                        <h3>My posts:</h3>
                <div>
                    { posts }
                </div>
            </div>
        </div>
    )
}

export default MyPosts;