import constant from './actions'

export const search = keyWord => {

    return {
        type: constant.SEARCH_BOOK,
        keyWord
    }
}

export const searchError = error => {

    return {
        type: constant.SEARCH_BOOK_ERROR,
        error
    }
}

export const searchBookResponseReceived = response => {

    return {
        type: constant.SEARCH_BOOK_RESPONSE_RECEIVED,
        response
    }
}

export const removeSearchResult = () => {

    return{
        type:constant.REMOVE_SEARCH_RESULT
    }

}


