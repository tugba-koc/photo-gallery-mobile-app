import {View, Text, Modal, Pressable} from 'react-native';
import styles from './Search.style';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {selectLastSearchItemsWithText} from '../../redux/reducers/items';
import {removeSearchQueryList} from '../../redux/actions';
import {useNavigation} from '@react-navigation/native';
import {RemoveSearchQueryList} from '../../redux/types';

const Search = () => {
  const navigation = useNavigation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const searchQueryList = useSelector(state =>
    selectLastSearchItemsWithText(state),
  );

  return (
    <>
      {/* Modal Start */}
      <View style={styles.centered_view}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setIsModalVisible(!isModalVisible);
          }}>
          <View style={styles.modal_content}>
            <View style={styles.modal_view}>
              <Text style={styles.modal_title}>PhotoGallery</Text>
              <Text style={styles.modal_text}>
                Are you sure to remove all searches?
              </Text>
              <View style={styles.button_container}>
                <Pressable
                  style={styles.button}
                  onPress={() => setIsModalVisible(!isModalVisible)}>
                  <Text style={styles.text_style}>CANCEL</Text>
                </Pressable>
                <Pressable
                  style={styles.button}
                  onPress={() => {
                    dispatch<RemoveSearchQueryList>(removeSearchQueryList());
                    setIsModalVisible(!isModalVisible);
                  }}>
                  <Text style={styles.text_style}>REMOVE ALL</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      {/* Modal End */}
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.last_search_container}>
            <Text style={styles.last_search}>Last search</Text>
            {searchQueryList.length ? (
              <Text
                onPress={() => setIsModalVisible(true)}
                style={styles.clean}>
                Clean
              </Text>
            ) : null}
          </View>
          {searchQueryList.slice(0, 5).map((el: string, index: number) => (
            <View key={index} style={styles.item}>
              <Text
                onPress={() =>
                  navigation.navigate('Home', {
                    search: el,
                  })
                }>
                {el}
              </Text>
            </View>
          ))}
          {searchQueryList.length > 5 ? (
            <View style={styles.item}>
              <Text>...</Text>
            </View>
          ) : null}
          {!searchQueryList.length && (
            <Text style={styles.no_search}>
              You didnt search anything up to now. Let's try!
            </Text>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Search;
