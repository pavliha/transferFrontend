import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'react-router-redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';
import {combineReducers} from 'redux';

import {routerReducer} from 'react-router-redux'

const reducers =  combineReducers({
    router: routerReducer,
});


const history = createBrowserHistory()

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(
        routerMiddleware(history),
        thunk,
        promiseMiddleware()
    )))

export default store
export {history}
