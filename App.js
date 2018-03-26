import React from 'react';
import { View } from 'react-native';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import AppHeader from './components/AppHeader';

const API_KEY = 'AIzaSyBJaQxYRHYHlpgiWTLpXSwS2NONkTO8ZWU';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      isLoading: false,
    };

    this.onPressSearch = this.onPressSearch.bind(this);
  }

  onPressSearch(term) {
    this.setState({ isLoading: true });
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({ videos, isLoading: false });
    });
  }

  render() {
    const { isLoading } = this.state;

    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <AppHeader
          headerText="Youtube Search"
        />
        <SearchBar
          isLoading={isLoading}
          onPressSearch={this.onPressSearch}
        />
      </View>
    );
  }
}

export default App;
