/**
 * Created by sin on 16/9/26.
 */

import React, { Component, PropTypes } from 'react';
import {Text, View, StyleSheet } from 'react-native';
import MergeStyles from '../../utils/MergeStyles';

import theme from '../../styles/theme';

const CONSTANTS = {
    TYPE_NORMAL: 'normal',
    TYPE_NAV_TOP: 'navTop',
};

const getStyles = (props) => {

    const {style, type} = props;

    const defaultStyles = {
        container: {
            flex: 1,
            // 容器 style
        }
    };

    const typeDefined = {
        [CONSTANTS.TYPE_NORMAL]: {
            container: {

            }
        },
        [CONSTANTS.TYPE_NAV_TOP]: {
            container: {
                marginTop: 64,
            }
        },
    };

    return MergeStyles(defaultStyles, typeDefined[type], style);
};

class MainLayout extends Component {

    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object,
        ]).isRequired,
        type: PropTypes.string,
    };

    static defaultProps = {
        type: CONSTANTS.TYPE_DEFAULT,
    };

    render() {

        const styles = StyleSheet.create(getStyles(this.props));
        const { children, style ,...other } = this.props;

        return (
            <View style={styles.container} { ...other } >
                { children }
            </View>
        );
    }
}

MainLayout.CONSTANTS = CONSTANTS;
export default MainLayout;