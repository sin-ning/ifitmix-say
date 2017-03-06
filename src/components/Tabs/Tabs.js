/**
 * Created by sin on 16/9/29.
 */

import React, { Component, PropTypes } from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { ComponentTheme, CommonColor, CommonFontSize, MergeStyles } from '../../styles/theme';

import TabsItem from './TabsItem';


const getStyles = (props) => {


    return {
        tabs: {
            flex: 1,
        }
    };
};

class Tabs extends Component {

    constructor() {
        super(...arguments);
    }

    static propTypes = {
        defaultValue: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        children: PropTypes.arrayOf(PropTypes.instanceOf(Object)),
    };

    static defaultProps = {
        defaultValue: 0,
    };

    componentWillReceiveProps(nextProps) {
        return this.props.defaultValue !== nextProps.defaultValue;
    }

    render() {
        const { defaultValue, children } = this.props;

        const styles = StyleSheet.create(getStyles(this.props));

        const showView = React.Children.map(children, (child, index)=>{
            const key = child.key || index;
            if (key === defaultValue) {
                return child;
            }
        });

        return (
            <View style={styles.tabs}>
                { showView }
            </View>
        );
    }
}

Tabs.TabsItem = TabsItem;
export default Tabs;