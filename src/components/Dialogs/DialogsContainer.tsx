import React from "react";
import {addMessageAC, updateMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {AppStoreType} from "../../redux/redux-store";
import {StoreContext} from "../../StoreContext";

// type DialogsContainerType = {
//     store: AppStoreType
// }


export const DialogsContainer: React.FC = (props) => {

    return <StoreContext.Consumer>
        { (store) => {
            const state = store.getState().dialogsPage

            const updateMessage = (newMessage: string) => {
                store.dispatch(updateMessageAC(newMessage))
            }

            const addMessage = () => {
                store.dispatch(addMessageAC())
            }
            return <Dialogs updateMessage={updateMessage}
                            dialogsPage = {state}
                            newMessage = {state.newMessage}
                            addMessage={addMessage}/>
        }
    }
    </StoreContext.Consumer>

}