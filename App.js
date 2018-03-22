import React from 'react';
import { View, TextInput } from 'react-native';
import { Header, Button } from 'react-native-elements';

const styles = {
  containerStyle: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
  textInputStyle: {
    flex: 1,
  },
  buttonStyle: {
    height: 30,
    marginBottom: 8,
  },
};

const App = () => {
  const { containerStyle, textInputStyle, buttonStyle } = styles;
  return (
    <View style={{ flex: 1, backgroundColor: '#ddd' }}>
      <Header
        centerComponent={{ text: 'Youtube Search', style: { color: '#fff' } }}
        outerContainerStyles={{ backgroundColor: '#E62117' }}
      />
      <View style={containerStyle}>
        <TextInput
          style={textInputStyle}
        />
        <Button
          buttonStyle={buttonStyle}
          title="Search"
          onPress={() => console.log('test')}
        />
      </View>
    </View>
  );
};

export default App;
