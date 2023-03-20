import {View, TextInput, Text} from 'react-native';
import styles from './Header.style';
import React, {useState} from 'react';

const Header = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.searchSection}>
      <TextInput
        onChangeText={value => setSearchText(value)}
        style={styles.input}
        placeholder="Ürün ara"
      />
    </View>
  );
};

export default Header;
