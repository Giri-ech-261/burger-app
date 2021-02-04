import { StyleSheet } from 'react-native';
import * as colors from '../../assets/styles/color';

export default StyleSheet.create({
    headerContainer: {
        elevation:0,
        borderBottomWidth: 0,
        shadowColor: 'transparent',
    },
    headerTitleText: {
        fontSize: 18,
        color: colors.white,
        textAlign: 'center',
        alignSelf: 'center',
        width: '100%',
        fontWeight:'bold'
    },
});
