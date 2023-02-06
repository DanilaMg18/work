import {createStore, combineReducers} from 'redux'
import { userReducer } from './userReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { cartReducer } from './cartReducer'

const rootReducer = combineReducers({
    users: userReducer,
    orders: cartReducer
})

export const store = createStore(rootReducer, composeWithDevTools())