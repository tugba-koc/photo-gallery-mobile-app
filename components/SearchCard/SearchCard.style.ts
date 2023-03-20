import {StyleSheet} from 'react-native';

export default StyleSheet.create({
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
    flex: 1,
    padding: 6,
  },
  title: {
    fontWeight: '500',
    fontSize: 14,
    marginTop: 5,
  },
  sub_description: {
    flexDirection: 'row',
    columnGap: 12,
    marginTop: 4,
  },
  score_container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 3,
  },
  score: {
    fontSize: 12,
  },
  num_comment: {
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  amount: {
    fontSize: 14,
    marginTop: 4,
    color: '#fa8c16',
    fontWeight: '600',
  },
});
