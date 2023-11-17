import {ProfilePageType} from "./store";
import {addPostAC, profileReducer, updateNewPostTextAC} from "./profile-reducer";


test ('post should be added from state', () => {

    const startState: ProfilePageType = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 23},
            {id: 2, message: 'Hello! Its my first post', likesCount: 12},
        ],
        newPostText: 'abc'
    }

    const endState = profileReducer(startState, addPostAC())

    expect(endState.posts.length).toBe(3)
    expect(endState.posts[2].id).toBe(5)
    expect(endState.posts[2].message).toBe('abc')

})

test ('post text should be updated', () => {

    const startState: ProfilePageType = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 23},
            {id: 2, message: 'Hello! Its my first post', likesCount: 12},
        ],
        newPostText: ''
    }

    const endState = profileReducer(startState, updateNewPostTextAC('black'))

    expect(endState.newPostText).toBe('black')

})