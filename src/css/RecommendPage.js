import { StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export const RecommendPageStyle = (prop) => StyleSheet.create({
    // These are user defined styles
    container: {
        backgroundColor: prop.container,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    logo: {
        width: 80,
    },
    container1: {
        width: '100%',
        height: '100%',
        marginBottom: '20%'
    },
    box1: {
        color: prop.box1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '70%',
        height: 60,
        marginBottom: 1,
        marginBottom: '3%',
        marginTop: '3%',
        fontFamily: "Mitr-Light",
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 5,
        backgroundColor: prop.background1,
        borderRadius: 20
    },
    TextContainer1: {
        flexDirection: 'row',
        marginBottom: '1%',
    },
    loginButtonText: {
        textAlign: 'center',
        color: prop.whitemain,
        fontWeight: 'bold',
        fontSize: 20,
        padding: 15
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

});