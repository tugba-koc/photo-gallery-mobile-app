import {View, Text, Image} from 'react-native';
import styles from './Error.style';
import React from 'react';

type Props = {
  error: string;
};

const Error = (props: Props) => {
  const {error} = props;

  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={{
          height: 80,
          width: 80,
        }}
        source={require('../../assets/images/server-error.png')}
      />
      <Text style={styles.bold}>{error}</Text>
      <Text style={styles.normal}>
        We are currently unable to fulfill your request. Please try again later.
      </Text>
    </View>
  );
};

export default Error;
