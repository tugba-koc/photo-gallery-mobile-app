import {View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import SearchList from '../../components/SearchList/SearchList';
import styles from './Home.style';
import Categories from '../../components/Categories/Categories';
import {useRoute} from '@react-navigation/native';
import Error from '../../components/Error/Error';
import {useSelector} from 'react-redux';
import {selectError} from '../../redux/selectors';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const error = useSelector(selectError);
  const route = useRoute();

  let search;
  if (route.params) {
    search = route.params.search;
  }

  return (
    <View style={styles.container}>
      <Header searchDirected={search} setIsLoaded={setIsLoaded} />
      {error ? (
        <Error error={error} />
      ) : (
        <>
          <Categories />
          <SearchList searchDirected={search} isLoaded={isLoaded} />
        </>
      )}
    </View>
  );
};

export default Home;
