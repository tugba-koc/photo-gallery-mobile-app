import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectError, selectItems, selectLoading} from '../../redux/selectors';
import {getItemRequest} from '../../redux/actions';
import SearchCard from '../SearchCard/SearchCard';
import Error from '../Error/Error';
import styles from './SearchList.style';

const SearchList = () => {
  const dispatch = useDispatch();
  const [filteredList, setFilteredList] = useState([]);

  const items = useSelector(selectItems);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  React.useEffect(() => {
    dispatch(getItemRequest());
    setFilteredList(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <Error error={error} />;
  }
  if (loading) {
    return <ActivityIndicator size="large" color="#fa8c16" />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        numColumns="2"
        data={items}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => <SearchCard item={item.data} />}
      />
    </View>
  );
};

export default SearchList;
