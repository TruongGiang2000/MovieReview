import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Fonts, Colors} from '@resources';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  watchNow: {
    fontSize: wp(6),
    fontFamily: Fonts.Open_Sans_Semibold,
    color: '#fff',
    flex: 1,
  },
  icon: {
    width: wp(3),
    height: wp(3),
  },
  dropDownContainer: {
    backgroundColor: '#1f1b24',
    marginTop: 1,
    borderWidth: 1,
    borderColor: 'white',
    width: '80%',
    alignSelf: 'flex-end',
  },
  dropDown: {
    backgroundColor: '#1f1b24', //1E1E2E
    borderWidth: 1,
    borderColor: 'white',
    height: hp(4.5),
    width: '80%',
    borderRadius: wp(0.3),
    alignSelf: 'flex-end',
  },
  txtLanguageStyle: {
    color: 'white',
    fontFamily: Fonts.Open_Sans_Bold,
    fontSize: wp(3),
  },
  viewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
