import {IconImage} from '@components';
import {App} from '@resources';
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const Gallery = (props: any) => {
  const renderItem = ({item}: any) => {
    return (
      <IconImage
        containerStyle={styles.containerItem}
        source={{uri: App.linkPoster + item?.file_path}}
        style={styles.styleImg}
        resizeMode={'cover'}
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
    width: wp(70),
    height: hp(15),
    marginRight: wp(3),
  },
  styleImg: {
    width: '100%',
    height: '100%',
  },
  flatListContainerItem: {
    marginTop: hp(2),
  },
});
