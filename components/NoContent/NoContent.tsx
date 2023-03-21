import {View, Image, Text} from 'react-native';
import styles from './NoContent.style';
import React from 'react';

const NoContent = () => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={{
          height: 60,
          width: 60,
        }}
        source={require('../../assets/images/no-content.png')}
      />
      <Text style={styles.text_bold}>The result can not be found.</Text>
      <Text style={styles.text_normal}>
        Please try again with different query.
      </Text>
    </View>
  );
};

export default NoContent;
