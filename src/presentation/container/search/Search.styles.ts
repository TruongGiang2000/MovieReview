import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Fonts, Colors} from '@resources';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.blackColor,
    paddingVertical: hp(5),
    paddingHorizontal: wp(3),
  },
  searchContainer: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingLeft: wp(2),
    borderRadius: wp(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: wp(12),
    width: '90%',
    overflow: 'hidden',
  },
  iconSearchContainer: {
    width: wp(11),
    height: '100%',
    borderRadius: wp(8),
    backgroundColor: '#f23e51',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  containerFilter: {
    width: wp(10),
    height: wp(10),
    marginLeft: wp(1),
  },
  iconFilter: {
    width: '100%',
    height: '100%',
    tintColor: '#fff',
  },
});
