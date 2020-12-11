import React, {Component} from 'react';
import {connect} from 'react-redux';
import SanitizedHTML from 'react-sanitized-html';
import {showFetchData} from '../actions/show';

class ShowDetails extends Component {
    
    componentDidMount() {
        this.props.fetchData('http://api.tvmaze.com/shows/6771')
    }
    
    render() {
        return (
            <div className="container">
                <h3 className="mt-4 mb-4">{this.props.show.name}</h3>
                <div className="row mb-4">
                    <div className="col-lg-3 col-md-4 mb-4 text-md-center">
                        <a href={this.props.show.image} rel="noreferrer" target="_blank">
                            <img src={this.props.show.image} alt={this.props.show.name} title={this.props.show.name} />
                        </a>
                    </div>
                    <div className="col-lg-9 col-md-8 mb-4">
                        <SanitizedHTML html={this.props.show.summary} allowedTags={['p', 'b']} />
                    </div>
                </div>                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        show: state.show
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(showFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetails);