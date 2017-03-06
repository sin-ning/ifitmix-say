/**
 * Created by sin on 2016/10/13.
 *
 * 创建 聊天室 Layout
 */

import React, { Component, PropTypes ,createElement } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Input, Button, CheckBox } from '../../components/Form';
import colors from '../../styles/colores';
import MergeStyles from '../../utils/MergeStyles';
import MainLayout from '../../layouts/MainLayout';


const getChildStyles = () => {

    return {
        input: {
            container: {
                borderBottomColor: colors.black80,
            }
        }
    }

};

const getStyles = (props) => {

    const { style } = props;

    return MergeStyles({
        container: {
            flex: 1,
            padding: 20,
            backgroundColor: colors.white00,
            flexDirection: 'column',
        },


        roomHeader: {
            alignItems: 'center',
            position: 'relative',
            top: -70,
            zIndex: 2,
        },
        roomImage: {
            height: 100,
            width: 100,
            borderRadius: 50,
            borderWidth: 3,
            borderColor: colors.black80,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.white00,
        },
        roomText: {
            fontSize: 60,
            color: colors.blue60,
            position: 'relative',
            top: -5,
        },


        roomBody: {
            backgroundColor: colors.white00,
            marginTop: -70,
        },


        fromItem: {
            marginTop: 30,
        },
        itemLabel: {
            borderBottomWidth: 1,
            borderBottomColor: colors.black80,
            paddingTop: 10,
            paddingBottom: 10,
        },
        textLabel: {
            color: colors.blue60,
        },


        footer: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
        }
    }, style);
};

class CreateChatRoomLayout extends Component {


    render() {

        const childStyles = getChildStyles(this.props);
        const styles = StyleSheet.create(getStyles(this.props));

        return (
            <View style={styles.container}>
                <View style={styles.roomHeader}>
                    <View style={styles.roomImage}>
                        <Text style={styles.roomText}>+</Text>
                    </View>
                </View>
                <View style={styles.roomBody}>
                    <View style={styles.fromItem}>
                        <View style={styles.itemLabel}>
                            <Text style={styles.textLabel}>聊天室资料</Text>
                        </View>
                        <Input
                            height={50}
                            style={childStyles.input}
                            beforeCmd={<Text>名称</Text>}
                            type={Input.CONSTANTS.TYPE_UNDERLINE}
                            placeholder="请输入聊天室名称"
                        />
                    </View>

                    <View style={styles.fromItem}>
                        <View style={styles.itemLabel}>
                            <Text style={styles.textLabel}>聊天室密码</Text>
                        </View>
                        <Input
                            height={50}
                            style={childStyles.input}
                            beforeCmd={<Text>名称</Text>}
                            type={Input.CONSTANTS.TYPE_UNDERLINE}
                            placeholder="请输入聊天室名称"
                        />
                    </View>
                </View>

                <View style={styles.footer}>
                    <View>
                        <Button onPress={this.onPress}
                                status={Button.CONSTANTS.STATUS_PRIMARY}
                                size={Button.CONSTANTS.SIZE_LARGE}
                        >
                            创建
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

export default CreateChatRoomLayout;