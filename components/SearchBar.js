import React from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

const styles = {
  containerStyle: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
  textInputStyle: {
    flex: 1,
    borderBottomColor: '#000',
  },
  buttonStyle: {
    height: 50,
  },
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
    };
  }

  render() {
    const { containerStyle, textInputStyle, buttonStyle } = styles;
    const { term } = this.state;
    const { onPressSearch } = this.props;

    return (
      <View style={containerStyle}>
        <TextInput
          onChangeText={text => this.setState({ term: text })}
          value={term}
          style={textInputStyle}
        />
        <Button
          buttonStyle={buttonStyle}
          title="Search"
          onPress={() => onPressSearch(term)}
        />
      </View>
    );
  }
}

export default SearchBar;
