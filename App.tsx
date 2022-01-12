import React from 'react';
import {StyleSheet, TextInput, View, Keyboard} from 'react-native';
interface myProps {}
interface myState {}
export default class App extends React.Component<myProps, myState> {
  constructor(props: myProps) {
    super(props);
    this.state = {
      typedText: 'please type your text',
      typedPassword: '',
      typedDescription: '',
    };
  }
  // khi component vừa hiện lên thì gọi hàm WillMount
  componentWillMount() {
    console.log('componentWillMount');
  }

  // khi component mất đi thì gọi hàm unMount
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render(): React.ReactNode {
    return (
      <View>
        <TextInput
          style={Styles.container}
          placeholder="text input"
          placeholderTextColor={'red'} // màu placeholder
          // keyboardType="email-address" // kiểu nhập input android: [default, number-pad, decimal-pad, numeric, email-address ,phone-pad], ios : [ascii-capable numbers-and-punctuation url name-phone-pad twitter web-search]
          onChangeText={text => {
            console.log(text);
          }} // hàm nhận vào text
          // secureTextEntry={true} // bật ẩn mật khẩu khi nhâp
          // multiline={true} // gõ được nhiều dòng như textArea
          // editable={true} // không chỉnh sửa được input
          // autoFocus={true} // lần đầu khi mở component tự động con trỏ chuột vào ô input có autoFocus
          // returnKeyType="search" // kiểu phím return trên bàn phím android [done  go  next  search  send], ios [default emergency-call google join route yahoo]
          // onSubmitEditing={Keyboard.dismiss} // tự ẩn bàn phím khi done (Keyboard.dismiss : hàm ẩn bàn phím)
        />
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    height: 40,
    borderColor: 'green',
    marginTop: 200,
    marginHorizontal: 30,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
});
