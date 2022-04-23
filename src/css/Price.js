import { StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export const PriceStyle = (prop) => StyleSheet.create({
    // These are user defined styles
    container1: {
        flex: 1,
        backgroundColor: prop.sec700,
      },
      Header: {
        fontSize: 20,
        color: prop.whitemain,
        alignSelf: 'center',
        padding: 5,
        borderColor: prop.whitemain,
        borderRadius: 20,
        borderBottomWidth: 1,
        fontWeight: '300',
        paddingBottom:10,
      },
      t1: {
        fontSize: 20,
        color: prop.whitemain,
        alignSelf: 'center',
        fontWeight: '300',
        padding: 5,
        
      },
      t2: {
        fontSize: 26,
        color: prop.whitemain,
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
        color: prop.shadow1,
        fontWeight: "bold",
      },
      text: {
        color: prop.whitemain,
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
        borderColor: prop.shadow1,
        padding: 15,
        width: 348,
        alignSelf: 'center',
        marginLeft: 0,
        backgroundColor: prop.boxprice,
      },
      topicList2: {
        width: '40%',
        flexDirection: 'column',
        alignItems: 'center',
        height: 200,
        backgroundColor: prop.boxprice,
        shadowColor: prop.shadow1,
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 5,
        borderRadius: 40,
        marginLeft: 25,
      },
      pickerbox: {
        alignItems: 'center', 
        paddingBottom: 10 , 
        // margin:20
      },
      GridViewBlockStyle: {
        margin:5,
        marginRight: 'auto',
        marginBottom: '5%',
        flexDirection: 'row',
        marginTop: 25,
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
        backgroundColor: prop.shadow1,
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
        shadowColor: prop.shadow1,
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
        backgroundColor: prop.background1,
        borderRadius: 12,
        width:80,
        padding: 10,
        marginTop:10,
        elevation: 2
      },
      textStyle: {
        color: prop.whitemain,
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
      },
      logo : {
        width: 100,
        height: 100,
        marginTop:10,
        position: 'absolute',
        top: 65,
      },
      textTopicList2: {
        color: prop.shadow1,
        fontSize: 14,
        fontFamily: "Mitr-Light",
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        textAlign: 'center'
      },

});