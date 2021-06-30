import {Fonts, Settings} from '@resources';
import React from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const ItemPopular = (props: any) => {
  const {name, year, rating, poster, onPress, containerStyle} = props;
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Image source={poster} style={styles.poster} />
      <Text style={styles.nameMovie} numberOfLines={2}>
        {name}
      </Text>
      <Text style={styles.yearTxt}>{year}</Text>
      <Text
        style={[
          styles.starView,
          {
            backgroundColor:
              rating >= Settings.starHigh ? '#f23e51' : '#f1a808',
          },
        ]}>
        {(Math.round((rating || 0) * 100) / 100).toFixed(1)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(30),
    marginRight: wp(3),
    height: hp(33),
  },
  nameMovie: {
    color: '#fff',
    fontFamily: Fonts.Open_Sans_Regular,
    fontSize: wp(3),
    marginVertical: hp(0.5),
  },
  yearTxt: {
    color: '#4c5860',
    fontSize: wp(2.5),
    fontFamily: Fonts.Open_Sans_Regular,
  },
  starView: {
    color: '#fff',
    fontFamily: Fonts.Open_Sans_Regular,
    borderRadius: wp(4),
    position: 'absolute',
    fontSize: wp(2),
    paddingHorizontal: wp(2.5),
    paddingVertical: hp(0.5),
    alignSelf: 'center',
  },
  poster: {width: '100%', height: '75%', borderRadius: wp(1), marginTop: hp(1)},
});
