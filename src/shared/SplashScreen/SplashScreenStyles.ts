import {StyleSheet} from 'react-native';
import {colors} from '../../styles/customVariables';

export const styles = StyleSheet.create({
  SplashScreen: {
    position: 'absolute',
    backgroundColor: colors.black,
    top: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  SplashScreen__img: {
    width: '100%',
  },
});
