import {addMessageAC, dialogsReducer, updateMessageAC} from "./dialogs-reducer";
import {DialogsPageType} from "./store";

test ('message should be updated', () => {

    const startState: DialogsPageType = {
        dialogs: [
            {id: 1, name: 'Dimich'},
            {id: 2, name: 'Andrey'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Wassup!'},
        ],
        newMessage: ''
    }
    const endState = dialogsReducer(startState, updateMessageAC("Hello"))

    expect(endState.newMessage).toBe("Hello")

})

test ('message should be added from state', () => {

    const startState: DialogsPageType = {
        dialogs: [
            {id: 1, name: 'Dimich'},
            {id: 2, name: 'Andrey'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Wassup!'},
        ],
        newMessage: 'Secret message'
    }

    const endState = dialogsReducer(startState, addMessageAC())

    expect(endState.messages.length).toBe(3)
    expect(endState.dialogs.length).toBe(2)
    expect(endState.messages[2].message).toBe('Secret message')
    expect(endState.messages[2].id).toBe(3)

})