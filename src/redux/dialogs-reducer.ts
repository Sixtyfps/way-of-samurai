import {ActionsTypes, DialogsPageType, MessageType, PostType, StateType} from "./state";

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes): DialogsPageType => {
//--------------------Manipulations with messages----------------------
    switch (action.type) {

        case "UPDATE-MESSAGE": {
            state.newMessage = action.message
            return state
        }

        case "ADD-MESSAGE": {
            const newMessage: MessageType = {
                id: 3,
                message: state.newMessage
            }
            state.messages.push(newMessage)
            state.newMessage = ''
            return state
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