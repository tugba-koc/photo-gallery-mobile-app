import {View, Text} from 'react-native';
import styles from './Search.style';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderWBackButton from '../../components/HeaderWithBackButton/HeaderWBackButton';

const Search = ({navigation}) => {
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: '#EAEAEA'}}>
      <HeaderWBackButton navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.last_search_container}>
          <Text style={styles.last_search}>Last search</Text>
          <Text style={styles.clean}>Clean</Text>
        </View>
        <View>
          <Text>deneme</Text>
          <Text>deneme</Text>
          <Text>deneme</Text>
          <Text>deneme</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Search;
