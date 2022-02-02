import { PRODUCTS_DATA, PRICE_PRODUCT } from '../types'

const initialState = {
    data: [],
    productprice: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PRODUCTS_DATA:
            return {
                data: action.payload,
            }
        case PRICE_PRODUCT:
            return{
                ...state,
                productprice: [...productprice, action.payload]
            }
        

        default:
            return state;
    }
}