import { PRODUCTS_DATA, PRICE_PRODUCT } from '../types';
import { firestore, storage } from '../../config'




export const getData = () => async (dispatch) => {

    const url = "https://dataapi.moc.go.th/gis-products"
    await fetch(url).then((res) => res.json())
        .then(result => {
            dispatch({ type: PRODUCTS_DATA, payload: result });
        })
}

export const getPrice = (PID) => async (dispatch) => {

    const date = new Date()
    const today = date.getFullYear() + '-' + date.getMonth() + 1 + '-' + date.getDay();
    const weekAgo = getWeekAgo();

    const getWeekAgo = () => {
        const day = date.getDay() - 7;
        if (day <= 0) {
            return (date.getFullYear() + '-' + date.getMonth() + '-' + 30 - day)
        } else {
            return (date.getFullYear() + '-' + date.getMonth() + 1 + '-' + date.getDay())
        }
    }

    const url = "https://dataapi.moc.go.th/gis-product-prices?product_id=" + PID + "&from_date=" + weekAgo + "&to_date=" + today;
    await fetch(url).then((res) => res.json())
        .then(result => {
            dispatch({ type: PRICE_PRODUCT, payload: result });
        })
}



