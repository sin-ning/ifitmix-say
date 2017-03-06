/**
 * Created by sin on 16/9/29.
 */

import React, { Component, PropTypes, cloneElement } from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { ComponentTheme, CommonColor, CommonFontSize, MergeStyles } from '../../../styles/theme';
import Button from './Button';

const getChildStyle = (props, state, context) => {

    return {
        first: {
            button: {
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                borderRightWidth: 0,
            }
        },
        center: {
            button: {
                borderRadius: 0,
                borderRightWidth: 0,
            }
        },
        end: {
            button: {
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderLeftWidth: 0,
            }
        }
    };
};


const getStyles = (props) => {

    const { style } = props;

    const defaultStyles = {
        container: {
            flexDirection: 'row',
        }
    };

   return MergeStyles(defaultStyles, style);
};

class ButtonGroup extends Component {

    constructor() {
        super(...arguments);
        this.state.activeKey = this.props.active;
    }

    static propTypes = {
        // children: PropTypes.arrayOf(PropTypes.instanceOf(Button)).isRequired,
        /**
         * 默认选中
         */
        active: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        /**
         * 选中 bottom 类型
         */
        activeStatus: PropTypes.string,
        /**
         * 改变时调用
         */
        onChange: PropTypes.func,
    };

    static defaultProps = {
        activeStatus: Button.CONSTANTS.STATUS_PRIMARY,
        onChange: function () {},
    };

    state = {
        activeKey: null,
    };

    childOnPress = (customFun, key) => {
        const { onChange } = this.props;
        const { activeKey } = this.state;

        if (activeKey != key) {
            this.setState({
                activeKey: key,
            });

            // 自定义, 函数回调
            if (customFun) {
                customFun();
            }

            // 通知改变
            if (onChange) {
                onChange(key);
            }
        }
    };

    componentWillReceiveProps(nextProps) {
      // skip button 没有重复触发更新的可能性
    }

    render() {
        const { children, style, activeStatus, active, onChange, ...other } = this.props;

        const childStyles = getChildStyle(this.props);
        const styles = StyleSheet.create(getStyles(this.props));

        const groupChild = React.Children.map(children, (child, index)=>{

            const { onPress, key } = child.props;
            const activeKey = key || index;

            // childProps
            let childProps = {
                ...other,
                key: activeKey,
                onPress: this.childOnPress.bind(this, onPress, activeKey),
            };

            // active
            if (this.state.activeKey == childProps.key) {
                childProps['status'] = activeStatus;
            }

            // child.props.onPress
            if (index == 0) {
                childProps['style'] = childStyles.first;
            }
            else if (index == children.length - 1) {
                childProps['style'] = childStyles.end;
            }
            else {
                childProps['style'] = childStyles.center;
            }

            return cloneElement(child, childProps);
        });

        return (
            <View style={styles.container}>
                { groupChild }
            </View>
        );
    }
}


export default ButtonGroup;