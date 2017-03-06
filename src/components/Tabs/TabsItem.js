/**
 * Created by sin on 16/9/29.
 */


import React, { Component, PropTypes } from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { ComponentTheme, CommonColor, CommonFontSize, MergeStyles } from '../../styles/theme';


const getStyles = (props) => {

    return {
        container: {
            flex: 1,
            flexDirection: 'column',
        }
    };
};

class TabsItem extends Component {


    static propTypes = {
    };

    render() {
        const styles = StyleSheet.create(getStyles(this.props));

        return (
            <View style={styles.container}>
                { this.props.children }
            </View>
        );
    }
}

export default TabsItem;