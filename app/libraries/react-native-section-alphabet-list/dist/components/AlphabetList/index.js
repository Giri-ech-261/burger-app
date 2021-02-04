"use strict";
let __rest = (this && this.__rest) || function (s, e) {
    let t = {};
    for (let p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (let i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
let __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    let result = {};
    if (mod != null) for (let k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
let __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let React = __importStar(require("react"));
let react_1 = require("react");
let react_native_1 = require("react-native");
let react_native_section_list_get_item_layout_1 = __importDefault(require("react-native-section-list-get-item-layout"));
let getSectionData_1 = require("../../utils/getSectionData");
let ListLetterIndex_1 = require("../ListLetterIndex");
let styles_1 = require("./styles");
let sizes_1 = require("../../values/sizes");
let consts_1 = require("../../values/consts");
exports.AlphabetList = function (props) {
    let data = props.data, _a = props.index, index = _a === void 0 ? consts_1.DEFAULT_CHAR_INDEX : _a, style = props.style, indexLetterColor = props.indexLetterColor, _b = props.getItemHeight, onGetItemHeight = _b === void 0 ? function () { return sizes_1.sizes.itemHeight; } : _b, _c = props.sectionHeaderHeight, sectionHeaderHeight = _c === void 0 ? sizes_1.sizes.itemHeight : _c, _d = props.uncategorizedAtTop, uncategorizedAtTop = _d === void 0 ? false : _d, renderCustomSectionHeader = props.renderCustomSectionHeader, renderCustomItem = props.renderCustomItem, sectionListProps = __rest(props, ["data", "index", "style", "indexLetterColor", "getItemHeight", "sectionHeaderHeight", "uncategorizedAtTop", "renderCustomSectionHeader", "renderCustomItem"]);
    let sectionListRef = react_1.useRef(null);
    let _e = react_1.useState([]), sectionData = _e[0], setSectionData = _e[1];
    react_1.useEffect(function () {
        setSectionData(getSectionData_1.getSectionData(data, index, uncategorizedAtTop));
    }, [data]);
    let onScrollToSection = function (sectionIndex) {
        let sectionList = sectionListRef.current;
        if (!sectionList)
            return;
        sectionList.scrollToLocation({
            sectionIndex: sectionIndex,
            itemIndex: 0,
        });
    };
    let onGetItemLayout = react_native_section_list_get_item_layout_1.default({
        getItemHeight: function (_rowData, sectionIndex, rowIndex) {
            return onGetItemHeight(sectionIndex, rowIndex);
        },
        getSectionHeaderHeight: function () { return sectionHeaderHeight; },
        getSectionFooterHeight: function () { return 0; },
    });
    let onRenderSectionHeader = function (_a) {
        let section = _a.section;
        if (renderCustomSectionHeader)
            return renderCustomSectionHeader(section);
        return (<react_native_1.View testID="header" style={styles_1.styles.sectionHeaderContainer}>
        <react_native_1.Text testID="header__label" style={styles_1.styles.sectionHeaderLabel}>{section.title}</react_native_1.Text>
      </react_native_1.View>);
    };
    let onRenderItem = function (_a) {
        let item = _a.item;
        if (renderCustomItem)
            return renderCustomItem(item);
        return (<react_native_1.View testID="cell" style={styles_1.styles.listItemContainer}>
        <react_native_1.Text testID="cell__label" style={styles_1.styles.listItemLabel}>{item.value}</react_native_1.Text>
      </react_native_1.View>);
    };
    return (<react_native_1.View style={[styles_1.styles.container, style]}>
      <react_native_1.SectionList {...sectionListProps} testID="sectionList" ref={sectionListRef} sections={sectionData} keyExtractor={function (item) { return item.key; }} renderItem={onRenderItem} renderSectionHeader={onRenderSectionHeader} getItemLayout={onGetItemLayout}/>

      <ListLetterIndex_1.ListLetterIndex sectionData={sectionData} onPressLetter={onScrollToSection} indexLetterColor={indexLetterColor}/>
    </react_native_1.View>);
};
