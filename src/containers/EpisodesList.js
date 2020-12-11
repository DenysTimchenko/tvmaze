import React, {Component} from 'react';
import {connect} from 'react-redux';
import {episodesFetchData} from '../actions/episodes';
import { Link } from 'react-router-dom';

class EpisodesList extends Component {
    
    componentDidMount() {
        this.props.fetchData('http://api.tvmaze.com/shows/6771/episodes')
    }
    
    render() {
        return (
            <div className="content">
                <ul className="list-group">
                    {this.props.episodes.map((episodes) => {
                        return (
                            <li className="list-group-item" key={episodes.id}>
                                <Link to={`/episode/${episodes.id}`}>
                                    {episodes.name}
                                </Link>
                            </li>
                        )

                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        episodes: state.episodes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(episodesFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesList);