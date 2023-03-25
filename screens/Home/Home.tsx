import {View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import SearchList from '../../components/SearchList/SearchList';
import styles from './Home.style';
import Categories from '../../components/Categories/Categories';
import {useRoute} from '@react-navigation/native';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const route = useRoute();

  let search;
  if (route.params) {
    search = route.params.search;
  }

  return (
    <View style={styles.container}>
      <Header searchDirected={search} setIsLoaded={setIsLoaded} />
      <Categories />
      <SearchList searchDirected={search} isLoaded={isLoaded} />
    </View>
  );
};

export default Home;
