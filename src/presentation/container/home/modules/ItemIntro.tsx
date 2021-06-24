import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {IconImage} from '@components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {POSTER} from '@assets';
import {Colors, Fonts} from '@resources';
import StarRating from 'react-native-star-rating';
export const ItemIntro = (props: any) => {
  return (
    <View style={styles.container}>
      <IconImage source={POSTER} style={styles.poster} resizeMode={'cover'} />
      <View style={styles.viewCover} />
      <View style={styles.viewAbsolute}>
        <Text style={styles.titleMovie}>Justice Leaguae</Text>
        <View style={styles.row}>
          <Text style={styles.txtYear}>2021</Text>
          <StarRating
            maxStars={5}
            disabled={true}
            starSize={wp(2.5)}
            containerStyle={{marginLeft: wp(0.2)}}
            fullStarColor={'#ffd50a'}
            emptyStarColor={'#ffd50a'}
            rating={3}
            starStyle={{margin: wp(0.2)}}
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
  viewAbsolute: {
    position: 'absolute',
    bottom: hp(1),
    left: wp(3),
  },
  titleMovie: {
    fontFamily: Fonts.Open_Sans_Bold,
    fontSize: wp(4),
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtYear: {
    fontFamily: Fonts.Open_Sans_Regular,
    fontSize: wp(2.5),
    color: '#fff',
  },
  viewCover: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0000004f',
    position: 'absolute',
  },
});
