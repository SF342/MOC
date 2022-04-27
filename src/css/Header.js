import { StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export const HeaderStyle = (prop) => StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 90,
        backgroundColor: prop.background1,        
        alignItems: 'center',

    },
    text: {
        color: '#FFFFFF',
        fontSize: 20,     
        fontFamily:"Mitr-Light",
          
    },
    title: {
        color: '#059FE1',
        fontSize: 15, 
    },
    img : {              
        width: 60,
        height: 60,
        resizeMode: 'contain',
        paddingRight: 100,   
    }
});