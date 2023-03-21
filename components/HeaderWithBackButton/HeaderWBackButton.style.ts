import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header_container: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    columnGap: 14,
    paddingHorizontal: 20,
  },
  search_section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: bordered => ({
    color: 'black',
    fontWeight: '600',
    width: '100%',
    backgroundColor: bordered === true ? 'white' : '#EAEAEA',
    padding: 14,
    borderRadius: bordered === true ? 20 : 0,
  }),
});
