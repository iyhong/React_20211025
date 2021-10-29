import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import ReduxLogger from 'redux-logger'
import ReduxThunk from 'redux-thunk'

import rootReducer from './modules'

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware( ReduxThunk )
));

// npm i redux react-redux redux-actions redux-devtools-extension
// npm i redux-logger redux-thunk
// npm i react-router react-router-dom
// npm i axios immer

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
