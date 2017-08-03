import constants from '../actions/actions'

const search = (state = [], action) => {

    switch (action.type) {

        case constants.SEARCH_BOOK:
            return Object.assign({},state,{
                authenticated:true,
                authenticating:false,
                showSearchResponse:false
            },...state)
            break;
        case constants.SEARCH_BOOK_ERROR:
            return Object.assign({},state,{
                fetchingSearchResponse:false,
                fetchingSearchResponseError:true,
                showSearchResponse:false
            },...state)
            break;
        case constants.SEARCH_BOOK_RESPONSE_RECEIVED:
            console.log('authentication.js response received')

            return Object.assign({},state,{
                searchResponse:action.response,
                fetchingSearchResponse:false,
                fetchingSearchResponseError:false,
                showSearchResponse:true
            },...state)

            break;
        case constants.REMOVE_SEARCH_RESULT:

            return Object.assign({},state,{
                searchResponse:{},
                fetchingSearchResponse:false,
                fetchingSearchResponseError:false,
                showSearchResponse:false
            },...state)
            break;
        default:
            return state
    }
}
export default search