import {View, Image, Dimensions} from 'react-native';
import styles from './SlideItem.style';
import React from 'react';

type Props = {
  img_url: string;
};

const {width, height} = Dimensions.get('screen');

const SlideItem = (props: Props) => {
  const {img_url} = props;

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{width, height, alignItems: 'center'}}>
      <Image
        resizeMode="contain"
        style={{width: width, height: height / 2}}
        source={{
          uri: `${img_url}`,
        }}
      />
    </View>
  );
};

export default SlideItem;
