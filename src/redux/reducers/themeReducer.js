import { CHANGE_THEME } from "../types";

const initialState = {
    theme: {
    pri50: '#e4f6eb',
    pri500: '#00b25c',
    pri700: '#009145',
    pri800: '#007f39',
    sec700: '#be2f79',
    sec900: '#802764',
    }
};

export default function(state = initialState, action){
    switch (action.type) {
        case CHANGE_THEME:
            return { ...state, theme: action.theme };
        default:
            return state;
    }
};



