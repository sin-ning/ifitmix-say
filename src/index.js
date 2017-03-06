/**
 * Created by sin on 16/9/22.
 */

import React, { Component } from 'react';
import { Navigator, Text } from 'react-native';

import { Provider } from 'react-redux';

import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import sagas from './sagas';
import Routers from './routers';
import reducers from './reducers';


const sagaMiddleware = createSagaMiddleware();
const initialState = {login: {"abv":"123"}};
const enhancer = compose(applyMiddleware(sagaMiddleware));

const store = createStore(combineReducers({
    ...reducers
}), initialState, enhancer);

// then run the saga
sagaMiddleware.run(sagas);


export default class App extends Component {

    render() {
        console.log('init props', this.props);
        console.log('init store', store);
        return (
            <Provider store={store}>
                <Routers/>
            </Provider>
        );
    }
}