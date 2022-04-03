import { StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
    // These are user defined styles
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'stretch',
        marginBottom: 15
      },
      container1: {
        width: '100%',
        height: '100%',
      },
      container: {
        flex: 1,
        alignItems: 'center',
      },
      bgInput: {
        height: '80%',
        width: '85%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%'
      },
      title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: '2%'
      },
      btn: {
        height: 50,
        width: 150,
        backgroundColor: "#37379C",
        borderRadius: 80,
        marginLeft: 75,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      btnTxt: {
        color: 'white',
        fontWeight: '400',
        fontSize: 18,
      },
      loginText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: '500',
        fontSize: 30,
        padding: 15
      },
      loginButtonText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 15
      },
    
      container: {
        flex: 1,
        backgroundColor: '#E2FCFA',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50,
      },
      text: {
        color: 'black',
        fontSize: 18
      },
      img: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 20,
      },
      Box: {
        width: "90%",
        backgroundColor: 'white',
        marginHorizontal: 10,
        borderRadius: 20,
      },
      forget:{
        marginLeft: 25,
        marginTop: 10,
      },
      forgettext:{
        color: '#3D51CA',
        fontSize: 12
      },
      text1:{
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
      },
      textbox:{
        marginBottom: 10,
        
      },
      textbox2:{
        marginBottom: 20,
        marginLeft:85,
        flexDirection: 'row'
      },
      footerText:{
        color: '#FFFFFF',
        fontSize: 14,
        textAlign: 'center',
        marginTop: 20
      },
      RegisterText:{
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        textDecorationLine: 'underline',
        textDecorationStyle: "solid",
      },

});