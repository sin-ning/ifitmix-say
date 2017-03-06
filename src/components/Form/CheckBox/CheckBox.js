/**
 * Created by sin on 16/10/9.
 */

import React, { Component, PropTypes } from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ComponentTheme, CommonFontSize, CommonColor, MergeStyles } from '../../../styles/theme';
import colors from '../../../styles/colores';

const getStyles = (props) => {

    const { size } = props;

    return {
        container: {
            flexDirection: 'row',
        },
        icon: {
            width: size + 2,
        },
    };
};

export default class CheckBox extends Component{

    constructor(props){
        super(props);
        this.state = {
            checked: props.checked,
        };
    }

    static propTypes={
        checked: PropTypes.bool,
        onChange: PropTypes.func,
        size: PropTypes.number,
    };

    static defaultProps = {
        checked: false,
        size: 16,
    };

    componentWillReceiveProps(nextProps) {
        this.setState({
            checked: nextProps.checked
        });
    }

    onChange() {
        this.setState({checked:!this.state.checked});
    }

    toggle(){
        this.setState({checked:!this.state.checked});
        if (this.props.onChange) {
            this.props.onChange(this.state.checked);
        }
    }

    render() {
        const { size, children } = this.props;
        const styles = getStyles(this.props);

        let source = "square-o";
        if(this.state.checked){
            source = "check-square-o";
        }

        let container = (
            <View style={styles.container}>
                <View style={styles.icon}>
                    <Icon name={source} size={size} color={colors.blue60} />
                </View>
                <View>
                    {children}
                </View>
            </View>
        );

        return (
            <TouchableHighlight ref="checkbox" onPress={this.toggle.bind(this)} underlayColor='white'>
                {container}
            </TouchableHighlight>
        )
    }
}