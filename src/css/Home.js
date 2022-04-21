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
      bg_modal: {
        backgroundColor: '#000000',
        width: '100%',
        height: '100%',
      },
      paper_madal: {
        backgroundColor: '#ffffff',
        margin: 30,
        marginTop: 100,
        marginBottom: 100,
        padding: 20,
        borderRadius: 10,
        flex: 1
      },
      confirmButtonText: {
        textAlign: 'center',
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20,
        padding: 15
      },
      fav: {
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        width: 320,
        marginBottom: 15,
        marginTop: 30,
        fontWeight: 'bold',
      },
      line: {
        width: 315,
        borderBottomColor: '#DFDFDE',
        borderBottomWidth: 1,
        marginTop: 240,
        marginRight: 40,
      },

});