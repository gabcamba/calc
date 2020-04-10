import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
  },
  calculation: {
    backgroundColor: '#151515',
    flex: 1.5,
    justifyContent: 'center'
  },
  result: {
    backgroundColor: '#171717',
    flex: 1.5,
    justifyContent: 'center',
  },
  buttons: {
    flex: 5,
    // flexGrow: 1,
    flexDirection: 'row',
  },
  numbers: {
    flexDirection: 'row',
    flex: 8,
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignContent: 'center',
    borderRadius: 30,
  },
  typedText: {
    fontSize: 60,
    color: 'white',
    alignSelf: 'flex-end',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  resultText: {
    fontSize: 80,
    color: '#18bbc2',
    alignSelf: 'flex-end',
  },
  row: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  rowItem: {
    color: 'white',
    fontSize: 35,
    // justifyContent: 'center',
    alignSelf: 'center',
  },
  opsItem: {
    color: '#18bbc2',
    fontSize: 35,
    // justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default styles;
