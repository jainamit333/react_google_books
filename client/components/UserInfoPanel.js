import React from 'react';

class UserInfoPanel extends React.Component {

    render() {
        return (
            <div className="panel panel-default col-lg-3 col-md-6 ">
                <div className="panel-heading">
                    <h3 className="panel-title">Panel title</h3>
                </div>
                <div className="panel-body">
                    Panel content
                </div>
            </div>
        );
    }
}

export default UserInfoPanel