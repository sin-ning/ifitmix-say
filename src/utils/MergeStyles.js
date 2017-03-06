/**
 * Created by sin on 16/9/28.
 */


function MergeStyles() {

    if (arguments.length == 0) {
        return {};
    }

    if (arguments.length < 2) {
        return arguments[0];
    }

    let arg1 = arguments[0];

    // arguments
    for (let i = 1; i < arguments.length; i++) {
        const style = arguments[i];
        // console.log(i, style);

        if (typeof style == 'object') {
            // 第一级
            for (const key in style) {
                if (typeof style[key] == 'object') {
                    arg1[key] = {...arg1[key], ...style[key]};
                }
            }
        }
    }

    return arg1;
}

export {
    MergeStyles
}

export default MergeStyles;