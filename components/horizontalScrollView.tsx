import React from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
export default class HorizontalScrollView extends React.Component {
  render(): React.ReactNode {
    let screenHeight = Dimensions.get('window').height; // lấy ra chiều cao của màn hình tương ứng
    let screenWidth = Dimensions.get('window').width; // lấy ra chiều rộng của màn hình tương ứng
    return (
      <ScrollView
        horizontal={true} // bật scroll theo chiều ngang
        pagingEnabled={true} // scroll như lật trang sách
        showsHorizontalScrollIndicator={true} // hiện thanh chỉ định đang scroll ở màn hình nào
        scrollIndicatorInsets={{top: 10, left: 10, bottom: 10, right: 10}} // thêm khoản không vào chỉ chạy trên ios giống margin
        onMomentumScrollBegin={() => {
          console.log('onMomentumScrollBegin'); // khi tay bắt đầu chạm vào màn hình scroll thì gọi hàm
        }}
        onMomentumScrollEnd={() => {
          console.log('onMomentumScrollEnd'); // khi  kết thúc 1 scroll thì gọi hàm
        }}
        onScroll={event => {
          console.log(event.nativeEvent.contentOffset.x); // tọa độ tay khi scroll
        }}
        scrollEventThrottle={1000} //thòi gian update dữ liệu khi scroll
      >
        <View
          style={{
            width: screenWidth,
            height: screenHeight,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 200, color: 'yellow'}}>1</Text>
        </View>
        <View
          style={{
            width: screenWidth,
            height: screenHeight,
            backgroundColor: 'yellow',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 200, color: 'blue'}}>2</Text>
        </View>
        <View
          style={{
            width: screenWidth,
            height: screenHeight,
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 200, color: 'red'}}>3</Text>
        </View>
      </ScrollView>
    );
  }
}
