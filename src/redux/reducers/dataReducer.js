import { SET_DATA_PRODUCT } from '../types'

const initialState = {
    data: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_DATA_PRODUCT:
            return {
                data: action.payload
            }
        default:
            return state;
    }
}