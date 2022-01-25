import { PRODUCTS_DATA } from '../types';
import { firestore, storage } from '../../config'




export const getData = () => async(dispatch) => {
    
    const url = "https://dataapi.moc.go.th/gis-products"
    await fetch(url).then((res) => res.json())
        .then(result => {
            dispatch({ type: PRODUCTS_DATA, payload: result });
        })
}


