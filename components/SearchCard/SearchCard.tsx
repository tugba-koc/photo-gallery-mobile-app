import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IItem} from '../../types';
import styles from './SearchCard.style';
import {useNavigation} from '@react-navigation/native';

type Props = {
  item: IItem;
};

const dimension = Dimensions.get('screen');

const SearchCard = (props: Props) => {
  const {item} = props;
  const navigation = useNavigation();

  return (
    <View style={styles.image_container_style}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Detail', {
            cardItem: item,
          })
        }>
        <Image
          resizeMode="cover"
          style={{
            height: dimension.height / 5,
            width: '100%',
            borderRadius: 8,
          }}
          source={
            item.thumbnail.includes('http')
              ? {
                  uri: `${item.thumbnail}`,
                }
              : require('../../assets/images/shoe-placeholder.jpeg')
          }
        />
        <View style={styles.description}>
          <Text style={styles.title}>{item.title}</Text>
          <View>
            <View style={styles.sub_description}>
              <View style={styles.score_container}>
                <Image
                  resizeMode="cover"
                  style={{
                    height: 12,
                    width: 12,
                  }}
                  source={require('../../assets/images/star.png')}
                />
                <Text style={styles.score}>{item.score} point</Text>
              </View>
              {item.num_comments === 0 ? null : (
                <Text style={styles.num_comment}>
                  ({item.num_comments} comment)
                </Text>
              )}
            </View>
            <Text style={styles.amount}>{item.pwls} $</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchCard;
