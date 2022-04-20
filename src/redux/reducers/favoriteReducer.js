import { GET_FAVLIST, GET_PRODUCTLIST, ADD_FAVORITE, DELETE_FAVORITE} from "../types"

const initialState = {
    favoriteList : [],
    productList : [],
    add : false,
    delete : false,
    getFav : false,
    getProduct : false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_FAVLIST:
            return {
                ...state,
                getFav: true,
                delete : false,
                add : false,
                favoriteList : action.payload 

            };
        case GET_PRODUCTLIST:
            return {
                ...state,
                getProduct : true,
                delete : false,
                add : false,
                productList : action.payload
                
            }
        case ADD_FAVORITE:
            console.log(action.payload);
            return {
                ...state,
                add : true,
                getFav: false,
                getProduct : false,
                favoriteList : action.payload 
            }

        case DELETE_FAVORITE:
            return { 
                ...state,
                getFav: false,
                getProduct : false,
                add : false,
                delete : true,
                favoriteList : action.payload,
                productList : action.payload
            }
        default:
            return state;
    }
};
