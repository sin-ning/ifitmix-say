/**
 * Created by sin on 16/9/23.
 */
import React from 'react';
import { takeLatest } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* login(action) {
    console.info(action);
    console.log('sagas login');
    yield put({type: 'login/success', data: {aa:123}});
}

function* mySaga() {
    yield* takeLatest("login", login);
}

export default mySaga;