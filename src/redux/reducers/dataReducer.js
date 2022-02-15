import { PRODUCTS_DATA, PRICE_PRODUCT, SET_URL_IMAGE } from '../types'

const initialState = {
    data: [],
    productprice: [],
    urlimage: [{"name": "ไข่ไก่", "url": "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2Fegg.png?alt=media"},
    {"name": "ไข่เป็ด", "url": "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2Fegg%20(1).png?alt=media"},
    {"name": "ไก่", "url": "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2Frooster.png?alt=media"},
    {"name": "ปลา", "url": "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2Ffish%20(1).png?alt=media"},
    {"name": "สุกร", "url": "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2Fpig%20(1).png?alt=media"},
    {"name": "วัว", "url": "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2Fcow%20(1).png?alt=media"},]
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
        case SET_URL_IMAGE:

            return{
                ...state,
                urlimage: action.payload
            }
        

        default:
            return state;
    }
}