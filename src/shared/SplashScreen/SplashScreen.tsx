import React from 'react';
import {Image, View} from 'react-native';

import {styles} from './SplashScreenStyles';

const logo = require('../../../assets/images/logo2.webp');

interface IProps {
  show: boolean;
}

export default function SplashScreen(props: IProps) {
  if (!props.show) {
    return null;
  }

  return (
    <View style={styles.SplashScreen}>
      <Image style={styles.SplashScreen__img} source={logo} />
    </View>
  );
}
