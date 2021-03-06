import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import combineReducers from './reducers/index'

const initialState = {}
const middleware = [thunk]

export const store = createStore<any, any, any, any>(() => [], {}, applyMiddleware(...middleware));