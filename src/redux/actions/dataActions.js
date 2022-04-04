import { PRODUCTS_DATA, PRICE_PRODUCT, SET_URL_IMAGE } from '../types';
import { useState } from 'react';
import storage from "@react-native-firebase/storage"
import db from '../../../db.json'

export const getData = () => async (dispatch) => {

    dispatch({ type: PRODUCTS_DATA, payload: db });

}

export const getPrice = (PID) => async (dispatch) => {

    const date = new Date()
    const today = date.getFullYear() + '-' + date.getMonth() + 1 + '-' + (date.getDay() - 1);


    const getWeekAgo = () => {
        const day = date.getDay() - 8;
        if (day <= 0) {
            return date.getFullYear() + '-' + date.getMonth() + '-' + (30 + day)
        } else {
            return (date.getFullYear() + '-' + date.getMonth() + 1 + '-' + (date.getDay() - 8))
        }
    }
    const weekAgo = getWeekAgo();

    const url = "https://dataapi.moc.go.th/gis-product-prices?product_id=" + PID + "&from_date=" + "2018-01-01" + "&to_date=" + "2018-01-28";

    await fetch(url).then((res) => res.json())
        .then(result => {
            dispatch({ type: PRICE_PRODUCT, payload: result });
        }).catch(console.error())
}
