import { PRODUCTS_DATA, PRICE_PRODUCT, USER_STATE } from '../types';
import { useState, useEffect  } from 'react';
import auth from '@react-native-firebase/auth';

export const getData = () => async (dispatch) => {

    const url = "https://dataapi.moc.go.th/gis-products"
    await fetch(url).then((res) => res.json())
        .then(result => {
            dispatch({ type: PRODUCTS_DATA, payload: result });
        }).catch(console.error())
}

export const getPrice = (PID) => async (dispatch) => {

    const date = new Date()
    const today = moment(date).format("YYYY-MM-DD");

    const getWeekAgo = () => {
        const day = date.getDay() - 8;
        if (day <= 0) {
            return date.getFullYear() + '-' + date.getMonth() + '-' + (30 + day)
        } else {
            return (date.getFullYear() + '-' + date.getMonth() + 1 + '-' + (date.getDay() - 8))
        }
    }
    const weekAgo = moment(date).subtract(7, 'days').format("YYYY-MM-DD");

    const url = "https://dataapi.moc.go.th/gis-product-prices?product_id=" + PID + "&from_date=" + weekAgo + "&to_date=" + today;
    console.log(url)

    await fetch(url).then((res) => res.json())
        .then(result => {
            dispatch({ type: PRICE_PRODUCT, payload: result });
        }).catch(console.error())
}


export const getUserState = () => async (dispatch) => {
    
    await  firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log(user)
        } else {
            console.log("none")
        }
      }).then(result => {
        dispatch({ type: USER_STATE, payload: result });
      });
}