import React from 'react';
import {Dimensions, Image, ScrollView, Text, TextInput} from 'react-native';

export default class VerticalScrollView extends React.Component {
  render(): React.ReactNode {
    let screenWidth = Dimensions.get('window').width; // lấy ra chiều rộng của màn hình tương ứng
    let screenHeight = Dimensions.get('window').height; // lấy ra chiều cao của màn hình tương ứng
    console.log(screenWidth);
    return (
      <ScrollView
        maximumZoomScale={3} //max zoom ảnh ( chỉ trên ios)
        minimumZoomScale={0.2} //min zoom ảnh ( chỉ trên ios)
        keyboardDismissMode="on-drag" // khi nhấn ngoài màn hình thì tự ẩn keyboard
        contentContainerStyle={{paddingLeft: 50}} //style cho scroll view
      >
        <Image
          style={{width: screenWidth, height: (screenWidth * 736) / 736}}
          source={require('../hinh-anh-cute-de-thuong.jpg')}></Image>
        <Text>Ảnh</Text>
        <Image
          style={{width: screenWidth, height: (screenWidth * 736) / 736}}
          source={require('../hinh-anh-cute-de-thuong.jpg')}></Image>
        <TextInput style={{width: 100, height: 50, backgroundColor: 'blue'}} />
        <Image
          style={{width: screenWidth, height: (screenWidth * 736) / 736}}
          source={require('../hinh-anh-cute-de-thuong.jpg')}></Image>
      </ScrollView>
    );
  }
}
