/**
 * Created by sin on 16/9/27.
 */

import React, { Component, PropTypes } from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { ComponentTheme, CommonColor, CommonFontSize, MergeStyles } from '../../../styles/theme';

const CONSTANTS = {
    STATUS_NORMAL: 'normal',
    STATUS_PRIMARY: 'primary',
    STATUS_SUCCESS: 'success',

    TYPE_LINK: 'link',
    TYPE_SQUARE: 'square',
    TYPE_RADIUS: 'radius',

    SIZE_NORMAL: 'normal',
    SIZE_LARGE: 'large',
    SIZE_SMALL: 'small',

    /**
     * 基础高度, 用于计算 size
     */
    BASE_HEIGHT: 20,
};

export default class Button extends Component {

    static propTypes = {
        type: PropTypes.string,
        size: PropTypes.string,
        icon: PropTypes.number,
        width: PropTypes.number,
        height: PropTypes.number,
        /**
         * 状态
         */
        status: PropTypes.string,
    };

    static defaultProps = {
        width: null,
        height: null,
        type: CONSTANTS.TYPE_RADIUS,
        size: CONSTANTS.SIZE_NORMAL,
        status: CONSTANTS.STATUS_NORMAL,
    };

    render() {

        const { icon, style, ...other } = this.props;
        const styles = getStyles(this.props);

        let iconNode = null;
        if (icon) {
            iconNode = <Image style={styles.icon} source={icon}  />
        }

        return (
            <TouchableOpacity
                {...other}
            >

                <View style={styles.button} >
                    <View style={styles.body}>
                        { iconNode }
                        <Text style={styles.text}>{ this.props.children }</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}


const getStyles = (props, state, context) => {

    const { type, style, status, size, width, height } = props;

    const defaultStyles = {
        button: {
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            paddingLeft: 10,
            paddingRight: 10,

            height,
            width,
        },
        body: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        icon: {

        },
        text: {

        }
    };


    const typeSizeDefined = {
        [CONSTANTS.TYPE_LINK]: {

        },

        /**
         * Square 方形
         *
         */
        [CONSTANTS.TYPE_SQUARE]: {
            [CONSTANTS.SIZE_NORMAL]: {
                button: {
                    borderRadius: 0,
                    height: CONSTANTS.BASE_HEIGHT + 12,
                },
                text: {
                    fontSize: 12,
                    color: ComponentTheme.Button.PRIMARY_FONT_COLOR,
                },
            },
            [CONSTANTS.SIZE_SMALL]: {
                button: {
                    borderRadius: 0,
                    height: CONSTANTS.BASE_HEIGHT + 16,
                },
                text: {
                    fontSize: 14,
                    color: ComponentTheme.Button.PRIMARY_FONT_COLOR,
                },
            },
            [CONSTANTS.SIZE_LARGE]: {
                button: {
                    borderRadius: 0,
                    height: CONSTANTS.BASE_HEIGHT + 20,
                },
                text: {
                    fontSize: 16,
                    color: ComponentTheme.Button.PRIMARY_FONT_COLOR,
                },
            },
        },

        /**
         * Radius
         *
         * height: 20 单位为基础高度
         */
        [CONSTANTS.TYPE_RADIUS]: {
            [CONSTANTS.SIZE_NORMAL]: {
                button: {
                    borderRadius: 5,
                    height: CONSTANTS.BASE_HEIGHT + 12,
                },
                text: {
                    fontSize: 12,
                    color: ComponentTheme.Button.PRIMARY_FONT_COLOR,
                },
            },
            [CONSTANTS.SIZE_SMALL]: {
                button: {
                    borderRadius: 6,
                    height: CONSTANTS.BASE_HEIGHT + 16,
                },
                text: {
                    fontSize: 14,
                    color: ComponentTheme.Button.PRIMARY_FONT_COLOR,
                },
            },
            [CONSTANTS.SIZE_LARGE]: {
                button: {
                    borderRadius: 7,
                    height: CONSTANTS.BASE_HEIGHT + 20,
                },
                text: {
                    fontSize: 16,
                    color: ComponentTheme.Button.PRIMARY_FONT_COLOR,
                },
            },
        },
    };

    const typeStatusDefined = {
        [CONSTANTS.TYPE_LINK]: {
            [CONSTANTS.STATUS_NORMAL]: {
                button: {
                    borderWidth: 0,
                    padding: 0,
                },
                text: {
                    color: ComponentTheme.Button.LINK_NORMAL_FONT_COLOR,
                },
            },
            [CONSTANTS.STATUS_PRIMARY]: {
                button: {
                    borderWidth: 0,
                    padding: 0,
                },
                text: {
                    color: ComponentTheme.Button.LINK_PRIMARY_FONT_COLOR,
                }
            },
            [CONSTANTS.STATUS_SUCCESS]: {
                button: {
                    borderWidth: 0,
                    padding: 0,
                },
                text: {
                    color: ComponentTheme.Button.LINK_SUCCESS_FONT_COLOR,
                }
            },
        },
        [CONSTANTS.TYPE_SQUARE]: {
            [CONSTANTS.STATUS_NORMAL]: {
                button: {
                    backgroundColor: ComponentTheme.Button.NORMAL_BACKGROUND_COLOR,
                    borderColor: ComponentTheme.Button.NORMAL_BORDER_COLOR,
                },
                text: {
                    color: ComponentTheme.Button.NORMAL_FONT_COLOR,
                },
            },
            [CONSTANTS.STATUS_PRIMARY]: {
                button: {
                    backgroundColor: ComponentTheme.Button.PRIMARY_BACKGROUND_COLOR,
                    borderColor: ComponentTheme.Button.PRIMARY_BORDER_COLOR,
                },
                text: {
                    color: ComponentTheme.Button.PRIMARY_FONT_COLOR,
                }
            },
            [CONSTANTS.STATUS_SUCCESS]: {

            },
        },
        [CONSTANTS.TYPE_RADIUS]: {
            [CONSTANTS.STATUS_NORMAL]: {
                button: {
                    backgroundColor: ComponentTheme.Button.NORMAL_BACKGROUND_COLOR,
                    borderColor: ComponentTheme.Button.NORMAL_BORDER_COLOR,
                },
                text: {
                    color: ComponentTheme.Button.NORMAL_FONT_COLOR,
                },
            },
            [CONSTANTS.STATUS_PRIMARY]: {
                button: {
                    backgroundColor: ComponentTheme.Button.PRIMARY_BACKGROUND_COLOR,
                    borderColor: ComponentTheme.Button.PRIMARY_BORDER_COLOR,
                },
                text: {
                    color: ComponentTheme.Button.PRIMARY_FONT_COLOR,
                }
            },
            [CONSTANTS.STATUS_SUCCESS]: {

            },
        },
    };

    // merge styles
    const mergeStyles = MergeStyles(defaultStyles, typeSizeDefined[type][size], typeStatusDefined[type][status], style);

    return StyleSheet.create(mergeStyles);
};


Button.CONSTANTS = CONSTANTS;
