import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/root.reducer'
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const history = createBrowserHistory()

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(
        routerMiddleware(history),
        thunk,
    )))

export default store
export {history}
