import { SET_SIGN_IN, SET_SIGN_OUT, SET_TASK_FAVORITE, ADD_TASK_FAVORITE, DELETE_TASK_FAVORITE, API_TODO } from "../types"

const initialState = {
    authenticated: false,
    email: '',
    favoritelist: [],
    user: null,
    favList : []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_SIGN_IN:
            return {
                ...state,
                authenticated: true,
                email: action.payload.email,
                uid: action.payload._id,
                user: action.payload
            };
        case SET_SIGN_OUT:
            return {
                authenticated: false,
                email: '',
                favoritelist: []
            };
        case SET_TASK_FAVORITE:

            if (state.favoritelist.length === 0) {
                return {
                    ...state,
                    favoritelist: [...action.payload]
                }
            } else {
                return {
                    ...state,
                }
            }

        case ADD_TASK_FAVORITE:
            let taskTemp = state.favoritelist.findIndex((val) => val.product_id === action.payload.product_id)
            if (taskTemp === -1) {

                return {
                    ...state,
                    favoritelist: [...state.favoritelist, action.payload],
                }
            } else {
                return {
                    ...state,
                }
            }

        case DELETE_TASK_FAVORITE:

            let favoriteTemp = state.favoritelist.filter((val) => val.id !== action.payload)
            return {
                ...state,
                favoritelist: favoriteTemp,
            }
        
        case API_TODO:
            return {
                ...state,
                favList : action.payload
            }
        default:
            return state;
    }
};