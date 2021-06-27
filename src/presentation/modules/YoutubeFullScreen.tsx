import {App} from '@resources';
import React from 'react';
import {StyleSheet} from 'react-native';
import YouTube from 'react-native-youtube';
export const YoutubeFullScreen = (props: any) => {
  const videoID = props?.route?.params?.videoID;
  return (
    <YouTube
      style={styles.container}
      videoId={videoID}
      apiKey={App.api_key_youtute}
      play={true}
    />
  );
};
const styles = StyleSheet.create({
  container: {position: 'absolute', left: 0, right: 0, top: 0, bottom: 0},
});
