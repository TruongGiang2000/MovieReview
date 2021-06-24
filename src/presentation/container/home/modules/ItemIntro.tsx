import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {IconImage} from '@components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {POSTER} from '@assets';
import {Fonts} from '@resources';
import StarRating from 'react-native-star-rating';
export const ItemIntro = (props: any) => {
  return (
    <View style={styles.container}>
      <IconImage source={POSTER} style={styles.poster} resizeMode={'cover'} />
      <View
        style={{
          position: 'absolute',
          bottom: hp(2),
          left: wp(3),
        }}>
        <Text
          style={{
            fontFamily: Fonts.Open_Sans_Bold,
            fontSize: wp(4),
            color: '#fff',
          }}>
          Justice Leaguae
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: Fonts.Open_Sans_Regular,
              fontSize: wp(3),
              color: '#fff',
            }}>
            2021
          </Text>
          <StarRating
            maxStars={5}
            disabled={false}
            emptyStar={'ios-star-outline'}
            fullStar={'ios-star'}
            halfStar={'ios-star-half'}
            iconSet={'Ionicons'}
            fullStarColor={'red'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(75),
    height: hp(15),
    marginTop: hp(2),
    borderRadius: wp(2),
    overflow: 'hidden',
  },
  poster: {
    width: '100%',
    height: '100%',
  },
  viewAbsolute: {},
});
