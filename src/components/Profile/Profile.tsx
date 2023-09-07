import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

type ProfileType = {}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div className={s.content}>
            <img src="#" alt="image"/>
            <div>
                photo + description
            </div>
            <MyPosts/>
        </div>
    )
}