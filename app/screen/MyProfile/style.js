import { StyleSheet, Platform } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.white
    },
    headerTitle: {
        fontFamily: globals.ProximaNovaMedium,
        color: colors.white,
        fontSize: globals.font_20,
        textAlign: 'center'
      },
      personalInfoText:{
          fontFamily: globals.ProximaNovaMedium,
          fontSize: globals.font_16,
          color: colors.black,
      },
      changePassText:{
        fontFamily: globals.ProximaNovaRegular,
        fontSize: globals.font_16,
        color: colors.red,
        marginTop:20,
        marginLeft:10,
        textDecorationLine:'underline'
    },
    seprator:{
        height:1,
        backgroundColor: colors.grayOpacity05,
        marginTop:20
    },
    primaryNoText:{
        marginTop:20,
        fontFamily: globals.ProximaNovaMedium,
        fontSize: globals.font_16,
        color: colors.black,
    },
    mainViewOne:{
        height:(Platform.OS === 'ios') ? null : 44,
        borderColor:colors.darkWarmGrey, 
        borderWidth:1,
        paddingTop:(Platform.OS === 'ios') ? 12 : 3,
        paddingRight:10,
        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
    },
    downArrowView: {
        width: 13,
        height: 13,
        // marginTop: 2,
      },
      mainViewThree:{
        
        borderColor:colors.darkWarmGrey, 
        borderWidth:1,
        marginLeft:-1,
        borderLeftColor:'transparent',
        borderTopRightRadius:30,
        borderBottomRightRadius:30
    },
    saveProfileRedView: {
        borderWidth: 1.5,
        borderRadius: 30,
        marginTop:20,
        borderColor: colors.red,
        backgroundColor: colors.red
      },
      saveProfileGrayView: {
        borderWidth: 1.5,
        borderRadius: 30,
        marginTop:20,
        borderColor: colors.white,
        backgroundColor: colors.grayOpacity04
      },
      saveText: {
        fontFamily: globals.ProximaNovaBold,
        fontSize: globals.font_14,
        color: colors.white,
        padding: 12,
        textAlign: 'center'
      },
      signUpPopup:{
        paddingLeft:20,
        paddingRight:20,
        marginTop:20,
        justifyContent:'space-between'
    },
    view: {
        justifyContent: 'flex-end',
        margin: 0,
    },
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
      titleTextView:{
        fontSize:globals.font_16,
        fontFamily: globals.ProximaNovaBold,
        color: colors.black
    },
    cancelIcon:{
        width:15,
        height:15,
    },
    textFiledViewFloatingPass: {
        flex: 1,
        marginTop: 20,
        marginBottom: 10
    },
    eyeView: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        right: 20,
        bottom: 22
    },
})