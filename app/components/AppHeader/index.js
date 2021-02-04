import React from 'react';
import {StatusBar} from 'react-native';
import {Header, Left, Body, Right, Button, Title} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import * as colors from '../../assets/styles/color';
import Badge from '../../components/BadgeView/Badge'


const AppHeader = (props) => {
    const {LeftFlex, RightFlex, BodyFlex, BodyData, backgroundColor, androidStatusBarColor, barStyle, isLeft, leftPress, leftIcon, LeftData, title, isRight, rightPress, rightIcon, RightData} = props;
    return (
        <Header
            style={[
                styles.headerContainer,
                {
                    backgroundColor: backgroundColor ? backgroundColor : colors.theme_color, paddingRight: 15,
                },
            ]}
        >
            <StatusBar
                backgroundColor={androidStatusBarColor ? androidStatusBarColor : colors.white}
                barStyle={barStyle}/>
            <Left style={{flex: LeftFlex || LeftFlex === 0 ? LeftFlex : .15}}>
                {isLeft ?
                    <Button transparent onPress={leftPress}>
                        <Icon name={leftIcon ? leftIcon : 'arrow-left'} size={30} color={colors.white}/>
                    </Button> : null}
                {LeftData && LeftData}
            </Left>

            <Body style={{flex: BodyFlex ? BodyFlex : .7}}>
                {BodyData && BodyData}
                {title && <Title style={[styles.headerTitleText]}>{title}</Title>}
            </Body>
            <Right style={{flex: RightFlex ? RightFlex : .15}}>
                {isRight ?
                    <Button transparent onPress={rightPress}>
                        <Icon style={{color: colors.white}}
                              name={rightIcon ? rightIcon : 'arrow-left'} size={25}/>
                    </Button> : null}
                {RightData && RightData}
            </Right>
        </Header>
    );
};

export default AppHeader;
