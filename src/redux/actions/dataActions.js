import { PRODUCTS_DATA, PRICE_PRODUCT, USER_STATE } from '../types';

export const getData = () => async (dispatch) => {

    const url = "https://dataapi.moc.go.th/gis-products"
    await fetch(url).then((res) => res.json())
        .then(result => {
            dispatch({ type: PRODUCTS_DATA, payload: result });
        }).catch(console.error())
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


export const getUserState = () => async (dispatch) => {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    if (!user) {
        return (
            console.log("Poom")
        );
    }
    dispatch({ type: USER_STATE, payload: "poom" });

}