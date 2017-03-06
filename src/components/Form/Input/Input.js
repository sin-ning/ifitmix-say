/**
 * Created by sin on 16/9/26.
 */

import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, Image, StyleSheet } from 'react-native';
import { ComponentTheme, CommonFontSize, CommonColor, MergeStyles } from '../../../styles/theme';

const CONSTANTS = {
    TYPE_DEFAULT: 'default',
    TYPE_UNDERLINE: 'underline',
    TYPE_SQUARE: 'square',
};

class Input extends Component {

    static propTypes = {
        type: PropTypes.string,
        icon: PropTypes.number,
        width: PropTypes.number,
        height: PropTypes.number,
        alterCmd: PropTypes.element,
        beforeCmd: PropTypes.element,
    };

    static defaultProps = {
        type: CONSTANTS.TYPE_DEFAULT,
        width: null,
        height: 40,
    };

    onLayout() {

    }


    render() {
        const { icon, style, type, height, alterCmd, beforeCmd, ...other } = this.props;
        const styles = StyleSheet.create(getStyles(this.props));

        let iconNode = null;
        if (icon) {
            iconNode = <Image style={styles.icon} source={icon} />
        }

        return (
            <View
                style={styles.container}
                onLayout={this.onLayout} >

                <View style={styles.beforeCmd}>
                    { beforeCmd }
                </View>

                <View style={styles.iconView}>
                    { iconNode }
                </View>

                <TextInput
                    {...other}
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    multiline={false}
                />
                <View>
                    { alterCmd }
                </View>
            </View>
        );
    }
}

const getStyles = (props, state, context) => {
    const { width, height, type, style = {} } = props;

    //column
    const defaultStyle = {
        container: {
            width,
            height,
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: ComponentTheme.Input.DEFAULT_BORDER_COLOR,
            borderRadius: 5,
        },
        input: {
            height,
            flex: 1,
            flexDirection: 'row',
            paddingLeft: 5,
            paddingRight: 5,
            borderWidth: 0,
            color: ComponentTheme.Input.DEFAULT_COLOR,
        },
        iconView: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        icon: {
            height: height - 8,
            width: height - 8,
        },

        beforeCmd: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
        alterCmd: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        },
    };


    const typeDefined = {
        [CONSTANTS.TYPE_DEFAULT]: {
            container: {
                width,
                height,
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: ComponentTheme.Input.DEFAULT_BORDER_COLOR,
                borderRadius: 5,
            }
        },
        [CONSTANTS.TYPE_UNDERLINE]: {
            container: {
                width,
                height,
                flexDirection: 'row',
                borderWidth: 0,
                borderBottomWidth: 1,
                borderColor: ComponentTheme.Input.DEFAULT_BORDER_COLOR,
            }
        },
        [CONSTANTS.TYPE_SQUARE]: {
            container: {
                borderRadius: 0,
            }
        },
    };

    // 合并 style 样式
    return MergeStyles(defaultStyle, typeDefined[type], style);
};

Input.CONSTANTS = CONSTANTS;
export default Input;