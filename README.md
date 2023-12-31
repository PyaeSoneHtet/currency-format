# rn-format-currency

Format currency and account number in React Native

![Screen Recording 2023-10-22 at 2 56 59 PM](https://github.com/PyaeSoneHtet/currency-format/assets/40881760/665be875-d937-4eb2-9f8b-35b3642933df)

## npm
https://www.npmjs.com/package/rn-format-currency?activeTab=readme

## Installation

### Via npm
```sh
npm install rn-format-currency
```
### Via yarn
```sh
yarn install rn-format-currency
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
        <Text style={styles.value}>
          {formatCurrency({amount: '23000.3432', prefix: '$', code: 'USD'})}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Account Number</Text>
        <Text style={styles.value}>
          {formatAccountNumber(3443435324535543)}
        </Text>
      </View>
      <TextInput
        value={value}
        onChangeText={_value =>
          setValue(
            formatCurrencyInput({value: _value, decimal: 5, maxLength: 22}),
          )
        } //Format currency in TextInput
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
## Props

### formatCurrency props
```js
const fcurrency = formatCurrency({amount: '23000.3432', prefix: '$', code: 'USD'})
```
| Props | Type  | Default  |  Description |
| ------- | --- | --- | ----------- |
| amount | string | none |  '10000.00' |
| perfix | string | none | '$', '€' or '' |
| code | string | none | 'USD', 'EURO' or '' |

### formatAccountNumber props
```js
const fAccountNumber = formatAccountNumber(3443435324535543)
```
### formatCurrencyInput props
```js
const fcurrency = formatCurrencyInput({value: _value, decimal: 5, maxLength: 22})
```
| Props | Type  | Default  |  Description |
| ------- | --- | --- | ----------- |
| value | string | none |  '10000.00' |
| decimal | number | none | 0, 1, 2, 3 |
| maxLength | number | none | 0, 1, 2,....,20 |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
