import React, {useState} from 'react';
// import DropDownPicker from 'react-native-dropdown-picker';
import {transistionClassArray} from '../../utills/TranslationClasses';

const DropDownSelect = (props) => {
  const {items, defaultValue, onChangeItem, appLanguage} = props;
  const [isOpen, setIsOpen] = useState(false);
  const {flexDirection, justifyContent, textAlign} = transistionClassArray[
    appLanguage
  ];
  return (
    <View></View>
    // <DropDownPicker
    //   items={items}
    //   onOpen={() => setIsOpen(true)}
    //   onClose={() => setIsOpen(false)}
    //   defaultValue={defaultValue}
    //   containerStyle={{height: 50}}
    //   placeholder="Select an item"
    //   style={[
    //     {
    //       borderTopLeftRadius: isOpen ? 25 : 50,
    //       borderTopRightRadius: isOpen ? 25 : 50,
    //       borderBottomLeftRadius: 50,
    //       borderBottomRightRadius: 50,
    //       borderWidth: 2,
    //     },
    //     flexDirection,
    //   ]}
    //   itemStyle={justifyContent}
    //   dropDownStyle={{zIndex: 9999}}
    //   labelStyle={textAlign}
    //   onChangeItem={onChangeItem}
    // />
  );
};

export default DropDownSelect;
