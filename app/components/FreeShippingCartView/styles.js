import {Platform, StyleSheet} from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    ShippingView:{
        flex:1,
        height: 70,
        borderRadius: 14,
        margin:10,
        backgroundColor: "#ffffff",
        flexDirection:'row',
        justifyContent:'center',
        width: globals.screenWidth * 0.9,
        alignItems:'center',
        alignSelf:'center'
    },
    progressBarView:{
        width: globals.screenWidth * 0.5,
        height: 15,
        borderRadius: 7.5,
        marginTop:7,
        marginRight:10,
        backgroundColor: "rgba(139, 139, 139, 0.2)"
    },
    icon:{
        width: 66,
        marginLeft:5,
        height: 36,
    },
    progressBarHiighlightView:{
        width: 170,
        height: 15,
        borderRadius: 7.5,
        backgroundColor: "#cd1f22"
    }
})
