import { StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
    // These are user defined styles
    container: {
        backgroundColor: '#393E46',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
      },
      logo : {
        width: 80,
      },
      container1: {
        width: '100%',
        height: '100%',
      },
      TextContainer1: {
        flexDirection: 'row',
        marginBottom: '1%',
      },
      loginButtonText: {
        textAlign: 'center',
        color: '#F0FFFF',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 15
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

});