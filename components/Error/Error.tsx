import {View, Text} from 'react-native';
import React from 'react';

type Props = {
  error: string;
};

const Error = (props: Props) => {
  const {error} = props;

  return (
    <View>
      <Text>{error}</Text>
    </View>
  );
};

export default Error;
