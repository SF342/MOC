import {CHANGE_THEME} from '../types';

const initialState = {
  theme: {
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
    boxprice: '#FAFAFA',

    /////   RecommendPage   /////
    box1: '#FFC511',

    /////   ShowPricePage   /////


  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return {...state, theme: action.theme};
    default:
      return state;
  }
}
