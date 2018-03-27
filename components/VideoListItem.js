import React from 'react';
import { View, Text, Image } from 'react-native';

const styles = {
  imageStyle: {
    alignSelf: 'stretch',
    height: 180,
  },
};

const VideoListItem = (props) => {
  const { video } = props;

  return (
    <View>
      <Image style={styles.imageStyle} source={{ uri: video.snippet.thumbnails.medium.url }} />
      <Text>{video.snippet.title}</Text>
      <Text>{video.snippet.channelTitle}</Text>
      <Text>{video.snippet.description}</Text>
    </View>
  );
};

export default VideoListItem;
