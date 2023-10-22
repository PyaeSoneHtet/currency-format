# react-native-currency_formater

Currecy format and spacing

## Installation

```sh
npm install react-native-currency_format
```

## Usage

```js
import * as React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import {
  formatCurrencyInput,
  formatCurrency,
  formatAccountNumber,
} from 'react-native-currency_formater';

export default function App() {
  const [value, setValue] = React.useState < string > '';

  return (
    <View style={styles.container}>
      <Text>{formatCurrency('0.2333')}</Text> // Format currency
      <Text>{formatAccountNumber(3443435324535543)}</Text> // Format Account Number
      <TextInput
        value={value}
        onChangeText={(_value) => setValue(formatCurrencyInput(_value, 3))} //Format currency in TextInput
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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
