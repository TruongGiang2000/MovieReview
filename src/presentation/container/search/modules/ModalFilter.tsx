import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Modal} from '@components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Fonts} from '@resources';
import {useSelector} from 'react-redux';
import {RootStoreState} from '@shared-state';
import LinearGradient from 'react-native-linear-gradient';
import {translate} from '@helpers';
import moment from 'moment';
import lodash from 'lodash';
import AutoComplete from 'react-native-autocomplete-input';
export const ModalFilter = (props: any) => {
  const {movieGenres} = useSelector((state: RootStoreState) => ({
    movieGenres: state.systems.movieGenres,
  }));
  const dataFilter = ['genres', 'year', 'region'];

  const {showModal, onRequestClose} = props;
  const refFlatList = useRef<any>();
  const refFlatListYear = useRef<any>();
  const refScrollView = useRef<any>();
  const [itemFocus, setItemFocus] = useState<number>(+moment().format('yyyy'));
  const [activeArray, setActiveArray] = useState<any[]>([]);
  const [isActiveItem, setIsActiveItem] = useState<number>(0);
  const numberYears = lodash.range(+moment().format('yyyy') - 1899);
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

  const chooseFilterCate = (index: number) => () => {
    setIsActiveItem(index);
    refFlatList.current?.scrollToIndex({index, animated: true});
    refScrollView.current?.scrollTo({x: 0, y: 0, animated: true});
  };

  const renderYear = ({item}: any) => {
    const year = +item + 1900;
    const itemActive = itemFocus == year;
    return (
      <Text
        onPress={() => setItemFocus(year)}
        style={[styles.txtYearChoose, itemActive && styles.itemActive]}
        key={item?.toString()}>
        {year}
      </Text>
    );
  };

  useEffect(() => {
    if (!!showModal) {
      setIsActiveItem(0);
      setItemFocus(+moment().format('yyyy'));
      setActiveArray([]);
    }
  }, [showModal]);

  const renderItem = ({item, index}: any) => {
    switch (index) {
      case 0:
        return (
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
        );
      case 1:
        return (
          <View
            style={{
              width: wp(90),
              marginRight: wp(5),
            }}>
            <FlatList
              data={numberYears?.reverse()}
              renderItem={renderYear}
              style={{marginVertical: hp(3)}}
              showsVerticalScrollIndicator={false}
              ref={refFlatListYear}
            />
          </View>
        );
      case 2:
        return (
          <View style={{width: wp(100), marginTop: hp(3)}}>
            <AutoComplete />
          </View>
        );
      default:
        return <></>;
    }
  };

  const getHeightItem = () => {
    switch (isActiveItem) {
      case 0:
        return {height: hp(55)};
      case 1:
        return {};
      case 2:
        return {};
      default:
        return {};
    }
  };
  return (
    <Modal
      isOpen={showModal}
      hasBackdrop={true}
      position={'bottom'}
      pressOutSideClose={true}
      onRequestClose={onRequestClose}>
      <View style={styles.containerView}>
        <View style={styles.viewRow}>
          {dataFilter?.map((it, index) => {
            const isActiveScreen = index == isActiveItem;
            return (
              <LinearGradient
                colors={
                  isActiveScreen
                    ? ['#ec881c', '#ec881c']
                    : ['transparent', 'transparent']
                }
                useAngle={true}
                angle={45}
                style={styles.linearContainer}
                key={index?.toString()}>
                <TouchableOpacity
                  style={styles.btnFilter}
                  onPress={chooseFilterCate(index)}>
                  <Text style={styles.txtTitleGeneral}>{translate(it)}</Text>
                </TouchableOpacity>
              </LinearGradient>
            );
          })}
        </View>
        <FlatList
          ref={refFlatList}
          data={dataFilter}
          renderItem={renderItem}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          contentContainerStyle={getHeightItem()}
        />
        <TouchableOpacity style={styles.btnConfirm}>
          <Text style={styles.txtConfirm}>Xác nhận</Text>
        </TouchableOpacity>
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
    paddingVertical: hp(2),
    backgroundColor: '#202630',
  },
  txtTitleGeneral: {
    fontFamily: Fonts.Open_Sans_Bold,
    color: '#fff',
    fontSize: wp(3.2),
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
    paddingVertical: hp(3),
    width: wp(90),
    marginRight: wp(5),
  },
  btnStyle: {paddingVertical: hp(1.3), paddingHorizontal: wp(3)},
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  btnFilter: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  linearContainer: {
    width: wp(24),
    height: hp(5),
    borderRadius: wp(5),
    borderWidth: 1,
    borderColor: '#fff',
  },
  btnConfirm: {
    alignSelf: 'center',
    paddingVertical: hp(2),
    backgroundColor: '#f23e51',
    borderRadius: wp(2),
    width: '95%',
    alignItems: 'center',
  },
  txtConfirm: {
    color: '#fff',
    fontFamily: Fonts.Open_Sans_Bold,
    fontSize: wp(3),
  },
  txtYearChoose: {
    color: '#fff',
    fontFamily: Fonts.Open_Sans_Semibold,
    fontSize: wp(5),
    marginBottom: hp(1),
    textAlign: 'center',
    width: '100%',
  },
  itemActive: {
    backgroundColor: '#ffffff4a',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: wp(1),
  },
});
