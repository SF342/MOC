import { CHANGE_THEME } from "../types";

const initialState = {
    theme: {
        pri50: '#6bd8ff',
        pri500: '#fff',
        pri700: '#0A214A',
        pri800: '#e66900',
        sec700: '#e3eeff',
        sec900: 'black',
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



