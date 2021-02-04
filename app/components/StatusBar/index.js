import React, { Component } from "react";
import {
    StatusBar,
    View
} from "react-native";

class StatusBarView extends Component {
    
    render() {
        return (
            <StatusBar barStyle = {this.props.barStyle} hidden = {false} backgroundColor = {this.props.backgroundColor} translucent = {true}/>
      );
    }
}
export default StatusBarView;
