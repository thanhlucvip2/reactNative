import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedbackBase,
  View,
} from 'react-native';
export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <View style={Styles.container}>
        <TouchableHighlight
          onPress={() => {
            console.log('TouchableHighlight');
          }}
          onShowUnderlay={() => {
            console.log('onShowUnderlay'); // gọi hàm 2 lần khi đè chuột xuống và mở chuột lên
          }}
          underlayColor="red" // màu khi click
        >
          <View style={Styles.button}>
            <Text>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
  },
});
