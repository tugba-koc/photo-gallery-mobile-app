import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    zIndex: 50,
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    fontWeight: '800',
  },
  button: {
    backgroundColor: '#fa8c16',
    padding: 14,
    width: '85%',
    borderRadius: 6,
  },
  amount: {
    color: '#fa8c16',
    fontWeight: '700',
    fontSize: 18,
  },
});
