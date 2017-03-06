/**
 * Created by sin on 16/9/23.
 */
import React, { Component, PropTypes } from 'react';
import {Text, View, StyleSheet,  NativeModules, requireNativeComponent} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {Column as Col, Row} from 'react-native-flexbox-grid';

import Input  from '../../components/Form/Input';
import {Button, Link}  from '../../components/Form/Button';
import Label  from '../../components/Form/Label';
import colores from '../../styles/colores';
import { ComponentTheme, CommonColor, CommonFontSize, colors } from '../../styles/theme';

class Login extends Component {

    constructor() {
        super(...arguments);
    }

    onPress = () => {
        // console.log('NativeModules', NativeModules.Maps.RNOpenVC('abc'));
        Actions.register();
    };

// <RCTMyButton title="点击" style={{height: 50, width: 100, backgroundColor: 'red'}} />
    // <RCTMyMap region={region} onChange={this._onChange} style={{height: 200, width: 300}} />

    _onChange = (event) => {
        if (!this.props.onRegionChange) {
            return;
        }
        this.props.onRegionChange(event.nativeEvent.region);
    };

    render() {

        console.log('state login', this.props);

        const region = {
            latitude: 37.48,
            longitude: -122.16,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
        };

        // const RCTMyMap = requireNativeComponent('RCTMyMap', null);
        // const RCTMyButton = requireNativeComponent('RCTMyButton', null);
        // const OneView = requireNativeComponent('OneView', null);
        // const IOSViewController = requireNativeComponent('IOSViewController', null);
        // console.log('RCTMyMap', RCTMyMap);
        // console.log('RCTMyButton', RCTMyButton);
        // console.log('OneView', OneView);

        const childStyles = getChildStyles(this.props);

        return (
            <View style={styles.container}>
                <View style={styles.loginView}>
                    <Row size={12} nowrap>
                        <Col smOffset={1} sm={10}>
                            <Input style={childStyles.input} type={Input.CONSTANTS.TYPE_UNDERLINE} icon={require('./imgs/icon_user.png')} />
                            <Input style={childStyles.input} password={true} type={Input.CONSTANTS.TYPE_UNDERLINE} icon={require('./imgs/icon_password.png')} />
                        </Col>
                    </Row>
                    <Row style={styles.loginRow} size={12} nowrap>
                        <Col smOffset={1} sm={10}>

                            <Button onPress={this.onPress}
                                status={Button.CONSTANTS.STATUS_PRIMARY}
                                size={Button.CONSTANTS.SIZE_LARGE}
                            >
                                登录
                            </Button>
                        </Col>
                    </Row>
                    <Row style={styles.loginRow} size={12} nowrap>
                        <Col smOffset={1} sm={10}>
                            <Row size={2}>
                                <Col sm={1}>
                                    <Link type={Link.CONSTANTS.TYPE_WEAK} size={Link.CONSTANTS.SIZE_LARGE}>立即注册></Link>
                                </Col>
                                <Col sm={1}>
                                    <Link style={childStyles.password} type={Link.CONSTANTS.TYPE_WEAK} size={Link.CONSTANTS.SIZE_LARGE}>忘记密码?</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </View>


                <View style={styles.otherLoginView}>
                    <View style={styles.otherLoginSolid}>

                        <Label style={childStyles.otherLoginText}>其他登录</Label>
                    </View>
                    <View style={styles.otherLoginMode}>
                        <Button type={Button.CONSTANTS.TYPE_LINK} width={80} size={Button.CONSTANTS.SIZE_LARGE} icon={require('./imgs/weibo@2x.png')}/>
                        <Button type={Button.CONSTANTS.TYPE_LINK} width={80} size={Button.CONSTANTS.SIZE_LARGE} icon={require('./imgs/weixin@2x.png')}/>
                        <Button type={Button.CONSTANTS.TYPE_LINK} width={80} size={Button.CONSTANTS.SIZE_LARGE} icon={require('./imgs/qq@2x.png')}/>
                    </View>
                </View>
            </View>
        );
    }
}


const getChildStyles = (props, state, context) => {

    return {
        input: {
            // height: 50,
            container: {
                paddingBottom: 0,
                marginTop: 10,
                marginBottom: 20,
            }
        },
        password: {
            textAlign: 'right',
        },
        otherLoginText: {
            position: 'relative',
            top: 8,
            width: 80,
            textAlign: 'center',
        }
    };
};


const styles = StyleSheet.create({

    container: {
        flex: 1,
        // alignItems: 'center',
        // flexDirection: 'column-reverse',
        flexDirection: 'column',
        backgroundColor: CommonColor.BACKGROUND_COLOR,
    },
    loginView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 150,
        // alignItems: 'center',
    },
    center: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    loginRow: {
        marginTop: 20,
    },
    login: {
        flex: 1,
        flexDirection: 'column',
    },
    otherLoginView: {
    },
    otherLoginSolid: {
        borderBottomWidth: 1,
        borderColor: colores.black80,
        alignItems: 'center',
    },
    otherLoginMode: {
        marginTop: 30,
        marginBottom: 30,
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

const mapStateToProps = function({ login }) {
    return { login }
};

export default connect(mapStateToProps)(Login);