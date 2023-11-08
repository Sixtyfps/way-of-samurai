import React from 'react';
import {state, subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, StateType, updateNewPostText} from "./redux/state";
import {BrowserRouter} from 'react-router-dom';

const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        </BrowserRouter>, document.getElementById('root'))
}

// initial application render with initial state
rerenderEntireTree(state)

// sending rerenderEntireTree function to state (where subscribe located)
// so we can use rerenderEntireTree in state.ts (after changes in state)
// as callback without importing it
subscribe(rerenderEntireTree)