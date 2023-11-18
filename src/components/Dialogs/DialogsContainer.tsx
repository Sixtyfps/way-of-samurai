import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/store";
import {addMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {AppStoreType} from "../../redux/redux-store";

type DialogsType = {
    store: AppStoreType
}


export const DialogsContainer: React.FC<DialogsType> = (props) => {
    const state = props.store.getState().dialogsPage

    const updateMessage = (newMessage: string) => {
        props.store.dispatch(updateMessageAC(newMessage))
    }

    const addMessage = () => {
        props.store.dispatch(addMessageAC())
    }


    return <Dialogs updateMessage={updateMessage}
                    dialogsPage = {state}
                    newMessage = {state.newMessage}
                    addMessage={addMessage}/>
}