import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';

const styles = {
  cardStyle: {
    padding: 5,
  },
  contentStyle: {
    flex: 1,
    padding: 5,
  },
  videoTitleStyle: {
    fontSize: 13,
    marginBottom: 5,
  },
  channelTitleStyle: {
    fontSize: 11,
    color: '#777',
    marginBottom: 5,
    alignSelf: 'flex-end',
  },
  descriptionStyle: {
    fontSize: 11,
    alignSelf: 'center',
  },
  imageStyle: {
    alignSelf: 'stretch',
    height: 180,
  },
};

const VideoListItem = (props) => {
  const { video } = props;

  return (
    <View>
      <Card containerStyle={styles.cardStyle}>
        <Image style={styles.imageStyle} source={{ uri: video.snippet.thumbnails.medium.url }} />
        <View style={styles.contentStyle}>
          <Text style={styles.videoTitleStyle}>{video.snippet.title}</Text>
          <Text style={styles.channelTitleStyle}>{video.snippet.channelTitle}</Text>
          <Text style={styles.descriptionStyle}>{video.snippet.description}</Text>
        </View>
      </Card>
    </View>
  );
};

export default VideoListItem;
