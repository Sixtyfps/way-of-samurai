let rerenderEntireTree = (state: StateType) => {}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: SidebarType
}

export type DialogsPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}

export type DialogType = {
    id: number,
    name: string
}

export type MessageType = {
    id: number,
    message: string
}

export type SidebarType = {}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 23},
            {id: 2, message: 'Hello! Its my first post', likesCount: 12},
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimich'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'John'},
            {id: 4, name: 'Sam'},
            {id: 5, name: 'Artem'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Wassup!'},
            {id: 3, message: 'How are you'},
            {id: 4, message: 'Bye'},
            {id: 5, message: 'Night!'},
        ]
    },
    sidebar: {}
}

export const addPost = () => {
    const newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPostText = (postText: string) => {
    state.profilePage.newPostText = postText
    rerenderEntireTree(state)
}

export const subscribe = (rerenderEntireTreeCallback:(state: StateType) => void) => {
    rerenderEntireTree = rerenderEntireTreeCallback
}