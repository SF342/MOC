import {SET_DATA_PRODUCT} from '../types';

export const loadProduct = () => dispatch => {
  
  dispatch({ type: SET_DATA_PRODUCT, payload: "hello world" })

};
