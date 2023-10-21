import React from "react";
import s from'./Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsType = {

}

type DialogItemType = {
    name: string
    id: string
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Dimich" id="1"/>
                <DialogItem name="Andrey" id="2"/>
                <DialogItem name="John" id="3"/>
                <DialogItem name="Sam" id="4"/>
                <DialogItem name="Artem" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi!"/>
                <Message message="Wassup!"/>
                <Message message="How are you"/>

            </div>
        </div>
    )
}