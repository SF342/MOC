import { PRODUCTS_DATA } from '../types'

const initialState = {
    data: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PRODUCTS_DATA:
            return {
                data: action.payload,
            }
        

        default:
            return state;
    }
}