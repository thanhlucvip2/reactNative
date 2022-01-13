import React from 'react';
import {Button, Text, View} from 'react-native';
interface Props {}
interface State {
  update: boolean;
}
export default class LifeCycle extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log('constructor'); // hàm goi đầu tiên để khởi tạo
    this.state = {
      update: true,
    };
  }
  //   componentWillMount() {
  //     console.log('componentWillMount'); // đươc gọi sau constructor
  //   }
  componentDidMount() {
    console.log('componentDidMount'); // được gọi sau khi render
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate'); // được gọi trước khi update state
    return true; //return true cho phép tiếp tục update sau đó mới gọi hàm componentDidUpdate
  }
  componentDidUpdate() {
    console.log('componentDidUpdate'); // được gọi khi update state
  }
  componentWillUnmount() {
    console.log('componentWillUnmount'); // được gọi khi component được gỡ ra
  }
  render(): React.ReactNode {
    console.log('render');
    return (
      <View>
        <Text></Text>
        <Button
          title="dasd"
          onPress={() => {
            this.setState({update: !this.state.update});
          }}
        />
      </View>
    );
  }
}
