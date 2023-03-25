import {View, Text, FlatList, Pressable} from 'react-native';
import React, {useState} from 'react';
import {CATEGORIES} from '../../constants';
import styles from './Categories.style';

type RenderType = {
  item: Item;
  index: string;
};

type Item = {
  id: number;
  name: string;
};

const Categories = () => {
  const [pressed, setPressed] = useState<string>('');

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={CATEGORIES}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: Item) => item.id}
        renderItem={({item, index}: RenderType) => (
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
