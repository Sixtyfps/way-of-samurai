import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";

type MyPostsType = {
    state: ProfilePageType
    addPost: (postMessage: string) => void
    newPostText: string
    updateNewPostText:(postText: string)=>void
}

export const MyPosts: React.FC<MyPostsType> = (props) => {

    let postsElements = props.state.posts.map((p, key) => <Post message={p.message} likesCount={p.likesCount}
                                                                key={key}/>)

    const addPost = () => {
            props.addPost(props.newPostText)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={onChangeHandler} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}