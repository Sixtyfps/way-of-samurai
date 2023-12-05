import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/store";

type DialogsType = {
    updateMessage: (newMessage: string) => void
    addMessage: () => void
    newMessage: string
    dialogsPage: DialogsPageType
}


export const Dialogs: React.FC<DialogsType> = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map( d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map( m => <Message message={m.message} key={m.id}/>)

    const updateMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMessage(e.currentTarget.value)
    }

    const addMessage = () => {
        props.addMessage()
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
                      onChange={updateMessage}
                      value={props.newMessage}
                      placeholder={'Enter the message'}></textarea>
            <button className={s.sendButton}
                    onClick={addMessage}>Send
            </button>
        </div>
    )
}