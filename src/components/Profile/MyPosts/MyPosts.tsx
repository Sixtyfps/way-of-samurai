import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type MyPostsType = {}

export const MyPosts: React.FC<MyPostsType> = (props) => {
    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    <Post message='Hi, how are you?' likesCount={23}/>
                    <Post message='Hello!' likesCount={4}/>
                </div>
            </div>
        </div>
    )
}