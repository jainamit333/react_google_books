import {ref, firebaseAuth, provider} from './config'
import firebase from 'firebase'
import {alreadyLogin, authError, authSuccess, startAuth} from "../redux/actions/auth";

export function auth(email, pw) {
    return firebaseAuth().createUserWithEmailAndPassword(email,pw)
        .then(saveUser);
}

export function logout () {

    return firebaseAuth().signOut()
}

function doLogin(dispatch) {

    firebaseAuth().signInWithPopup(provider).then(function(result) {
        console.log('login successful');
        console.log(result)
        dispatch(authSuccess(result.user))

    }).catch(function(error) {
        console.log('login error');
        console.log(error)
        dispatch(authError(error))
    });
}

export function login (dispatch) {

    firebaseAuth().onAuthStateChanged((response) => {
        if(response){
            console.log('login already');
            console.log(response)
            dispatch(alreadyLogin(response))
        }else{
            dispatch(startAuth())
            doLogin(dispatch)
        }
    });
    return
}

export function resetPassword (email) {
    return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
    return ref.child(`users/${user.uid}/info`)
        .set({
            email: user.email,
            uid: user.uid
        })
        .then(() => user)
}