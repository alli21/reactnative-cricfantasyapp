import { DARK_THEME, LIGHT_THEME } from '../../utils/colors';
import { THEME_CHANGE } from '../../utils/Constants';
// import { config } from '../../utils';

// Initially we will have a light mode
const initialState = {
    colors: LIGHT_THEME
};


// Handle our action of changing the theme
export const Themereducer = (state = initialState, action) => {
    switch (action.type) {
        case THEME_CHANGE:
            return {
                ...state,
                colors: action.payload,
            };

        default:
            return state;
    }
};




