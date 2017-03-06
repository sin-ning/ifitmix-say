/**
 * Created by sin on 16/9/23.
 */

import { fork } from 'redux-saga/effects';

import login from './login';

export default function* () {
    yield [
        login()
    ]
}