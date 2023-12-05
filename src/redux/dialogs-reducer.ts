import {ActionsTypes, DialogsPageType, MessageType, PostType, StateType} from "./store";

const initialState: DialogsPageType = {
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
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
//--------------------Manipulations with messages----------------------
    switch (action.type) {

        case "UPDATE-MESSAGE": {
            return {
                ...state, newMessage: action.message
            }
            // state.newMessage = action.message
            // return state
        }

        case "ADD-MESSAGE": {
            return {
                ...state,
                messages: [...state.messages, {id: 10, message: state.newMessage}],
                newMessage: ''
            }
            // const newMessage: MessageType = {
            //     id: 3,
            //     message: state.newMessage
            // }
            // state.messages.push(newMessage)
            // state.newMessage = ''
            // return state
        }

        default: return state
    }
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