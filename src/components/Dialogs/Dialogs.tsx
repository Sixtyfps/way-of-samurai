import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsType = {}

type DialogItemType = {
    name: string
    id: number
}

type MessageType = {
    message: string
}

const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = "/dialogs/" + props.id

    return (
        <div className={`${s.dialogs}` + ' ' + `${s.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}


export const Dialogs: React.FC<DialogsType> = (props) => {

    let dialogs = [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'John'},
        {id: 4, name: 'Sam'},
        {id: 5, name: 'Artem'},
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Wassup!'},
        {id: 3, message: 'How are you'},
        {id: 4, message: 'Bye'},
        {id: 5, message: 'Night!'},
    ]

    let dialogsElements = dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)
    let messagesElements = messages.map(el => <Message message={el.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}