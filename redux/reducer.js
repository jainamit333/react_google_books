import { combineReducers } from 'redux'
import search from './reducers/search'

const googleBooks = combineReducers({
    search
})

export default googleBooks
