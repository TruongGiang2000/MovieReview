import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './DetailMovie.styles';
import {DetailMovieLogic} from './DetailMovie.logic';
import {ARROW} from '@assets';
import {IconImage} from '@components';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import moment from 'moment';
import {parseMinuteToHour, translate} from '@helpers';
import {Colors, Fonts} from '@resources';
import {Cast, Gallery, VideoMovie} from './modules';
export const DetailMovie = (props: any) => {
  const {} = props;
  const {
    goBack,
    uriBackDrop,
    detailMovie,
    countries,
    heightBackDrop,
    year,
    creditsMovie,
    galleryMovie,
    videoMovie,
  } = DetailMovieLogic(props);

  return (
    <View style={styles.container}>
      <IconImage
        source={{uri: uriBackDrop}}
        style={styles.fullSizeImg}
        resizeMode={'cover'}
        containerStyle={{
          width: wp(100),
          height: heightBackDrop,
        }}
      />
      <IconImage
        source={ARROW}
        containerStyle={styles.iconBack}
        isTouch={true}
        onPress={goBack}
      />
      <View style={[styles.viewCover, {height: heightBackDrop}]} />
      <View style={[styles.viewInfo, {height: hp(110) - heightBackDrop}]}>
        <ScrollView>
          <Text style={styles.nameMovie}>{detailMovie?.title}</Text>
          {renderCate(detailMovie)}
          <View style={styles.viewCate}>
            <Text style={styles.txtGeneral}>{`${countries?.name} | `}</Text>
            <Text style={styles.txtGeneral}>{`${year} | `}</Text>
            <Text style={styles.txtGeneral}>
              {parseMinuteToHour(detailMovie?.runtime)}
            </Text>
          </View>
          <Text style={styles.txtTitleGeneral}>{translate('over_view')}</Text>
          <Text style={styles.txtContentGeneral}>{detailMovie?.overview}</Text>
          <Text style={styles.txtTitleGeneral}>{translate('cast')}</Text>
          <Cast data={creditsMovie?.cast} />
          <Text style={styles.txtTitleGeneral}> {translate('gallery')}</Text>
          <Gallery data={galleryMovie?.posters} />
          <Text style={styles.txtTitleGeneral}> {translate('trailer')}</Text>
          <VideoMovie
            data={videoMovie?.results}
            navigation={props?.navigation}
          />
          <Text>aaaa</Text>
        </ScrollView>
      </View>
    </View>
  );
};
const renderCate = (detailMovie: any) => {
  return (
    <View style={styles.viewCate}>
      {detailMovie?.genres
        ?.filter((_it: any, index: number) => index < 3)
        ?.map((it: any, index: number) => (
          <Text
            key={index?.toString()}
            style={[
              styles.txtGeneral,
              {color: Colors.mainColor, fontFamily: Fonts.Open_Sans_Semibold},
            ]}>
            {index == 0 ? it?.name : ` - ${it?.name}`}
          </Text>
        ))}
    </View>
  );
};
