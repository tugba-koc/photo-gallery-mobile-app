import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import styles from './Detail.style';
import {DETAIL_IMAGES, ITEM_DESC} from '../../constants';
import SlideItem from '../../components/SlideItem/SlideItem';
import AddToCart from '../../components/AddToCart/AddToCart';

const Detail = ({route, navigation}) => {
  const {cardItem} = route.params;
  const [readMore, setReadMore] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <SafeAreaView style={{height: '100%'}}>
      <AddToCart price={cardItem.pwls} />
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header_container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              resizeMode="cover"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                height: 24,
                width: 24,
              }}
              source={require('../../assets/images/back.png')}
            />
          </TouchableOpacity>
          <Header />
        </View>

        {/* Heart */}
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 20,
            marginTop: 20,
          }}>
          <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
            <Image
              resizeMode="contain"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                height: 24,
                width: 24,
              }}
              source={
                isLiked
                  ? require('../../assets/images/heart-full.png')
                  : require('../../assets/images/heart-empty.png')
              }
            />
          </TouchableOpacity>
        </View>

        {/* Slider */}
        {/* Reddit api call does not return a valid images list so a constant is created to show the slider.  */}
        <FlatList
          style={{marginTop: 20}}
          pagingEnabled
          horizontal
          snapToAlignment="center"
          data={DETAIL_IMAGES}
          keyExtractor={item => item.id}
          renderItem={({item}) => <SlideItem img_url={item.url} />}
        />
        <View style={styles.description}>
          <Text style={styles.title}>{cardItem.title}</Text>
          <View style={styles.main_description}>
            <View style={styles.sub_description}>
              <View style={styles.score_container}>
                <Image
                  resizeMode="cover"
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    height: 14,
                    width: 14,
                  }}
                  source={require('../../assets/images/star.png')}
                />
                <Text style={styles.score}>{cardItem.score} point</Text>
              </View>
              {cardItem.num_comments === 0 ? null : (
                <Text style={styles.num_comment}>
                  ({cardItem.num_comments} comment)
                </Text>
              )}
            </View>
            <Text style={styles.author}>
              Seçili Satıcı: {cardItem.author_fullname}
            </Text>
            <View style={styles.item_description_wrapper}>
              <Text style={styles.item_description}>
                {readMore ? ITEM_DESC : ITEM_DESC.slice(0, 120) + '...'}
              </Text>
              <Text
                style={styles.read_more}
                onPress={() => setReadMore(!readMore)}>
                {readMore ? 'Show Less' : 'Read More'}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
