/**
 * Created by sin on 16/9/23.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {StatusBarIOS, Text, View, Navigator, StyleSheet, StatusBar} from 'react-native';
import { Scene, Router, Reducer, Actions, ActionConst } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    CommonFontSize,
    CommonColor,
    ComponentTheme,
    colors } from '../styles/theme';

import Login from './Login/Login';
import Register from './Register/Register';
import CreateChatRoom from './CreateChatRoom';


class Routers extends Component {

    state = {
        backLeft: null,
    };

    componentDidMount() {
        Icon.getImageSource('angle-left', 40, '#fff').then((source)=>this.setState({backLeft: source}))
    }

    _backButtonClick = () => {
        Actions.pop();
    };

    _renderBackButton = () => {
        return (
            <Icon size={33} name="angle-left" style={{color: '#fff', position: 'relative', top: -3, width: 100}} onPress={this._backButtonClick} />
        );
    };

    render() {

        const reducerCreate = params => {
            const defaultReducer = new Reducer({...params});
            return (state, action) => {
                return defaultReducer(state, action);
            };
        };

        const sceneNormalProps = {
            hideNavBar: false,
            renderBackButton: this._renderBackButton,
            titleStyle: {color: '#fff'},
            navigationBarStyle: {
                backgroundColor: ComponentTheme.NavigationBar.NORMAL_COLOR,
            }
        };

        const sceneHomeProps = {
            ...sceneNormalProps,
            renderBackButton: null,
        };

        return (
            <Router createReducer={reducerCreate} >
                <Scene key="createChatRoom" {...sceneNormalProps}
                       title="创建聊天室"
                       component={CreateChatRoom} />
                <Scene key="login" component={Login} hideNavBar={true}/>
                <Scene key="register" {...sceneNormalProps}
                       title="注册"
                       component={Register} />
            </Router>
        );
    }
}


export default Routers;