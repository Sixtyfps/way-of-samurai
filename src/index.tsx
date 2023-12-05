import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {store} from './redux/redux-store'
import {Provider} from "react-redux";


    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'))



// sending rerenderEntireTree function to state (where subscribe located)
// so we can use rerenderEntireTree in store.ts (after changes in state)
// as callback without importing it.

// index.tsx starts before store.ts and function subscribe rewrite
// rerenderEntireTree in store.ts before we reach store.ts
