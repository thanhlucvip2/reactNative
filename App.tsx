import React from 'react';
import {View} from 'react-native';
import HorizontalScrollView from './components/horizontalScrollView';

export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <View>
        <HorizontalScrollView />
      </View>
    );
  }
}
