import React, {Component} from "react";
import {connect} from "react-redux";
import Navigation from "./Navigation";
import SearchResult from "./SearchResult";
import {login} from "../../firebase/auth";
import UserInfoPanel from "./UserInfoPanel";


class Dashboard extends Component {

    componentDidMount() {
        login(this.props.dispatch)
    }

    render() {
        return (
            <div>
                <Navigation dispatch={this.props.dispatch}/>
                <div className="mui-row">
                    <SearchResult searchResponse={this.props.searchResponse}
                                  fetchingSearchResponse={this.props.fetchingSearchResponse}
                                  dispatch={this.props.dispatch}/>
                </div>
                <div className="mui-row">
                    <UserInfoPanel userDetail={this.props.auth}/>
                </div>
            </div>
        )
    }
}

function mapStateToProp(state) {
    return state;
}

export default connect(mapStateToProp)(Dashboard)
