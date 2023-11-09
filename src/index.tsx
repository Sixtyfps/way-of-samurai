import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {StateType} from "./redux/state";
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/state'

const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>,
        </BrowserRouter>, document.getElementById('root'))
}

// initial application render with initial state
rerenderEntireTree(store._state)

// sending rerenderEntireTree function to state (where subscribe located)
// so we can use rerenderEntireTree in state.ts (after changes in state)
// as callback without importing it.

// index.tsx starts before state.ts and function subscribe rewrite
// rerenderEntireTree in state.ts before we reach state.ts
store.subscribe(rerenderEntireTree)