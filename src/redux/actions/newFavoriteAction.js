import {API_ADDFAV, API_FAVID, API_TODODELETEE, API_PRODUCTID} from '../types';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'

const API_URL = 'http://10.0.2.2:4001/favorite';

export const getFavoriteId = (user_id) => dispatch => {
  axios
    .get(API_URL + '/' + user_id)
    .then(response => {
      if (response.data.length !== 0){
        dispatch({type: API_FAVID, payload: response.data});
        return response.data;
      }
    })
    .catch(err => {
      console.log(err)
      alert('Get data error');
    });
};

export const getProductId = (data) => dispatch => {
    
    const allProduct = []
    console.log("Test za",data)
    if (data !== undefined){

      for (let i = 0; i < data.length; i++) {
        var obj = data[i];
        console.log(obj.product_id)
        axios
        .get(API_URL + '/productDetail/' + obj.product_id)
        .then(response => {
          if(response.data[0] != undefined) {
            
            allProduct.push(response.data[0])
            console.log('all prod ', allProduct)
            dispatch({type: API_PRODUCTID, payload: allProduct});
          }
          
        })
        .catch(err => {
          console.log(err)
          alert('Get data error');
        });
      }
      console.log('all prod last', allProduct)
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
        console.log("Response ", response.data)
        dispatch({type: API_ADDFAV, payload: response.data});
        return response.data;
      })
      .catch(err => {
        console.log(err)
        console.log("Add fail")
      });
  };

export const updateTaskList =
  (
    _id,
    date,
    priority,
    taskDetail,
    taskDate,
    taskDatetaskDate,
    timestamp,
    topic,
    urlPhoto,
  ) =>
  dispatch => {
      
    axios
      .put(API_URL, {
        _id,
        date,
        priority,
        taskDetail,
        taskDate,
        taskDatetaskDate,
        timestamp,
        topic,
        urlPhoto:urlPhoto,
      })
      .then(response => {
        dispatch({type: API_TODODELETE, payload: []})
        console.log(response.data);

        return response.data;
      })
      .catch(err => {
        console.log("Update fail")
        console.log(err)
      });
  };


export const deleteFavorite = (user_id, _id) => dispatch => {
    console.log("Rook : ",user_id," ", _id)
    axios
        .delete(API_URL + '/' +user_id+'/'+ _id)
        .then( 
        dispatch({type: API_TODODELETEE, payload: []})
        )
        .catch(err => {
        console.log("Delete fail")

        });
};
