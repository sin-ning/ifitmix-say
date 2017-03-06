/**
 * Created by sin on 16/9/28.
 */

import React, { Component, PropTypes } from 'react';
import {TouchableOpacity} from 'react-native';
import { ComponentTheme, CommonColor, CommonFontSize, MergeStyles } from '../../../styles/theme';

import { Label } from '../Label';

const CONSTANTS = {
    ...Label.CONSTANTS
};

class Link extends Component {

    render() {


        const { children, style, ...other } = this.props;

        const childStyles = getChildStyles(this.props);

        return (
            <TouchableOpacity>
                <Label
                    {...other}
                    style={childStyles}
                >
                    { children }
                </Label>
            </TouchableOpacity>
        );
    }
}


const getChildStyles = (props) => {

    const { style = {} } = props;

    return style;
};

const getStyles = (props) => {


};

Link.CONSTANTS = CONSTANTS;
export default Link;