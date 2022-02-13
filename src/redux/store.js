import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import dataReducer from './reducers/dataReducer'
import themeReducer from './reducers/themeReducer';
import userReducer from './reducers/userReducer';


const initialState = {

};

const middleware = [thunk];

const reducers = combineReducers({
    data: dataReducer,
    theme: themeReducer,
    user: userReducer,
})

const Store = createStore(reducers, initialState, compose(applyMiddleware(...middleware)));

export default Store;