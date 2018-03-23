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
    height: 50,
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };
  }

  render() {
    const { containerStyle, textInputStyle, buttonStyle } = styles;
    const { term } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <Header
          centerComponent={{ text: 'Youtube Search', style: { color: '#fff' } }}
          outerContainerStyles={{ backgroundColor: '#E62117' }}
        />
        <View style={containerStyle}>
          <TextInput
            onChangeText={text => this.setState({ term: text })}
            value={term}
            style={textInputStyle}
          />
          <Button
            buttonStyle={buttonStyle}
            title="Search"
            onPress={() => console.log(this.state.term)}
          />
        </View>
      </View>
    );
  }
}

export default App;
