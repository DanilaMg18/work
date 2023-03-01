import {createStore, combineReducers} from 'redux'
import { userReducer } from './userReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import { cartReducer } from './cartReducer'
import { productsReducer } from './productsReducer'

const rootReducer = combineReducers({
    users: userReducer,
    orders: cartReducer,
    products: productsReducer
})

export const store = createStore(rootReducer, composeWithDevTools())