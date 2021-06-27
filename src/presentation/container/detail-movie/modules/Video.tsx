import {App} from '@resources';
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Video from 'react-native-video';
import {Thumbnail} from 'react-native-thumbnail-video';
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
  if (!data) return;
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      horizontal={true}
      contentContainerStyle={styles.flatListContainer}
    />
  );
};
const styles = StyleSheet.create({
  containerVideo: {
    marginRight: wp(3),
  },
  flatListContainer: {
    marginTop: hp(2),
  },
});
