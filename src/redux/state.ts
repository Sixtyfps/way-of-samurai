//--------------------T-Y-P-E-S----------------------------------
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

//--------------------S-T-O-R-E----------------------------------------------------------

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
//--------------------Dialogs Action Creators--------------------------
export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}

export const updateMessageAC = (message: string) => {
    return {
        type: 'UPDATE-MESSAGE',
        message: message
    } as const
}


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

    dispatch(action) {
//--------------------Manipulations with posts----------------------
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._rerenderEntireTree(this._state)
        }
        if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.postText
            this._rerenderEntireTree(this._state)
        }
//--------------------Manipulations with messages----------------------
        if (action.type === 'UPDATE-MESSAGE') {
            this._state.dialogsPage.newMessage = action.message
            this._rerenderEntireTree(this._state)
        }

        if (action.type === 'ADD-MESSAGE') {
            const newMessage: MessageType = {
                id: 3,
                message: this._state.dialogsPage.newMessage
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessage = ''
            this._rerenderEntireTree(this._state)
        }
    }


}