import {View, Text, TouchableOpacity} from 'react-native';
import styles from './AddToCart.style';
import React from 'react';

type Props = {
  price: number;
};

const AddToCart = (props: Props) => {
  const {price} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.amount}>{price} $</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>AddToCart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddToCart;
