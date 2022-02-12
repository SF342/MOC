import AsyncStorage from '@react-native-async-storage/async-storage';
import {getData} from './dataActions';
import {CHANGE_THEME} from '../types';

export const themeOptions = {
  '#2fbe74': {
    pri50: '#e4f6eb',
    pri500: '#00b25c',
    pri700: '#009145',
    pri800: '#007f39',
    sec700: '#be2f79',
    sec900: '#802764',
  },
  '#8b50da': {
    pri50: '#f0e7fa',
    pri500: '#752dd3',
    pri700: '#5d1ec4',
    pri800: '#4f17bd',
    sec700: '#679f00',
    sec900: '#256b00',
  },
  '#f69400': {
    pri50: '#fef2e0',
    pri500: '#f28800',
    pri700: '#e66900',
    pri800: '#dd4f00',
    sec700: '#0062f6',
    sec900: '#203ed7',
  },
  '#000000': {
    pri50: '#f5f5f5',
    pri500: '#555555',
    pri700: '#262626',
    pri800: '#000000',
    sec700: '#434343',
    sec900: '#000000',
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
  dispatch({type: CHANGE_THEME, theme: themeOptions[primaryColor]});
};
