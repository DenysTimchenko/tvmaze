import {combineReducers} from 'redux';
import {show} from './show';
import {episodes} from './episodes';

const rootReducer = combineReducers({
    show,
    episodes
});

export default rootReducer;