/**
 * Created by sin on 2016/10/13.
 */

import React, { Component, PropTypes ,createElement } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Input, Button, CheckBox } from '../../components/Form';
import { CreateChatRoomLayout } from '../../layouts/ChatRoomLayout';
import MainLayout from '../../layouts/MainLayout';
import colores from '../../styles/colores';



const getChildStyles = () => {
    return {
        mainLayout: {
            container: {
                backgroundColor: colores.blue60,
                alignItems: 'center',
                justifyContent: 'center',

            },
        },

        createChatRoomLayout: {
            container: {
            },
        },
    };
};

const getStyles = () => {

    return {


        from: {
            width: 330,
            height: 450,
            justifyContent: 'center',
            shadowColor: colores.black40,
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.8,
            shadowRadius: 5,
            // flexDirection: 'column',
            // alignItems: 'center',
        },
    };
};


class CreateChatRoom extends Component {


    render() {

        const stylesChild = getChildStyles();
        const styles = StyleSheet.create(getStyles());

        return (
            <MainLayout style={stylesChild.mainLayout}
                        type={MainLayout.CONSTANTS.TYPE_NAV_TOP} >

                <View style={styles.from}>
                    <CreateChatRoomLayout />
                </View>
            </MainLayout>
        );
    }
}

export default CreateChatRoom;