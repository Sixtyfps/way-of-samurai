import React from "react";
import {addMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {DialogsPageType} from "../../redux/store";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    newMessage: string
}

type MapDispatchToPropsType = {
    updateMessage: (newMessage: string) => void,
    addMessage: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        newMessage: state.dialogsPage.newMessage
    }
}

const mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => {
    return {
        updateMessage: (newMessage: string) => {
            dispatch(updateMessageAC(newMessage))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)