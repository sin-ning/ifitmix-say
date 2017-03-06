/**
 * Created by sin on 16/9/23.
 */
/**
 * Created by sin on 16/9/23.
 */
import React, { Component } from 'react';
import {Text, View, Navigator, StyleSheet, StatusBar, NavigationBar} from 'react-native';
import { Button, Input, Image, Label, ButtonGroup} from '../../components/Form';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import {Column as Col, Row} from 'react-native-flexbox-grid';
import { Tabs } from '../../components/Tabs';
import MainLayout from '../../layouts/MainLayout';
import RegisterPhone from './RegisterPhone';
import RegisterEmail from './RegisterEmail';

const TabsItem = Tabs.TabsItem;

class Register extends Component {

    constructor() {
        super(...arguments);
    }

    state = {
        tabsDefaultValue: 0,
        userIcon: null,
    };

    handlerButtonChange = (key) => {
        this.setState({
            tabsDefaultValue: key,
        });
    };

    handlerTabsChange = (index, state) => {
        console.log(index);
    };

    componentDidMount() {
    }


    render() {

        const { tabsDefaultValue } = this.state;

        return (
            <MainLayout style={styles.container}>

                <View style={styles.groupButton}>
                    <ButtonGroup
                        active={0}
                        onChange={this.handlerButtonChange}
                    >
                        <Button onPress={() => console.log()}>手机注册</Button>
                        <Button onPress={() => console.log()}>邮箱注册</Button>
                    </ButtonGroup>

                </View>

                <Tabs defaultValue={tabsDefaultValue}>
                    <TabsItem>
                        <RegisterPhone />
                    </TabsItem>
                    <TabsItem>
                        <RegisterEmail />
                    </TabsItem>
                </Tabs>

            </MainLayout>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 64,
        paddingTop: 20,
        // backgroundColor: 'red',
        // justifyContent: 'center',
        // alignItems: 'center',
        //flexDirection: 'row'
    },
    groupButton: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

const mapStateToProps = function({ register }) {
    return { register }
};

export default connect(mapStateToProps)(Register);