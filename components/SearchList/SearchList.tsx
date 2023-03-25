import {View, FlatList, ActivityIndicator, ListRenderItem} from 'react-native';
import React, {useEffect} from 'react';
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
import {IItem, Item} from '../../types';
import {GetItemFilter, GetItemRequest} from '../../redux/types';

type Props = {
  isLoaded: boolean;
  searchDirected: string;
};

const SearchList = ({isLoaded, searchDirected}: Props) => {
  const dispatch = useDispatch();

  const items = useSelector(selectItems);
  const filteredItems = useSelector(selectFilteredItems);
  const searchQuery = useSelector(selectSearchQuery);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (searchDirected) {
      dispatch<GetItemFilter>(getItemFilter({query: searchDirected}));
    }
  }, [searchDirected]);

  React.useEffect(() => {
    dispatch<GetItemRequest>(getItemRequest());
  }, []);

  const renderItem: ListRenderItem<Item> = ({item}) => {
    return <SearchCard item={item.data} />;
  };

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
          numColumns={2}
          // the design should be like search text is available or not
          data={searchQuery ? filteredItems : items}
          keyExtractor={(item: IItem, index: number) => index.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default SearchList;
