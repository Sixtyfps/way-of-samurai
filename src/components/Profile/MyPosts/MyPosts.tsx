import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";

type MyPostsType = {
    state: ProfilePageType
}

export const MyPosts: React.FC<MyPostsType> = (props) => {

    let postsElements = props.state.posts.map((p, key) => <Post message={p.message} likesCount={p.likesCount}
                                                                key={key}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        alert(newPostElement.current?.value)
    }

    return (
        <div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement}></textarea>
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