import { createStore, applyMiddleware, compose } from 'redux';
import { familyAppReducers } from './reducers';
import { loginMiddleware } from './middleware'

export const appStore = createStore(
    familyAppReducers,
    applyMiddleware(
        loginMiddleware
    )
);