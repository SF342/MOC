import { StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
    // These are user defined styles
    title: {
        textAlign: 'center',
        fontSize: 35,
        width: 320,
        marginBottom: '4%',
        fontWeight: 'bold',
        color: 'white'
      },
      userlogo : {
        width:150,
        height: 150,
        alignSelf: 'center',
      },  
      title2: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        width: 320,
        marginBottom: 10,
        marginTop: 10,
        fontWeight: 'bold',
        marginTop: '4%',
      },
      input: {
        marginVertical: 10,
        width: 320,
        height: 60,
        fontSize: 18,
        marginBottom: 5,
        shadowColor: "#000000",
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor: '#FFFFFF'
      },
      logoutButton: {
        marginVertical: 10,
        backgroundColor: '#b53531',
        width: 320,
        height: 60,
        borderRadius: 10,
        shadowColor: "#000000",
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 5
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
      text: {
        color: '#00CABA',
        fontSize: 18,
        textAlign: 'center',
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
      container1: {
        width: '100%',
        height: '100%',
    }

});