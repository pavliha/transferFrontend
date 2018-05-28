import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise-middleware'


const reducers = combineReducers({})


const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(
    thunk,
    promiseMiddleware(),
  )),
)

export default store
