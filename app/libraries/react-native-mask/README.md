# React Native Mask

If you have an item you need to fit into a shape, you can achieve this by putting a Mask on it.

### DISCLAIMER

**This project is currently in beta**.

Core APIs are subject to change. We encourage people to try this library out and provide us feedback as we get it to a stable state.

## Setup

This library is available on npm, install it with: `npm install --save react-native-mask` or `yarn add react-native-mask`.

## Compatibility

react-native-mask works on iOS for all React Native versions. Starting with React Native version 0.50 it also supports Android, as borderRadius and overflow: 'hidden' was fixed within this release.

## Usage

1. Import react-native-mask:
```javascript
import Mask from "react-native-mask";
```

2. Create a mask and nest its content inside of it:
```javascript
render () {
  return (
    <View>
      <Mask shape={'circle'}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: "http://lorempixel.com/100/100/" }}
        />
      </Mask>
    </View>
  )
}
```

## Shapes

There are 3 different shapes that you can achieve using a Mask. The default shape is `square`.

```javascript
<Text style={styles.text}>Mask with default of 'square' shape</Text>
<Mask>
  <View style={[{ backgroundColor: '#0084ff' }, styles.shapeSize]} />
</Mask>
<Text style={styles.text}>
  Mask with 'rounded' shape and default 8 points border radius
</Text>
<Mask shape={'rounded'}>
  <View style={[{ backgroundColor: '#fbb6ac' }, styles.shapeSize]} />
</Mask>
<Text style={styles.text}>Mask with 'circle' shape</Text>
<Mask shape={'circle'}>
  <View style={[{ backgroundColor: '#e3780c' }, styles.shapeSize]} />
</Mask>
```

![Shapes](https://image.ibb.co/nO6e6w/Screen_Shot_2018_01_21_at_10_44_11_AM.png)

## Masking other content

You can compose images with other content (like images or videos) to produce different shapes like rounded rectangles or circles.

```javascript
<Text style={styles.text}>Masking other content</Text>
<View style={{ flexDirection: 'row' }}>
  <Mask shape={'circle'}>
    <Image
      style={styles.shapeSize}
      source={{
        uri:
          'https://static.pexels.com/photos/544113/pexels-photo-544113.jpeg',
      }}
    />
  </Mask>
  <View style={{ marginLeft: 10 }} />
  <Mask shape={'rounded'}>
    <Image
      style={styles.shapeSize}
      source={{
        uri:
          'https://static.pexels.com/photos/414720/pexels-photo-414720.jpeg',
      }}
    />
  </Mask>
</View>
```

![Masking other content](https://image.ibb.co/esxN9G/Screen_Shot_2018_01_21_at_11_49_59_AM.png)

## Washes

If you expect the masked content to be nearly white, you can apply a wash to emphasize the edge of the mask.

```javascript
<Text style={styles.text}>Washes</Text>
<Mask shape={'rounded'} wash>
  <Image
    style={styles.shapeSize}
    source={{
      uri:
        'https://static.pexels.com/photos/6556/beans-coffee-hand-morning.jpg',
    }}
  />
</Mask>
```

![Washes](https://image.ibb.co/hbXN9G/Screen_Shot_2018_01_21_at_11_50_03_AM.png)

## License

Copyright 2018 Michael Schneider

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
