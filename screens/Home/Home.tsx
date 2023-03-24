import {View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import SearchList from '../../components/SearchList/SearchList';
import styles from './Home.style';

const Home = ({navigation, route}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  let search;
  if (route.params) {
    search = route.params.search;
  }

  return (
    <View style={styles.container}>
      <Header searchDirected={search} setIsLoaded={setIsLoaded} />
      <SearchList
        searchDirected={search}
        isLoaded={isLoaded}
        navigation={navigation}
      />
    </View>
  );
};

export default Home;
