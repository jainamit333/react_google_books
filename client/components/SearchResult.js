import React from 'react';
import {connect} from "react-redux";

class SearchResult extends React.Component {

    constructor(){
        super()
    }

    componentWillUpdate(nextProps, nextState){
    }

    render() {

        var styles = {
            scrollMenu: {
                overflowX: 'auto',
                whiteSpace: 'nowrap',
                marginBottom: '3px'

            },

            scrollAnchor: {
                display: 'inline-block',
                color: 'black',
                textAlign: 'center',
                padding: '14px',
                textDecoration: 'none'
            },
            card: {
                width: '250px',
                border: '1px solid grey',
                borderRadius: '5px',
                padding: '15px',
                display: 'inline-block',
                marginLeft: '2px',
                textAlign: 'centre',
                whiteSpace: 'normal',
                maxHeight: '250px',
                overflowY: 'scroll'

            },
            imageStretch:{
                width:'100%',
                maxHeight:'180px'
            }

        };


        return (


            <div style={styles.scrollMenu}>
                {
                    this.props.searchResponse.items != null ? this.props.searchResponse.items.map((item,key) =>
                        <div className="card col-3" style={styles.card} key={key}>
                            <img className="card-img-top"
                                 style={styles.imageStretch}
                                 src={item.volumeInfo.imageLinks.thumbnail}/>
                            <div className="card-block">
                                <a className="card-title" href={item.volumeInfo.previewLink}>{item.volumeInfo.title} </a>
                                <div>
                                    <span>Pages <span className="badge badge-primary">{item.volumeInfo.pageCount}</span></span>
                                    <span>Rating <span className="badge badge-primary">{item.volumeInfo.averageRating}</span></span>
                                    <span>Rate Count <span className="badge badge-primary">{item.volumeInfo.ratingsCount}</span></span>
                                    <span>Language <span className="badge badge-primary">{item.volumeInfo.language}</span></span>
                                </div>
                                <div>
                                    <p> {item.volumeInfo.description}</p>
                                </div>



                            </div>
                        </div>
                    ) : null
                }
            </div>
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

export default connect(mapStateToProps)(SearchResult);