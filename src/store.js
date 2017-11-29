import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/root.reducer'
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'react-router-redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';


const history = createBrowserHistory()

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(
        routerMiddleware(history),
        thunk,
        promiseMiddleware()
    )))

export default store
export {history}
