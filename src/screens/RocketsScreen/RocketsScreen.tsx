import React from 'react';
import {FlatList, Text, View} from 'react-native';

export default function RocketsScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'gray',
      }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        data={[
          {id: 1, text: '12321'},
          {id: 2, text: 'dfsd'},
          {id: 2, text: 'dfsd12'},
        ]}
        renderItem={({item}) => (
          <View
            key={item.id}
            style={{width: '100%', backgroundColor: 'black', height: 'auto'}}>
            <Text style={{color: 'white'}}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}
