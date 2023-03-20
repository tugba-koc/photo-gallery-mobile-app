import {View, TextInput, Text, SafeAreaView} from 'react-native';
import styles from './Header.style';
import React, {useState} from 'react';

const Header = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.search_section}>
        <TextInput
          onChangeText={value => setSearchText(value)}
          style={styles.input}
          placeholder="Ürün ara"
        />
      </View>
    </SafeAreaView>
  );
};

export default Header;
