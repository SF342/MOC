import { StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export const LoggedInPageStyle = (prop) => StyleSheet.create({
    // These are user defined styles
    title: {
        fontSize: 28,
        width: 320,
        marginBottom: 3,
        fontWeight: 'bold',
        color: prop.whitemain,
        paddingLeft:10,
      },
      userlogo : {
        width:150,
        height: 150,
        alignSelf: 'center',
      },  
      title2: {
        color: prop.whitemain,
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
        shadowColor: prop.shadow1,
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor: prop.whitemain
      },
      logoutButton: {
        marginVertical: 10,
        backgroundColor: prop.logoutbg,
        width: 320,
        height: 60,
        borderRadius: 10,
        shadowColor: prop.shadow1,
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 5
      },
      loginButtonText: {
        textAlign: 'center',
        color: prop.whitemain,
        fontWeight: 'bold',
        fontSize: 20,
        padding: 15
      },
      container: {
        flex: 1,
        padding: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: prop.containerbg,
      },
      text: {
        color: prop.text,
        fontSize: 18,
        textAlign: 'center',
      },
      favoriteList: {
        marginVertical: 10,
        backgroundColor: prop.background1,
        width: 320,
        height: 60,
        borderRadius: 10,
        shadowColor: prop.shadow1,
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
        color: prop.whitemain,
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
        backgroundColor: prop.card,
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
        color: prop.whitemain,
        fontWeight: '500',
        fontSize: 13.5,
        marginBottom:-15,
        marginTop:-5,
      },

});