import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Fonts, Colors} from '@resources';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blackColor,
  },
  logo: {width: 200, height: 150},
  titleStyle: {
    fontSize: wp(10),
    color: Colors.mainColor,
    fontFamily: Fonts.Open_Sans_Bold,
  },
  subTitle: {
    fontSize: wp(4),
    color: Colors.mainColor,
    fontFamily: Fonts.Open_Sans_Regular,
    marginTop: hp(0.6),
  },
  viewLoading: {width: wp(15), position: 'absolute', bottom: hp(1)},
});
