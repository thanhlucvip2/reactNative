import React from 'react';
import {FlatList, Text, View} from 'react-native';

const data = [
  {key: '231', id: 1, name: 'rượu vang', price: 485},
  {key: '3123', id: 2, name: 'rượu linh chi', price: 233},
  {key: '41', id: 3, name: 'mứt', price: 412},
  {key: '41214', id: 4, name: 'trà', price: 211},
  {key: '213', id: 5, name: 'rượu vang', price: 485},
  {key: '41241', id: 6, name: 'rượu linh chi', price: 233},
  {key: '4412', id: 7, name: 'mứt', price: 412},
  {key: '44', id: 8, name: 'trà', price: 211},
];
export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({item, index}: any) => (
            <View>
              <Text>{item.name}</Text>
              <Text>{index}</Text>
            </View>
          )} // render data
          keyExtractor={item => item.key} // key
        />
      </View>
    );
  }
}
