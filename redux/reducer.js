import { combineReducers } from 'redux'
import search from './reducers/search'
import auth from "./reducers/auth";

const googleBooks = combineReducers({
    search,
    auth
})

export default googleBooks
