import React, {ChangeEvent} from "react";
import {ActionsTypes, ProfilePageType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStoreType} from "../../../redux/redux-store";

type MyPostsContainerType = {
    store: AppStoreType

}


export const MyPostsContainer: React.FC<MyPostsContainerType> = (props) => {
    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    const updateNewPostText = (newPostText: string) => {
        props.store.dispatch(updateNewPostTextAC(newPostText))
    }

    return (
        <MyPosts posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
                 updateNewPostText = {updateNewPostText}
                 addPost = {addPost}/>
    )
}