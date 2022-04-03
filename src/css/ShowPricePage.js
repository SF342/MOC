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
        backgroundColor: '#0A214A',
        marginBottom: '2%',
        borderRadius: 60,
      },
      topic: {
        flex: 1,
        color: 'black',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        fontFamily: "Mitr-Light",
        marginBottom: '2%'
      },
      update: {
        color: '#21325E',
        textAlign: 'center',
        paddingLeft: '10%',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: "Mitr-Light",
      },
      title: {
        color: '#21325E',
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold',
        paddingLeft: '20%',
        fontFamily: "Mitr-Light",
      },
      title1: {
        color: '#21325E',
        textAlign: 'center',
        fontSize: 20,
        fontFamily: "Mitr-Light",
        fontWeight: 'bold',
      },
      title2: {
        color: '#CED0CE',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: "Mitr-Light"
      },
      title3: {
        textAlign: 'center',
        fontSize: 40,
        fontFamily: "Mitr-Light",
        color: '#FFC511',
        fontWeight: '700'
      },
      imcontainer: {

      },
      
});