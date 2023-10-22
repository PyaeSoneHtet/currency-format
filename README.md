# rn-format-currency

Format currency and account number in React Native
![Screen Recording 2023-10-22 at 2 46 57 PM](https://github.com/PyaeSoneHtet/currency-format/assets/40881760/3944f71d-09d1-452e-add9-c73204e899bc)

## Installation

```sh
npm install rn-format-currency
```

## Usage

```js
import * as React from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {
  formatCurrencyInput,
  formatCurrency,
  formatAccountNumber,
} from 'rn-format-currency';

export default function App() {
  const [value, setValue] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Balance</Text>
        <Text style={styles.value}>{formatCurrency('23000.3432')}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Account Number</Text>
        <Text style={styles.value}>
          {formatAccountNumber(3443435324535543)}
        </Text>
      </View>

      <TextInput
        value={value}
        onChangeText={_value => setValue(formatCurrencyInput(_value, 3))} //Format currency in TextInput
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    marginHorizontal: 20,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginRight: 10,
  },
  value: {
    fontSize: 18,
  },
});

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
