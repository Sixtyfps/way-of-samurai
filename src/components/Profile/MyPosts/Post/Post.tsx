import React from "react";
import s from './Post.module.css'

type PostType = {}

export const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img src="#" alt="avatar"/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}