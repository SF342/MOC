import { StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
    // These are user defined styles
    boxImg: {
        width: '80%',
        height: '40%',
        marginBottom: '1%'
      },
      linearG: {
        height: '100%',
        width: '100%'
      },
      container1: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        shadowColor: "#000000",
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 5
      },
      container2: {
        width: 200,
        height: 300,
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: "#000000",
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 5
      },
      box1: {
        padding: '4%',
        textAlign: 'center'
      },
      box2Img: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      TextContainer1: {
        flexDirection: 'row',
        marginBottom: '1%',
      },
      TextContainer2: {
        marginTop: '5%'
      },
      logo: {
        width: 125,
        height: 125,
        alignSelf:'center',
        backgroundColor: 'black',
        marginBottom: '4%',
        borderRadius: 100,
        marginTop: '2%'
      },
      topic: {
        flex: 1,
        color: 'black',
        textAlign: 'center',
        fontSize: 20.5,
        fontWeight: 'bold',
        fontFamily: "Mitr-Light",
        marginBottom: '2%'
      },
      update: {
        color: 'black',
        textAlign: 'center',
        paddingLeft: '18%',
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: "Mitr-Light",
        paddingTop: '1.5%',
      },
      update1: {
        color: 'black',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'normal',
        fontFamily: "Mitr-Light",
        paddingTop: '1.5%',
      },
      title: {
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: '25%',
        fontFamily: "Mitr-Light",
      },
      title1: {
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: "Mitr-Light",
        fontWeight: 'bold',
      },

      
      
});