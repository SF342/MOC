import { StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export const FooterStyle = (prop) => StyleSheet.create({
    tabBarStyle: {
        headerShown: false,
        backgroundColor: prop.BottomTab,
        position: 'absolute',
        left: 15,
        right: 15,
        bottom: 10,
        borderRadius: 15,
        height: 60,
        elevation: 0,
        shadowColor: 10,
        paddingBottom: 1,
        borderTopWidth: 0
    },
});