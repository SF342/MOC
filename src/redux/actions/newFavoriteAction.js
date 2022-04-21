import { DELETE_FAVORITE, GET_PRODUCTLIST, ADD_FAVORITE, GET_FAVLIST } from '../types';
import axios from 'axios';

const API_URL = 'http://10.0.2.2:4001/favorite';

export const getFavoriteId = (user_id) => async (dispatch) => {
  await axios
    .get(API_URL + '/' + user_id)
    .then(response => {
      dispatch({ type: GET_FAVLIST, payload: response.data });
      return response.data;

    })
    .catch(err => {
      console.log(err)
      alert('Get data error');
    });
};

export const getProductId = (data) => async (dispatch) => {
  console.log('request getProductId');
  const allProduct = []
  if (data !== undefined) {

    for (let i = 0; i < data.length; i++) {
      var obj = data[i];
      await axios
        .get(API_URL + '/productDetail/' + obj.product_id)
        .then(response => {
          if (response.data[0] != undefined) {
            console.log(response.data, 31);
            allProduct.push(response.data[0])
            dispatch({ type: GET_PRODUCTLIST, payload: allProduct });
          } else {
            dispatch({ type: GET_PRODUCTLIST, payload: allProduct });
          }

        })
        .catch(err => {
          console.log(err)
          alert('Get data error');
        });
    }
  }
};

export const addFavoriteList = (user_id, pid) => async (dispatch) => {

  console.log("test add")
  let addData;
  let getData;
  await axios
    .post(API_URL, {
      _id: user_id,
      product_id: pid,
    })
    .then(response => {
      console.log(response.data, 61);
      addData = response.data;
      // dispatch({ type: ADD_FAVORITE, payload: response.data });
      return response.data;
    })
    .catch(err => {
      console.log(err)
      console.log("Add fail")
    });

  await axios
    .get(API_URL + '/productDetail/' + pid)
    .then(response => {
      console.log(response.data);
      if (response.data[0] != undefined) {
        console.log(response.data, 72);
        getData = response.data[0]
      }
    })
    .catch(err => {
      console.log(err)
      alert('Get data error');
    });

  dispatch({ type: ADD_FAVORITE, payload: { fav: addData.data, detail: getData } });

};


export const deleteFavorite = (user_id, _id) => async (dispatch) => {
  console.log("Rook : ", user_id, " ", _id)
  await axios
    .delete(API_URL + '/' + user_id + '/' + _id)
    .then(response => {
      console.log(response.data, 77);
      dispatch({ type: DELETE_FAVORITE, payload: response.data })
      return response.data;
    })
    .catch(err => {
      console.log(err)
      console.log("Delete fail")

    });
};
