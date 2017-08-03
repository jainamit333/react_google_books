/**
 * Created by amitjain on 8/2/17.
 */
import constants from '../actions/actions'

const auth = (state = [], action) => {
    switch (action.type) {

        case constants.START_AUTHENTICATING:
            return Object.assign({}, state, {
                authenticated: false,
                authenticating: true,
                user: action.user
            }, ...state)
            break;
        case constants.AUTHENTICATION_FAILED:
            return Object.assign({}, state, {
                authenticated: false,
                authenticating: false,
                user: {}
            }, ...state)
            break;
        case constants.AUTHENTICATION_SUCCESSFUL:
            return Object.assign({}, state, {
                authenticated: true,
                authenticating: false,
                user: action.user
            }, ...state)
            break;

        case constants.ALREADY_LOGIN:
            return Object.assign({}, state, {
                authenticated: true,
                authenticating: false,
                user: action.user
            }, ...state)
            break;
        default:
            return state
    }

}

export default auth