import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#EAEAEA',
  },
  wrapper: {
    backgroundColor: '#EAEAEA',
    flex: 1,
    paddingHorizontal: 20,
    marginTop: -20,
  },
  last_search_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  last_search: {
    fontSize: 16,
    fontWeight: '600',
  },
  clean: {
    fontSize: 16,
    fontWeight: '600',
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    padding: 8,
    backgroundColor: 'white',
  },
  no_search: {
    fontSize: 16,
    marginTop: 20,
    color: 'grey',
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal_content: {
    backgroundColor: 'rgba(0,0,0,0.4);',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 50,
  },
  modal_view: {
    width: '80%',
    margin: 20,
    backgroundColor: 'white',
    padding: 15,
    /* alignItems: 'center', */
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button_container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    padding: 10,
  },
  text_style: {
    color: '#fa8c16',
    fontWeight: '500',
    textAlign: 'center',
  },
  modal_title: {
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'left',
  },
  modal_text: {
    marginBottom: 15,
    textAlign: 'left',
  },
});
