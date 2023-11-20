import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppStoreType} from "../../../redux/redux-store";
import {StoreContext} from "../../../StoreContext";

// type MyPostsContainerType = {
//     store: AppStoreType
//
// }


export const MyPostsContainer: React.FC = (props) => {

    return (
        <StoreContext.Consumer>
            { (store) => {
                const state = store.getState()

                const addPost = () => {
                    store.dispatch(addPostAC())
                }

                const updateNewPostText = (newPostText: string) => {
                    store.dispatch(updateNewPostTextAC(newPostText))
                }
                return <MyPosts posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}
                                updateNewPostText={updateNewPostText}
                                addPost={addPost}/>
            }
        }
        </StoreContext.Consumer>
    )
}