import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header_container: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    columnGap: 14,
    paddingHorizontal: 20,
  },
  image_container_style: {
    flex: 1,
    flexDirection: 'column',
    margin: 3,
    marginBottom: 8,
    paddingBottom: 15,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  description: {
    padding: 6,
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    marginTop: 5,
  },
  sub_description: {
    flexDirection: 'row',
    columnGap: 12,
    marginTop: 12,
  },
  score_container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 3,
  },
  score: {
    fontSize: 15,
  },
  num_comment: {
    fontSize: 15,
    textDecorationLine: 'underline',
    paddingLeft: 10,
  },
  author: {
    fontSize: 14,
    marginTop: 18,
    fontWeight: '300',
  },
  item_description_wrapper: {
    marginTop: 16,
    borderRadius: 6,
    backgroundColor: 'white',
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginBottom: 32,
  },
  read_more: {
    marginTop: 14,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
