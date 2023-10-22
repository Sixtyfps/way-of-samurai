import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type MyPostsType = {}

export const MyPosts: React.FC<MyPostsType> = (props) => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 23},
        {id: 2, message: 'Hello! Its my first post', likesCount: 12},
    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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
                    {postsElements}
                </div>
            </div>
        </div>
    )
}