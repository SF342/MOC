import AsyncStorage from '@react-native-async-storage/async-storage';
import { getData } from './dataActions';
import { CHANGE_THEME } from '../types';

export const themeOptions = {
  /////   Main   /////
  'dark': {
    name: 'dark',
    BottomTab: '#0A214A',
    background2: '#6bd8ff',
    whitemain: '#fff',
    background1: '#0A214A',
    pri800: '#e66900',
    sec700: '#e3eeff',
    shadow1: '#000000',
    footericon: '#778899',
    footericonclick: '#fff',
    headersubtext: '#059FE1',
    headertext: '#fff',
    /////   Favourite List   /////
    topicbg: '#1544E2',
    topicbg2: '#0D2B73',
    topictext: '#FFC511',
    title2: '#FFFAD3',
    iconfavorite: "#1E1E1E",
    iconfavorite2: "#FFFFFF",
    /////   Home   /////
    container: '#393E46',
    logoutbg: '#b53531',
    line: '#DFDFDE',
    searchBarcolor: '#BDC6CF',
    listItembg: '#0A214A',
    listItembg2: '#1544E2',

    /////   LoggedInPage   /////
    containerbg: '#E2FCFA',
    text: '#00CABA',
    card: '#2D648C',
    tableftcolor: '#ff7',
    welcometextcolor: '#fff',
    welcomeiconcolor: '#fff',

    /////   LoginScreen   /////
    btnbg: '#37379C',
    forgettext: '#3D51CA',
    rigfootertext: '#fff',

    /////   Price   /////
    boxprice: '#FAFAFA',

    /////   RecommendPage   /////
    box1: '#FFC511',

    /////   ShowPricePage   /////


  },
  'light': {
    name: 'light',
    BottomTab: '#b58662',
    background2: '#f7e9d7',
    whitemain: '#fff',
    background1: '#f0c493',
    pri800: '#e66900',
    sec700: '#e3eeff',
    shadow1: '#000000',
    footericon: '#F6D3AD',
    footericonclick: '#fff',
    headersubtext: '#B58662',
    headertext: '#423F3F',
    /////   Favourite List   /////
    topicbg: '#E7B067',
    topicbg2: '#BD7638',
    topictext: '#DEDCD9',
    title2: '#FFFAD3',
    iconfavorite: "#FFFFFF",
    iconfavorite2: "#B58662",
    /////   Home   /////
    container: '#393E46',
    logoutbg: '#b53531',
    line: '#DFDFDE',
    searchBarcolor: '#F0F0F0',
    listItembg: '#BD7638',
    listItembg2: '#E7B067',

    /////   LoggedInPage   /////
    containerbg: '#E2FCFA',
    text: '#00CABA',
    card: '#D5A580',
    tableftcolor: '#B58662',
    welcometextcolor: '#423f3f',
    welcomeiconcolor: '#B58662',

    /////   LoginScreen   /////
    btnbg: '#bd7638',
    forgettext: '#3D51CA',
    rigfootertext: '#000000',

    /////   Price   /////
    boxprice: '#FAFAFA',

    /////   RecommendPage   /////
    box1: '#FFC511',

    /////   ShowPricePage   /////

  },
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
  dispatch({ type: CHANGE_THEME, theme: themeOptions[primaryColor] });
};
