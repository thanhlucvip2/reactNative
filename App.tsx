import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Swipeout from 'react-native-swipeout';

//yarn add react-native-swipeout
const data = [
  {
    imgurl:
      'https://st.quantrimang.com/photos/image/2020/10/17/giai-nen-file-img.jpg',
    key: '231',
    id: 1,
    name: 'rượu vang',
    price: 485,
  },
  {
    imgurl:
      'https://st.quantrimang.com/photos/image/2020/10/17/giai-nen-file-img.jpg',
    key: '22131',
    id: 1,
    name: 'rượu vang',
    price: 485,
  },
  {
    imgurl:
      'https://st.quantrimang.com/photos/image/2020/10/17/giai-nen-file-img.jpg',
    key: '2dasda31',
    id: 1,
    name: 'rượu vang',
    price: 485,
  },
  {
    imgurl:
      'https://st.quantrimang.com/photos/image/2020/10/17/giai-nen-file-img.jpg',
    key: '3123',
    id: 2,
    name: 'rượu linh chi',
    price: 233,
  },
  {
    imgurl:
      'https://st.quantrimang.com/photos/image/2020/10/17/giai-nen-file-img.jpg',
    key: '41',
    id: 3,
    name: 'mứt',
    price: 412,
  },
  {
    imgurl:
      'https://st.quantrimang.com/photos/image/2020/10/17/giai-nen-file-img.jpg',
    key: '41214',
    id: 4,
    name: 'trà',
    price: 211,
  },
  {
    imgurl:
      'https://st.quantrimang.com/photos/image/2020/10/17/giai-nen-file-img.jpg',
    key: '213',
    id: 5,
    name: 'rượu vang',
    price: 485,
  },
  {
    imgurl:
      'https://st.quantrimang.com/photos/image/2020/10/17/giai-nen-file-img.jpg',
    key: '41241',
    id: 6,
    name: 'rượu linh chi',
    price: 233,
  },
  {
    imgurl:
      'https://st.quantrimang.com/photos/image/2020/10/17/giai-nen-file-img.jpg',
    key: '4412',
    id: 7,
    name: 'mứt',
    price: 412,
  },
  {
    imgurl:
      'https://st.quantrimang.com/photos/image/2020/10/17/giai-nen-file-img.jpg',
    key: '44',
    id: 8,
    name: 'trà',
    price: 211,
  },
];
export default class App extends React.Component {
  render(): React.ReactNode {
    return (
      <View>
        <FlatList
          data={data}
          renderItem={({item, index}: any) => (
            <View>
              <View style={Styles.container}>
                <Image
                  source={{uri: item.imgurl}}
                  style={{width: 100, height: 100}}></Image>
                <View style={Styles.list}>
                  <Text>{item.name}</Text>
                  <Text
                    style={
                      index % 2 === 0 ? Styles.colorBlue : Styles.colorRed
                    }>
                    {index}
                  </Text>
                </View>
              </View>
              <View style={{borderWidth: 1, margin: 1}}></View>
            </View>
          )} // render data
          keyExtractor={item => item.key} // key
        />
      </View>
    );
  }
}
const Styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  colorBlue: {
    color: 'blue',
  },
  colorRed: {
    color: 'red',
  },
  list: {
    backgroundColor: 'yellow',
    flex: 1,
  },
});
