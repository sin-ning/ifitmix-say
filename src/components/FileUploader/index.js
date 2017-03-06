/**
 * Created by sin on 2016/10/13.
 */


import React, { Component, PropTypes ,createElement } from 'react';
import {Text, View, Navigator, StyleSheet, NativeModules} from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';

const CONSTANTS = {
    METHOD_POST: 'post',
    METHOD_PUT: 'put',
};


class FileUploader extends Component {


    static propTypes = {
        /**
         * 上传地址
         */
        uploadUrl: PropTypes.string,
        /**
         * 上传方式 put post, default post
         */
        method: PropTypes.string,
        /**
         * 请求头
         */
        headers: PropTypes.object,
        /**
         * 自定义别
         */
        fields: PropTypes.object.isRequired,
        /**
         * 文件
         *
         * files: [
         {
           name: 'one', // optional, if none then `filename` is used instead
           filename: 'one.w4a', // require, file name
           filepath: '/xxx/one.w4a', // require, file absoluete path
           filetype: 'audio/x-m4a', // options, if none, will get mimetype from `filepath` extension
         },
         ]
         */
        files: PropTypes.array,
        /**
         * 触发 组件，显示组件
         */
        triggerComponent: PropTypes.element.isRequired,
    };

    static defaultProps = {
        uploadUrl: '',
        method: CONSTANTS.METHOD_POST,
        headers: {
            'Accept': 'application/json',
        },
        fields: {

        }
    };


    _onPress = () => {
        RNFetchBlob.fetch('POST', 'https://content.dropboxapi.com/2/files/upload', {
            Authorization : "Bearer access-token...",
            'Dropbox-API-Arg': JSON.stringify({
                path : '/img-from-react-native.png',
                mode : 'add',
                autorename : true,
                mute : false
            }),
            'Content-Type' : 'application/octet-stream',
            // here's the body you're going to send, should be a BASE64 encoded string
            // (you can use "base64"(refer to the library 'mathiasbynens/base64') APIs to make one).
            // The data will be converted to "byte array"(say, blob) before request sent.
        }, base64ImageString)
            .then((res) => {
                console.log(res.text())
            })
            .catch((err) => {
                // error handling ..
            })
    };


    render() {

        return (
            <View>

            </View>
        );
    }
}


/**

 Example

 const config = {
    uploadUrl: 'http://127.0.0.1:3000',
    method: 'POST', // default 'POST',support 'POST' and 'PUT'
    headers: {
        'Accept': 'application/json',
    },
    fields: {
        'hello': 'world',
    },
    files: [
        {
            name: 'one', // optional, if none then `filename` is used instead
            filename: 'one.w4a', // require, file name
            filepath: '/xxx/one.w4a', // require, file absoluete path
            filetype: 'audio/x-m4a', // options, if none, will get mimetype from `filepath` extension
        },
    ]
};

 **/