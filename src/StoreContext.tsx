import React from "react";
import {AppStoreType, store} from "./redux/redux-store";
import App from "./App";

export const StoreContext = React.createContext({} as AppStoreType)

export type ProviderType = {
    store: AppStoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    );
};