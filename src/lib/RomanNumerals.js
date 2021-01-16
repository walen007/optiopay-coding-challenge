// ES6 object literal
const RomanNumerals = {
  constants: {
    UNITS: 'Units',
    TENS: 'Tens',
    HUNDREDS: 'Hundreds',
    THOUSANDS: 'Thousands',
  },

  get values() {
    return Object.values(this.constants);
  },

  numerals: { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 },

  _generate(num, idx) {
    const group = { 0: 'IVX', 1: 'XLC', 2: 'CDM' };
    const roman = group[idx];
    switch (num) {
      case 1:
        return roman[0];
      case 2:
        return roman[0].repeat(2);
      case 3:
        return roman[0].repeat(3);
      case 4:
        return roman[0] + roman[1];
      case 5:
        return roman[1];
      case 6:
        return roman[1] + roman[0];
      case 7:
        return roman[1] + roman[0].repeat(2);
      case 8:
        return roman[1] + roman[0].repeat(3);
      case 9:
        return roman[0] + roman[2];
      default:
        return '';
    }
  },

  toRoman(number) {
    const regx = /[^0-9]/g;
    if (number < 1 || number > 4999)
      return 'Only numbers between 1-4999 are supported.';
    if (typeof number !== 'number' || regx.test(number.toString()))
      return 'Please enter only numbers.';

    let result = '';
    let units = number.toString().split('').reverse();

    for (let i = 0; i < units.length; i++) {
      if (units[i] === '0') continue;

      if (i < 3) {
        result = this._generate(+units[i], i) + result;
      } else {
        result = 'M'.repeat(+units[i]) + result;
      }
    }

    return result;
  },

  fromRoman(romanNumeral) {
    const regx = /[^IVXLCDM]/g;
    const roman = romanNumeral.toString().toUpperCase();
    if (regx.test(roman))
      return 'Please enter only valid Roman numbers. Only the following Roman numbers are accepted "IVXLCDM".';

    let result = 0;
    for (let i = 0; i < roman.length; i++) {
      result += this.numerals[roman[i]];

      if (this.numerals[roman[i]] > this.numerals[roman[i - 1]])
        result -= this.numerals[roman[i - 1]] * 2;
    }

    return result;
  },
};

export default RomanNumerals;
