import React from 'react';
import {View} from 'react-native';
import Header from './components/Header/Header';
import styles from './App.style';
import SearchList from './components/SearchList/SearchList';
import store from './redux/store';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Header />
        <SearchList />
      </View>
    </Provider>
  );
}

export default App;
