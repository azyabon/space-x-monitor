import React from 'react';
import {Animated, View} from 'react-native';
import {colors} from '../../styles/customVariables';

import {styles} from './PaginatorStyles';

interface IPaginatorProps {
  data: any[];
  scrollX: Animated.Value;
  windowWidth: number;
}

function Paginator(props: IPaginatorProps) {
  return (
    <View style={styles.Paginator}>
      {props.data.map((_, i) => {
        const inputRange = [
          (i - 1) * props.windowWidth,
          i * props.windowWidth,
          (i + 1) * props.windowWidth,
        ];

        const dotWidth = props.scrollX.interpolate({
          inputRange,
          outputRange: [8, 16, 8],
          extrapolate: 'clamp',
        });

        const color = props.scrollX.interpolate({
          inputRange,
          outputRange: [colors.gray, colors.white, colors.gray],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[
              styles.Paginator__dot,
              {width: dotWidth, backgroundColor: color},
            ]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
}

export default Paginator;
