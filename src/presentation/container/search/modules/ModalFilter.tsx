import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Modal} from '@components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Fonts} from '@resources';
import {useSelector} from 'react-redux';
import {RootStoreState} from '@shared-state';
export const ModalFilter = (props: any) => {
  const {movieGenres} = useSelector((state: RootStoreState) => ({
    movieGenres: state.systems.movieGenres,
  }));
  return (
    <Modal isOpen={true} position={'bottom'} hasBackdrop={true}>
      <View style={styles.containerView}>
        <ScrollView>
          <Text style={styles.txtTitleGeneral}>Genres</Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: hp(1),
            }}>
            {movieGenres?.genres?.map((it: any) => (
              <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.txtGeneres}>{it?.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  containerView: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: wp(10),
    borderTopRightRadius: wp(10),
    paddingHorizontal: wp(4),
    paddingBottom: hp(2),
    backgroundColor: '#202630',
  },
  txtTitleGeneral: {
    fontFamily: Fonts.Open_Sans_Semibold,
    color: '#fff',
    fontSize: wp(4),
    marginTop: hp(2),
  },
  txtGeneres: {
    fontFamily: Fonts.Open_Sans_Regular,
    color: '#fff',
    fontSize: wp(3),
  },
  btnContainer: {
    paddingVertical: hp(1),
    margin: wp(2),
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: wp(4),
    alignItems: 'center',
    paddingHorizontal: wp(2),
  },
});
