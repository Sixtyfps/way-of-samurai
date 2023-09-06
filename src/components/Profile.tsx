import React from "react";
import s from './Profile.module.css'

type ProfileType = {}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div className={s.content}>
            <img src="#" alt="image"/>
            <div>
                photo + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>post 1</div>
                    <div className={s.item}>post 2</div>
                </div>
            </div>
        </div>
    )
}