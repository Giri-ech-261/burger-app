import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView:{
        flex:1, 
        backgroundColor:colors.lightWhite
    },
    headerView:{
        justifyContent:'space-between', 
        paddingLeft:15, 
        paddingRight:20
    },
    filterButton:{
      marginVertical:10,
      marginLeft:5,
      padding:10,
      width:150,
      backgroundColor:colors.red,
      borderRadius:24,
      //alignSelf:'center',
    },
    cancelMainView:{
        alignSelf:'center',
        justifyContent:'center'
    },
    cancelIcon:{
      width:15,
      height:15,
    },
    selectAddressText:{
        fontSize:globals.font_16, 
        fontFamily:globals.ProximaNovaBold, 
        marginTop:10, 
        color: colors.black,
        paddingBottom:10
    },
    bottomView:{
        position:'absolute', 
        bottom:0, 
        height:90,
        width: '100%', 
        backgroundColor:colors.lightWhite,
        justifyContent:'center',
        alignSelf:'center'
    },
    addNewAddressView:{
        borderWidth:1.5,
        borderRadius:22,
        borderColor:colors.black,
        marginLeft: 20,
        marginRight: 20,
    },
    addNewAddressText:{
        fontFamily: globals.ProximaNovaBold,
        fontSize: globals.font_14,
        color: colors.black,
        //marginLeft:10
        //padding: 10,
        //textAlign:'center'
    },
    detailsStoreText:{
      fontFamily: globals.ProximaNovaMedium,
      fontSize: globals.font_16,
      color: colors.red,
      //marginLeft:10
      //padding: 10,
      //textAlign:'center'
    },
    applyBtn:{
      width: 98,
      height: 45,
      backgroundColor:colors.black,
      justifyContent:'center',
    },
    resultText:{
      color: colors.black,
      fontSize: globals.font_14,
      fontFamily: globals.ProximaNovaRegular,
      marginHorizontal:5
    },
    RedText:{
      color: colors.red,
      fontSize: globals.font_14,
      fontFamily: globals.ProximaNovaSemiBold,
      marginHorizontal:5
    },
    selectedFilterText:{
      alignSelf:'center',
      color: colors.darkWarmGrey,
      fontSize: globals.font_12,
      fontFamily: globals.ProximaNovaMedium,
      marginHorizontal:5
    },
    ButtonText:{
      alignSelf:'center',
      color: colors.white,
      fontSize: globals.font_14,
      fontFamily: globals.ProximaNovaBold
    },
    sotreCityText:{
      width: globals.screenWidth * 0.8,
      height: 45,
      fontSize:globals.font_14,
      fontFamily:globals.ProximaNovaRegular,
    },
    entreCityText:{
      width: globals.screenWidth * 0.67,
      height: 45,
      borderWidth: 1,
      backgroundColor: "#ffffff",
      borderColor:colors.darkWarmGrey,
      fontSize:globals.font_14,
      fontFamily:globals.ProximaNovaRegular,
    },
    addressFlatlistView:{
        flex:1, 
        backgroundColor:colors.white, 
        marginTop:10
    },
    centeredView: {
        flex: 1,
        marginTop: 10,
      },
      modalView: {
        // margin: 20,
        // width:globals.screenWidth,
        // marginLeft:0,
        // marginBottom:0,
        // bottom:0,
        marginTop: 100,
        flex:1,
        height:globals.screenHeight * 0.90,
        // position:'absolute',
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        // padding: 35,
         shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
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
          paddingLeft:20,
          paddingRight:20,
          marginTop:20
      },
      subContent:{
        fontSize:globals.font_16,
        fontFamily: globals.ProximaNovaMedium,
        color: colors.black
      },
      subContentKM:{
        fontSize:globals.font_14,
        fontFamily: globals.ProximaNovaRegular,
        color: colors.black
      },
      subServicesText:{
        fontSize:globals.font_16,
        fontFamily: globals.ProximaNovaMedium,
        color: colors.black,
        lineHeight: 18,
      },
      firebaseContentDescText:{
        fontSize:globals.font_16,
        fontFamily: globals.ProximaNovaLight,
        color: colors.lightBlack,
        lineHeight: 22,
        marginVertical:10
      },
      subContentKMLH:{
        fontSize:globals.font_14,
        fontFamily: globals.ProximaNovaRegular,
        color: colors.black,
        lineHeight: 20,
      },
      subContentRed:{
        fontSize:globals.font_14,
        fontFamily: globals.ProximaNovaMedium,
        color: colors.red
      },
      servicesIcon:{
        width: 22,
        height: 25,
        //marginHorizontal:5,
        //marginRight : 10,
        //marginTop:2,
      },
      oval : {
        width: 40,
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:40/2,
        backgroundColor: "rgba(205,31,34,0.1)"
      },
      storeServiceTitle:{
        fontSize:globals.font_16,
        lineHeight: 24,
        fontFamily: globals.ProximaNovaBold,
        color: colors.black
      },
      detailsDirectionText:{
        fontSize:globals.font_14,
        fontFamily: globals.ProximaNovaMedium,
        color: colors.red,
        // borderBottomColor:colors.red,
        // borderBottomWidth:1,
        textDecorationStyle : "solid",
        textDecorationLine : 'underline'
      },
      modalSeprator:{
          height:1,
          backgroundColor:colors.horizontalSeprator,
          marginTop:20,
          marginLeft:20,
          marginRight:20
      },
      addressDetailView:{
        marginTop:20, 
        paddingLeft:20, 
        paddingRight:20
      },
      addressDetailTextView:{
        fontFamily: globals.ProximaNovaMedium,
        fontSize: globals.font_16,
        color: colors.black
      },
      textFiledViewFloating:{
        paddingLeft:20, 
        paddingRight:20, 
        marginTop:20, 
      },
      textFiledView:{
        borderRadius:30, 
        paddingLeft:10, 
        borderColor: colors.darkWarmGrey, 
        borderWidth:1, 
        marginTop:10,
        height:(Platform.OS === 'ios') ? 50 : 50
      },
      flatTextView:{
          fontSize: globals.font_12,
          fontFamily: globals.ProximaNovaRegular,
          color: colors.black,
          marginTop:5,
      },
      textFiledTextView:{
        height: 40, 
        paddingRight:10,
        paddingBottom:10,
        // marginTop:5, 
        fontFamily: globals.ProximaNovaMedium, 
        fontSize:globals.font_16 ,
        color:colors.black,
      },
      dropdownMainView: {
        marginTop: 20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderWidth: 1,
        paddingLeft: 10,
        borderColor: colors.darkWarmGrey,
        justifyContent: 'space-between',
        marginLeft:20,
        marginRight:20,
        height:50,
      },
      dropdownMainViewIOS: {
        marginTop: 20,
        marginLeft:20,
        marginRight:20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        borderWidth: 1,
        padding: 15,
        borderColor: colors.darkWarmGrey,
        justifyContent: 'space-between',
      },
      downArrowView: {
        width: 13,
        height: 13,
        marginTop: 2,
        marginRight: 10,
      },
      generalInfoText:{
        fontSize:globals.font_16,
        fontFamily: globals.ProximaNovaMedium,
        color: colors.black,
        marginTop:20
    },
    generalInfoView:{
        justifyContent:'space-between',  paddingLeft:20, paddingRight:20, marginTop:10,
    },
    lableTextView:{
      paddingLeft:20,
      fontFamily:globals.ProximaNovaMedium,
      fontSize: globals.font_16,
      marginTop:20,
      color: colors.black
    },
    modalRows:{
      marginTop:20,
      marginLeft:15,
      // marginRight:20,
    },
    modalSortText:{
      fontSize: globals.font_14,
      color: colors.black,
      marginTop:3,
      fontFamily: globals.ProximaNovaRegular
    },
    deafualtAddressView:{
      marginTop:20, 
      marginLeft:10, 
      marginRight:20, 
      alignItems:'center',
      // justifyContent: 'space-between'
    },
    deafualtAddressTextView:{
      fontFamily: globals.ProximaNovaRegular,
      fontSize: globals.font_14,
      color: colors.black
    },
    saveAddressView:{
      backgroundColor: colors.red,
      marginRight:30,
      marginLeft:30,
      borderWidth:1,
      borderColor:colors.red,
      borderRadius:20,
      marginTop:20,
      marginBottom:20,
     },
    saveAddressTextView:{
     padding:10,
     color:colors.white,
     fontSize: globals.font_16,
     textAlign:'center',
     
     fontFamily: globals.ProximaNovaBold
    },


    // -- 
    mapStyle: {
      //...StyleSheet.absoluteFillObject,
      height: '100%',
      width: '100%',
  },
  bottomButton: {
      position: 'absolute',
      bottom: 50,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 20,
      backgroundColor: colors.red,
      borderWidth: 1,
      padding: 10,
      width: globals.screenWidth - 40,
      borderColor: colors.red

  },
  MainContainer: {
      borderRadius:30,
      marginRight:20,
      marginLeft:20,
      flexDirection: 'row',
      alignItems:'center',
      backgroundColor: colors.white,
  },
  searchIcon: {
    padding: 10,
    width:'15%',
    height:20,
    
  },
  TextInputStyleClass: {
    height: 40,
    paddingLeft: 0,
    width:'75%',
    backgroundColor: colors.white,
    color: colors.black,
    fontFamily: globals.ProximaNovaRegular,
    fontSize: globals.font_16
  },
  bubble: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: 'white',
      borderWidth: 1,
      borderRadius: 14,
      borderColor: 'white',
      padding: 10,
      marginBottom: 5,
      shadowColor: "rgba(0, 0, 0, 0.2)",
      shadowOffset: {
          width: 0,
          height: 0
      },
      shadowRadius: 5,
      shadowOpacity: 1,
      elevation: 5
  },
  
  
  openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
  },
  textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
  },
  modalText: {
      marginBottom: 15,
      textAlign: "center"
  },
  container: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
  },
  map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
  },
  buttonTextView:{
    alignSelf:'center',
    fontFamily: globals.ProximaNovaBold,
    fontSize: globals.font_16,
    color: colors.white
  },
  bubbleTitleView:{
    fontSize:globals.font_14,
    fontFamily: globals.ProximaNovaRegular,
    color: colors.black,
  },


/// --- search Screen 
    searchScreenView: {
        borderRadius:30,
        marginRight:20,
        marginLeft:20,
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: colors.lightWhiteOne,
    },
    searchScreenIcon: {
      padding: 10,
      width:'15%',
      height:20,
    },
    searchScreenTextInputStyleClass: {
      height: 40,
      paddingLeft: 0,
      width:'70%',
      backgroundColor: colors.lightWhiteOne,
      color: colors.black,
      fontFamily: globals.ProximaNovaRegular,
      fontSize: globals.font_16
    },
    searchCancel:{
      fontFamily: globals.ProximaNovaMedium,
      fontSize: globals.font_16,
      color: colors.black,
    },
    searchScreenCrossIcon: {
      // padding: 10,
      width:10,
      height:10,
      tintColor: colors.black
    },
    removeContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
  },
  swipeWishlistView : {
    height: 250,
    backgroundColor : colors.black,
    alignItems:'center',
    // flex:1,
},
})