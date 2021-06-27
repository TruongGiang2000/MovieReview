import {IconImage} from '@components';
import {App} from '@resources';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
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
  return (
    <FlatList
      data={props?.data}
      renderItem={renderItem}
      horizontal={true}
      contentContainerStyle={styles.flatListContainerItem}
    />
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
});
