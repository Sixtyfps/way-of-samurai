import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type MyPostsType = {}

export const MyPosts: React.FC<MyPostsType> = (props) => {
    return (
        <div>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
                <div className={s.posts}>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </div>
    )
}