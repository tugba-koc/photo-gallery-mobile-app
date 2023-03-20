import {View} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import SearchList from '../../components/SearchList/SearchList';
import styles from './Home.style';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <SearchList navigation={navigation} />
    </View>
  );
};

export default Home;
