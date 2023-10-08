import {StyleSheet} from 'react-native';
import {colors} from '../../styles/customVariables';

export const styles = StyleSheet.create({
  Paginator: {
    flexDirection: 'row',
    height: 64,
    backgroundColor: colors.lightBlack,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Paginator__dot: {
    height: 8,
    backgroundColor: colors.gray,
    borderRadius: 5,
    marginHorizontal: 8,
  },
});
