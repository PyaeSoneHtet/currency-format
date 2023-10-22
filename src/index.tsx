/* eslint-disable no-useless-escape */
export function formatCurrencyInput(
  inputValue: string,
  decimalNum: number
): string {
  let isDecimalExists = decimalNum === 0 ? '' : '.';
  let removeCommaAndOnlyDigit: string = inputValue
    .replace(/[^\d\.]/gi, '')
    .replace(/,/g, '');
  let removeLeadingZeroAndDot: string = removeCommaAndOnlyDigit
    .replace(/^0+/, '')
    .replace(/^\./, '');
  let splitDotArr: any = removeLeadingZeroAndDot.split('.');
  let decimal: string = '';
  if (splitDotArr.length > 1 && splitDotArr[1].length > decimalNum) {
    decimal = isDecimalExists + splitDotArr[1].substring(0, decimalNum);
  } else {
    decimal = splitDotArr.length > 1 ? isDecimalExists + splitDotArr[1] : '';
  }
  let result = splitDotArr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return result + decimal;
}

export function formatCurrency(amount: string): string {
  return Number(amount)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

export function formatAccountNumber(digit: number): string {
  let spacingDigit: RegExpMatchArray | null = digit.toString().match(/.{1,4}/g);
  if (!spacingDigit) {
    return '';
  }
  return spacingDigit.join('   ');
}
