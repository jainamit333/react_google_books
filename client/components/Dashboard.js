import React, {Component} from 'react';
import {connect} from "react-redux";
import Navigation from "./Navigation";
import SearchResult from "./SearchResult";


class Dashboard extends Component {

    render() {
        return (
            <div>
                <Navigation dispatch={this.props.dispatch}/>
                <div className="mui-row">
                    <SearchResult searchResponse={this.props.searchResponse}
                                  fetchingSearchResponse={this.props.fetchingSearchResponse}
                                  dispatch={this.props.dispatch}/>
                </div>
            </div>
        )
    }
}


function mapStateToProp(state) {
    return state;
}

export default connect(mapStateToProp)(Dashboard)
