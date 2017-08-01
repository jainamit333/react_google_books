import React from 'react';
import request from 'superagent'
import {removeSearchResult, search, searchBookResponseReceived, searchError} from "../../redux/actions/search";
import {connect} from "react-redux";



class Navigation extends React.Component {

    constructor(prop){
        super(prop)
        this.state = {
            keyword:''
        }
    }

    handleEvent(event){
        this.setState({
            keyword:event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        if(this.state.keyword.length > 0){
            this.props.dispatch(search(this.state.keyword))
            let url = 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.keyword;
            console.log(url);
            request.get(url)
                .end((err,res) =>{
                    if(err){
                        this.props.dispatch(searchError())
                    }
                    const searchResponse = JSON.parse(res.text)
                    this.props.dispatch(searchBookResponseReceived(searchResponse))

                });


        }
    }

    handleResetSearch(event){

        console.log('reset search result');
        this.state.keyword = '';
        this.props.dispatch(removeSearchResult())

    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <span className="glyphicon glyphicon-bishop" aria-hidden="true"></span>

                        </a>
                        <form className="navbar-form navbar-left" role="search" onSubmit={this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Search Books"
                                value={this.state.keyword}
                                onChange={this.handleEvent.bind(this)}/>
                            </div>
                            <button type="submit" className="btn btn-default" >Search</button>
                            {
                                this.props.searchResponse.items != null &&
                                <button  className="btn btn-default " onClick={this.handleResetSearch.bind(this)}>Clear</button>
                            }
                        </form>
                    </div>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchResponse: state.search.searchResponse,
        fetchingSearchResponse: state.search.fetchingSearchResponse,
        fetchingSearchResponseError: state.search.fetchingSearchResponseError,

    }
}

export default connect(mapStateToProps)(Navigation)