import { theme } from 'native-base';
import { StyleSheet, Dimensions} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
const {width} = Dimensions.get('window');



export const FavoriteStyle = (prop) => StyleSheet.create({

    // These are user defined styles
    listFavorite: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '4%',
    },
    logo : {
      width: 100,
      height: 100,
    },
    boxTopic: {
      flexDirection: 'row',
      alignSelf: 'center',
      width: '100%',
    },
    boxFavelist: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      alignSelf: 'center',
      marginTop: "5%",
      height: '100%',
      width: '90%',
      marginBottom: '20%',
      borderRadius: 10,
      shadowColor: prop.shadow1,
      shadowOpacity: 5,
      shadowRadius: 5,
    },
    superListFav: {
      marginTop: '5%',
      marginBottom: '0%',
    },
    superListFav2: {
      marginTop: '5%',
      marginRight: '0%'
    },
    container1: {
      width: '100%',
      height: '100%',
    },
    topicList: {
      width: '97%',
      flexDirection: 'row',
      alignItems: 'center',
      height: 60,
      shadowColor: prop.shadow1,
      shadowOpacity: 5,
      shadowRadius: 5,
      elevation: 5,
      borderRadius: 20
    },
    topicListback: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      height: 60,
      borderRadius: 20,
    },
    topicList2: {
      width: '65%',
      flexDirection: 'column',
      alignItems: 'center',
      height: 150,
      backgroundColor: prop.topicbg,
      shadowColor: prop.shadow1,
      shadowOpacity: 5,
      shadowRadius: 5,
      elevation: 5,
      borderRadius: 20,
      marginLeft: '3%'
    },
    topicListback2: {
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      height: 150,
      borderRadius: 20,
    },
    textTopicList: {
      color: prop.topictext,
      fontSize: 19,
      fontFamily: 'Mitr-Regular',
      marginLeft:15,
    },
    textTopicList2: {
      color: prop.topictext,
      fontSize: 12,
      fontFamily: "Mitr-Light",
      marginLeft:10,
      marginRight:10,
      textAlign: 'center',
    },
    title: {
      color: prop.whitemain,
      textAlign: 'center',
      fontSize: 30,
      fontWeight: '600',
    },
    titlecolor:{
      color: prop.title2,
      fontSize: 30,
      fontWeight: '600',
    },
    pickerbox:{
      flexDirection: 'row',
      alignSelf: 'center',
      width: '100%',
    },
    icon:{
      width: 25,
      height: 25,
      position: 'absolute',
      right: 15, // Keep some space between your left border and Image
    },
    icon2:{
      width: 25,
      height: 25,
      position: 'absolute',
      marginTop: 10,
      right: 5, // Keep some space between your left border and Image
    },
    GridViewBlockStyle: {
      margin:5,
      marginRight: 'auto',
      marginBottom: '5%',
      flexDirection: 'row',
    },
    searchcontainer:{
      backgroundColor: 'rgba(0,0,0,0.00001)',
      borderWidth: 0, //no effect
      shadowColor: 'white', //no effect
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent',
      width: 250,
    },
    
});
