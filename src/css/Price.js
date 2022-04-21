import { StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
    // These are user defined styles
    container: {
        flex: 1,
        backgroundColor: '#E3EEFF',
      },
      Header: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        padding: 5,
        borderColor: 'white',
        borderRadius: 20,
        borderBottomWidth: 1,
        fontWeight: '300',
        paddingBottom:10,
      },
      t1: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        fontWeight: '300',
        padding: 5,
        
      },
      t2: {
        fontSize: 20,
        color: 'black',
        fontWeight: '500',
        padding: 5,
        
      },
      modalbox: {
        borderRadius: 30,
        padding: 10,
        margin: 20,
        backgroundColor: 'rgba(180, 180, 180,0.09)',
        marginBottom: 15,
        // alignItems: 'center',
        // justifyContent: 'center',
       
      },
      modalTextheader: {
        color: "black",
        fontWeight: "bold",
      },
      text: {
        color: 'white',
        marginTop: 15,
        alignSelf: 'center',
        fontWeight: '300',
        fontSize: 20,
      },
      pickerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 30,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'black',
        padding: 15,
        width: 300,
        alignSelf: 'center',
        marginLeft: 10,
      },
      pickerbox: {
        alignItems: 'center', 
        paddingBottom: 10 , 
        margin:20
      },
    
      pickerContainer: {
        paddingTop: 10,
        alignItems: 'center',
        paddingBottom: 10,
      },
      ScrollView: {
        marginTop: 1,
      },
    
      ButtonContainer: {
        width: 90,
        height: 60,
        borderRadius: 30,
        marginTop: 15,
        paddingLeft: 13,
      },
      centeredView: {
        flex: 1,
        backgroundColor: "#000000",
        // justifyContent: "center",
        // alignItems: "center",
        // margin: 22
      },
      modalView: {
        flex:1,
        margin: 50,
        // marginTop: 100,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonClose: {
        backgroundColor: "#0A214A",
        borderRadius: 12,
        width:80,
        padding: 10,
        marginTop:10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        fontWeight:'600',
        marginBottom: 5,
        fontSize: 14,
        textAlign: "center"
      },
      modalHeader: {
        fontWeight:'600',
        fontSize: 15,
        paddingHorizontal: 10,
        marginBottom: 5,
    
        
      },
      icontext: {
        alignItems: 'center',
        
      },
      barChart:{
        marginBottom:25,
      }

});