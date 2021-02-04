"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var styles_1 = require("./styles");
exports.ListLetterIndex = function (_a) {
    var sectionData = _a.sectionData, onPressLetter = _a.onPressLetter, indexLetterColor = _a.indexLetterColor;
    var labelStyle = indexLetterColor ? { color: indexLetterColor } : {};
    return (<react_native_1.View style={styles_1.styles.letterIndexContainer}>
      <react_native_1.FlatList contentContainerStyle={styles_1.styles.letterIndexList} data={sectionData} keyExtractor={function (i) { return i.title; }} renderItem={function (_a) {
        var item = _a.item, index = _a.index;
        return (<react_native_1.TouchableOpacity testID="indexItem" onPress={function () { return onPressLetter(index); }}>
            <react_native_1.View style={styles_1.styles.letterIndexItem}>
              <react_native_1.Text testID="indexItem__title" style={[styles_1.styles.letterIndexLabel, labelStyle]}>{item.title}</react_native_1.Text>
            </react_native_1.View>
          </react_native_1.TouchableOpacity>);
    }}/>
    </react_native_1.View>);
};
