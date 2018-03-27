import React from 'react';
import { ScrollView, View } from 'react-native';
import VideoListItem from './VideoListItem';

const styles = {
  container: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
};

const VideoList = (props) => {
  const { videos } = props;

  const videoItems = videos.map(video => (
    <VideoListItem video={video} />
  ));

  return (
    <ScrollView>
      <View style={styles.container}>
        {videoItems}
      </View>
    </ScrollView>
  );
};

export default VideoList;
