import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk'
import {createBrowserHistory} from 'history'
import {routerMiddleware, routerReducer} from 'react-router-redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import promiseMiddleware from 'redux-promise-middleware';
import expensesReducer from './global/reducers/expenses.reducer'
import addExpenseCardReducer from './modules/AddExpenseCard/addExpenseCard.reducer'

const reducers = combineReducers({
    router: routerReducer,
    expensesReducer,
    addExpenseCardReducer
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
