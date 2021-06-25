import {IconImage} from '@components';
import {App, Fonts} from '@resources';
import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const Cast = (props: any) => {
  const renderItem = ({item}: any) => {
    return (
      <View style={styles.container}>
        <IconImage
          containerStyle={styles.imgContainer}
          source={{uri: App.linkPoster + item?.profile_path}}
          style={styles.imgStyle}
          resizeMode={'cover'}
        />
        <Text style={styles.txtName} numberOfLines={2}>
          {item?.name}
        </Text>
      </View>
    );
  };
  return (
    <FlatList
      data={props?.data}
      renderItem={renderItem}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp(20),
    height: hp(20),
    marginRight: wp(3),
    marginTop: hp(1),
  },
  imgContainer: {
    width: '100%',
    height: '70%',
  },
  imgStyle: {width: '100%', height: '95%', borderRadius: wp(1.5)},
  txtName: {
    color: '#fff',
    fontSize: wp(3),
    fontFamily: Fonts.Open_Sans_Regular,
    textAlign: 'center',
  },
});
