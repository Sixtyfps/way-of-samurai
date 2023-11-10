//--------------------T-Y-P-E-S----------------------------------
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

//--------------------S-T-O-R-E----------------------------------------------------------

export type StoreType = {
    _state: StateType
    addPost: () => void
    updateNewPostText: (postText: string) => void
    subscribe: (rerenderEntireTreeCallback:(state: StateType) => void) => void
    _rerenderEntireTree: (state: StateType) => void
    getState: () => StateType
    // setState: (state: StateType) => void
    dispatch: (action: ActionsTypes) => void
}

type AddPostActionType = {
    type: 'ADD-POST'
}

type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    postText: string
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType

export const store:StoreType = {
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
            ]
        },
        sidebar: {}
    },
    _rerenderEntireTree() {},

    addPost() {
        const newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._rerenderEntireTree(this._state)
    },

    subscribe(rerenderEntireTreeCallback) {
        this._rerenderEntireTree = rerenderEntireTreeCallback
    },
    getState() {
        return this._state
    },

    updateNewPostText(postText: string) {
        this._state.profilePage.newPostText = postText
        this._rerenderEntireTree(this._state)
    },

    // setState(state) {
    //     this._rerenderEntireTree(state)
    // }

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._rerenderEntireTree(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.postText
            this._rerenderEntireTree(this._state)
        }
    }


}