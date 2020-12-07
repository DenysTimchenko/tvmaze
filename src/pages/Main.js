import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import allReducers from '../reducers/rootReducer';

import {ShowPage} from '../components/ShowPage';

const store = createStore (
    allReducers,
    composeWithDevTools(applyMiddleware(thunk))
);

export const Main = () => {
    return (
        <Provider store={store}>
            <ShowPage />
        </Provider>
    )
}