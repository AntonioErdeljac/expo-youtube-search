import React from 'react';
import { Text, View } from 'react-native';
import { Header } from 'react-native-elements';

const App = () => (
  <View style={{ flex: 1, backgroundColor: '#ddd' }}>
    <Header
      centerComponent={{ text: 'Youtube Search', style: { color: '#fff' } }}
      outerContainerStyles={{ backgroundColor: '#E62117' }}
    />
  </View>
);

export default App;
