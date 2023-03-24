import {View, Text, FlatList, Pressable} from 'react-native';
import React, {useState} from 'react';
import {CATEGORIES} from '../../constants';
import styles from './Categories.style';

const Categories = () => {
  const [pressed, setPressed] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={CATEGORIES}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View>
            <Pressable
              onPress={() => setPressed(index)}
              style={[styles.wrapper, index === pressed ? styles.bg : '']}>
              <Text style={index === pressed ? styles.white : styles.grey}>
                {item.name}
              </Text>
            </Pressable>
          </View>
        )}
      />
    </View>
  );
};

export default Categories;
