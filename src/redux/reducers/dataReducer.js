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
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2Fcow%20(1).png?alt=media"
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
    {
      name: "ถั่วฝักยาว",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2Fkisspng-green-bean-portable-network-graphics-refried-beans-green-beans-png-image-2-png-transparent-best-stock-5b63094f0e9089.4506097115332171030597.png?alt=media&token=a77237ea-ecf6-48fd-a3f9-96556af47957"
    },{
      name : "แตงกวา",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2Fpngegg%20(10).png?alt=media&token=cafbb412-023d-438f-9ae3-2980e38fc62c"
    },
    {
      name : "ทุเรียนชะนี",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP14019-%E0%B8%97%E0%B8%B8%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%8A%E0%B8%B0%E0%B8%99%E0%B8%B5.png?alt=media&token=53bb333d-e9ff-4eaf-bade-06b2604f0103"
    },
    {
      name : "ทุเรียนหมอนทอง",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP14020-%E0%B8%97%E0%B8%B8%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%AB%E0%B8%A1%E0%B8%AD%E0%B8%99%E0%B8%97%E0%B8%AD%E0%B8%87.png?alt=media&token=3bd3e983-e874-46e8-973c-d5aeb964b7b6"
    },
    {
      name : "มังคุด",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP14018-%E0%B8%A1%E0%B8%B1%E0%B8%87%E0%B8%84%E0%B8%B8%E0%B8%94(%E0%B8%9C%E0%B8%B4%E0%B8%A7%E0%B8%81%E0%B8%A3%E0%B8%B0).png?alt=media&token=3d558598-8f10-417c-bcd7-9d8ad2a9b45c"
    },
    {
      name : "กล้วยไข่",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP14008-%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B9%84%E0%B8%82%E0%B9%88.png?alt=media&token=444c10b3-675d-4804-9733-3984ec612b37"
    },
    {
      name : "เงาะ",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP14016-%E0%B9%80%E0%B8%87%E0%B8%B2%E0%B8%B0%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99.png?alt=media&token=02817af1-10e3-4eba-a67a-75b0660db2a3"
    },
    {
      name : "ผักคะน้า",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13047-%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%84%E0%B8%B0%E0%B8%99%E0%B9%89%E0%B8%B2.png?alt=media&token=273a85bb-01bc-4cf7-9bb7-a08b273b24bc"
    },
    {
      name : "มะนาว",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13043-%E0%B8%A1%E0%B8%B0%E0%B8%99%E0%B8%B2%E0%B8%A7.png?alt=media&token=6269dd9d-882f-42b0-87b1-9c8b1a06fad9"
    },
    {
      name : "กล้วยน้ำว้า",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP14007-%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A7%E0%B9%89%E0%B8%B2.png?alt=media&token=d331c0ca-00dd-4946-b874-8467c414e14f"
    },
    {
      name : "ผักกาด",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13055-%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%94%E0%B8%82%E0%B8%B2%E0%B8%A7%E0%B8%9B%E0%B8%A5%E0%B8%B5.png?alt=media&token=64a53967-c613-42ac-8718-20d3282905bb"
    },
    {
      name : "พริกขี้หนูสวน",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13091-%E0%B8%9E%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%82%E0%B8%B5%E0%B9%89%E0%B8%AB%E0%B8%99%E0%B8%B9%E0%B8%AA%E0%B8%A7%E0%B8%99.png?alt=media&token=c55b3f55-1a84-476b-adc1-bb00d46ce59a"
    },
    {
      name : "ขึ้นฉ่าย",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13039-%E0%B8%82%E0%B8%B6%E0%B9%89%E0%B8%99%E0%B8%89%E0%B9%88%E0%B8%B2%E0%B8%A2.png?alt=media&token=1ea9ed67-1b44-47fe-afe5-bbeb41a5c3fc"
    },
    {
      name : "ขิง",
      url :"https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13045-%E0%B8%82%E0%B8%B4%E0%B8%87%E0%B8%AD%E0%B9%88%E0%B8%AD%E0%B8%99.png?alt=media&token=f390472a-4640-4332-a8db-23277b5b5f4c"
    },
    {
      name : "ส้มเขียวหวาน",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP14001-%E0%B8%AA%E0%B9%89%E0%B8%A1%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%AB%E0%B8%A7%E0%B8%B2%E0%B8%99.png?alt=media&token=c7444e52-716b-46b5-adc6-21128ac4b9f1"
    },
    {
      name : "ผักชี",
      url :"https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13033-%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%8A%E0%B8%B5.png?alt=media&token=0522e3d0-47dd-4326-9b70-cb44021381d6"
    },
    {
      name : "มะม่วง",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP14012-%E0%B8%A1%E0%B8%B0%E0%B8%A1%E0%B9%88%E0%B8%A7%E0%B8%87%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%84%E0%B8%A1%E0%B9%89.png?alt=media&token=e9dbfbdc-1a3e-4240-b215-fe4dd1c690f9"
    },
    {
      name : "มะเขือ",
      url :"https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13067-%E0%B8%A1%E0%B8%B0%E0%B9%80%E0%B8%82%E0%B8%B7%E0%B8%AD%E0%B9%80%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A2%E0%B8%B2.png?alt=media&token=f0e871b7-1c49-4237-8fa6-2a5ce7ccc90f"
    },
    {
      name : "ถั่วฝักยาว",
      url :"https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13068-%E0%B8%96%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B8%9D%E0%B8%B1%E0%B8%81%E0%B8%A2%E0%B8%B2%E0%B8%A7.png?alt=media&token=d83fd59e-c6f4-4036-b765-5d5fba142fc5"
    },
    {
      name : "ผักกะเฉด",
      url :"https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13041-%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B0%E0%B9%80%E0%B8%89%E0%B8%94.png?alt=media&token=59783213-f51b-4877-80ca-5793f362acea"
    },
    {
      name : "ขิงแก่",
      url :"https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13046-%E0%B8%82%E0%B8%B4%E0%B8%87%E0%B9%81%E0%B8%81%E0%B9%88.png?alt=media&token=065e6685-9c67-4fa6-a76b-504d37be6204"
    },
    {
      name : "ผักกาดหอม",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13053-%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%94%E0%B8%AB%E0%B8%AD%E0%B8%A1.png?alt=media&token=66c4c55e-5e79-4ad2-967b-368a8195d6eb"
    },
    {
      name : "กระชายขาว",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13059-%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B8%82%E0%B8%B2%E0%B8%A7.png?alt=media&token=8fd98df9-3d36-4acd-999d-d0c7b79d1672"
    },
    {
      name : "แตงกวา",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13070-%E0%B9%81%E0%B8%95%E0%B8%87%E0%B8%81%E0%B8%A7%E0%B8%B2.png?alt=media&token=b11210a9-92b7-463f-a529-55d1644353da"
    },
    {
      name : "แตงโมกินรี",
      url :"https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP14005-%E0%B9%81%E0%B8%95%E0%B8%87%E0%B9%82%E0%B8%A1%E0%B8%81%E0%B8%B4%E0%B8%99%E0%B8%A3%E0%B8%B5.png?alt=media&token=1c0ce94f-36ce-4d5a-a5c5-499a74399f96"
    },
    {
      name : "กล้วยหอม",
      url :"https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP14006-%E0%B8%81%E0%B8%A5%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%AB%E0%B8%AD%E0%B8%A1%E0%B8%97%E0%B8%AD%E0%B8%87.png?alt=media&token=b3ad6d36-6dc3-4c47-846e-63c54542926c"
    },
    {
      name : "กะหล่ำปลี",
      url :"https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13057-%E0%B8%81%E0%B8%B0%E0%B8%AB%E0%B8%A5%E0%B9%88%E0%B8%B3%E0%B8%9B%E0%B8%A5%E0%B8%B5.png?alt=media&token=48010c88-23ad-4160-ae76-b115ef30d3b6"
    },
    {
      name : "ข้าวโพดฝักอ่อน",
      url :"https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13032-%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B9%82%E0%B8%9E%E0%B8%94%E0%B8%9D%E0%B8%B1%E0%B8%81%E0%B8%AD%E0%B9%88%E0%B8%AD%E0%B8%99.png?alt=media&token=42826b42-af46-40ee-aa83-b94f8449f670"
    },
    {
      name : "ฝรั่ง",
      url :"https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP14010-%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B8%81%E0%B8%B4%E0%B8%A1%E0%B8%88%E0%B8%B9.png?alt=media&token=e0a26859-dbc1-4818-b4c9-d8efaada6827"
    },
    {
      name : "หน่อไม้ฝรั่ง",
      url :"https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13030-%E0%B8%AB%E0%B8%99%E0%B9%88%E0%B8%AD%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%9D%E0%B8%A3%E0%B8%B1%E0%B9%88%E0%B8%87.png?alt=media&token=507525c9-d4fe-4d86-918a-8713c3b17cb0"
    },
    {
      name : "มะลอกอ",
      url :"https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13092-%E0%B8%A1%E0%B8%B0%E0%B8%A5%E0%B8%AD%E0%B8%81%E0%B8%AD(%E0%B8%9E%E0%B8%B1%E0%B8%99%E0%B8%98%E0%B8%B8%E0%B9%8C%E0%B9%81%E0%B8%82%E0%B8%81%E0%B8%94%E0%B8%B3%E0%B8%94%E0%B8%B3%E0%B9%80%E0%B8%99%E0%B8%B4%E0%B8%99).png?alt=media&token=35ddaeb9-dda8-4fec-8a2a-25964b9a6c38"
    },
    {
      name : "พริก",
      url :"https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13037-%E0%B8%9E%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%AA%E0%B8%94%E0%B8%8A%E0%B8%B5%E0%B9%89%E0%B8%9F%E0%B9%89%E0%B8%B2.png?alt=media&token=28b0056e-cf9a-446b-8b5a-1b458205d4e8"
    },
    {
      name : "ลองกอง",
      url :"https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP14021-%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%81%E0%B8%AD%E0%B8%87.png?alt=media&token=958c5880-8f0b-411a-9929-8f22d058352b"
    },
    {
      name : "ต้นหอม",
      url :"https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13035-%E0%B8%95%E0%B9%89%E0%B8%99%E0%B8%AB%E0%B8%AD%E0%B8%A1.png?alt=media&token=5650d7f5-4efb-4901-ad6e-8fde3e67a8c7"
    },
    {
      name : "หัวผักกาด",
      url :"https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13028-%E0%B8%AB%E0%B8%B1%E0%B8%A7%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%94.png?alt=media&token=7027de71-fa97-44ce-80d7-c123e41312a8"
    },
    {
      name : "ผักบุ้งไทย",
      url :"https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2FP13042-%E0%B8%9C%E0%B8%B1%E0%B8%81%E0%B8%9A%E0%B8%B8%E0%B9%89%E0%B8%87%E0%B9%84%E0%B8%97%E0%B8%A2.png?alt=media&token=85ccfb65-59cf-44fa-91ff-f3bf78966608"
    },
    {
      name : "หอม",
      url : "https://firebasestorage.googleapis.com/v0/b/sf342-8685d.appspot.com/o/AnimalIcon%2Fpngegg%20(11).png?alt=media&token=2b330998-ae09-481a-bcaa-d42fa0c054b2"
    },
    {
      name: "น้ำมัน",
      url : "https://static.wixstatic.com/media/e66c17_d4122c492a074f63abcb8814d24fe96e~mv2.png/v1/crop/x_51,y_51,w_898,h_898/fill/w_560,h_560,al_c,usm_0.66_1.00_0.01,enc_auto/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%A7%20New%20Label%20Blue%20Cap%202021%20(Front).png"
    }
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
