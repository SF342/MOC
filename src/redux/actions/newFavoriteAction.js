import {DELETE_FAVORITE, GET_PRODUCTLIST, ADD_FAVORITE, GET_FAVLIST} from '../types';
import axios from 'axios';

const API_URL = 'http://10.0.2.2:4001/favorite';

export const getFavoriteId = (user_id) => dispatch => {
  axios
    .get(API_URL + '/' + user_id)
    .then(response => {
        dispatch({type: GET_FAVLIST, payload: response.data});
        return response.data;
      
    })
    .catch(err => {
      console.log(err)
      alert('Get data error');
    });
};

export const getProductId = (data) => dispatch => {
    
    const allProduct = []
    if (data !== undefined){

      for (let i = 0; i < data.length; i++) {
        var obj = data[i];
        axios
        .get(API_URL + '/productDetail/' + obj.product_id)
        .then(response => {
          if(response.data[0] != undefined) {
            
            allProduct.push(response.data[0])
            dispatch({type: GET_PRODUCTLIST, payload: allProduct});
          }else{
            dispatch({type: GET_PRODUCTLIST, payload: allProduct});
          }
          
        })
        .catch(err => {
          console.log(err)
          alert('Get data error');
        });
      }
    }
  };

export const addFavoriteList =
   (
    user_id,
    pid
    ) =>
  (dispatch) => {

    console.log("test add")
    axios
      .post(API_URL, {
        _id : user_id,
        product_id : pid,
      })
      .then(response => {
        dispatch({type: ADD_FAVORITE, payload: response.data});
        return response.data;
      })
      .catch(err => {
        console.log(err)
        console.log("Add fail")
      });
  };


export const deleteFavorite = (user_id, _id) => dispatch => {
    console.log("Rook : ",user_id," ", _id)
    axios
        .delete(API_URL + '/' +user_id+'/'+ _id)
        .then( 
        dispatch({type: DELETE_FAVORITE, payload: []})
        )
        .catch(err => {
        console.log("Delete fail")

        });
};
