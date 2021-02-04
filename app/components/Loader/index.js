import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { screenWidth } from "../../utills/globals";
import * as colors from "../../assets/styles/color";

const styles = StyleSheet.create({
  container: {
    // top: screenWidth * 0.5,
    alignSelf: "center",
    // backgroundColor: "#FFFFFF",
    // height: screenWidth * 0.4,
    // width: screenWidth * 0.4,
    // borderRadius: 10,
    // display: "flex",
    justifyContent: "center",
  },
  activityIndicator: {
    flex: 1,
    // borderRadius: 10,
    alignItems: "center",
    // flexDirection: "column",
    // justifyContent: "space-around",
    // backgroundColor: "red",
  },
});

function Loader(props) {
  return (
      <ActivityIndicator
        color={colors.red}
        size="large"
        style={styles.activityIndicator}
      />
  );
}

export default Loader;
