/**
 * Created by sin on 16/9/23.
 */

import { handleActions } from 'redux-actions';

const login = handleActions({

    ['login/success'](state) {
        console.log('login/success');
        return {...state};
    },
}, {
    name: 'test'
});

export default login;