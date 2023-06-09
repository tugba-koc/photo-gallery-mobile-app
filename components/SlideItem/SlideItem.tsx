import {View, Image, Dimensions} from 'react-native';
import React from 'react';

type Props = {
  img_url: string;
};

const {width, height} = Dimensions.get('screen');

const SlideItem = (props: Props) => {
  const {img_url} = props;

  return (
    <View style={{width, height: height / 2.5, alignItems: 'center'}}>
      <Image
        resizeMode="contain"
        style={{width, height: height / 2.5}}
        source={{
          uri: `${img_url}`,
        }}
      />
    </View>
  );
};

export default SlideItem;
