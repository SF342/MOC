import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import dataReducer from './reducers/dataReducer'
import themeReducer from './reducers/themeReducer';
import userReducer from './reducers/userReducer';
import favoriteReducer from './reducers/favoriteReducer';



const initialState = {

};

const middleware = [thunk];

const reducers = combineReducers({
    data: dataReducer,
    theme: themeReducer,
    user: userReducer,
    favorite : favoriteReducer
})

const Store = createStore(reducers, initialState, compose(applyMiddleware(...middleware)));

export default Store;