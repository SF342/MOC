import { PRODUCTS_DATA, PRICE_PRODUCT } from '../types'

const initialState = {
    data: [],
    productprice: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PRODUCTS_DATA:
            return {
                ...state,
                data: [...action.payload.slice(1)],
            }
        case PRICE_PRODUCT:
            return{
                ...state,
                productprice: [...state.productprice, action.payload]
            }
        

        default:
            return state;
    }
}