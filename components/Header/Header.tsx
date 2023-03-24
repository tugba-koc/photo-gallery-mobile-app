import {View, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Header.style';
import React, {useEffect, useState} from 'react';
import {getItemFilter} from '../../redux/actions';
import {useDispatch} from 'react-redux';
import {TIME_OUT} from '../../constants';

type Props = {
  setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  searchDirected: string;
};

const Header = (props: Props) => {
  const {setIsLoaded, searchDirected} = props;
  const [searchText, setSearchText] = useState<string>('');
  const dispatch = useDispatch();

  // Debouncing search
  useEffect(() => {
    setIsLoaded(false);
    const debouncingSearch = setTimeout(() => {
      dispatch(getItemFilter({query: searchText}));
      setIsLoaded(true);
    }, TIME_OUT);
    return () => clearTimeout(debouncingSearch);
  }, [dispatch, searchText, setIsLoaded]);

  const handleChange = (val: string) => {
    setSearchText(val);
  };

  return (
    <SafeAreaView>
      <View style={styles.search_section}>
        <TextInput
          onChangeText={value => handleChange(value.trim())}
          style={styles.input}
          placeholder="Search products..."
          defaultValue={searchDirected}
        />
      </View>
    </SafeAreaView>
  );
};

export default Header;
