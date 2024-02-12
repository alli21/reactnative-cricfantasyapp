import { THEME_CHANGE } from '../../utils/Constants';
// switch mode according to what is specified...
export const switchColors = colors => {
    return {
        type: THEME_CHANGE,
        payload: colors,
    };
};
