import React from 'react';
import { View } from 'react-native';

import SearchBar from './components/SearchBar';
import AppHeader from './components/AppHeader';

class App extends React.Component {
  constructor(props) {
    super(props);

    console.log('lala');
    this.onPressSearch = this.onPressSearch.bind(this);
  }

  onPressSearch(term) {
    // console.log(this);
    console.log(term);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <AppHeader
          headerText="Youtube Search"
        />
        <SearchBar
          onPressSearch={this.onPressSearch}
        />
      </View>
    );
  }
}

export default App;
