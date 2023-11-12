import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionsTypes, addMessageAC, DialogsPageType, updateMessageAC} from "../../redux/state";

type DialogsType = {
    state: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}


export const Dialogs: React.FC<DialogsType> = (props) => {
    let dialogsElements = props.state.dialogs.map((d, key) => <DialogItem name={d.name} id={d.id} key={key}/>)
    let messagesElements = props.state.messages.map((m, key) => <Message message={m.message} key={key}/>)

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateMessageAC(e.currentTarget.value))
    }

    const addMessage = () => {
        props.dispatch(addMessageAC())
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea className={s.messageInput}
                      onChange={onChangeHandler} value={props.state.newMessage}></textarea>
            <button className={s.sendButton}
                    onClick={addMessage}>Send</button>
        </div>
    )
}