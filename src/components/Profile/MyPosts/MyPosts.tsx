import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType, ProfilePageType} from "../../../redux/store";
import {AppStateType} from "../../../redux/redux-store";

type MyPostsType = {
    // state: AppStateType
    newPostText: string
    // dispatch: (action: ActionsTypes) => void
    updateNewPostText: (newPostText: string) => void
    addPost: () => void
    posts: Array<PostType>
}


export const MyPosts: React.FC<MyPostsType> = (props) => {

    let postsElements = props.posts.map((p, key) => <Post message={p.message} likesCount={p.likesCount}
                                                                key={key}/>)

    const addPost = () => {
        // props.addPost()
        props.addPost()
    }

    const updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea onChange={updateNewPostText}
                                  value={props.newPostText}/>
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