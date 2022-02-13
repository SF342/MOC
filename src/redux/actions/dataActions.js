import { PRODUCTS_DATA, PRICE_PRODUCT, SET_URL_IMAGE } from '../types';
import { useState } from 'react';
import storage from "@react-native-firebase/storage"
import db from '../../../db.json'

export const getData = () => async (dispatch) => {
    console.log("test get product data")
    console.log(db);
    dispatch({ type: PRODUCTS_DATA, payload: db });

    // const url = "https://dataapi.moc.go.th/gis-products"
    // await fetch(url).then((res) => res.json())
    //     .then(result => {
    //         dispatch({ type: PRODUCTS_DATA, payload: result });
    //     }).catch(console.error())
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

// export const getUrlImage = () => (dispatch) => {

//     const [img, setImg] = useState(null);
//     function listFilesAndDirectories(reference, pageToken) {
//         return reference.list({ pageToken }).then(result => {
//             // Loop over each item
//             const imgTemp = []
//             result.items.forEach((ref) => {
//                 imgTemp.push(ref.fullPath)
//             });
//             setImg(imgTemp)
//             loopUrl()
//             if (result.nextPageToken) {
//                 return listFilesAndDirectories(reference, result.nextPageToken);
//             }

//             return Promise.resolve();
//         });
//     }
//     const reference = storage().ref("AnimalIcon")
//     listFilesAndDirectories(reference)
//     console.log(url)
//     dispatch(loopUrl(img))

// }

// export const loopUrl = (img) => (dispatch) => {
//     var UrlImage = []
//     img.forEach(async (element) => {
//         let url = await storage().ref(element).getDownloadURL();
//         let t1 = { element: url };
//         UrlImage.push(t1);
//     });

//     dispatch({ type: SET_URL_IMAGE, payload: UrlImage })
// }