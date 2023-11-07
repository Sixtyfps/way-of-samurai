import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileType = {
    state: ProfilePageType
    addPost: (postMessage: string) => void
    updateNewPostText:(postText: string)=>void
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state}
                     addPost={props.addPost}
                     newPostText={props.state.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}