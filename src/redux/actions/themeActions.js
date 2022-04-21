import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData} from './dataActions';
import {CHANGE_THEME} from '../types';

export const themeOptions = {
    /////   Main   /////
  '#2fbe74': {
    background2: '#6bd8ff',
    whitemain: '#fff',
    background1: '#0A214A',
    pri800: '#e66900',
    sec700: '#e3eeff',
    shadow1: '#000000',
    /////   Favourite List   /////
    topicbg: '#5DB2BD',
    topictext: '#F0FF00',
    title2: '#FFFAD3',

    /////   Home   /////
    container: '#393E46',
    logoutbg: '#b53531',
    line: '#DFDFDE',

    /////   LoggedInPage   /////
    containerbg: '#E2FCFA',
    text: '#00CABA',
    card: '#2D648C',

    /////   LoginScreen   /////
    btnbg: '#37379C',
    forgettext: '#3D51CA',

    /////   Price   /////


    /////   RecommendPage   /////
    box1: '#FFC511',

    /////   ShowPricePage   /////


  },
  // '#000000': {
  //   background2: '#6bd8ff',
  //   whitemain: '#fff',
  //   background1: '#0A214A',
  //   pri800: '#e66900',
  //   sec700: '#e3eeff',
  //   shadow1: '#000000',
  //   /////   Favourite List   /////
  //   topicbg: '#5DB2BD',
  //   topictext: '#F0FF00',
  //   title2: '#FFFAD3',

  //   /////   Home   /////
  //   container: '#393E46',
  //   logoutbg: '#b53531',
  //   line: '#DFDFDE',

  //   /////   LoggedInPage   /////
  //   containerbg: '#E2FCFA',
  //   text: '#00CABA',
  //   card: '#2D648C',

  //   /////   LoginScreen   /////
  //   btnbg: '#37379C',
  //   forgettext: '#3D51CA',

  //   /////   Price   /////


  //   /////   RecommendPage   /////
  //   box1: '#FFC511',

  //   /////   ShowPricePage   /////

  // },
};

export const storeData = async (name, value) => {
  let dataValue = JSON.stringify(value);
  try {
    await AsyncStorage.setItem(name, dataValue);
    return await getData(name);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const changeTheme = color => dispatch => {
    console.log(color)
  storeData('@triple7-theme', color)
    .then(() => {
      dispatch(change_theme(color));
    })
    .catch(() => {
      console.log('what the fuk just happen.');
    });
};

export const change_theme = primaryColor => dispatch => {
    console.log(primaryColor)
  dispatch({type: CHANGE_THEME, theme: themeOptions[primaryColor]});
};
