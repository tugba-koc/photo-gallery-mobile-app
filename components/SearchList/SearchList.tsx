import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectError,
  selectFilteredItems,
  selectItems,
  selectLoading,
  selectSearchQuery,
} from '../../redux/selectors';
import {getItemFilter, getItemRequest} from '../../redux/actions';
import SearchCard from '../SearchCard/SearchCard';
import Error from '../Error/Error';
import styles from './SearchList.style';
import NoContent from '../NoContent/NoContent';

const SearchList = ({navigation, isLoaded, searchDirected}) => {
  const dispatch = useDispatch();

  const items = useSelector(selectItems);
  const filteredItems = useSelector(selectFilteredItems);
  const searchQuery = useSelector(selectSearchQuery);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (searchDirected) {
      dispatch(getItemFilter({query: searchDirected}));
    }
  }, [searchDirected]);

  React.useEffect(() => {
    dispatch(getItemRequest());
  }, []);

  if (error) {
    return <Error error={error} />;
  } else if (searchQuery && filteredItems.length === 0) {
    return <NoContent />;
  }
  return (
    <View style={styles.container}>
      {!isLoaded || loading ? (
        <ActivityIndicator size="large" color="#fa8c16" />
      ) : (
        <FlatList
          numColumns="2"
          // the design should be like search text is available or not
          data={searchQuery ? filteredItems : items}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <SearchCard item={item.data} navigation={navigation} />
          )}
        />
      )}
    </View>
  );
};

export default SearchList;
