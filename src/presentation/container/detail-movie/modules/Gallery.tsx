import {IconImage} from '@components';
import {translate} from '@helpers';
import {App, Fonts} from '@resources';
import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import lodash from 'lodash';
export const Gallery = (props: any) => {
  const renderItem = ({item}: any) => {
    return (
      <IconImage
        containerStyle={{
          width: hp(30) * item?.aspect_ratio,
          height: hp(30),
          marginRight: wp(3),
        }}
        source={{uri: App.linkPoster + item?.file_path}}
        style={styles.styleImg}
        resizeMode={'contain'}
      />
    );
  };
  return !lodash.isEmpty(props?.data) ? (
    <FlatList
      data={props?.data}
      renderItem={renderItem}
      horizontal={true}
      contentContainerStyle={styles.flatListContainerItem}
    />
  ) : (
    <Text style={styles.txtContentGeneral}>{`${translate('updating')}.`}</Text>
  );
};
const styles = StyleSheet.create({
  containerItem: {
    width: wp(30),
    height: hp(20),
    marginRight: wp(3),
  },
  styleImg: {
    width: '100%',
    height: '100%',
    borderRadius: wp(2),
  },
  flatListContainerItem: {
    marginTop: hp(2),
  },
  txtContentGeneral: {
    color: '#fff',
    fontSize: wp(3),
    fontFamily: Fonts.OpenSans_Light,
    marginTop: hp(0.5),
    opacity: 0.9,
    marginLeft: wp(1.5),
  },
});
