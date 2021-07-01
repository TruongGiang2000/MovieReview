import {App, Fonts} from '@resources';
import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Video from 'react-native-video';
import {Thumbnail} from 'react-native-thumbnail-video';
import lodash from 'lodash';
import {translate} from '@helpers';
export const VideoMovie = (props: any) => {
  const {data} = props;

  const navigateYoutube = (videoID: string) => () =>
    props?.navigation?.navigate('YoutubeFullScreen', {videoID});

  const renderItem = ({item}: any) => {
    return (
      <Thumbnail
        url={App.linkVideo + item?.key}
        containerStyle={styles.containerVideo}
        showPlayIcon={true}
        imageWidth={wp(75)}
        imageHeight={hp(25)}
        onPress={navigateYoutube(item?.key)}
      />
    );
  };

  return !lodash.isEmpty(data) ? (
    <FlatList
      data={data}
      renderItem={renderItem}
      horizontal={true}
      contentContainerStyle={styles.flatListContainer}
    />
  ) : (
    <Text style={styles.txtContentGeneral}>{`${translate('updating')}.`}</Text>
  );
};
const styles = StyleSheet.create({
  containerVideo: {
    marginRight: wp(3),
  },
  flatListContainer: {
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
