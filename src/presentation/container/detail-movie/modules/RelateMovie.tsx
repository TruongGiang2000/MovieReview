import React from 'react';
import {FlatList} from 'react-native';
import {ItemPopular} from '../../home/modules';
import moment from 'moment';
import {translate} from '@helpers';
import {App} from '@resources';
import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
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
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      numColumns={3}
      scrollEnabled={false}
      contentContainerStyle={styles.containerFlatlist}
    />
  );
};
const styles = StyleSheet.create({
  containerFlatlist: {
    marginTop: hp(2),
  },
});
