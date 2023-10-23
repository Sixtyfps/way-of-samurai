export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

type ProfilePageType = {
    posts: Array<PostType>
}

type PostType = {
    id: number,
    message: string,
    likesCount: number
}

type DialogsPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessageType>
}

type DialogType = {
    id: number,
    name: string
}

type MessageType = {
    id: number,
    message: string
}

export let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 23},
            {id: 2, message: 'Hello! Its my first post', likesCount: 12},
        ]
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