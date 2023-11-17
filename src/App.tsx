import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {AppStoreType} from "./redux/redux-store";

type AppPropsType = {
    store: AppStoreType
}

const App: React.FC<AppPropsType> = (props: AppPropsType) => {
    const state = props.store.getState()

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/dialogs' render={() => <Dialogs
                    state={state.dialogsPage}
                    dispatch={props.store.dispatch.bind(props.store)}/>}/>
                <Route path='/profile' render={() => <Profile
                    state={state.profilePage}
                    dispatch={props.store.dispatch.bind(props.store)}
                />}/>
            </div>
        </div>
    )
}


export default App;
