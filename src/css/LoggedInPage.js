import { StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
    // These are user defined styles
    title: {
        fontSize: 28,
        width: 320,
        marginBottom: 3,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft:10,
      },
      userlogo : {
        width:150,
        height: 150,
        alignSelf: 'center',
      },  
      title2: {
        color: 'white',
        fontSize: 20,
        width: 320,
        fontWeight: 'bold',
        paddingLeft:10,
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
      },
      icontext:{
        fontSize:15,
        color:'#fff',
        marginLeft:-5
      },
      cardContainer: {
        height: 100,
        width: width * 0.5,
        marginRight: 8,
      },
      card: {
        height: 100,
        width: width * 0.5,
        borderRadius: 12,
        padding: 10,
        backgroundColor:'#2D648C',
      },
      flatList: {
        paddingHorizontal: 16,
        paddingVertical: 16,
      },
      logo : {
        width: 100,
        height: 100,
        marginTop:0,
        marginLeft:30,
      },
      text2: { 
        color: "#ffffff",
        fontWeight: '500',
        fontSize: 13.5,
        marginBottom:-15,
        marginTop:-5,
      },

});