import {POSTER} from '@assets';
import {Fonts} from '@resources';
import React from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const ItemPopular = (props: any) => {
  let a: number = 3.3;
  return (
    <View style={styles.container}>
      <Image
        source={POSTER}
        style={{width: '100%', height: '85%', borderRadius: wp(1)}}
      />
      <Text style={styles.nameMovie}>Justice League</Text>
      <Text style={styles.yearTxt}>2021</Text>
      <Text
        style={[
          styles.starView,
          {backgroundColor: a > 4.0 ? '#f23e51' : '#f1a808'},
        ]}>
        {(Math.round(a * 100) / 100).toFixed(1)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width: wp(30), height: hp(25)},
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
    top: -hp(1),
    paddingHorizontal: wp(2.5),
    paddingVertical: hp(0.5),
    alignSelf: 'center',
  },
});
