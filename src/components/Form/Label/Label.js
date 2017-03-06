/**
 * Created by sin on 16/9/27.
 */

import React, { Component, PropTypes } from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { ComponentTheme, CommonColor, CommonFontSize } from '../../../styles/theme';
import { MergeStyles } from '../../../utils/MergeStyles';

const CONSTANTS = {

    SIZE_SMALL: 'small',
    SIZE_MORE_SMALL: 'moreSmall',
    SIZE_LARGE: 'large',
    SIZE_MORE_LARGE: 'moreLarge',
    SIZE_NORMAL: 'normal',
    SIZE_MORE_NORMAL: 'moreNormal',

    TYPE_NORMAL: 'normal',
    TYPE_WEAK: 'weak',
    TYPE_STRONG: 'strong',
    TYPE_ERROR: 'error',
    TYPE_WARNING: 'warning',
    TYPE_HIGHLIGHT: 'highlight',
};

class Label extends Component {

    static propTypes = {
        type: PropTypes.string,
        size: PropTypes.string,
    };

    static defaultProps = {
        size: CONSTANTS.SIZE_NORMAL,
        type: CONSTANTS.TYPE_NORMAL,
    };

    render() {

        const { children, style, ...other } = this.props;

        const styles = getStyles(this.props);

        return (
            <Text {...other} style={styles.text}>
                { children }
            </Text>
        );
    }
}

const getStyles = (props, state, context) => {

    const { type, size, style } = props;

    const defaultStyles = {
        text: {

            // merge styles typeDefined
            color: ComponentTheme.Label.NORMAL_COLOR,

            fontSize: 12,
        }
    };

    const typeDefined = {
        [CONSTANTS.TYPE_NORMAL]: {
            text: {
                ...defaultStyles.text,
                color: ComponentTheme.Label.NORMAL_COLOR,
            }
        },
        [CONSTANTS.TYPE_WEAK]: {
            text: {
                ...defaultStyles.text,
                color: ComponentTheme.Label.WEAK_COLOR,
            }
        },
        [CONSTANTS.TYPE_STRONG]: {
            text: {
                ...defaultStyles.text,
                color: ComponentTheme.Label.STRONG_COLOR,
            }
        },
        [CONSTANTS.TYPE_ERROR]: {
            text: {
                ...defaultStyles.text,
                color: ComponentTheme.Label.ERROR_COLOR,
            }
        },
        [CONSTANTS.TYPE_WARNING]: {
            text: {
                ...defaultStyles.text,
                color: ComponentTheme.Label.WARNING_COLOR,
            }
        },
        [CONSTANTS.TYPE_HIGHLIGHT]: {
            text: {
                ...defaultStyles.text,
                color: ComponentTheme.Label.HIGHLIGHT_COLOR,
            }
        },
    };


    const sizeDefined = {
        [CONSTANTS.SIZE_NORMAL]: {
            text: {
                fontSize: 12
            }
        },
        [CONSTANTS.SIZE_MORE_NORMAL]: {
            text: {
                fontSize: 14,
            }
        },
        [CONSTANTS.SIZE_SMALL]: {
            text: {
                fontSize: 10,
            }
        },
        [CONSTANTS.SIZE_MORE_SMALL]: {
            text: {
                fontSize: 8,
            }
        },
        [CONSTANTS.SIZE_LARGE]: {
            text: {
                fontSize: 16,
            }
        },
        [CONSTANTS.SIZE_MORE_LARGE]: {
            text: {
                fontSize: 18,
            }
        },
    };

    // const mergeTypeStyles = {...defaultStyles, ...typeDefined[type]};
    // const mergeSizeStyles = {...mergeTypeStyles, text: {...mergeTypeStyles.text, ...sizeDefined[size].text}};
    // const mergeStyles = {...mergeSizeStyles, ...{text: {...mergeSizeStyles.text, ...style.text}}};

    const mergeStyles = MergeStyles(defaultStyles, typeDefined[type], sizeDefined[size], {text: style});

    // console.info('abc', abc);
    // console.info('mergeStyles', mergeStyles);

    return StyleSheet.create(mergeStyles);
};


Label.CONSTANTS = CONSTANTS;
export default Label;