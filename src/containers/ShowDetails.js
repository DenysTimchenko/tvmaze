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
            <div className="content">
                <h3>{this.props.show.name}</h3>
                <SanitizedHTML html={this.props.show.summary} allowedTags={['p', 'b']} />
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