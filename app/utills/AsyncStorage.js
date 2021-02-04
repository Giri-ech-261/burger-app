// import React, { Component } from 'react';
// import { connect } from 'react-redux';
import {
  AsyncStorage,
} from "react-native";

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
   // console.log("Async Storage set Item error", error);
  }
};

export const retrieveData = async (key, callback) => {
  AsyncStorage.getItem(key).then((value) => {
   // console.log(value);
    callback(value);
  });
};
