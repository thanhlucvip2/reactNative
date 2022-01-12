import React from 'react';
import {View} from 'react-native';
import VerticalScrollView from './components/verticalScrollView';

export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <View>
        <VerticalScrollView />
      </View>
    );
  }
}
