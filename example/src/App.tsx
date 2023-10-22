import * as React from 'react';

import { StyleSheet, View, Text, TextInput } from 'react-native';
import {
  formatCurrencyInput,
  formatCurrency,
  formatAccountNumber,
} from 'react-native-currency_formater';

export default function App() {
  const [value, setValue] = React.useState<string>('');

  React.useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text>{formatCurrency('0.2333')}</Text>
      <Text>{formatAccountNumber(3443435324535543)}</Text>
      <TextInput
        value={value}
        onChangeText={(_value) => setValue(formatCurrencyInput(_value, 3))}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    marginHorizontal: 20,
    padding: 10,
  },
});
