import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
        flex: 1,
        // marginTop:(Platform.OS === 'android') ? 20 : 0,
    },
    scrollView:{
        flex:1,
        backgroundColor: colors.lightWhite,
        paddingTop:60
    },
    topSellingTitleVIew:{
        fontFamily: globals.ProximaNovaSemiBold,
        fontSize: globals.font_14,
        justifyContent:'center',
        alignSelf:'center',
        paddingTop:(Platform.OS === 'android') ? 5 : 15,
        color:colors.activeDots
    },
    topSellingTitleVIewDiscount:{
        fontFamily: globals.ProximaNovaSemiBold,
        fontSize: globals.font_14,
        justifyContent:'center',
        alignSelf:'center',
        paddingTop:(Platform.OS === 'android') ? 5 : 15,
        color: colors.red
    },
    silderMainView:{
        flex:1,
        marginTop:10,
        padding: 10,
        backgroundColor: colors.white
    },
    productMainView:{
        backgroundColor:colors.white,
        paddingTop:10,
        paddingBottom:15 
    },
    headerBlock:{
       paddingLeft:15,
       paddingRight:15,
       marginTop:10,
       marginBottom:10,
    //    flexDirection: 'row',
       justifyContent:'space-between'
    },
    categoryBlockHeader:{
        paddingLeft:15,
        paddingRight:15,
        paddingTop:10,
        // flexDirection: 'row',
        marginTop:10, 
        marginBottom:10,
        justifyContent:'space-between'
    },
    categoryFlatViewMain:{
        flex:1, 
        padding:20,  
    },
    orderAutoshipFlatViewMain:{
        flex:1, paddingBottom:10,  
    },
    TopBrandsMainView:{
        backgroundColor:colors.white,
        paddingTop:10,
        paddingBottom:15 
    },
    advertizmentMainVIew:{
        flex:1, 
        width:globals.screenWidth - 30, 
        height: 150, 
        alignSelf: 'center'
    },
    serviceMainView:{
        backgroundColor:colors.white, 
        paddingTop:10, 
        paddingBottom:15 
    },
    serviceHeaderBlock:{
        paddingLeft:15,
        paddingRight:15,
        marginTop:10,
        // flexDirection: 'row',
        justifyContent:'space-between'
     },
    myPetMainView:{
        backgroundColor: colors.white, paddingBottom: 25, marginTop:10
    },
    autoshipImage:{
        width:90, height: null
    },
})