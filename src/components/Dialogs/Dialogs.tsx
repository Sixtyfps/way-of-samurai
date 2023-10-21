import React from "react";
import s from'./Dialogs.module.css'

type DialogsType = {

}
export const Dialogs: React.FC<DialogsType> = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialogs}` + ' ' + `${s.active}`}>
                    Dimich
                </div>
                <div className={s.dialog}>
                    Dim
                </div>
                <div className={s.dialog}>
                    Dim
                </div>
                <div className={s.dialog}>
                    Dim
                </div>
                <div className={s.dialog}>
                    Dim
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