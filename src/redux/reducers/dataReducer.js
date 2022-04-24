import {PRODUCTS_DATA, PRICE_PRODUCT, SET_URL_IMAGE, API_USER, API_LOGOUT} from '../types';

const initialState = {
  user: null,
  userLog: false,
  data: [],
  productprice: [],
  urlimage: [
    {
      name: 'ไข่ไก่',
      url: 'https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2Fegg.png?alt=media',
    },
    {
      name: 'ไข่เป็ด',
      url: 'https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2Fegg%20(1).png?alt=media',
    },
    {
      name: 'ไก่',
      url: 'https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2Frooster.png?alt=media',
    },
    {
      name: 'ปลา',
      url: 'https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2Ffish%20(1).png?alt=media',
    },
    {
      name: 'สุกร',
      url: 'https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2Fpig%20(1).png?alt=media',
    },
    {
      name: 'โค',
      url: 'https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2Fcow%20(1).png?alt=media',
    },
    {
      name: "กระบือ",
      url : "https://i.dlpng.com/static/png/43251_thumb.png"
    },
    {
      name: "กุ้ง",
      url : "https://flaticons.net/icon.php?slug_category=miscellaneous&slug_icon=prawn-01&icon_size=256&icon_color=E2D5D5&icon_flip=&icon_rotate=0"
    },
    {
      name : "หอย",
      url : "https://www.iconsdb.com/icons/preview/white/shellfish-xxl.png"
    },
    {
      name : "เส้นก๋วยเตี๋ยว",
      url : "https://www.smeleader.com/wp-content/uploads/2019/08/%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B8%A3%E0%B8%B2%E0%B8%A2%E0%B8%8A%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%9C%E0%B8%A5%E0%B8%B4%E0%B8%95%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%81%E0%B9%8B%E0%B8%A7%E0%B8%A2%E0%B9%80%E0%B8%95%E0%B8%B5%E0%B9%8B%E0%B8%A2%E0%B8%A7-%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B8%88%E0%B8%B5%E0%B8%99-%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%9A%E0%B8%B0%E0%B8%AB%E0%B8%A1%E0%B8%B5%E0%B9%88.jpg"
    },
    {
      name : "ผักบุ้งจีน",
      url : "https://file.sogoodweb.com/upload/156/RCyj3QwIUY.png"
    },
    {
      name : "ผักคะน้า",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2Fpngegg%20(5).png?alt=media&token=a1dde6dd-1850-41b7-aceb-ee969de3124d"
    },
    {
      name : "ผักกวางตุ้ง",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2Fkisspng-chinese-cuisine-choy-sum-cantonese-cuisine-vegetab-cabbage-material-5a81f95e25c691.8514624715184674221547.png?alt=media&token=c4b4d61f-8c9c-4164-aff5-2e905e73d81b"
    },
    {
      name: "ผักกาด",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2Fpngegg%20(6).png?alt=media&token=1c2b37c4-2e66-481e-85d8-8b109f286970"
    },
    {
      name : "กะหล่ำ",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2Fpngegg%20(7).png?alt=media&token=88460f5a-04db-40ff-9a99-3393ba429f02"
    },
    {
      name : "มะระจีน",
      url : "https://adeq.or.th/wp-content/uploads/2019/04/%E0%B8%A1%E0%B8%B0%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B5%E0%B8%9901.jpg"
    },
    {
      name : "มะเขือเทศ",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2Fkisspng-tomato-juice-clip-art-vegetable-album-5a9ac81bd7a464.1927236615200932118833.png?alt=media&token=c69bb2ad-2355-4cb6-8173-e3274613ce9d"
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PRODUCTS_DATA:
      return {
        ...state,
        data: [...action.payload.slice(1)],
      };
    case PRICE_PRODUCT:
      return {
        ...state,
        productprice: [...state.productprice, action.payload],
      };
    case SET_URL_IMAGE:
      return {
        ...state,
        urlimage: action.payload,
      };

    default:
      return state;
  }
}
