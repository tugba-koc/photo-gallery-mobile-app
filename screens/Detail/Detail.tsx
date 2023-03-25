import {
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useState} from 'react';
import styles from './Detail.style';
import {DETAIL_IMAGES, ITEM_DESC} from '../../constants';
import SlideItem from '../../components/SlideItem/SlideItem';
import AddToCart from '../../components/AddToCart/AddToCart';
import HeaderWBackButton from '../../components/HeaderWithBackButton/HeaderWBackButton';
import Search from '../../components/Search/Search';
import {useRoute} from '@react-navigation/native';
import {selectError} from '../../redux/selectors';
import {useSelector} from 'react-redux';
import Error from '../../components/Error/Error';

const {width} = Dimensions.get('screen');

const Detail = () => {
  const route = useRoute();
  const {cardItem} = route.params;
  const error = useSelector(selectError);
  const [readMore, setReadMore] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<string>('');
  const [isShownDetailScreen, setIsShownDetailScreen] = useState<boolean>(true);

  const pressOut = () => {
    setIsShownDetailScreen(false);
  };

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: '#EAEAEA'}}>
      {isShownDetailScreen && <AddToCart price={cardItem.pwls} />}
      <ScrollView>
        {/* Header */}
        <HeaderWBackButton pressOut={pressOut} bordered={isShownDetailScreen} />
        {error ? (
          <Error error={error} />
        ) : isShownDetailScreen ? (
          <>
            <View
              style={{
                position: 'relative',
                marginLeft: 'auto',
                marginRight: 20,
              }}>
              <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
                <Image
                  resizeMode="contain"
                  style={{
                    height: 24,
                    width: 24,
                  }}
                  source={
                    isLiked
                      ? require('../../assets/images/heart-full.png')
                      : require('../../assets/images/heart-empty.jpeg')
                  }
                />
              </TouchableOpacity>
            </View>
            {/* Slider Start */}
            <FlatList
              style={{marginTop: 20}}
              onScroll={e => {
                const x = e.nativeEvent.contentOffset.x;
                setCurrentIndex((x / width).toFixed(0));
              }}
              pagingEnabled
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToAlignment="center"
              data={DETAIL_IMAGES}
              keyExtractor={item => item.id}
              renderItem={({item}) => <SlideItem img_url={item.url} />}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                width: width,
                alignItems: 'center',
              }}>
              {DETAIL_IMAGES.map((dot, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      width: Number(currentIndex) === index ? 10 : 8,
                      height: Number(currentIndex) === index ? 10 : 8,
                      borderRadius: 4,
                      backgroundColor:
                        Number(currentIndex) === index ? '#fa8c16' : 'grey',
                      marginLeft: 5,
                      marginTop: 14,
                    }}
                  />
                );
              })}
            </View>
            {/* Slider End */}
            <View style={styles.description}>
              <Text style={styles.title}>{cardItem.title}</Text>
              <View>
                <View style={styles.sub_description}>
                  <View style={styles.score_container}>
                    <Image
                      resizeMode="cover"
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
                {/* Show Less / Read More */}
                <View style={styles.item_description_wrapper}>
                  <Text>
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
          </>
        ) : (
          <Search />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
