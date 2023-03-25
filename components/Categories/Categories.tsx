import {View, Text, FlatList, Pressable, ListRenderItem} from 'react-native';
import React, {useState} from 'react';
import {CATEGORIES} from '../../constants';
import styles from './Categories.style';

type RenderType = {
  item: ItemType;
  index: string;
};

type ItemType = {
  id: string;
  name: string;
};

const Categories = () => {
  const [pressed, setPressed] = useState<number>();

  const renderItem: ListRenderItem<ItemType> = ({item, index}) => {
    return (
      <View>
        <Pressable
          onPress={() => setPressed(index)}
          style={[styles.wrapper, index === pressed ? styles.bg : '']}>
          <Text style={index === pressed ? styles.white : styles.grey}>
            {item.name}
          </Text>
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList<ItemType>
        horizontal
        data={CATEGORIES}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: ItemType) => item.id}
        renderItem={renderItem}
        /*         renderItem={({item, index}: RenderType) => (
          <View>
            <Pressable
              onPress={() => setPressed(index)}
              style={[styles.wrapper, index === pressed ? styles.bg : '']}>
              <Text style={index === pressed ? styles.white : styles.grey}>
                {item.name}
              </Text>
            </Pressable>
          </View>
        )} */
      />
    </View>
  );
};

export default Categories;
