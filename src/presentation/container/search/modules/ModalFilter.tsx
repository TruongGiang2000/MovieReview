import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {IconImage, Modal} from '@components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Fonts} from '@resources';
import {useSelector} from 'react-redux';
import {RootStoreState} from '@shared-state';
import LinearGradient from 'react-native-linear-gradient';
import {translate} from '@helpers';
export const ModalFilter = (props: any) => {
  const {movieGenres} = useSelector((state: RootStoreState) => ({
    movieGenres: state.systems.movieGenres,
  }));
  const {showModal, onRequestClose} = props;
  const [activeArray, setActiveArray] = useState<any[]>([]);

  const onPressGenres = (id: string) => () => {
    const indexActive = activeArray?.findIndex((it) => it == id);
    if (indexActive != -1) {
      setActiveArray((preState) => {
        preState.splice(indexActive, 1);
        return [...preState];
      });
      return;
    }
    setActiveArray((preState) => preState.concat(id));
  };
  return (
    <Modal
      isOpen={showModal}
      position={'bottom'}
      onRequestClose={onRequestClose}>
      <View style={styles.containerView}>
        <ScrollView>
          <Text style={styles.txtTitleGeneral}>{translate('genres')}</Text>
          <View style={styles.genresContainer}>
            {movieGenres?.genres?.map((it: any) => {
              const isActive = activeArray?.some((itAc) => itAc == it?.id);
              return (
                <LinearGradient
                  colors={
                    isActive
                      ? ['#FC466B', '#3F5EFB']
                      : ['transparent', 'transparent']
                  }
                  useAngle={true}
                  angle={90}
                  style={styles.btnContainer}
                  key={it?.id}>
                  <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={onPressGenres(it?.id)}
                    activeOpacity={0.7}>
                    <Text style={styles.txtGeneres}>{it?.name}</Text>
                  </TouchableOpacity>
                </LinearGradient>
              );
            })}
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
    fontFamily: Fonts.Open_Sans_Bold,
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
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: wp(4),
    margin: wp(1),
  },
  genresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(1),
  },
  btnStyle: {paddingVertical: hp(1), paddingHorizontal: wp(2)},
});
