import constant from './actions'

export const startAuth = keyWord => {

    return {
        type: constant.START_AUTHENTICATING,
        authenticated:false,
        authenticating:true
    }
}

export const alreadyLogin = response => {

    return{
        type:constant.ALREADY_LOGIN,
        authenticated:true,
        authenticating:false,
        user:response

    }
}

export const authError = error => {

    return {
        type: constant.AUTHENTICATION_FAILED,
        authenticated:false,
        authenticating:false,
        error
    }
}

export const authSuccess = response => {
    return {
        type: constant.AUTHENTICATION_SUCCESSFUL,
        user:response,
        authenticated:true,
        authenticating:false
    }
}
//todo should no be here


