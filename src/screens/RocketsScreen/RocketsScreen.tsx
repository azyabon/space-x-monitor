import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Text, View, Dimensions, Animated} from 'react-native';
import {http} from '../../libs/http';
import {API_METHODS} from '../../constants/api';
import {IRocket} from '../../types/IRocket';
import Paginator from '../../shared/Paginator';

import {styles} from './RocketScreenStyles';

export default function RocketsScreen() {
  const width = Dimensions.get('window').width;
  const [rockets, setRockets] = useState<IRocket[]>([]);
  const scrollX: Animated.Value = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({viewableItems}: any) => {
    setCurrentIndex(viewableItems[0]?.index);
  }).current;

  const viewConfig = useRef({
    minimumViewTime: 50,
    viewAreaCoveragePercentThreshold: 100,
  }).current;

  useEffect(() => {
    http
      .get(API_METHODS.GET_ROCKETS)
      .then((response: {data: IRocket[]}) => setRockets(response.data));
  }, []);

  return (
    <View style={styles.RocketsScreen}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        data={rockets}
        keyExtractor={(item: IRocket) => item.id.toString()}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        scrollEventThrottle={32}
        ref={slidesRef}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: false,
          },
        )}
        renderItem={({item}) => (
          <View
            key={item.id}
            style={{
              width: width,
              backgroundColor: 'black',
              height: 'auto',
              flex: 1,
            }}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
      <Paginator data={rockets} scrollX={scrollX} windowWidth={width} />
    </View>
  );
}
