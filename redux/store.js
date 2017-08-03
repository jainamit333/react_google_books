import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';


const initialState = {
    search:{
        searchResponse:{},
        fetchingSearchResponse:false,
        fetchingSearchResponseError:false,
        showSearchResponse:false
    },
    auth:{
        authenticated:false,
        authenticating:false,
        user:{},
    }
}

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(
        createLogger(),
        thunk
    )

);
export default store;