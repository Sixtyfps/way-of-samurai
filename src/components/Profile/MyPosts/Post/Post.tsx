import React from "react";
import s from './Post.module.css'

type PostType = {
    message: string
    likesCount: number
}

export const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.item}>
            <img src="#" alt="avatar"/>
            {props.message}
            <div>
                <span>like</span>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}