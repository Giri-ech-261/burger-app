import React, { Component } from "react";
import {
    Text,
    TouchableOpacity,
    Platform,
    View,
    Image
} from "react-native";
import * as colors from "../../assets/styles/color";
import FastImage from "react-native-fast-image";
import styles from './style';
import CheckBox from 'react-native-check-box'
import * as images from '../../assets/images/map';

// import ss from '../../assets/images/home';
class CategoryView extends Component {
    constructor(props) {
        super(props);
        this.state ={
            isChecked: false,
        }
    }

    render() {
        // let data = this.props;
        const {data} = this.props;
        // console.log("DATA-->", data);
        return (
            <View style={{ marginTop:10, width:'36%', flexDirection:'row'}}>
                <CheckBox
                     
                    onClick={() => {
                        this.props.isChecked(data)
                        this.setState({
                            isChecked: !this.state.isChecked
                        })
                    }}
                    isChecked={this.state.isChecked}
                    checkedImage={
                        <FastImage
                            style={{ height: 23, width: 23 }}
                            resizeMode="contain"
                            source={images.shippingAddress.check} />
                    }
                    unCheckedImage={
                        <FastImage
                        style={{ height: 23, width: 23 }}
                        resizeMode="contain"
                        source={images.shippingAddress.uncheck} />
                    }
                />
                <Text style={styles.checkboxTitle} >{data.title}</Text>
            </View>
        );
    }
}
export default CategoryView;
