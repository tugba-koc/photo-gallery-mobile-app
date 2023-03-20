import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IItem} from '../../types';
import styles from './SearchCard.style';

type Props = {
  item: IItem;
};

const dimension = Dimensions.get('screen');

const SearchCard = (props: Props) => {
  const {item} = props;

  return (
    <View style={styles.image_container_style}>
      <TouchableOpacity
      /*         onPress={() =>
            navigation.navigate('Detail', {
              movieItem: itemData,
            })
          } */
      >
        <Image
          resizeMode="cover"
          // eslint-disable-next-line react-native/no-inline-styles
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
          <View style={styles.main_description}>
            <View style={styles.sub_description}>
              <View style={styles.score_container}>
                <Image
                  resizeMode="cover"
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    height: 10,
                    width: 10,
                  }}
                  source={require('../../assets/images/star.png')}
                />
                <Text style={styles.score}>{item.score} point</Text>
              </View>

              <Text style={styles.num_comment}>
                ({item.num_comments} comment)
              </Text>
            </View>
            <Text style={styles.amount}>{item.pwls} $</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchCard;