/**
 * Created by sin on 16/10/8.
 *
 *
 * 邮箱注册
 */

import React, { Component, PropTypes ,createElement } from 'react';
import {Text, View, Navigator, StyleSheet, StatusBar, NavigationBar} from 'react-native';
import { Input, Button, CheckBox } from '../../components/Form';


const getStyles = (props) => {


    return {

        container: {
            flex: 1,
            flexDirection: 'column',
            paddingLeft: 30,
            paddingRight: 30,
            marginTop: 30,
            marginBottom: 20,
        },
        formItem: {
            paddingTop: 15,
            paddingBottom: 15,
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
        },

    };
};


class RegisterEmail extends Component {



    render() {

        const styles = StyleSheet.create(getStyles(this.props));

        console.log('styles', styles);

        return (
            <View style={styles.container}>
                <View style={styles.formItem}>
                    <Input icon={require('./imgs/icon_mail.png')} type={Input.CONSTANTS.TYPE_UNDERLINE} placeholder="请输入注册邮箱" />
                </View>
                <View style={styles.formItem}>
                    <Input icon={require('../Login/imgs/icon_password.png')} type={Input.CONSTANTS.TYPE_UNDERLINE} placeholder="请输入6～20位密码" />
                </View>
                <View style={styles.formItem}>
                    <Input icon={require('../Login/imgs/icon_password.png')} type={Input.CONSTANTS.TYPE_UNDERLINE} placeholder="请再次输入密码" />
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

export default RegisterEmail;