import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        padding:15,
        width:globals.screenWidth / 1.3 ,
        height: globals.screenWidth / 2 ,
        backgroundColor:colors.white,
        borderRadius:16,
        borderWidth: 1,
        justifyContent:'space-between',
        borderColor: colors.recentOrderBorder
    },
    recentOrderTopView:{
        justifyContent:'space-between',

    },
    autoshipPetName:{
        fontSize: globals.font_13,
        fontFamily: globals.ProximaNovaBold,
        color: colors.red,
    },
    autoshipSchedule:{
        fontSize: globals.font_13,
        fontFamily: globals.ProximaNovaRegular,
        color: colors.black,
        // marginTop:2
    },
    autoshipEditIcon:{
        width:15, height:15, marginLeft:5
    },
    productCountText:{
        fontFamily: globals.ProximaNovaRegular,
        fontSize:globals.font_13,
        marginTop:10,
        color: colors.recentOrderProductCount,
    },
    orderedDaysAgo:{
        fontFamily: globals.ProximaNovaRegular,
        fontSize:globals.font_13,
        color: colors.blackOpacity6,
    },
    recentOrderBottom:{
        // justifyContent:'flex-end',
        marginTop:20
    },
    autoShipNowMainView:{
        width: 120,
        height: 35,
        backgroundColor: colors.red,
        borderColor:colors.red,
        borderWidth:1,
        borderRadius:18,
        justifyContent:'center',
        alignItems:'center'
    },
    orderActualPrice:{
        fontFamily: globals.ProximaNovaRegular,
        fontSize: globals.font_12,
        color: colors.blackOpacity6,
        textDecorationLine: 'line-through'
    },
    orderPrice:{
        fontFamily: globals.ProximaNovaBold,
        fontSize: globals.font_16,
        color: colors.black,
    },
    orderReOrderText:{
        fontFamily: globals.ProximaNovaBold,
        fontSize: globals.font_14,
        color: colors.white,
        marginLeft: 5
    },
    orderViewMore:{
        //position:'absolute',
        fontSize:globals.font_13,
        fontFamily: globals.ProximaNovaSemiBold,
        color: colors.blackOpacity5,
       // right: 0
    },
    imgeBlurView:{
        width:50, 
        marginTop:20, 
        height: 50, 
        alignSelf:'center', 
        opacity: 0.2
    },
    viewMoreText:{
        position:'absolute', 
        top:40, 
        right: 0
    },
    calenderImage:{
        width:15, height:15, marginRight:5
    },
    productView:{
        flex:1, 
        justifyContent:'center', 
        alignSelf:'center'
    },
    productItemView:{
        flex:1, 
        width:50, 
        marginTop:20, 
        alignSelf:'center', 
        // flexDirection:'row-reverse',  
        height: 50
    },
    productImageView:{
        width:50, 
        height: 50, 
        overflow: 'hidden'
    },
     
})