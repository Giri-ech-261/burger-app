import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';
import {Helper, hp, wp} from '../../theme';

export default StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor:colors.paleGrey,
        // marginTop:(Platform.OS === 'android') ? 60 : 0,
    },
    mainWishlistView:{
        flex: 1,
        backgroundColor:colors.paleGrey,
        height:globals.screenHeight,
        paddingBottom:80
    },
    swipeView:{
        backgroundColor:'white',
        flex: 1
    },
    removeContainer: {
        justifyContent:'center',
        alignItems:'center',
        width:globals.screenWidth * 0.2,
        backgroundColor : colors.black,
    },
    removeContainerView : {
        justifyContent:'center',
        alignItems:'center',
    },
    saveContainer: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor : colors.red,
        width:globals.screenWidth * 0.2,
    },
    saveContainerView : {
        // height: 260,
        // flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

    wishlistView:{
        width:globals.screenWidth ,
        padding:20
    },
    emptyWishlistView:{
        backgroundColor:colors.white,
        height : globals.screenHeight * 0.5,
        width:globals.screenWidth * 0.9,
        margin : 17,
        borderRadius: 14,
        marginTop:50,
        padding:20
    },
    dotView : {
        width: 6,
        height: 6,
        borderRadius:6/2,
        backgroundColor: colors.black,
        //marginRight:7,
        marginTop:7,
    },
    title:{
        fontSize:globals.font_16,
        color:colors.black,
        fontFamily:globals.ProximaNovaSemiBold,
    },
    view: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    rectangleCopy5 : {
        width: 78,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: "#d8d8d8",
        justifyContent:'center',
        alignSelf:'center'
    },

    modalTitle:{
        fontFamily: globals.ProximaNovaBold,
        fontSize: globals.font_16,
        color: "#1a1a1a",
        paddingHorizontal:15
    },
    modalSortText:{
        fontFamily: globals.ProximaNovaMedium,
        fontSize: globals.font_14,
        letterSpacing: 0,
        color: colors.black
    },
    modalContent:{
        marginVertical : 20,
        justifyContent:'space-between',
    },
    modalRows:{
        //flex:1,
        alignItems:'center',
        padding:10,
    },
    // modalRowsShip:{
    //     flex:1,
    //     borderBottomWidth:0.2,
    //     alignItems:'center',
    //     padding:5,
    // },
    autoShipBottom : {
        borderTopWidth:0.5,
        width:"100%",
        borderTopColor:colors.warmGrey
    },
    shippingMtdBottom : {
        borderTopWidth:0.5,
        borderTopColor:colors.lightBlue
    },
    filterIconSize:{
        width: 20,
        height: 15,
        marginHorizontal : 5,
        alignSelf :'center'
    },
    bottomDivider : {
        width: globals.screenWidth *0.9,
        height: 1,
        opacity: 0.2,
        borderStyle: "solid",
        marginBottom:30,
        borderWidth: 1,
        borderColor: colors.darkWarmGrey
    },
    afterAppliedText:{
        opacity: 0.6,
        fontFamily: globals.ProximaNovaLight,
        fontSize: globals.font_14,
        letterSpacing: 0,
        color: colors.black
    },
    modalView : {
        width: globals.screenWidth,
        minHeight: '40%',
        backgroundColor:'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius:30,
        padding:20
    },
    titleGreySmall:{
        fontSize:globals.font_13,
        color:colors.black,
        opacity:0.4,
        fontFamily:globals.ProximaNovaMedium,
    },
    wishlistEditText:{
        fontSize: globals.font_15,
        fontFamily: globals.ProximaNovaSemiBold,
        color: colors.red,
        borderBottomColor:colors.red,
        textDecorationLine: 'underline',
        // borderBottomWidth : 1,
    },
    cartEditText:{
        fontSize: globals.font_12,
        fontFamily: globals.ProximaNovaSemiBold,
        color: colors.red,
        borderBottomColor:colors.red,
        textDecorationLine: 'underline',
        // borderBottomWidth : 1,
    },
    titleGreySmallText:{
        fontSize: globals.font_12,
        fontFamily: globals.ProximaNovaLight,
        color: Platform.OS =="android" ? colors.black : colors.lightBlack,
        marginTop:2,
        alignSelf:'center'
    },
    rockyText:{
        fontSize: globals.font_12,
        fontFamily: globals.ProximaNovaBold,
        color: colors.red,
        marginTop:10,
        marginBottom:10
    },
    modalApplyBtn : {
        borderWidth:1,
        borderRadius: 30,
        borderColor: colors.red,
        // borderRadius: 24,
        // borderStyle: "solid",
        // borderWidth: 1,
        padding:10
        // justifyContent:'center',
        // alignItems: 'center',
        // alignSelf:'center',
        // borderColor: colors.red
    },
    modalApplyBtnText:{
        fontSize: globals.font_12,
        fontFamily: globals.ProximaNovaSemiBold,
        color: colors.red,
        textAlign: 'center'
    },
    red:{
        fontSize: globals.font_15,
        fontFamily: globals.ProximaNovaBold,
        color: colors.red,

    },
    modalRowsNEw:{
        //alignItems:'center',
        padding:10,
        borderWidth:1,
        borderColor:colors.darkWarmGrey,
        borderRadius:19 ,
        marginTop:7,
        borderStyle: 'dashed',
    },
    unCheckBox : {
        width: 23,
        height: 23,
        borderRadius: 4,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: colors.warmGrey
    },
    expandAutoShipView:{
        width: "100%",
        height: 100,
        borderRadius: 14,
        backgroundColor: "#ffffff",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#d9e6f2",
        marginTop:10,
        padding:10
    },
    divider:{
        borderBottomWidth:0.5,
        alignItems:'center',
        borderBottomColor:colors.horizontalSeprator
    },
    mainTitle:{
        fontSize:globals.font_16,
        color:colors.black,
        fontFamily:globals.ProximaNovaBold,
    },
    walletTitle:{
        fontSize:globals.font_14,
        color:colors.black,
        fontFamily:globals.ProximaNovaMedium,
    },
    walletTitlePrice:{
        fontSize:globals.font_16,
        color:colors.black,
        fontFamily:globals.ProximaNovaSemiBold,
    },
    promoCodeAppliedTitle:{
        fontSize:globals.font_14,
        color:colors.blue,
        fontFamily:globals.ProximaNovaRegular,
    },
    orderTotalmainTitle:{
        fontSize:globals.font_18,
        color:colors.black,
        fontFamily:globals.ProximaNovaBold,
    },
    orderTotalmainValue:{
        fontSize:globals.font_18,
        color:colors.red,
        fontFamily:globals.ProximaNovaBold,
    },
   offerAppliedTitle:{
        fontSize:globals.font_20,
        color:colors.red,
        fontFamily:globals.ProximaNovaBold,
    },
    totalPrice:{
        fontSize:globals.font_16,
        lineHeight: 32,
        color:colors.black40,
        fontFamily:globals.ProximaNovaMedium,
    },
    totalPriceText:{
        fontSize:globals.font_16,
        color:colors.black40,
        lineHeight: 32,
        fontFamily:globals.ProximaNovaRegular,
    },
    blueTotalPrice:{
        fontSize:globals.font_16,
        lineHeight: 32,
        color:colors.blue,
        fontFamily:globals.ProximaNovaMedium,
    },
    blue :{
        color : colors.blue,
        fontSize:globals.font_15,
        fontFamily:globals.ProximaNovaBold,
    },
    autoShipRadiotitle:{
        fontSize:globals.font_13,
        color:colors.black,
        fontFamily:globals.ProximaNovaMedium,
    },
    autoShipYourOrder:{
        fontSize:globals.font_13,
        color:colors.blackOpacity6,
        fontFamily:globals.ProximaNovaMedium,
    },
    shippingMethodsRadiotitle:{
        fontSize:globals.font_14,
        color: colors.black,
        fontFamily:globals.ProximaNovaMedium,
    },
    shippingMethodsRadioDes:{
        fontSize:globals.font_12,
        color: colors.black,
        fontFamily:globals.ProximaNovaLight,
    },
    autoShipViewTitle:{
        fontSize:globals.font_18,
        color:colors.black,
        fontFamily:globals.ProximaNovaSemiBold,
    },
    addressTitle:{
        fontSize:globals.font_14,
        color:colors.black,
        fontFamily:globals.ProximaNovaRegular,
    },
    pointsView:{
        marginTop:20,
        //paddingLeft:7
    },
    pointText:{
        fontSize:globals.font_14,
        color:colors.black,
        fontFamily:globals.ProximaNovaRegular,
        //paddingLeft:7
    },
    wishlistSignInView:{
        width:globals.screenWidth / 1.3  ,
        backgroundColor:colors.red,
        alignSelf:'center',
        borderRadius: 25,
        padding:15,
        marginTop:50
    },
    wishlistAccountView:{
        width:globals.screenWidth / 1.3  ,
        backgroundColor:colors.white,
        alignSelf:'center',
        borderRadius: 25,
        borderWidth:1,
        borderColor:colors.red,
        padding:15,
        marginTop:15
    },
    wishlistSignInText:{
        alignSelf:'center',
        color: colors.white,
        fontSize:globals.font_16,
        fontFamily: globals.ProximaNovaBold
    },
    wishlistAccountText:{
        alignSelf:'center',
        color: colors.red,
        fontSize:globals.font_16,
        fontFamily: globals.ProximaNovaBold
    },
    downArrowView: {
        width: 13,
        height: 13,
        marginTop: 2,
        marginRight: 10,
      },
      downArrowSize:{
        width:15,
        height:15,
        alignSelf: 'center',
        marginTop:-15,
        marginRight: 10,

        //paddingLeft:18
      },
      productViewPriceWas:{
        fontSize: globals.font_13,
        marginTop:20,
        fontFamily:globals.ProximaNovaRegular,
        color: colors.lightBlack,
        opacity:0.5,
        textDecorationLine: 'line-through'
      },
      productViewPrice:{
        fontSize: globals.font_15,
        fontFamily:globals.ProximaNovaBold,
        color: colors.black
      },
      dropdownMainView: {
        // marginTop: 20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderWidth: 1,
        paddingLeft: 10,
        borderColor: colors.lightWarmGrey,
        justifyContent: 'space-between',
      },
      countDrop: {
        width: wp(20),
        // height: wp(25)
      },
      StorePickDD: {
        width: wp(50),
        // height: wp(25)
      },
      StorePickDDContainer: {
        position: 'absolute',
        //justifyContent: 'center',
        //paddingHorizontal: wp(5),
        width:globals.screenWidth * 0.9
      },
      cartContainer: {
        position: 'absolute',
        bottom: 0,
        //justifyContent: 'center',
        backgroundColor: colors.white,
        //paddingHorizontal: wp(5),
        //width:globals.screenWidth * 0.9
      },
      dropdownMainViewIOS: {
        // marginTop: 10,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderWidth: 1,
        padding: 10,
        borderColor: colors.lightWarmGrey,
        justifyContent: 'space-between',
      },
      dropdownQTYViewIOS: {
        marginTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderWidth: 1,
        padding: 10,
        borderColor: colors.lightWarmGrey,
        justifyContent: 'space-between',
      },

      // --- Modal height
      autoShipHeight:{
        height: globals.screenHeight * 0.7,
        backgroundColor: colors.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
      },
      graySeprator:{
        borderRadius:2,
        marginTop:10,
        borderWidth:1,
        width:100,
        borderColor:colors.graySeprator,
        backgroundColor:colors.graySeprator,
        height:5,
        alignSelf:'center'
      },
    enterAddressPopup:{
        justifyContent:'space-between',
        // paddingLeft:20,
        // paddingRight:20,
        marginTop:10
    },
    enterAddressTextView:{
        fontSize:globals.font_16,
        fontFamily: globals.ProximaNovaMedium,
        color: colors.black
    },
    cancelIcon:{
        width:15,
        height:15,
        alignSelf:'center',
        tintColor:colors.blackOpacity6
    },
    autoshipImage:{
        width:90, height: null, marginHorizontal:5
    },
    saveOrderText:{
        fontSize:globals.font_16,
        fontFamily: globals.ProximaNovaMedium,
        color: colors.black,
        // paddingHorizontal:20,
        marginTop:5,
    },
    shipmentMessageText:{
        fontFamily: globals.ProximaNovaRegular,
        fontSize: globals.font_14,
        color: colors.black,
        marginTop:20,
        lineHeight:22,
    },
    modalSeprator:{
        height:1,
        backgroundColor: colors.warmGray02,
        marginTop:20
    },
    chooseDayWeeK:{
        fontSize: globals.font_16,
        fontFamily: globals.ProximaNovaBold,
        color: colors.black,
        marginTop:20,
    },
    cancleTextView:{
         borderWidth:1,
         width:'50%',
         borderRadius:20,
         borderColor: colors.black,
         backgroundColor:colors.white
    },
    cancleTextLable:{
        fontSize: globals.font_16,
        fontFamily: globals.ProximaNovaBold,
        color: colors.black,
        padding:10,
        textAlign:'center',
    },
    saveTextLable:{
        fontSize: globals.font_16,
        fontFamily: globals.ProximaNovaBold,
        color: colors.white,
        padding:10,
        textAlign:'center',
    },
    saveTextView:{
        borderWidth:1,
        width:'50%',
        marginLeft:20,
        borderRadius:20,
        borderColor: colors.red,
        backgroundColor: colors.red
    },
    dropdownMainViewIOSFrequncy: {
        borderRadius:50,
        borderWidth: 1,
        padding: 15,
        borderColor: colors.darkWarmGrey,
        justifyContent: 'space-between',
      },
})
