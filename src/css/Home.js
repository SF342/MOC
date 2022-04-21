import { StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export const HomeStyle = (prop) => StyleSheet.create({
    // These are user defined styles
    container: {
        backgroundColor: prop.container,
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
        backgroundColor: prop.logoutbg,
        width: 320,
        height: 60,
        borderRadius: 10,
        shadowColor: prop.shadow1,
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 5
      },
      bg_modal: {
        backgroundColor: prop.shadow1,
        width: '100%',
        height: '100%',
      },
      paper_madal: {
        backgroundColor: prop.whitemain,
        margin: 30,
        marginTop: 100,
        marginBottom: 100,
        padding: 20,
        borderRadius: 10,
        flex: 1
      },
      confirmButtonText: {
        textAlign: 'center',
        color: prop.shadow1,
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
        borderBottomColor: prop.line,
        borderBottomWidth: 1,
        marginTop: 240,
        marginRight: 40,
      },

});