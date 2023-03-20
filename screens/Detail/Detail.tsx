import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import styles from './Detail.style';
import {DETAIL_IMAGES} from '../../constants';
import SlideItem from '../../components/SlideItem/SlideItem';

const Detail = ({route, navigation}) => {
  const {cardItem} = route.params;

  return (
    <SafeAreaView>
      <View style={styles.container}>
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

        {/* Slider */}
        {/* Reddit api call does not return a valid images list so a constant is created to show the slider.  */}
        <FlatList
          pagingEnabled
          horizontal
          snapToAlignment="center"
          data={DETAIL_IMAGES}
          keyExtractor={item => item.id}
          renderItem={({item}) => <SlideItem img_url={item.url} />}
        />
        <Text>{cardItem.title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
