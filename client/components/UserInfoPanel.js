import React from 'react';
import {connect} from "react-redux";

class UserInfoPanel extends React.Component {

    render() {
        return (

            <div className="panel panel-default col-lg-3 col-md-6 ">
                {
                    this.props.authenticated && <div className="panel-heading">
                        <h3 className="panel-title">{this.props.user.displayName}</h3>
                    </div>
                }
                {
                    this.props.authenticated && <div className="panel-body">

                    </div>
                }



            </div>
        );
    }
}


function mapStateToProps(state) {
    return {

        authenticated: state.auth.authenticated,
        authenticating: state.auth.authenticating,
        user: state.auth.user
    }

}

export default connect(mapStateToProps)(UserInfoPanel)