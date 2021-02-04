import { StyleSheet } from 'react-native';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';
import {Helper, hp, wp} from '../../theme';


export default StyleSheet.create({
    subHeader: {
        backgroundColor:colors.lightWhite,
        height:42,
        width:wp('100%'),
        flexDirection:'row',
        paddingVertical: 12,
    },

    subHeaderList:{
        backgroundColor:colors.productListBorderColor,
        height:42,
        width:wp('100%'),
        flexDirection:'row',
        paddingVertical: 12,
    },

    actionContainer: {
        display:'flex',
        flexDirection:'column',
        width: wp('50%'),
        justifyContent: 'center',
        paddingHorizontal: 27,
        borderRightWidth: 1,
        borderColor: colors.blackOpacity2
    },

    barcodeImage: {
        width: wp('6%'),
        height: hp('6%'),
        marginHorizontal:10
    },

    actionText: {
        fontSize: globals.font_14,
        fontFamily: globals.ProximaNovaSemiBold,
        fontStyle: "normal",
        color: colors.black
    },

    sortByText: {
        fontSize: globals.font_14,
        fontFamily: globals.ProximaNovaSemiBold,
        fontStyle: "normal",
        color: colors.black,
        marginTop: -15,
    },

    valueLabel: {
        fontSize: globals.font_12,
        fontFamily: globals.ProximaNovaLight,
        color:colors.blackOpacity6,
        marginTop: 15,
        marginLeft: -45
    },

    voiceImage: {
        width: wp('4%'),
        height: hp('4%'),
        marginHorizontal:10
    },

    recentSearchText: {
        fontSize: globals.font_16,
        fontFamily: globals.ProximaNovaBold,
        color: colors.black,
        fontStyle:'normal',
        paddingVertical: 10,
        paddingHorizontal:19
    },

    quickText: {
        color:colors.darkWarmGrey,
        fontSize: globals.font_14,
        fontFamily:globals.ProximaNovaSemiBold,
        lineHeight: 18
    },

    quickTextBorder: {
        borderColor: colors.darkWarmGrey,
        width:113,
        height: 32,
        borderWidth: 1,
        justifyContent: 'center'
    },

    divider: {
        borderBottomColor: colors.lightWarmGrey,
        borderBottomWidth: 1,
        marginHorizontal: 19,
        marginVertical: 10
    },

    searchBox: {
        padding: 0,
        paddingBottom: hp('0.4%'),
        paddingHorizontal: wp('8%'),
        marginLeft:-13,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: hp('6%') / 2,
        fontSize: globals.font_14,
        color: colors.black,
        height: hp('4.3%'),
        flexDirection: 'row',
        width: '95%',
        backgroundColor: colors.white,
    },

    listItem: {
        fontFamily:globals.ProximaNovaLight,
        fontSize: globals.font_14,
        color: colors.blackOpacity8
    },

    searchListHeader: {
        flexDirection: 'row',
        alignSelf:'center',
    },

    listHeaderText: {
        color: colors.white,
        fontSize: globals.font_20
    },

    emptyResultBlock:{
        height:hp('10%'),
        justifyContent: 'center',
        alignSelf:'center'
    },

    emptyResultText: {
        fontSize: globals.font_14,
        fontFamily: globals.ProximaNovaSemiBold,
        color: colors.black26
    },

    messageBlock: {
        height: 180,
        marginHorizontal: 20,
        borderRadius: 14,
        backgroundColor: colors.lightGrey246,
        position: 'relative'
    },

    messageBlockHeader: {
        fontFamily: globals.ProximaNovaBold,
        fontSize: globals.font_16,
        color: colors.black26,
        width: 262,
        marginTop: 25,
        alignSelf: 'center',
        textAlign: 'center'
    },

    messageBlockContent: {
        marginTop: 15,
        width: 198,
        fontFamily: globals.ProximaNovaLight,
        fontSize: globals.font_14,
        alignSelf: 'center',
        textAlign: 'center',
        color: colors.black26
    },

    dogImage: {
        width: wp('15%'),
        height: hp('15%'),
        zIndex: 2
    },

    catImage: {
        width: wp('15%'),
        height: hp('15%')
    },

    dogPlaceholder: {
        position: 'absolute',
        right:10,
        bottom:-30,
        zIndex: 2
    },

    catPlaceholder:{
        position: 'absolute',
        left:10,
        bottom:-25,
    },

    suggestedBlock:{
        flexDirection: 'row',
        alignSelf:'center',
        marginBottom: 20,
        marginTop: 50
    },

    suggestedText: {
        fontFamily: globals.ProximaNovaBold,
        fontSize: globals.font_16,
        color: colors.BLACK,
    },

    helpSection: {
        marginVertical: 20,
        width: 350,
        height: 50,
        borderRadius: 14,
        backgroundColor: colors.redBlock,
        alignSelf:'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },

    helpText: {
        fontFamily: globals.ProximaNovaSemiBold,
        fontSize: globals.font_14,
        color: colors.white,
    },

    contactUsBtn: {
        borderColor: colors.white,
        width:113,
        height: 35,
        borderWidth: 2,
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: 7
    },

    contactUsText: {
        color:colors.white,
        fontSize:globals.font_14,
        fontFamily:globals.ProximaNovaSemiBold,
        lineHeight: 18
    },

    resultFoundBlock: {
        flexDirection: 'row',
        padding: 15.,
        justifyContent: 'center',
        alignItems: 'center'
    },

    resultFoundText: {
        fontSize: globals.font_14,
        color: colors.BLACK,
        fontFamily: globals.ProximaNovaLight
    },

    productBlock: {
        width: wp('100%'),
        height: hp('73%'),
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    loader: {
        width: wp('100%'),
        justifyContent: 'center',
    },
    loadingText: {
        fontSize: globals.font_16,
        color: colors.blackOpacity6,
        fontFamily: globals.ProximaNovaLight,
        alignSelf:'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 20
    },
    row: {
        flex: 1,
        justifyContent: "space-between"
    },
    RecentSearchFlatViewMain: {
        paddingHorizontal: wp(5),
        flex: 1,
    },
    searchBoxes: {
        borderWidth: 1,
        borderRadius: 100,
        borderColor: colors.darkWarmGrey,
        alignItems: 'center',
        marginHorizontal: 7,
        marginVertical: 8,
        paddingHorizontal: 8,
        // width: 110,
    },
    SearchBoxesText: {
        fontSize: globals.font_14,
        padding: 8,
        fontFamily: globals.ProximaNovaBold,
        color: colors.darkWarmGrey,
    },

});
