import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    listItemContainer: {
        flex: 1,
        height: 30,
        paddingHorizontal: 15,
        justifyContent: 'center',
        borderTopColor: 'black',
        borderTopWidth: 1,
        width:"100%",
        backgroundColor: colors.white,
    },
    TopBrandsMainView:{
        backgroundColor:colors.white,
        padding:10 
    },
    headerBlock:{
        paddingLeft:15,
        paddingRight:15,
        marginTop:10,
        marginBottom:10,
    },
    listItemLabel: {
        color: colors.black,
        fontSize: globals.font_16,
        fontFamily:globals.ProximaNovaRegular,
        lineHeight: 22,
        paddingHorizontal:15
    },
    sectionHeaderContainer: {
        backgroundColor: colors.white,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    sectionHeaderLabel: {
        backgroundColor:colors.lightWhiteOne,
        width:globals.screenWidth,
        //marginHorizontal:10,
        color: colors.red,
        fontSize: globals.font_16,
        fontFamily:globals.ProximaNovaSemiBold
    },
    categoryFlatViewMain:{
        flex:1, 
        padding:20,  
    },
    mainView: {
        flex: 1,
        backgroundColor:colors.paleGrey,
    },
})