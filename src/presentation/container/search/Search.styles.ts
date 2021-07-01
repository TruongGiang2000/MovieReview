import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Fonts, Colors} from '@resources';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000004f',
    paddingVertical: hp(5),
    paddingHorizontal: wp(4),
  },
  searchContainer: {
    borderWidth: 1,
    borderColor: 'black',
    paddingLeft: wp(2),
    borderRadius: wp(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  iconSearchContainer: {
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    backgroundColor: '#f23e51',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
