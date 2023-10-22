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

    let dialogsData = [
        {id: 1, name: 'Dimich'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'John'},
        {id: 4, name: 'Sam'},
        {id: 5, name: 'Artem'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Wassup!'},
        {id: 3, message: 'How are you'},
        {id: 4, message: 'Bye'},
        {id: 5, message: 'Night!'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name="Andrey" id={2}/>
                <DialogItem name="John" id={3}/>
                <DialogItem name="Sam" id={4}/>
                <DialogItem name="Artem" id={5}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
            </div>
        </div>
    )
}