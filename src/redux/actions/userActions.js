import { SET_SIGN_IN, SET_SIGN_OUT, SET_TASK_FAVORITE, ADD_TASK_FAVORITE, DELETE_TASK_FAVORITE } from "../types"
import auth from "@react-native-firebase/auth"
import firestore from "@react-native-firebase/firestore"

export const __doSingIn = (email, password) => async (dispatch) => {
    let response;
    try {
        response = await auth().signInWithEmailAndPassword(email, password);
        dispatch({ type: SET_SIGN_IN, payload: response })
    } catch (error) {
        console.error(error.message());
    }
}

export const __doSingOut = () => (dispatch) => {
    auth().signOut()
        .then(() => console.log('User signed out!'));
    dispatch({ type: SET_SIGN_OUT })
}

export const setSignIn = (user) => (dispatch) => {
    dispatch({ type: SET_SIGN_IN, payload: user })
}

export const getFavorite = (uid) => async (dispatch) => {

    let usersCollectionRef = firestore()
        .collection('users')
        .doc(uid)
        .collection('FavoriteList');

    auth().onAuthStateChanged((user) => {
        if (user) {
            let dataTask = [];
            usersCollectionRef.onSnapshot(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    dataTask.push({
                        ...documentSnapshot.data(),
                        id: documentSnapshot.id,
                    });
                })
                if (dataTask.length !== 0) {
                    dispatch({ type: SET_TASK_FAVORITE, payload: dataTask })
                }
            });
        }
    });
}

export const addTask = (uid, data) => (dispatch) => {

    let usersCollectionRef = firestore()
        .collection('users')
        .doc(uid)
        .collection('FavoriteList');

    usersCollectionRef.doc(data.id).set(data);

    dispatch({ type: ADD_TASK_FAVORITE, payload: data })

}

export const removeTask = (uid, docId) => async (dispatch) => {
    await firestore()
        .collection('users')
        .doc(uid)
        .collection('FavoriteList').doc(docId).delete();

    dispatch({ type: DELETE_TASK_FAVORITE, payload: docId })

}