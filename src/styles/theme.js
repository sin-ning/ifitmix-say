/**
 * Created by sin on 16/9/26.
 */


import colors  from './colores';
export { MergeStyles } from '../utils/MergeStyles';

export const CommonFontSize = {

    default: '12px',

    small: '10px',

    large: '16px',

    moreLarge: '18px',

};


export const CommonColor = {

    /**
     * 背景色: 全局引用, 特殊页面特殊声明
     */
    BACKGROUND_COLOR: colors.white00,

    /**
     * 字体默认颜色
     */
    FONT_DEFAULT_COLOR: colors.black00,
    /**
     * 字体渐变颜色
     */
    FONT_HOVER_COLOR: colors.white00,


};


export const ComponentTheme = {

    ///
    /// Button

    Button: {

        /**
         * [normal 按钮字体]
         */
        NORMAL_FONT_COLOR: colors.black40,
        /**
         * [normal border颜色]
         */
        NORMAL_BORDER_COLOR: colors.black40,
        /**
         * [normal 按钮背景]
         */
        NORMAL_BACKGROUND_COLOR: colors.white00,
        /**
         * [normal 按钮渐变背景]
         */
        NORMAL_HOVER_BACKGROUND_COLOR: colors.white00,


        /**
         * [primary 按钮字体]
         */
        PRIMARY_FONT_COLOR: colors.white00,
        /**
         * [primary border颜色]
         */
        PRIMARY_BORDER_COLOR: colors.blue60,
        /**
         * [primary 按钮背景]
         */
        PRIMARY_BACKGROUND_COLOR: colors.blue60,
        /**
         * [primary 按钮渐变背景]
         */
        PRIMARY_HOVER_BACKGROUND_COLOR: colors.white00,


        /**
         * [Link 字体颜色]
         */
        LINK_NORMAL_FONT_COLOR: colors.black40,
        /**
         * [Link 字体颜色]
         */
        LINK_PRIMARY_FONT_COLOR: colors.blue60,
        /**
         * [Link 字体颜色]
         */
        LINK_SUCCESS_FONT_COLOR: colors.blue60,
    },


    ///
    /// Input

    Input: {
        DEFAULT_COLOR: colors.blue60,
        DEFAULT_BORDER_COLOR: colors.black50,
    },

    Label: {
        /**
         * 默认: 文字颜色
         */
        NORMAL_COLOR: colors.black40,
        /**
         * 弱: 文字弱显示, 不明显突出, 可忽略的
         */
        WEAK_COLOR: colors.black50,
        /**
         * 强调
         */
        STRONG_COLOR: colors.black00,
        /**
         * 错误
         */
        ERROR_COLOR: colors.red30,
        /**
         * 警告
         */
        WARNING_COLOR: colors.yellow30,
        /**
         * 高亮
         */
        HIGHLIGHT_COLOR: colors.black50,
    },


    ///
    /// NavigationBar 导航颜色

    NavigationBar: {
        NORMAL_COLOR: colors.blue60,
        NORMAL_FONT_COLOR: colors.white00,
    }
};


export default {
    CommonFontSize,
    CommonColor,
    ComponentTheme,
    colors
};
