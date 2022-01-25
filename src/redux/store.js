import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import dataReducer from './reducers/dataReducer'


const initialState = {

};

const middleware = [thunk];

const reducers = combineReducers({
    data: dataReducer,
})

const Store = createStore(reducers, initialState, compose(applyMiddleware(...middleware)));

export default Store;