import React from 'react';
import {Button, Text, View} from 'react-native';
import LifeCycle from './components/LyfeCycleComponent';
interface Props {}
interface State {
  isCheck: boolean;
}
export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isCheck: true,
    };
  }

  render(): React.ReactNode {
    const data = <LifeCycle />;
    return (
      <View>
        {this.state.isCheck ? data : <Text>gỡ</Text>}
        <Text>---</Text>
        <Button
          title="gỡ component ra"
          onPress={() => {
            this.setState({isCheck: !this.state.isCheck});
          }}
        />
      </View>
    );
  }
}
