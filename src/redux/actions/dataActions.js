import { PRODUCTS_DATA, PRICE_PRODUCT, SET_URL_IMAGE } from '../types';
import { useState } from 'react';
import storage from "@react-native-firebase/storage"
import db from '../../../db.json'
import axios from 'axios';


export const getData = () => async (dispatch) => {

    dispatch({ type: PRODUCTS_DATA, payload: db });

}

export const getPrice = (PID) => async (dispatch) => {

    const now = Date.now();
    const date = new Date(now)
    //console.log(date)
    var year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate();
    //console.log(year, month, day);
    const today = year + '-' + (month < 10 ? "0" + month : month) + '-' + (day < 10 ? "0" + day : day);
    const getWeekAgo = () => {
        const day = date.getDate() - 7;
        if (day <= 0) {
            return year + '-' + ((month - 1) < 10 ? "0" + (month - 1) : (month - 1)) + '-' + ((30 + day) < 10 ? "0" + (30 + day) : (30 + day))
        } else {
            return year + '-' + (month < 10 ? "0" + month : month) + '-' + ((day) < 10 ? "0" + (day) : (day))
        }
    }
    const weekAgo = getWeekAgo();

    const url = "https://dataapi.moc.go.th/gis-product-prices?product_id=" + PID + "&from_date=" + weekAgo + "&to_date=" + today;

    await axios.get(url)
        .then((response) => response.data)
        .then(result => {
            dispatch({ type: PRICE_PRODUCT, payload: result });
        })
}
