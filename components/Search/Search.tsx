import {View, Text, SectionList, FlatList} from 'react-native';
import styles from './Search.style';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {selectSearchQueryList} from '../../redux/selectors';

const Search = () => {
  const searchQueryList = useSelector(selectSearchQueryList);

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: '#EAEAEA'}}>
      <View style={styles.container}>
        <View style={styles.last_search_container}>
          <Text style={styles.last_search}>Last search</Text>
          <Text style={styles.clean}>Clean</Text>
        </View>
        {searchQueryList.slice(1, 6).map((el, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.title}>{el.item}</Text>
          </View>
        ))}
        {searchQueryList.length > 5 ? (
          <Text style={styles.title}>...</Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default Search;
