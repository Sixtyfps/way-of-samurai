import {ActionsTypes, MessageType, PostType, ProfilePageType, StateType} from "./store";

const initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 23},
        {id: 2, message: 'Hello! Its my first post', likesCount: 12},
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {

        case "ADD-POST": {
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }

        case "UPDATE-NEW-POST-TEXT": {
            let stateCopy = {...state}
            stateCopy.newPostText = action.postText
            return stateCopy
        }

        default: return state
    }
}

//---------------------Posts Action Creators--------------------------
export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const updateNewPostTextAC = (postText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        postText: postText
    } as const
}