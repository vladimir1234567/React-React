import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {

    let postData = [
        {id: 1, message: "Hi", counteLikes: 6},
        {id: 2, message: "AnHow are uoy?drey", counteLikes:8},
        {id: 3, message: "Yol", counteLikes: 12}
    ]

    return (
        <div className={s.item}>

           

            <div>
                        <h3>My posts:</h3>
                <div>
                    <Post message={postData[0].message} counteLikes={postData[0].counteLikes} />
                    <Post message={postData[1].message} counteLikes={postData[1].counteLikes} />
                    <Post message={postData[2].message} counteLikes={postData[2].counteLikes} />
                </div>
                
            </div>


        </div>
    )
}

export default MyPosts;