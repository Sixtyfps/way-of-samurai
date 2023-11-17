import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType} from "./redux/store";
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/redux-store'

const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
                <App store={store}/>
        </BrowserRouter>, document.getElementById('root'))
}

// initial application render with initial state
rerenderEntireTree(store.getState())

// sending rerenderEntireTree function to state (where subscribe located)
// so we can use rerenderEntireTree in store.ts (after changes in state)
// as callback without importing it.

// index.tsx starts before store.ts and function subscribe rewrite
// rerenderEntireTree in store.ts before we reach store.ts
store.subscribe(()=>{
    rerenderEntireTree(store.getState())
})