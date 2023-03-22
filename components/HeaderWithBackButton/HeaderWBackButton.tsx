import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import styles from './HeaderWBackButton.style';

const HeaderWBackButton = ({navigation, pressOut, bordered}) => {
  return (
    <View style={styles.header_container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          resizeMode="cover"
          style={{
            height: 24,
            width: 24,
          }}
          source={require('../../assets/images/back.png')}
        />
      </TouchableOpacity>
      <View style={styles.search_section}>
        <TextInput
          autoFocus={false}
          onPressOut={pressOut}
          style={styles.input(bordered)}
          placeholder="Ürün ara"
        />
      </View>
    </View>
  );
};

export default HeaderWBackButton;
