import React, {Component} from 'react';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router'
import {logout} from '../../firebase/auth'
import {firebaseAuth} from '../../firebase/config'
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";



function PrivateRoute ({component: Component, authed:authed, path:path}) {
    return (
        <Route
            {...path}
            render={(props) => authed === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
        />
    )
}

function PublicRoute ({component: Component, authed:authed, path:path}) {
    return (
        <Route
            {...path}
            render={(props) => authed === false
                ? <Component {...props} />
                : <Redirect to='/dashboard' />}
        />
    )
}

class Layout extends Component {

    constructor(props){
        super(props);
        this.state = {
            authed: false,
            loading: true,
        }
    }

    componentDidMount () {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authed: true,
                    loading: false,
                })
            } else {
                this.setState({
                    authed: false,
                    loading: false
                })
            }
        })
    }

    componentWillUnmount () {
        this.removeListener()
    }
    render() {
        return this.state.loading === true ? <h1>Loading</h1> : (
            <BrowserRouter>
                <div>
                    <nav className="navbar navbar-default navbar-static-top">
                        <div className="container">
                            <div className="navbar-header">
                                <Link to="/" className="navbar-brand">React Router + Firebase Auth</Link>
                            </div>
                            <ul className="nav navbar-nav pull-right">
                                <li>
                                    <Link to="/" className="navbar-brand">Home</Link>
                                </li>
                                <li>
                                    <Link to="/dashboard" className="navbar-brand">Dashboard</Link>
                                </li>
                                <li>
                                    {this.state.authed
                                        ? <button
                                            style={{border: 'none', background: 'transparent'}}
                                            onClick={() => {
                                                logout()
                                            }}
                                            className="navbar-brand">Logout</button>
                                        : <span>
                        <Link to="/login" className="navbar-brand">Login</Link>
                        <Link to="/register" className="navbar-brand">Register</Link>
                      </span>}
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="row">
                            <Switch>
                                <PublicRoute authed={this.state.authed} path='/login' component={Login} />
                                <PublicRoute authed={this.state.authed} path='/register' component={Register} />
                                <PrivateRoute authed={this.state.authed} path='/' component={Dashboard} />
                                <Route render={() => <h3>No Match</h3>} />
                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

// function mapStateToProp(state) {
//     return state;
// }
export default Layout
// export default connect(mapStateToProp)(Layout)
