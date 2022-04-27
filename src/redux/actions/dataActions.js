import { PRODUCTS_DATA, PRICE_PRODUCT, SET_URL_IMAGE } from '../types';
import { useState } from 'react';
import db from '../../../db.json'
import axios from 'axios';


export const getData = () => async (dispatch) => {

    dispatch({ type: PRODUCTS_DATA, payload: db });

}

export const getPrice = (PID) => async (dispatch) => {

    const url = "https://mocapi.herokuapp.com/product/" + PID;

    await axios.get(url)
        .then((response) => response.data)
        .then(result => {
            console.log(result);
            dispatch({ type: PRICE_PRODUCT, payload: result });
        })
}
