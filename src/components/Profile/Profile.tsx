import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

type ProfileType = {}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}