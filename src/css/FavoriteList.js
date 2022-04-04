import { StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
    // These are user defined styles

    listFavorite: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '3%'
      },
      boxTopic: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: 'white',
        shadowColor: "#000000",
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 10,
        width: '100%'
      },
      boxTopicGra: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: 'white',
        shadowColor: "#000000",
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 10,
        width: '100%',
        height: 55
      },
      boxFavelist: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        marginTop: "5%",
        height: '100%',
        width: '80%',
        marginBottom: '20%',
        backgroundColor: '#6188c2',
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOpacity: 5,
        shadowRadius: 5,
      },
      superListFav: {
        marginTop: '5%',
        marginBottom: '20%',
      },
      container1: {
        width: '100%',
        height: '100%',
      },
      favLogo: {
        width: 40,
        height: 50,
      },
      delButton: {
        backgroundColor: '#b53531',
        width: 50,
        height: 50,
        shadowColor: "#000000",
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
      textDelButton: {
        color: 'white',
        fontSize: 20
      },
      topicList: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#0A214A',
        shadowColor: "#000000",
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 5,
      },
      textTopicList: {
        color: 'white',
        fontSize: 18,
        fontFamily: "Mitr-Light",
    
      },
      bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        marginRight: '5%'
      },
      title: {
        color: 'black',
        textAlign: 'center',
        fontSize: 35,
        fontFamily: "Mitr-Light",
      },
      title2: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        width: 320,
        marginBottom: 10,
        marginTop: 10,
        fontWeight: 'bold',
      },
      circleText: {
        width: '115%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      },
      circleButton: {
        borderRadius: 100,
        marginVertical: 10,
        backgroundColor: '#FFC511',
        width: 70,
        height: 70,
        shadowColor: "#000000",
        shadowOpacity: 15,
        shadowRadius: 15,
        elevation: 15,
      },
      logInButton: {
        marginVertical: 10,
        backgroundColor: '#0A214A',
        width: 320,
        height: 60,
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 5,
      },
      loginButtonText: {
        textAlign: 'center',
        color: '#F0FFFF',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 15
      },
      container: {
        flex: 1,
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E2FCFA',
      },
      favoriteList: {
        marginVertical: 10,
        backgroundColor: '#0A214A',
        width: 320,
        height: 60,
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 5
      },
      bg_modal: {
        backgroundColor: '#000000aa',
        flex: 1
      },
      paper_madal: {
        backgroundColor: '#ffffff',
        margin: 30,
        marginTop: 200,
        marginBottom: 200,
        padding: 20,
        borderRadius: 10,
        flex: 1
      }

});