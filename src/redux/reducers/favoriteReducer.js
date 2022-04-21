import { GET_FAVLIST, GET_PRODUCTLIST, ADD_FAVORITE, DELETE_FAVORITE } from "../types"

const initialState = {
    favoriteList: [],
    productList: [],
    add: false,
    delete: false,
    getFav: false,
    getProduct: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_FAVLIST:
            return {
                ...state,
                getFav: true,
                delete: false,
                add: false,
                favoriteList: action.payload

            };
        case GET_PRODUCTLIST:
            return {
                ...state,
                getProduct: true,
                delete: false,
                add: false,
                productList: action.payload

            }
        case ADD_FAVORITE:
            console.log(action.payload, 33);
            return {
                ...state,
                add: true,
                getFav: false,
                getProduct: false,
                favoriteList: [...state.favoriteList, action.payload.fav],
                productList: [...state.productList, action.payload.detail]
            }

        case DELETE_FAVORITE:
            let favtemp = state.favoriteList.filter(vendor => vendor.product_id !== action.payload.data)
            let prodtemp = state.productList.filter(vendor => vendor.product_id !== action.payload.data)

            console.log(favtemp, 46);
            console.log(prodtemp, 47);


            return {
                ...state,
                getFav: false,
                getProduct: false,
                add: false,
                delete: true,
                favoriteList: favtemp,
                productList: prodtemp
            }
        default:
            return state;
    }
};
