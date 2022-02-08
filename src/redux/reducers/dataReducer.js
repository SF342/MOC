import { act } from 'react-test-renderer';
import { PRODUCTS_DATA, PRICE_PRODUCT, USER_STATE } from '../types'

const initialState = {
    data: [],
    productprice: [],
    userState: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PRODUCTS_DATA:
            return {
                ...state,
                data: [...action.payload.slice(1)],
            }
        case PRICE_PRODUCT:
            return {
                ...state,
                productprice: [...state.productprice, action.payload]
            }

        case USER_STATE:
            return {
                ...state,
                userState: [...state.userState, action.payload]
            }

        default:
            return state;
    }
}