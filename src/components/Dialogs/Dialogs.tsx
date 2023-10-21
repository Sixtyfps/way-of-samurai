import React from "react";
import s from'./Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsType = {

}
export const Dialogs: React.FC<DialogsType> = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialogs}` + ' ' + `${s.active}`}>
                   <NavLink to="/dialogs/1">Dimich</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Petr</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Kot</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Pes</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Dim</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi!</div>
                <div className={s.dialog}>Wassup</div>
                <div className={s.dialog}>How you doin?</div>
            </div>
        </div>
    )
}