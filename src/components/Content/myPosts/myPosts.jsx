import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';



const MyPosts = () => {
    return (
        <div className={s.item}>

            <div>
                        <h3>My posts:</h3>
                <div>
                    <Post message="hi" counteLikes="6"/>
                    <Post message="Nehi" counteLikes="7"/>
                </div>
                
            </div>


        </div>
    )
}

export default MyPosts;