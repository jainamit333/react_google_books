import React, { Component } from 'react'
import {login,resetPassword} from '../../firebase/auth.js'

function setErrorMsg(error) {
    return {
        loginMessage: error
    }
}

export default class Login extends Component {
    constructor(){
        super()
        this.state = { loginMessage: null }
    }

    handleSubmit(e){
        e.preventDefault()
        login(this.email.value, this.pw.value)
            .catch((error) => {
                this.setState(setErrorMsg('Invalid username/password.'))
            })
    }
    resetPass(){
        resetPassword(this.email.value)
            .then(() => this.setState(setErrorMsg(`Password reset email sent to ${this.email.value}.`)))
            .catch((error) => this.setState(setErrorMsg(`Email address not found.`)))
    }
    render () {
        return (
            <div className="col-sm-6 col-sm-offset-3">
                <h1> Login </h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" ref={(email) => this.email = email} placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password" ref={(pw) => this.pw = pw} />
                    </div>
                    {
                        this.state.loginMessage &&
                        <div className="alert alert-danger" role="alert">
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span>
                            &nbsp;{this.state.loginMessage} <a href="#" onClick={this.resetPass.bind(this)} className="alert-link">Forgot Password?</a>
                        </div>
                    }
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }
}