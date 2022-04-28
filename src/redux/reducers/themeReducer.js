import { CHANGE_THEME } from '../types';

const initialState = {
  theme: {
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
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, theme: action.theme };
    default:
      return state;
  }
}
