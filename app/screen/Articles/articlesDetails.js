import React, { Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, View,Image, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';
import { LocalizationContext } from '../../localizations/LocalizationContext';
import { transistionClassArray } from '../../utills/TranslationClasses';
const contextTypeLocalization = LocalizationContext;
import globalStyles from "../../assets/styles/globalStyle";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../../components/AppHeader';
import * as colors from "../../assets/styles/color";
import * as images from "../../assets/images/map";
import * as globals from "../../utills/globals";
import { goBack, navigate } from "../../navigation/RootNavigation";
import FastImage from 'react-native-fast-image';
import Badge from '../../components/BadgeView/Badge';
import moment from 'moment';
import HTMLView from 'react-native-htmlview';
import {BASE_MEDIA_URL,BASE_URL,BASE_TEST_URL} from "../../services/Config";


class ArticlesDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appLanguage: contextTypeLocalization._currentValue.appLanguage,
            textTranslation: contextTypeLocalization._currentValue.appLanguage === 'en' ?
                contextTypeLocalization._currentValue.translations._props.en :
                contextTypeLocalization._currentValue.translations._props.ar,
            viewHeight: 0,
            details : this.props.route && this.props.route.params && this.props.route.params.details
        }
    }
    
    componentDidMount() {
        //this.callMyPetListAPI();
     
    }
   
    isArticleClick(id, data) {
        console.log("Article name -->", data.id);
    }

    renderImage = (imageUrl) => {
        return  <Image 
          style={styles.articleImageView} 
          source={{uri : BASE_TEST_URL + imageUrl[0]}}
          resizeMode={'cover'}
        />
    }

    renderLongDescription = (details) => {
        const {appLanguage} = this.state;

        const Htmlstyles = {
            p: {
                marginTop: 2,
                marginBottom:10,
                textAlign:appLanguage == 'en' ? 'left' : 'right',
                flexDirection:appLanguage == 'en' ? 'row' : 'row-reverse',
                justifyContent:appLanguage == 'en' ? 'flex-start' : 'flex-end',
                padding:2,
                fontFamily:globals.ProximaNovaLight,
                color:colors.lightBlack,
                fontSize:globals.font_14,
                lineHeight: 22,
                textAlign:appLanguage == 'en' ? 'left' : 'right',
            },
        }
        return (
            <HTMLView
                value={details.longDescription}
                stylesheet={Htmlstyles}
            />
        )
    }
  

    renderParatitle1 = (content,HtmlstylesTitles) => {
            return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesTitles}
            />
        )
    }
    renderParatitle2 = (content,HtmlstylesTitles) => {
            return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesTitles}
            />
        )
    }
    renderParatitle3 = (content,HtmlstylesTitles) => {
            return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesTitles}
            />
        )
    }
    renderParatitle4 = (content,HtmlstylesTitles) => {
            return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesTitles}
            />
        )
    }
    renderParatitle5 = (content,HtmlstylesTitles) => {
            return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesTitles}
            />
        )
    }
    renderParatitle6 = (content,HtmlstylesTitles) => {
            return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesTitles}
            />
        )
    }
    renderParatitle7 = (content,HtmlstylesTitles) => {
            return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesTitles}
            />
        )
    }
    renderParatitle8 = (content,HtmlstylesTitles) => {
            return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesTitles}
            />
        )
    }
    renderParatitle9 = (content,HtmlstylesTitles) => {
            return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesTitles}
            />
        )
    }
    renderParatitle10 = (content,HtmlstylesTitles) => {
            return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesTitles}
            />
        )
    }
    renderParatitle11 = (content,HtmlstylesTitles) => {
            return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesTitles}
            />
        )
    }
    renderParatitle12 = (content,HtmlstylesTitles) => {
            return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesTitles}
            />
        )
    }

    renderPara1 = (details ,HtmlstylesPragraph) => {
        const content = details.replace(/(\r\n|\n|\r|<br>|<h3>|&nbsp;)/gm, '');
        return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesPragraph}
            />
        )
    }   
    renderPara2 = (details,HtmlstylesPragraph) => {
        const content = details.replace(/(\r\n|\n|\r|<br>|<h3>|&nbsp;)/gm, '');
        return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesPragraph}
            />
        )
    }

    renderPara3 = (details,HtmlstylesPragraph) => {
        const content = details.replace(/(\r\n|\n|\r|<br>|<h3>|&nbsp;)/gm, '');
        return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesPragraph}
            />
        )
    }   
    renderPara4 = (details,HtmlstylesPragraph) => {
        const content = details.replace(/(\r\n|\n|\r|<br>|<h3>|&nbsp;)/gm, '');
        return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesPragraph}
            />
        )
    }

    renderPara5 = (details,HtmlstylesPragraph) => {
        const content = details.replace(/(\r\n|\n|\r|<br>|<h3>|&nbsp;)/gm, '');
        return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesPragraph}
            />
        )
    }   
    renderPara6 = (details,HtmlstylesPragraph) => {
        const content = details.replace(/(\r\n|\n|\r|<br>|<h3>|&nbsp;)/gm, '');
        return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesPragraph}
            />
        )
    }

    renderPara7 = (details,HtmlstylesPragraph) => {
        const content = details.replace(/(\r\n|\n|\r|<br>|<h3>|&nbsp;)/gm, '');
        return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesPragraph}
            />
        )
    }   
    renderPara8 = (details,HtmlstylesPragraph) => {
        const content = details.replace(/(\r\n|\n|\r|<br>|<h3>|&nbsp;)/gm, '');
        return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesPragraph}
            />
        )
    }

    renderPara9 = (details,HtmlstylesPragraph) => {
        const content = details.replace(/(\r\n|\n|\r|<br>|<h3>|&nbsp;)/gm, '');
        return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesPragraph}
            />
        )
    }   
    renderPara10 = (details,HtmlstylesPragraph) => {
        const content = details.replace(/(\r\n|\n|\r|<br>|<h3>|&nbsp;)/gm, '');
        return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesPragraph}
            />
        )
    }

    renderPara11 = (details,HtmlstylesPragraph) => {
        const content = details.replace(/(\r\n|\n|\r|<br>|<h3>|&nbsp;)/gm, '');
        return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesPragraph}
            />
        )
    }   
    renderPara12 = (details,HtmlstylesPragraph) => {
        const content = details.replace(/(\r\n|\n|\r|<br>|<h3>|&nbsp;)/gm, '');
        return (
            <HTMLView
                value={content}
                stylesheet={HtmlstylesPragraph}
            />
        )
    }
      
    render() {
        const {appLanguage, textTranslation,details } = this.state;
        const { navigation} = this.props;
        const HtmlstylesTitles = {
            p: {
                marginTop: 2,
                marginBottom:2,
                textAlign:appLanguage == 'en' ? 'left' : 'right',
                flexDirection:appLanguage == 'en' ? 'row' : 'row-reverse',
                justifyContent:appLanguage == 'en' ? 'flex-start' : 'flex-end',
                padding:2,
                fontFamily:globals.ProximaNovaLight,
                color:colors.lightBlack,
                fontSize:globals.font_14,
                lineHeight: 22,
                textAlign:appLanguage == 'en' ? 'left' : 'right',
            },
            h3: {
                textAlign:appLanguage == 'en' ? 'left' : 'right',
                flexDirection:appLanguage == 'en' ? 'row' : 'row-reverse',
                justifyContent:appLanguage == 'en' ? 'flex-start' : 'flex-end',
                fontFamily:globals.ProximaNovaSemiBold,
                color:colors.lightBlack,
                fontSize:globals.font_18,
                lineHeight: 22,
                textAlign:appLanguage == 'en' ? 'left' : 'right',
            },
            h2: {
                textAlign:appLanguage == 'en' ? 'left' : 'right',
                flexDirection:appLanguage == 'en' ? 'row' : 'row-reverse',
                justifyContent:appLanguage == 'en' ? 'flex-start' : 'flex-end',
                fontFamily:globals.ProximaNovaSemiBold,
                color:colors.lightBlack,
                fontSize:globals.font_18,
                lineHeight: 22,
                textAlign:appLanguage == 'en' ? 'left' : 'right',
            },
            h1: {
                textAlign:appLanguage == 'en' ? 'left' : 'right',
                flexDirection:appLanguage == 'en' ? 'row' : 'row-reverse',
                justifyContent:appLanguage == 'en' ? 'flex-start' : 'flex-end',
                fontFamily:globals.ProximaNovaSemiBold,
                color:colors.lightBlack,
                fontSize:globals.font_18,
                lineHeight: 22,
                textAlign:appLanguage == 'en' ? 'left' : 'right',
            },
        }
    
        const HtmlstylesPragraph = {
            h4: {
                textAlign:appLanguage == 'en' ? 'left' : 'right',
                flexDirection:appLanguage == 'en' ? 'row' : 'row-reverse',
                justifyContent:appLanguage == 'en' ? 'flex-start' : 'flex-end',
                fontFamily:globals.ProximaNovaSemiBold,
                color:colors.black,
                fontSize:globals.font_16,
                lineHeight: 22,
                textAlign:appLanguage == 'en' ? 'left' : 'right',
            },
            h5: {
                textAlign:appLanguage == 'en' ? 'left' : 'right',
                flexDirection:appLanguage == 'en' ? 'row' : 'row-reverse',
                justifyContent:appLanguage == 'en' ? 'flex-start' : 'flex-end',
                fontFamily:globals.ProximaNovaSemiBold,
                color:colors.black,
                fontSize:globals.font_16,
                lineHeight: 22,
                marginTop: -30,
                textAlign:appLanguage == 'en' ? 'left' : 'right',
            },
            p: {
                marginTop: 2,
                marginBottom:15,
                textAlign:appLanguage == 'en' ? 'left' : 'right',
                flexDirection:appLanguage == 'en' ? 'row' : 'row-reverse',
                justifyContent:appLanguage == 'en' ? 'flex-start' : 'flex-end',
                padding:2,
                fontFamily:globals.ProximaNovaLight,
                color:colors.lightBlack,
                fontSize:globals.font_14,
                lineHeight: 22,
                textAlign:appLanguage == 'en' ? 'left' : 'right',
            },
            ul: {
                marginTop: -20,
                marginBottom: 15,
                textAlign:appLanguage == 'en' ? 'left' : 'right',
                flexDirection:appLanguage == 'en' ? 'row' : 'row-reverse',
                justifyContent:appLanguage == 'en' ? 'flex-start' : 'flex-end',
                //height:0,
              },
              ol: {
                marginTop: 2,
                marginBottom: 2,
                //height:0
              },
              li: {
                marginTop: 2,
                marginBottom: 2,
                textAlign:appLanguage == 'en' ? 'left' : 'right',
                flexDirection:appLanguage == 'en' ? 'row' : 'row-reverse',
                justifyContent:appLanguage == 'en' ? 'flex-start' : 'flex-end',
                fontFamily:globals.ProximaNovaBold,
                color:colors.black,
                fontSize: globals.font_14,
                lineHeight: 28,
                paddingBottom:2,
                textAlign:appLanguage == 'en' ? 'left' : 'right',
                //height:0,
              },
              a: {
                marginTop: 2,
                marginBottom: 2,
                //fontWeight: '300',
                fontFamily:globals.ProximaNovaRegular,
                color: colors.blue, // make links coloured pink
                //height:0
              },
              br: {
                marginTop: 2,
                marginBottom: 2,
                height: 0,
                margin: 0,
                display: 'none',
                height:0
              },
        }

        return (
            <>
            <Fragment>
                <SafeAreaView style={globalStyles.safeAreaViewHeader} />
                <SafeAreaView style={styles.safeAreaView} >
                <AppHeader
                    barStyle={"light-content"}
                    androidStatusBarColor={colors.THEME_COLOR}
                    LeftFlex={.10}
                    LeftData={
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons name={'arrow-back'} size={30} color={colors.white}/>
                        </TouchableOpacity>  }
                    RightFlex={.0}
                    RightData={<View style={transistionClassArray[appLanguage].flexDirection}>
                        <MaterialIcons name={'search'} size={32} color={colors.white} style={{paddingHorizontal:15}}/>
                        <TouchableOpacity onPress={() => navigation.navigate('Wishlist',{isEmptyView : true})} style={transistionClassArray[this.state.appLanguage].flexDirection}>
                        <FastImage
                            source={images.home.shape_5}
                            style={{
                                width: 28,
                                height: 28,
                                justifyContent: 'center',
                                alignSelf: 'center',
                            }}
                            resizeMode={'contain'}
                        />
                        {/* <Badge itemsCount={1}appLanguage={appLanguage} view="mainHeader"/> */}
                        </TouchableOpacity>
                    </View>}
                    />
                    <ScrollView style={{paddingBottom:100}} showsVerticalScrollIndicator={false}>
                        <View style={styles.mainView}>
                            <View style={[transistionClassArray[appLanguage].flexDirection,styles.detaileDataView]} >
                                <Text style={styles.productCountText}>{moment(details.creationDate).format('MMMM Do YYYY')}</Text>
                                <Text style={styles.productCountText}>{' by '}{details.x_articleAuthor}</Text>
                            </View>
                            <View style={[transistionClassArray[appLanguage].flexDirection,styles.detaileDataView]} >
                                <Text style={styles.detailsArticleNameText}>{details.displayName}</Text>
                            </View>
                                <View style={styles.detailsDescriptionview}>
                                    {this.renderImage(details.largeImageURLs)}
                                    <View style={{padding:10}}>
                                        <Text style={styles.detailsArticleNameText}>{details.description}</Text>
                                        {details.longDescription != null &&
                                            this.renderLongDescription(details)
                                        }
                                        {/* x_para1 */}
                                            {details.x_paratitle1 != null &&
                                                this.renderParatitle1(details.x_paratitle1, HtmlstylesTitles)
                                            }
                                            {details.x_para1 != null &&
                                                this.renderPara1(details.x_para1, HtmlstylesPragraph)
                                            }
                                        {/* x_para2 */}
                                            {details.x_paratitle2 != null &&
                                                this.renderParatitle2(details.x_paratitle2, HtmlstylesTitles)
                                            }
                                            {details.x_para2 != null &&
                                                this.renderPara2(details.x_para2, HtmlstylesPragraph)
                                            }
                                        {/* x_para3 */}
                                            {details.x_paratitle3 != null &&
                                                this.renderParatitle3(details.x_paratitle3, HtmlstylesTitles)
                                            }
                                            {details.x_para3 != null &&
                                                this.renderPara3(details.x_para3, HtmlstylesPragraph)
                                            }
                                        {/* x_para4 */}
                                            {details.x_paratitle4 != null &&
                                                this.renderParatitle4(details.x_paratitle4, HtmlstylesTitles)
                                            }
                                            {details.x_para4 != null &&
                                                this.renderPara4(details.x_para4, HtmlstylesPragraph)
                                            }
                                        {/* x_para5 */}
                                            {details.x_paratitle5 != null &&
                                                this.renderParatitle5(details.x_paratitle5, HtmlstylesTitles)
                                            }
                                            {details.x_para5 != null &&
                                                this.renderPara5(details.x_para5, HtmlstylesPragraph)
                                            }
                                        {/* x_para6 */}
                                            {details.x_paratitle6 != null &&
                                                this.renderParatitle6(details.x_paratitle6, HtmlstylesTitles)
                                            }
                                            {details.x_para6 != null &&
                                                this.renderPara6(details.x_para6, HtmlstylesPragraph)
                                            }
                                        {/* x_para7 */}
                                            {details.x_paratitle7 != null &&
                                                this.renderParatitle7(details.x_paratitle7, HtmlstylesTitles)
                                            }
                                            {details.x_para7 != null &&
                                                this.renderPara7(details.x_para7, HtmlstylesPragraph)
                                            }
                                        {/* x_para8 */}
                                            {details.x_paratitle8 != null &&
                                                this.renderParatitle8(details.x_paratitle8, HtmlstylesTitles)
                                            }
                                            {details.x_para8 != null &&
                                                this.renderPara8(details.x_para8, HtmlstylesPragraph)
                                            }
                                        {/* x_para9 */}
                                            {details.x_paratitle9 != null &&
                                                this.renderParatitle9(details.x_paratitle9, HtmlstylesTitles)
                                            }
                                            {details.x_para9 != null &&
                                                this.renderPara9(details.x_para9, HtmlstylesPragraph)
                                            }
                                        {/* x_para10 */}
                                            {details.x_paratitle10 != null &&
                                                this.renderParatitle10(details.x_paratitle10, HtmlstylesTitles)
                                            }
                                            {details.x_para10 != null &&
                                                this.renderPara10(details.x_para10, HtmlstylesPragraph)
                                            }
                                        {/* x_para11 */}
                                            {details.x_paratitle11 != null &&
                                                this.renderParatitle11(details.x_paratitle11, HtmlstylesTitles)
                                            }
                                            {details.x_para11 != null &&
                                                this.renderPara11(details.x_para11, HtmlstylesPragraph)
                                            }
                                        {/* x_para12 */}
                                            {details.x_paratitle12 != null &&
                                                this.renderParatitle12(details.x_paratitle12, HtmlstylesTitles)
                                            }
                                            {details.x_para12 != null &&
                                                this.renderPara12(details.x_para12, HtmlstylesPragraph)
                                            }

                                        <View style={[transistionClassArray[appLanguage].flexDirection,styles.bottomButton]}>
                                            <FastImage
                                                source={images.articles.groming}
                                                style={{height:30, width:30}}
                                                resizeMode={'contain'}
                                            />
                                            <Text style={styles.gromingText}>{'Mobile Grooming'}</Text>
                                            <TouchableOpacity style={styles.maskCopy21}>
                                                <Text style={styles.detailsArticleNameTextRed} >{'Book Now'}</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </Fragment>
            </>
        );
    }
}

export default ArticlesDetails;
