import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Fonts, Colors} from '@resources';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  backDrop: {
    width: '100%',
    height: '40%',
  },
  viewCover: {
    width: '100%',
    backgroundColor: '#0000004f',
    position: 'absolute',
  },
  fullSizeImg: {width: '100%', height: '100%'},
  iconBack: {
    width: wp(3),
    height: wp(3),
    position: 'absolute',
    top: hp(3),
    left: wp(5),
    zIndex: 99,
  },
  viewInfo: {
    width: '100%',
    backgroundColor: '#12223d',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: wp(10),
    borderTopRightRadius: wp(10),
    paddingVertical: hp(2),
    paddingHorizontal: wp(4),
    overflow: 'hidden',
  },
  nameMovie: {
    fontFamily: Fonts.Open_Sans_Bold,
    fontSize: wp(5.5),
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'center',
  },
  txtGeneral: {
    color: '#717e94',
    fontSize: wp(3),
    fontFamily: Fonts.Open_Sans_Regular,
  },
  viewCate: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp(0.3),
  },
  txtTitleGeneral: {
    fontFamily: Fonts.Open_Sans_Semibold,
    color: '#fff',
    fontSize: wp(4),
    marginTop: hp(2),
  },
  txtContentGeneral: {
    color: '#fff',
    fontSize: wp(3),
    fontFamily: Fonts.OpenSans_Light,
    marginTop: hp(0.5),
    opacity: 0.9,
  },
});
