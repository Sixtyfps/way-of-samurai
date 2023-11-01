import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsType = {
    state: DialogsPageType
}


export const Dialogs: React.FC<DialogsType> = (props) => {

    // let dialogs = [
    //     {id: 1, name: 'Dimich'},
    //     {id: 2, name: 'Andrey'},
    //     {id: 3, name: 'John'},
    //     {id: 4, name: 'Sam'},
    //     {id: 5, name: 'Artem'},
    // ]
    //
    // let messages = [
    //     {id: 1, message: 'Hi'},
    //     {id: 2, message: 'Wassup!'},
    //     {id: 3, message: 'How are you'},
    //     {id: 4, message: 'Bye'},
    //     {id: 5, message: 'Night!'},
    // ]

    let dialogsElements = props.state.dialogs.map((d, key) => <DialogItem name={d.name} id={d.id} key={key}/>)
    let messagesElements = props.state.messages.map((m, key) => <Message message={m.message} key={key}/>)

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