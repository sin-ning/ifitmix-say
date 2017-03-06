/**
 * Created by sin on 16/10/8.
 */

import React, { Component } from 'react';
import {Text, View, Navigator, StyleSheet, StatusBar, NavigationBar} from 'react-native';
import { Input, Button, CheckBox } from '../../components/Form';

const getChildStyles = () => {

    return {
        verificationCodeButton: {
            button: {
                height: 38,
            }
        }
    };
};

const getStyles = (props) => {

    const { style } = props;

    return {
        container: {
            flex: 1,
            flexDirection: 'column',
            paddingBottom: 10,
            paddingLeft: 30,
            paddingRight: 30,
            marginBottom: 20,
        },
        item: {
            paddingTop: 30,
        },
        buttonItem: {
            paddingTop: 40,
        },
        footer: {
            flex: 1,
            // backgroundColor: 'red',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexDirection: 'column',
        },
        footerBody: {
            flexDirection: 'row',
            position: 'relative',
        }
    };
};

class RegisterPhone extends Component {


    render() {
        const styles = StyleSheet.create(getStyles(this.props));
        const childStyles = getChildStyles(this.props);

        return (
            <View style={styles.container}>

                <View style={styles.item}>
                    <Input icon={require('./imgs/icon_shouji.png')}
                           type={Input.CONSTANTS.TYPE_UNDERLINE}
                           placeholder="+86 请输入手机号码" />

                </View>

                <View style={styles.item}>
                    <Input
                           alterCmd={<Button status={Button.CONSTANTS.STATUS_PRIMARY}
                                          type={Button.CONSTANTS.TYPE_SQUARE}
                                          style={childStyles.verificationCodeButton}>获取验证码</Button>}
                           placeholder="请输入验证码"
                    />
                </View>

                <View style={styles.item}>
                    <Input icon={require('../Login/imgs/icon_password.png')}
                           type={Input.CONSTANTS.TYPE_UNDERLINE}
                           placeholder="请输入6 ~ 20 位密码" />
                </View>

                <View style={styles.item}>
                    <Input icon={require('../Login/imgs/icon_password.png')}
                           type={Input.CONSTANTS.TYPE_UNDERLINE}
                           placeholder="请再次输入密码" />
                </View>

                <View style={styles.buttonItem}>
                    <Button size={Button.CONSTANTS.SIZE_LARGE} status={Button.CONSTANTS.STATUS_PRIMARY}>完成</Button>
                </View>

                <View style={styles.footer}>
                    <View style={styles.footerBody}>
                        <CheckBox checked={true} />
                        <Text>我已同意</Text>
                        <Button type={Button.CONSTANTS.TYPE_LINK} status={Button.CONSTANTS.STATUS_PRIMARY}>用户协议</Button>
                        <Text>条款</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default RegisterPhone;