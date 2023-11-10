import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/state";

type ProfileType = {
    state: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state}
                     dispatch={props.dispatch}
                     newPostText={props.state.newPostText}
            />
        </div>
    )
}