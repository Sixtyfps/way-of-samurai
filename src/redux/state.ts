//--------------------T-Y-P-E-S----------------------------------
import {addPostAC, profileReducer, updateNewPostTextAC} from "./profile-reducer";
import {addMessageAC, dialogsReducer, updateMessageAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType,
    sidebar: SidebarType
}

export type DialogsPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>,
    newMessage: string
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

//--------------------S-T-O-R-E---------------------------------

export type StoreType = {
    _state: StateType
    subscribe: (rerenderEntireTreeCallback: (state: StateType) => void) => void
    _rerenderEntireTree: (state: StateType) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}


export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateMessageAC>


//---------------------------STORE----------------------
export const store: StoreType = {

    //------------------------------State------------------------
    _state: {
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
            ],
            newMessage: ''
        },
        sidebar: {}
    },
    _rerenderEntireTree() {
    },

    subscribe(rerenderEntireTreeCallback) {
        this._rerenderEntireTree = rerenderEntireTreeCallback
    },
    getState() {
        return this._state
    },

    //--------------------Functions And Manipulations With State----------
    dispatch(action: ActionsTypes) {

        this._state.profilePage = profileReducer( this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer( this._state.sidebar, action)

        this._rerenderEntireTree(this._state)
    }

}