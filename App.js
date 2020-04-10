import React from 'react';
import {Text, View, TouchableOpacity, StatusBar} from 'react-native';
import styles from './styles';
import Actions from './actions';

const App = () => {
  let {handleOperation, value, result} = Actions();

  let rows = [['c', 7, 4, 1, '+/-'], ['%', 8, 5, 2, 0], ['÷', 9, 6, 3, '.']];
  let ops = [['⌫', '×', '-', '+', '=']];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'black'} barStyle="light-content" />
      <View style={styles.calculation}>
        <Text style={styles.typedText}>{value}</Text>
      </View>
      <View style={styles.result}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          {rows.map(row => (
            <View style={styles.row}>
              {row.map(rowItem => (
                <TouchableOpacity onPress={() => handleOperation(rowItem)}>
                  <View
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      width: 90,
                      height: 90,
                      backgroundColor: '#151515',
                      borderRadius: 50,
                      justifyContent: 'space-around',
                    }}>
                    <Text style={styles.rowItem}>{rowItem}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ))}
          {ops.map(row => (
            <View style={styles.row}>
              {row.map((rowItem, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleOperation(rowItem)}>
                  <View
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      width: 90,
                      height: 90,
                      backgroundColor: '#151515',
                      borderRadius: 50,
                      justifyContent: 'space-around',
                    }}>
                    <Text style={styles.opsItem}>{rowItem}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default App;
