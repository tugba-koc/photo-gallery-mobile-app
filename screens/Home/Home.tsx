import {View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import SearchList from '../../components/SearchList/SearchList';
import styles from './Home.style';

const Home = ({navigation}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <View style={styles.container}>
      <Header setIsLoaded={setIsLoaded} />
      <SearchList isLoaded={isLoaded} navigation={navigation} />
    </View>
  );
};

export default Home;
