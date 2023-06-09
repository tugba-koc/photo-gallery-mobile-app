import {View, TouchableOpacity, Image, TextInput} from 'react-native';
import React from 'react';
import styles from './HeaderWBackButton.style';
import {useNavigation} from '@react-navigation/native';

type Props = {
  pressOut: () => void;
  bordered: boolean;
};

const HeaderWBackButton = ({pressOut, bordered}: Props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header_container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          resizeMode="cover"
          style={{
            height: 24,
            width: 30,
          }}
          source={require('../../assets/images/back.png')}
        />
      </TouchableOpacity>
      <View style={styles.search_section}>
        <TextInput
          autoFocus={false}
          onPressOut={pressOut}
          style={styles.input(bordered)}
          placeholder="Search products..."
          onChangeText={val => navigation.navigate('Home', {search: val})}
        />
      </View>
    </View>
  );
};

export default HeaderWBackButton;
