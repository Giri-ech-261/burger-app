import { StyleSheet, Platform } from 'react-native';
import { color } from 'react-native-reanimated';
import * as colors from '../../assets/styles/color';
import * as globals from '../../utills/globals';

export default StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor:colors.paleGrey,
        // marginTop:(Platform.OS === 'android') ? 60 : 0,
    },
    mainViewListing: {
        flex: 1,
        backgroundColor:colors.paleGrey,
    },
    subHeaderView:{
        //justifyContent : 'space-evenly',
        backgroundColor: colors.white,
        alignItems : "center",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: colors.productListBorderColor,
        height: 55
    },
    subHeaderCotent:{
        width:'50%', 
        justifyContent : 'center',
        alignItems:'center',
    },
    silderMainView:{
        height: 170,
        borderWidth: 1,
        borderColor: colors.paleGrey,
    },
    silderCategorieslistingView:{
        // borderWidth: 1,
        // borderColor: colors.productListBorderColor,
    },
    mainViewEn:{
        paddingLeft:15
    },
    mainViewAr:{
        //paddingRight:15
        paddingLeft:15
    },
    divider : {
        width: 0.5,
        height: 40,
        opacity: 0.2,
        borderStyle: "solid",
        borderWidth: 0.5,
        borderColor: colors.black
    },
    filterIconSize:{
        width: 20,
        height: 15, 
        marginHorizontal : 5,
        alignSelf :'center'
    },
    prome1Size:{
        width: globals.screenWidth,
        height: globals.screenHeight *0.23,
    },
    promo2Size:{
        width: globals.screenWidth *0.95,
        height: globals.screenHeight *0.23,
    },
    subHeaderText:{
        fontFamily: globals.ProximaNovaSemiBold,
        fontSize: globals.font_16,
        letterSpacing: 0,
        color: "#1a1a1a"
    },
    selectedSortByText:{
        fontFamily: globals.ProximaNovaRegular,
        fontSize: globals.font_11,
        color: "#454545"
    },
    categoryTittleHead : {
        padding : 15,
        textAlign : 'center',
        fontFamily: globals.ProximaNovaSemiBold,
        fontSize: globals.font_14,
        color: colors.black
    },
    catCard :{
        width: 100,
        height: 100,
        borderRadius: 16,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.lightBlueListingBorder,
        justifyContent:'center'
    },
     //css for modals
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
    modalView : {
        width: globals.screenWidth,
        minHeight: '60%',  
        backgroundColor:'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius:30,
        padding:20
    },
    modalTitle:{
        fontFamily: globals.ProximaNovaBold,
        fontSize: globals.font_16,
        color: "#1a1a1a",
        paddingHorizontal:15
    },
    modalSortText:{
        fontFamily: globals.ProximaNovaSemiBold,
        fontSize: globals.font_14,
        letterSpacing: 0,
        color: colors.black
    },
    modalContent:{
        marginVertical : 20,
        justifyContent:'space-between'
    },
    modalRows:{
        flex:1,
        borderTopWidth:0.5, 
        alignItems:'center', 
        borderTopColor:colors.horizontalSeprator
    }

})