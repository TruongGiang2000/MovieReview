import React from 'react';
import {FlatList, Text} from 'react-native';
import {ItemPopular} from '../../home/modules';
import moment from 'moment';
import {translate} from '@helpers';
import {App, Fonts} from '@resources';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import lodash from 'lodash';
export const RelateMovie = (props: any) => {
  const {data, navigation} = props;
  const renderItem = ({item}: any) => {
    const {title, release_date, vote_average, poster_path, id} = item;
    const year = !!release_date
      ? moment(release_date, 'yyyy-mm-dd').format('yyyy')
      : translate('coming_soon');
    const goToDetailMovie = (idMovie: number) => () =>
      navigation?.navigate('MovieDetail', {idMovie});
    return (
      <ItemPopular
        name={title}
        year={year || translate('coming_soon')}
        rating={vote_average / 2}
        poster={{uri: App.linkPoster + poster_path}}
        onPress={goToDetailMovie(id)}
      />
    );
  };
  return !lodash.isEmpty(data) ? (
    <FlatList
      data={data}
      renderItem={renderItem}
      numColumns={3}
      scrollEnabled={false}
      contentContainerStyle={styles.containerFlatlist}
    />
  ) : (
    <Text style={styles.txtContentGeneral}>{`${translate('updating')}.`}</Text>
  );
};
const styles = StyleSheet.create({
  containerFlatlist: {
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
